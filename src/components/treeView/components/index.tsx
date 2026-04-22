import { FC, MouseEvent, useCallback } from "react";

import { getClassName, isNotNullish } from "@bodynarf/utils";

import CheckBox from "@bbr/components/primitives/checkbox";

import { Icon, TreeNode, TreeViewCheckboxConfig } from "../..";

// ─── Aggregate checkbox state ─────────────────────────────────────────────────

type CheckState = { checked: boolean; indeterminate: boolean; };

/**
 * Computes the visual checkbox state for a node based on the selection state
 * of all its non-disabled descendants.
 *
 * - Leaf node: mirrors `selectedIds.has(node.id)`.
 * - Parent node:
 *   - all non-disabled descendants selected   → checked
 *   - no  non-disabled descendants selected   → unchecked
 *   - some non-disabled descendants selected  → indeterminate
 */
function computeCheckState(node: TreeNode, selectedIds: Set<string>): CheckState {
    if (!node.children?.length) {
        return { checked: selectedIds.has(node.id), indeterminate: false };
    }

    let total = 0;
    let selectedCount = 0;

    function walk(list: TreeNode[]): void {
        for (const n of list) {
            if (!n.disabled) {
                total++;

                if (selectedIds.has(n.id)) {
                    selectedCount++;
                }
            }

            if (n.children?.length) {
                walk(n.children);
            }
        }
    }

    walk(node.children);

    if (total === 0) {
        return { checked: selectedIds.has(node.id), indeterminate: false };
    }

    if (selectedCount === total) { return { checked: true, indeterminate: false }; }
    if (selectedCount === 0) { return { checked: false, indeterminate: false }; }

    return { checked: false, indeterminate: true };
}

// ─────────────────────────────────────────────────────────────────────────────

/** Props for {@link TreeNodeItem} - single tree node item */
type TreeNodeItemProps = {
    /** The tree node data */
    node: TreeNode;

    /** The depth of the node in the tree */
    depth: number;

    /** Set of expanded node IDs */
    expandedIds: Set<string>;

    /** Set of selected node IDs */
    selectedIds: Set<string>;

    /** ID of the currently focused node */
    focusedId: string | undefined;

    /** Whether multiple nodes can be selected */
    multiSelect: boolean;

    /** Whether checkboxes are shown */
    showCheckboxes: boolean;

    /** Configuration for checkboxes */
    checkboxConfig: TreeViewCheckboxConfig | undefined;

    /** Called with (id, ctrlKey, shiftKey) */
    onToggleExpand: (id: string, expanded: boolean) => void;

    /** Called with (id, shiftKey) */
    onSelect: (id: string, shiftKey: boolean) => void;
};

/** Renders a single tree node with its children */
const TreeNodeItem: FC<TreeNodeItemProps> = ({
    node,
    depth,
    expandedIds,
    selectedIds,
    focusedId,
    multiSelect,
    showCheckboxes,
    checkboxConfig,
    onToggleExpand,
    onSelect,
}) => {
    const isExpanded = expandedIds.has(node.id);
    const isSelected = selectedIds.has(node.id);
    const isFocused = node.id === focusedId;
    const hasChildren = isNotNullish(node.children) && node.children!.length > 0;
    const useCheckboxes = showCheckboxes || isNotNullish(checkboxConfig);

    const checkState = useCheckboxes ? computeCheckState(node, selectedIds) : undefined;

    // Expand/collapse — stop propagation so the row click is not triggered
    const handleToggle = useCallback((e: MouseEvent) => {
        if (!hasChildren) {
            return;
        }

        e.stopPropagation();
        onToggleExpand(node.id, !isExpanded);
    }, [hasChildren, node.id, isExpanded, onToggleExpand]);

    // Row click — carries Shift state
    const handleRowClick = useCallback((e: MouseEvent) => {
        if (node.disabled) {
            return;
        }

        onSelect(node.id, e.shiftKey);
    }, [node.id, node.disabled, onSelect]);

    // BBR Checkbox change — plain toggle, no range/multi modifier
    const handleCheckboxChange = useCallback(() => {
        if (node.disabled) {
            return;
        }

        onSelect(node.id, false);
    }, [node.id, node.disabled, onSelect]);

    const rowClassName = getClassName([
        "bbr-tree-view__node",
        isSelected ? "is-active" : "",
        isFocused ? "bbr-tree-view__node--focused" : "",
        node.disabled ? "bbr-tree-view__node--disabled" : "is-clickable",
    ]);

    return (
        <li className="bbr-tree-view__item">
            <div
                className={rowClassName}
                onClick={handleRowClick}
                style={{ paddingLeft: `${depth * 1.25 + 0.5}rem` }}
            >
                {/* Expand toggle */}
                <span
                    onClick={hasChildren ? handleToggle : undefined}
                    className={getClassName([
                        "bbr-tree-view__toggle",
                        hasChildren ? "is-clickable" : "bbr-tree-view__toggle--leaf",
                    ])}
                >
                    {hasChildren ? (
                        <Icon
                            className="bbr-tree-view__icon"
                            name={`chevron-${isExpanded ? "down" : "right"}`}
                        />
                    ) : null}
                </span>

                {/* BBR Checkbox — stop propagation so row click is not double-fired */}
                {useCheckboxes ? (
                    <span
                        onClick={e => e.stopPropagation()}
                        className="bbr-tree-view__checkbox-wrapper"
                    >
                        <CheckBox
                            disabled={node.disabled}
                            size={checkboxConfig?.size}
                            style={checkboxConfig?.style}
                            checked={checkState!.checked}
                            rounded={checkboxConfig?.rounded}
                            onValueChange={handleCheckboxChange}
                            indeterminate={checkState!.indeterminate}
                            hasBackgroundColor={checkboxConfig?.hasBackgroundColor}
                            fixBackgroundColor={checkboxConfig?.fixBackgroundColor}
                        />
                    </span>
                ) : null}

                {/* Node icon */}
                {isNotNullish(node.icon) ? (
                    <Icon
                        name={node.icon}
                        className="bbr-tree-view__icon"
                    />
                ) : null}

                {/* Label */}
                <span className="bbr-tree-view__label">
                    {node.label}
                </span>
            </div>

            {/* Children */}
            {hasChildren && isExpanded ? (
                <ul className="bbr-tree-view__children">
                    {node.children!.map(child => (
                        <TreeNodeItem
                            key={child.id}

                            node={child}
                            depth={depth + 1}
                            onSelect={onSelect}
                            focusedId={focusedId}
                            expandedIds={expandedIds}
                            selectedIds={selectedIds}
                            multiSelect={multiSelect}
                            checkboxConfig={checkboxConfig}
                            showCheckboxes={showCheckboxes}
                            onToggleExpand={onToggleExpand}
                        />
                    ))}
                </ul>
            ) : null}
        </li>
    );
};

export default TreeNodeItem;

