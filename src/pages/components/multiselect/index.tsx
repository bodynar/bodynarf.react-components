import { ElementColor, ValidationStatus } from "@bodynarf/react.components";
import MultiselectComponent from "@bodynarf/react.components/components/multiselect";

import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CommonPropsSuppressExampleInfoMessage from "@app/sharedComponents/commonPropsSuppress";
import ComponentUseCase from "@app/sharedComponents/useCase";
import { emptyFn } from "@bodynarf/utils";

/** Multiselect component demo */
function Multiselect() {
    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Multiselect"
                description={<>
                    In this demo all Multiselects share <b>same</b> items source and data binding to value
                    <br />
                    Selection state stored inside, in component. After each item select change event will be raised
                </>}
            />
            <ComponentUseCase
                caption="Default"
                code={<pre>{`const items: Array<MultiselectItem> = [ /* ... */ ];
const onItemSelect = useCallback(() => { /* handler code */}, []);

/* ... */

<Multiselect
    items={items}
    hideOnOuterClick
    onChange={emptyFn}
    placeholder="Default multiselect"
/>`}</pre>}
                description="By default component require props that are shown in example"
                component={<MultiselectComponent
                    items={cities}
                    hideOnOuterClick
                    onChange={emptyFn}
                    placeholder="Default multiselect"
                />}
            />
            <CommonPropsSuppressExampleInfoMessage />
            <ComponentUseCase
                caption="Items with pre-select state"
                code={`MultiselectItem.selected`}
                description="Items can be pre-selected"
                component={
                    <MultiselectComponent
                        items={preSelectedItems}

                        hideOnOuterClick
                        onChange={emptyFn}
                        placeholder="Default multiselect"
                    />}
            />

            <ComponentUseCase
                caption="Items with icon"
                code={`MultiselectItem.icon`}
                description="Items can have own icons"
                component={
                    <MultiselectComponent
                        items={itemsWithIcons}

                        hideOnOuterClick
                        onChange={emptyFn}
                        placeholder="Default multiselect"
                    />}
            />
            <ComponentUseCase
                caption="hideOnOuterClick"
                code="<Multiselect hideOnOuterClick={false} />"
                captionIsCode
                description="Clicks outside of Multiselect will not force Multiselect to close"
                component={<MultiselectComponent
                    hideOnOuterClick={false}

                    items={cities}
                    onChange={emptyFn}
                    placeholder="Default multiselect"
                />}
            />
            <ComponentUseCase
                caption="Clear all selection"
                code="<Multiselect onClear={onClearClickHandler} />"
                description="Multiselect allows to clear all selected items"
                component={<MultiselectComponent
                    onClear={emptyFn}

                    items={cities}
                    onChange={emptyFn}
                    hideOnOuterClick={false}
                    placeholder="Default multiselect"
                />}
            />
            <ComponentUseCase
                caption="searchable"
                code="<Multiselect searchable={false} />"
                captionIsCode
                description="Multiselect with option to search through items. Search is on by default"
                component={<MultiselectComponent
                    searchable={false}

                    items={cities}
                    hideOnOuterClick
                    onChange={emptyFn}
                    placeholder="Default multiselect"
                />}
            />
            <ComponentUseCase
                caption="listMaxHeight"
                code={`<Multiselect listMaxHeight="5rem" />`}
                captionIsCode
                description="Multiselect list height can be restricted"
                component={<MultiselectComponent
                    listMaxHeight="5rem"

                    items={cities}
                    hideOnOuterClick
                    onChange={emptyFn}
                    placeholder="Default multiselect"
                />}
            />
            <ComponentUseCase
                caption="selectionCaption"
                code={`<Multiselect selectionCaption="registros seleccionados: {0}" />`}
                captionIsCode
                description="Caption for selected state could be customized, with 1 position argument. Default is '{0} items selected'"
                component={<MultiselectComponent
                    selectionCaption="registros seleccionados: {0}"

                    items={cities}
                    hideOnOuterClick
                    onChange={emptyFn}
                    placeholder="Default multiselect"
                />}
            />
            <ComponentUseCase
                caption="noDataText"
                code={`<Multiselect noDataText="NOTHING HERE" />`}
                captionIsCode
                description="Caption for message when no records provided. Default is 'No items found'"
                component={<MultiselectComponent
                    noDataText="NOTHING HERE"

                    items={[]}
                    hideOnOuterClick
                    onChange={emptyFn}
                    placeholder="Default multiselect"
                />}
            />
            <ComponentUseCase
                caption="noDataByQuery"
                code={`<Multiselect noDataByQuery="no hay entradas para el filtro" />`}
                captionIsCode
                description="Caption for message when no records found by current can be customized. Default is 'No items found by specified search'. Try to search text 'some_random_not_existed'"
                component={<MultiselectComponent
                    noDataByQuery="no hay entradas para el filtro"

                    items={cities}
                    hideOnOuterClick
                    onChange={emptyFn}
                    placeholder="Default multiselect"
                />}
            />
            <ComponentUseCase
                caption="checkboxConfig"
                code={`<Multiselect checkboxConfig={{ style: ElementColor.Warning, hasBackgroundColor: true, fixBackgroundColor: true }} />`}
                captionIsCode
                description="Checkbox for items can be customized globally"
                component={<MultiselectComponent
                    checkboxConfig={{ style: ElementColor.Warning, hasBackgroundColor: true, fixBackgroundColor: true }}

                    items={cities}
                    hideOnOuterClick
                    onChange={emptyFn}
                    placeholder="Default multiselect"
                />}
            />
            <ComponentUseCase
                caption="compact"
                code={`<Multiselect compact />`}
                captionIsCode
                description="Multiselect will take only that width that required by its content"
                component={<MultiselectComponent
                    compact

                    items={cities}
                    hideOnOuterClick
                    onChange={emptyFn}
                    placeholder="Default multiselect"
                />}
            />
            <ComponentUseCase
                caption="disabled"
                code={`<Multiselect disabled />`}
                captionIsCode
                description="Multiselect will be in disabled state"
                component={<MultiselectComponent
                    disabled

                    items={cities}
                    hideOnOuterClick
                    onChange={emptyFn}
                    placeholder="Default multiselect"
                />}
            />
            <ComponentUseCase
                caption="label"
                code={`<Multiselect label={{ caption: "Multiselect label", horizontal: true }} />`}
                captionIsCode
                description={<>
                    Multiselect can have describing label. But due component structure it cannot be focused with label click
                    {`\n`}
                    Cannot be used with <code>compact</code> mode
                </>}
                component={<MultiselectComponent
                    label={{ caption: "Multiselect label", horizontal: true }}

                    items={cities}
                    hideOnOuterClick
                    onChange={emptyFn}
                    placeholder="Default multiselect"
                />}
            />
            <ComponentUseCase
                caption="validationState"
                code={`<MultiselectComponent validationState={{ messages: ["Message 1", "Message 2"], status: ValidationStatus.Invalid, }} />`}
                captionIsCode
                description="Multiselect supports validation states"
                component={<MultiselectComponent
                    validationState={{ messages: ["Message 1", "Message 2"], status: ValidationStatus.Invalid, }}

                    items={cities}
                    hideOnOuterClick
                    onChange={emptyFn}
                    placeholder="Default multiselect"
                />}
            />
        </section>
    );
}

export default Multiselect;

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
    title: `City with name ${name}`,
    selected: false,
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

const preSelectedItems = cities.map((x, index) => ({
    ...x,
    selected: index % 5 === 0,
}));
