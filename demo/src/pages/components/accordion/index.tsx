import { ElementColor, ElementSize } from "@bodynarf/react.components";
import AccordionComponent from "@bodynarf/react.components/components/accordion";
import Dropdown from "@bodynarf/react.components/components/dropdown/component";

import { Colors, Sizes, useColorSelection, useSizeSelection } from "../../../shared";

/** Accordion component demo */
function Accordion() {
    const sizeHookValues = useSizeSelection();
    const colorHookValues = useColorSelection();

    return (
        <section>
            <div className="block">
                <p style={{ whiteSpace: "pre-line" }}>
                    Accordion component
                </p>
            </div>
            <div className="block">
                <pre>{`<Accordion
    caption="Header"
    defaultExpanded={true}
    style={ElementColor.Warning}
>
    Content
</Accordion>`}
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
            <div className="block">
                <h4 className="subtitle is-5">
                    Sizes
                </h4>
                <div className="columns">
                    <div className="column is-2">
                        <Dropdown
                            hideOnOuterClick={true}
                            items={Sizes.selectableItems}
                            onSelect={sizeHookValues.onValueSelect}
                            value={sizeHookValues.selectedValue}
                            placeholder="Size"
                            deselectable={false}
                        />
                    </div>
                    <div className="column">
                        <pre>{`<Accordion caption="Header" size={ElementSize.${Sizes.keys[+sizeHookValues.selectedValue!.id]}}>
    Content
</Accordion>`}
                        </pre>
                    </div>
                </div>

                <AccordionComponent
                    caption="Header"
                    size={sizeHookValues.value}
                >
                    Content
                </AccordionComponent>
            </div>
            <div className="block">
                <h4 className="subtitle is-5">
                    Colors
                </h4>
                <div className="columns">
                    <div className="column is-2">
                        <Dropdown
                            hideOnOuterClick={true}
                            items={Colors.selectableItems}
                            onSelect={colorHookValues.onValueSelect}
                            value={colorHookValues.selectedValue}
                            placeholder="Color"
                            deselectable={false}
                        />
                    </div>
                    <div className="column">
                        <pre>{`<Accordion caption="Header" style={ElementColor.${Colors.keys[+colorHookValues.selectedValue!.id]}}>
    Content
</Accordion>`}
                        </pre>
                    </div>
                </div>

                <AccordionComponent
                    caption="Header"
                    style={colorHookValues.value}
                    size={ElementSize.Small}
                >
                    Content
                </AccordionComponent>
            </div>
        </section>
    )
}

export default Accordion;
