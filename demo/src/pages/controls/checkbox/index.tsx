import { emptyFn } from "@bodynarf/utils";

import CheckboxComponent from "@bodynarf/react.components/components/primitives/checkbox";
import Dropdown from "@bodynarf/react.components/components/dropdown";
import { ElementColor } from "@bodynarf/react.components";

import { Colors, Sizes, useColorSelection, useSizeSelection } from "../../../shared";

/** Checkbox component demo */
function Checkbox() {
    const sizeHookValues = useSizeSelection();
    const colorHookValues = useColorSelection();

    return (
        <section>
            <div className="block">
                <h4 className="title is-4">
                    Checkbox
                </h4>
                <h5 className="title is-5">
                    Default
                </h5>
                <p>
                    Control works fine even without label. But for more convenience its recommended to have label.caption as on example bellow:
                </p>
                <CheckboxComponent onValueChange={emptyFn} label={{ caption: "Default checkbox", horizontal: false }} />
                <code>{`<Checkbox onValueChange={onValueChangeHandler} label={{ caption: "Default checkbox", horizontal: false }} />`}</code>
            </div>

            <hr />
            <div className="block">
                <h4 className="subtitle is-5">
                    Without label
                </h4>
                <code>
                    <code>{`<Checkbox onValueChange={emptyFn} />`}</code>
                </code>
                <br />
                <br />
                <CheckboxComponent onValueChange={emptyFn} />
            </div>

            <span>
                <hr />
                In next examples these common props configuration will not be presented to save space
                <hr />
            </span>

            <hr />
            <div className="block">
                <h4 className="subtitle is-5">
                    <code>
                        block
                    </code>
                </h4>
                <p>
                    Control and label will have own gray background
                </p>
                <code>
                    <code>{`<Checkbox block />`}</code>
                </code>
                <br />
                <br />
                <CheckboxComponent onValueChange={emptyFn} block label={{ caption: "Default checkbox", horizontal: false }} />
            </div>

            <hr />
            <div className="block">
                <h4 className="subtitle is-5">
                    Without border
                </h4>
                <p>
                    Removes border from control
                </p>
                <code>
                    <code>{`<Checkbox withoutBorder />`}</code>
                </code>
                <br />
                <br />
                <CheckboxComponent onValueChange={emptyFn} withoutBorder label={{ caption: "Default checkbox", horizontal: false }} />
            </div>

            <div className="block">
                <h4 className="subtitle is-5">
                    Sizes
                </h4>
                <p>

                </p>
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
                        <pre>{`<Checkbox size={ElementSize.${Sizes.keys[+sizeHookValues.selectedValue!.id]}}/>`}
                        </pre>
                    </div>
                </div>

                <CheckboxComponent
                    onValueChange={emptyFn}
                    size={sizeHookValues.value}
                    label={{ caption: "Sized checkbox", horizontal: false }}
                />
            </div>

            <hr />
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
                        <pre>{`<Checkbox style={ElementColor.${Colors.keys[+colorHookValues.selectedValue!.id]}}>`}
                        </pre>
                    </div>
                </div>

                <CheckboxComponent
                    label={{ caption: "Colored checkbox", horizontal: false }}
                    style={colorHookValues.value}
                    onValueChange={emptyFn}
                />
            </div>

            <hr />
            <div className="block">
                <h4 className="subtitle is-5">
                    <code>hasBackgroundColor</code>
                </h4>
                <p>
                    Add background to control according to current <code>style</code> (change style in dropdown above)
                </p>
                <code>
                    <code>{`<Checkbox hasBackgroundColor />`}</code>
                </code>
                <br />
                <br />
                <CheckboxComponent
                    hasBackgroundColor
                    onValueChange={emptyFn}
                    style={colorHookValues.value}
                    label={{ caption: "Colored checkbox", horizontal: false }}
                />
            </div>

            <hr />
            <div className="block">
                <h4 className="subtitle is-5">
                    <code>hasBackgroundColor</code>
                </h4>
                <p>
                    Can be used only with <code>hasBackgroundColor</code>. Removes background from control when unchecked
                </p>
                <code>
                    <code>{`<Checkbox hasBackgroundColor fixBackgroundColor />`}</code>
                </code>
                <br />
                <br />
                <CheckboxComponent
                    hasBackgroundColor
                    fixBackgroundColor
                    onValueChange={emptyFn}
                    style={colorHookValues.value}
                    label={{ caption: "Colored checkbox", horizontal: false }}
                />
            </div>

            <hr />
            <div className="block">
                <h4 className="subtitle is-5">
                    <code>isFormLabel</code>
                </h4>
                <p>
                    Organizes markup to make label looks like in forms
                </p>
                <code>
                    <code>{`<Checkbox isFormLabel />`}</code>
                </code>
                <br />
                <br />
                <CheckboxComponent
                    isFormLabel
                    onValueChange={emptyFn}
                    style={ElementColor.Success}
                    label={{ caption: "Colored checkbox", horizontal: false }}
                />
            </div>

            <hr />
            <div className="block">
                <h4 className="subtitle is-5">
                    <code>rounded</code>
                </h4>
                <p>
                    Speak for itself
                </p>
                <code>
                    <code>{`<Checkbox rounded />`}</code>
                </code>
                <br />
                <br />
                <CheckboxComponent
                    rounded
                    onValueChange={emptyFn}
                    style={ElementColor.Success}
                    label={{ caption: "Colored checkbox", horizontal: false }}
                />
            </div>
        </section>
    )
}

export default Checkbox;
