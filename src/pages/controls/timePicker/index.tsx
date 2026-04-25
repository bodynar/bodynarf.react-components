import { FC, useRef } from "react";

import { TimePicker as TimePickerComponent, TimeValue } from "@bodynarf/react.components";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";
import Log, { LogRef } from "@app/sharedComponents/log";

const formatTime = (time?: TimeValue): string => {
    if (!time) { return "Not set"; }
    const h = time.hours.toString().padStart(2, "0");
    const m = time.minutes.toString().padStart(2, "0");
    const s = time.seconds !== undefined ? ":" + time.seconds.toString().padStart(2, "0") : "";
    return `${h}:${m}${s}`;
};

/** TimePicker component demo */
const TimePicker: FC = () => {
    const onValueChangeLogRef = useRef<LogRef>(null);
    const onBlurLogRef = useRef<LogRef>(null);
    const onKeyDownLogRef = useRef<LogRef>(null);
    const onKeyUpLogRef = useRef<LogRef>(null);

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
                            `import { TimePicker } from "@bodynarf/react.components";`,
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
                            `import { TimePicker } from "@bodynarf/react.components";`,
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
                            `import { TimePicker } from "@bodynarf/react.components";`,
                            "",
                            `<TimePicker`,
                            `    label={{ caption: "TimePicker demo", horizontal: true }}`,
                            `    defaultValue={{ hours: 14, minutes: 30 }}`,
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
                            `import { TimePicker } from "@bodynarf/react.components";`,
                            "",
                            `<TimePicker`,
                            `    label={{ caption: "TimePicker demo", horizontal: true }}`,
                            `    showSeconds`,
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
                            `import { TimePicker } from "@bodynarf/react.components";`,
                            "",
                            `<TimePicker`,
                            `    label={{ caption: "TimePicker demo", horizontal: true }}`,
                            `    step={15}`,
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
                            `import { TimePicker } from "@bodynarf/react.components";`,
                            "",
                            `<TimePicker`,
                            `    label={{ caption: "TimePicker demo", horizontal: true }}`,
                            `    min="09:00"`,
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
                            `import { TimePicker } from "@bodynarf/react.components";`,
                            "",
                            `<TimePicker`,
                            `    label={{ caption: "TimePicker demo", horizontal: true }}`,
                            `    max="17:00"`,
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
                            `import { TimePicker } from "@bodynarf/react.components";`,
                            "",
                            `<TimePicker`,
                            `    label={{ caption: "TimePicker demo", horizontal: true }}`,
                            `    placeholder="hh:mm"`,
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
                            `import { TimePicker } from "@bodynarf/react.components";`,
                            "",
                            `<TimePicker`,
                            `    label={{ caption: "TimePicker demo", horizontal: true }}`,
                            `    rounded`,
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
                            `import { TimePicker } from "@bodynarf/react.components";`,
                            "",
                            `<TimePicker`,
                            `    label={{ caption: "TimePicker demo", horizontal: true }}`,
                            `    disabled`,
                            `    defaultValue={{ hours: 9, minutes: 30 }}`,
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
                            `import { TimePicker } from "@bodynarf/react.components";`,
                            "",
                            `<TimePicker`,
                            `    label={{ caption: "TimePicker demo", horizontal: true }}`,
                            `    readonly`,
                            `    defaultValue={{ hours: 15, minutes: 45 }}`,
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
                            `import { TimePicker } from "@bodynarf/react.components";`,
                            "",
                            `<TimePicker`,
                            `    label={{ caption: "TimePicker demo", horizontal: true }}`,
                            `    loading`,
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
                            `import { TimePicker, ElementSize } from "@bodynarf/react.components";`,
                            "",
                            `<TimePicker`,
                            `    label={{ caption: "TimePicker demo", horizontal: true }}`,
                            `    size={ElementSize.${id}}`,
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
                            `import { TimePicker, ElementColor } from "@bodynarf/react.components";`,
                            "",
                            `<TimePicker`,
                            `    label={{ caption: "TimePicker demo", horizontal: true }}`,
                            `    style={ElementColor.${id}}`,
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
                            `import { TimePicker } from "@bodynarf/react.components";`,
                            "",
                            `<TimePicker`,
                            `    label={{ caption: "TimePicker demo", horizontal: true }}`,
                            `    name="appointmentTime"`,
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
                            `import { TimePicker, TimeValue } from "@bodynarf/react.components";`,
                            "",
                            `<TimePicker`,
                            `    label={{ caption: "TimePicker demo", horizontal: true }}`,
                            `    onValueChange={value => console.log("value:", value)}`,
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

            <ComponentUseCase
                captionIsCode
                caption="onBlur"
                description="Called when the input loses focus."
                code={
                    <CodeExample
                        code={[
                            `import { TimePicker } from "@bodynarf/react.components";`,
                            "",
                            `<TimePicker`,
                            `    label={{ caption: "TimePicker demo", horizontal: true }}`,
                            `    onBlur={() => console.log("blurred")}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <TimePickerComponent
                    label={{ caption: "TimePicker demo", horizontal: true }}
                    onBlur={() => onBlurLogRef.current?.append("blurred")}
                />
                <Log ref={onBlurLogRef} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onKeyDown"
                description="Called when a key is pressed while the input is focused."
                code={
                    <CodeExample
                        code={[
                            `import { TimePicker } from "@bodynarf/react.components";`,
                            "",
                            `<TimePicker`,
                            `    label={{ caption: "TimePicker demo", horizontal: true }}`,
                            `    onKeyDown={e => console.log("keyDown:", e.key)}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <TimePickerComponent
                    label={{ caption: "TimePicker demo", horizontal: true }}
                    onKeyDown={e => onKeyDownLogRef.current?.append(`keyDown: ${e.key}`)}
                />
                <Log ref={onKeyDownLogRef} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onKeyUp"
                description="Called when a key is released while the input is focused."
                code={
                    <CodeExample
                        code={[
                            `import { TimePicker } from "@bodynarf/react.components";`,
                            "",
                            `<TimePicker`,
                            `    label={{ caption: "TimePicker demo", horizontal: true }}`,
                            `    onKeyUp={e => console.log("keyUp:", e.key)}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <TimePickerComponent
                    label={{ caption: "TimePicker demo", horizontal: true }}
                    onKeyUp={e => onKeyUpLogRef.current?.append(`keyUp: ${e.key}`)}
                />
                <Log ref={onKeyUpLogRef} />
            </ComponentUseCase>
        </section>
    );
};

export default TimePicker;
