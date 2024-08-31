import { useState } from "react";

import { ValidationStatus } from "@bodynarf/react.components";
import DropdownComponent, { SelectableItem } from "@bodynarf/react.components/components/dropdown";

import DemoComponentTitleInfoMessage from "../../../shared/components/title";
import CommonPropsSuppressExampleInfoMessage from "../../../shared/components/commonPropsSuppress";
import ComponentUseCase from "../../../shared/components/useCase";

/** Dropdown component demo */
function Dropdown() {
    const [item, setItem] = useState<SelectableItem | undefined>();

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Dropdown"
                description={<>In this demo all dropdowns share <b>same</b> items source and data binding to value</>}
            />
            <ComponentUseCase
                caption="Default"
                code={<pre>{`const items: Array<SelectableItem> = [...];
const [item, setItem] = useState<SelectableItem | undefined>();

/* ... */

<Dropdown
    hideOnOuterClick
    items={cities}
    onSelect={setItem}
    value={item}             <--- if not set - selecting of item will not change visual placeholder of component
    placeholder="Default lookup"
/>`}</pre>}
                description="By default component require props that are shown in example"
                component={<DropdownComponent
                    value={item}
                    items={cities}
                    hideOnOuterClick
                    onSelect={setItem}
                    placeholder="Default lookup"
                />}
            />
            <CommonPropsSuppressExampleInfoMessage />
            <ComponentUseCase
                caption="Items with icon"
                code={`SelectableItem.icon`}
                description="Items can have own icons"
                component={
                    <DropdownComponent
                        deselectable
                        hideOnOuterClick
                        placeholder="Lookup"
                        value={item}
                        onSelect={setItem}
                        items={itemsWithIcons}
                    />}
            />
            <ComponentUseCase
                caption="hideOnOuterClick"
                code="<Dropdown hideOnOuterClick={false} />"
                captionIsCode
                description="Clicks outside of dropdown will not force dropdown to close"
                component={<DropdownComponent value={item} items={cities} hideOnOuterClick={false} onSelect={setItem} placeholder="Lookup" />}
            />
            <ComponentUseCase
                caption="deselectable"
                code="<Dropdown deselectable />"
                captionIsCode
                description="Dropdown can loose current selection via deselect button (appears only after selection)"
                component={<DropdownComponent deselectable value={item} items={cities} hideOnOuterClick onSelect={setItem} placeholder="Lookup" />}
            />
            <ComponentUseCase
                caption="searchable"
                code="<Dropdown searchable />"
                captionIsCode
                description="Dropdown with option to search through items"
                component={<DropdownComponent searchable value={item} items={cities} hideOnOuterClick onSelect={setItem} placeholder="Lookup" />}
            />
            <ComponentUseCase
                caption="noDataText"
                code={`<Dropdown noDataText="NOTHING HERE" />`}
                captionIsCode
                description="Caption for message when no records provided. Default is 'No items found'"
                component={<DropdownComponent
                    noDataText="NOTHING HERE"

                    value={item}
                    items={cities}
                    hideOnOuterClick
                    onSelect={setItem}
                    placeholder="Default lookup"
                />}
            />
            <ComponentUseCase
                caption="noDataByQuery"
                code={`<Dropdown noDataByQuery="no hay entradas para el filtro" />`}
                captionIsCode
                description="Caption for message when no records found by current can be customized. Default is 'No items found by specified search'. Try to search text 'some_random_not_existed'"
                component={<DropdownComponent
                    noDataByQuery="no hay entradas para el filtro"

                    value={item}
                    items={cities}
                    hideOnOuterClick
                    onSelect={setItem}
                    placeholder="Default lookup"
                />}
            />
            <ComponentUseCase
                caption="listMaxHeight"
                code={`<Dropdown listMaxHeight="3rem" />`}
                captionIsCode
                description="Dropdown list height can be restricted"
                component={<DropdownComponent listMaxHeight="3rem" value={item} items={cities} hideOnOuterClick onSelect={setItem} placeholder="Lookup" />}
            />
            <ComponentUseCase
                caption="compact"
                code={`<Dropdown compact />`}
                captionIsCode
                description="Dropdown will take only that width that required by its content"
                component={<DropdownComponent compact value={item} items={cities} hideOnOuterClick onSelect={setItem} placeholder="Lookup" />}
            />
            <ComponentUseCase
                caption="disabled"
                code={`<Dropdown disabled />`}
                captionIsCode
                description="Dropdown will be in disabled state"
                component={<DropdownComponent disabled value={item} items={cities} hideOnOuterClick onSelect={setItem} placeholder="Lookup" />}
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
                component={<DropdownComponent label={{ caption: "Dropdown label", horizontal: true }} value={item} items={cities} hideOnOuterClick onSelect={setItem} placeholder="Lookup" />}
            />
            <ComponentUseCase
                caption="validationState"
                code={`<DropdownComponent validationState={{ messages: ["Message 1", "Message 2"], status: ValidationStatus.Invalid, }} />`}
                captionIsCode
                description="Dropdown supports validation states"
                component={<DropdownComponent validationState={{ messages: ["Message 1", "Message 2"], status: ValidationStatus.Invalid, }} value={item} items={cities} hideOnOuterClick onSelect={setItem} placeholder="Lookup" />}
            />
        </section>
    );
}

export default Dropdown;

const cities = [
    "Tokyo", "Delhi", "Shanghai", "São Paulo", "Mexico City", "Cairo", "Mumbai", "Beijing", "Dhaka", "Osaka",
    "New York", "Karachi", "Buenos Aires", "Chongqing", "Istanbul", "Kolkata", "Manila", "Lagos", "Rio de Janeiro",
    "Tianjin", "Kinshasa", "Guangzhou", "Los Angeles", "Moscow", "Shenzhen", "Lahore", "Bangalore", "Paris", "Bogotá",
    "Jakarta", "Chennai", "Lima", "Bangkok", "Seoul", "Nagoya", "Hyderabad", "London", "Tehran", "Chicago", "Chengdu",
    "Nanjing", "Wuhan", "Ho Chi Minh City", "Luanda", "Ahmedabad", "Kuala Lumpur", "Xi'an", "Hong Kong", "Dongguan",
    "Hangzhou", "Foshan", "Shenyang", "Riyadh", "Baghdad", "Santiago", "Surat", "Madrid", "Suzhou", "Pune", "Harbin",
    "Houston", "Dallas", "Toronto", "Dar es Salaam", "Miami", "Belo Horizonte", "Singapore", "Philadelphia", "Atlanta",
    "Fukuoka", "Khartoum", "Barcelona", "Johannesburg", "Saint Petersburg", "Qingdao", "Dalian", "Washington, D.C.", "Yangon", "Alexandria", "Jinan", "Guadalajara"
].map((name, index) => ({
    value: name,
    displayValue: `[${index}] ${name}`,
    id: name,
    title: `City with name ${name}`
}));

const itemsWithIcons = cities.map((x, index) => ({
    ...x,
    displayValue: x.value,
    icon: {
        name: ++index === 10
            ? "exclamation-square"
            : `${++index % 10}-square`,
    }
}));
