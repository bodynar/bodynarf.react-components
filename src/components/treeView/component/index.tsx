import { FC, FocusEvent, KeyboardEvent, useCallback, useMemo, useRef, useState } from "react";

import { getClassName } from "@bodynarf/utils";

import { getElementColorClassName, mapDataAttributes } from "@bbr/utils";

import "./style.scss";

import { TreeNode, TreeViewProps } from "..";
import TreeNodeItem from "../components";

// ─── Flat-visible list ────────────────────────────────────────────────────────

type FlatEntry = {
    id: string;
    parentId: string | undefined;
    hasChildren: boolean;
    disabled: boolean;
};

function buildFlatVisible(
    nodes: TreeNode[],
    expandedIds: Set<string>,
    parentId: string | undefined = undefined,
    acc: FlatEntry[] = [],
): FlatEntry[] {
    for (const node of nodes) {
        const hasChildren = (node.children?.length ?? 0) > 0;
        acc.push({ id: node.id, parentId, hasChildren, disabled: node.disabled ?? false });

        if (hasChildren && expandedIds.has(node.id)) {
            buildFlatVisible(node.children!, expandedIds, node.id, acc);
        }
    }

    return acc;
}

// ─── All-descendants helper ───────────────────────────────────────────────────

/** Returns IDs of all non-disabled descendants of `targetId` in the full tree. */
function getAllDescendantIds(nodes: TreeNode[], targetId: string): string[] {
    const result: string[] = [];

    function collectNonDisabled(nodeList: TreeNode[]): void {
        for (const node of nodeList) {
            if (!node.disabled) {
                result.push(node.id);
            }

            if (node.children?.length) {
                collectNonDisabled(node.children);
            }
        }
    }

    function find(nodeList: TreeNode[]): boolean {
        for (const node of nodeList) {
            if (node.id === targetId) {
                collectNonDisabled(node.children ?? []);

                return true;
            }

            if (node.children?.length && find(node.children)) {
                return true;
            }
        }

        return false;
    }

    find(nodes);

    return result;
}

// ─────────────────────────────────────────────────────────────────────────────

const emptySet = new Set<string>();

