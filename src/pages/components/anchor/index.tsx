import { FC, useCallback, useState } from "react";

import { ElementPosition, ElementSize, Anchor as AnchorComponent } from "@bodynarf/react.components";

import ComponentUseCase from "@app/sharedComponents/useCase";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";
import ObsoleteWarning from "@app/sharedComponents/obsoleteWarning";

/** Anchor component demo */
const Anchor: FC = () => {
    const [text, setText] = useState("");
    const appendText = useCallback(
        () => setText(
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
                name="Anchor"
                baseTypeName="BaseElementProps"
            />

            <ObsoleteWarning
                version="1.12.7"
                recommendation={
                    <>
                        It is recommended to replace it with a standard
                        {` `}
                        <code>
                            &lt;a /&gt;
                        </code>
                        {` `}
                        element.
                    </>
                }
            />

            <ComponentUseCase
                caption="Minimal use"
                description="The minimal configuration requires either a caption or an icon"
                code={
                    <CodeExample
                        code={[
                            `import AnchorComponent from "@bodynarf/react.components/components/anchor";`,
                            "",
                            "/* ... */",
                            "",
                            '<AnchorComponent caption="Click me!" />',
                        ].join("\n")}
                    />
                }
            >
                <AnchorComponent caption="Click me!" />
            </ComponentUseCase>

            <ComponentUseCase
                caption="icon"
                captionIsCode
                description="The component can render an icon as its content"
                code={
                    <CodeExample
                        code={[
                            `import { ElementSize } from "@bodynarf/react.components";`,
                            `import AnchorComponent from "@bodynarf/react.components/components/anchor";`,
                            "",
                            "/* ... */",
                            "",
                            '<AnchorComponent',
                            '    icon={{ name: "basket2", size: ElementSize.Large }}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <AnchorComponent
                    icon={{ name: "basket2", size: ElementSize.Large }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                caption="Caption with icon"
                description="The component can display both a caption and an icon together"
                code={
                    <CodeExample
                        code={[
                            `import { ElementPosition } from "@bodynarf/react.components";`,
                            `import AnchorComponent from "@bodynarf/react.components/components/anchor";`,
                            "",
                            "/* ... */",
                            "",
                            '<AnchorComponent',
                            '    caption="Click me!"',
                            '    icon={{ name: "basket2", position: ElementPosition.Right }}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <AnchorComponent
                    caption="Click me!"
                    icon={{ name: "basket2", position: ElementPosition.Right }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                caption="Without hover effects"
                description="Hover effects can be disabled (the link will not be underlined on hover). But why would you?.."
                code={
                    <CodeExample
                        code={[
                            `import AnchorComponent from "@bodynarf/react.components/components/anchor";`,
                            "",
                            "/* ... */",
                            "",
                            '<AnchorComponent caption="Click me!" disableHovering />',
                        ].join("\n")}
                    />
                }
            >
                <AnchorComponent
                    caption="Click me!"
                    disableHovering
                />
            </ComponentUseCase>

            <ComponentUseCase
                caption="href"
                captionIsCode
                description="You can provide an href to make the anchor navigate to a specific link when clicked"
                code={
                    <CodeExample
                        code={[
                            `import AnchorComponent from "@bodynarf/react.components/components/anchor";`,
                            "",
                            "/* ... */",
                            "",
                            '<AnchorComponent',
                            '    caption="Open npm main page"',
                            '    href="https://www.npmjs.com/"',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <AnchorComponent
                    caption="Open npm main page"
                    href="https://www.npmjs.com/"
                />
            </ComponentUseCase>

            <ComponentUseCase
                caption="target"
                captionIsCode
                description="The target attribute defines where the linked document will open (for example, in a new tab)"
                code={
                    <CodeExample
                        code={[
                            `import AnchorComponent from "@bodynarf/react.components/components/anchor";`,
                            "",
                            "/* ... */",
                            "",
                            '<AnchorComponent',
                            '    target="_blank"',
                            '    href="https://www.npmjs.com/"',
                            '    caption="Open npm main page in new tab"',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <AnchorComponent
                    target="_blank"
                    href="https://www.npmjs.com/"
                    caption="Open npm main page in new tab"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onClick"
                description="Additional click handler for the anchor"
                code={
                    <CodeExample
                        code={[
                            `import AnchorComponent from "@bodynarf/react.components/components/anchor";`,
                            "",
                            "/* ... */",
                            "",
                            '<AnchorComponent',
                            '    caption="Click me!"',
                            '    onClick={appendText}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <AnchorComponent
                    caption="Click me!"
                    onClick={appendText}
                />
                <p style={{ whiteSpace: "pre-line" }}>
                    {text}
                </p>
            </ComponentUseCase>
        </section>
    );
};

export default Anchor;
