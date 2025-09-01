import { FC, useCallback, useState } from "react";

import { emptyFn } from "@bodynarf/utils";
import { ElementColor } from "@bodynarf/react.components";
import MultiselectComponent, { MultiselectItem } from "@bodynarf/react.components/components/multiselect";

import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import ComponentUseCase from "@app/sharedComponents/useCase";
import CodeExample from "@app/sharedComponents/codeExample";

/** Multiselect component demo */
const Multiselect: FC = () => {
    const [onChangeResult, setOnChangeResult] = useState("");
    const appendOnChangeResult = useCallback(
        (item: MultiselectItem, selected: boolean) => setOnChangeResult(
            t => t
                + "\n"
                + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getMilliseconds()
                + " => " + `item ${item.displayValue}: ${selected ? "selected" : "not selected"}`
        ),
        []
    );

    const [clearResult, setClearResult] = useState("");
    const appendClearResult = useCallback(
        () => setClearResult(
            t => t
                + "\n"
                + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getMilliseconds()
                + " => " + "clear event"
        ),
        []
    );

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Multiselect"
                baseTypeName="BaseElementProps"
                description={
                    <>
                        On this page, instances of the component use
                        {' '}
                        <b>
                            the same
                        </b>
                        {' '}
                        set of items and binding to the selected value
                        <br />
                        Information about the selected items is stored inside the component. After the list of selected items is updated, the
                        {' '}
                        <code>
                            onChange
                        </code>
                        {' '}
                        event is triggered
                    </>}
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Minimal set of props — a list of items to display and a handler function for the selection change event"
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import MultiselectComponent, { MultiselectItem } from "@bodynarf/react.components/components/multiselect";`,
                            "",
                            "/* ... */",
                            `const cities = ["Tokyo", "Delhi", "Shanghai", "São Paulo", "Mexico City"] // TEMP data`,
                            "    .map((name, index) => ({",
                            "        value: name,",
                            "        displayValue: `[${index}] ${name}`,",
                            "        id: name,",
                            "        title: `City with name ${name}`",
                            "        selected: false,",
                            "    }) as MultiselectItem);",
                            "/* ... */",
                            "",
                            '<MultiselectComponent',
                            '    items={cities}',
                            '    onChange={emptyFn} // TODO: Replace with your own handler function',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <MultiselectComponent
                    items={cities}
                    onChange={emptyFn}

                    hideOnOuterClick
                    placeholder="Default multiselect"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onChange"
                description="Handling changes to an item’s selection state by subscribing to the onChange event"
                code={
                    <CodeExample
                        code={[
                            `import { useCallback } from "react"`,
                            ``,
                            `import MultiselectComponent, { MultiselectItem } from "@bodynarf/react.components/components/multiselect";`,
                            "",
                            "/* ... */",
                            `const cities = ["Tokyo", "Delhi", "Shanghai", "São Paulo", "Mexico City"] // TEMP data`,
                            "    .map((name, index) => ({",
                            "        value: name,",
                            "        displayValue: `[${index}] ${name}`,",
                            "        id: name,",
                            "        title: `City with name ${name}`",
                            "        selected: false,",
                            "    }));",
                            "/* ... */",
                            "const ON_CHANGE_HANDLE_FN = useCallback((item: MultiselectItem, selected: boolean) => { /* handler fn */}, []);",
                            "/* ... */",
                            "",
                            '<MultiselectComponent',
                            '    items={cities}',
                            '    onChange={ON_CHANGE_HANDLE_FN}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <MultiselectComponent
                    items={cities}
                    onChange={appendOnChangeResult}

                    hideOnOuterClick
                    placeholder="Default multiselect"
                />
                <p style={{ whiteSpace: "pre-line" }}>
                    {onChangeResult}
                </p>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="placeholder"
                description="Option for setting placeholder text for the label when no value is selected"
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import MultiselectComponent, { MultiselectItem } from "@bodynarf/react.components/components/multiselect";`,
                            "",
                            "/* ... */",
                            `const cities = ["Tokyo", "Delhi", "Shanghai", "São Paulo", "Mexico City"] // TEMP data`,
                            "    .map((name, index) => ({",
                            "        value: name,",
                            "        displayValue: `[${index}] ${name}`,",
                            "        id: name,",
                            "        title: `City with name ${name}`",
                            "        selected: false,",
                            "    }) as MultiselectItem);",
                            "/* ... */",
                            "",
                            '<MultiselectComponent',
                            '    items={cities}',
                            '    onChange={emptyFn} // TODO: Replace with your own handler function',
                            '    placeholder="Multiselect with placeholder"',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <MultiselectComponent
                    items={cities}
                    onChange={emptyFn}
                    placeholder="Multiselect with placeholder"

                    hideOnOuterClick
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="hideOnOuterClick"
                description="Option to automatically hide the list when clicking outside the dropdown area. Enabled by default"
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import MultiselectComponent, { MultiselectItem } from "@bodynarf/react.components/components/multiselect";`,
                            "",
                            "/* ... */",
                            `const cities = ["Tokyo", "Delhi", "Shanghai", "São Paulo", "Mexico City"] // TEMP data`,
                            "    .map((name, index) => ({",
                            "        value: name,",
                            "        displayValue: `[${index}] ${name}`,",
                            "        id: name,",
                            "        title: `City with name ${name}`",
                            "        selected: false,",
                            "    }) as MultiselectItem);",
                            "/* ... */",
                            "",
                            '<MultiselectComponent',
                            '    items={cities}',
                            '    onChange={emptyFn} // TODO: Replace with your own handler function',
                            '    hideOnOuterClick={false}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <MultiselectComponent
                    items={cities}
                    onChange={emptyFn}
                    hideOnOuterClick={false}

                    placeholder="placeholder"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="listMaxHeight"
                description="Option to limit the maximum height of the dropdown list"
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import MultiselectComponent, { MultiselectItem } from "@bodynarf/react.components/components/multiselect";`,
                            "",
                            "/* ... */",
                            `const cities = ["Tokyo", "Delhi", "Shanghai", "São Paulo", "Mexico City"] // TEMP data`,
                            "    .map((name, index) => ({",
                            "        value: name,",
                            "        displayValue: `[${index}] ${name}`,",
                            "        id: name,",
                            "        title: `City with name ${name}`",
                            "        selected: false,",
                            "    }) as MultiselectItem);",
                            "/* ... */",
                            "",
                            '<MultiselectComponent',
                            '    items={cities}',
                            '    onChange={emptyFn} // TODO: Replace with your own handler function',
                            '    listMaxHeight="5rem"',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <MultiselectComponent
                    items={cities}
                    onChange={emptyFn}
                    listMaxHeight="5rem"

                    placeholder="placeholder"
                    hideOnOuterClick
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="compact"
                description="Option for using a compact version of the component, which visually occupies only the width it needs. Disabled by default"
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import MultiselectComponent, { MultiselectItem } from "@bodynarf/react.components/components/multiselect";`,
                            "",
                            "/* ... */",
                            `const cities = ["Tokyo", "Delhi", "Shanghai", "São Paulo", "Mexico City"] // TEMP data`,
                            "    .map((name, index) => ({",
                            "        value: name,",
                            "        displayValue: `[${index}] ${name}`,",
                            "        id: name,",
                            "        title: `City with name ${name}`",
                            "        selected: false,",
                            "    }) as MultiselectItem);",
                            "/* ... */",
                            "",
                            '<MultiselectComponent',
                            '    compact',
                            '    items={cities}',
                            '    onChange={emptyFn} // TODO: Replace with your own handler function',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <MultiselectComponent
                    compact
                    items={cities}
                    onChange={emptyFn}

                    placeholder="placeholder"
                    hideOnOuterClick
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="disabled"
                description="Option to disable the component functionality and render it in a disabled state. Option disabled by default"
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import MultiselectComponent, { MultiselectItem } from "@bodynarf/react.components/components/multiselect";`,
                            "",
                            "/* ... */",
                            `const cities = ["Tokyo", "Delhi", "Shanghai", "São Paulo", "Mexico City"] // TEMP data`,
                            "    .map((name, index) => ({",
                            "        value: name,",
                            "        displayValue: `[${index}] ${name}`,",
                            "        id: name,",
                            "        title: `City with name ${name}`",
                            "        selected: false,",
                            "    }) as MultiselectItem);",
                            "/* ... */",
                            "",
                            '<MultiselectComponent',
                            '    disabled',
                            '    items={cities}',
                            '    onChange={emptyFn} // TODO: Replace with your own handler function',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <MultiselectComponent
                    disabled
                    items={cities}
                    onChange={emptyFn}

                    placeholder="placeholder"
                    hideOnOuterClick
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="label"
                description="Option to configure the label. Not set by default"
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import MultiselectComponent, { MultiselectItem } from "@bodynarf/react.components/components/multiselect";`,
                            "",
                            "/* ... */",
                            `const cities = ["Tokyo", "Delhi", "Shanghai", "São Paulo", "Mexico City"] // TEMP data`,
                            "    .map((name, index) => ({",
                            "        value: name,",
                            "        displayValue: `[${index}] ${name}`,",
                            "        id: name,",
                            "        title: `City with name ${name}`",
                            "        selected: false,",
                            "    }) as MultiselectItem);",
                            "/* ... */",
                            "",
                            '<MultiselectComponent',
                            '    items={cities}',
                            '    onChange={emptyFn} // TODO: Replace with your own handler function',
                            '    label={{ caption: "Label caption", horizontal: true }}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <MultiselectComponent
                    items={cities}
                    onChange={emptyFn}
                    label={{ caption: "Label caption", horizontal: true }}

                    placeholder="placeholder"
                    hideOnOuterClick
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="noDataText"
                description="Option to specify the text displayed when the item list is empty"
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import MultiselectComponent, { MultiselectItem } from "@bodynarf/react.components/components/multiselect";`,
                            "",
                            "/* ... */",
                            `const cities = ["Tokyo", "Delhi", "Shanghai", "São Paulo", "Mexico City"] // TEMP data`,
                            "    .map((name, index) => ({",
                            "        value: name,",
                            "        displayValue: `[${index}] ${name}`,",
                            "        id: name,",
                            "        title: `City with name ${name}`",
                            "        selected: false,",
                            "    }) as MultiselectItem);",
                            "/* ... */",
                            "",
                            '<MultiselectComponent',
                            '    items={[]}',
                            '    onChange={emptyFn} // TODO: Replace with your own handler function',
                            '    noDataText="NOTHING HERE"',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <MultiselectComponent
                    onChange={emptyFn}
                    items={[]}
                    noDataText="NOTHING HERE"

                    placeholder="placeholder"
                    hideOnOuterClick
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="searchable"
                description="Option to enable case-insensitive search. Enabled by default"
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import MultiselectComponent, { MultiselectItem } from "@bodynarf/react.components/components/multiselect";`,
                            "",
                            "/* ... */",
                            `const cities = ["Tokyo", "Delhi", "Shanghai", "São Paulo", "Mexico City"] // TEMP data`,
                            "    .map((name, index) => ({",
                            "        value: name,",
                            "        displayValue: `[${index}] ${name}`,",
                            "        id: name,",
                            "        title: `City with name ${name}`",
                            "        selected: false,",
                            "    }) as MultiselectItem);",
                            "/* ... */",
                            "",
                            '<MultiselectComponent',
                            '    items={cities}',
                            '    searchable={false}',
                            '    onChange={emptyFn} // TODO: Replace with your own handler function',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <MultiselectComponent
                    items={cities}
                    searchable={false}
                    onChange={emptyFn}

                    placeholder="placeholder"
                    hideOnOuterClick
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="noDataByQuery"
                description="Option to specify the text displayed when no items match the search. Search must be enabled. Not set by default"
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import MultiselectComponent, { MultiselectItem } from "@bodynarf/react.components/components/multiselect";`,
                            "",
                            "/* ... */",
                            `const cities = ["Tokyo", "Delhi", "Shanghai", "São Paulo", "Mexico City"] // TEMP data`,
                            "    .map((name, index) => ({",
                            "        value: name,",
                            "        displayValue: `[${index}] ${name}`,",
                            "        id: name,",
                            "        title: `City with name ${name}`",
                            "        selected: false,",
                            "    }) as MultiselectItem);",
                            "/* ... */",
                            "",
                            '<MultiselectComponent',
                            '    searchable',
                            '    items={cities}',
                            '    onChange={emptyFn} // TODO: Replace with your own handler function',
                            '    noDataByQuery="No ItEmS fOuNd"',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <MultiselectComponent
                    searchable
                    items={cities}
                    onChange={emptyFn}
                    noDataByQuery="No ItEmS fOuNd"

                    placeholder="placeholder"
                    hideOnOuterClick
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onClear"
                description="Option to clear selected values. Not set by default. When subscribed to the event, a cross icon appears for clearing"
                code={
                    <CodeExample
                        code={[
                            `import { useCallback } from "react"`,
                            ``,
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import MultiselectComponent, { MultiselectItem } from "@bodynarf/react.components/components/multiselect";`,
                            "",
                            "/* ... */",
                            `const cities = ["Tokyo", "Delhi", "Shanghai", "São Paulo", "Mexico City"] // TEMP data`,
                            "    .map((name, index) => ({",
                            "        value: name,",
                            "        displayValue: `[${index}] ${name}`,",
                            "        id: name,",
                            "        title: `City with name ${name}`",
                            "        selected: false,",
                            "    }));",
                            "/* ... */",
                            "const ON_CLEAR_HANDLE_FN = useCallback(() => { /* handler fn */}, []);",
                            "/* ... */",
                            "",
                            '<MultiselectComponent',
                            '    items={cities}',
                            '    onChange={emptyFn} // TODO: Replace with your own handler function',
                            '    onClear={ON_CLEAR_HANDLE_FN}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <MultiselectComponent
                    items={cities}
                    onChange={emptyFn}
                    onClear={appendClearResult}

                    hideOnOuterClick
                    placeholder="Default multiselect"
                />
                <p style={{ whiteSpace: "pre-line" }}>
                    {clearResult}
                </p>
            </ComponentUseCase>

            <ComponentUseCase
                caption="Item Icon"
                description="It is also possible to configure a list of items with an icon"
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import MultiselectComponent, { MultiselectItem } from "@bodynarf/react.components/components/multiselect";`,
                            "",
                            "/* ... */",
                            `const cities = ["Tokyo", "Delhi", "Shanghai", "São Paulo", "Mexico City"] // TEMP data`,
                            "    .map((name, index) => ({",
                            "        value: name,",
                            "        displayValue: `[${index}] ${name}`,",
                            "        id: name,",
                            "        title: `City with name ${name}`",
                            "        selected: false,",
                            "        icon: {",
                            "            name: ++index % 2 === 0",
                            '                ? "exclamation-square"',
                            "                : `${++index % 2}-square`,",
                            "        }",
                            "    }));",
                            "/* ... */",
                            "",
                            '<MultiselectComponent',
                            '    items={cities}',
                            '    onChange={emptyFn} // TODO: Replace with your own handler function',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <MultiselectComponent
                    onChange={emptyFn}
                    items={itemsWithIcons}

                    hideOnOuterClick
                    placeholder="Default multiselect"
                />
            </ComponentUseCase>

            <ComponentUseCase
                caption="Item pre selected state"
                description="It is also possible to configure a list of items with an selected state"
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import MultiselectComponent, { MultiselectItem } from "@bodynarf/react.components/components/multiselect";`,
                            "",
                            "/* ... */",
                            `const cities = ["Tokyo", "Delhi", "Shanghai", "São Paulo", "Mexico City"] // TEMP data`,
                            "    .map((name, index) => ({",
                            "        value: name,",
                            "        displayValue: `[${index}] ${name}`,",
                            "        id: name,",
                            "        title: `City with name ${name}`",
                            "        selected: ++index % 4 === 0,",
                            "    }));",
                            "/* ... */",
                            "",
                            '<MultiselectComponent',
                            '    items={cities}',
                            '    onChange={emptyFn} // TODO: Replace with your own handler function',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <MultiselectComponent
                    onChange={emptyFn}
                    items={preSelectedItems}

                    hideOnOuterClick
                    placeholder="Default multiselect"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="selectionCaption"
                description="The option allows you to specify a string template to display information about the number of selected items"
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import MultiselectComponent, { MultiselectItem } from "@bodynarf/react.components/components/multiselect";`,
                            "",
                            "/* ... */",
                            `const cities = ["Tokyo", "Delhi", "Shanghai", "São Paulo", "Mexico City"] // TEMP data`,
                            "    .map((name, index) => ({",
                            "        value: name,",
                            "        displayValue: `[${index}] ${name}`,",
                            "        id: name,",
                            "        title: `City with name ${name}`",
                            "        selected: false,",
                            "    }));",
                            "/* ... */",
                            "",
                            '<MultiselectComponent',
                            '    items={cities}',
                            '    onChange={emptyFn} // TODO: Replace with your own handler function',
                            '    selectionCaption="registros seleccionados: {0}"',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <MultiselectComponent
                    items={cities}
                    onChange={emptyFn}
                    selectionCaption="registros seleccionados: {0}"

                    hideOnOuterClick
                    placeholder="Default multiselect"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="checkboxConfig"
                description=""
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import { ElementColor } from "@bodynarf/react.components";`,
                            `import MultiselectComponent, { MultiselectItem } from "@bodynarf/react.components/components/multiselect";`,
                            "",
                            "/* ... */",
                            `const cities = ["Tokyo", "Delhi", "Shanghai", "São Paulo", "Mexico City"] // TEMP data`,
                            "    .map((name, index) => ({",
                            "        value: name,",
                            "        displayValue: `[${index}] ${name}`,",
                            "        id: name,",
                            "        title: `City with name ${name}`",
                            "        selected: false,",
                            "    }));",
                            "/* ... */",
                            "",
                            '<MultiselectComponent',
                            '    items={cities}',
                            '    onChange={emptyFn} // TODO: Replace with your own handler function',
                            '    checkboxConfig={{',
                            '        style: ElementColor.Success,',
                            '        rounded: true,',
                            '        hasBackgroundColor: true,',
                            '        fixBackgroundColor: true,',
                            '    }}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <MultiselectComponent
                    items={cities}
                    onChange={emptyFn}
                    checkboxConfig={{
                        style: ElementColor.Success,
                        rounded: true,
                        hasBackgroundColor: true,
                        fixBackgroundColor: true,
                    }}

                    hideOnOuterClick
                    placeholder="Default multiselect"
                />
            </ComponentUseCase>
        </section>
    );
};

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
        name: ++index === 2
            ? "exclamation-square"
            : `${++index % 2}-square`,
    }
}));

const preSelectedItems = cities.map((x, index) => ({
    ...x,
    selected: index % 4 === 0,
}));
