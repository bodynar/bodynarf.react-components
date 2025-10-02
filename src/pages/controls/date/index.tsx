import { FC, useCallback, useState } from "react";

import { Icon, Date as DateComponent } from "@bodynarf/react.components";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";

/** Date component demo */
const DateDemo: FC = () => {
    const [onValueChangeLog, setOnValueChangeLog] = useState("");
    const appendOnValueChangeLog = useCallback(
        (value?: Date) => setOnValueChangeLog(
            t => t
                + "\n"
                + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getMilliseconds()
                + " => " + `new value: ${value}`
        ),
        []
    );

    const [onBlurLog, setOnBlurLog] = useState("");
    const appendOnBlurLog = useCallback(
        () => setOnBlurLog(
            t => t
                + "\n"
                + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getMilliseconds()
                + " => " + "component lost focus"
        ),
        []
    );

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Date picker"
                description="Control for selecting a specific date"
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Minimal configuration: component label"
                code={
                    <CodeExample
                        code={[
                            `import DateComponent from "@bodynarf/react.components/components/primitives/date";`,
                            "",
                            "/* ... */",
                            "",
                            `<DateComponent`,
                            `    label={{ caption: "Date demo", horizontal: true }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <DateComponent
                    label={{ caption: "Date demo", horizontal: true }}
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
                caption="onBlur"
                description="Handler for the component blur event. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import { useCallback } from "react"`,
                            "",
                            `import DateComponent from "@bodynarf/react.components/components/primitives/date";`,
                            "",
                            "/* ... */",
                            "const ON_BLUR_HANDLE_FN = useCallback(() => { /* handler fn */}, []);",
                            "/* ... */",
                            "",
                            `<DateComponent`,
                            "    onBlur={ON_BLUR_HANDLE_FN}",
                            `    label={{ caption: "Date demo", horizontal: true }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <DateComponent
                    onBlur={appendOnBlurLog}
                    label={{ caption: "Date demo", horizontal: true }}
                />
                <p style={{ whiteSpace: "pre-line" }}>
                    {onBlurLog}
                </p>
            </ComponentUseCase>

            <hr />

            <div className="block">
                <h4 className="subtitle is-4">
                    Base props implementation
                    {` `}
                    <code>
                        BaseInputElementProps
                    </code>
                </h4>
            </div>

            <ComponentUseCase
                captionIsCode
                caption="defaultValue"
                description="Option to set the initial value of the component. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import DateComponent from "@bodynarf/react.components/components/primitives/date";`,
                            "",
                            "/* ... */",
                            "",
                            `<DateComponent`,
                            `    defaultValue={new Date(2000, 10, 10)}`,
                            `    label={{ caption: "Date demo", horizontal: true }}`,
                            "/>",
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
                description="Option to apply border-radius to the component. Disabled by default."
                code={
                    <CodeExample
                        code={[
                            `import DateComponent from "@bodynarf/react.components/components/primitives/date";`,
                            "",
                            "/* ... */",
                            "",
                            `<DateComponent`,
                            `    rounded`,
                            `    label={{ caption: "Date demo", horizontal: true }}`,
                            "/>",
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
                description="Option to render the component as disabled. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import DateComponent from "@bodynarf/react.components/components/primitives/date";`,
                            "",
                            "/* ... */",
                            "",
                            `<DateComponent`,
                            `    disabled`,
                            `    label={{ caption: "Date demo", horizontal: true }}`,
                            "/>",
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
                description="Option to render the component in readonly state. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import DateComponent from "@bodynarf/react.components/components/primitives/date";`,
                            "",
                            "/* ... */",
                            "",
                            `<DateComponent`,
                            `    readonly`,
                            `    label={{ caption: "Date demo", horizontal: true }}`,
                            "/>",
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
                caption="Sizes"
                description="The component supports all sizes defined in the ElementSize type"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementSize } from "@bodynarf/react.components";`,
                            `import DateComponent from "@bodynarf/react.components/components/primitives/date";`,
                            "",
                            "/* ... */",
                            "",
                            `<DateComponent`,
                            `    size={ElementSize.${id}}`,
                            `    label={{ caption: "Date demo", horizontal: true }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
                componentProvider={
                    size =>
                        <DateComponent
                            size={size}
                            label={{ caption: "Date demo", horizontal: true }}
                        />
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="loading"
                description="Option to render the component in a loading state. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import DateComponent from "@bodynarf/react.components/components/primitives/date";`,
                            "",
                            "/* ... */",
                            "",
                            `<DateComponent`,
                            `    loading`,
                            `    label={{ caption: "Date demo", horizontal: true }}`,
                            "/>",
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
                caption="Colors"
                description="Component supports all available colors"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementColor } from "@bodynarf/react.components";`,
                            `import DateComponent from "@bodynarf/react.components/components/primitives/date";`,
                            "",
                            "/* ... */",
                            "",
                            `<DateComponent`,
                            `    style={ElementColor.${id}}`,
                            `    label={{ caption: "Date demo", horizontal: false }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
                componentProvider={
                    style =>
                        <DateComponent
                            style={style}
                            label={{ caption: "Date demo", horizontal: false }}
                        />
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="name"
                description="Option to specify the component name. Used as a form element attribute."
                code={
                    <CodeExample
                        code={[
                            `import DateComponent from "@bodynarf/react.components/components/primitives/date";`,
                            "",
                            "/* ... */",
                            "",
                            '<DateComponent',
                            '    name="birthDate"',
                            '    label={{ caption: "Date demo", horizontal: false }}',
                            '/>',
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
                        Option to set focus on the component input field on initial render
                        <br />
                        <Icon
                            name="exclamation-triangle-fill"
                            className="has-text-warning"
                        />
                        {` `}
                        <span>
                            Only 1 element on the page can have this flag
                        </span>
                        <br />
                        <span className="is-italic">
                            Refresh the page and check which component (from the presented examples) received automatic focus
                        </span>
                    </>
                }
                code={
                    <CodeExample
                        code={[
                            `import DateComponent from "@bodynarf/react.components/components/primitives/date";`,
                            "",
                            "/* ... */",
                            "",
                            '<DateComponent',
                            '    autoFocus',
                            '    label={{ caption: "Date demo", horizontal: false }}',
                            '/>',
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
                description="Option for handling the onValueChange event. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import { useCallback } from "react"`,
                            "",
                            `import DateComponent from "@bodynarf/react.components/components/primitives/date";`,
                            "",
                            "/* ... */",
                            "const ON_VALUE_CHANGE_HANDLE_FN = useCallback((value?: Date) => { /* handler fn */}, []);",
                            "/* ... */",
                            "",
                            `<DateComponent`,
                            "    onValueChange={ON_VALUE_CHANGE_HANDLE_FN}",
                            `    label={{ caption: "Date demo", horizontal: true }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <DateComponent
                    onValueChange={appendOnValueChangeLog}
                    label={{ caption: "Date demo", horizontal: true }}
                />
                <p style={{ whiteSpace: "pre-line" }}>
                    {onValueChangeLog}
                </p>
            </ComponentUseCase>
        </section>
    );
};

export default DateDemo;
