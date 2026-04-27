import { FC, useCallback, useRef, useState } from "react";

import DateInputComponent from "@bodynarf/react.components/components/primitives/dateInput";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";
import Log, { LogRef } from "@app/sharedComponents/log";

/** DateInput component demo */
const DateInput: FC = () => {
    const [value, setValue] = useState<Date | undefined>();
    const [formatValue, setFormatValue] = useState<Date | undefined>();
    const [localeValue, setLocaleValue] = useState<Date | undefined>();
    const [minMaxValue, setMinMaxValue] = useState<Date | undefined>();
    const [labelValue, setLabelValue] = useState<Date | undefined>();
    const [hintValue, setHintValue] = useState<Date | undefined>();
    const [calendarValue, setCalendarValue] = useState<Date | undefined>();

    const blurLogRef = useRef<LogRef>(null);

    const today = new Date();
    const minDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    const maxDate = new Date(today.getFullYear(), today.getMonth() + 2, 0);

    const appendBlurLog = useCallback(() => blurLogRef.current?.append("blur"), []);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="DateInput"
                version="1.15"
                baseTypeName="BaseNullableInputElementProps"
                description="Date input field with masked manual entry and Calendar popover. Supports configurable format, automatic separator insertion, per-character validation, min/max constraints and locale."
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Default format is dd.MM.yyyy. Separators are inserted automatically as you type."
                code={
                    <CodeExample
                        code={[
                            `import { useState } from "react";`,
                            "",
                            `import DateInput from "@bodynarf/react.components/components/primitives/dateInput";`,
                            "",
                            `const [value, setValue] = useState<Date | undefined>(undefined);`,
                            "",
                            `<DateInput`,
                            `    defaultValue={value}`,
                            `    onValueChange={setValue}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <DateInputComponent
                        defaultValue={value}
                        onValueChange={setValue}
                    />
                    <p className="mt-1 has-text-grey">
                        Value: {value ? value.toLocaleDateString() : "null"}
                    </p>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="format"
                description="Configure the date format pattern. Supported tokens: dd, MM, yyyy separated by . / or -."
                code={
                    <CodeExample
                        code={[
                            `import DateInput from "@bodynarf/react.components/components/primitives/dateInput";`,
                            "",
                            `<DateInput`,
                            `    format="MM/dd/yyyy"`,
                            `    onValueChange={() => {}}`,
                            `/>`,
                            ``,
                            `<DateInput`,
                            `    format="yyyy-MM-dd"`,
                            `    onValueChange={() => {}}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "24px", flexWrap: "wrap" }}>
                    <div>
                        <p className="has-text-grey is-size-7 mb-1">MM/dd/yyyy</p>
                        <DateInputComponent
                            format="MM/dd/yyyy"
                            defaultValue={formatValue}
                            onValueChange={setFormatValue}
                        />
                    </div>
                    <div>
                        <p className="has-text-grey is-size-7 mb-1">yyyy-MM-dd</p>
                        <DateInputComponent
                            format="yyyy-MM-dd"
                            defaultValue={formatValue}
                            onValueChange={setFormatValue}
                        />
                    </div>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="locale"
                description="BCP 47 locale tag used to localize month names and weekday labels in the calendar popover."
                code={
                    <CodeExample
                        code={[
                            `import DateInput from "@bodynarf/react.components/components/primitives/dateInput";`,
                            "",
                            `<DateInput`,
                            `    locale="ru-RU"`,
                            `    onValueChange={() => {}}`,
                            `/>`,
                            ``,
                            `<DateInput`,
                            `    locale="de-DE"`,
                            `    onValueChange={() => {}}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <div
                    className="is-flex"
                    style={{ gap: "24px", flexWrap: "wrap" }}
                >
                    <div>
                        <p className="has-text-grey is-size-7 mb-1">
                            ru-RU
                        </p>
                        <DateInputComponent
                            locale="ru-RU"
                            defaultValue={localeValue}
                            onValueChange={setLocaleValue}
                        />
                    </div>
                    <div>
                        <p className="has-text-grey is-size-7 mb-1">
                            de-DE
                        </p>
                        <DateInputComponent
                            locale="de-DE"
                            defaultValue={localeValue}
                            onValueChange={setLocaleValue}
                        />
                    </div>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="minDate + maxDate"
                description="Restrict the selectable range. Out-of-range dates are disabled in the calendar."
                code={
                    <CodeExample
                        code={[
                            `import DateInput from "@bodynarf/react.components/components/primitives/dateInput";`,
                            "",
                            `const today = new Date();`,
                            `const minDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);`,
                            `const maxDate = new Date(today.getFullYear(), today.getMonth() + 2, 0);`,
                            "",
                            `<DateInput`,
                            `    minDate={minDate}`,
                            `    maxDate={maxDate}`,
                            `    defaultValue={value}`,
                            `    onValueChange={() => {}}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <DateInputComponent
                        minDate={minDate}
                        maxDate={maxDate}
                        defaultValue={minMaxValue}
                        onValueChange={setMinMaxValue}
                    />
                    <p className="mt-1 has-text-grey">
                        Value:
                        {minMaxValue ? minMaxValue.toLocaleDateString() : "null"}
                    </p>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="label"
                description="Wraps the input with a label element. Supports horizontal layout."
                code={
                    <CodeExample
                        code={[
                            `import DateInput from "@bodynarf/react.components/components/primitives/dateInput";`,
                            "",
                            `<DateInput`,
                            `    defaultValue={value}`,
                            `    onValueChange={() => {}}`,
                            `    label={{ caption: "Date of birth", horizontal: false }}`,
                            `/>`,
                            ``,
                            `<DateInput`,
                            `    defaultValue={value}`,
                            `    onValueChange={() => {}}`,
                            `    label={{ caption: "Horizontal", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <div
                    className="is-flex"
                    style={{ gap: "24px", flexWrap: "wrap", alignItems: "flex-start" }}
                >
                    <DateInputComponent
                        defaultValue={labelValue}
                        onValueChange={setLabelValue}
                        label={{ caption: "Date of birth", horizontal: false }}
                    />
                    <DateInputComponent
                        defaultValue={labelValue}
                        onValueChange={setLabelValue}
                        label={{ caption: "Horizontal", horizontal: true }}
                    />
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="hint"
                description="Shows a hint message below the input."
                code={
                    <CodeExample
                        code={[
                            `import DateInput from "@bodynarf/react.components/components/primitives/dateInput";`,
                            "",
                            `<DateInput`,
                            `    defaultValue={value}`,
                            `    onValueChange={() => {}}`,
                            `    hint={{ content: "Enter in dd.MM.yyyy format" }}`,
                            `    label={{ caption: "Appointment", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <DateInputComponent
                    defaultValue={hintValue}
                    onValueChange={setHintValue}
                    hint={{ content: "Enter in dd.MM.yyyy format" }}
                    label={{ caption: "Appointment", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="disabled"
                description="Renders the input in a disabled state."
                code={
                    <CodeExample
                        code={[
                            `import DateInput from "@bodynarf/react.components/components/primitives/dateInput";`,
                            "",
                            `<DateInput`,
                            `    disabled`,
                            `    onValueChange={() => {}}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <DateInputComponent
                    disabled
                    onValueChange={() => { }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onBlur"
                description="Called when the input loses focus."
                code={
                    <CodeExample
                        code={[
                            `import { useCallback } from "react";`,
                            "",
                            `import DateInput from "@bodynarf/react.components/components/primitives/dateInput";`,
                            "",
                            `const handleBlur = useCallback(() => { /* ... */ }, []);`,
                            "",
                            `<DateInput`,
                            `    onBlur={handleBlur}`,
                            `    onValueChange={() => {}}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <DateInputComponent
                    onBlur={appendBlurLog}
                    onValueChange={() => { }}
                />
                <Log ref={blurLogRef} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="calendarConfig"
                description="Pass additional Calendar props to the popover: todayButtonConfig, clearButtonConfig, initialView, etc."
                code={
                    <CodeExample
                        code={[
                            `import DateInput from "@bodynarf/react.components/components/primitives/dateInput";`,
                            "",
                            `<DateInput`,
                            `    defaultValue={value}`,
                            `    calendarConfig={{`,
                            `        todayButtonConfig: { caption: "Today" },`,
                            `        clearButtonConfig: { caption: "Clear" },`,
                            `    }}`,
                            `    onValueChange={() => {}}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <DateInputComponent
                        defaultValue={calendarValue}
                        calendarConfig={{
                            todayButtonConfig: { caption: "Today" },
                            clearButtonConfig: { caption: "Clear" },
                        }}
                        onValueChange={setCalendarValue}
                    />
                    <p className="mt-1 has-text-grey">
                        Value:
                        {
                            calendarValue
                                ? calendarValue.toLocaleDateString()
                                : "null"
                        }
                    </p>
                </div>
            </ComponentUseCase>

            <ComponentSizeCase
                captionIsCode
                caption="size"
                description="DateInput supports all ElementSize values"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementSize } from "@bodynarf/react.components";`,
                            `import DateInput from "@bodynarf/react.components/components/primitives/dateInput";`,
                            "",
                            `<DateInput`,
                            `   size={ElementSize.${id}}`,
                            `   onValueChange={() => {}}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
                componentProvider={size =>
                    <DateInputComponent
                        size={size}
                        onValueChange={() => { }}
                    />
                }
            />
        </section>
    );
};

export default DateInput;
