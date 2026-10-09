import { FC, useCallback, useRef } from "react";

import ButtonGroupComponent from "@bodynarf/react.components/components/buttonGroup";
import { ButtonStyle, SelectableItem } from "@bodynarf/react.components";

import Log, { LogRef } from "@app/sharedComponents/log";
import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import ComponentEnumCase from "@app/sharedComponents/enumSelectionCase";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
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

/** ButtonGroup component demo */
const ButtonGroup: FC = () => {
    const logRef = useRef<LogRef>(null);
    const appendLog = useCallback(
        (text: string) => logRef.current?.append(text),
        []
    );

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="ButtonGroup"
                version="1.16"
                baseTypeName="BaseElementProps"
                description="Group of attached buttons sharing a single style. Can be laid out horizontally or vertically."
            />

            <ComponentUseCase
                caption="Minimal use"
                description="A group requires an items list and a shared style (the style prop is required)."
                code={
                    <CodeExample
                        code={[
                            `import { ButtonStyle } from "@bodynarf/react.components";`,
                            `import ButtonGroup from "@bodynarf/react.components/components/buttonGroup";`,
                            "",
                            "<ButtonGroup",
                            "    style={ButtonStyle.Primary}",
                            "    items={[",
                            `        { caption: "Bold",   onClick: () => {} },`,
                            `        { caption: "Italic", onClick: () => {} },`,
                            `        { caption: "Underline", onClick: () => {} },`,
                            "    ]}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <ButtonGroupComponent
                    style={ButtonStyle.Primary}
                    items={[
                        { caption: "Bold", onClick: () => appendLog("Bold") },
                        { caption: "Italic", onClick: () => appendLog("Italic") },
                        { caption: "Underline", onClick: () => appendLog("Underline") },
                    ]}
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
                caption="ButtonGroupItem"
                description="Each button is described by a `ButtonGroupItem`: optional `caption` and/or `icon`, `title` (native tooltip), `disabled` and `onClick`. Icon-only buttons are useful for compact toolbars."
                code={
                    <CodeExample
                        code={[
                            `import { ButtonStyle, ButtonGroupItem } from "@bodynarf/react.components";`,
                            `import ButtonGroup from "@bodynarf/react.components/components/buttonGroup";`,
                            "",
                            `const items: ButtonGroupItem[] = [`,
                            `    // caption only`,
                            `    { caption: "Save", onClick: () => {} },`,
                            `    // caption + icon`,
                            `    { caption: "Download", icon: { name: "download" }, onClick: () => {} },`,
                            `    // icon only — provide a title for accessibility`,
                            `    { icon: { name: "trash" }, title: "Delete", onClick: () => {} },`,
                            `    // disabled`,
                            `    { caption: "Archive", disabled: true, onClick: () => {} },`,
                            "];",
                            "",
                            "<ButtonGroup",
                            "    style={ButtonStyle.Info}",
                            "    items={items}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <ButtonGroupComponent
                    style={ButtonStyle.Info}
                    items={[
                        { caption: "Save", onClick: () => appendLog("Save") },
                        { caption: "Download", icon: { name: "download" }, onClick: () => appendLog("Download") },
                        { icon: { name: "trash" }, title: "Delete", onClick: () => appendLog("Delete") },
                        { caption: "Archive", disabled: true, onClick: () => appendLog("Should not fire") },
                    ]}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="vertical"
                description="Lay the group out vertically."
                code={
                    <CodeExample
                        code={[
                            `import { ButtonStyle } from "@bodynarf/react.components";`,
                            `import ButtonGroup from "@bodynarf/react.components/components/buttonGroup";`,
                            "",
                            "<ButtonGroup",
                            "    vertical",
                            "    style={ButtonStyle.Success}",
                            "    items={…}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <ButtonGroupComponent
                    vertical
                    style={ButtonStyle.Success}
                    items={[
                        { icon: { name: "text-left" }, title: "Align left", onClick: () => appendLog("Left") },
                        { icon: { name: "text-center" }, title: "Align center", onClick: () => appendLog("Center") },
                        { icon: { name: "text-right" }, title: "Align right", onClick: () => appendLog("Right") },
                    ]}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="light"
                description="Use a lighter variant of the shared color."
                code={
                    <CodeExample
                        code={[
                            `import { ButtonStyle } from "@bodynarf/react.components";`,
                            `import ButtonGroup from "@bodynarf/react.components/components/buttonGroup";`,
                            "",
                            "<ButtonGroup",
                            "    light",
                            "    style={ButtonStyle.Warning}",
                            "    items={…}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <ButtonGroupComponent
                    light
                    style={ButtonStyle.Warning}
                    items={[
                        { caption: "Day" },
                        { caption: "Week" },
                        { caption: "Month" },
                    ]}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="outlined"
                description="Display every button with an outline style."
                code={
                    <CodeExample
                        code={[
                            `import { ButtonStyle } from "@bodynarf/react.components";`,
                            `import ButtonGroup from "@bodynarf/react.components/components/buttonGroup";`,
                            "",
                            "<ButtonGroup",
                            "    outlined",
                            "    style={ButtonStyle.Danger}",
                            "    items={…}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <ButtonGroupComponent
                    outlined
                    style={ButtonStyle.Danger}
                    items={[
                        { caption: "Cut" },
                        { caption: "Copy" },
                        { caption: "Paste" },
                    ]}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="rounded"
                description="Round the corners of every button in the group."
                code={
                    <CodeExample
                        code={[
                            `import { ButtonStyle } from "@bodynarf/react.components";`,
                            `import ButtonGroup from "@bodynarf/react.components/components/buttonGroup";`,
                            "",
                            "<ButtonGroup",
                            "    rounded",
                            "    style={ButtonStyle.Link}",
                            "    items={…}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <ButtonGroupComponent
                    rounded
                    style={ButtonStyle.Link}
                    items={[
                        { caption: "Yes" },
                        { caption: "No" },
                        { caption: "Maybe" },
                    ]}
                />
            </ComponentUseCase>

            <ComponentSizeCase
                captionIsCode
                caption="size"
                description="The component supports all sizes defined in ElementSize. The size is applied to every button in the group."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementSize, ButtonStyle } from "@bodynarf/react.components";`,
                            `import ButtonGroup from "@bodynarf/react.components/components/buttonGroup";`,
                            "",
                            "<ButtonGroup",
                            "    style={ButtonStyle.Primary}",
                            `    size={ElementSize.${id}}`,
                            "    items={…}",
                            "/>",
                        ].join("\n")}
                    />
                }
                componentProvider={size =>
                    <ButtonGroupComponent
                        style={ButtonStyle.Primary}
                        size={size}
                        items={[
                            { caption: "Small" },
                            { caption: "Medium" },
                            { caption: "Large" },
                        ]}
                    />
                }
            />

            <ComponentEnumCase
                captionIsCode
                caption="style"
                enumNames={styleNames}
                lookupValues={stylesAsSelectList}
                description="Shared style of the buttons. The component supports all styles defined in ButtonStyle."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ButtonStyle } from "@bodynarf/react.components";`,
                            `import ButtonGroup from "@bodynarf/react.components/components/buttonGroup";`,
                            "",
                            "<ButtonGroup",
                            `    style={ButtonStyle.${id}}`,
                            "    items={…}",
                            "/>",
                        ].join("\n")}
                    />
                }
                componentProvider={style =>
                    <ButtonGroupComponent
                        style={style as unknown as ButtonStyle}
                        items={[
                            { caption: "One" },
                            { caption: "Two" },
                            { caption: "Three" },
                        ]}
                    />
                }
            />
        </section>
    );
};

export default ButtonGroup;
