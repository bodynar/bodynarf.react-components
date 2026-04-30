import { FC, useCallback, useRef } from "react";

import MenuButtonComponent from "@bodynarf/react.components/components/menuButton";
import { ButtonStyle, MenuButtonEntry, SelectableItem } from "@bodynarf/react.components";

import Log, { LogRef } from "@app/sharedComponents/log";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import ComponentEnumCase from "@app/sharedComponents/enumSelectionCase";
import CodeExample from "@app/sharedComponents/codeExample";

const styleNames: Array<string> = [
    ButtonStyle.Default, ButtonStyle.Primary, ButtonStyle.Link,
    ButtonStyle.Info, ButtonStyle.Success, ButtonStyle.Warning,
    ButtonStyle.Danger, ButtonStyle.White, ButtonStyle.Light,
    ButtonStyle.Dark, ButtonStyle.Black, ButtonStyle.Text,
    ButtonStyle.Ghost,
].map(x => x.capitalize());

const stylesAsSelectList: Array<SelectableItem> =
    Object.values(ButtonStyle).map((x, i) => ({
        displayValue: x.capitalize(),
        id: i.toString(),
        value: x,
    }) as SelectableItem);

/** MenuButton component demo */
const MenuButton: FC = () => {
    const logRef = useRef<LogRef>(null);
    const appendLog = useCallback(
        (text: string) => logRef.current?.append(text),
        []
    );

    const allPropsLogRef = useRef<LogRef>(null);
    const appendAllPropsLog = useCallback(
        (text: string) => allPropsLogRef.current?.append(text),
        []
    );

    const demoActions: [MenuButtonEntry, ...MenuButtonEntry[]] = [
        {
            id: "action-edit",
            caption: "Edit",
            icon: { name: "pencil" },
            onClick: () => appendLog("Edit"),
        },
        {
            id: "action-copy",
            caption: "Duplicate",
            icon: { name: "copy" },
            onClick: () => appendLog("Duplicate"),
        },
        {
            id: "divider-1",
            type: "divider",
        },
        {
            id: "action-delete",
            caption: "Delete",
            icon: { name: "trash" },
            onClick: () => appendLog("Delete"),
        },
        {
            id: "action-disabled",
            caption: "Archive (disabled)",
            disabled: true,
            onClick: () => appendLog("This should not fire"),
        },
    ];

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Menu Button"
                version="1.15"
                baseTypeName="BaseElementProps"
                description="Icon button that opens a dropdown list of actions"
            />

            <ComponentUseCase
                caption="Minimal use"
                description="A menu button requires a style and at least one action in the dropdown"
                code={
                    <CodeExample
                        code={[
                            `import { ButtonStyle } from "@bodynarf/react.components";`,
                            `import MenuButton from "@bodynarf/react.components/components/menuButton";`,
                            "",
                            "<MenuButton",
                            "    style={ButtonStyle.Primary}",
                            "    actions={[",
                            "        {",
                            `            id: "edit",`,
                            `            caption: "Edit",`,
                            "            onClick: () => console.log('Edit'),",
                            "        },",
                            "    ]}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <MenuButtonComponent
                    style={ButtonStyle.Primary}
                    actions={demoActions}
                />
                <Log ref={logRef} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="icon"
                description="Override the default three-dots icon with any Bootstrap icon name (without the bi- prefix)"
                code={
                    <CodeExample
                        code={[
                            `import { ButtonStyle } from "@bodynarf/react.components";`,
                            `import MenuButton from "@bodynarf/react.components/components/menuButton";`,
                            "",
                            "<MenuButton",
                            "    style={ButtonStyle.Info}",
                            `    icon="gear"`,
                            "    actions={[{ id: '1', caption: 'Settings', onClick: () => {} }]}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <MenuButtonComponent
                    style={ButtonStyle.Info}
                    icon="gear"
                    actions={[
                        { id: "settings", caption: "Settings", onClick: () => appendLog("Settings") },
                        { id: "profile", caption: "Profile", onClick: () => appendLog("Profile") },
                    ]}
                />
            </ComponentUseCase>

            <ComponentUseCase
                caption="Divider"
                description="Use a divider entry to visually separate groups of actions"
                code={
                    <CodeExample
                        code={[
                            `import { ButtonStyle, MenuButtonEntry } from "@bodynarf/react.components";`,
                            `import MenuButton from "@bodynarf/react.components/components/menuButton";`,
                            "",
                            `const actions: [MenuButtonEntry, ...MenuButtonEntry[]] = [`,
                            `    { id: "edit",    caption: "Edit",   onClick: () => {} },`,
                            `    { id: "div",     type: "divider" },`,
                            `    { id: "delete",  caption: "Delete", onClick: () => {} },`,
                            "];",
                            "",
                            "<MenuButton",
                            "    style={ButtonStyle.Danger}",
                            "    actions={actions}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <MenuButtonComponent
                    style={ButtonStyle.Danger}
                    actions={demoActions}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="light"
                description="Use a lighter variant of the button color"
                code={
                    <CodeExample
                        code={[
                            `import { ButtonStyle } from "@bodynarf/react.components";`,
                            `import MenuButton from "@bodynarf/react.components/components/menuButton";`,
                            "",
                            "<MenuButton",
                            "    light",
                            "    style={ButtonStyle.Success}",
                            "    actions={[{ id: '1', caption: 'Option', onClick: () => {} }]}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <MenuButtonComponent
                    style={ButtonStyle.Success}
                    light
                    actions={[
                        { id: "1", caption: "Option A", onClick: () => appendLog("Light option A") },
                        { id: "2", caption: "Option B", onClick: () => appendLog("Light option B") },
                    ]}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="outlined"
                description="Display the button with an outline style"
                code={
                    <CodeExample
                        code={[
                            `import { ButtonStyle } from "@bodynarf/react.components";`,
                            `import MenuButton from "@bodynarf/react.components/components/menuButton";`,
                            "",
                            "<MenuButton",
                            "    outlined",
                            "    style={ButtonStyle.Warning}",
                            "    actions={[{ id: '1', caption: 'Option', onClick: () => {} }]}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <MenuButtonComponent
                    style={ButtonStyle.Warning}
                    outlined
                    actions={[
                        { id: "1", caption: "Option A", onClick: () => appendLog("Outlined option A") },
                        { id: "2", caption: "Option B", onClick: () => appendLog("Outlined option B") },
                    ]}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="rounded"
                description="Round the button corners"
                code={
                    <CodeExample
                        code={[
                            `import { ButtonStyle } from "@bodynarf/react.components";`,
                            `import MenuButton from "@bodynarf/react.components/components/menuButton";`,
                            "",
                            "<MenuButton",
                            "    rounded",
                            "    style={ButtonStyle.Link}",
                            "    actions={[{ id: '1', caption: 'Option', onClick: () => {} }]}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <MenuButtonComponent
                    style={ButtonStyle.Link}
                    rounded
                    actions={[
                        { id: "1", caption: "Option A", onClick: () => appendLog("Rounded option A") },
                        { id: "2", caption: "Option B", onClick: () => appendLog("Rounded option B") },
                    ]}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="disabled"
                description="Disable the button and all its actions"
                code={
                    <CodeExample
                        code={[
                            `import { ButtonStyle } from "@bodynarf/react.components";`,
                            `import MenuButton from "@bodynarf/react.components/components/menuButton";`,
                            "",
                            "<MenuButton",
                            "    disabled",
                            "    style={ButtonStyle.Primary}",
                            "    actions={[{ id: '1', caption: 'Option', onClick: () => {} }]}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <MenuButtonComponent
                    style={ButtonStyle.Primary}
                    disabled
                    actions={[
                        { id: "1", caption: "Option", onClick: () => {} },
                    ]}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="hideOnOuterClick"
                description="Controls whether the dropdown closes when clicking outside. Defaults to true. Set to false to keep it open until an action is selected."
                code={
                    <CodeExample
                        code={[
                            `import { ButtonStyle } from "@bodynarf/react.components";`,
                            `import MenuButton from "@bodynarf/react.components/components/menuButton";`,
                            "",
                            "// dropdown stays open on outside click:",
                            "<MenuButton",
                            "    hideOnOuterClick={false}",
                            "    style={ButtonStyle.Info}",
                            "    actions={[{ id: '1', caption: 'Option', onClick: () => {} }]}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <p className="is-size-7 has-text-grey mb-2">
                    Open the dropdown and click somewhere outside — it will stay open.
                </p>
                <MenuButtonComponent
                    style={ButtonStyle.Info}
                    hideOnOuterClick={false}
                    actions={[
                        { id: "1", caption: "Option A", onClick: () => appendLog("Option A") },
                        { id: "2", caption: "Option B", onClick: () => appendLog("Option B") },
                    ]}
                />
            </ComponentUseCase>

            <ComponentSizeCase
                captionIsCode
                caption="size"
                description="The component supports all sizes defined in ElementSize"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementSize, ButtonStyle } from "@bodynarf/react.components";`,
                            `import MenuButton from "@bodynarf/react.components/components/menuButton";`,
                            "",
                            "<MenuButton",
                            "    style={ButtonStyle.Primary}",
                            `    size={ElementSize.${id}}`,
                            "    actions={[{ id: '1', caption: 'Option', onClick: () => {} }]}",
                            "/>",
                        ].join("\n")}
                    />
                }
                componentProvider={size =>
                    <MenuButtonComponent
                        style={ButtonStyle.Primary}
                        size={size}
                        actions={[
                            { id: "1", caption: "Option A", onClick: () => appendLog("Size option A") },
                            { id: "2", caption: "Option B", onClick: () => appendLog("Size option B") },
                        ]}
                    />
                }
            />

            <ComponentEnumCase
                captionIsCode
                caption="style"
                enumNames={styleNames}
                lookupValues={stylesAsSelectList}
                description="The component supports all styles defined in ButtonStyle"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ButtonStyle } from "@bodynarf/react.components";`,
                            `import MenuButton from "@bodynarf/react.components/components/menuButton";`,
                            "",
                            "<MenuButton",
                            `    style={ButtonStyle.${id}}`,
                            "    actions={[{ id: '1', caption: 'Option', onClick: () => {} }]}",
                            "/>",
                        ].join("\n")}
                    />
                }
                componentProvider={style =>
                    <MenuButtonComponent
                        style={style as unknown as ButtonStyle}
                        actions={[
                            { id: "1", caption: "Option A", onClick: () => appendLog("Style option A") },
                            { id: "2", caption: "Option B", onClick: () => appendLog("Style option B") },
                        ]}
                    />
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="MenuButtonAction"
                description="Each action in the dropdown is a MenuButtonAction. All available props are shown below: caption, icon, title (native tooltip on hover), disabled, and onClick with individual handlers."
                code={
                    <CodeExample
                        code={[
                            `import { ButtonStyle, MenuButtonEntry } from "@bodynarf/react.components";`,
                            `import MenuButton from "@bodynarf/react.components/components/menuButton";`,
                            "",
                            `const actions: [MenuButtonEntry, ...MenuButtonEntry[]] = [`,
                            `    // caption + onClick only (minimal action)`,
                            `    { id: "basic",    caption: "Basic action",          onClick: () => {} },`,
                            `    // with icon`,
                            `    { id: "icon",     caption: "With icon",             icon: { name: "star" }, onClick: () => {} },`,
                            `    // with title — native browser tooltip shown on hover`,
                            `    { id: "title",    caption: "With title (hover)",    title: "Tooltip via title prop", onClick: () => {} },`,
                            `    // disabled — onClick is never called`,
                            `    { id: "disabled", caption: "Disabled action",       disabled: true, onClick: () => {} },`,
                            "];",
                            "",
                            "<MenuButton",
                            "    style={ButtonStyle.Primary}",
                            "    actions={actions}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <MenuButtonComponent
                    style={ButtonStyle.Primary}
                    actions={[
                        {
                            id: "basic",
                            caption: "Basic action",
                            onClick: () => appendAllPropsLog("Basic action clicked"),
                        },
                        {
                            id: "icon",
                            caption: "With icon",
                            icon: { name: "star" },
                            onClick: () => appendAllPropsLog("With icon clicked"),
                        },
                        {
                            id: "title",
                            caption: "With title (hover me)",
                            title: "Tooltip via title prop",
                            onClick: () => appendAllPropsLog("With title clicked"),
                        },
                        {
                            id: "disabled",
                            caption: "Disabled action",
                            disabled: true,
                            onClick: () => appendAllPropsLog("Should not fire"),
                        },
                    ]}
                />
                <Log ref={allPropsLogRef} />
            </ComponentUseCase>
        </section>
    );
};

export default MenuButton;
