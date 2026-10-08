import { FC } from "react";

import Text from "@bodynarf/react.components/components/primitives/text";
import NumberInput from "@bodynarf/react.components/components/primitives/number";
import Password from "@bodynarf/react.components/components/primitives/password";
import Multiline from "@bodynarf/react.components/components/primitives/multiline";
import TimePicker from "@bodynarf/react.components/components/primitives/timePicker";
import DateInput from "@bodynarf/react.components/components/primitives/dateInput";
import AutoComplete from "@bodynarf/react.components/components/primitives/autoComplete";
import { ElementColor, InputAddon } from "@bodynarf/react.components";

const FRUITS = [
    { id: "1", label: "Apple" },
    { id: "2", label: "Banana" },
    { id: "3", label: "Cherry" },
    { id: "4", label: "Durian" },
];

/** Text addon shortcut */
const TEXT = (content: string, color: ElementColor = ElementColor.Info): InputAddon =>
    ({ type: "text", content, style: color });

/** Icon addon shortcut */
const ICON = (name: string, color: ElementColor = ElementColor.Primary): InputAddon =>
    ({ type: "icon", icon: { name }, style: color });

/** Button addon shortcut */
const BTN = (caption: string, onClick: () => void, style: ElementColor = ElementColor.Primary): InputAddon =>
    ({ type: "button", caption, style, onClick });

