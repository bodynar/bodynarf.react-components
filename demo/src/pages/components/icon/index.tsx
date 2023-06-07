import IconComponent from "@bodynarf/react.components/components/icon";

import { Sizes, useSizeSelection } from "../../../shared";
import Dropdown from "@bodynarf/react.components/components/dropdown";

/** Icon component demo */
function Icon() {
    const sizeHookValues = useSizeSelection();

    return (
        <section>
            <div className="block">
                <h4 className="title is-4">
                    Icon component via <a className="is-underlined" href="https://icons.getbootstrap.com/" target="_blank">Bootstrap-icons</a>
                </h4>
                <p>
                    To use - pass name without <code>bi-</code>
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
                            onSelect={sizeHookValues.onValueSelect}
                            value={sizeHookValues.selectedValue}
                            placeholder="Size"
                            deselectable={false}
                        />
                    </div>
                    <div className="column">
                        <pre>{`<Icon name="alarm" size={ElementSize.${Sizes.keys[+sizeHookValues.selectedValue!.id]}} />`}
                        </pre>
                    </div>
                </div>

                <IconComponent name="alarm" size={sizeHookValues.value} />
            </div>

        </section>
    )
}

export default Icon;
