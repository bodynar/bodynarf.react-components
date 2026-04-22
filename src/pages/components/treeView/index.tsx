import { FC, useRef, useState } from "react";

import { TreeView as TreeViewComponent, TreeNode, ElementColor, TreeViewCheckboxConfig } from "@bodynarf/react.components";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";
import Log, { LogRef } from "@app/sharedComponents/log";

const sampleNodes: TreeNode[] = [
    {
        id: "src",
        label: "src",
        icon: "folder",
        children: [
            {
                id: "components",
                label: "components",
                icon: "folder",
                children: [
                    { id: "button", label: "Button.tsx", icon: "file-earmark-code" },
                    { id: "input", label: "Input.tsx", icon: "file-earmark-code" },
                ]
            },
            { id: "main", label: "main.tsx", icon: "file-earmark-code" },
        ]
    },
    {
        id: "public",
        label: "public",
        icon: "folder",
        children: [
            { id: "index", label: "index.html", icon: "file-earmark" },
        ]
    },
];

const nodesWithDisabled: TreeNode[] = [
    {
        id: "d-src",
        label: "src",
        icon: "folder",
        children: [
            { id: "d-button", label: "Button.tsx", icon: "file-earmark-code" },
            { id: "d-input", label: "Input.tsx", icon: "file-earmark-code", disabled: true },
            { id: "d-main", label: "main.tsx", icon: "file-earmark-code" },
        ]
    },
    {
        id: "d-locked",
        label: "locked (disabled folder)",
        icon: "lock",
        disabled: true,
        children: [
            { id: "d-secret", label: "secret.ts", icon: "file-earmark-lock" },
        ]
    },
];

