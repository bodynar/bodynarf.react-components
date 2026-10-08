import { FC, useState } from "react";

import { Color } from "@bodynarf/utils";

import Text       from "@bodynarf/react.components/components/primitives/text";
import NumberInput from "@bodynarf/react.components/components/primitives/number";
import Multiline  from "@bodynarf/react.components/components/primitives/multiline";
import Password   from "@bodynarf/react.components/components/primitives/password";
import ColorPicker from "@bodynarf/react.components/components/primitives/color";
import Checkbox   from "@bodynarf/react.components/components/primitives/checkbox";
import Switch     from "@bodynarf/react.components/components/primitives/switch";
import Slider     from "@bodynarf/react.components/components/primitives/slider";
import RadioGroup from "@bodynarf/react.components/components/primitives/radioGroup";
import TimePicker from "@bodynarf/react.components/components/primitives/timePicker";
import {
    ElementColor,
    ElementSize,
    LabelConfiguration,
    RadioItem,
    TimeValue,
    ValidationState,
    ValidationStatus,
} from "@bodynarf/react.components";

const LABEL = (caption: string, horizontal = false): LabelConfiguration => ({ caption, horizontal });

const COLORS = [ElementColor.Default, ElementColor.Primary, ElementColor.Info, ElementColor.Success, ElementColor.Warning, ElementColor.Danger];
const SIZES  = [ElementSize.Small, ElementSize.Normal, ElementSize.Medium, ElementSize.Large];

const RADIO_ITEMS: Array<RadioItem> = [
    { id: "opt1", value: "option1", displayValue: "Option 1" },
    { id: "opt2", value: "option2", displayValue: "Option 2" },
    { id: "opt3", value: "option3", displayValue: "Option 3", disabled: true },
    { id: "opt4", value: "option4", displayValue: "Option 4" },
];

const VALID: ValidationState   = { status: ValidationStatus.Valid,   messages: ["Looks good!"] };
const INVALID: ValidationState = { status: ValidationStatus.Invalid, messages: ["This field is required"] };

