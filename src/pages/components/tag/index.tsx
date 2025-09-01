import { FC, useCallback, useState } from "react";

import { ElementColor, ElementSize, SelectableItem } from "@bodynarf/react.components";
import TagComponent from "@bodynarf/react.components/components/tag";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";
import ComponentEnumCase from "@app/sharedComponents/enumSelectionCase";

const sizes: Array<string> =
    Object
        .keys(ElementSize)
        .filter(x => x !== "Small");

const sizesAsSelectList: Array<SelectableItem> =
    Object
        .values(ElementSize)
        .filter(x => x !== ElementSize.Small)
        .map((x, i) => ({
            displayValue: x,
            id: i.toString(),
            value: x,
        }) as SelectableItem);

/** Tag component demo */
const Tag: FC = () => {
    const [clickLog, setClickLog] = useState("");
    const appendClickLog = useCallback(
        () => setClickLog(
            t => t
                + "\n"
                + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getMilliseconds()
                + " => " + "clicked"
        ),
        []
    );

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Tag"
                baseTypeName="BaseElementProps"
                description="A component for displaying information about a category \ tag"
            />

            <ComponentUseCase
                caption="Minimal use"
                description="To use the component, you only need to provide the text content"
                code={
                    <CodeExample
                        code={[
                            `import TagComponent from "@bodynarf/react.components/components/tag";`,
                            "",
                            "/* ... */",
                            "",
                            '<TagComponent content="Minimal use" />',
                        ].join("\n")}
                    />
                }
            >
                <TagComponent content="Minimal use" />
            </ComponentUseCase>

            <ComponentEnumCase
                captionIsCode
                caption="size"
                enumNames={sizes}
                lookupValues={sizesAsSelectList}
                description="The component supports all sizes defined in ElementSize, except Small"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementSize } from "@bodynarf/react.components";`,
                            `import TagComponent from "@bodynarf/react.components/components/tag";`,
                            "",
                            "/* ... */",
                            "",
                            '<TagComponent',
                            '    content="Size tag"',
                            `    size={ElementSize.${id}}`,
                            '/>',
                        ].join("\n")}
                    />
                }
                componentProvider={
                    (value: Exclude<ElementSize, ElementSize.Small>) =>
                        <TagComponent
                            content="Size tag"
                            size={value}
                        />
                }
            />

            <ComponentColorCase
                captionIsCode
                caption="style"
                description="Component supports all available colors"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementColor } from "@bodynarf/react.components";`,
                            `import TagComponent from "@bodynarf/react.components/components/tag";`,
                            "",
                            "/* ... */",
                            "",
                            '<TagComponent',
                            '    content="Style tag"',
                            `    style={ElementColor.${id}}`,
                            '/>',
                        ].join("\n")}
                    />
                }
                componentProvider={
                    style =>
                        <TagComponent
                            style={style}
                            content="Style tag"
                        />
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="rounded"
                description="Option for displaying the component with rounded corners. Disabled by default"
                code={
                    <CodeExample
                        code={[
                            `import TagComponent from "@bodynarf/react.components/components/tag";`,
                            "",
                            "/* ... */",
                            "",
                            '<TagComponent',
                            '    rounded',
                            '    content="Rounded use"',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <TagComponent
                    rounded
                    content="Rounded use"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="lightColor"
                description="Option for displaying light shades of the style. Disabled by default"
                code={
                    <CodeExample
                        code={[
                            `import TagComponent from "@bodynarf/react.components/components/tag";`,
                            "",
                            "/* ... */",
                            "",
                            '<TagComponent',
                            '    lightColor',
                            '    content="LightColor use"',
                            '    style={ElementColor.Primary}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <TagComponent
                    lightColor
                    content="LightColor use"
                    style={ElementColor.Primary}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="customColor"
                description="Option to set custom component colors, only CSS-valid values can be used. Empty by default"
                code={
                    <CodeExample
                        code={[
                            `import TagComponent from "@bodynarf/react.components/components/tag";`,
                            "",
                            "/* ... */",
                            "",
                            '<TagComponent',
                            '    content="CustomColor use"',
                            '    customColor={{ backgroundColor: "#76dffb", color: "white", }}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <TagComponent
                    content="CustomColor use"
                    customColor={{ backgroundColor: "#76dffb", color: "white", }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onClick"
                description="Function for handling click events on the component"
                code={
                    <CodeExample
                        code={[
                            `import { useCallback } from "react"`,
                            "",
                            `import TagComponent from "@bodynarf/react.components/components/tag";`,
                            "",
                            "/* ... */",
                            "const ON_CLICK_HANDLE_FN = useCallback(() => { /* handler fn */}, []);",
                            "/* ... */",
                            "",
                            '<TagComponent',
                            '    content="onClick use"',
                            '    onClick={ON_CLICK_HANDLE_FN}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <TagComponent
                    content="LightColor use"
                    onClick={appendClickLog}
                />
                <p style={{ whiteSpace: "pre-line" }}>
                    {clickLog}
                </p>
            </ComponentUseCase>
        </section>
    );
};

export default Tag;
