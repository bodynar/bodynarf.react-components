import { ElementColor } from "@bodynarf/react.components";
import AccordionComponent from "@bodynarf/react.components/components/accordion";

import { AllColorsString, AllSizesString } from "../../../shared";

/** Accordion component demo */
function Accordion() {
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
        </section>
    )
}

export default Accordion;
