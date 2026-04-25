import { FC, useRef } from "react";

import { Accordion as AccordionComponent } from "@bodynarf/react.components";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";
import Log, { LogRef } from "@app/sharedComponents/log";

/** Accordion component demo */
const Accordion: FC = () => {
    const onToggleLogRef = useRef<LogRef>(null);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Accordion"
                version="1.6"
                baseTypeName="BaseElementProps"
                description="Accordion is a collapsible container component that helps organize content into sections. Each accordion has a header (caption) that can be clicked to expand or collapse its content. It supports different sizes, colors, and can be controlled programmatically through props"
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Minimal configuration requires only caption and children."
                code={
                    <CodeExample
                        code={[
                            `import { Accordion } from "@bodynarf/react.components";`,
                            "",
                            `<Accordion caption="Header">`,
                            "    Content",
                            "</Accordion>",
                        ].join("\n")}
                    />
                }
            >
                <AccordionComponent caption="Header">
                    Content
                </AccordionComponent>
            </ComponentUseCase>

            <hr />
            <div><h4 className="subtitle is-4 has-text-weight-semibold">Custom component props</h4></div>

            <ComponentUseCase
                captionIsCode
                caption="children"
                description="Content rendered inside the collapsible panel. Accepts any ReactNode."
                code={
                    <CodeExample
                        code={[
                            `import { Accordion } from "@bodynarf/react.components";`,
                            "",
                            `<Accordion caption="Header">`,
                            "    <p>Any <strong>ReactNode</strong> content.</p>",
                            "</Accordion>",
                        ].join("\n")}
                    />
                }
            >
                <AccordionComponent caption="Header">
                    <p>Any <strong>ReactNode</strong> content.</p>
                </AccordionComponent>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="caption"
                description="Text displayed in the accordion header bar."
                code={
                    <CodeExample
                        code={[
                            `import { Accordion } from "@bodynarf/react.components";`,
                            "",
                            `<Accordion caption="My section title">`,
                            "    Content",
                            "</Accordion>",
                        ].join("\n")}
                    />
                }
            >
                <AccordionComponent caption="My section title">
                    Content
                </AccordionComponent>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="defaultExpanded"
                description="When set, the accordion is rendered in an expanded state on mount."
                code={
                    <CodeExample
                        code={[
                            `import { Accordion } from "@bodynarf/react.components";`,
                            "",
                            `<Accordion caption="Header" defaultExpanded>`,
                            "    Content",
                            "</Accordion>",
                        ].join("\n")}
                    />
                }
            >
                <AccordionComponent caption="Header" defaultExpanded>
                    Content
                </AccordionComponent>
            </ComponentUseCase>

            <ComponentSizeCase
                captionIsCode
                caption="size"
                description="Controls the visual size of the accordion header. Supports all ElementSize values."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { Accordion, ElementSize } from "@bodynarf/react.components";`,
                            "",
                            `<Accordion`,
                            `    caption="Size"`,
                            `    size={ElementSize.${id}}`,
                            `    defaultExpanded`,
                            `>`,
                            "    Content",
                            "</Accordion>",
                        ].join("\n")}
                    />
                }
                componentProvider={size =>
                    <AccordionComponent caption="Size" size={size} defaultExpanded>
                        Content
                    </AccordionComponent>
                }
            />

            <ComponentColorCase
                captionIsCode
                caption="style"
                description="Color variant applied to the accordion header. Supports all ElementColor values."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { Accordion, ElementColor } from "@bodynarf/react.components";`,
                            "",
                            `<Accordion`,
                            `    caption="Color"`,
                            `    style={ElementColor.${id}}`,
                            `    defaultExpanded`,
                            `>`,
                            "    Content",
                            "</Accordion>",
                        ].join("\n")}
                    />
                }
                componentProvider={style =>
                    <AccordionComponent caption="Color" style={style} defaultExpanded>
                        Content
                    </AccordionComponent>
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="onToggle"
                description="Called when the accordion is expanded or collapsed. Receives the new collapsed state as a boolean."
                code={
                    <CodeExample
                        code={[
                            `import { Accordion } from "@bodynarf/react.components";`,
                            "",
                            `<Accordion`,
                            `    caption="onToggle handler"`,
                            `    onToggle={collapsed => console.log("collapsed:", collapsed)}`,
                            `>`,
                            "    Content",
                            "</Accordion>",
                        ].join("\n")}
                    />
                }
            >
                <AccordionComponent
                    caption="onToggle handler"
                    onToggle={collapsed => onToggleLogRef.current?.append(`collapsed: ${collapsed}`)}
                >
                    Content
                </AccordionComponent>
                <Log ref={onToggleLogRef} />
            </ComponentUseCase>
        </section>
    );
};

export default Accordion;
