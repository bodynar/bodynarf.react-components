import { FC, useCallback, useState } from "react";

import { ElementColor, ElementSize, TimePicker as TimePickerComponent, TimeValue } from "@bodynarf/react.components";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";

/** Format TimeValue to display string */
const formatTime = (time?: TimeValue): string => {
    if (!time) return "Not set";
    const h = time.hours.toString().padStart(2, "0");
    const m = time.minutes.toString().padStart(2, "0");
    const s = time.seconds !== undefined ? ":" + time.seconds.toString().padStart(2, "0") : "";
    return `${h}:${m}${s}`;
};

/** TimePicker component demo */
const TimePicker: FC = () => {
    // Event log for onValueChange demo
    const [onValueChangeLog, setOnValueChangeLog] = useState("");
    const appendOnValueChangeLog = useCallback(
        (value?: TimeValue) => setOnValueChangeLog(
            t => t
                + "\n"
                + new Date().toLocaleTimeString()
                + " => " + `new value: ${formatTime(value)}`
        ),
        []
    );

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="TimePicker"
                baseTypeName="BaseInputElementProps"
                description={
                    <>
                        TimePicker - a time input component for selecting hours, minutes, and optionally seconds.
                        <br />
                        The value is represented as an object with hours, minutes, and optional seconds fields.
                    </>
                }
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Minimal configuration: component with label"
                code={
                    <CodeExample
                        code={[
                            `import { TimePicker } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `<TimePicker`,
                            `    label={{ caption: "Select time", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <TimePickerComponent
                    label={{ caption: "Select time", horizontal: true }}
                />
            </ComponentUseCase>

            <hr />

            <div className="block">
                <h4 className="subtitle is-4">
                    Custom component props
                </h4>
            </div>

            <ComponentUseCase
                captionIsCode
                caption="defaultValue"
                description="Set the initial time value as an object with hours, minutes, and optional seconds"
                code={
                    <CodeExample
                        code={[
                            `import { TimePicker, TimeValue } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `<TimePicker`,
                            `    label={{ caption: "Default time", horizontal: true }}`,
                            `    defaultValue={{ hours: 14, minutes: 30 }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <TimePickerComponent
                    label={{ caption: "Default time", horizontal: true }}
                    defaultValue={{ hours: 14, minutes: 30 }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onValueChange"
                description="Handler for the value change event. Called when the time value changes."
                code={
                    <CodeExample
                        code={[
                            `import { useCallback } from "react";`,
                            "",
                            `import { TimePicker, TimeValue } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            `const handleValueChange = useCallback((value?: TimeValue) => {`,
                            `    console.log("New time:", value?.hours, ":", value?.minutes);`,
                            `}, []);`,
                            "/* ... */",
                            "",
                            `<TimePicker`,
                            `    label={{ caption: "Track changes", horizontal: true }}`,
                            `    onValueChange={handleValueChange}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <TimePickerComponent
                    label={{ caption: "Track changes", horizontal: true }}
                    onValueChange={appendOnValueChangeLog}
                />
                <p style={{ whiteSpace: "pre-line" }}>
                    {onValueChangeLog}
                </p>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="showSeconds"
                description="Enable seconds input field in addition to hours and minutes"
                code={
                    <CodeExample
                        code={[
                            `import { TimePicker } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `<TimePicker`,
                            `    label={{ caption: "With seconds", horizontal: true }}`,
                            `    showSeconds`,
                            `    defaultValue={{ hours: 10, minutes: 15, seconds: 30 }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <TimePickerComponent
                    label={{ caption: "With seconds", horizontal: true }}
                    showSeconds
                    defaultValue={{ hours: 10, minutes: 15, seconds: 30 }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="step"
                description="Set the step increment for minutes (and seconds if shown)"
                code={
                    <CodeExample
                        code={[
                            `import { TimePicker } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `<TimePicker`,
                            `    label={{ caption: "Step 15", horizontal: true }}`,
                            `    step={15}`,
                            `    defaultValue={{ hours: 12, minutes: 0 }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <TimePickerComponent
                    label={{ caption: "Step 15", horizontal: true }}
                    step={15}
                    defaultValue={{ hours: 12, minutes: 0 }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="min, max"
                description="Set the minimum and maximum allowed time values (format: HH:MM or HH:MM:SS)"
                code={
                    <CodeExample
                        code={[
                            `import { TimePicker } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `<TimePicker`,
                            `    label={{ caption: "Working hours", horizontal: true }}`,
                            `    min="09:00"`,
                            `    max="17:00"`,
                            `    defaultValue={{ hours: 12, minutes: 0 }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <TimePickerComponent
                    label={{ caption: "Working hours", horizontal: true }}
                    min="09:00"
                    max="17:00"
                    defaultValue={{ hours: 12, minutes: 0 }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="rounded"
                description="Apply rounded corners to the input field"
                code={
                    <CodeExample
                        code={[
                            `import { TimePicker } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `<TimePicker`,
                            `    label={{ caption: "Rounded", horizontal: true }}`,
                            `    rounded`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <TimePickerComponent
                    label={{ caption: "Rounded", horizontal: true }}
                    rounded
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="loading"
                description="Show loading state on the input"
                code={
                    <CodeExample
                        code={[
                            `import { TimePicker } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `<TimePicker`,
                            `    label={{ caption: "Loading", horizontal: true }}`,
                            `    loading`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <TimePickerComponent
                    label={{ caption: "Loading", horizontal: true }}
                    loading
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="disabled"
                description="Disable the time picker input"
                code={
                    <CodeExample
                        code={[
                            `import { TimePicker } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `<TimePicker`,
                            `    label={{ caption: "Disabled", horizontal: true }}`,
                            `    disabled`,
                            `    defaultValue={{ hours: 9, minutes: 30 }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <TimePickerComponent
                    label={{ caption: "Disabled", horizontal: true }}
                    disabled
                    defaultValue={{ hours: 9, minutes: 30 }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="readonly"
                description="Make the time picker read-only"
                code={
                    <CodeExample
                        code={[
                            `import { TimePicker } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `<TimePicker`,
                            `    label={{ caption: "Read-only", horizontal: true }}`,
                            `    readonly`,
                            `    defaultValue={{ hours: 15, minutes: 45 }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <TimePickerComponent
                    label={{ caption: "Read-only", horizontal: true }}
                    readonly
                    defaultValue={{ hours: 15, minutes: 45 }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                caption="Full example"
                description="A complete example with all common options"
                code={
                    <CodeExample
                        code={[
                            `import { TimePicker, ElementColor, ElementSize } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `<TimePicker`,
                            `    label={{ caption: "Appointment time", horizontal: true }}`,
                            `    showSeconds`,
                            `    min="08:00:00"`,
                            `    max="18:00:00"`,
                            `    defaultValue={{ hours: 10, minutes: 0, seconds: 0 }}`,
                            `    size={ElementSize.Normal}`,
                            `    style={ElementColor.Primary}`,
                            `    rounded`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <TimePickerComponent
                    label={{ caption: "Appointment time", horizontal: true }}
                    showSeconds
                    min="08:00:00"
                    max="18:00:00"
                    defaultValue={{ hours: 10, minutes: 0, seconds: 0 }}
                    size={ElementSize.Normal}
                    style={ElementColor.Primary}
                    rounded
                />
            </ComponentUseCase>

            <hr />

            <div className="block">
                <h4 className="subtitle is-4">
                    Size and color variations
                </h4>
            </div>

            <ComponentSizeCase
                captionIsCode
                caption="size"
                description="The component supports all sizes defined in the ElementSize type"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementSize, TimePicker } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            '<TimePicker',
                            `    label={{ caption: "Size demo", horizontal: true }}`,
                            `    size={ElementSize.${id}}`,
                            '/>',
                        ].join("\n")}
                    />
                }
                componentProvider={(size: ElementSize) =>
                    <TimePickerComponent
                        label={{ caption: "Size demo", horizontal: true }}
                        size={size}
                    />
                }
            />

            <ComponentColorCase
                captionIsCode
                caption="style"
                description="The component supports all colors defined in the ElementColor type"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementColor, TimePicker } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            '<TimePicker',
                            `    label={{ caption: "Color demo", horizontal: true }}`,
                            `    style={ElementColor.${id}}`,
                            '/>',
                        ].join("\n")}
                    />
                }
                componentProvider={(color: ElementColor) =>
                    <TimePickerComponent
                        label={{ caption: "Color demo", horizontal: true }}
                        style={color}
                    />
                }
            />
        </section>
    );
};

export default TimePicker;
