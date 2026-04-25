import { FC, useRef } from "react";

import { Icon, Date as DateComponent } from "@bodynarf/react.components";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";
import ObsoleteWarning from "@app/sharedComponents/obsoleteWarning";
import Log, { LogRef } from "@app/sharedComponents/log";

/** Date component demo */
const DateDemo: FC = () => {
    const onValueChangeLogRef = useRef<LogRef>(null);
    const onBlurLogRef = useRef<LogRef>(null);
    const onKeyDownLogRef = useRef<LogRef>(null);
    const onKeyUpLogRef = useRef<LogRef>(null);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Date picker"
                version="0.1"
                description="Control for selecting a specific date"
            />

            <ObsoleteWarning
                version="1.15"
                recommendation={<>Use <code>DateInput</code> control instead</>}
            />

            <ComponentUseCase
                caption="Minimal use"
                description="label is required. Provide caption to render the component."
                code={
                    <CodeExample
                        code={[
                            `import { Date } from "@bodynarf/react.components";`,
                            "",
                            `<Date label={{ caption: "Date demo", horizontal: true }} />`,
                        ].join("\n")}
                    />
                }
            >
                <DateComponent label={{ caption: "Date demo", horizontal: true }} />
            </ComponentUseCase>

            <hr />
            <div><h4 className="subtitle is-4 has-text-weight-semibold">Custom component props</h4></div>

            <ComponentUseCase
                captionIsCode
                caption="label"
                description="Required label configuration rendered next to the input."
                code={
                    <CodeExample
                        code={[
                            `import { Date } from "@bodynarf/react.components";`,
                            "",
                            `<Date label={{ caption: "Birth date", horizontal: false }} />`,
                        ].join("\n")}
                    />
                }
            >
                <DateComponent label={{ caption: "Birth date", horizontal: false }} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="defaultValue"
                description="Sets the initial date value. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import { Date } from "@bodynarf/react.components";`,
                            "",
                            `<Date`,
                            `    defaultValue={new Date(2000, 10, 10)}`,
                            `    label={{ caption: "Date demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <DateComponent
                    defaultValue={new Date(2000, 10, 10)}
                    label={{ caption: "Date demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="rounded"
                description="Applies border-radius to the component. Disabled by default."
                code={
                    <CodeExample
                        code={[
                            `import { Date } from "@bodynarf/react.components";`,
                            "",
                            `<Date`,
                            `    rounded`,
                            `    label={{ caption: "Date demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <DateComponent
                    rounded
                    label={{ caption: "Date demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="disabled"
                description="Renders a non-interactive disabled input. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import { Date } from "@bodynarf/react.components";`,
                            "",
                            `<Date`,
                            `    disabled`,
                            `    label={{ caption: "Date demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <DateComponent
                    disabled
                    label={{ caption: "Date demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="readonly"
                description="Renders the input in read-only mode — value is visible but not editable. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import { Date } from "@bodynarf/react.components";`,
                            "",
                            `<Date`,
                            `    readonly`,
                            `    label={{ caption: "Date demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <DateComponent
                    readonly
                    label={{ caption: "Date demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentSizeCase
                captionIsCode
                caption="size"
                description="Controls the visual size of the component. Supports all ElementSize values."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { Date, ElementSize } from "@bodynarf/react.components";`,
                            "",
                            `<Date`,
                            `    size={ElementSize.${id}}`,
                            `    label={{ caption: "Date demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
                componentProvider={size =>
                    <DateComponent
                        size={size}
                        label={{ caption: "Date demo", horizontal: true }}
                    />
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="loading"
                description="Displays a loading spinner inside the component. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import { Date } from "@bodynarf/react.components";`,
                            "",
                            `<Date`,
                            `    loading`,
                            `    label={{ caption: "Date demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <DateComponent
                    loading
                    label={{ caption: "Date demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentColorCase
                captionIsCode
                caption="style"
                description="Color applied to the input border. Supports all ElementColor values."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { Date, ElementColor } from "@bodynarf/react.components";`,
                            "",
                            `<Date`,
                            `    style={ElementColor.${id}}`,
                            `    label={{ caption: "Date demo", horizontal: false }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
                componentProvider={style =>
                    <DateComponent
                        style={style}
                        label={{ caption: "Date demo", horizontal: false }}
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
                            `import { Date } from "@bodynarf/react.components";`,
                            "",
                            `<Date`,
                            `    name="birthDate"`,
                            `    label={{ caption: "Date demo", horizontal: false }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <DateComponent
                    name="birthDate"
                    label={{ caption: "Date demo", horizontal: false }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="autoFocus"
                description={
                    <>
                        Sets focus on the input on initial render.
                        <br />
                        <Icon name="exclamation-triangle-fill" className="has-text-warning" />
                        {` `}
                        Only 1 element on the page can have this flag.
                    </>
                }
                code={
                    <CodeExample
                        code={[
                            `import { Date } from "@bodynarf/react.components";`,
                            "",
                            `<Date`,
                            `    autoFocus`,
                            `    label={{ caption: "Date demo", horizontal: false }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <DateComponent
                    autoFocus
                    label={{ caption: "Date demo", horizontal: false }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onValueChange"
                description="Called when the selected date changes. Receives the new Date value."
                code={
                    <CodeExample
                        code={[
                            `import { Date } from "@bodynarf/react.components";`,
                            "",
                            `<Date`,
                            `    label={{ caption: "Date demo", horizontal: true }}`,
                            `    onValueChange={value => console.log("value:", value)}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <DateComponent
                    label={{ caption: "Date demo", horizontal: true }}
                    onValueChange={value => onValueChangeLogRef.current?.append(`value: ${value}`)}
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
                            `import { Date } from "@bodynarf/react.components";`,
                            "",
                            `<Date`,
                            `    label={{ caption: "Date demo", horizontal: true }}`,
                            `    onBlur={() => console.log("blurred")}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <DateComponent
                    label={{ caption: "Date demo", horizontal: true }}
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
                            `import { Date } from "@bodynarf/react.components";`,
                            "",
                            `<Date`,
                            `    label={{ caption: "Date demo", horizontal: true }}`,
                            `    onKeyDown={e => console.log("keyDown:", e.key)}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <DateComponent
                    label={{ caption: "Date demo", horizontal: true }}
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
                            `import { Date } from "@bodynarf/react.components";`,
                            "",
                            `<Date`,
                            `    label={{ caption: "Date demo", horizontal: true }}`,
                            `    onKeyUp={e => console.log("keyUp:", e.key)}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <DateComponent
                    label={{ caption: "Date demo", horizontal: true }}
                    onKeyUp={e => onKeyUpLogRef.current?.append(`keyUp: ${e.key}`)}
                />
                <Log ref={onKeyUpLogRef} />
            </ComponentUseCase>
        </section>
    );
};

export default DateDemo;
