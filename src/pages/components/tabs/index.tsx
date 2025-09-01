import { FC, useCallback, useState } from "react";

import { emptyFn, isStringEmpty } from "@bodynarf/utils";

import { SelectableItem } from "@bodynarf/react.components";
import TabsComponent, { TabItem, TabsStyle } from "@bodynarf/react.components/components/tabs";

import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import ComponentEnumCase from "@app/sharedComponents/enumSelectionCase";
import ComponentPositionCase from "@app/sharedComponents/positionUse";
import CodeExample from "@app/sharedComponents/codeExample";

const tabs: Array<TabItem> = [
    { caption: `Tab Uno`, id: "Uno", },
    { caption: `Tab Dos`, id: "Dos", },
    { caption: `Tab Tres`, id: "Tres", },
    { caption: `Tab Cuatro`, id: "Cuatro", },
    { caption: `Tab Cinco`, id: "Cinco", },
];

const tabsStyles: Array<keyof typeof TabsStyle> = [
    "default",
    "boxed",
    "radioButton",
    "radioButtonRounded"
];

const tabsStylesAsSelectList = tabsStyles.map((x, i) => ({
    displayValue: isStringEmpty(x) ? "default" : x,
    id: i.toString(),
    value: x,
}) as SelectableItem);

/** Tabs component demo */
const Tabs: FC = () => {
    const [activeItemChangeLog, setActiveItemChangeLog] = useState("");
    const appendActiveItemChangeLog = useCallback(
        (item: TabItem) => setActiveItemChangeLog(
            t => t
                + "\n"
                + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getMilliseconds()
                + " => " + `active tab changed to "${item.caption} [id="${item.id}"]"`
        ),
        []
    );

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Tabs"
                baseTypeName="BaseElementProps"
                description="An interface element that allows displaying multiple blocks of content within a single container with the ability to switch between them"
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Minimal set of component props: a set of tabs and an event handler for switching the active tab"
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import TabsComponent, { TabItem } from "@bodynarf/react.components/components/tabs";`,
                            "",
                            "/* ... */",
                            'const tabs: Array<TabItem> = [',
                            '    { caption: `Tab Uno`, id: "Uno", },',
                            '    { caption: `Tab Dos`, id: "Dos", },',
                            '    { caption: `Tab Tres`, id: "Tres", },',
                            '    { caption: `Tab Cuatro`, id: "Cuatro", },',
                            '    { caption: `Tab Cinco`, id: "Cinco", },',
                            "];",
                            "/* ... */",
                            "",
                            '<TabsComponent',
                            '    items={tabs}',
                            '    onActiveItemChange={emptyFn} // TODO: Replace with your own handler function',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <TabsComponent
                    items={tabs}
                    onActiveItemChange={emptyFn}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="defaultActive"
                description="The tab active at initial render. By default, the first tab is active"
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import TabsComponent, { TabItem } from "@bodynarf/react.components/components/tabs";`,
                            "",
                            "/* ... */",
                            'const tabs: Array<TabItem> = [',
                            '    { caption: `Tab Uno`, id: "Uno", },',
                            '    { caption: `Tab Dos`, id: "Dos", },',
                            '    { caption: `Tab Tres`, id: "Tres", },',
                            '    { caption: `Tab Cuatro`, id: "Cuatro", },',
                            '    { caption: `Tab Cinco`, id: "Cinco", },',
                            "];",
                            "/* ... */",
                            "",
                            '<TabsComponent',
                            '    items={tabs}',
                            '    defaultActive={tabs[3]}',
                            '    onActiveItemChange={emptyFn} // TODO: Replace with your own handler function',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <TabsComponent
                    items={tabs}
                    defaultActive={tabs[3]}
                    onActiveItemChange={emptyFn}
                />
            </ComponentUseCase>

            <ComponentSizeCase
                captionIsCode
                caption="size"
                description="The component supports all sizes defined in the ElementSize type"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import { ElementSize } from "@bodynarf/react.components";`,
                            `import TabsComponent, { TabItem } from "@bodynarf/react.components/components/tabs";`,
                            "",
                            "/* ... */",
                            'const tabs: Array<TabItem> = [',
                            '    { caption: `Tab Uno`, id: "Uno", },',
                            '    { caption: `Tab Dos`, id: "Dos", },',
                            '    { caption: `Tab Tres`, id: "Tres", },',
                            '    { caption: `Tab Cuatro`, id: "Cuatro", },',
                            '    { caption: `Tab Cinco`, id: "Cinco", },',
                            "];",
                            "/* ... */",
                            "",
                            '<TabsComponent',
                            '    items={tabs}',
                            `    size={ElementSize.${id}}`,
                            '    onActiveItemChange={emptyFn} // TODO: Replace with your own handler function',
                            '/>',
                        ].join("\n")}
                    />
                }
                componentProvider={
                    size =>
                        <TabsComponent
                            size={size}
                            items={tabs}
                            onActiveItemChange={emptyFn}
                        />
                }
            />

            <ComponentPositionCase
                captionIsCode
                caption="position"
                description="The component supports all positions defined in the ElementPosition type"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import { ElementPosition } from "@bodynarf/react.components";`,
                            `import TabsComponent, { TabItem } from "@bodynarf/react.components/components/tabs";`,
                            "",
                            "/* ... */",
                            'const tabs: Array<TabItem> = [',
                            '    { caption: `Tab Uno`, id: "Uno", },',
                            '    { caption: `Tab Dos`, id: "Dos", },',
                            '    { caption: `Tab Tres`, id: "Tres", },',
                            '    { caption: `Tab Cuatro`, id: "Cuatro", },',
                            '    { caption: `Tab Cinco`, id: "Cinco", },',
                            "];",
                            "/* ... */",
                            "",
                            '<TabsComponent',
                            '    items={tabs}',
                            '    onActiveItemChange={emptyFn} // TODO: Replace with your own handler function',
                            `    position={ElementPosition.${id}}`,
                            '/>',
                        ].join("\n")}
                    />
                }
                componentProvider={
                    value =>
                        <TabsComponent
                            items={tabs}
                            position={value}
                            onActiveItemChange={emptyFn}
                        />
                }
            />

            <ComponentEnumCase
                captionIsCode
                caption="style"
                enumNames={tabsStyles}
                lookupValues={tabsStylesAsSelectList}
                description="The component can be represented in 4 different ways"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import { ElementPosition } from "@bodynarf/react.components";`,
                            `import TabsComponent, { TabItem, TabsStyle } from "@bodynarf/react.components/components/tabs";`,
                            "",
                            "/* ... */",
                            'const tabs: Array<TabItem> = [',
                            '    { caption: `Tab Uno`, id: "Uno", },',
                            '    { caption: `Tab Dos`, id: "Dos", },',
                            '    { caption: `Tab Tres`, id: "Tres", },',
                            '    { caption: `Tab Cuatro`, id: "Cuatro", },',
                            '    { caption: `Tab Cinco`, id: "Cinco", },',
                            "];",
                            "/* ... */",
                            "",
                            '<TabsComponent',
                            '    items={tabs}',
                            '    onActiveItemChange={emptyFn} // TODO: Replace with your own handler function',
                            `    style={TabsStyle.${id}}`,
                            '/>',
                        ].join("\n")}
                    />
                }
                componentProvider={
                    (value: keyof typeof TabsStyle) =>
                        <TabsComponent
                            items={tabs}
                            style={TabsStyle[value]}
                            onActiveItemChange={emptyFn}
                        />
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="fullWidth"
                description="Option indicating that the component should take the full width of the parent. Disabled by default"
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import TabsComponent, { TabItem } from "@bodynarf/react.components/components/tabs";`,
                            "",
                            "/* ... */",
                            'const tabs: Array<TabItem> = [',
                            '    { caption: `Tab Uno`, id: "Uno", },',
                            '    { caption: `Tab Dos`, id: "Dos", },',
                            '    { caption: `Tab Tres`, id: "Tres", },',
                            '    { caption: `Tab Cuatro`, id: "Cuatro", },',
                            '    { caption: `Tab Cinco`, id: "Cinco", },',
                            "];",
                            "/* ... */",
                            "",
                            '<TabsComponent',
                            '    fullWidth',
                            '    items={tabs}',
                            '    onActiveItemChange={emptyFn} // TODO: Replace with your own handler function',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <TabsComponent
                    fullWidth
                    items={tabs}
                    onActiveItemChange={emptyFn}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onActiveItemChange"
                description="Function for handling the active tab change event"
                code={
                    <CodeExample
                        code={[
                            `import { useCallback } from "react"`,
                            ``,
                            `import TabsComponent, { TabItem } from "@bodynarf/react.components/components/tabs";`,
                            "",
                            "/* ... */",
                            'const tabs: Array<TabItem> = [',
                            '    { caption: `Tab Uno`, id: "Uno", },',
                            '    { caption: `Tab Dos`, id: "Dos", },',
                            '    { caption: `Tab Tres`, id: "Tres", },',
                            '    { caption: `Tab Cuatro`, id: "Cuatro", },',
                            '    { caption: `Tab Cinco`, id: "Cinco", },',
                            "];",
                            "/* ... */",
                            "const ON_ACTIVE_ITEM_CHANGE_HANDLE_FN = useCallback((item: TabItem) => { /* handler fn */}, []);",
                            "/* ... */",
                            "",
                            '<TabsComponent',
                            '    appendActiveItemChangeLog',
                            '    items={tabs}',
                            '    onActiveItemChange={ON_SEARCH_HANDLE_FN}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <TabsComponent
                    items={tabs}
                    onActiveItemChange={appendActiveItemChangeLog}
                />
                <p style={{ whiteSpace: "pre-line" }}>
                    {activeItemChangeLog}
                </p>
            </ComponentUseCase>
        </section>
    );
};

export default Tabs;
