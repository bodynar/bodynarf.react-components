import { useState } from "react";

import { ValidationStatus } from "@bodynarf/react.components";
import DropdownComponent, { SelectableItem } from "@bodynarf/react.components/components/dropdown";
import DemoComponentTitleInfoMessage from "../../../shared/components/title";
import CommonPropsSuppressExampleInfoMessage from "../../../shared/components/commonPropsSuppress";
import ComponentUseCase from "../../../shared/components/useCase";

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
            <DemoComponentTitleInfoMessage
                name="Tabs"
                description={<>In this demo all dropdowns share <b>same</b> items source and data binding to value</>}
            />
            <ComponentUseCase
                caption="Default"
                code={<pre>{`const items: Array<SelectableItem> = [...];
const [item, setItem] = useState<SelectableItem | undefined>();

/* ... */

<Dropdown
    hideOnOuterClick
    items={items}
    onSelect={setItem}
    value={item}             <--- if not set - selecting of item will not change visual placeholder of component
    placeholder="Default lookup"
/>`}</pre>}
                description="By default component requires tab items and tab item change handler like on example"
                component={<DropdownComponent
                    value={item}
                    items={items}
                    hideOnOuterClick
                    onSelect={setItem}
                    placeholder="Default lookup"
                />}
            />
            <CommonPropsSuppressExampleInfoMessage />
            <ComponentUseCase
                caption="hideOnOuterClick"
                code="<Dropdown hideOnOuterClick={false} />"
                captionIsCode
                description="Clicks outside of dropdown will not force dropdown to close"
                component={<DropdownComponent value={item} items={items} hideOnOuterClick={false} onSelect={setItem} placeholder="Default lookup" />}
            />
            <ComponentUseCase
                caption="deselectable"
                code="<Dropdown deselectable />"
                captionIsCode
                description="Dropdown can loose current selection via deselect button (appears only after selection)"
                component={<DropdownComponent deselectable value={item} items={items} hideOnOuterClick onSelect={setItem} placeholder="Default lookup" />}
            />
            <ComponentUseCase
                caption="listMaxHeight"
                code={`<Dropdown listMaxHeight="3rem" />`}
                captionIsCode
                description="Dropdown list height can be restricted"
                component={<DropdownComponent listMaxHeight="3rem" value={item} items={items} hideOnOuterClick onSelect={setItem} placeholder="Default lookup" />}
            />
            <ComponentUseCase
                caption="compact"
                code={`<Dropdown compact />`}
                captionIsCode
                description="Dropdown will take only that width that required by its content"
                component={<DropdownComponent compact value={item} items={items} hideOnOuterClick onSelect={setItem} placeholder="Default lookup" />}
            />
            <ComponentUseCase
                caption="disabled"
                code={`<Dropdown disabled />`}
                captionIsCode
                description="Dropdown will be in disabled state"
                component={<DropdownComponent disabled value={item} items={items} hideOnOuterClick onSelect={setItem} placeholder="Default lookup" />}
            />
            <ComponentUseCase
                caption="label"
                code={`<Dropdown label={{ caption: "Dropdown label", horizontal: true }} />`}
                captionIsCode
                description={<>
                    Dropdown can have describing label. But due component structure it cannot be focused with label click
                    {`\n`}
                    Cannot be used with <code>compact</code> mode
                </>}
                component={<DropdownComponent label={{ caption: "Dropdown label", horizontal: true }} value={item} items={items} hideOnOuterClick onSelect={setItem} placeholder="Default lookup" />}
            />
            <ComponentUseCase
                caption="validationState"
                code={`validationState={{ messages: ["Message 1", "Message 2"], status: ValidationStatus.Invalid, }}`}
                captionIsCode
                description="Dropdown supports validation states"
                component={<DropdownComponent validationState={{ messages: ["Message 1", "Message 2"], status: ValidationStatus.Invalid, }} value={item} items={items} hideOnOuterClick onSelect={setItem} placeholder="Default lookup" />}
            />
        </section>
    );
}

export default Dropdown;
