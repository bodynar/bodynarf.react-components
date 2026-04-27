import { FC, useRef } from "react";

import Icon from "@bodynarf/react.components/components/icon";
import NumberComponent from "@bodynarf/react.components/components/primitives/number";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";
import Log, { LogRef } from "@app/sharedComponents/log";

/** Number component demo */
const Number: FC = () => {
    const onValueChangeLogRef = useRef<LogRef>(null);
    const onBlurLogRef = useRef<LogRef>(null);
    const onKeyDownLogRef = useRef<LogRef>(null);
    const onKeyUpLogRef = useRef<LogRef>(null);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Number"
                version="1.4"
                description="Component for entering numeric values"
            />

            <ComponentUseCase
                caption="Minimal use"
                description="The component can be rendered without any props."
                code={
                    <CodeExample
                        code={[
                            `import NumberInput from "@bodynarf/react.components/components/primitives/number";`,
                            "",
                            "<NumberInput />",
                        ].join("\n")}
                    />
                }
            >
                <NumberComponent />
            </ComponentUseCase>

            <hr />
            <div><h4 className="subtitle is-4 has-text-weight-semibold">Custom component props</h4></div>

            <ComponentUseCase
                captionIsCode
                caption="step"
                description="Increment step used when clicking the stepper arrows. Defaults to 1."
                code={
                    <CodeExample
                        code={[
                            `import NumberInput from "@bodynarf/react.components/components/primitives/number";`,
                            "",
                            `<NumberInput`,
                            `    step={5}`,
                            `    label={{ caption: "Number demo", horizontal: true }}`,
                            `/>`,
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
                caption="resetToDefaultOnBlur"
                description="Resets the value to defaultValue (or 0 if not set) on blur when the field is empty. Disabled by default."
                code={
                    <CodeExample
                        code={[
                            `import NumberInput from "@bodynarf/react.components/components/primitives/number";`,
                            "",
                            `// with defaultValue — resets to 100`,
                            `<NumberInput`,
                            `    resetToDefaultOnBlur`,
                            `    defaultValue={100}`,
                            `    label={{ caption: "Clear and blur to reset to 100", horizontal: true }}`,
                            `/>`,
                            "",
                            `// without defaultValue — resets to 0`,
                            `<NumberInput`,
                            `    resetToDefaultOnBlur`,
                            `    label={{ caption: "Clear and blur to reset to 0", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex is-flex-direction-column" style={{ gap: "0.75rem" }}>
                    <div>
                        <p className="mb-1 has-text-grey">with defaultValue={100}</p>
                        <NumberComponent
                            resetToDefaultOnBlur
                            defaultValue={100}
                            label={{ caption: "Clear and blur to reset to 100", horizontal: true }}
                        />
                    </div>
                    <div>
                        <p className="mb-1 has-text-grey">without defaultValue (resets to 0)</p>
                        <NumberComponent
                            resetToDefaultOnBlur
                            label={{ caption: "Clear and blur to reset to 0", horizontal: true }}
                        />
                    </div>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="label"
                description="Optional label configuration rendered next to the input."
                code={
                    <CodeExample
                        code={[
                            `import NumberInput from "@bodynarf/react.components/components/primitives/number";`,
                            "",
                            `<NumberInput`,
                            `    label={{ caption: "Number demo", horizontal: false }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <NumberComponent label={{ caption: "Number demo", horizontal: false }} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="defaultValue"
                description="Sets the initial numeric value. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import NumberInput from "@bodynarf/react.components/components/primitives/number";`,
                            "",
                            `<NumberInput`,
                            `    defaultValue={8910}`,
                            `    label={{ caption: "Number demo", horizontal: true }}`,
                            `/>`,
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
                description="Placeholder text shown when the input is empty. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import NumberInput from "@bodynarf/react.components/components/primitives/number";`,
                            "",
                            `<NumberInput`,
                            `    placeholder="Enter a number"`,
                            `    label={{ caption: "Number demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <NumberComponent
                    placeholder="Enter a number"
                    label={{ caption: "Number demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="rounded"
                description="Applies border-radius to the component. Disabled by default."
                code={
                    <CodeExample
                        code={[
                            `import NumberInput from "@bodynarf/react.components/components/primitives/number";`,
                            "",
                            `<NumberInput`,
                            `    rounded`,
                            `    label={{ caption: "Number demo", horizontal: true }}`,
                            `/>`,
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
                description="Renders a non-interactive disabled input. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import NumberInput from "@bodynarf/react.components/components/primitives/number";`,
                            "",
                            `<NumberInput`,
                            `    disabled`,
                            `    label={{ caption: "Number demo", horizontal: true }}`,
                            `/>`,
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
                description="Renders the input in read-only mode. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import NumberInput from "@bodynarf/react.components/components/primitives/number";`,
                            "",
                            `<NumberInput`,
                            `    readonly`,
                            `    label={{ caption: "Number demo", horizontal: true }}`,
                            `/>`,
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
                captionIsCode
                caption="size"
                description="Controls the visual size of the component. Supports all ElementSize values."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementSize } from "@bodynarf/react.components";`,
                            `import NumberInput from "@bodynarf/react.components/components/primitives/number";`,
                            "",
                            `<NumberInput`,
                            `    size={ElementSize.${id}}`,
                            `    label={{ caption: "Number demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
                componentProvider={size =>
                    <NumberComponent
                        size={size}
                        label={{ caption: "Number demo", horizontal: true }}
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
                            `import NumberInput from "@bodynarf/react.components/components/primitives/number";`,
                            "",
                            `<NumberInput`,
                            `    loading`,
                            `    label={{ caption: "Number demo", horizontal: true }}`,
                            `/>`,
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
                captionIsCode
                caption="style"
                description="Color applied to the input border. Supports all ElementColor values."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementColor } from "@bodynarf/react.components";`,
                            `import NumberInput from "@bodynarf/react.components/components/primitives/number";`,
                            "",
                            `<NumberInput`,
                            `    style={ElementColor.${id}}`,
                            `    label={{ caption: "Number demo", horizontal: false }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
                componentProvider={style =>
                    <NumberComponent
                        style={style}
                        label={{ caption: "Number demo", horizontal: false }}
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
                            `import NumberInput from "@bodynarf/react.components/components/primitives/number";`,
                            "",
                            `<NumberInput`,
                            `    name="amount"`,
                            `    label={{ caption: "Number demo", horizontal: false }}`,
                            `/>`,
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
                            `import NumberInput from "@bodynarf/react.components/components/primitives/number";`,
                            "",
                            `<NumberInput`,
                            `    autoFocus`,
                            `    label={{ caption: "Number demo", horizontal: false }}`,
                            `/>`,
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
                description="Called when the numeric value changes. Receives the new number value."
                code={
                    <CodeExample
                        code={[
                            `import NumberInput from "@bodynarf/react.components/components/primitives/number";`,
                            "",
                            `<NumberInput`,
                            `    label={{ caption: "Number demo", horizontal: true }}`,
                            `    onValueChange={value => console.log("value:", value)}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <NumberComponent
                    label={{ caption: "Number demo", horizontal: true }}
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
                            `import NumberInput from "@bodynarf/react.components/components/primitives/number";`,
                            "",
                            `<NumberInput`,
                            `    onBlur={() => console.log("blurred")}`,
                            `    label={{ caption: "Number demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <NumberComponent
                    label={{ caption: "Number demo", horizontal: true }}
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
                            `import NumberInput from "@bodynarf/react.components/components/primitives/number";`,
                            "",
                            `<NumberInput`,
                            `    onKeyDown={e => console.log("keyDown:", e.key)}`,
                            `    label={{ caption: "Number demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <NumberComponent
                    label={{ caption: "Number demo", horizontal: true }}
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
                            `import NumberInput from "@bodynarf/react.components/components/primitives/number";`,
                            "",
                            `<NumberInput`,
                            `    onKeyUp={e => console.log("keyUp:", e.key)}`,
                            `    label={{ caption: "Number demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <NumberComponent
                    label={{ caption: "Number demo", horizontal: true }}
                    onKeyUp={e => onKeyUpLogRef.current?.append(`keyUp: ${e.key}`)}
                />
                <Log ref={onKeyUpLogRef} />
            </ComponentUseCase>
        </section>
    );
};

export default Number;
