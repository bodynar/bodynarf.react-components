import { FC, useCallback, useRef } from "react";

import ContextMenuComponent from "@bodynarf/react.components/components/contextMenu";

import ComponentUseCase from "@app/sharedComponents/useCase";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";
import Log, { LogRef } from "@app/sharedComponents/log";

/** ContextMenu component demo */
const ContextMenu: FC = () => {
    const onClickLogRef = useRef<LogRef>(null);

    const handleClick = useCallback((label: string) => {
        onClickLogRef.current?.append(`clicked: ${label}`);
    }, []);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="ContextMenu"
                version="1.15"
                baseTypeName="BaseElementProps"
                description="Right-click context menu for any element. Rendered via portal into body, auto-flips when near viewport edges. Closes on outside click, Escape or scroll."
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Right-click on the element below to trigger the context menu."
                code={
                    <CodeExample
                        code={[
                            `import ContextMenu from "@bodynarf/react.components/components/contextMenu";`,
                            "",
                            "<ContextMenu",
                            "    items={[",
                            "        { key: \"1\", label: \"Open\", onClick: () => console.log(\"open\") },",
                            "        { key: \"2\", label: \"Copy\" },",
                            "        { key: \"3\", label: \"Delete\" },",
                            "    ]}",
                            ">",
                            "    <div>Right-click me</div>",
                            "</ContextMenu>",
                        ].join("\n")}
                    />
                }
            >
                <ContextMenuComponent
                    items={[
                        { key: "m-1", label: "Open" },
                        { key: "m-2", label: "Copy" },
                        { key: "m-3", label: "Delete" },
                    ]}
                >
                    <div className="box" style={{ cursor: "context-menu" }}>
                        Right-click me
                    </div>
                </ContextMenuComponent>
            </ComponentUseCase>

            <hr />
            <div>
                <h4 className="subtitle is-4 has-text-weight-semibold">Custom component props</h4>
            </div>

            <ComponentUseCase
                captionIsCode
                caption="items"
                description="Array of ContextMenuItem objects to display in the menu. Each item requires a unique key and an optional label, icon, disabled flag and onClick handler."
                code={
                    <CodeExample
                        code={[
                            `import ContextMenu from "@bodynarf/react.components/components/contextMenu";`,
                            "",
                            "<ContextMenu",
                            "    items={[",
                            "        { key: \"1\", label: \"Open\" },",
                            "        { key: \"2\", label: \"Save\" },",
                            "    ]}",
                            ">",
                            "    <div>Right-click me</div>",
                            "</ContextMenu>",
                        ].join("\n")}
                    />
                }
            >
                <ContextMenuComponent
                    items={[
                        { key: "i-1", label: "Open" },
                        { key: "i-2", label: "Save" },
                        { key: "i-3", label: "Close" },
                    ]}
                >
                    <div className="box" style={{ cursor: "context-menu" }}>
                        Right-click me
                    </div>
                </ContextMenuComponent>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="children"
                description="The element that triggers the context menu on right-click. Can be any valid React node."
                code={
                    <CodeExample
                        code={[
                            `import ContextMenu from "@bodynarf/react.components/components/contextMenu";`,
                            "",
                            "<ContextMenu items={items}>",
                            "    <img src=\"/photo.jpg\" alt=\"Photo\" />",
                            "</ContextMenu>",
                        ].join("\n")}
                    />
                }
            >
                <ContextMenuComponent
                    items={[
                        { key: "ch-1", label: "View" },
                        { key: "ch-2", label: "Download" },
                    ]}
                >
                    <div
                        className="box has-background-info-light has-text-centered"
                        style={{ cursor: "context-menu", width: "200px" }}
                    >
                        Right-click this box
                    </div>
                </ContextMenuComponent>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="disabled"
                description="Disable the context menu globally — right-click will not open the menu. Disabled by default."
                code={
                    <CodeExample
                        code={[
                            `import ContextMenu from "@bodynarf/react.components/components/contextMenu";`,
                            "",
                            "<ContextMenu",
                            "    disabled",
                            "    items={items}",
                            ">",
                            "    <div>Right-click me (does nothing)</div>",
                            "</ContextMenu>",
                        ].join("\n")}
                    />
                }
            >
                <ContextMenuComponent
                    disabled
                    items={[
                        { key: "d-1", label: "Open" },
                        { key: "d-2", label: "Delete" },
                    ]}
                >
                    <div className="box" style={{ cursor: "not-allowed" }}>
                        Right-click me (menu is disabled)
                    </div>
                </ContextMenuComponent>
            </ComponentUseCase>

            <hr />
            <div>
                <h4 className="subtitle is-4 has-text-weight-semibold">ContextMenuItem props</h4>
            </div>

            <ComponentUseCase
                captionIsCode
                caption="onClick"
                description="Callback fired when the item is clicked."
                code={
                    <CodeExample
                        code={[
                            `import ContextMenu from "@bodynarf/react.components/components/contextMenu";`,
                            "",
                            "<ContextMenu",
                            "    items={[",
                            "        { key: \"1\", label: \"Open\", onClick: () => console.log(\"open\") },",
                            "        { key: \"2\", label: \"Delete\", onClick: () => console.log(\"delete\") },",
                            "    ]}",
                            ">",
                            "    <div>Right-click me</div>",
                            "</ContextMenu>",
                        ].join("\n")}
                    />
                }
            >
                <ContextMenuComponent
                    items={[
                        { key: "oc-1", label: "Open", onClick: () => handleClick("Open") },
                        { key: "oc-2", label: "Save", onClick: () => handleClick("Save") },
                        { key: "oc-3", label: "Delete", onClick: () => handleClick("Delete") },
                    ]}
                >
                    <div className="box" style={{ cursor: "context-menu" }}>
                        Right-click me
                    </div>
                </ContextMenuComponent>
                <Log ref={onClickLogRef} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="icon"
                description="Bootstrap icon name (without bi- prefix) shown to the left of the item label."
                code={
                    <CodeExample
                        code={[
                            `import ContextMenu from "@bodynarf/react.components/components/contextMenu";`,
                            "",
                            "<ContextMenu",
                            "    items={[",
                            "        { key: \"edit\", label: \"Edit\", icon: \"pencil\" },",
                            "        { key: \"copy\", label: \"Copy\", icon: \"clipboard\" },",
                            "        { key: \"delete\", label: \"Delete\", icon: \"trash\" },",
                            "    ]}",
                            ">",
                            "    <div>Right-click me</div>",
                            "</ContextMenu>",
                        ].join("\n")}
                    />
                }
            >
                <ContextMenuComponent
                    items={[
                        { key: "ic-edit", label: "Edit", icon: "pencil" },
                        { key: "ic-copy", label: "Copy", icon: "clipboard" },
                        { key: "ic-delete", label: "Delete", icon: "trash" },
                    ]}
                >
                    <div className="box" style={{ cursor: "context-menu" }}>
                        Right-click me
                    </div>
                </ContextMenuComponent>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="disabled"
                description="Mark an individual item as disabled — it is not clickable and is visually dimmed."
                code={
                    <CodeExample
                        code={[
                            `import ContextMenu from "@bodynarf/react.components/components/contextMenu";`,
                            "",
                            "<ContextMenu",
                            "    items={[",
                            "        { key: \"view\", label: \"View\" },",
                            "        { key: \"edit\", label: \"Edit\", disabled: true },",
                            "    ]}",
                            ">",
                            "    <div>Right-click me</div>",
                            "</ContextMenu>",
                        ].join("\n")}
                    />
                }
            >
                <ContextMenuComponent
                    items={[
                        { key: "di-view", label: "View" },
                        { key: "di-edit", label: "Edit", disabled: true },
                        { key: "di-delete", label: "Delete", disabled: true },
                    ]}
                >
                    <div className="box" style={{ cursor: "context-menu" }}>
                        Right-click me
                    </div>
                </ContextMenuComponent>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="label"
                description="Display text for the item. When omitted, the item is rendered as a horizontal divider."
                code={
                    <CodeExample
                        code={[
                            `import ContextMenu from "@bodynarf/react.components/components/contextMenu";`,
                            "",
                            "<ContextMenu",
                            "    items={[",
                            "        { key: \"view\", label: \"View\", icon: \"eye\" },",
                            "        { key: \"sep\" }, // no label → divider",
                            "        { key: \"delete\", label: \"Delete\", icon: \"trash\" },",
                            "    ]}",
                            ">",
                            "    <div>Right-click me</div>",
                            "</ContextMenu>",
                        ].join("\n")}
                    />
                }
            >
                <ContextMenuComponent
                    items={[
                        { key: "lb-view", label: "View", icon: "eye" },
                        { key: "lb-sep" },
                        { key: "lb-delete", label: "Delete", icon: "trash" },
                    ]}
                >
                    <div className="box" style={{ cursor: "context-menu" }}>
                        Right-click me
                    </div>
                </ContextMenuComponent>
            </ComponentUseCase>
        </section>
    );
};

export default ContextMenu;
