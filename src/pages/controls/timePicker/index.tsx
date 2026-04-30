import { FC, useRef } from "react";

import TimePickerComponent from "@bodynarf/react.components/components/primitives/timePicker";
import { TimeValue } from "@bodynarf/react.components";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";
import Log, { LogRef } from "@app/sharedComponents/log";

const formatTime = (time?: TimeValue): string => {
    if (!time) {
        return "Not set";
    }

    const h = time.hours.toString().padStart(2, "0");
    const m = time.minutes.toString().padStart(2, "0");
    const s = time.seconds !== undefined
        ? ":" + time.seconds.toString().padStart(2, "0")
        : "";

    return `${h}:${m}${s}`;
};

/** TimePicker component demo */
const TimePicker: FC = () => {
    const onValueChangeLogRef = useRef<LogRef>(null);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="TimePicker"
                version="1.14"
                description="Component for selecting time values (hours, minutes, and optionally seconds)."
            />

            <ComponentUseCase
                caption="Minimal use"
                description="The component can be rendered without any props."
                code={
                    <CodeExample
                        code={[
                            `import TimePicker from "@bodynarf/react.components/components/primitives/timePicker";`,
                            "",
                            `<TimePicker label={{ caption: "TimePicker demo", horizontal: false }} />`,
                        ].join("\n")}
                    />
                }
            >
                <TimePickerComponent label={{ caption: "TimePicker demo", horizontal: false }} />
            </ComponentUseCase>

            <hr />
            <div><h4 className="subtitle is-4 has-text-weight-semibold">Custom component props</h4></div>

            <ComponentUseCase
                captionIsCode
                caption="label"
                description="Optional label configuration rendered next to the input."
                code={
                    <CodeExample
                        code={[
                            `import TimePicker from "@bodynarf/react.components/components/primitives/timePicker";`,
                            "",
                            `<TimePicker`,
                            `    label={{ caption: "Select time", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <TimePickerComponent label={{ caption: "Select time", horizontal: true }} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="defaultValue"
                description="Sets the initial time value. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import TimePicker from "@bodynarf/react.components/components/primitives/timePicker";`,
                            "",
                            `<TimePicker`,
                            `    defaultValue={{ hours: 14, minutes: 30 }}`,
                            `    label={{ caption: "TimePicker demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <TimePickerComponent
                    label={{ caption: "TimePicker demo", horizontal: true }}
                    defaultValue={{ hours: 14, minutes: 30 }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="showSeconds"
                description="Adds a seconds input field. Defaults to false."
                code={
                    <CodeExample
                        code={[
                            `import TimePicker from "@bodynarf/react.components/components/primitives/timePicker";`,
                            "",
                            `<TimePicker`,
                            `    showSeconds`,
                            `    label={{ caption: "TimePicker demo", horizontal: true }}`,
                            `    defaultValue={{ hours: 10, minutes: 15, seconds: 30 }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <TimePickerComponent
                    label={{ caption: "TimePicker demo", horizontal: true }}
                    showSeconds
                    defaultValue={{ hours: 10, minutes: 15, seconds: 30 }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="step"
                description="Step increment for minutes (and seconds if shown). Defaults to 1."
                code={
                    <CodeExample
                        code={[
                            `import TimePicker from "@bodynarf/react.components/components/primitives/timePicker";`,
                            "",
                            `<TimePicker`,
                            `    step={15}`,
                            `    label={{ caption: "TimePicker demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <TimePickerComponent
                    label={{ caption: "TimePicker demo", horizontal: true }}
                    step={15}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="min"
                description='Minimum allowed time value. Format: "HH:MM" or "HH:MM:SS". Not set by default.'
                code={
                    <CodeExample
                        code={[
                            `import TimePicker from "@bodynarf/react.components/components/primitives/timePicker";`,
                            "",
                            `<TimePicker`,
                            `    min="09:00"`,
                            `    label={{ caption: "TimePicker demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <TimePickerComponent
                    label={{ caption: "TimePicker demo", horizontal: true }}
                    min="09:00"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="max"
                description='Maximum allowed time value. Format: "HH:MM" or "HH:MM:SS". Not set by default.'
                code={
                    <CodeExample
                        code={[
                            `import TimePicker from "@bodynarf/react.components/components/primitives/timePicker";`,
                            "",
                            `<TimePicker`,
                            `    max="17:00"`,
                            `    label={{ caption: "TimePicker demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <TimePickerComponent
                    label={{ caption: "TimePicker demo", horizontal: true }}
                    max="17:00"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="placeholder"
                description="Placeholder text shown when no value is set. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import TimePicker from "@bodynarf/react.components/components/primitives/timePicker";`,
                            "",
                            `<TimePicker`,
                            `    placeholder="hh:mm"`,
                            `    label={{ caption: "TimePicker demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <TimePickerComponent
                    label={{ caption: "TimePicker demo", horizontal: true }}
                    placeholder="hh:mm"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="rounded"
                description="Applies border-radius to the input. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import TimePicker from "@bodynarf/react.components/components/primitives/timePicker";`,
                            "",
                            `<TimePicker`,
                            `    rounded`,
                            `    label={{ caption: "TimePicker demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <TimePickerComponent
                    label={{ caption: "TimePicker demo", horizontal: true }}
                    rounded
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="disabled"
                description="Renders a non-interactive disabled input. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import TimePicker from "@bodynarf/react.components/components/primitives/timePicker";`,
                            "",
                            `<TimePicker`,
                            `    disabled`,
                            `    defaultValue={{ hours: 9, minutes: 30 }}`,
                            `    label={{ caption: "TimePicker demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <TimePickerComponent
                    label={{ caption: "TimePicker demo", horizontal: true }}
                    disabled
                    defaultValue={{ hours: 9, minutes: 30 }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="readonly"
                description="Renders the input in a read-only state. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import TimePicker from "@bodynarf/react.components/components/primitives/timePicker";`,
                            "",
                            `<TimePicker`,
                            `    readonly`,
                            `    defaultValue={{ hours: 15, minutes: 45 }}`,
                            `    label={{ caption: "TimePicker demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <TimePickerComponent
                    label={{ caption: "TimePicker demo", horizontal: true }}
                    readonly
                    defaultValue={{ hours: 15, minutes: 45 }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="loading"
                description="Displays a loading spinner inside the component. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import TimePicker from "@bodynarf/react.components/components/primitives/timePicker";`,
                            "",
                            `<TimePicker`,
                            `    loading`,
                            `    label={{ caption: "TimePicker demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <TimePickerComponent
                    label={{ caption: "TimePicker demo", horizontal: true }}
                    loading
                />
            </ComponentUseCase>

            <ComponentSizeCase
                captionIsCode
                caption="size"
                description="Controls the visual size of the component. Supports all ElementSize values."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementSize } from "@bodynarf/react.components";`,
                            `import TimePicker from "@bodynarf/react.components/components/primitives/timePicker";`,
                            "",
                            `<TimePicker`,
                            `    size={ElementSize.${id}}`,
                            `    label={{ caption: "TimePicker demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
                componentProvider={size =>
                    <TimePickerComponent
                        label={{ caption: "TimePicker demo", horizontal: true }}
                        size={size}
                    />
                }
            />

            <ComponentColorCase
                captionIsCode
                caption="style"
                description="Color applied to the input border. Supports all ElementColor values."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementColor } from "@bodynarf/react.components";`,
                            `import TimePicker from "@bodynarf/react.components/components/primitives/timePicker";`,
                            "",
                            `<TimePicker`,
                            `    style={ElementColor.${id}}`,
                            `    label={{ caption: "TimePicker demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
                componentProvider={style =>
                    <TimePickerComponent
                        label={{ caption: "TimePicker demo", horizontal: true }}
                        style={style}
                    />
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="name"
                description="Specifies the HTML name attribute for use as a form element."
                code={
                    <CodeExample
                        code={[
                            `import TimePicker from "@bodynarf/react.components/components/primitives/timePicker";`,
                            "",
                            `<TimePicker`,
                            `    name="appointmentTime"`,
                            `    label={{ caption: "TimePicker demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <TimePickerComponent
                    label={{ caption: "TimePicker demo", horizontal: true }}
                    name="appointmentTime"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onValueChange"
                description="Called when the time value changes. Receives the new TimeValue."
                code={
                    <CodeExample
                        code={[
                            `import TimePicker from "@bodynarf/react.components/components/primitives/timePicker";`,
                            `import { TimeValue } from "@bodynarf/react.components";`,
                            "",
                            `<TimePicker`,
                            `    onValueChange={value => console.log("value:", value)}`,
                            `    label={{ caption: "TimePicker demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <TimePickerComponent
                    label={{ caption: "TimePicker demo", horizontal: true }}
                    onValueChange={value => onValueChangeLogRef.current?.append(`value: ${formatTime(value)}`)}
                />
                <Log ref={onValueChangeLogRef} />
            </ComponentUseCase>
        </section>
    );
};

export default TimePicker;
