
import { ElementColor } from "@bodynarf/react.components";
import TagComponent from "@bodynarf/react.components/components/tag";
import Dropdown from "@bodynarf/react.components/components/dropdown";

import { Colors, Sizes, useColorSelection, useSizeSelection } from "../../../shared";

/** Tag component demo */
function Tag() {
    const sizeHookValues = useSizeSelection();
    const colorHookValues = useColorSelection();
    const lightColorHookValues = useColorSelection();

    return (
        <section>
            <div className="block">
                <h4 className="title is-4">
                    Tag component
                </h4>

                <h4 className="title is-5">
                    Default
                </h4>
                <TagComponent content="Tag content" /> = <code>
                    {`<Tag content="Tag content" />`}
                </code>
            </div>
            <div className="block">
                <h4 className="subtitle is-5">
                    Rounded
                </h4>
                <div className="columns">
                    <div className="column">
                        <pre>
                            {`<Tag content="Tag content" style={ElementColor.Success} rounded={true} />`}
                        </pre>
                    </div>
                </div>

                <TagComponent content="Tag content" style={ElementColor.Success} rounded />
            </div>
            <div className="block">
                <h4 className="subtitle is-5">
                    Custom color
                </h4>
                <div className="columns">
                    <div className="column">
                        <pre>
                            {`<Tag content="Custom color" customColor={{ color: "black", backgroundColor: "#98ffff" }} />`}
                        </pre>
                    </div>
                </div>

                <TagComponent content="Custom color" customColor={{ color: "black", backgroundColor: "#98ffff" }} />
            </div>
            <div className="block">
                <h4 className="subtitle is-5">
                    Sizes (Normal and small sizes are equal)
                </h4>
                <div className="columns">
                    <div className="column is-2">
                        <Dropdown
                            hideOnOuterClick={true}
                            items={Sizes.selectableItems.filter(x => +x.id !== 1)}
                            onSelect={sizeHookValues.onValueSelect}
                            value={sizeHookValues.selectedValue}
                            placeholder="Size"
                            deselectable={false}
                        />
                    </div>
                    <div className="column">
                        <pre>
                            {`<Tag content="Tag size" size={ElementSize.${Sizes.keys[+sizeHookValues.selectedValue!.id]}} />`}
                        </pre>
                    </div>
                </div>

                <TagComponent content="Tag size" size={sizeHookValues.value} />
            </div>
            <div className="block">
                <h4 className="subtitle is-5">
                    Styles
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
                        <pre>{`<Tag content="Tag color" style={ElementColor.${Colors.keys[+colorHookValues.selectedValue!.id]}} />`}
                        </pre>
                    </div>
                </div>

                <TagComponent content="Tag color" style={colorHookValues.value} />
            </div>
            <div className="block">
                <h4 className="subtitle is-5">
                    Styles (with light color)
                </h4>
                <div className="columns">
                    <div className="column is-2">
                        <Dropdown
                            hideOnOuterClick={true}
                            items={Colors.selectableItems}
                            onSelect={lightColorHookValues.onValueSelect}
                            value={lightColorHookValues.selectedValue}
                            placeholder="Color"
                            deselectable={false}
                        />
                    </div>
                    <div className="column">
                        <pre>{`<Tag content="Tag light color" lightColor={true} style={ElementColor.${Colors.keys[+lightColorHookValues.selectedValue!.id]}} />`}
                        </pre>
                    </div>
                </div>

                <TagComponent content="Tag light color" style={lightColorHookValues.value} lightColor />
            </div>
        </section>
    )
}

export default Tag;