/** TreeView component demo */
const TreeView: FC = () => {
    const onSelectLogRef = useRef<LogRef>(null);
    const selectedIdsLogRef = useRef<LogRef>(null);
    const multiSelectLogRef = useRef<LogRef>(null);
    const expandedIdsLogRef = useRef<LogRef>(null);
    const onToggleLogRef = useRef<LogRef>(null);

    const [selectedId, setSelectedId] = useState<string | undefined>();
    const [multiSelected, setMultiSelected] = useState<Set<string>>(new Set());
    const [expanded, setExpanded] = useState<Set<string>>(new Set(["src"]));

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="TreeView"
                version="1.15"
                baseTypeName="BaseElementProps"
                description="Hierarchical tree component for displaying nested data (file explorers, org charts, category trees). Supports expand/collapse, selection and keyboard navigation."
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Pass nodes. Expand/collapse is managed internally."
                code={
                    <CodeExample
                        code={[
                            `import { TreeView, TreeNode } from "@bodynarf/react.components";`,
                            "",
                            `const nodes: TreeNode[] = [`,
                            `    { id: "1", label: "Root", icon: "folder", children: [`,
                            `        { id: "1-1", label: "child.ts", icon: "file-earmark-code" },`,
                            `    ]},`,
                            `];`,
                            "",
                            `<TreeView nodes={nodes} />`,
                        ].join("\n")}
                    />
                }
            >
                <TreeViewComponent nodes={sampleNodes} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onSelect"
                description="Called when a node is selected or deselected. Receives the node id and the new selected state."
                code={
                    <CodeExample
                        code={[
                            `import { TreeView } from "@bodynarf/react.components";`,
                            "",
                            `<TreeView`,
                            `    nodes={nodes}`,
                            `    onSelect={(id, selected) => console.log(id, selected)}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <TreeViewComponent
                        nodes={sampleNodes}
                        onSelect={(id, selected) =>
                            onSelectLogRef.current?.append(`id="${id}", selected=${selected}`)
                        }
                    />
                    <Log ref={onSelectLogRef} />
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="selectedIds"
                description="Controlled set of selected node ids. Pass a Set of ids to highlight the corresponding nodes."
                code={
                    <CodeExample
                        code={[
                            `import { TreeView } from "@bodynarf/react.components";`,
                            "",
                            `const [selectedId, setSelectedId] = useState<string>();`,
                            "",
                            `<TreeView`,
                            `    nodes={nodes}`,
                            `    selectedIds={selectedId ? new Set([selectedId]) : new Set()}`,
                            `    onSelect={(id, selected) => setSelectedId(selected ? id : undefined)}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <TreeViewComponent
                        nodes={sampleNodes}
                        selectedIds={selectedId ? new Set([selectedId]) : new Set()}
                        onSelect={(id, selected) => {
                            setSelectedId(selected ? id : undefined);
                            selectedIdsLogRef.current?.append(`id="${id}", selected=${selected}`);
                        }}
                    />
                    <p className="mt-1 has-text-grey">Selected: {selectedId ?? "none"}</p>
                    <Log ref={selectedIdsLogRef} />
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="multiSelect"
                description="Allow selecting multiple nodes simultaneously. Ctrl+Click toggles individual nodes; Shift+Click performs a range selection."
                code={
                    <CodeExample
                        code={[
                            `import { TreeView } from "@bodynarf/react.components";`,
                            "",
                            `const [selected, setSelected] = useState<Set<string>>(new Set());`,
                            "",
                            `<TreeView`,
                            `    nodes={nodes}`,
                            `    multiSelect`,
                            `    selectedIds={selected}`,
                            `    onSelect={(id, sel) => {`,
                            `        setSelected(prev => {`,
                            `            const next = new Set(prev);`,
                            `            if (sel) next.add(id); else next.delete(id);`,
                            `            return next;`,
                            `        });`,
                            `    }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <TreeViewComponent
                        nodes={sampleNodes}
                        multiSelect
                        selectedIds={multiSelected}
                        onSelect={(id, sel) => {
                            setMultiSelected(prev => {
                                const next = new Set(prev);
                                if (sel) next.add(id); else next.delete(id);
                                return next;
                            });
                            multiSelectLogRef.current?.append(`id="${id}", selected=${sel}`);
                        }}
                    />
                    <p className="mt-1 has-text-grey">Selected: {[...multiSelected].join(", ") || "none"}</p>
                    <Log ref={multiSelectLogRef} />
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="showCheckboxes"
                description="Renders a checkbox next to each node label. Recommended together with multiSelect."
                code={
                    <CodeExample
                        code={[
                            `import { TreeView } from "@bodynarf/react.components";`,
                            "",
                            `<TreeView`,
                            `    nodes={nodes}`,
                            `    multiSelect`,
                            `    showCheckboxes`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <TreeViewComponent
                    nodes={sampleNodes}
                    multiSelect
                    showCheckboxes
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="checkboxConfig"
                description={
                    <>
                        Optional styling configuration for the checkbox rendered in each node.
                        Providing this prop shows checkboxes automatically regardless of <code>showCheckboxes</code>.
                        Supports: <code>style</code>, <code>rounded</code>, <code>size</code>, <code>hasBackgroundColor</code>, <code>fixBackgroundColor</code>.
                    </>
                }
                code={
                    <CodeExample
                        code={[
                            `import { TreeView, ElementColor, TreeViewCheckboxConfig } from "@bodynarf/react.components";`,
                            "",
                            `const config: TreeViewCheckboxConfig = {`,
                            `    style: ElementColor.Success,`,
                            `    rounded: true,`,
                            `    hasBackgroundColor: true,`,
                            `    fixBackgroundColor: true,`,
                            `};`,
                            "",
                            `<TreeView nodes={nodes} multiSelect checkboxConfig={config} />`,
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "32px", flexWrap: "wrap", alignItems: "flex-start" }}>
                    <div>
                        <p className="mb-2 is-italic has-text-grey is-size-7">Default</p>
                        <TreeViewComponent
                            nodes={sampleNodes}
                            multiSelect
                            checkboxConfig={{} satisfies TreeViewCheckboxConfig}
                        />
                    </div>
                    <div>
                        <p className="mb-2 is-italic has-text-grey is-size-7">style + hasBackgroundColor</p>
                        <TreeViewComponent
                            nodes={sampleNodes}
                            multiSelect
                            checkboxConfig={{ style: ElementColor.Primary, hasBackgroundColor: true }}
                        />
                    </div>
                    <div>
                        <p className="mb-2 is-italic has-text-grey is-size-7">rounded + fixBackgroundColor</p>
                        <TreeViewComponent
                            nodes={sampleNodes}
                            multiSelect
                            checkboxConfig={{ style: ElementColor.Success, rounded: true, hasBackgroundColor: true, fixBackgroundColor: true }}
                        />
                    </div>
                </div>
            </ComponentUseCase>

            <ComponentColorCase
                captionIsCode
                caption="selectionColor"
                description="Accent color used for the selected-node highlight. Defaults to ElementColor.Link (blue)."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { TreeView, ElementColor } from "@bodynarf/react.components";`,
                            "",
                            `<TreeView`,
                            `    nodes={nodes}`,
                            `    selectionColor={ElementColor.${id}}`,
                            `    selectedIds={new Set(["main"])}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
                componentProvider={color =>
                    <TreeViewComponent
                        nodes={sampleNodes}
                        selectionColor={color}
                        selectedIds={new Set(["main"])}
                    />
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="expandedIds"
                description="Controlled set of expanded node ids. When provided the component is fully controlled — you must update the set via onToggleExpand."
                code={
                    <CodeExample
                        code={[
                            `import { TreeView } from "@bodynarf/react.components";`,
                            "",
                            `const [expanded, setExpanded] = useState(new Set(["src"]));`,
                            "",
                            `<TreeView`,
                            `    nodes={nodes}`,
                            `    expandedIds={expanded}`,
                            `    onToggleExpand={(id, isExpanded) => {`,
                            `        setExpanded(prev => {`,
                            `            const next = new Set(prev);`,
                            `            if (isExpanded) next.add(id); else next.delete(id);`,
                            `            return next;`,
                            `        });`,
                            `    }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <TreeViewComponent
                        nodes={sampleNodes}
                        expandedIds={expanded}
                        onToggleExpand={(id, isExpanded) => {
                            setExpanded(prev => {
                                const next = new Set(prev);
                                if (isExpanded) next.add(id); else next.delete(id);
                                return next;
                            });
                            expandedIdsLogRef.current?.append(`id="${id}", expanded=${isExpanded}`);
                        }}
                    />
                    <p className="mt-1 has-text-grey">Expanded: {[...expanded].join(", ") || "none"}</p>
                    <Log ref={expandedIdsLogRef} />
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onToggleExpand"
                description="Called when a node is expanded or collapsed. Receives the node id and the new expanded state. Can be used without expandedIds (uncontrolled) just to listen for changes."
                code={
                    <CodeExample
                        code={[
                            `import { TreeView } from "@bodynarf/react.components";`,
                            "",
                            `<TreeView`,
                            `    nodes={nodes}`,
                            `    onToggleExpand={(id, expanded) => console.log(id, expanded)}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <TreeViewComponent
                        nodes={sampleNodes}
                        onToggleExpand={(id, isExpanded) =>
                            onToggleLogRef.current?.append(`id="${id}", expanded=${isExpanded}`)
                        }
                    />
                    <Log ref={onToggleLogRef} />
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="disabled"
                description="Setting disabled on a TreeNode prevents selection and keyboard interaction for that node. Can be set independently on any node in the tree."
                code={
                    <CodeExample
                        code={[
                            `import { TreeView, TreeNode } from "@bodynarf/react.components";`,
                            "",
                            `const nodes: TreeNode[] = [`,
                            `    {`,
                            `        id: "src", label: "src", icon: "folder",`,
                            `        children: [`,
                            `            { id: "a", label: "active.ts", icon: "file-earmark-code" },`,
                            `            { id: "b", label: "disabled.ts", icon: "file-earmark-code", disabled: true },`,
                            `        ],`,
                            `    },`,
                            `    { id: "locked", label: "locked folder", icon: "lock", disabled: true, children: [...] },`,
                            `];`,
                            "",
                            `<TreeView nodes={nodes} />`,
                        ].join("\n")}
                    />
                }
            >
                <TreeViewComponent nodes={nodesWithDisabled} />
            </ComponentUseCase>
        </section>
    );
};

export default TreeView;
