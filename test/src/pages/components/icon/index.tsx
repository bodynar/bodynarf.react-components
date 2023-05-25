import { useCallback, useState } from "react";

import { isNullOrUndefined } from "@bodynarf/utils";
import { ElementSize, SelectableItem } from "@bodynarf/react.components";
import IconComponent from "@bodynarf/react.components/components/icon";

import { Sizes } from "../../../shared";
import Dropdown from "@bodynarf/react.components/components/dropdown";

/** Icon component demo */
function Icon() {
    const [selectedSize, setSelectedSize] = useState(Sizes.selectableItems[0]);

    const onSizeSelect = useCallback(
        (item?: SelectableItem) => {
            if (isNullOrUndefined(item)) {
                return;
            }

            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            setSelectedSize(item!);
        }, []);

    const size = selectedSize!.value as ElementSize;


    return (
        <section>
            <div className="block">
                <p style={{ whiteSpace: "pre-line" }}>
                    Icon component via <a className="is-underlined" href="https://icons.getbootstrap.com/" target="_blank">Bootstrap-icons</a>
                    {`\n`}To use - pass name without <code>bi-</code>
                </p>
                Available sizes: [{Sizes.string}]
                <br />
                <br />
                <IconComponent name="alarm" /> = <code>
                    {`<Icon name="alarm" />`}
                </code>
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
                        <pre>{`<Icon name="alarm" size={ElementSize.${Sizes.keys[+selectedSize!.id]}} />`}
                        </pre>
                    </div>
                </div>

                <IconComponent name="alarm" size={size} />
            </div>

        </section>
    )
}

export default Icon;
