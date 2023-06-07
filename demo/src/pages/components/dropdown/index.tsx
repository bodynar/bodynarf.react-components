import { useState } from "react";

import { ValidationStatus } from "@bodynarf/react.components";
import DropdownComponent, { SelectableItem } from "@bodynarf/react.components/components/dropdown";

/** Dropdown component demo */
function Dropdown() {
    const items: Array<SelectableItem> =
        new Array(10).fill(0).map((_, x) => `${x + 1}`).map(x => ({
            value: x,
            displayValue: x,
            id: x,
        }));

    const [item, setItem] = useState<SelectableItem | undefined>();

    return (
        <section>
            <div className="block">
                <span>
                    Dropdown component
                    <br />
                    In this demo all dropdowns share <b>same</b> items source and data binding to value
                </span>

                <br />
                <br />
                <pre>
                    {`const items: Array<SelectableItem> = [...];
const [item, setItem] = useState<SelectableItem | undefined>();

/* ... */

<Dropdown
    hideOnOuterClick
    items={items}
    onSelect={setItem}
    value={item}             <--- if not set - selecting of item will not change visual placeholder of component
    placeholder="Default lookup"
/>`}
                </pre>
                <br />
                <DropdownComponent
                    value={item}
                    items={items}
                    onSelect={setItem}
                    hideOnOuterClick
                    placeholder="Default lookup"
                />
            </div>
            <span>
                <hr />
                In next examples these common props configuration will not be presented to save space
                <hr />
            </span>
            <div className="block">
                <span>
                    <code>hideOnOuterClick = false</code>. Clicks outside of dropdown will not force dropdown to close
                </span>

                <br />
                <br />
                <pre>
                    {`<Dropdown hideOnOuterClick={false} />`}
                </pre>
                <br />
                <DropdownComponent
                    value={item}
                    items={items}
                    onSelect={setItem}
                    hideOnOuterClick={false}
                    placeholder="Default lookup"
                />
            </div>
            <div className="block">
                <span>
                    <code>deselectable</code>. Dropdown can loose current selection via deselect button (appears only after selection)
                </span>

                <br />
                <br />
                <pre>
                    {`<Dropdown deselectable />`}
                </pre>
                <br />
                <DropdownComponent
                    value={item}
                    deselectable
                    items={items}
                    onSelect={setItem}
                    hideOnOuterClick={false}
                    placeholder="Default lookup"
                />
            </div>
            <div className="block">
                <span>
                    <code>listMaxHeight</code>. Dropdown list height can be restricted
                </span>

                <br />
                <br />
                <pre>
                    {`<Dropdown listMaxHeight="3rem" />`}
                </pre>
                <br />
                <DropdownComponent
                    value={item}
                    items={items}
                    onSelect={setItem}
                    listMaxHeight="3rem"
                    hideOnOuterClick={false}
                    placeholder="Default lookup"
                />
            </div>
            <div className="block">
                <span>
                    <code>compact</code>. Dropdown will take only that width that required by its content
                </span>

                <br />
                <br />
                <pre>
                    {`<Dropdown compact />`}
                </pre>
                <br />
                <DropdownComponent
                    compact
                    value={item}
                    items={items}
                    hideOnOuterClick
                    onSelect={setItem}
                    placeholder="Default lookup"
                />
            </div>
            <div className="block">
                <span>
                    <code>disabled</code>. Dropdown will be in disabled state
                </span>

                <br />
                <br />
                <pre>
                    {`<Dropdown disabled />`}
                </pre>
                <br />
                <DropdownComponent
                    disabled
                    value={item}
                    items={items}
                    hideOnOuterClick
                    onSelect={setItem}
                    placeholder="Default lookup"
                />
            </div>
            <div className="block">
                <span>
                    <code>label</code>. Dropdown can have describing label. But due component structure it cannot be focused with label click
                    <br />
                    Cannot be used with <code>compact</code> mode
                </span>

                <br />
                <br />
                <pre>
                    {`<Dropdown label={{ caption: "Dropdown label", horizontal: true }} />`}
                </pre>
                <br />
                <DropdownComponent
                    compact
                    value={item}
                    items={items}
                    hideOnOuterClick
                    onSelect={setItem}
                    placeholder="Default lookup"
                    label={{ caption: "Dropdown label", horizontal: true }}
                />
            </div>
            <div className="block">
                <span>
                    <code>validationState</code>. Dropdown supports validation states
                </span>

                <br />
                <br />
                <pre>
                    {`<Dropdown validationState={{ messages: ["Message 1", "Message 2"], status: ValidationStatus.Invalid, }} />`}
                </pre>
                <br />
                <DropdownComponent
                    value={item}
                    items={items}
                    hideOnOuterClick
                    onSelect={setItem}
                    placeholder="Default lookup"
                    validationState={{
                        messages: ["Message 1", "Message 2"],
                        status: ValidationStatus.Invalid,
                    }}
                />
            </div>
        </section>
    )
}

export default Dropdown;
