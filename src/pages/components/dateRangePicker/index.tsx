import { FC, useRef, useState } from "react";

import DateRangePickerComponent from "@bodynarf/react.components/components/dateRangePicker";
import { DateRange } from "@bodynarf/react.components";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";
import Log, { LogRef } from "@app/sharedComponents/log";

const today = new Date();
const minDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);
const maxDate = new Date(today.getFullYear(), today.getMonth() + 2, 0);

/** DateRangePicker component demo */
const DateRangePicker: FC = () => {
    const [range, setRange] = useState<DateRange>({ start: undefined, end: undefined });
    const onChangeLogRef = useRef<LogRef>(null);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="DateRangePicker"
                version="1.15"
                baseTypeName="BaseElementProps"
                description="Calendar-based date range selector for booking, reporting and filtering flows. First click sets start, second sets end; live hover preview between dates. Fully controlled."
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Provide value and onChange. First click sets start date, second click sets end date."
                code={
                    <CodeExample
                        code={[
                            `import { useState } from "react";`,
                            "",
                            `import { DateRange } from "@bodynarf/react.components";`,
                            `import DateRangePicker from "@bodynarf/react.components/components/dateRangePicker";`,
                            "",
                            `const [range, setRange] = useState<DateRange>({ start: undefined, end: undefined });`,
                            "",
                            `<DateRangePicker`,
                            `    value={range}`,
                            `    onChange={setRange}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <DateRangePickerComponent value={range} onChange={setRange} />
                <p className="mt-2 has-text-grey">
                    Start: {range.start?.toLocaleDateString() ?? "—"} &nbsp; End: {range.end?.toLocaleDateString() ?? "—"}
                </p>
            </ComponentUseCase>

            <hr />
            <div>
                <h4 className="subtitle is-4 has-text-weight-semibold">Custom component props</h4>
            </div>

            <ComponentUseCase
                captionIsCode
                caption="value"
                description="Currently selected date range. Both start and end are optional (undefined means not yet set). Must be stored outside the component — fully controlled."
                code={
                    <CodeExample
                        code={[
                            `import { useState } from "react";`,
                            "",
                            `import { DateRange } from "@bodynarf/react.components";`,
                            `import DateRangePicker from "@bodynarf/react.components/components/dateRangePicker";`,
                            "",
                            `const [range, setRange] = useState<DateRange>({ start: undefined, end: undefined });`,
                            "",
                            `<DateRangePicker`,
                            `    value={range}`,
                            `    onChange={setRange}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <DateRangePickerComponent value={range} onChange={setRange} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onChange"
                description="Called when both start and end are selected, or when the selection is cleared. Receives a DateRange object."
                code={
                    <CodeExample
                        code={[
                            `import { useState } from "react";`,
                            "",
                            `import { DateRange } from "@bodynarf/react.components";`,
                            `import DateRangePicker from "@bodynarf/react.components/components/dateRangePicker";`,
                            "",
                            `const [range, setRange] = useState<DateRange>({ start: undefined, end: undefined });`,
                            "",
                            `<DateRangePicker`,
                            `    value={range}`,
                            `    onChange={(r) => {`,
                            `        console.log(r.start, r.end); // for demo: logRef.current?.append(...)`,
                            `        setRange(r);`,
                            `    }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <DateRangePickerComponent
                    value={range}
                    onChange={r => {
                        onChangeLogRef.current?.append(`start: ${r.start?.toLocaleDateString() ?? "—"}, end: ${r.end?.toLocaleDateString() ?? "—"}`);
                        setRange(r);
                    }}
                />
                <Log ref={onChangeLogRef} />
            </ComponentUseCase>

            <ComponentColorCase
                captionIsCode
                caption="style"
                description="Bulma color style applied to accent elements. Defaults to Primary."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementColor } from "@bodynarf/react.components";`,
                            `import DateRangePicker from "@bodynarf/react.components/components/dateRangePicker";`,
                            "",
                            `<DateRangePicker`,
                            `    value={range}`,
                            `    onChange={setRange}`,
                            `    style={ElementColor.${id}}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
                componentProvider={style =>
                    <DateRangePickerComponent
                        value={range}
                        style={style}
                        onChange={setRange}
                    />
                }
            />

            <ComponentSizeCase
                captionIsCode
                caption="size"
                description="Component size."
                codeProvider={size =>
                    <CodeExample
                        code={[
                            `import { ElementSize } from "@bodynarf/react.components";`,
                            `import DateRangePicker from "@bodynarf/react.components/components/dateRangePicker";`,
                            "",
                            `<DateRangePicker`,
                            `    value={range}`,
                            `    onChange={setRange}`,
                            `    size={ElementSize.${size}}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
                componentProvider={size =>
                    <DateRangePickerComponent
                        value={range}
                        size={size}
                        onChange={setRange}
                    />
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="minDate"
                description="Minimum selectable date (inclusive). Dates before this are disabled in the calendar."
                code={
                    <CodeExample
                        code={[
                            `import DateRangePicker from "@bodynarf/react.components/components/dateRangePicker";`,
                            "",
                            `const minDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);`,
                            "",
                            `<DateRangePicker`,
                            `    value={range}`,
                            `    minDate={minDate}`,
                            `    onChange={setRange}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <DateRangePickerComponent
                    value={range}
                    minDate={minDate}
                    onChange={setRange}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="maxDate"
                description="Maximum selectable date (inclusive). Dates after this are disabled in the calendar."
                code={
                    <CodeExample
                        code={[
                            `import DateRangePicker from "@bodynarf/react.components/components/dateRangePicker";`,
                            "",
                            `const maxDate = new Date(today.getFullYear(), today.getMonth() + 2, 0);`,
                            "",
                            `<DateRangePicker`,
                            `    value={range}`,
                            `    maxDate={maxDate}`,
                            `    onChange={setRange}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <DateRangePickerComponent
                    value={range}
                    maxDate={maxDate}
                    onChange={setRange}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="locale"
                description="BCP 47 locale string for month and weekday labels. Defaults to en-US."
                code={
                    <CodeExample
                        code={[
                            `import DateRangePicker from "@bodynarf/react.components/components/dateRangePicker";`,
                            "",
                            `<DateRangePicker`,
                            `    value={range}`,
                            `    locale="ru-RU"`,
                            `    onChange={setRange}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <DateRangePickerComponent
                    value={range}
                    locale="ru-RU"
                    onChange={setRange}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="labelConfig"
                description="Optional overrides for all user-visible text strings: placeholder, separator, pendingSuffix, clearAriaLabel."
                code={
                    <CodeExample
                        code={[
                            `import DateRangePicker from "@bodynarf/react.components/components/dateRangePicker";`,
                            "",
                            `<DateRangePicker`,
                            `    value={range}`,
                            `    labelConfig={{`,
                            `        placeholder: "Выберите период",`,
                            `        separator: " – ",`,
                            `        pendingSuffix: "...",`,
                            `        clearAriaLabel: "Очистить",`,
                            `    }}`,
                            `    onChange={setRange}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <DateRangePickerComponent
                    value={range}
                    labelConfig={{
                        placeholder: "Выберите период",
                        separator: " – ",
                        pendingSuffix: "...",
                        clearAriaLabel: "Очистить",
                    }}
                    onChange={setRange}
                />
            </ComponentUseCase>

            <hr />
            <div>
                <h4 className="subtitle is-4 has-text-weight-semibold">DateRangePickerLabelConfig props</h4>
            </div>

            <ComponentUseCase
                captionIsCode
                caption="placeholder"
                description="Text shown in the label bar when no start date has been selected yet. Defaults to &quot;Select range&quot;."
                code={
                    <CodeExample
                        code={[
                            `import DateRangePicker from "@bodynarf/react.components/components/dateRangePicker";`,
                            "",
                            `<DateRangePicker`,
                            `    value={range}`,
                            `    onChange={setRange}`,
                            `    labelConfig={{ placeholder: "Pick a period" }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <DateRangePickerComponent
                    value={range}
                    labelConfig={{ placeholder: "Pick a period" }}
                    onChange={setRange}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="separator"
                description="String rendered between the start and end date in the label bar. Defaults to &quot; → &quot;."
                code={
                    <CodeExample
                        code={[
                            `import DateRangePicker from "@bodynarf/react.components/components/dateRangePicker";`,
                            "",
                            `<DateRangePicker`,
                            `    value={range}`,
                            `    onChange={setRange}`,
                            `    labelConfig={{ separator: " to " }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <DateRangePickerComponent
                    value={range}
                    labelConfig={{ separator: " to " }}
                    onChange={setRange}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="pendingSuffix"
                description="Appended to the start date label while waiting for the end date to be picked. Defaults to &quot;…&quot;."
                code={
                    <CodeExample
                        code={[
                            `import DateRangePicker from "@bodynarf/react.components/components/dateRangePicker";`,
                            "",
                            `<DateRangePicker`,
                            `    value={range}`,
                            `    onChange={setRange}`,
                            `    labelConfig={{ pendingSuffix: " (pick end date)" }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <DateRangePickerComponent
                    value={range}
                    labelConfig={{ pendingSuffix: " (pick end date)" }}
                    onChange={setRange}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="clearAriaLabel"
                description="Accessible label for the clear (×) button. Defaults to &quot;Clear range&quot;."
                code={
                    <CodeExample
                        code={[
                            `import DateRangePicker from "@bodynarf/react.components/components/dateRangePicker";`,
                            "",
                            `<DateRangePicker`,
                            `    value={range}`,
                            `    onChange={setRange}`,
                            `    labelConfig={{ clearAriaLabel: "Reset selection" }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <DateRangePickerComponent
                    value={range}
                    labelConfig={{ clearAriaLabel: "Reset selection" }}
                    onChange={setRange}
                />
            </ComponentUseCase>
        </section>
    );
};

export default DateRangePicker;
