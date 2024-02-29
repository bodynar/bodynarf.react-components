import { emptyFn } from "@bodynarf/utils";

import { ElementPosition } from "@bodynarf/react.components/types";
import TabsComponent, { TabItem, TabsStyle } from "@bodynarf/react.components/components/tabs";

import DemoComponentTitleInfoMessage from "../../../shared/components/title";
import ComponentUseCase from "../../../shared/components/useCase";
import CommonPropsSuppressExampleInfoMessage from "../../../shared/components/commonPropsSuppress";
import ComponentSizeCase from "../../../shared/components/sizeUse";
import ComponentEnumCase from "../../../shared/components/enumSelectionCase";
import ComponentPositionCase from "../../../shared/components/positionUse";

/** Tabs component demo */
function Tabs() {
    const tabs: Array<TabItem> = new Array(5).fill(0).map((_, x) => ({
        caption: `Tab ${x}`,
        id: `${x}`,
    }));

    const styleLookupValues = [
        [TabsStyle.default, "default"],
        [TabsStyle.boxed, "boxed"],
        [TabsStyle.radioButton, "radioButton"],
        [TabsStyle.radioButtonRounded, "radioButtonRounded"],
    ].map((x, i) => ({
        id: `${i}`,
        value: x[0],
        displayValue: x[1],
    }));

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Tabs"
                description="Displays commonly know tabs to manage displaying content"
            />
            <ComponentUseCase
                caption="Default"
                code={<pre>{`const items: Array<TabItem> = [...];
const handler = useCallback((item: TabItem) => { /** handler */}, []);

/* ... */

<Tabs items={tabs} onActiveItemChange={onItemChange} />`}</pre>}
                description="By default component requires tab items and tab item change handler like on example"
                component={<TabsComponent items={tabs} onActiveItemChange={emptyFn} />}
            />
            <CommonPropsSuppressExampleInfoMessage />
            <ComponentUseCase
                caption="Default active tab"
                code={`<Tabs defaultActive={items[4]} />`}
                description={<>By default first tab is active, but this can be configured via <code>defaultActive</code> prop</>}
                component={<TabsComponent defaultActive={tabs[4]} items={tabs} onActiveItemChange={emptyFn} />}
            />
            <ComponentUseCase
                caption="fullWidth"
                captionIsCode
                code={`<Tabs fullWidth />`}
                description="Shrinks tabs to end and make them same width"
                component={<TabsComponent fullWidth items={tabs} onActiveItemChange={emptyFn} />}
            />
            <ComponentSizeCase
                caption="Sizes"
                codeProvider={id => `<Tabs size={ElementSize.${id}} />`}
                description="Component supports all available sizes"
                componentProvider={
                    size =>
                        <TabsComponent items={tabs} onActiveItemChange={emptyFn} size={size} />
                }
            />
            <ComponentEnumCase
                caption="Styles"
                enumNames={["default", "boxed", "radioButton", "radioButtonRounded"]}
                placeholder="Style"
                lookupValues={styleLookupValues}
                description="Control supports only custom styles"
                codeProvider={id => `<Tabs style={TabsStyle.${id}} />`}
                componentProvider={
                    (style: TabsStyle) =>
                        <TabsComponent items={tabs} onActiveItemChange={emptyFn} style={style} />
                }
            />
            <ComponentPositionCase
                caption="Positions"
                description="Control supports 3 different positions"
                codeProvider={id => `<Tabs position={ElementPosition.${id}} />`}
                componentProvider={
                    (position: ElementPosition) =>
                        <TabsComponent position={position} items={tabs} onActiveItemChange={emptyFn} />
                }
            />
        </section>
    );
}

export default Tabs;
