import Dropdown from "@bodynarf/react.components/components/dropdown";
import TabsComponent, { TabItem, TabsPosition, TabsStyle } from "@bodynarf/react.components/components/tabs";

import { Sizes, useGenericSelection, useSizeSelection } from "../../../shared";

/** Tabs component demo */
function Tabs() {
    const tabs: Array<TabItem> = new Array(5).fill(0).map((_, x) => ({
        caption: `Tab ${x}`,
        id: `${x}`,
    }));

    const styleLookupValues = [
        [TabsStyle.boxed, "boxed"],
        [TabsStyle.radioButton, "radioButton"],
        [TabsStyle.radioButtonRounded, "radioButtonRounded"],
    ].map(x => ({
        id: x[0],
        value: x[0],
        displayValue: x[1],
    }));

    const positionLookupValues = [
        [TabsPosition.left, "left"],
        [TabsPosition.center, "center"],
        [TabsPosition.right, "right"],
    ].map(x => ({
        id: x[0],
        value: x[1],
        displayValue: x[1],
    }));

    const sizeLookupParams = useSizeSelection();
    const styleLookupParams = useGenericSelection<TabsStyle>(styleLookupValues);
    const positionLookupParams = useGenericSelection<TabsPosition>(positionLookupValues);

    return (
        <section>
            <div className="block">
                <span>
                    Tabs component
                    <br />
                    Displays commonly know tabs to manage displaying content
                </span>

                <br />
                <br />
                <pre>
                    {`const items: Array<TabItem> = [...];
const handler = useCallback((item: TabItem) => { /** handler */}, []);

/* ... */

<TabsComponent
    items={tabs}
    onActiveItemChange={onItemChange}
/>`}
                </pre>
                <br />
                <TabsComponent
                    items={tabs}
                    onActiveItemChange={() => console.log()}
                />
            </div>
            <span>
                <hr />
                In next examples these common props configuration will not be presented to save space
                <hr />
            </span>
            <div className="block">
                <span>
                    Default active tab
                    <br />
                    By default first tab is active, but this can be configured
                </span>
                <br />
                <br />
                <pre>
                    {`<TabsComponent defaultActive={items[4]} />`}
                </pre>
                <br />
                <TabsComponent
                    items={tabs}
                    onActiveItemChange={() => console.log()}
                    defaultActive={tabs[4]}
                />
            </div>
            <hr />
            <div className="block">
                <span>
                    <code>fullWidth</code>
                    <br />
                    Shrinks tabs to end and make them same width
                </span>
                <br />
                <br />
                <pre>
                    {`<TabsComponent fullWidth />`}
                </pre>
                <br />
                <TabsComponent
                    fullWidth
                    items={tabs}
                    onActiveItemChange={() => console.log()}
                />
            </div>
            <hr />
            <div className="block">
                <span>
                    <code>Size</code>
                </span>
                <br />
                <br />
                <div className="columns">
                    <div className="column is-2">
                        <Dropdown
                            hideOnOuterClick={true}
                            items={Sizes.selectableItems}
                            onSelect={sizeLookupParams.onValueSelect}
                            value={sizeLookupParams.selectedValue}
                            placeholder="Size"
                            deselectable={false}
                        />
                    </div>
                    <div className="column">
                        <TabsComponent
                            size={sizeLookupParams.value}
                            items={tabs}
                            onActiveItemChange={() => console.log()}
                        />
                        <pre>
                            {`<TabsComponent size="ElementSize.${Sizes.keys[+sizeLookupParams.selectedValue!.id]}" />`}
                        </pre>
                    </div>
                </div>
            </div>
            <div className="block">
                <span>
                    <code>style</code> is different from other controls. Tabs have its own styles.
                </span>
                <br />
                <br />
                <div className="columns">
                    <div className="column is-2">
                        <Dropdown
                            hideOnOuterClick={true}
                            items={styleLookupValues}
                            onSelect={styleLookupParams.onValueSelect}
                            value={styleLookupParams.selectedValue}
                            placeholder="Style"
                            deselectable={false}
                        />
                    </div>
                    <div className="column">
                        <TabsComponent
                            style={styleLookupParams.value}
                            items={tabs}
                            onActiveItemChange={() => console.log()}
                        />
                        <pre>
                            {`<TabsComponent style="TabsStyle.${styleLookupParams.selectedValue!.displayValue}" />`}
                        </pre>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="block">
                <span>
                    <code>position</code> describes where tabs will be floated. Have no meaning with fullWidth. Default is left
                </span>
                <br />
                <br />
                <div className="columns">
                    <div className="column is-2">
                        <Dropdown
                            hideOnOuterClick={true}
                            items={positionLookupValues}
                            onSelect={positionLookupParams.onValueSelect}
                            value={positionLookupParams.selectedValue}
                            placeholder="Position"
                            deselectable={false}
                        />
                    </div>
                    <div className="column">
                        <TabsComponent
                            position={positionLookupParams.selectedValue.id as TabsPosition}
                            items={tabs}
                            onActiveItemChange={() => console.log()}
                        />
                        <pre>
                            {`<TabsComponent position="TabsPosition.${positionLookupParams.selectedValue!.displayValue}" />`}
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tabs;
