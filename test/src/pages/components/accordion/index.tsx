import { ElementColor, ElementSize } from "@bodynarf/react.components";
import AccordionComponent from "@bodynarf/react.components/components/accordion";

import { AllColorsString, AllSizesString } from "../../../shared";

/** Accordion component demo */
function Accordion() {
    const colors = Object.keys(ElementColor);
    const values = Object.values(ElementColor);
    
    return (
        <section>
            <div className="block">
                <p style={{ whiteSpace: "pre-line" }}>
                    Accordion component
                </p>
                <ul>
                    <li>Available colors: [{AllColorsString}]</li>
                    <li>Available sizes: [{AllSizesString}]</li>
                </ul>
            </div>
            <div className="block">
                <pre>{`<AccordionComponent
    caption="Header"
    defaultExpanded={true}
    style={ElementColor.Warning}
>
    Content
</AccordionComponent>`}
                </pre>
                <AccordionComponent
                    caption="Header"
                    defaultExpanded={true}
                    style={ElementColor.Warning}
                    className="mt-2"
                >
                    Content
                </AccordionComponent>
            </div>
            <details>
                <summary className="subtitle is-5">Sizes</summary>
                <div className="block">
                    <pre>{`<AccordionComponent caption="Header" size={ElementSize.Small}>
    Content
</AccordionComponent>`}
                    </pre>
                    <AccordionComponent caption="Header" size={ElementSize.Small} className="mt-1">
                        Content
                    </AccordionComponent>

                    <pre>{`<AccordionComponent caption="Header" size={ElementSize.Normal}>
    Content
</AccordionComponent>`}
                    </pre>
                    <AccordionComponent caption="Header" size={ElementSize.Normal} className="mt-1">
                        Content
                    </AccordionComponent>

                    <pre>{`<AccordionComponent caption="Header" size={ElementSize.Medium}>
    Content
</AccordionComponent>`}
                    </pre>
                    <AccordionComponent caption="Header" size={ElementSize.Medium} className="mt-1">
                        Content
                    </AccordionComponent>

                    <pre>{`<AccordionComponent caption="Header" size={ElementSize.Large}>
    Content
</AccordionComponent>`}
                    </pre>
                    <AccordionComponent caption="Header" size={ElementSize.Large} className="mt-1">
                        Content
                    </AccordionComponent>
                </div>
            </details>
            <details>
                <summary className="subtitle is-5">Colors</summary>
                <div className="block">
                    {colors.map((color, i) =>
                        <>
                            <pre>{`<AccordionComponent caption="Header" style={ElementColor.${color}}>
    Content
</AccordionComponent>`}
                            </pre>
                            <AccordionComponent caption="Header" style={values[i] as ElementColor} className="mt-1">
                                Content
                            </AccordionComponent>
                        </>
                    )}
                </div>
            </details>
        </section>
    )
}

export default Accordion;
