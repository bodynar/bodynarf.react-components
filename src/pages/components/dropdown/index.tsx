import { FC, useState } from "react";

import { Optional } from "@bodynarf/utils";
import DropdownComponent, { SelectableItem } from "@bodynarf/react.components/components/dropdown";

import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import ComponentUseCase from "@app/sharedComponents/useCase";
import CodeExample from "@app/sharedComponents/codeExample";

/** Dropdown component demo */
const Dropdown: FC = () => {
    const [item, setItem] = useState<Optional<SelectableItem>>();

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Dropdown"
                hidePropsNotice
                description={
                    <>
                        On this page, many instances of the component use
                        {' '}
                        <b>
                            the same
                        </b>
                        {' '}
                        set of items and binding to the selected value
                    </>
                }
            />

            <ComponentUseCase
                caption="Minimal use"
                description="The minimal set of props includes a list of selectable items, the currently selected item, and a function to handle value selection"
                code={
                    <CodeExample
                        code={[
                            `import { useState } from "react";`,
                            ``,
                            `import { Optional } from "@bodynarf/utils";`,
                            `import DropdownComponent, { SelectableItem } from "@bodynarf/react.components/components/dropdown";`,
                            "",
                            "/* ... */",
                            `const cities = ["Tokyo", "Delhi", "Shanghai", "São Paulo", "Mexico City"] // TEMP data`,
                            "    .map((name, index) => ({",
                            "        value: name,",
                            "        displayValue: `[${index}] ${name}`,",
                            "        id: name,",
                            "        title: `City with name ${name}`",
                            "    }));",
                            "/* ... */",
                            "const [item, setItem] = useState<Optional<SelectableItem>>();",
                            "/* ... */",
                            "",
                            '<DropdownComponent',
                            '    value={item}',
                            '    items={cities}',
                            '    onSelect={setItem}',
                            '/>',
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

            <ComponentUseCase
                captionIsCode
                caption="placeholder"
                description="Option for setting placeholder text for the label when no value is selected. The current value is intentionally set to undefined to see the placeholder"
                code={
                    <CodeExample
                        code={[
                            `import { useState } from "react";`,
                            ``,
                            `import { Optional } from "@bodynarf/utils";`,
                            `import DropdownComponent, { SelectableItem } from "@bodynarf/react.components/components/dropdown";`,
                            "",
                            "/* ... */",
                            `const cities = ["Tokyo", "Delhi", "Shanghai", "São Paulo", "Mexico City"] // TEMP data`,
                            "    .map((name, index) => ({",
                            "        value: name,",
                            "        displayValue: `[${index}] ${name}`,",
                            "        id: name,",
                            "        title: `City with name ${name}`",
                            "    }));",
                            "/* ... */",
                            "const [item, setItem] = useState<Optional<SelectableItem>>();",
                            "/* ... */",
                            "",
                            '<DropdownComponent',
                            '    items={cities}',
                            '    value={undefined}',
                            '    onSelect={setItem}',
                            '    placeholder="Some placeholder text"',
                            '/>',
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
                description="Option to automatically hide the list when clicking outside the dropdown area. Enabled by default"
                code={
                    <CodeExample
                        code={[
                            `import { useState } from "react";`,
                            ``,
                            `import { Optional } from "@bodynarf/utils";`,
                            `import DropdownComponent, { SelectableItem } from "@bodynarf/react.components/components/dropdown";`,
                            "",
                            "/* ... */",
                            `const cities = ["Tokyo", "Delhi", "Shanghai", "São Paulo", "Mexico City"] // TEMP data`,
                            "    .map((name, index) => ({",
                            "        value: name,",
                            "        displayValue: `[${index}] ${name}`,",
                            "        id: name,",
                            "        title: `City with name ${name}`",
                            "    }));",
                            "/* ... */",
                            "const [item, setItem] = useState<Optional<SelectableItem>>();",
                            "/* ... */",
                            "",
                            '<DropdownComponent',
                            '    value={item}',
                            '    items={cities}',
                            '    onSelect={setItem}',
                            '    hideOnOuterClick={false}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <DropdownComponent
                    value={item}
                    items={cities}
                    onSelect={setItem}
                    hideOnOuterClick={false}
                    placeholder="Some placeholder text"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="deselectable"
                description="Option to allow clearing the selected value. Disabled by default"
                code={
                    <CodeExample
                        code={[
                            `import { useState } from "react";`,
                            ``,
                            `import { Optional } from "@bodynarf/utils";`,
                            `import DropdownComponent, { SelectableItem } from "@bodynarf/react.components/components/dropdown";`,
                            "",
                            "/* ... */",
                            `const cities = ["Tokyo", "Delhi", "Shanghai", "São Paulo", "Mexico City"] // TEMP data`,
                            "    .map((name, index) => ({",
                            "        value: name,",
                            "        displayValue: `[${index}] ${name}`,",
                            "        id: name,",
                            "        title: `City with name ${name}`",
                            "    }));",
                            "/* ... */",
                            "const [item, setItem] = useState<Optional<SelectableItem>>();",
                            "/* ... */",
                            "",
                            '<DropdownComponent',
                            '    value={item}',
                            '    deselectable',
                            '    items={cities}',
                            '    onSelect={setItem}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <DropdownComponent
                    value={item}
                    deselectable
                    items={cities}
                    onSelect={setItem}
                    hideOnOuterClick
                    placeholder="Some placeholder text"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="listMaxHeight"
                description="Option to limit the maximum height of the dropdown list"
                code={
                    <CodeExample
                        code={[
                            `import { useState } from "react";`,
                            ``,
                            `import { Optional } from "@bodynarf/utils";`,
                            `import DropdownComponent, { SelectableItem } from "@bodynarf/react.components/components/dropdown";`,
                            "",
                            "/* ... */",
                            `const cities = ["Tokyo", "Delhi", "Shanghai", "São Paulo", "Mexico City"] // TEMP data`,
                            "    .map((name, index) => ({",
                            "        value: name,",
                            "        displayValue: `[${index}] ${name}`,",
                            "        id: name,",
                            "        title: `City with name ${name}`",
                            "    }));",
                            "/* ... */",
                            "const [item, setItem] = useState<Optional<SelectableItem>>();",
                            "/* ... */",
                            "",
                            '<DropdownComponent',
                            '    value={item}',
                            '    items={cities}',
                            '    onSelect={setItem}',
                            '    listMaxHeight="5rem"',
                            '/>',
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
                    placeholder="Some placeholder text"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="compact"
                description="Option for using a compact version of the component, which visually occupies only the width it needs. Disabled by default"
                code={
                    <CodeExample
                        code={[
                            `import { useState } from "react";`,
                            ``,
                            `import { Optional } from "@bodynarf/utils";`,
                            `import DropdownComponent, { SelectableItem } from "@bodynarf/react.components/components/dropdown";`,
                            "",
                            "/* ... */",
                            `const cities = ["Tokyo", "Delhi", "Shanghai", "São Paulo", "Mexico City"] // TEMP data`,
                            "    .map((name, index) => ({",
                            "        value: name,",
                            "        displayValue: `[${index}] ${name}`,",
                            "        id: name,",
                            "        title: `City with name ${name}`",
                            "    }));",
                            "/* ... */",
                            "const [item, setItem] = useState<Optional<SelectableItem>>();",
                            "/* ... */",
                            "",
                            '<DropdownComponent',
                            '    compact',
                            '    value={item}',
                            '    items={cities}',
                            '    onSelect={setItem}',
                            '/>',
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
                    placeholder="Some placeholder text"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="disabled"
                description="Option to disable the component functionality and render it in a disabled state. Disabled by default"
                code={
                    <CodeExample
                        code={[
                            `import { useState } from "react";`,
                            ``,
                            `import { Optional } from "@bodynarf/utils";`,
                            `import DropdownComponent, { SelectableItem } from "@bodynarf/react.components/components/dropdown";`,
                            "",
                            "/* ... */",
                            `const cities = ["Tokyo", "Delhi", "Shanghai", "São Paulo", "Mexico City"] // TEMP data`,
                            "    .map((name, index) => ({",
                            "        value: name,",
                            "        displayValue: `[${index}] ${name}`,",
                            "        id: name,",
                            "        title: `City with name ${name}`",
                            "    }));",
                            "/* ... */",
                            "const [item, setItem] = useState<Optional<SelectableItem>>();",
                            "/* ... */",
                            "",
                            '<DropdownComponent',
                            '    disabled',
                            '    value={item}',
                            '    items={cities}',
                            '    onSelect={setItem}',
                            '/>',
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
                    placeholder="Some placeholder text"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="label"
                description="Option to configure the label. Not set by default"
                code={
                    <CodeExample
                        code={[
                            `import { useState } from "react";`,
                            ``,
                            `import { Optional } from "@bodynarf/utils";`,
                            `import DropdownComponent, { SelectableItem } from "@bodynarf/react.components/components/dropdown";`,
                            "",
                            "/* ... */",
                            `const cities = ["Tokyo", "Delhi", "Shanghai", "São Paulo", "Mexico City"] // TEMP data`,
                            "    .map((name, index) => ({",
                            "        value: name,",
                            "        displayValue: `[${index}] ${name}`,",
                            "        id: name,",
                            "        title: `City with name ${name}`",
                            "    }));",
                            "/* ... */",
                            "const [item, setItem] = useState<Optional<SelectableItem>>();",
                            "/* ... */",
                            "",
                            '<DropdownComponent',
                            '    value={item}',
                            '    items={cities}',
                            '    onSelect={setItem}',
                            '    label={{ caption: "Label caption", horizontal: true }}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <DropdownComponent
                    value={item}
                    items={cities}
                    onSelect={setItem}
                    label={{ caption: "Label caption", horizontal: true }}
                    hideOnOuterClick
                    placeholder="Some placeholder text"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="noDataText"
                description="Option to specify the text displayed when the item list is empty"
                code={
                    <CodeExample
                        code={[
                            `import { useState } from "react";`,
                            ``,
                            `import { Optional } from "@bodynarf/utils";`,
                            `import DropdownComponent, { SelectableItem } from "@bodynarf/react.components/components/dropdown";`,
                            "",
                            "/* ... */",
                            `const cities = ["Tokyo", "Delhi", "Shanghai", "São Paulo", "Mexico City"] // TEMP data`,
                            "    .map((name, index) => ({",
                            "        value: name,",
                            "        displayValue: `[${index}] ${name}`,",
                            "        id: name,",
                            "        title: `City with name ${name}`",
                            "    }));",
                            "/* ... */",
                            "const [item, setItem] = useState<Optional<SelectableItem>>();",
                            "/* ... */",
                            "",
                            '<DropdownComponent',
                            '    items={[]}',
                            '    value={undefined}',
                            '    onSelect={() => {}}',
                            '    noDataText="NOTHING HERE"',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <DropdownComponent
                    items={[]}
                    value={undefined}
                    onSelect={() => { }}
                    noDataText="NOTHING HERE"
                    hideOnOuterClick
                    placeholder="Some placeholder text"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="searchable"
                description="Option to enable case-insensitive search"
                code={
                    <CodeExample
                        code={[
                            `import { useState } from "react";`,
                            ``,
                            `import { Optional } from "@bodynarf/utils";`,
                            `import DropdownComponent, { SelectableItem } from "@bodynarf/react.components/components/dropdown";`,
                            "",
                            "/* ... */",
                            `const cities = ["Tokyo", "Delhi", "Shanghai", "São Paulo", "Mexico City"] // TEMP data`,
                            "    .map((name, index) => ({",
                            "        value: name,",
                            "        displayValue: `[${index}] ${name}`,",
                            "        id: name,",
                            "        title: `City with name ${name}`",
                            "    }));",
                            "/* ... */",
                            "const [item, setItem] = useState<Optional<SelectableItem>>();",
                            "/* ... */",
                            "",
                            '<DropdownComponent',
                            '    searchable',
                            '    value={item}',
                            '    items={cities}',
                            '    onSelect={setItem}',
                            '/>',
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
                    placeholder="Some placeholder text"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="noDataByQuery"
                description="Option to specify the text displayed when no items match the search. Search must be enabled. Not set by default"
                code={
                    <CodeExample
                        code={[
                            `import { useState } from "react";`,
                            ``,
                            `import { Optional } from "@bodynarf/utils";`,
                            `import DropdownComponent, { SelectableItem } from "@bodynarf/react.components/components/dropdown";`,
                            "",
                            "/* ... */",
                            `const cities = ["Tokyo", "Delhi", "Shanghai", "São Paulo", "Mexico City"] // TEMP data`,
                            "    .map((name, index) => ({",
                            "        value: name,",
                            "        displayValue: `[${index}] ${name}`,",
                            "        id: name,",
                            "        title: `City with name ${name}`",
                            "    }));",
                            "/* ... */",
                            "const [item, setItem] = useState<Optional<SelectableItem>>();",
                            "/* ... */",
                            "",
                            '<DropdownComponent',
                            '    searchable',
                            '    value={item}',
                            '    items={cities}',
                            '    onSelect={setItem}',
                            '    noDataByQuery="No items found"',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <DropdownComponent
                    searchable
                    value={item}
                    items={cities}
                    onSelect={setItem}
                    noDataByQuery="No items found"
                    hideOnOuterClick
                    placeholder="Some placeholder text"
                />
            </ComponentUseCase>

            <ComponentUseCase
                caption="Item Icon"
                description="It is also possible to configure a list of items with an icon"
                code={
                    <CodeExample
                        code={[
                            `import { useState } from "react";`,
                            ``,
                            `import { Optional } from "@bodynarf/utils";`,
                            `import DropdownComponent, { SelectableItem } from "@bodynarf/react.components/components/dropdown";`,
                            "",
                            "/* ... */",
                            `const cities = ["Tokyo", "Delhi", "Shanghai", "São Paulo", "Mexico City"] // TEMP data`,
                            "    .map((name, index) => ({",
                            "        value: name,",
                            "        displayValue: `[${index}] ${name}`,",
                            "        id: name,",
                            "        title: `City with name ${name}`",
                            "        icon: {",
                            "            name: ++index % 2 === 0",
                            '                ? "exclamation-square"',
                            "                : `${++index % 2}-square`,",
                            "        }",
                            "    }));",
                            "/* ... */",
                            "const [item, setItem] = useState<Optional<SelectableItem>>();",
                            "/* ... */",
                            "",
                            '<DropdownComponent',
                            '    searchable',
                            '    value={item}',
                            '    items={cities}',
                            '    onSelect={setItem}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <DropdownComponent
                    value={item}
                    onSelect={setItem}
                    items={itemsWithIcons}
                    hideOnOuterClick
                    placeholder="Some placeholder text"
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
