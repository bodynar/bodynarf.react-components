import { FC, useState, SetStateAction, Dispatch } from "react";

import TreeView from "@bodynarf/react.components/components/treeView";
import { ElementColor, TreeNode } from "@bodynarf/react.components";

// ─── Data ─────────────────────────────────────────────────────────────────────

const FILE_TREE: TreeNode[] = [
    {
        id: "src",
        label: "src",
        icon: "folder2",
        children: [
            {
                id: "components",
                label: "components",
                icon: "folder2",
                children: [
                    { id: "button",  label: "Button.tsx",  icon: "filetype-tsx" },
                    { id: "modal",   label: "Modal.tsx",   icon: "filetype-tsx" },
                    { id: "input",   label: "Input.tsx",   icon: "filetype-tsx" },
                ],
            },
            {
                id: "hooks",
                label: "hooks",
                icon: "folder2",
                children: [
                    { id: "useAuth",   label: "useAuth.ts",   icon: "filetype-ts" },
                    { id: "useTheme",  label: "useTheme.ts",  icon: "filetype-ts" },
                ],
            },
            { id: "index",  label: "index.ts",  icon: "filetype-ts" },
            { id: "appTsx", label: "App.tsx",    icon: "filetype-tsx" },
        ],
    },
    {
        id: "public",
        label: "public",
        icon: "folder2",
        children: [
            { id: "indexHtml", label: "index.html" },
            { id: "favicon",   label: "favicon.ico" },
        ],
    },
    { id: "packageJson", label: "package.json" },
    { id: "readme",      label: "README.md", disabled: true },
];

const ORG_TREE: TreeNode[] = [
    {
        id: "engineering",
        label: "Engineering",
        icon: "cpu",
        children: [
            {
                id: "frontend",
                label: "Frontend",
                icon: "window",
                children: [
                    { id: "alice",  label: "Alice Johnson" },
                    { id: "bob",    label: "Bob Smith"     },
                ],
            },
            {
                id: "backend",
                label: "Backend",
                icon: "server",
                children: [
                    { id: "carol", label: "Carol White" },
                    { id: "dave",  label: "Dave Brown"  },
                ],
            },
        ],
    },
    {
        id: "design",
        label: "Design",
        icon: "palette",
        children: [
            { id: "eve",   label: "Eve Davis"  },
            { id: "frank", label: "Frank Lee"  },
        ],
    },
];

