import { useCallback, useState } from "react";

import { isNullOrUndefined } from "@bodynarf/utils";

import { ElementColor, ElementSize, SelectableItem } from "@bodynarf/react.components";
import AccordionComponent from "@bodynarf/react.components/components/accordion";
import Dropdown from "@bodynarf/react.components/components/dropdown/component";

import { Colors, Sizes } from "../../../shared";

/** Accordion component demo */
function Accordion() {
    const [selectedSize, setSelectedSize] = useState(Sizes.selectableItems[0]);
    const [selectedColor, setSelectedColor] = useState(Colors.selectableItems[0]);

    const onSizeSelect = useCallback(
        (item?: SelectableItem) => {
            if (isNullOrUndefined(item)) {
                return;
            }

            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            setSelectedSize(item!);
        }, []);    

    const onColorSelect = useCallback(
        (item?: SelectableItem) => {
            if (isNullOrUndefined(item)) {
                return;
            }

            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            setSelectedColor(item!);
        }, []);

    const size = selectedSize!.value as ElementSize;
    const color = selectedColor!.value as ElementColor;

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
                            onSelect={onSizeSelect}
                            value={selectedSize}
                            placeholder="Size"
                            deselectable={false}
                        />
                    </div>
                    <div className="column">
                        <pre>{`<Accordion caption="Header" size={ElementSize.${Sizes.keys[+selectedSize!.id]}}>
    Content
</Accordion>`}
                        </pre>
                    </div>
                </div>

                <AccordionComponent
                    caption="Header"
                    size={size}
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
                            onSelect={onColorSelect}
                            value={selectedColor}
                            placeholder="Color"
                            deselectable={false}
                        />
                    </div>
                    <div className="column">
                        <pre>{`<Accordion caption="Header" style={ElementColor.${Colors.keys[+selectedColor!.id]}}>
    Content
</Accordion>`}
                        </pre>
                    </div>
                </div>

                <AccordionComponent
                    caption="Header"
                    style={color}
                    size={ElementSize.Small}
                >
                    Content
                </AccordionComponent>
            </div>
        </section>
    )
}

export default Accordion;
