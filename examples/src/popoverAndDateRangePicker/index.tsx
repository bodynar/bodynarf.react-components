import { FC, useState } from "react";

import Popover from "@bodynarf/react.components/components/popover";
import DateRangePicker from "@bodynarf/react.components/components/dateRangePicker";
import { DateRange, ElementColor, ElementSize, PopoverPosition } from "@bodynarf/react.components";

// ─── Popover ──────────────────────────────────────────────────────────────────

/** All Popover + DateRangePicker component variations */
const PopoverAndDateRangePickerExamples: FC = () => {
    const [controlled, setControlled] = useState(false);
    const [range1, setRange1] = useState<DateRange>({ start: undefined, end: undefined });
    const [range2, setRange2] = useState<DateRange>({ start: new Date(2026, 3, 5), end: new Date(2026, 3, 18) });
    const [range3, setRange3] = useState<DateRange>({ start: undefined, end: undefined });

    return (
        <section className="section">
            <div className="container">

                {/* ── Popover ──────────────────────────────────────────── */}
                <h1 className="title is-3">Popover</h1>

                {/* Positions */}
                <div className="box">
                    <p className="subtitle is-5">Positions</p>
                    <p className="help mb-4">
                        <code>position</code>: Top, Bottom (default), Left, Right.
                    </p>
                    <div className="is-flex" style={{ gap: "1.5rem", flexWrap: "wrap" }}>
                        {(["bottom", "top", "left", "right"] as const).map(pos => (
                            <Popover key={pos} position={pos as PopoverPosition}>
                                <Popover.Trigger>
                                    <button type="button" className="button is-light is-small">{pos}</button>
                                </Popover.Trigger>
                                <Popover.Content>
                                    <div className="p-3" style={{ minWidth: 140 }}>
                                        Popover on <strong>{pos}</strong>
                                    </div>
                                </Popover.Content>
                            </Popover>
                        ))}
                    </div>
                </div>

                {/* Controlled */}
                <div className="box">
                    <p className="subtitle is-5">Controlled mode</p>
                    <p className="help mb-4">Parent owns <code>visible</code> + <code>onToggle</code>.</p>
                    <div className="is-flex is-align-items-center" style={{ gap: "1rem" }}>
                        <Popover visible={controlled} onToggle={setControlled}>
                            <Popover.Trigger>
                                <button type="button" className="button is-primary is-light">Trigger</button>
                            </Popover.Trigger>
                            <Popover.Content>
                                <div className="p-3">
                                    <p className="mb-2">Controlled popover</p>
                                    <button type="button" className="button is-small is-danger is-light" onClick={() => setControlled(false)}>
                                        Close
                                    </button>
                                </div>
                            </Popover.Content>
                        </Popover>
                        <span className={`tag ${controlled ? "is-primary" : "is-light"}`}>
                            {controlled ? "open" : "closed"}
                        </span>
                    </div>
                </div>

                {/* Rich content */}
                <div className="box">
                    <p className="subtitle is-5">Rich content</p>
                    <Popover>
                        <Popover.Trigger>
                            <button type="button" className="button is-info is-light">
                                <span className="icon"><i className="bi bi-info-circle" /></span>
                                <span>User info</span>
                            </button>
                        </Popover.Trigger>
                        <Popover.Content>
                            <div className="p-4" style={{ minWidth: 200 }}>
                                <div className="is-flex is-align-items-center mb-2" style={{ gap: "0.75rem" }}>
                                    <span className="icon is-large" style={{ fontSize: "2rem" }}>👤</span>
                                    <div>
                                        <p className="is-size-6 has-text-weight-bold">Alice Johnson</p>
                                        <p className="is-size-7 has-text-grey">alice@example.com</p>
                                    </div>
                                </div>
                                <hr className="my-2" />
                                <p className="is-size-7">Role: <strong>Administrator</strong></p>
                                <p className="is-size-7">Last login: <strong>today</strong></p>
                            </div>
                        </Popover.Content>
                    </Popover>
                </div>

                {/* ── DateRangePicker ──────────────────────────────────── */}
                <h1 className="title is-3 mt-6">DateRangePicker</h1>

                {/* Basic */}
                <div className="box">
                    <p className="subtitle is-5">Basic</p>
                    <p className="help mb-4">
                        Click once for start, click again for end.
                        Hovering shows a live range preview.
                    </p>
                    <DateRangePicker value={range1} onChange={setRange1} />
                    {range1.start && range1.end && (
                        <p className="help mt-2">
                            {range1.start.toLocaleDateString()} → {range1.end.toLocaleDateString()}
                        </p>
                    )}
                </div>

                {/* Pre-filled */}
                <div className="box">
                    <p className="subtitle is-5">Pre-filled range</p>
                    <DateRangePicker value={range2} onChange={setRange2} />
                </div>

                {/* Colors */}
                <div className="box">
                    <p className="subtitle is-5">Color variants</p>
                    <p className="help mb-4">The <code>style</code> prop sets the accent color.</p>
                    <div className="is-flex" style={{ gap: "1rem", flexWrap: "wrap" }}>
                        {([
                            ElementColor.Primary,
                            ElementColor.Success,
                            ElementColor.Warning,
                            ElementColor.Danger,
                            ElementColor.Info,
                        ]).map(c => (
                            <DateRangePicker
                                key={c}
                                style={c}
                                value={{ start: undefined, end: undefined }}
                            />
                        ))}
                    </div>
                </div>

                {/* Sizes */}
                <div className="box">
                    <p className="subtitle is-5">Sizes</p>
                    <div className="is-flex" style={{ gap: "1rem", flexWrap: "wrap", alignItems: "flex-start" }}>
                        {[ElementSize.Small, ElementSize.Normal, ElementSize.Medium, ElementSize.Large].map(s => (
                            <div key={s}>
                                <p className="help mb-1">{s}</p>
                                <DateRangePicker size={s} value={{ start: undefined, end: undefined }} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Custom label config */}
                <div className="box">
                    <p className="subtitle is-5">Custom labelConfig</p>
                    <DateRangePicker
                        value={range3}
                        onChange={setRange3}
                        labelConfig={{
                            placeholder: "Выберите период",
                            separator: " — ",
                            pendingSuffix: "...",
                            clearAriaLabel: "ОчиÑтить",
                        }}
                    />
                </div>

                {/* Min/Max date */}
                <div className="box">
                    <p className="subtitle is-5">minDate / maxDate</p>
                    <p className="help mb-4">Restricted to ±7 days from today.</p>
                    <DateRangePicker
                        value={{ start: undefined, end: undefined }}
                        minDate={new Date(Date.now() - 7 * 86400000)}
                        maxDate={new Date(Date.now() + 7 * 86400000)}
                    />
                </div>
            </div>
        </section>
    );
};

export default PopoverAndDateRangePickerExamples;
