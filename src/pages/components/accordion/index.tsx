import AccordionComponent from "@bodynarf/react.components/components/accordion";

import ComponentUseCase from "@app/sharedComponents/useCase";
import CommonPropsSuppressExampleInfoMessage from "@app/sharedComponents/commonPropsSuppress";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";

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
    );
}

export default Accordion;
