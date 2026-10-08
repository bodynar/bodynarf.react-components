import { FC, useState } from "react";

import DateInput from "@bodynarf/react.components/components/primitives/dateInput";
import { ElementColor, ElementSize, LabelConfiguration } from "@bodynarf/react.components";

const LABEL: LabelConfiguration = { caption: "Select date:", horizontal: false };
const H_LABEL: LabelConfiguration = { caption: "Date:", horizontal: true };

const DateInputExamples: FC = () => {
    const [value1, setValue1] = useState<Date | undefined>();
    const [value2, setValue2] = useState<Date | undefined>(new Date(2025, 0, 15));
    const [value3, setValue3] = useState<Date | undefined>();
    const [value4, setValue4] = useState<Date | undefined>();
    const [value5, setValue5] = useState<Date | undefined>();
    const [value6, setValue6] = useState<Date | undefined>();
    const [value7, setValue7] = useState<Date | undefined>();
    const [value8, setValue8] = useState<Date | undefined>();

    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-3">DateInput</h1>

                {/* Basic */}
                <div className="box">
                    <p className="subtitle is-5">Basic</p>
                    <p className="help mb-2">Click to open calendar, or type date manually.</p>
                    <DateInput
                        defaultValue={value1}
                        onValueChange={setValue1}
                    />
                    <p className="help mt-2">Value: <strong>{value1?.toLocaleDateString() ?? "none"}</strong></p>
                </div>

                {/* Pre-filled */}
                <div className="box">
                    <p className="subtitle is-5">Pre-filled Value</p>
                    <DateInput
                        defaultValue={value2}
                        onValueChange={setValue2}
                    />
                    <p className="help mt-2">Value: <strong>{value2?.toLocaleDateString() ?? "none"}</strong></p>
                </div>

                {/* With label */}
                <div className="box">
                    <p className="subtitle is-5">With Label</p>
                    <DateInput
                        label={LABEL}
                        defaultValue={value3}
                        onValueChange={setValue3}
                    />
                </div>

                {/* Horizontal label */}
                <div className="box">
                    <p className="subtitle is-5">Horizontal Label</p>
                    <DateInput
                        label={H_LABEL}
                        defaultValue={value4}
                        onValueChange={setValue4}
                    />
                </div>

                {/* Custom format */}
                <div className="box">
                    <p className="subtitle is-5">Custom Format (MM/dd/yyyy)</p>
                    <DateInput
                        format="MM/dd/yyyy"
                        defaultValue={value5}
                        onValueChange={setValue5}
                    />
                    <p className="help mt-2">Value: <strong>{value5?.toLocaleDateString() ?? "none"}</strong></p>
                </div>

                {/* Min / Max */}
                <div className="box">
                    <p className="subtitle is-5">Min / Max Date</p>
                    <p className="help mb-2">Range: Jan 1, 2025 – Dec 31, 2025</p>
                    <DateInput
                        minDate={new Date(2025, 0, 1)}
                        maxDate={new Date(2025, 11, 31)}
                        defaultValue={value6}
                        onValueChange={setValue6}
                    />
                </div>

                {/* Sizes */}
                <div className="box">
                    <p className="subtitle is-5">Sizes</p>
                    <div className="mb-3">
                        <p className="help mb-1">Small</p>
                        <DateInput size={ElementSize.Small} />
                    </div>
                    <div className="mb-3">
                        <p className="help mb-1">Normal</p>
                        <DateInput size={ElementSize.Normal} />
                    </div>
                    <div className="mb-3">
                        <p className="help mb-1">Medium</p>
                        <DateInput size={ElementSize.Medium} />
                    </div>
                    <div className="mb-3">
                        <p className="help mb-1">Large</p>
                        <DateInput size={ElementSize.Large} />
                    </div>
                </div>

                {/* Colors */}
                <div className="box">
                    <p className="subtitle is-5">Colors</p>
                    <div className="mb-3">
                        <DateInput style={ElementColor.Primary} defaultValue={value7} onValueChange={setValue7} />
                    </div>
                    <div className="mb-3">
                        <DateInput style={ElementColor.Info} />
                    </div>
                    <div className="mb-3">
                        <DateInput style={ElementColor.Success} />
                    </div>
                    <div className="mb-3">
                        <DateInput style={ElementColor.Warning} />
                    </div>
                    <div className="mb-3">
                        <DateInput style={ElementColor.Danger} />
                    </div>
                </div>

                {/* Rounded */}
                <div className="box">
                    <p className="subtitle is-5">Rounded</p>
                    <DateInput rounded defaultValue={value8} onValueChange={setValue8} />
                </div>

                {/* Disabled & Readonly */}
                <div className="box">
                    <p className="subtitle is-5">Disabled & Readonly</p>
                    <div className="mb-3">
                        <p className="help mb-1">Disabled</p>
                        <DateInput disabled defaultValue={new Date()} />
                    </div>
                    <div className="mb-3">
                        <p className="help mb-1">Readonly</p>
                        <DateInput readonly defaultValue={new Date()} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DateInputExamples;
