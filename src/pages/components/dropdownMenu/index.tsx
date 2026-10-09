import { FC, useCallback, useRef } from "react";

import DropdownMenuComponent from "@bodynarf/react.components/components/dropdownMenu";
import { DropdownMenuItem, PopoverPosition, SelectableItem } from "@bodynarf/react.components";

import Log, { LogRef } from "@app/sharedComponents/log";
import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentEnumCase from "@app/sharedComponents/enumSelectionCase";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";

const positionNames: Array<string> =
    Object.values(PopoverPosition).map(x => x.capitalize());

const positionsAsSelectList: Array<SelectableItem> =
    Object.values(PopoverPosition).map((x, i) => ({
        displayValue: x.capitalize(),
        id: i.toString(),
        value: x,
    }) as SelectableItem);

/** DropdownMenu component demo */
const DropdownMenu: FC = () => {
    const logRef = useRef<LogRef>(null);
    const appendLog = useCallback(
        (text: string) => logRef.current?.append(text),
        []
    );

    const toggleLogRef = useRef<LogRef>(null);
    const appendToggleLog = useCallback(
        (text: string) => toggleLogRef.current?.append(text),
        []
    );

    const basicItems: DropdownMenuItem[] = [
        { key: "rename", label: "Rename", onClick: () => appendLog("Rename") },
        { key: "duplicate", label: "Duplicate", onClick: () => appendLog("Duplicate") },
        { key: "remove", label: "Remove", onClick: () => appendLog("Remove") },
    ];

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="DropdownMenu"
                version="1.16"
                baseTypeName="BaseElementProps"
                description="Popover menu rendered over any trigger element: items, separators, headers, icons, disabled entries. Keyboard-activatable."
            />

            <ComponentUseCase
                caption="Minimal use"
                description="A trigger (any ReactNode) and a list of items — each item needs a unique `key` and a `label`."
                code={
                    <CodeExample
                        code={[
                            `import DropdownMenu from "@bodynarf/react.components/components/dropdownMenu";`,
                            "",
                            "<DropdownMenu",
                            `    trigger={<button className="button">Actions</button>}`,
                            "    items={[",
                            `        { key: "rename", label: "Rename", onClick: () => {} },`,
                            `        { key: "remove", label: "Remove", onClick: () => {} },`,
                            "    ]}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <DropdownMenuComponent
                    trigger={<button type="button" className="button">Actions</button>}
                    items={basicItems}
                />
                <Log ref={logRef} />
            </ComponentUseCase>

            <hr />

            <div className="block">
                <h4 className="subtitle is-4">
                    Custom component props
                </h4>
            </div>

            <ComponentUseCase
                captionIsCode
                caption="DropdownMenuItem"
                description="Full item configuration: `type` (`item`, `separator` or `header`), `icon`, `title` (native tooltip), `disabled` and `onClick`."
                code={
                    <CodeExample
                        code={[
                            `import { DropdownMenuItem } from "@bodynarf/react.components";`,
                            `import DropdownMenu from "@bodynarf/react.components/components/dropdownMenu";`,
                            "",
                            `const items: DropdownMenuItem[] = [`,
                            `    // plain section header`,
                            `    { key: "header",  type: "header", label: "Actions" },`,
                            `    // with icon`,
                            `    { key: "edit",    label: "Edit",   icon: { name: "pencil" }, onClick: () => {} },`,
                            `    // disabled — onClick never fires`,
                            `    { key: "archive", label: "Archive", disabled: true, onClick: () => {} },`,
                            `    // visual separator`,
                            `    { key: "sep",     type: "separator" },`,
                            `    // dangerous action`,
                            `    { key: "delete",  label: "Delete", icon: { name: "trash" }, onClick: () => {} },`,
                            "];",
                        ].join("\n")}
                    />
                }
            >
                <div className="card" style={{ maxWidth: "360px" }}>
                    <div className="card-content is-flex is-justify-content-space-between is-align-items-center">
                        <p className="is-size-5 has-text-weight-semibold">Quarterly report</p>
                        <DropdownMenuComponent
                            trigger={<button type="button" className="button is-small"><span className="icon"><i className="bi bi-three-dots" /></span></button>}
                            items={[
                                { key: "header", type: "header", label: "Actions" },
                                { key: "edit", label: "Edit", icon: { name: "pencil" }, onClick: () => appendLog("Edit") },
                                { key: "archive", label: "Archive", disabled: true, onClick: () => appendLog("Should not fire") },
                                { key: "sep", type: "separator" },
                                { key: "delete", label: "Delete", icon: { name: "trash" }, title: "Remove permanently", onClick: () => appendLog("Delete") },
                            ]}
                        />
                    </div>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="position"
                description="Placement of the menu relative to its trigger. Defaults to `PopoverPosition.Bottom`."
                code={
                    <CodeExample
                        code={[
                            `import { PopoverPosition } from "@bodynarf/react.components";`,
                            `import DropdownMenu from "@bodynarf/react.components/components/dropdownMenu";`,
                            "",
                            "<DropdownMenu",
                            `    position={PopoverPosition.Right}`,
                            "    trigger={…}",
                            "    items={…}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex is-justify-content-center" style={{ padding: "3rem 0" }}>
                    <DropdownMenuComponent
                        position={PopoverPosition.Right}
                        trigger={<button type="button" className="button is-info">Right menu</button>}
                        items={basicItems}
                    />
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="hideOnOuterClick"
                description="Controls whether the menu closes when clicking outside. Defaults to `true`."
                code={
                    <CodeExample
                        code={[
                            `import DropdownMenu from "@bodynarf/react.components/components/dropdownMenu";`,
                            "",
                            "// menu stays open on outside click:",
                            "<DropdownMenu",
                            "    hideOnOuterClick={false}",
                            "    trigger={…}",
                            "    items={…}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <p className="is-size-7 has-text-grey mb-2">
                    Open the menu and click somewhere outside — it will stay open.
                </p>
                <DropdownMenuComponent
                    hideOnOuterClick={false}
                    trigger={<button type="button" className="button is-warning">Persistent menu</button>}
                    items={basicItems}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onToggle"
                description="Called with the menu visibility each time it changes. The menu itself is uncontrolled."
                code={
                    <CodeExample
                        code={[
                            `import DropdownMenu from "@bodynarf/react.components/components/dropdownMenu";`,
                            "",
                            "<DropdownMenu",
                            `    onToggle={visible => console.log(visible)}`,
                            "    trigger={…}",
                            "    items={…}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <DropdownMenuComponent
                    onToggle={visible => appendToggleLog(`Visible: ${visible}`)}
                    trigger={<button type="button" className="button">Toggle log</button>}
                    items={basicItems}
                />
                <Log ref={toggleLogRef} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="disabled"
                description="Disable the trigger — the menu cannot be opened."
                code={
                    <CodeExample
                        code={[
                            `import DropdownMenu from "@bodynarf/react.components/components/dropdownMenu";`,
                            "",
                            "<DropdownMenu",
                            "    disabled",
                            "    trigger={…}",
                            "    items={…}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <DropdownMenuComponent
                    disabled
                    trigger={<button type="button" className="button">Cannot open</button>}
                    items={basicItems}
                />
            </ComponentUseCase>

            <ComponentEnumCase
                captionIsCode
                caption="all positions"
                enumNames={positionNames}
                lookupValues={positionsAsSelectList}
                description="All menu placements defined in PopoverPosition."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { PopoverPosition } from "@bodynarf/react.components";`,
                            `import DropdownMenu from "@bodynarf/react.components/components/dropdownMenu";`,
                            "",
                            "<DropdownMenu",
                            `    position={PopoverPosition.${id}}`,
                            "    trigger={…}",
                            "    items={…}",
                            "/>",
                        ].join("\n")}
                    />
                }
                componentProvider={position =>
                    <DropdownMenuComponent
                        position={position as unknown as PopoverPosition}
                        trigger={<button type="button" className="button is-primary">Menu</button>}
                        items={basicItems}
                    />
                }
            />
        </section>
    );
};

export default DropdownMenu;
