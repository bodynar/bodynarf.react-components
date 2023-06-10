import AccordionComponent from "@bodynarf/react.components/components/accordion";

import ComponentUseCase from "../../../shared/components/useCase";
import CommonPropsSuppressExampleInfoMessage from "../../../shared/components/commonPropsSuppress";
import ComponentSizeCase from "../../../shared/components/sizeUse";
import ComponentColorCase from "../../../shared/components/colorUse";
import DemoComponentTitleInfoMessage from "../../../shared/components/title";

/** Accordion component demo */
function Accordion() {
    return (
        <section>
            <DemoComponentTitleInfoMessage name="Accordion" />

            <ComponentUseCase
                caption="Default"
                code={`<Accordion caption="Header">Content</Accordion>`}
                description="Default configuration requires only caption"
                component={
                    <AccordionComponent
                        caption="Header"
                        className="mt-2"
                    >
                        Content
                    </AccordionComponent>
                }
            />
            <CommonPropsSuppressExampleInfoMessage />
            <ComponentUseCase
                caption="defaultExpanded"
                captionIsCode
                code={`<Accordion defaultExpanded> ...`}
                description="Content will be displayed & accordion will be opened by default"
                component={
                    <AccordionComponent
                        defaultExpanded
                        caption="Header"
                        className="mt-2"
                    >
                        Content
                    </AccordionComponent>
                }
            />
            <ComponentSizeCase
                caption="Sizes"
                codeProvider={id => `<Accordion size={ElementSize.${id}} > ...`}
                description="Component supports all available sizes"
                componentProvider={
                    size =>
                        <AccordionComponent
                            caption="Size"
                            size={size}
                        >
                            Content
                        </AccordionComponent>
                }
            />
            <ComponentColorCase
                caption="Colors"
                codeProvider={id => `<Accordion style={ElementColor.${id}} > ...`}
                description="Component supports all available colors"
                componentProvider={
                    style =>
                        <AccordionComponent
                            caption="Color"
                            style={style}
                        >
                            Content
                        </AccordionComponent>
                }
            />
        </section>
    )
}

export default Accordion;
