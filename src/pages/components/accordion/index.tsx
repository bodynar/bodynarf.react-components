import { FC, useCallback, useState } from "react";

import AccordionComponent from "@bodynarf/react.components/components/accordion";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";

/** Accordion component demo */
const Accordion: FC = () => {
    const [text, setText] = useState("");
    const appendText = useCallback(
        (collapsed: boolean) => setText(
            t => t
                + "\n"
                + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getMilliseconds()
                + " => " + (collapsed ? "collapsed" : "expanded")
        ),
        []
    );

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Accordion"
                baseTypeName="BaseElementProps"
                description="Accordion is a collapsible container component that helps organize content into sections. Each accordion has a header (caption) that can be clicked to expand or collapse its content.
It supports different sizes, colors, and can be controlled programmatically through props"
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Minimal configuration requires only caption"
                code={
                    <CodeExample
                        code={[
                            `import AccordionComponent from "@bodynarf/react.components/components/accordion";`,
                            "",
                            "/* ... */",
                            "",
                            `<AccordionComponent caption="Header">`,
                            "    Content",
                            "</AccordionComponent>"
                        ].join("\n")}
                    />
                }
            >
                <AccordionComponent
                    caption="Header"
                >
                    Content
                </AccordionComponent>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="defaultExpanded"
                description="The accordion will be rendered expanded by default"
                code={
                    <CodeExample
                        code={[
                            `import AccordionComponent from "@bodynarf/react.components/components/accordion";`,
                            "",
                            "/* ... */",
                            "",
                            `<AccordionComponent caption="Header" defaultExpanded>`,
                            "    Content",
                            "</AccordionComponent>"
                        ].join("\n")}
                    />
                }
            >
                <AccordionComponent
                    defaultExpanded
                    caption="Header"
                >
                    Content
                </AccordionComponent>
            </ComponentUseCase>

            <ComponentSizeCase
                caption="Sizes"
                description="The component supports all sizes defined in the ElementSize type"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementSize } from "@bodynarf/react.components";`,
                            `import AccordionComponent from "@bodynarf/react.components/components/accordion";`,
                            "",
                            "/* ... */",
                            "",
                            `<AccordionComponent defaultExpanded caption="Size" size={ElementSize.${id}}>`,
                            "    Content",
                            "</AccordionComponent>"
                        ].join("\n")}
                    />
                }
                componentProvider={
                    size =>
                        <AccordionComponent
                            size={size}
                            caption="Size"
                            defaultExpanded
                        >
                            Content
                        </AccordionComponent>
                }
            />

            <ComponentColorCase
                caption="Colors"
                description="Component supports all available colors"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementColor } from "@bodynarf/react.components";`,
                            `import AccordionComponent from "@bodynarf/react.components/components/accordion";`,
                            "",
                            "/* ... */",
                            "",
                            `<AccordionComponent defaultExpanded caption="Color" style={ElementColor.${id}}>`,
                            "    Content",
                            "</AccordionComponent>"
                        ].join("\n")}
                    />
                }
                componentProvider={
                    style =>
                        <AccordionComponent
                            style={style}
                            caption="Color"
                            defaultExpanded
                        >
                            Content
                        </AccordionComponent>
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="onToggle"
                description="Handle accordion expand/collapse state changes"
                code={
                    <CodeExample
                        code={[
                            `import { useCallback } from "react"`,
                            "",
                            `import AccordionComponent from "@bodynarf/react.components/components/accordion";`,
                            "",
                            "/* ... */",
                            "const TOGGLE_HANDLE_FN = useCallback(() => { /* handler fn */}, []);",
                            "/* ... */",
                            "",
                            `<AccordionComponent caption="onToggle handler" onToggle={TOGGLE_HANDLE_FN}>`,
                            "    Content",
                            "</AccordionComponent>"
                        ].join("\n")}
                    />
                }
            >
                <AccordionComponent
                    caption="onToggle handler"
                    onToggle={appendText}
                >
                    Content
                </AccordionComponent>
                <p style={{ whiteSpace: "pre-line" }}>
                    {text}
                </p>
            </ComponentUseCase>
        </section>
    );
};

export default Accordion;
