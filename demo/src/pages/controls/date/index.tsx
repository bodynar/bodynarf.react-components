import { emptyFn } from "@bodynarf/utils";
import { ValidationStatus } from "@bodynarf/react.components";
import DateComponent from "@bodynarf/react.components/components/primitives/date";
import Dropdown from "@bodynarf/react.components/components/dropdown";

import { useSizeSelection, useColorSelection, Sizes, Colors } from "../../../shared";

/** Date component demo */
function Date() {
    const sizeHookValues = useSizeSelection();
    const colorHookValues = useColorSelection();

    return (
        <section>
            <div className="block">
                <h4 className="title is-4">
                    Date picker
                </h4>
                <h5 className="title is-5">
                    Default
                </h5>
                <div>
                    <code>{`<Date onValueChange={onValueChangeHandler} label={{ caption: "date picker label", horizontal: true }} />`}</code>
                    <br />
                    <br />
                    <div>
                        <DateComponent
                            label={{ caption: "date picker label", horizontal: true }}
                            onValueChange={emptyFn}
                        />
                    </div>
                </div>
            </div>
            <hr />
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
                        <pre>{`<Date size={ElementSize.${Sizes.keys[+sizeHookValues.selectedValue!.id]}}/>`}
                        </pre>
                    </div>
                </div>

                <DateComponent
                    label={{ caption: "date picker label", horizontal: true }}
                    onValueChange={emptyFn}
                    size={sizeHookValues.value}
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
                        <pre>{`<Date style={ElementColor.${Colors.keys[+colorHookValues.selectedValue!.id]}}>`}
                        </pre>
                    </div>
                </div>

                <DateComponent
                    label={{ caption: "date picker label", horizontal: true }}
                    onValueChange={emptyFn}
                    style={colorHookValues.value}
                />
            </div>

            <hr />
            <div className="block">
                <h5 className="title is-5">
                    <code>rounded</code>
                </h5>
                <div>
                    <code>{`<Date rounded />`}</code>
                    <br />
                    <br />
                    <div>
                        <DateComponent
                            rounded
                            onValueChange={emptyFn}
                            label={{ caption: "date picker label", horizontal: true }}
                        />
                    </div>
                </div>
            </div>

            <hr />
            <div className="block">
                <h5 className="title is-5">
                    <code>loading</code>
                </h5>
                <div>
                    <code>{`<Date loading />`}</code>
                    <br />
                    <br />
                    <div>
                        <DateComponent
                            loading
                            onValueChange={emptyFn}
                            label={{ caption: "date picker label", horizontal: true }}
                        />
                    </div>
                </div>
            </div>

            <hr />
            <div className="block">
                <span>
                    <code>validationState</code>
                </span>

                <br />
                <br />
                <pre>
                    {`<Date loading validationState={{ messages: ["Message 1", "Message 2"], status: ValidationStatus.Invalid, }} />`}
                </pre>
                <br />
                <DateComponent
                    onValueChange={emptyFn}
                    label={{ caption: "date picker label", horizontal: true }}
                    validationState={{
                        messages: ["Message 1", "Message 2"],
                        status: ValidationStatus.Invalid,
                    }}
                />
            </div>
        </section>
    )
}

export default Date;
