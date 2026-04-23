import { FC, useCallback, useRef } from "react";

import { SplitButton as SplitButtonComponent, ButtonStyle, SplitButtonAction, SelectableItem } from "@bodynarf/react.components";

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

/** SplitButton component demo */
const SplitButton: FC = () => {
    const logRef = useRef<LogRef>(null);
    const appendLog = useCallback(
        (text: string) => logRef.current?.append(text),
        []
    );

    const demoActions: [SplitButtonAction, ...SplitButtonAction[]] = [
        {
            id: "action-1",
            caption: "Save as draft",
            icon: { name: "file-earmark" },
            onClick: () => appendLog("Save as draft"),
        },
        {
            id: "action-2",
            caption: "Save & close",
            icon: { name: "x-circle" },
            onClick: () => appendLog("Save & close"),
        },
        {
            id: "action-3",
            caption: "Disabled action",
            disabled: true,
            onClick: () => appendLog("This should not fire"),
        },
    ];

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Split Button"
                version="1.14"
                baseTypeName="BaseElementProps"
                description="A button with a dropdown of additional actions"
            />

            <ComponentUseCase
                caption="Minimal use"
                description="A split button requires a caption, style, primary click handler, and at least one action in the dropdown"
                code={
                    <CodeExample
                        code={[
                            `import { SplitButton, ButtonStyle } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            "<SplitButton",
                            `    caption="Save"`,
                            "    style={ButtonStyle.Primary}",
                            "    onClick={() => console.log('Primary click')}",
                            "    actions={[",
                            "        {",
                            `            id: "draft",`,
                            `            caption: "Save as draft",`,
                            "            onClick: () => console.log('Draft'),",
                            "        },",
                            "    ]}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <SplitButtonComponent
                    caption="Save"
                    style={ButtonStyle.Primary}
                    onClick={() => appendLog("Primary: Save")}
                    actions={demoActions}
                />
                <Log ref={logRef} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="icon"
                description="Add an icon to the primary button"
                code={
                    <CodeExample
                        code={[
                            `import { SplitButton, ButtonStyle } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            "<SplitButton",
                            `    caption="Download"`,
                            "    style={ButtonStyle.Info}",
                            `    icon={{ name: "download" }}`,
                            "    onClick={() => {}}",
                            "    actions={[{ id: '1', caption: 'Export CSV', onClick: () => {} }]}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <SplitButtonComponent
                    caption="Download"
                    style={ButtonStyle.Info}
                    icon={{ name: "download" }}
                    onClick={() => appendLog("Download")}
                    actions={[{ id: "csv", caption: "Export CSV", onClick: () => appendLog("Export CSV") }]}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="light"
                description="Use a lighter variant of the button color"
                code={
                    <CodeExample
                        code={[
                            `import { SplitButton, ButtonStyle } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            "<SplitButton",
                            `    caption="Action"`,
                            "    style={ButtonStyle.Success}",
                            "    light",
                            "    onClick={() => {}}",
                            "    actions={[{ id: '1', caption: 'Option', onClick: () => {} }]}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <SplitButtonComponent
                    caption="Action"
                    style={ButtonStyle.Success}
                    light
                    onClick={() => appendLog("Light action")}
                    actions={[{ id: "1", caption: "Option", onClick: () => appendLog("Light option") }]}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="outlined"
                description="Display the button with an outline style"
                code={
                    <CodeExample
                        code={[
                            `import { SplitButton, ButtonStyle } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            "<SplitButton",
                            `    caption="Action"`,
                            "    style={ButtonStyle.Danger}",
                            "    outlined",
                            "    onClick={() => {}}",
                            "    actions={[{ id: '1', caption: 'Option', onClick: () => {} }]}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <SplitButtonComponent
                    caption="Action"
                    style={ButtonStyle.Danger}
                    outlined
                    onClick={() => appendLog("Outlined action")}
                    actions={[{ id: "1", caption: "Option", onClick: () => appendLog("Outlined option") }]}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="rounded"
                description="Round the button corners"
                code={
                    <CodeExample
                        code={[
                            `import { SplitButton, ButtonStyle } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            "<SplitButton",
                            `    caption="Action"`,
                            "    style={ButtonStyle.Link}",
                            "    rounded",
                            "    onClick={() => {}}",
                            "    actions={[{ id: '1', caption: 'Option', onClick: () => {} }]}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <SplitButtonComponent
                    caption="Action"
                    style={ButtonStyle.Link}
                    rounded
                    onClick={() => appendLog("Rounded action")}
                    actions={[{ id: "1", caption: "Option", onClick: () => appendLog("Rounded option") }]}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="disabled"
                description="Disable the entire split button"
                code={
                    <CodeExample
                        code={[
                            `import { SplitButton, ButtonStyle } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            "<SplitButton",
                            `    caption="Disabled"`,
                            "    style={ButtonStyle.Warning}",
                            "    disabled",
                            "    onClick={() => {}}",
                            "    actions={[{ id: '1', caption: 'Option', onClick: () => {} }]}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <SplitButtonComponent
                    caption="Disabled"
                    style={ButtonStyle.Warning}
                    disabled
                    onClick={() => {}}
                    actions={[{ id: "1", caption: "Option", onClick: () => {} }]}
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
                            `import { SplitButton } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            "<SplitButton",
                            `    caption="Action"`,
                            "    style={ButtonStyle.Primary}",
                            `    size={ElementSize.${id}}`,
                            "    onClick={() => {}}",
                            "    actions={[{ id: '1', caption: 'Option', onClick: () => {} }]}",
                            "/>",
                        ].join("\n")}
                    />
                }
                componentProvider={size =>
                    <SplitButtonComponent
                        caption="Action"
                        style={ButtonStyle.Primary}
                        size={size}
                        onClick={() => appendLog(`Size action`)}
                        actions={[{ id: "1", caption: "Option", onClick: () => appendLog("Size option") }]}
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
                            `import { SplitButton, ButtonStyle } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            "<SplitButton",
                            `    caption="Action"`,
                            `    style={ButtonStyle.${id}}`,
                            "    onClick={() => {}}",
                            "    actions={[{ id: '1', caption: 'Option', onClick: () => {} }]}",
                            "/>",
                        ].join("\n")}
                    />
                }
                componentProvider={style =>
                    <SplitButtonComponent
                        caption="Action"
                        style={style as unknown as ButtonStyle}
                        onClick={() => appendLog(`Style action`)}
                        actions={[{ id: "1", caption: "Option", onClick: () => appendLog("Style option") }]}
                    />
                }
            />
        </section>
    );
};

export default SplitButton;
