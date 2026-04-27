import { FC, useCallback, useRef, useState } from "react";

import { Optional } from "@bodynarf/utils";
import DropdownComponent from "@bodynarf/react.components/components/dropdown";
import { SelectableItem } from "@bodynarf/react.components";

import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import ComponentUseCase from "@app/sharedComponents/useCase";
import CodeExample from "@app/sharedComponents/codeExample";
import Log, { LogRef } from "@app/sharedComponents/log";

/** Dropdown component demo */
const Dropdown: FC = () => {
    const [item, setItem] = useState<Optional<SelectableItem>>();
    const onSelectLogRef = useRef<LogRef>(null);

    const handleSelect = useCallback((selected?: SelectableItem) => {
        setItem(selected);
        onSelectLogRef.current?.append(selected ? `selected: ${selected.displayValue}` : "deselected");
    }, []);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Dropdown"
                version="0.1"
                baseTypeName="BaseElementProps"
                description={
                    <>
                        On this page, many instances of the component use
                        {' '}
                        <b>the same</b>
                        {' '}
                        set of items and binding to the selected value.
                    </>
                }
            />

            <ComponentUseCase
                caption="Minimal use"
                description="The minimal set of props includes a list of selectable items, the currently selected item, and a function to handle value selection."
                code={
                    <CodeExample
                        code={[
                            `import { useState } from "react";`,
                            "",
                            `import { Optional } from "@bodynarf/utils";`,
                            `import { SelectableItem } from "@bodynarf/react.components";`,
                            `import Dropdown from "@bodynarf/react.components/components/dropdown";`,
                            "",
                            "const [item, setItem] = useState<Optional<SelectableItem>>();",
                            "",
                            `<Dropdown`,
                            `    value={item}`,
                            `    items={cities}`,
                            `    onSelect={setItem}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <DropdownComponent
                    value={item}
                    items={cities}
                    hideOnOuterClick
                    onSelect={setItem}
                    placeholder="Minimal use"
                />
            </ComponentUseCase>

            <hr />
            <div><h4 className="subtitle is-4 has-text-weight-semibold">Custom component props</h4></div>

            <ComponentUseCase
                captionIsCode
                caption="items"
                description="Array of SelectableItem objects available for selection. Each item has a required id, value and displayValue, plus optional title and icon."
                code={
                    <CodeExample
                        code={[
                            `import { SelectableItem } from "@bodynarf/react.components";`,
                            `import Dropdown from "@bodynarf/react.components/components/dropdown";`,
                            "",
                            `const items: Array<SelectableItem> = [`,
                            `    { id: "1", value: "tokyo", displayValue: "Tokyo", title: "City: Tokyo" },`,
                            `    { id: "2", value: "paris", displayValue: "Paris" },`,
                            `];`,
                            "",
                            `<Dropdown`,
                            `    value={item}`,
                            `    items={items}`,
                            `    onSelect={setItem}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <DropdownComponent
                    value={item}
                    items={cities}
                    hideOnOuterClick
                    onSelect={setItem}
                    placeholder="Select a city"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="value"
                description="Currently selected item. Must be stored and updated outside the component — fully controlled."
                code={
                    <CodeExample
                        code={[
                            `import { useState } from "react";`,
                            "",
                            `import { Optional } from "@bodynarf/utils";`,
                            `import { SelectableItem } from "@bodynarf/react.components";`,
                            `import Dropdown from "@bodynarf/react.components/components/dropdown";`,
                            "",
                            "const [item, setItem] = useState<Optional<SelectableItem>>();",
                            "",
                            `<Dropdown`,
                            `    value={item}`,
                            `    items={cities}`,
                            `    onSelect={setItem}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <DropdownComponent
                    value={item}
                    items={cities}
                    hideOnOuterClick
                    onSelect={setItem}
                    placeholder="value is shared across cases"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onSelect"
                description="Callback fired when the user selects or deselects (when deselectable) an item. Receives the selected SelectableItem or undefined."
                code={
                    <CodeExample
                        code={[
                            `import { useCallback } from "react";`,
                            "",
                            `import { SelectableItem } from "@bodynarf/react.components";`,
                            `import Dropdown from "@bodynarf/react.components/components/dropdown";`,
                            "",
                            "const handleSelect = useCallback((selected?: SelectableItem) => {",
                            "    console.log(selected?.displayValue ?? \"deselected\");",
                            "}, []);",
                            "",
                            `<Dropdown`,
                            `    value={item}`,
                            `    items={cities}`,
                            `    onSelect={handleSelect}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <DropdownComponent
                    value={item}
                    items={cities}
                    hideOnOuterClick
                    onSelect={handleSelect}
                    placeholder="Select a city"
                />
                <Log ref={onSelectLogRef} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="placeholder"
                description="Text shown on the trigger button when no value is selected."
                code={
                    <CodeExample
                        code={[
                            `import Dropdown from "@bodynarf/react.components/components/dropdown";`,
                            "",
                            `<Dropdown`,
                            `    items={cities}`,
                            `    value={undefined}`,
                            `    onSelect={setItem}`,
                            `    placeholder="Some placeholder text"`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <DropdownComponent
                    items={cities}
                    value={undefined}
                    hideOnOuterClick
                    onSelect={setItem}
                    placeholder="Some placeholder text"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="hideOnOuterClick"
                description="Automatically close the list when the user clicks outside the dropdown. Enabled by default."
                code={
                    <CodeExample
                        code={[
                            `import Dropdown from "@bodynarf/react.components/components/dropdown";`,
                            "",
                            `<Dropdown`,
                            `    value={item}`,
                            `    items={cities}`,
                            `    onSelect={setItem}`,
                            `    hideOnOuterClick={false}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <DropdownComponent
                    value={item}
                    items={cities}
                    onSelect={setItem}
                    hideOnOuterClick={false}
                    placeholder="Stays open on outer click"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="deselectable"
                description="Allow clearing the selected value by clicking the selected item again. Disabled by default."
                code={
                    <CodeExample
                        code={[
                            `import Dropdown from "@bodynarf/react.components/components/dropdown";`,
                            "",
                            `<Dropdown`,
                            `    deselectable`,
                            `    value={item}`,
                            `    items={cities}`,
                            `    onSelect={setItem}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <DropdownComponent
                    deselectable
                    value={item}
                    items={cities}
                    onSelect={setItem}
                    hideOnOuterClick
                    placeholder="Select a city"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="listMaxHeight"
                description="CSS value for the maximum height of the dropdown list. Useful for long lists."
                code={
                    <CodeExample
                        code={[
                            `import Dropdown from "@bodynarf/react.components/components/dropdown";`,
                            "",
                            `<Dropdown`,
                            `    value={item}`,
                            `    items={cities}`,
                            `    onSelect={setItem}`,
                            `    listMaxHeight="5rem"`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <DropdownComponent
                    value={item}
                    items={cities}
                    onSelect={setItem}
                    listMaxHeight="5rem"
                    hideOnOuterClick
                    placeholder="Select a city"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="compact"
                description="Use a compact layout — the trigger button only takes up as much width as the current selection. Disabled by default."
                code={
                    <CodeExample
                        code={[
                            `import Dropdown from "@bodynarf/react.components/components/dropdown";`,
                            "",
                            `<Dropdown`,
                            `    compact`,
                            `    value={item}`,
                            `    items={cities}`,
                            `    onSelect={setItem}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <DropdownComponent
                    compact
                    value={item}
                    items={cities}
                    onSelect={setItem}
                    hideOnOuterClick
                    placeholder="Select a city"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="disabled"
                description="Disable the component — the dropdown cannot be opened and no selection is possible."
                code={
                    <CodeExample
                        code={[
                            `import Dropdown from "@bodynarf/react.components/components/dropdown";`,
                            "",
                            `<Dropdown`,
                            `    disabled`,
                            `    value={item}`,
                            `    items={cities}`,
                            `    onSelect={setItem}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <DropdownComponent
                    disabled
                    value={item}
                    items={cities}
                    onSelect={setItem}
                    hideOnOuterClick
                    placeholder="Select a city"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="label"
                description="Label configuration rendered above (or inline with) the dropdown."
                code={
                    <CodeExample
                        code={[
                            `import Dropdown from "@bodynarf/react.components/components/dropdown";`,
                            "",
                            `<Dropdown`,
                            `    value={item}`,
                            `    items={cities}`,
                            `    onSelect={setItem}`,
                            `    label={{ caption: "City", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <DropdownComponent
                    value={item}
                    items={cities}
                    onSelect={setItem}
                    label={{ caption: "City", horizontal: true }}
                    hideOnOuterClick
                    placeholder="Select a city"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="noDataText"
                description="Text shown inside the dropdown list when items is an empty array."
                code={
                    <CodeExample
                        code={[
                            `import Dropdown from "@bodynarf/react.components/components/dropdown";`,
                            "",
                            `<Dropdown`,
                            `    items={[]}`,
                            `    value={undefined}`,
                            `    onSelect={setItem}`,
                            `    noDataText="Nothing here"`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <DropdownComponent
                    items={[]}
                    value={undefined}
                    onSelect={() => { }}
                    hideOnOuterClick
                    placeholder="Open to see no-data text"
                    noDataText="NOTHING HERE"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="searchable"
                description="Enable case-insensitive search filtering inside the list."
                code={
                    <CodeExample
                        code={[
                            `import Dropdown from "@bodynarf/react.components/components/dropdown";`,
                            "",
                            `<Dropdown`,
                            `    searchable`,
                            `    value={item}`,
                            `    items={cities}`,
                            `    onSelect={setItem}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <DropdownComponent
                    searchable
                    value={item}
                    items={cities}
                    onSelect={setItem}
                    hideOnOuterClick
                    placeholder="Type to search cities"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="noDataByQuery"
                description="Text shown when search is enabled and no items match the current query. Requires searchable."
                code={
                    <CodeExample
                        code={[
                            `import Dropdown from "@bodynarf/react.components/components/dropdown";`,
                            "",
                            `<Dropdown`,
                            `    searchable`,
                            `    value={item}`,
                            `    items={cities}`,
                            `    onSelect={setItem}`,
                            `    noDataByQuery="No cities match your query"`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <DropdownComponent
                    searchable
                    value={item}
                    items={cities}
                    onSelect={setItem}
                    hideOnOuterClick
                    placeholder="Type to search"
                    noDataByQuery="No ItEmS fOuNd"
                />
            </ComponentUseCase>

            <hr />
            <div>
                <h4 className="subtitle is-4 has-text-weight-semibold">SelectableItem props</h4>
            </div>

            <ComponentUseCase
                captionIsCode
                caption="title"
                description="Tooltip text shown when hovering over an item in the list."
                code={
                    <CodeExample
                        code={[
                            `import { SelectableItem } from "@bodynarf/react.components";`,
                            `import Dropdown from "@bodynarf/react.components/components/dropdown";`,
                            "",
                            `const items: Array<SelectableItem> = [`,
                            `    { id: "1", value: "a", displayValue: "Item A", title: "Hover tooltip for A" },`,
                            `    { id: "2", value: "b", displayValue: "Item B", title: "Hover tooltip for B" },`,
                            `];`,
                            "",
                            `<Dropdown value={item} items={items} onSelect={setItem} />`,
                        ].join("\n")}
                    />
                }
            >
                <DropdownComponent
                    value={item}
                    items={cities}
                    onSelect={setItem}
                    hideOnOuterClick
                    placeholder="Items have title tooltips"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="icon"
                description="Optional icon displayed next to the item label. Uses Bootstrap Icons name (without bi- prefix)."
                code={
                    <CodeExample
                        code={[
                            `import { SelectableItem } from "@bodynarf/react.components";`,
                            `import Dropdown from "@bodynarf/react.components/components/dropdown";`,
                            "",
                            `const items: Array<SelectableItem> = [`,
                            `    { id: "1", value: "a", displayValue: "Item A", icon: { name: "star" } },`,
                            `    { id: "2", value: "b", displayValue: "Item B", icon: { name: "heart" } },`,
                            `];`,
                            "",
                            `<Dropdown value={item} items={items} onSelect={setItem} />`,
                        ].join("\n")}
                    />
                }
            >
                <DropdownComponent
                    value={item}
                    onSelect={setItem}
                    items={itemsWithIcons}
                    hideOnOuterClick
                    placeholder="Items with icons"
                />
            </ComponentUseCase>
        </section>
    );
};

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
        name: ++index % 2 === 0
            ? "exclamation-square"
            : `${++index % 2}-square`,
    }
}));
