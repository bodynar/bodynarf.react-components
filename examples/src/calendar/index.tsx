import { FC, useState } from "react";

import Calendar from "@bodynarf/react.components/components/calendar";
import { ElementColor, ElementSize } from "@bodynarf/react.components";
import { CalendarProps } from "@bodynarf/react.components/components/calendar";
import { ButtonStyle } from "@bodynarf/react.components/components/button";

/**
 * Wrapper that owns the selected-date state so each demo is independently interactive.
 */
const CalendarDemo: FC<{
    initialValue?: Date;
    showValue?: boolean;
} & Omit<CalendarProps, "value" | "onChange">> = ({ initialValue, showValue = false, ...rest }) => {
    const [value, setValue] = useState<Date | undefined>(initialValue);

    const fmt = new Intl.DateTimeFormat(rest.locale ?? "en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <div style={{ display: "inline-flex", flexDirection: "column", gap: "0.5rem" }}>
            <Calendar {...rest} value={value} onChange={setValue} />
            {showValue && (
                <p className="has-text-grey is-size-7">
                    Selected: {value ? fmt.format(value) : "—"}
                </p>
            )}
        </div>
    );
};

/** All Calendar component variations */
const CalendarExamples: FC = () => {
    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-3">Calendar</h1>

                {/* ── Basic ─────────────────────────────────────────── */}
                <div className="box">
                    <p className="subtitle is-5">Basic</p>
                    <p className="help mb-4">No initial value, default options.</p>
                    <CalendarDemo />
                </div>

                {/* ── Controlled with onChange ───────────────────────── */}
                <div className="box">
                    <p className="subtitle is-5">Controlled (with onChange)</p>
                    <p className="help mb-4">Selected date displayed below the calendar.</p>
                    <CalendarDemo
                        initialValue={new Date(2026, 3, 10)}
                        showValue
                    />
                </div>

                {/* ── Pre-selected value ────────────────────────────── */}
                <div className="box">
                    <p className="subtitle is-5">Pre-selected date</p>
                    <p className="help mb-4">Opens with April 10, 2026 highlighted.</p>
                    <CalendarDemo initialValue={new Date(2026, 3, 10)} />
                </div>

                {/* ── Locale ────────────────────────────────────────── */}
                <div className="box">
                    <p className="subtitle is-5">Locale</p>
                    <p className="help mb-4">
                        Month names and weekday labels are localised via the <code>locale</code> prop.
                    </p>
                    <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                        <div>
                            <p className="is-size-7 has-text-grey mb-2">en-US (default)</p>
                            <CalendarDemo locale="en-US" initialValue={new Date(2026, 3, 10)} />
                        </div>
                        <div>
                            <p className="is-size-7 has-text-grey mb-2">ru-RU</p>
                            <CalendarDemo locale="ru-RU" initialValue={new Date(2026, 3, 10)} showValue />
                        </div>
                        <div>
                            <p className="is-size-7 has-text-grey mb-2">de-DE</p>
                            <CalendarDemo locale="de-DE" initialValue={new Date(2026, 3, 10)} />
                        </div>
                    </div>
                </div>

                {/* ── Sizes ─────────────────────────────────────────── */}
                <div className="box">
                    <p className="subtitle is-5">Sizes</p>
                    <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", alignItems: "flex-start" }}>
                        {([
                            [ElementSize.Small, "Small"],
                            [ElementSize.Normal, "Normal (default)"],
                            [ElementSize.Medium, "Medium"],
                            [ElementSize.Large, "Large"],
                        ] as const).map(([size, label]) => (
                            <div key={size}>
                                <p className="is-size-7 has-text-grey mb-2">{label}</p>
                                <CalendarDemo
                                    size={size}
                                    initialValue={new Date(2026, 3, 10)}
                                    todayButtonConfig={{ style: ButtonStyle.Default, caption: "Today" }}
                                    clearButtonConfig={{ style: ButtonStyle.Default, caption: "Clear" }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Colors ────────────────────────────────────────── */}
                <div className="box">
                    <p className="subtitle is-5">Colors</p>
                    <p className="help mb-4">Standard Bulma palette via the <code>style</code> prop.</p>
                    <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", alignItems: "flex-start" }}>
                        {([
                            [ElementColor.Primary, "Primary"],
                            [ElementColor.Link, "Link"],
                            [ElementColor.Info, "Info"],
                            [ElementColor.Success, "Success"],
                            [ElementColor.Warning, "Warning"],
                            [ElementColor.Danger, "Danger"],
                        ] as const).map(([color, label]) => (
                            <div key={color}>
                                <p className="is-size-7 has-text-grey mb-2">{label}</p>
                                <CalendarDemo style={color} initialValue={new Date(2026, 3, 10)} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Today button ──────────────────────────────────── */}
                <div className="box">
                    <p className="subtitle is-5">Today button</p>
                    <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                        <div>
                            <p className="is-size-7 has-text-grey mb-2">Default label ("Today")</p>
                            <CalendarDemo todayButtonConfig={{ style: ButtonStyle.Default, caption: "Today" }} />
                        </div>
                        <div>
                            <p className="is-size-7 has-text-grey mb-2">Custom label</p>
                            <CalendarDemo todayButtonConfig={{ style: ButtonStyle.Default, caption: "Go to today" }} />
                        </div>
                        <div>
                            <p className="is-size-7 has-text-grey mb-2">Russian label</p>
                            <CalendarDemo
                                locale="ru-RU"
                                todayButtonConfig={{ style: ButtonStyle.Default, caption: "Сегодня" }}
                            />
                        </div>
                    </div>
                </div>

                {/* ── Clearable ─────────────────────────────────────── */}
                <div className="box">
                    <p className="subtitle is-5">Clearable</p>
                    <p className="help mb-4">
                        The Clear button appears in the footer when a date is selected.
                    </p>
                    <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                        <div>
                            <p className="is-size-7 has-text-grey mb-2">Clear only</p>
                            <CalendarDemo
                                clearButtonConfig={{ style: ButtonStyle.Default, caption: "Clear" }}
                                initialValue={new Date(2026, 3, 10)}
                                showValue
                            />
                        </div>
                        <div>
                            <p className="is-size-7 has-text-grey mb-2">Clear + Today</p>
                            <CalendarDemo
                                clearButtonConfig={{ style: ButtonStyle.Default, caption: "Clear" }}
                                todayButtonConfig={{ style: ButtonStyle.Default, caption: "Today" }}
                                initialValue={new Date(2026, 3, 10)}
                                showValue
                            />
                        </div>
                    </div>
                </div>

                {/* ── Min / Max date ────────────────────────────────── */}
                <div className="box">
                    <p className="subtitle is-5">Min / Max date</p>
                    <p className="help mb-4">
                        Selectable range restricted to April 5–20, 2026.
                    </p>
                    <CalendarDemo
                        initialValue={new Date(2026, 3, 10)}
                        minDate={new Date(2026, 3, 5)}
                        maxDate={new Date(2026, 3, 20)}
                        todayButtonConfig={{ style: ButtonStyle.Default, caption: "Today" }}
                        showValue
                    />
                </div>

                {/* ── Initial view ──────────────────────────────────── */}
                <div className="box">
                    <p className="subtitle is-5">Initial view</p>
                    <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                        <div>
                            <p className="is-size-7 has-text-grey mb-2">initialView="month"</p>
                            <CalendarDemo initialView="month" />
                        </div>
                        <div>
                            <p className="is-size-7 has-text-grey mb-2">initialView="year"</p>
                            <CalendarDemo initialView="year" />
                        </div>
                    </div>
                </div>

                {/* ── Nav buttons disabled at boundary ─────────────── */}
                <div className="box">
                    <p className="subtitle is-5">Navigation locked at min / max boundary</p>
                    <p className="help mb-4">
                        The prev / next arrows are disabled when scrolling further would go
                        outside the allowed date range.
                    </p>
                    <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                        <div>
                            <p className="is-size-7 has-text-grey mb-2">
                                minDate = Apr 1 — prev arrow disabled in April
                            </p>
                            <CalendarDemo
                                initialValue={new Date(2026, 3, 10)}
                                minDate={new Date(2026, 3, 1)}
                                showValue
                            />
                        </div>
                        <div>
                            <p className="is-size-7 has-text-grey mb-2">
                                maxDate = Apr 30 — next arrow disabled in April
                            </p>
                            <CalendarDemo
                                initialValue={new Date(2026, 3, 10)}
                                maxDate={new Date(2026, 3, 30)}
                                showValue
                            />
                        </div>
                        <div>
                            <p className="is-size-7 has-text-grey mb-2">
                                Both: Apr 5–20, both arrows disabled
                            </p>
                            <CalendarDemo
                                initialValue={new Date(2026, 3, 10)}
                                minDate={new Date(2026, 3, 5)}
                                maxDate={new Date(2026, 3, 20)}
                                showValue
                            />
                        </div>
                    </div>
                </div>

                {/* ── Today button hidden when out of range ─────────── */}
                <div className="box">
                    <p className="subtitle is-5">Today button hidden when today is out of range</p>
                    <p className="help mb-4">
                        The Today button is not rendered at all when today falls outside
                        the allowed <code>minDate</code> / <code>maxDate</code> range.
                    </p>
                    <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                        <div>
                            <p className="is-size-7 has-text-grey mb-2">
                                Today visible — range includes today (Apr 18)
                            </p>
                            <CalendarDemo
                                minDate={new Date(2026, 3, 1)}
                                maxDate={new Date(2026, 3, 30)}
                                todayButtonConfig={{ style: ButtonStyle.Default, caption: "Today" }}
                            />
                        </div>
                        <div>
                            <p className="is-size-7 has-text-grey mb-2">
                                Today hidden — range is in the past (Apr 1–10)
                            </p>
                            <CalendarDemo
                                initialValue={new Date(2026, 3, 5)}
                                minDate={new Date(2026, 3, 1)}
                                maxDate={new Date(2026, 3, 10)}
                                todayButtonConfig={{ style: ButtonStyle.Default, caption: "Today" }}
                            />
                        </div>
                        <div>
                            <p className="is-size-7 has-text-grey mb-2">
                                Today hidden — range is in the future (May 1–31)
                            </p>
                            <CalendarDemo
                                initialValue={new Date(2026, 4, 15)}
                                minDate={new Date(2026, 4, 1)}
                                maxDate={new Date(2026, 4, 31)}
                                todayButtonConfig={{ style: ButtonStyle.Default, caption: "Today" }}
                            />
                        </div>
                    </div>
                </div>

                {/* ── Pre-selected value out of range ───────────────── */}
                <div className="box">
                    <p className="subtitle is-5">Pre-selected value outside allowed range</p>
                    <p className="help mb-4">
                        When <code>value</code> falls outside <code>minDate</code> / <code>maxDate</code>,
                        it is cleared on mount and a <code>console.error</code> is logged.
                        Open DevTools console to see the message.
                    </p>
                    <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                        <div>
                            <p className="is-size-7 has-text-grey mb-2">
                                value = Apr 1 (before minDate Apr 5) → cleared
                            </p>
                            <CalendarDemo
                                initialValue={new Date(2026, 3, 1)}
                                minDate={new Date(2026, 3, 5)}
                                maxDate={new Date(2026, 3, 20)}
                                showValue
                            />
                        </div>
                        <div>
                            <p className="is-size-7 has-text-grey mb-2">
                                value = Apr 25 (after maxDate Apr 20) → cleared
                            </p>
                            <CalendarDemo
                                initialValue={new Date(2026, 3, 25)}
                                minDate={new Date(2026, 3, 5)}
                                maxDate={new Date(2026, 3, 20)}
                                showValue
                            />
                        </div>
                        <div>
                            <p className="is-size-7 has-text-grey mb-2">
                                value = Apr 10 (within Apr 5–20) → kept
                            </p>
                            <CalendarDemo
                                initialValue={new Date(2026, 3, 10)}
                                minDate={new Date(2026, 3, 5)}
                                maxDate={new Date(2026, 3, 20)}
                                showValue
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CalendarExamples;