/** Hierarchical tree view with expand/collapse and selection support */
const TreeView: FC<TreeViewProps> = ({
    nodes,
    expandedIds: controlledExpanded,
    selectedIds: controlledSelected,
    multiSelect = false,
    showCheckboxes = false,
    checkboxConfig,
    selectionColor,
    onToggleExpand,
    onSelect,

    className, title, data,
}) => {
    const [internalExpanded, setInternalExpanded] = useState<Set<string>>(emptySet);
    const [internalSelected, setInternalSelected] = useState<Set<string>>(emptySet);
    const [focusedId, setFocusedId] = useState<string | undefined>(undefined);
    const [lastSelectedId, setLastSelectedId] = useState<string | undefined>(undefined);

    const containerRef = useRef<HTMLDivElement>(null);

    const isControlledExpand = controlledExpanded !== undefined;
    const isControlledSelect = controlledSelected !== undefined;

    const expandedIds = isControlledExpand ? controlledExpanded! : internalExpanded;
    const selectedIds = isControlledSelect ? controlledSelected! : internalSelected;

    const flatVisible = useMemo(
        () => buildFlatVisible(nodes, expandedIds),
        [nodes, expandedIds],
    );

    // ── Expand/collapse ────────────────────────────────────────────────────────

    const handleToggleExpand = useCallback((id: string, expanded: boolean) => {
        if (!isControlledExpand) {
            setInternalExpanded(prev => {
                const next = new Set(prev);
                if (expanded) {
                    next.add(id);
                } else {
                    next.delete(id);
                }

                return next;
            });
        }

        onToggleExpand?.(id, expanded);
    }, [isControlledExpand, onToggleExpand]);

    // ── Selection with Shift modifier ─────────────────────────────────────────

    const handleSelectWithModifiers = useCallback((
        id: string,
        shiftKey: boolean,
    ) => {
        setFocusedId(id);

        if (!multiSelect) {
            // Single-select: toggle clicked node, clear others
            const isNowSelected = !selectedIds.has(id);

            if (!isControlledSelect) {
                setInternalSelected(isNowSelected ? new Set([id]) : emptySet);
            }

            onSelect?.(id, isNowSelected);
            setLastSelectedId(id);

            return;
        }

        // ── multiSelect ──────────────────────────────────────────────────────

        if (shiftKey && lastSelectedId) {
            const fromIdx = flatVisible.findIndex(n => n.id === lastSelectedId);
            const toIdx = flatVisible.findIndex(n => n.id === id);

            if (fromIdx >= 0 && toIdx >= 0) {
                const lo = Math.min(fromIdx, toIdx);
                const hi = Math.max(fromIdx, toIdx);
                const rangeEntries = flatVisible.slice(lo, hi + 1).filter(n => !n.disabled);

                // Include each range node + all its descendants (for parent propagation)
                const allIds = [
                    ...new Set(
                        rangeEntries.flatMap(entry => [
                            entry.id,
                            ...getAllDescendantIds(nodes, entry.id),
                        ]),
                    ),
                ];

                const clickedIsSelected = selectedIds.has(id);

                if (!isControlledSelect) {
                    setInternalSelected(prev => {
                        const next = new Set(prev);

                        if (clickedIsSelected) {
                            // Clicked is already selected → toggle every node in the range
                            allIds.forEach(rid => next.has(rid) ? next.delete(rid) : next.add(rid));
                        } else {
                            // Clicked is not selected → select all in range
                            allIds.forEach(rid => next.add(rid));
                        }

                        return next;
                    });
                }

                if (clickedIsSelected) {
                    allIds.forEach(rid => onSelect?.(rid, !selectedIds.has(rid)));
                } else {
                    allIds.forEach(rid => onSelect?.(rid, true));
                }
            }
            // Anchor (lastSelectedId) stays unchanged on Shift-click
        } else {
            // Plain click: toggle clicked + all its descendants
            const isNowSelected = !selectedIds.has(id);
            const affectedIds = [id, ...getAllDescendantIds(nodes, id)];

            if (!isControlledSelect) {
                setInternalSelected(prev => {
                    const next = new Set(prev);
                    affectedIds.forEach(rid => isNowSelected ? next.add(rid) : next.delete(rid));

                    return next;
                });
            }

            affectedIds.forEach(rid => onSelect?.(rid, isNowSelected));
            setLastSelectedId(id);
        }
    }, [multiSelect, selectedIds, isControlledSelect, lastSelectedId, flatVisible, nodes, onSelect]);

    // ── Keyboard navigation ────────────────────────────────────────────────────

    const handleKeyDown = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
        if (!focusedId) {
            return;
        }

        const idx = flatVisible.findIndex(n => n.id === focusedId);

        if (idx < 0) {
            return;
        }

        const current = flatVisible[idx];

        switch (e.key) {
            case "ArrowDown": {
                e.preventDefault();
                const next = flatVisible.slice(idx + 1).find(n => !n.disabled);

                if (next) { setFocusedId(next.id); }

                break;
            }
            case "ArrowUp": {
                e.preventDefault();
                const prev = [...flatVisible.slice(0, idx)].reverse().find(n => !n.disabled);

                if (prev) { setFocusedId(prev.id); }

                break;
            }
            case "ArrowRight": {
                e.preventDefault();

                if (current.hasChildren && !expandedIds.has(current.id)) {
                    handleToggleExpand(current.id, true);
                } else if (current.hasChildren && expandedIds.has(current.id)) {
                    // Move to first visible child
                    const firstChild = flatVisible[idx + 1];

                    if (firstChild) { setFocusedId(firstChild.id); }
                }

                break;
            }
            case "ArrowLeft": {
                e.preventDefault();

                if (current.hasChildren && expandedIds.has(current.id)) {
                    handleToggleExpand(current.id, false);
                } else if (current.parentId) {
                    setFocusedId(current.parentId);
                }

                break;
            }
            case " ":
            case "Enter": {
                e.preventDefault();

                if (!current.disabled) {
                    handleSelectWithModifiers(current.id, false);
                }

                break;
            }
            default:
                break;
        }
    }, [focusedId, flatVisible, expandedIds, handleToggleExpand, handleSelectWithModifiers]);

    // Only clear focused node when focus truly leaves the tree (not to a child element)
    const handleBlur = useCallback((e: FocusEvent<HTMLDivElement>) => {
        if (!containerRef.current?.contains(e.relatedTarget as Node)) {
            setFocusedId(undefined);
        }
    }, []);

    const dataAttributes = mapDataAttributes(data);

    const elClassName = getClassName([
        "bbr-tree-view",
        className,
        getElementColorClassName(selectionColor),
    ]);

    return (
        <div
            {...dataAttributes}

            tabIndex={0}
            title={title}
            ref={containerRef}
            onBlur={handleBlur}
            className={elClassName}
            onKeyDown={handleKeyDown}
        >
            <ul className="bbr-tree-view__root">
                {nodes.map(node => (
                    <TreeNodeItem
                        key={node.id}

                        depth={0}
                        node={node}
                        focusedId={focusedId}
                        expandedIds={expandedIds}
                        selectedIds={selectedIds}
                        multiSelect={multiSelect}
                        checkboxConfig={checkboxConfig}
                        showCheckboxes={showCheckboxes}
                        onToggleExpand={handleToggleExpand}
                        onSelect={handleSelectWithModifiers}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TreeView;

