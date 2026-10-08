import { FC, useState } from "react";

import Dropdown from "@bodynarf/react.components/components/dropdown";
import { ElementColor, ElementSize, LabelConfiguration, SelectableItem } from "@bodynarf/react.components";

const FRUITS: Array<SelectableItem> = [
    { id: "1", value: "apple",      displayValue: "Apple" },
    { id: "2", value: "banana",     displayValue: "Banana" },
    { id: "3", value: "cherry",     displayValue: "Cherry" },
    { id: "4", value: "date",       displayValue: "Date" },
    { id: "5", value: "elderberry", displayValue: "Elderberry" },
];

const FRUITS_WITH_ICONS: Array<SelectableItem> = [
    { id: "1", value: "home",     displayValue: "Home",     icon: { name: "house" } },
    { id: "2", value: "profile",  displayValue: "Profile",  icon: { name: "person" } },
    { id: "3", value: "settings", displayValue: "Settings", icon: { name: "gear" } },
    { id: "4", value: "logout",   displayValue: "Logout",   icon: { name: "box-arrow-right" } },
];

const MANY_ITEMS: Array<SelectableItem> = Array.from({ length: 20 }, (_, i) => ({
    id: String(i + 1),
    value: `item-${i + 1}`,
    displayValue: `Item ${i + 1}`,
}));

const LABEL: LabelConfiguration = { caption: "Select fruit:", horizontal: false };

const DropdownExamples: FC = () => {
    const [value1, setValue1]   = useState<SelectableItem | undefined>();
    const [value2, setValue2]   = useState<SelectableItem | undefined>();
    const [value3, setValue3]   = useState<SelectableItem | undefined>(FRUITS[0]);
    const [value4, setValue4]   = useState<SelectableItem | undefined>();
    const [value5, setValue5]   = useState<SelectableItem | undefined>();
    const [value6, setValue6]   = useState<SelectableItem | undefined>();
    const [value7, setValue7]   = useState<SelectableItem | undefined>();

    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-3">Dropdown</h1>

                {/* Basic */}
                <div className="box">
                    <p className="subtitle is-5">Basic</p>
                    <Dropdown
                        items={FRUITS}
                        value={value1}
                        placeholder="Select a fruit..."
                        onSelect={setValue1}
                    />
                    <p className="help mt-2">Selected: <strong>{value1?.displayValue ?? "none"}</strong></p>
                </div>

                {/* Deselectable */}
                <div className="box">
                    <p className="subtitle is-5">Deselectable</p>
                    <p className="help mb-2">A selected item can be clicked again to deselect it.</p>
                    <Dropdown
                        items={FRUITS}
                        value={value2}
                        placeholder="Select and click again to clear"
                        deselectable
                        onSelect={setValue2}
                    />
                </div>

                {/* Pre-selected */}
                <div className="box">
                    <p className="subtitle is-5">Pre-selected Value</p>
                    <Dropdown
                        items={FRUITS}
                        value={value3}
                        onSelect={setValue3}
                    />
                </div>

                {/* With label */}
                <div className="box">
                    <p className="subtitle is-5">With Label</p>
                    <Dropdown
                        items={FRUITS}
                        value={value4}
                        label={LABEL}
                        placeholder="Select..."
                        onSelect={setValue4}
                    />
                </div>

                {/* With icons */}
                <div className="box">
                    <p className="subtitle is-5">Items with Icons</p>
                    <Dropdown
                        items={FRUITS_WITH_ICONS}
                        value={value5}
                        placeholder="Navigate to..."
                        onSelect={setValue5}
                    />
                </div>

                {/* Searchable */}
                <div className="box">
                    <p className="subtitle is-5">Searchable</p>
                    <p className="help mb-2">Type to filter items.</p>
                    <Dropdown
                        items={MANY_ITEMS}
                        value={value6}
                        placeholder="Search items..."
                        searchable
                        listMaxHeight="200px"
                        noDataByQuery="No items match your search"
                        onSelect={setValue6}
                    />
                </div>

                {/* Colors & Disabled */}
                <div className="box">
                    <p className="subtitle is-5">Colors</p>
                    <div className="columns">
                        {[
                            ElementColor.Primary,
                            ElementColor.Success,
                            ElementColor.Warning,
                            ElementColor.Danger,
                            ElementColor.Info,
                        ].map(color => (
                            <div key={color} className="column is-2">
                                <Dropdown
                                    items={FRUITS}
                                    value={undefined}
                                    placeholder={color}
                                    onSelect={() => {}}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sizes */}
                <div className="box">
                    <p className="subtitle is-5">Sizes</p>
                    {[ElementSize.Small, ElementSize.Normal, ElementSize.Medium, ElementSize.Large].map(size => (
                        <div key={size} className="mb-3">
                            <p className="help mb-1">{size}</p>
                            <Dropdown
                                items={FRUITS}
                                value={undefined}
                                placeholder={`Size: ${size}`}
                                onSelect={() => {}}
                            />
                        </div>
                    ))}
                </div>

                {/* Disabled */}
                <div className="box">
                    <p className="subtitle is-5">Disabled</p>
                    <Dropdown
                        items={FRUITS}
                        value={value7}
                        placeholder="Disabled dropdown"
                        disabled
                        onSelect={setValue7}
                    />
                </div>

                {/* Compact */}
                <div className="box">
                    <p className="subtitle is-5">Compact Mode</p>
                    <p className="help mb-2">Reduces padding for tight layouts.</p>
                    <Dropdown
                        items={FRUITS}
                        value={undefined}
                        placeholder="Compact..."
                        compact
                        onSelect={() => {}}
                    />
                </div>
            </div>
        </section>
    );
};

export default DropdownExamples;
