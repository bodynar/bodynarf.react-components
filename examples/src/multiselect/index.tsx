import { FC, useState } from "react";

import Multiselect from "@bodynarf/react.components/components/multiselect";
import { ElementColor, ElementSize, LabelConfiguration, MultiselectItem } from "@bodynarf/react.components";

function makeNumberedItems(prefix: string, count: number): Array<MultiselectItem> {
    return Array.from({ length: count }, (_, i) => ({
        id: String(i + 1),
        value: `${prefix.toLowerCase()}-${i + 1}`,
        displayValue: `${prefix} ${i + 1}`,
        selected: false,
    }));
}

const COLORS = makeNumberedItems("Color", 120);
const FRAMEWORKS = makeNumberedItems("Framework", 110);
const PRESELECTED = makeNumberedItems("Option", 105).map(
    (it, i) => ({ ...it, selected: i < 5 })
);

const LABEL: LabelConfiguration = { caption: "Pick colors:", horizontal: false };

const MultiselectExamples: FC = () => {
    const [items1, setItems1] = useState(COLORS);
    const [items2, setItems2] = useState(FRAMEWORKS);
    const [items3, setItems3] = useState(PRESELECTED);
    const [items4, setItems4] = useState(makeNumberedItems("Item", 115));
    const [items5] = useState(makeNumberedItems("Choice", 100));
    const [items6, setItems6] = useState(makeNumberedItems("Color", 120));
    const [items7, setItems7] = useState(
        makeNumberedItems("Language", 100).map(
            (it, i) => ({ ...it, selected: i < 5 })
        )
    );
    const [items8, setItems8] = useState(makeNumberedItems("Department", 110));
    const [items9, setItems9] = useState(
        makeNumberedItems("Category", 105).map(
            (it, i) => ({ ...it, selected: i < 3 })
        )
    );

    const toggle = <T extends MultiselectItem>(
        setItems: React.Dispatch<React.SetStateAction<T[]>>,
        item: T,
        selected: boolean,
    ) => setItems(prev => prev.map(it => it.id === item.id ? { ...it, selected } : it));

    const selected1 = items1.filter(i => i.selected).map(i => i.displayValue).join(", ");

    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-3">Multiselect</h1>

                {/* Basic */}
                <div className="box">
                    <p className="subtitle is-5">Basic</p>
                    <Multiselect
                        items={items1}
                        placeholder="Pick colors..."
                        onChange={(item, sel) => toggle(setItems1, item, sel)}
                        onClear={() => setItems1(prev => prev.map(it => ({ ...it, selected: false })))}
                    />
                    <p className="help mt-2">Selected: <strong>{selected1 || "none"}</strong></p>
                </div>

                {/* With label */}
                <div className="box">
                    <p className="subtitle is-5">With Label</p>
                    <Multiselect
                        items={items2}
                        placeholder="Pick frameworks..."
                        label={LABEL}
                        onChange={(item, sel) => toggle(setItems2, item, sel)}
                        onClear={() => setItems2(prev => prev.map(it => ({ ...it, selected: false })))}
                    />
                </div>

                {/* Pre-selected */}
                <div className="box">
                    <p className="subtitle is-5">Pre-selected Items</p>
                    <Multiselect
                        items={items3}
                        placeholder="Options..."
                        onChange={(item, sel) => toggle(setItems3, item, sel)}
                        onClear={() => setItems3(prev => prev.map(it => ({ ...it, selected: false })))}
                    />
                </div>

                {/* With selection caption */}
                <div className="box">
                    <p className="subtitle is-5">With Selection Caption</p>
                    <p className="help mb-2">Shows a summary text when items are selected.</p>
                    <Multiselect
                        items={items4}
                        placeholder="Select options..."
                        selectionCaption="items selected"
                        onChange={(item, sel) => toggle(setItems4, item, sel)}
                        onClear={() => setItems4(prev => prev.map(it => ({ ...it, selected: false })))}
                    />
                </div>

                {/* Sizes */}
                <div className="box">
                    <p className="subtitle is-5">Sizes</p>
                    {[ElementSize.Small, ElementSize.Normal, ElementSize.Medium, ElementSize.Large].map(size => (
                        <div key={size} className="mb-3">
                            <p className="help mb-1">{size}</p>
                            <Multiselect
                                onChange={() => { }}
                                placeholder={`Size: ${size}`}
                                items={makeNumberedItems("Item", 100)}
                            />
                        </div>
                    ))}
                </div>

                {/* Chips: position "label" */}
                <div className="box">
                    <p className="subtitle is-5">Chips — Inside Label</p>
                    <p className="help mb-2">Selected items shown as removable chips in the input trigger.</p>
                    <Multiselect
                        items={items6}
                        placeholder="Pick colors..."
                        onChange={(item, sel) => toggle(setItems6, item, sel)}
                        onClear={() => setItems6(prev => prev.map(it => ({ ...it, selected: false })))}
                        resultDisplayConfig={{
                            position: "label",
                            style: ElementColor.Primary,
                        }}
                    />
                </div>

                {/* Chips: position "label" — pre-selected, rounded, info */}
                <div className="box">
                    <p className="subtitle is-5">Chips — Inside Label (pre-selected, rounded, info)</p>
                    <Multiselect
                        items={items7}
                        placeholder="Pick languages..."
                        onChange={(item, sel) => toggle(setItems7, item, sel)}
                        onClear={() => setItems7(prev => prev.map(it => ({ ...it, selected: false })))}
                        resultDisplayConfig={{
                            position: "label",
                            style: ElementColor.Info,
                            rounded: true,
                            lightColor: true,
                        }}
                    />
                </div>

                {/* Chips: position "belowLabel" */}
                <div className="box">
                    <p className="subtitle is-5">Chips — Below Label</p>
                    <p className="help mb-2">Selection count in the trigger, removable chips below it.</p>
                    <Multiselect
                        items={items8}
                        placeholder="Pick departments..."
                        onChange={(item, sel) => toggle(setItems8, item, sel)}
                        onClear={() => setItems8(prev => prev.map(it => ({ ...it, selected: false })))}
                        resultDisplayConfig={{
                            position: "belowLabel",
                            style: ElementColor.Primary,
                        }}
                    />
                </div>

                {/* Chips: position "belowLabel" — pre-selected + config */}
                <div className="box">
                    <p className="subtitle is-5">Chips — Below Label (pre-selected, custom caption)</p>
                    <Multiselect
                        items={items9}
                        placeholder="Pick categories..."
                        selectionCaption="Selected: {0}"
                        onChange={(item, sel) => toggle(setItems9, item, sel)}
                        onClear={() => setItems9(prev => prev.map(it => ({ ...it, selected: false })))}
                        resultDisplayConfig={{
                            position: "belowLabel",
                            style: ElementColor.Warning,
                            rounded: true,
                            lightColor: true,
                        }}
                    />
                </div>

                {/* Disabled */}
                <div className="box">
                    <p className="subtitle is-5">Disabled</p>
                    <Multiselect
                        disabled
                        items={items5}
                        onChange={() => { }}
                        placeholder="Disabled multiselect"
                    />
                </div>
            </div>
        </section>
    );
};

export default MultiselectExamples;