const InputAddonsExamples: FC = () => (
    <section className="section">
        <div className="container">
            <h1 className="title is-3">Input Addons</h1>

            <p className="block help">
                Attach text, icon, or button addons to the input primitives
                via <code>addonLeft</code> / <code>addonRight</code> (the <code>ElementWithAddons</code> capability).
            </p>

            {/* 1. Left addon on every component */}
            <div className="box">
                <p className="subtitle is-5">1 — Left addon on every component</p>
                <div className="columns is-multiline">
                    <div className="column is-6">
                        <Text placeholder="Full name" onValueChange={() => {}} addonLeft={ICON("person")} />
                    </div>
                    <div className="column is-6">
                        <NumberInput placeholder="0.00" onValueChange={() => {}} addonLeft={ICON("currency-dollar")} />
                    </div>
                    <div className="column is-6">
                        <Password placeholder="Password" onValueChange={() => {}} addonLeft={ICON("lock")} />
                    </div>
                    <div className="column is-6">
                        <Multiline placeholder="Write a note..." rows={2} onValueChange={() => {}} addonLeft={TEXT("Note")} />
                    </div>
                    <div className="column is-6">
                        <TimePicker label={{ caption: "Time", horizontal: false }} onValueChange={() => {}} addonLeft={ICON("clock")} />
                    </div>
                    <div className="column is-6">
                        <DateInput onValueChange={() => {}} addonLeft={ICON("calendar3")} />
                    </div>
                    <div className="column is-12">
                        <AutoComplete placeholder="Search fruit..." items={FRUITS} onValueChange={() => {}} addonLeft={TEXT("Fruit")} />
                    </div>
                </div>
            </div>

            {/* 2. Right addon on every component */}
            <div className="box">
                <p className="subtitle is-5">2 — Right addon on every component</p>
                <div className="columns is-multiline">
                    <div className="column is-6">
                        <Text placeholder="example.com" onValueChange={() => {}} addonRight={BTN("Go", () => {})} />
                    </div>
                    <div className="column is-6">
                        <NumberInput placeholder="0.00" onValueChange={() => {}} addonRight={TEXT("USD", ElementColor.Warning)} />
                    </div>
                    <div className="column is-6">
                        <Password placeholder="Password" onValueChange={() => {}} addonRight={BTN("Generate", () => {}, ElementColor.Link)} />
                    </div>
                    <div className="column is-6">
                        <Multiline placeholder="Output path..." rows={2} onValueChange={() => {}} addonRight={TEXT(".txt")} />
                    </div>
                    <div className="column is-6">
                        <TimePicker label={{ caption: "Time", horizontal: false }} onValueChange={() => {}} addonRight={TEXT("UTC", ElementColor.Default)} />
                    </div>
                    <div className="column is-6">
                        <DateInput onValueChange={() => {}} addonRight={ICON("calendar-week", ElementColor.Info)} />
                    </div>
                    <div className="column is-12">
                        <AutoComplete placeholder="Search fruit..." items={FRUITS} onValueChange={() => {}} addonRight={BTN("Clear", () => {}, ElementColor.Danger)} />
                    </div>
                </div>
            </div>

            {/* 3. Both addons on every component */}
            <div className="box">
                <p className="subtitle is-5">3 — Both addons on every component</p>
                <div className="columns is-multiline">
                    <div className="column is-6">
                        <Text
                            placeholder="example.com"

                            addonLeft={TEXT("https://", ElementColor.Info)}
                            addonRight={BTN("Go", () => {})}
                            onValueChange={() => {}}
                        />
                    </div>
                    <div className="column is-6">
                        <NumberInput
                            placeholder="0.00"

                            addonLeft={ICON("currency-dollar", ElementColor.Success)}
                            addonRight={TEXT("USD", ElementColor.Warning)}
                            onValueChange={() => {}}
                        />
                    </div>
                    <div className="column is-6">
                        <Password
                            placeholder="Password"

                            addonLeft={ICON("lock")}
                            addonRight={BTN("Generate", () => {}, ElementColor.Link)}
                            onValueChange={() => {}}
                        />
                    </div>
                    <div className="column is-6">
                        <Multiline
                            placeholder="Write a note..."

                            addonLeft={TEXT("Note", ElementColor.Primary)}
                            addonRight={TEXT(".txt")}
                            rows={2}
                            onValueChange={() => {}}
                        />
                    </div>
                    <div className="column is-6">
                        <TimePicker
                            label={{ caption: "Time", horizontal: false }}

                            addonLeft={ICON("clock", ElementColor.Info)}
                            addonRight={TEXT("UTC", ElementColor.Default)}
                            onValueChange={() => {}}
                        />
                    </div>
                    <div className="column is-6">
                        <DateInput
                            addonLeft={ICON("calendar3")}
                            addonRight={ICON("calendar-week", ElementColor.Info)}
                            onValueChange={() => {}}
                        />
                    </div>
                    <div className="column is-12">
                        <AutoComplete
                            placeholder="Search fruit..."

                            addonLeft={TEXT("Fruit", ElementColor.Success)}
                            addonRight={BTN("Clear", () => {}, ElementColor.Danger)}
                            items={FRUITS}
                            onValueChange={() => {}}
                        />
                    </div>
                </div>
            </div>

            {/* 4. One component — every addon type */}
            <div className="box">
                <p className="subtitle is-5">4 — Text component with every addon type</p>
                <div className="columns is-multiline">
                    <div className="column is-6">
                        <Text placeholder="left: text" onValueChange={() => {}} addonLeft={TEXT("https://")} />
                    </div>
                    <div className="column is-6">
                        <Text placeholder="right: text" onValueChange={() => {}} addonRight={TEXT("kg", ElementColor.Warning)} />
                    </div>
                    <div className="column is-6">
                        <Text placeholder="left: icon" onValueChange={() => {}} addonLeft={ICON("envelope")} />
                    </div>
                    <div className="column is-6">
                        <Text placeholder="right: icon" onValueChange={() => {}} addonRight={ICON("check2-circle", ElementColor.Success)} />
                    </div>
                    <div className="column is-6">
                        <Text placeholder="left: button" onValueChange={() => {}} addonLeft={BTN("…", () => {}, ElementColor.Default)} />
                    </div>
                    <div className="column is-6">
                        <Text placeholder="right: button" onValueChange={() => {}} addonRight={BTN("Submit", () => {})} />
                    </div>
                    <div className="column is-6">
                        <Text
                            placeholder="icon + button"

                            addonLeft={ICON("search")}
                            addonRight={BTN("Go", () => {})}
                            onValueChange={() => {}}
                        />
                    </div>
                    <div className="column is-6">
                        <Text
                            placeholder="text + text"

                            addonLeft={TEXT("$", ElementColor.Success)}
                            addonRight={TEXT("per month")}
                            onValueChange={() => {}}
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default InputAddonsExamples;
