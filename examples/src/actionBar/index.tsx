import { FC, useState } from "react";

import ActionBar from "@bodynarf/react.components/components/actionBar";
import { ActionBarAction, ActionBarPosition, ButtonStyle, ElementSize } from "@bodynarf/react.components";


const POSITIONS: ActionBarPosition[] = ["bottom", "top", "bottom-right", "bottom-left", "top-right", "top-left"];

const SIZES: ElementSize[] = [ElementSize.Small, ElementSize.Normal, ElementSize.Medium, ElementSize.Large];

interface DemoItem {
    id: number;
    label: string;
}

let nextId = 8;

const INITIAL_ITEMS: DemoItem[] = [
    { id: 1, label: "Payment received" },
    { id: 2, label: "Invoice #1042 sent" },
    { id: 3, label: "New customer registered" },
    { id: 4, label: "Refund processed" },
    { id: 5, label: "Subscription renewed" },
    { id: 6, label: "Support ticket closed" },
    { id: 7, label: "Report generated" },
];

const ActionBarExamples: FC = () => {
    const [items, setItems] = useState<DemoItem[]>(INITIAL_ITEMS);
    const [selected, setSelected] = useState<number[]>([]);
    const [position, setPosition] = useState<ActionBarPosition>("bottom");
    const [size, setSize] = useState<ElementSize>(ElementSize.Normal);
    const [closable, setClosable] = useState(true);
    const [lastAction, setLastAction] = useState("none");

    const toggleItem = (id: number): void => {
        setSelected(selected.includes(id)
            ? selected.filter(i => i !== id)
            : [...selected, id]
        );
    };

    const deleteSelected = (): void => {
        setItems(items.filter(i => !selected.includes(i.id)));
        setSelected([]);
        setLastAction("delete");
    };

    const duplicateSelected = (): void => {
        const copies = items
            .filter(i => selected.includes(i.id))
            .map(i => ({ id: nextId++, label: `${i.label} (copy)` }));

        setItems([...items, ...copies]);
        setSelected([]);
        setLastAction("duplicate");
    };

    const actions: ActionBarAction[] = [
        {
            caption: "Duplicate",
            icon: { name: "copy" },
            onClick: duplicateSelected,
        },
        {
            caption: "Export",
            icon: { name: "download" },
            disabled: true,
            title: "Not available in the demo",
        },
        {
            caption: "Delete",
            icon: { name: "trash" },
            style: ButtonStyle.Danger,
            onClick: deleteSelected,
        },
    ];

    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-3">Action Bar</h1>

                <p className="block help">
                    A fixed-position floating panel with actions, e.g. for rows selected in a table.
                    Select items below — the panel appears with a counter and the configured actions.
                    It is not unmounted when hidden, so the exit transition is played too.
                </p>

                <div className="box">
                    <p className="subtitle is-5">Configuration</p>

                    <div className="field">
                        <label className="label">Position</label>
                        <div className="buttons">
                            {POSITIONS.map(p => (
                                <button
                                    key={p}
                                    type="button"
                                    className={`button is-small ${position === p ? "is-primary" : ""}`}
                                    onClick={() => setPosition(p)}
                                >
                                    {p}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Size</label>
                        <div className="buttons">
                            {SIZES.map(s => (
                                <button
                                    key={s}
                                    type="button"
                                    className={`button is-small ${size === s ? "is-primary" : ""}`}
                                    onClick={() => setSize(s)}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="field">
                        <label className="checkbox">
                            <input
                                type="checkbox"
                                checked={closable}
                                onChange={e => setClosable(e.target.checked)}
                            />
                            {" "}Closable (× button)
                        </label>
                    </div>

                    <p className="help">
                        Last action: <strong>{lastAction}</strong>
                        {" "}| Items left: <strong>{items.length}</strong>
                    </p>
                </div>

                <div className="box">
                    <p className="subtitle is-5">Items</p>

                    {items.length === 0
                        ? <div className="is-flex is-align-items-center is-justify-content-space-between">
                            <p className="help mb-0">No items left.</p>
                            <button
                                type="button"
                                className="button is-small is-primary is-light"
                                onClick={() => { setItems(INITIAL_ITEMS); setSelected([]); }}
                            >
                                Reset list
                            </button>
                        </div>
                        : <div className="is-flex is-flex-direction-column" style={{ gap: "0.375rem" }}>
                            {items.map(item => (
                                <label key={item.id} className="checkbox">
                                    <input
                                        type="checkbox"
                                        checked={selected.includes(item.id)}
                                        onChange={() => toggleItem(item.id)}
                                    />
                                    {" "}{item.label}
                                </label>
                            ))}
                        </div>
                    }
                </div>

                {/* The floating panel itself — pinned to the viewport */}
                <ActionBar
                    open={selected.length > 0}
                    position={position}
                    size={size}
                    closable={closable}
                    content={<span><strong>{selected.length}</strong> item(s) selected</span>}
                    actions={actions}
                    onClose={() => { setSelected([]); setLastAction("close"); }}
                />
            </div>
        </section>
    );
};

export default ActionBarExamples;