const PrimitivesExamples: FC = () => {
    const [textVal,     setTextVal]     = useState("");
    const [numVal,      setNumVal]      = useState<number | undefined>(42);
    const [multiVal,    setMultiVal]    = useState("");
    const [passVal,     setPassVal]     = useState("");
    const [colorVal,    setColorVal]    = useState<Color | undefined>(undefined);
    const [checkVal,    setCheckVal]    = useState(false);
    const [switchVal,   setSwitchVal]   = useState(false);
    const [sliderVal,   setSliderVal]   = useState(50);
    const [radioVal,    setRadioVal]    = useState<RadioItem | undefined>(RADIO_ITEMS[0]);
    const [timeVal,     setTimeVal]     = useState<TimeValue | undefined>();
    const [controlledTime, setControlledTime] = useState<TimeValue | undefined>({ hours: 14, minutes: 30 });

    // ColorPicker reports an {red, green, blue} object — format it for display
    const colorCss = colorVal
        ? `rgb(${colorVal.red}, ${colorVal.green}, ${colorVal.blue})`
        : undefined;

    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-3">Primitives (Inputs)</h1>

                {/* Text */}
                <div className="box">
                    <p className="subtitle is-5">Text</p>
                    <Text label={LABEL("Name:")} placeholder="Enter your name..." onValueChange={setTextVal} />
                    <p className="help mt-1">Value: <strong>{textVal || "(empty)"}</strong></p>

                    <hr />
                    <p className="help mb-2 mt-2">All colors:</p>
                    <div className="columns is-multiline">
                        {COLORS.map(c => (
                            <div key={c} className="column is-4">
                                <Text label={LABEL(c)} placeholder={c} style={c} onValueChange={() => {}} />
                            </div>
                        ))}
                    </div>

                    <hr />
                    <p className="help mb-2">All sizes:</p>
                    <div className="columns">
                        {SIZES.map(s => (
                            <div key={s} className="column is-3">
                                <Text label={LABEL(s)} placeholder={s} size={s} onValueChange={() => {}} />
                            </div>
                        ))}
                    </div>

                    <hr />
                    <p className="help mb-2">Modifiers:</p>
                    <div className="columns">
                        <div className="column is-3">
                            <Text label={LABEL("Rounded")} placeholder="rounded" rounded onValueChange={() => {}} />
                        </div>
                        <div className="column is-3">
                            <Text label={LABEL("Disabled")} placeholder="disabled" disabled onValueChange={() => {}} />
                        </div>
                        <div className="column is-3">
                            <Text label={LABEL("Readonly")} defaultValue="read only" readonly onValueChange={() => {}} />
                        </div>
                        <div className="column is-3">
                            <Text label={LABEL("Loading")} placeholder="loading" loading onValueChange={() => {}} />
                        </div>
                    </div>

                    <hr />
                    <p className="help mb-2">Validation states:</p>
                    <div className="columns">
                        <div className="column is-4">
                            <Text label={LABEL("Valid")} defaultValue="valid input" validationState={VALID} onValueChange={() => {}} />
                        </div>
                        <div className="column is-4">
                            <Text label={LABEL("Invalid")} placeholder="..." validationState={INVALID} onValueChange={() => {}} />
                        </div>
                    </div>

                    <hr />
                    <p className="help mb-2">Horizontal label:</p>
                    <Text label={LABEL("Horizontal label:", true)} placeholder="with horizontal label" onValueChange={() => {}} />
                </div>

                {/* Number */}
                <div className="box">
                    <p className="subtitle is-5">Number</p>
                    <NumberInput label={LABEL("Quantity:")} defaultValue={numVal} onValueChange={setNumVal} />
                    <p className="help mt-1">Value: <strong>{numVal ?? "(empty)"}</strong></p>

                    <hr />
                    <div className="columns">
                        <div className="column is-4">
                            <NumberInput label={LABEL("Step = 5")} defaultValue={0} step={5} onValueChange={() => {}} />
                        </div>
                        <div className="column is-4">
                            <NumberInput label={LABEL("Disabled")} defaultValue={10} disabled onValueChange={() => {}} />
                        </div>
                        <div className="column is-4">
                            <NumberInput label={LABEL("Reset on blur")} defaultValue={42} resetToDefaultOnBlur onValueChange={() => {}} />
                        </div>
                    </div>
                </div>

                {/* Multiline */}
                <div className="box">
                    <p className="subtitle is-5">Multiline (Textarea)</p>
                    <Multiline label={LABEL("Message:")} placeholder="Enter your message..." rows={4} onValueChange={setMultiVal} />
                    <p className="help mt-1">Characters: <strong>{multiVal.length}</strong></p>

                    <hr />
                    <div className="columns">
                        <div className="column is-4">
                            <Multiline label={LABEL("Fixed height")} placeholder="Fixed height..." fixed rows={3} onValueChange={() => {}} />
                        </div>
                        <div className="column is-4">
                            <Multiline label={LABEL("Disabled")} placeholder="disabled" disabled onValueChange={() => {}} />
                        </div>
                        <div className="column is-4">
                            <Multiline label={LABEL("Readonly")} defaultValue="read only text" readonly onValueChange={() => {}} />
                        </div>
                    </div>
                </div>

                {/* Password */}
                <div className="box">
                    <p className="subtitle is-5">Password</p>
                    <Password label={LABEL("Password:")} placeholder="Enter password..." onValueChange={setPassVal} />
                    <p className="help mt-1">Length: <strong>{passVal.length} chars</strong></p>

                    <hr />
                    <div className="columns">
                        <div className="column is-4">
                            <Password label={LABEL("Show toggle")} placeholder="Toggle visibility" canShowPassword onValueChange={() => {}} />
                        </div>
                        <div className="column is-4">
                            <Password label={LABEL("Disabled")} placeholder="disabled" disabled onValueChange={() => {}} />
                        </div>
                    </div>
                </div>

                {/* Color */}
                <div className="box">
                    <p className="subtitle is-5">Color Picker</p>
                    <ColorPicker label={LABEL("Pick color:")} onValueChange={setColorVal} />
                    <p className="help mt-1">
                        Selected:{" "}
                        <strong style={colorCss ? { color: colorCss } : undefined}>
                            {colorCss ?? "(none)"}
                        </strong>
                    </p>
                </div>

                {/* Checkbox */}
                <div className="box">
                    <p className="subtitle is-5">Checkbox</p>
                    <Checkbox label={{ caption: "I agree to the terms" }} defaultValue={checkVal} onValueChange={setCheckVal} />
                    <p className="help mt-1">Checked: <strong>{String(checkVal)}</strong></p>

                    <hr />
                    <div className="is-flex is-flex-wrap-wrap" style={{ gap: "12px", marginTop: "8px" }}>
                        {COLORS.map(c => (
                            <Checkbox key={c} label={{ caption: c }} style={c} defaultValue={c === ElementColor.Primary} onValueChange={() => {}} />
                        ))}
                    </div>

                    <hr />
                    <p className="help mb-2">Modifiers:</p>
                    <div className="is-flex" style={{ gap: "16px" }}>
                        <Checkbox label={{ caption: "Disabled" }} disabled onValueChange={() => {}} />
                        <Checkbox label={{ caption: "Rounded" }} rounded onValueChange={() => {}} />
                        <Checkbox label={{ caption: "With background" }} style={ElementColor.Primary} hasBackgroundColor onValueChange={() => {}} />
                        <Checkbox label={{ caption: "Fixed background" }} style={ElementColor.Info} hasBackgroundColor fixBackgroundColor onValueChange={() => {}} />
                        <Checkbox label={{ caption: "Indeterminate" }} indeterminate onValueChange={() => {}} />
                    </div>
                </div>

                {/* Switch */}
                <div className="box">
                    <p className="subtitle is-5">Switch</p>
                    <Switch label={{ caption: "Enable notifications" }} defaultValue={switchVal} onValueChange={setSwitchVal} />
                    <p className="help mt-1">On: <strong>{String(switchVal)}</strong></p>

                    <hr />
                    <div className="is-flex is-flex-wrap-wrap" style={{ gap: "12px", marginTop: "8px" }}>
                        {COLORS.map(c => (
                            <Switch key={c} label={{ caption: c }} style={c} defaultValue={c === ElementColor.Success} onValueChange={() => {}} />
                        ))}
                    </div>

                    <hr />
                    <p className="help mb-2">Modifiers:</p>
                    <div className="is-flex" style={{ gap: "16px" }}>
                        <Switch label={{ caption: "Rounded" }} rounded onValueChange={() => {}} />
                        <Switch label={{ caption: "Outlined" }} outlined onValueChange={() => {}} />
                        <Switch label={{ caption: "Thin" }} thin onValueChange={() => {}} />
                        <Switch label={{ caption: "RTL" }} rtl onValueChange={() => {}} />
                        <Switch label={{ caption: "Disabled" }} disabled onValueChange={() => {}} />
                    </div>
                </div>

                {/* Slider */}
                <div className="box">
                    <p className="subtitle is-5">Slider</p>
                    <Slider defaultValue={sliderVal} showValue showMinMax onValueChange={setSliderVal} />
                    <p className="help mt-1">Value: <strong>{sliderVal}</strong></p>

                    <hr />
                    <p className="help mb-2">With custom min/max and step:</p>
                    <Slider defaultValue={50} min={0} max={200} step={10} showValue showMinMax onValueChange={() => {}} />

                    <hr />
                    <p className="help mb-2">Show progress:</p>
                    <Slider defaultValue={60} showProgress showValue onValueChange={() => {}} />

                    <hr />
                    <p className="help mb-2">Colors:</p>
                    <div className="columns is-multiline">
                        {COLORS.filter(c => c !== ElementColor.Default).map(c => (
                            <div key={c} className="column is-6">
                                <p className="help mb-1">{c}</p>
                                <Slider defaultValue={50} style={c} showProgress onValueChange={() => {}} />
                            </div>
                        ))}
                    </div>

                    <hr />
                    <p className="help mb-2">Vertical (100px height):</p>
                    <div style={{ height: "120px", display: "flex", alignItems: "center" }}>
                        <Slider defaultValue={50} vertical verticalHeight="100px" showValue onValueChange={() => {}} />
                    </div>
                </div>

                {/* Radio Group */}
                <div className="box">
                    <p className="subtitle is-5">Radio Group</p>
                    <RadioGroup items={RADIO_ITEMS} value={radioVal?.id} onValueChange={setRadioVal} />
                    <p className="help mt-1">Selected: <strong>{radioVal?.displayValue ?? "none"}</strong></p>

                    <hr />
                    <p className="help mb-2">Horizontal:</p>
                    <RadioGroup items={RADIO_ITEMS} horizontal onValueChange={() => {}} />

                    <hr />
                    <p className="help mb-2">Colors:</p>
                    <div className="columns is-multiline">
                        {COLORS.filter(c => c !== ElementColor.Default).map(c => (
                            <div key={c} className="column is-4">
                                <p className="help mb-1">{c}</p>
                                <RadioGroup items={RADIO_ITEMS.slice(0, 2)} style={c} value="opt1" onValueChange={() => {}} />
                            </div>
                        ))}
                    </div>

                    <hr />
                    <p className="help mb-2">Circle + Background + Border variants (hasBackgroundColor requires a style):</p>
                    <div className="columns">
                        <div className="column is-4">
                            <RadioGroup items={RADIO_ITEMS.slice(0, 3)} circle value="opt1" onValueChange={() => {}} />
                        </div>
                        <div className="column is-4">
                            <RadioGroup items={RADIO_ITEMS.slice(0, 3)} style={ElementColor.Primary} hasBackgroundColor value="opt1" onValueChange={() => {}} />
                        </div>
                        <div className="column is-4">
                            <RadioGroup items={RADIO_ITEMS.slice(0, 3)} withoutBorder value="opt1" onValueChange={() => {}} />
                        </div>
                    </div>
                </div>

                {/* Time Picker */}
                <div className="box">
                    <p className="subtitle is-5">Time Picker</p>
                    <TimePicker label={LABEL("Time:")} onValueChange={setTimeVal} />
                    <p className="help mt-1">
                        Selected: <strong>
                            {timeVal
                                ? `${String(timeVal.hours).padStart(2, "0")}:${String(timeVal.minutes).padStart(2, "0")}`
                                : "(none)"}
                        </strong>
                    </p>

                    <hr />
                    <div className="columns">
                        <div className="column is-4">
                            <TimePicker label={LABEL("With seconds")} showSeconds onValueChange={() => {}} />
                        </div>
                        <div className="column is-4">
                            <TimePicker label={LABEL("Disabled")} disabled onValueChange={() => {}} />
                        </div>
                        <div className="column is-4">
                            <TimePicker label={LABEL("Rounded")} rounded onValueChange={() => {}} />
                        </div>
                    </div>

                    <hr />
                    <p className="subtitle is-6">Picker variant (popover columns)</p>
                    <div className="columns">
                        <div className="column is-4">
                            <TimePicker label={LABEL("Picker")} variant="picker" onValueChange={() => {}} />
                        </div>
                        <div className="column is-4">
                            <TimePicker label={LABEL("Picker 12h + seconds")} variant="picker" use12Hours showSeconds onValueChange={() => {}} />
                        </div>
                        <div className="column is-4">
                            <TimePicker
                                label={LABEL("Picker clearable")}

                                variant="picker"
                                clearable
                                defaultValue={{ hours: 9, minutes: 15 }}
                                onValueChange={() => {}}
                            />
                        </div>
                    </div>

                    <hr />
                    <p className="subtitle is-6">12-hour, clearable &amp; controlled</p>
                    <div className="columns">
                        <div className="column is-4">
                            <TimePicker label={LABEL("12-hour (AM/PM)")} use12Hours onValueChange={() => {}} />
                        </div>
                        <div className="column is-4">
                            <TimePicker label={LABEL("12h + seconds")} use12Hours showSeconds onValueChange={() => {}} />
                        </div>
                        <div className="column is-4">
                            <TimePicker
                                label={LABEL("Clearable")}
                                defaultValue={{ hours: 9, minutes: 15 }}
                                clearable
                                onValueChange={() => {}}
                            />
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-4">
                            <TimePicker
                                label={LABEL("Controlled")}
                                value={controlledTime}
                                onValueChange={setControlledTime}
                            />
                            <p className="help mt-1">
                                Value: {controlledTime ? `${String(controlledTime.hours).padStart(2, "0")}:${String(controlledTime.minutes).padStart(2, "0")}` : "—"}
                            </p>
                        </div>
                        <div className="column is-4">
                            <button
                                type="button"
                                className="button is-small is-light"
                                onClick={() => setControlledTime({ hours: 18, minutes: 45 })}
                            >
                                Set 18:45
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrimitivesExamples;
