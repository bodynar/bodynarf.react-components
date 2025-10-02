import { FC, useCallback, useState } from "react";

import { Icon, NumberInput as NumberComponent } from "@bodynarf/react.components";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";

/** Number component demo */
const Number: FC = () => {
    const [onValueChangeLog, setOnValueChangeLog] = useState("");
    const appendOnValueChangeLog = useCallback(
        (value?: number) => setOnValueChangeLog(
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
                name="Number"
                description="Component for entering numeric values"
            />

            <div className="block">
                <p>
                    For better readability in examples, the
                    {` `}
                    <code>
                        label
                    </code>
                    {` `}
                    prop is included. However, it is not required.
                </p>
            </div>

            <ComponentUseCase
                caption="Minimal use"
                description="Minimal configuration is absent, the component can be used 'empty'"
                code={
                    <CodeExample
                        code={[
                            `import NumberComponent from "@bodynarf/react.components/components/primitives/number";`,
                            "",
                            "/* ... */",
                            "",
                            `<NumberComponent />`,
                        ].join("\n")}
                    />
                }
            >
                <NumberComponent />
            </ComponentUseCase>

            <hr />

            <div className="block">
                <h4 className="subtitle is-4">
                    Custom component props
                </h4>
            </div>

            <ComponentUseCase
                captionIsCode
                caption="step"
                description="Число, на которое изменяется значение в поле при использовании стрелок увеличения\изменения значения. По умолчанию 1."
                code={
                    <CodeExample
                        code={[
                            `import NumberComponent from "@bodynarf/react.components/components/primitives/number";`,
                            "",
                            "/* ... */",
                            "",
                            `<NumberComponent`,
                            "    step={5}",
                            `    label={{ caption: "Number demo", horizontal: true }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <NumberComponent
                    step={5}
                    label={{ caption: "Number demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onBlur"
                description="Handler for the component blur event. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import { useCallback } from "react"`,
                            "",
                            `import NumberComponent from "@bodynarf/react.components/components/primitives/number";`,
                            "",
                            "/* ... */",
                            "const ON_BLUR_HANDLE_FN = useCallback(() => { /* handler fn */}, []);",
                            "/* ... */",
                            "",
                            `<NumberComponent`,
                            "    onBlur={ON_BLUR_HANDLE_FN}",
                            `    label={{ caption: "Number demo", horizontal: true }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <NumberComponent
                    onBlur={appendOnBlurLog}
                    label={{ caption: "Number demo", horizontal: true }}
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
                            `import NumberComponent from "@bodynarf/react.components/components/primitives/number";`,
                            "",
                            "/* ... */",
                            "",
                            `<NumberComponent`,
                            '    defaultValue={8910}',
                            `    label={{ caption: "Number demo", horizontal: true }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <NumberComponent
                    defaultValue={8910}
                    label={{ caption: "Number demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="placeholder"
                description="Option to specify the component's placeholder. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import NumberComponent from "@bodynarf/react.components/components/primitives/number";`,
                            "",
                            "/* ... */",
                            "",
                            `<NumberComponent`,
                            '    placeholder="Number demo control"',
                            `    label={{ caption: "Number demo", horizontal: true }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <NumberComponent
                    placeholder="Number demo control"
                    label={{ caption: "Number demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="rounded"
                description="Option to apply border-radius to the component. Disabled by default."
                code={
                    <CodeExample
                        code={[
                            `import NumberComponent from "@bodynarf/react.components/components/primitives/number";`,
                            "",
                            "/* ... */",
                            "",
                            `<NumberComponent`,
                            `    rounded`,
                            `    label={{ caption: "Number demo", horizontal: true }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <NumberComponent
                    rounded
                    label={{ caption: "Number demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="disabled"
                description="Option to render the component as disabled. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import NumberComponent from "@bodynarf/react.components/components/primitives/number";`,
                            "",
                            "/* ... */",
                            "",
                            `<NumberComponent`,
                            `    disabled`,
                            `    label={{ caption: "Number demo", horizontal: true }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <NumberComponent
                    disabled
                    label={{ caption: "Number demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="readonly"
                description="Option to render the component in readonly state. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import NumberComponent from "@bodynarf/react.components/components/primitives/number";`,
                            "",
                            "/* ... */",
                            "",
                            `<NumberComponent`,
                            `    readonly`,
                            `    label={{ caption: "Number demo", horizontal: true }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <NumberComponent
                    readonly
                    label={{ caption: "Number demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentSizeCase
                caption="Sizes"
                description="The component supports all sizes defined in the ElementSize type"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementSize } from "@bodynarf/react.components";`,
                            `import NumberComponent from "@bodynarf/react.components/components/primitives/number";`,
                            "",
                            "/* ... */",
                            "",
                            `<NumberComponent`,
                            `    size={ElementSize.${id}}`,
                            `    label={{ caption: "Number demo", horizontal: true }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
                componentProvider={
                    size =>
                        <NumberComponent
                            size={size}
                            label={{ caption: "Number demo", horizontal: true }}
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
                            `import NumberComponent from "@bodynarf/react.components/components/primitives/number";`,
                            "",
                            "/* ... */",
                            "",
                            `<NumberComponent`,
                            `    loading`,
                            `    label={{ caption: "Number demo", horizontal: true }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <NumberComponent
                    loading
                    label={{ caption: "Number demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentColorCase
                caption="Colors"
                description="Component supports all available colors"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementColor } from "@bodynarf/react.components";`,
                            `import NumberComponent from "@bodynarf/react.components/components/primitives/number";`,
                            "",
                            "/* ... */",
                            "",
                            `<NumberComponent`,
                            `    style={ElementColor.${id}}`,
                            `    label={{ caption: "Number demo", horizontal: false }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
                componentProvider={
                    style =>
                        <NumberComponent
                            style={style}
                            label={{ caption: "Number demo", horizontal: false }}
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
                            `import NumberComponent from "@bodynarf/react.components/components/primitives/number";`,
                            "",
                            "/* ... */",
                            "",
                            '<NumberComponent',
                            '    name="amount"',
                            '    label={{ caption: "Number demo", horizontal: false }}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <NumberComponent
                    name="amount"
                    label={{ caption: "Number demo", horizontal: false }}
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
                            `import NumberComponent from "@bodynarf/react.components/components/primitives/number";`,
                            "",
                            "/* ... */",
                            "",
                            '<NumberComponent',
                            '    autoFocus',
                            '    label={{ caption: "Number demo", horizontal: false }}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <NumberComponent
                    autoFocus
                    label={{ caption: "Number demo", horizontal: false }}
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
                            `import NumberComponent from "@bodynarf/react.components/components/primitives/number";`,
                            "",
                            "/* ... */",
                            "const ON_VALUE_CHANGE_HANDLE_FN = useCallback((value: number) => { /* handler fn */}, []);",
                            "/* ... */",
                            "",
                            `<NumberComponent`,
                            "    onValueChange={ON_VALUE_CHANGE_HANDLE_FN}",
                            `    label={{ caption: "Number demo", horizontal: true }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <NumberComponent
                    onValueChange={appendOnValueChangeLog}
                    label={{ caption: "Number demo", horizontal: true }}
                />
                <p style={{ whiteSpace: "pre-line" }}>
                    {onValueChangeLog}
                </p>
            </ComponentUseCase>
        </section>
    );
};

export default Number;