/** All TreeView component variations */
const TreeViewExamples: FC = () => {
    // Single select
    const [singleSelected, setSingleSelected] = useState<Set<string>>(new Set());
    const [singleExpanded, setSingleExpanded] = useState<Set<string>>(new Set(["src"]));

    // Multi select
    const [multiSelected, setMultiSelected] = useState<Set<string>>(new Set(["alice", "bob"]));
    const [multiExpanded, setMultiExpanded] = useState<Set<string>>(new Set(["engineering", "frontend"]));

    // Checkboxes
    const [checkSelected, setCheckSelected] = useState<Set<string>>(new Set());
    const [checkExpanded, setCheckExpanded] = useState<Set<string>>(new Set(["src", "components"]));

    // Colors
    const [colorSelected, setColorSelected] = useState<Set<string>>(new Set(["alice"]));
    const [colorExpanded, setColorExpanded] = useState<Set<string>>(new Set(["engineering", "frontend"]));
    const [selectionColor, setSelectionColor] = useState<ElementColor>(ElementColor.Primary);

    // Generic toggle-expand handler factory
    const makeExpandHandler = (setter: Dispatch<SetStateAction<Set<string>>>) =>
        (id: string, expanded: boolean) => setter(prev => {
            const next = new Set(prev);
            if (expanded) next.add(id); else next.delete(id);
            return next;
        });

    // Generic single-select handler
    const makeSingleSelectHandler = (setter: Dispatch<SetStateAction<Set<string>>>) =>
        (id: string, selected: boolean) => setter(selected ? new Set([id]) : new Set());

    // Generic multi-select handler
    const makeMultiSelectHandler = (setter: Dispatch<SetStateAction<Set<string>>>) =>
        (id: string, selected: boolean) => setter(prev => {
            const next = new Set(prev);
            if (selected) next.add(id); else next.delete(id);
            return next;
        });

    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-3">TreeView</h1>

                {/* Single select */}
                <div className="box">
                    <p className="subtitle is-5">Single select</p>
                    <p className="help mb-4">Click a node to select it. "README.md" is disabled.</p>
                    <div className="columns">
                        <div className="column is-6">
                            <TreeView
                                nodes={FILE_TREE}
                                expandedIds={singleExpanded}
                                selectedIds={singleSelected}
                                onToggleExpand={makeExpandHandler(setSingleExpanded)}
                                onSelect={makeSingleSelectHandler(setSingleSelected)}
                            />
                        </div>
                        <div className="column">
                            <p className="help">Selected: <strong>{[...singleSelected].join(", ") || "none"}</strong></p>
                        </div>
                    </div>
                </div>

                {/* Multi select */}
                <div className="box">
                    <p className="subtitle is-5">Multi-select</p>
                    <p className="help mb-4"><code>multiSelect</code> — hold Ctrl / Cmd or just click multiple nodes.</p>
                    <div className="columns">
                        <div className="column is-6">
                            <TreeView
                                nodes={ORG_TREE}
                                expandedIds={multiExpanded}
                                selectedIds={multiSelected}
                                multiSelect
                                onToggleExpand={makeExpandHandler(setMultiExpanded)}
                                onSelect={makeMultiSelectHandler(setMultiSelected)}
                            />
                        </div>
                        <div className="column">
                            <p className="help">Selected: <strong>{[...multiSelected].join(", ") || "none"}</strong></p>
                        </div>
                    </div>
                </div>

                {/* Checkboxes */}
                <div className="box">
                    <p className="subtitle is-5">Checkboxes</p>
                    <p className="help mb-4"><code>showCheckboxes</code> renders a checkbox next to every node.</p>
                    <div className="columns">
                        <div className="column is-6">
                            <TreeView
                                nodes={FILE_TREE}
                                expandedIds={checkExpanded}
                                selectedIds={checkSelected}
                                showCheckboxes
                                multiSelect
                                onToggleExpand={makeExpandHandler(setCheckExpanded)}
                                onSelect={makeMultiSelectHandler(setCheckSelected)}
                            />
                        </div>
                        <div className="column">
                            <p className="help">Selected: <strong>{[...checkSelected].join(", ") || "none"}</strong></p>
                        </div>
                    </div>
                </div>

                {/* Selection colors */}
                <div className="box">
                    <p className="subtitle is-5">selectionColor variants</p>
                    <div className="buttons mb-3">
                        {([
                            ElementColor.Primary,
                            ElementColor.Link,
                            ElementColor.Info,
                            ElementColor.Success,
                            ElementColor.Warning,
                            ElementColor.Danger,
                        ] as const).map(c => (
                            <button
                                key={c}
                                type="button"
                                className={`button is-small ${selectionColor === c ? "is-primary" : "is-light"}`}
                                onClick={() => setSelectionColor(c)}
                            >
                                {c}
                            </button>
                        ))}
                    </div>
                    <div style={{ maxWidth: 280 }}>
                        <TreeView
                            nodes={ORG_TREE}
                            expandedIds={colorExpanded}
                            selectedIds={colorSelected}
                            selectionColor={selectionColor}
                            onToggleExpand={makeExpandHandler(setColorExpanded)}
                            onSelect={makeSingleSelectHandler(setColorSelected)}
                        />
                    </div>
                </div>

                {/* Uncontrolled (no handlers) */}
                <div className="box">
                    <p className="subtitle is-5">Read-only (no callbacks)</p>
                    <p className="help mb-4">Nodes expand/collapse but selection is not tracked externally.</p>
                    <div style={{ maxWidth: 280 }}>
                        <TreeView
                            nodes={FILE_TREE}
                            expandedIds={new Set(["src", "hooks"])}
                            selectedIds={new Set(["useAuth"])}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TreeViewExamples;
