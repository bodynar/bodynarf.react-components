import { FC, useRef, useState } from "react";

import CalendarComponent from "@bodynarf/react.components/components/calendar";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";
import Log, { LogRef } from "@app/sharedComponents/log";

const today = new Date();
const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
const maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);

/** Calendar component demo */
const Calendar: FC = () => {
    const [value, setValue] = useState<Date | undefined>();
    const onChangeLogRef = useRef<LogRef>(null);
    const onDayHoverLogRef = useRef<LogRef>(null);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Calendar"
                version="1.15"
                baseTypeName="BaseElementProps"
                description="Standalone date-picker panel with day-grid, month-picker and year-picker views. Supports locale, min/max date range, optional Today and Clear footer buttons."
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Provide value and onChange — the calendar is fully controlled."
                code={
                    <CodeExample
                        code={[
                            `import { useState } from "react";`,
                            "",
                            `import Calendar from "@bodynarf/react.components/components/calendar";`,
                            "",
                            `const [value, setValue] = useState<Date | undefined>();`,
                            "",
                            `<Calendar value={value} onChange={setValue} />`,
                        ].join("\n")}
                    />
                }
            >
                <CalendarComponent value={value} onChange={setValue} />
            </ComponentUseCase>

            <hr />
            <div><h4 className="subtitle is-4 has-text-weight-semibold">Custom component props</h4></div>

            <ComponentUseCase
                captionIsCode
                caption="value"
                description="Currently selected date. The calendar is fully controlled — pass undefined to have no selection."
                code={
                    <CodeExample
                        code={[
                            `import { useState } from "react";`,
                            "",
                            `import Calendar from "@bodynarf/react.components/components/calendar";`,
                            "",
                            `const [value, setValue] = useState<Date | undefined>(new Date());`,
                            "",
                            `<Calendar value={value} onChange={setValue} />`,
                        ].join("\n")}
                    />
                }
            >
                <CalendarComponent value={new Date()} onChange={() => undefined} />
            </ComponentUseCase>

            <ComponentColorCase
                captionIsCode
                caption="style"
                description="Bulma color applied to accent elements and the panel border."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementColor } from "@bodynarf/react.components";`,
                            `import Calendar from "@bodynarf/react.components/components/calendar";`,
                            "",
                            `<Calendar style={ElementColor.${id}} onChange={() => undefined} />`,
                        ].join("\n")}
                    />
                }
                componentProvider={style =>
                    <CalendarComponent style={style} onChange={() => undefined} />
                }
            />

            <ComponentSizeCase
                captionIsCode
                caption="size"
                description="Controls font size and minimum panel width."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementSize } from "@bodynarf/react.components";`,
                            `import Calendar from "@bodynarf/react.components/components/calendar";`,
                            "",
                            `<Calendar size={ElementSize.${id}} onChange={() => undefined} />`,
                        ].join("\n")}
                    />
                }
                componentProvider={size =>
                    <CalendarComponent size={size} onChange={() => undefined} />
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="minDate"
                description="Minimum selectable date (inclusive). Days before this date are rendered as disabled."
                code={
                    <CodeExample
                        code={[
                            `import Calendar from "@bodynarf/react.components/components/calendar";`,
                            "",
                            `const minDate = new Date(); // today`,
                            "",
                            `<Calendar minDate={minDate} onChange={setValue} />`,
                        ].join("\n")}
                    />
                }
            >
                <CalendarComponent minDate={today} onChange={() => undefined} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="maxDate"
                description="Maximum selectable date (inclusive). Days after this date are rendered as disabled."
                code={
                    <CodeExample
                        code={[
                            `import Calendar from "@bodynarf/react.components/components/calendar";`,
                            "",
                            `const maxDate = new Date(); // today`,
                            "",
                            `<Calendar maxDate={maxDate} onChange={setValue} />`,
                        ].join("\n")}
                    />
                }
            >
                <CalendarComponent maxDate={today} onChange={() => undefined} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="todayButtonConfig"
                description="Configuration for the &quot;Today&quot; footer button. Accepts ButtonProps (except onClick, size, disabled, style)."
                code={
                    <CodeExample
                        code={[
                            `import Calendar from "@bodynarf/react.components/components/calendar";`,
                            "",
                            `<Calendar`,
                            `    value={value}`,
                            `    onChange={setValue}`,
                            `    todayButtonConfig={{ caption: "Today" }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <CalendarComponent
                    value={value}
                    todayButtonConfig={{ caption: "Today" }}
                    onChange={setValue}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="clearButtonConfig"
                description="Configuration for the &quot;Clear&quot; footer button. Accepts ButtonProps (except onClick, size, disabled, style, light)."
                code={
                    <CodeExample
                        code={[
                            `import Calendar from "@bodynarf/react.components/components/calendar";`,
                            "",
                            `<Calendar`,
                            `    value={value}`,
                            `    onChange={setValue}`,
                            `    clearButtonConfig={{ caption: "Clear" }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <CalendarComponent
                    value={value}
                    clearButtonConfig={{ caption: "Clear" }}
                    onChange={setValue}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="initialView"
                description='Initial view mode when the panel mounts. "month" opens the month-picker, "year" opens the year-picker. Defaults to the day-grid view.'
                code={
                    <CodeExample
                        code={[
                            `import Calendar from "@bodynarf/react.components/components/calendar";`,
                            "",
                            `<Calendar initialView="month" onChange={setValue} />`,
                            `<Calendar initialView="year" onChange={setValue} />`,
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "2rem", flexWrap: "wrap" }}>
                    <div>
                        <p className="mb-1 has-text-grey">initialView: &quot;month&quot;</p>
                        <CalendarComponent initialView="month" onChange={() => undefined} />
                    </div>
                    <div>
                        <p className="mb-1 has-text-grey">initialView: &quot;year&quot;</p>
                        <CalendarComponent initialView="year" onChange={() => undefined} />
                    </div>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="locale"
                description="BCP 47 locale tag used to localise month names and weekday labels. Defaults to &quot;en-US&quot;."
                code={
                    <CodeExample
                        code={[
                            `import Calendar from "@bodynarf/react.components/components/calendar";`,
                            "",
                            `<Calendar locale="ru-RU" onChange={setValue} />`,
                        ].join("\n")}
                    />
                }
            >
                <CalendarComponent locale="ru-RU" onChange={() => undefined} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="prevLabel"
                description="Accessible aria-label for the &quot;previous&quot; navigation button. Defaults to &quot;Previous&quot;."
                code={
                    <CodeExample
                        code={[
                            `import Calendar from "@bodynarf/react.components/components/calendar";`,
                            "",
                            `<Calendar prevLabel="Назад" onChange={setValue} />`,
                        ].join("\n")}
                    />
                }
            >
                <CalendarComponent prevLabel="Назад" onChange={() => undefined} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="nextLabel"
                description="Accessible aria-label for the &quot;next&quot; navigation button. Defaults to &quot;Next&quot;."
                code={
                    <CodeExample
                        code={[
                            `import Calendar from "@bodynarf/react.components/components/calendar";`,
                            "",
                            `<Calendar nextLabel="Вперёд" onChange={setValue} />`,
                        ].join("\n")}
                    />
                }
            >
                <CalendarComponent nextLabel="Вперёд" onChange={() => undefined} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onChange"
                description="Called when the user selects a day or clears the selection. Receives the new Date or undefined."
                code={
                    <CodeExample
                        code={[
                            `import Calendar from "@bodynarf/react.components/components/calendar";`,
                            "",
                            `<Calendar`,
                            `    value={value}`,
                            `    onChange={date => console.log("selected", date)}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <CalendarComponent
                    value={value}
                    onChange={date => {
                        setValue(date);
                        onChangeLogRef.current?.append(`onChange: ${date ? date.toLocaleDateString() : "cleared"}`);
                    }}
                />
                <Log ref={onChangeLogRef} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onDayHover"
                description="Called when the pointer enters a day cell; called with undefined when the pointer leaves the grid."
                code={
                    <CodeExample
                        code={[
                            `import Calendar from "@bodynarf/react.components/components/calendar";`,
                            "",
                            `<Calendar`,
                            `    onChange={setValue}`,
                            `    onDayHover={date => console.log("hover", date)}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <CalendarComponent
                    onChange={() => undefined}
                    onDayHover={date => {
                        if (date !== undefined) {
                            onDayHoverLogRef.current?.append(`onDayHover: ${date.toLocaleDateString()}`);
                        }
                    }}
                />
                <Log ref={onDayHoverLogRef} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="rangeStart"
                description="Start bound of an active date range. When set, single-selection highlighting is suppressed and range highlighting is shown."
                code={
                    <CodeExample
                        code={[
                            `import Calendar from "@bodynarf/react.components/components/calendar";`,
                            "",
                            `<Calendar`,
                            `    rangeEnd={maxDate}`,
                            `    onChange={setValue}`,
                            `    rangeStart={minDate}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <CalendarComponent
                    rangeStart={minDate}
                    rangeEnd={maxDate}
                    onChange={() => undefined}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="rangeEnd"
                description="Confirmed end bound of the date range."
                code={
                    <CodeExample
                        code={[
                            `import Calendar from "@bodynarf/react.components/components/calendar";`,
                            "",
                            `<Calendar`,
                            `    rangeEnd={maxDate}`,
                            `    rangeStart={minDate}`,
                            `    onChange={setValue}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <CalendarComponent
                    rangeStart={minDate}
                    rangeEnd={maxDate}
                    onChange={() => undefined}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="hoverDate"
                description="Tentative hover date shown as a preview range end while the user is picking the second bound."
                code={
                    <CodeExample
                        code={[
                            `import Calendar from "@bodynarf/react.components/components/calendar";`,
                            "",
                            `<Calendar`,
                            `    hoverDate={today}`,
                            `    rangeStart={minDate}`,
                            `    onChange={setValue}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <CalendarComponent
                    rangeStart={minDate}
                    hoverDate={today}
                    onChange={() => undefined}
                />
            </ComponentUseCase>
        </section>
    );
};

export default Calendar;
