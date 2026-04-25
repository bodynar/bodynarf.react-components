import { FC, useRef } from "react";

import { Icon, ElementColor, Checkbox as CheckboxComponent } from "@bodynarf/react.components";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";
import Log, { LogRef } from "@app/sharedComponents/log";

/** Checkbox component demo */
const Checkbox: FC = () => {
    const onValueChangeLogRef = useRef<LogRef>(null);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Checkbox"
                version="1.3"
                baseTypeName="BaseInputElementProps"
                description={
                    <>
                        Checkbox - an input component for type
                        {` `}
                        <code>
                            boolean
                        </code>
                        {` `}
                        , i.e. a flag value.
                        <br />
                        To use the component, you need to install the dependency
                        {` `}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.npmjs.com/package/bulma-checkradio"
                        >
                            bulma-checkradio
                        </a>
                        <br />
                        <Icon name="exclamation-triangle-fill" />
                        {` `}
                        This package is marked as
                        {` `}
                        <code>
                            deprecated
                        </code>
                        {` `}
                        It will be replaced in future releases
                    </>
                }
            />

            <div className="block">
                <div className="columns">
                    <div className="column">
                        <h5>
                            How to install bulma-checkradio dependency
                        </h5>
                    </div>
                </div>

                <div className="columns">
                    <div className="column">
                        <CodeExample
                            code={[
                                `// Project root, main.tsx file`,
                                `import "bulma-checkradio/dist/css/bulma-checkradio.min.css";`,
                            ].join("\n")}
                        />
                    </div>
                </div>
            </div>

            <ComponentUseCase
                caption="Minimal use"
                description="The component can be rendered without any props."
                code={
                    <CodeExample
                        code={[
                            `import { Checkbox } from "@bodynarf/react.components";`,
                            "",
                            "<Checkbox />",
                        ].join("\n")}
                    />
                }
            >
                <CheckboxComponent />
            </ComponentUseCase>

            <hr />
            <div><h4 className="subtitle is-4 has-text-weight-semibold">Custom component props</h4></div>

            <ComponentUseCase
                captionIsCode
                caption="label"
                description="Optional label configuration rendered next to the checkbox."
                code={
                    <CodeExample
                        code={[
                            `import { Checkbox } from "@bodynarf/react.components";`,
                            "",
                            `<Checkbox label={{ caption: "Checkbox demo" }} />`,
                        ].join("\n")}
                    />
                }
            >
                <CheckboxComponent label={{ caption: "Checkbox demo" }} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="block"
                description="Stretches the component container to full width. Disabled by default."
                code={
                    <CodeExample
                        code={[
                            `import { Checkbox } from "@bodynarf/react.components";`,
                            "",
                            `<Checkbox`,
                            `    block`,
                            `    label={{ caption: "Checkbox demo" }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <CheckboxComponent
                    block
                    label={{ caption: "Checkbox demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="withoutBorder"
                description="Renders the component without a border. Disabled by default."
                code={
                    <CodeExample
                        code={[
                            `import { Checkbox } from "@bodynarf/react.components";`,
                            "",
                            `<Checkbox`,
                            `    withoutBorder`,
                            `    label={{ caption: "Checkbox demo" }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <CheckboxComponent
                    withoutBorder
                    label={{ caption: "Checkbox demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="hasBackgroundColor"
                description="Fills the checkbox with background color. Only works when style is set. Disabled by default."
                code={
                    <CodeExample
                        code={[
                            `import { Checkbox, ElementColor } from "@bodynarf/react.components";`,
                            "",
                            `<Checkbox`,
                            `    hasBackgroundColor`,
                            `    style={ElementColor.Primary}`,
                            `    label={{ caption: "Checkbox demo" }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <CheckboxComponent
                    hasBackgroundColor
                    style={ElementColor.Primary}
                    label={{ caption: "Checkbox demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="fixBackgroundColor"
                description="Makes unchecked background transparent. Only effective when hasBackgroundColor is true. Disabled by default."
                code={
                    <CodeExample
                        code={[
                            `import { Checkbox, ElementColor } from "@bodynarf/react.components";`,
                            "",
                            `<Checkbox`,
                            `    fixBackgroundColor`,
                            `    hasBackgroundColor`,
                            `    style={ElementColor.Primary}`,
                            `    label={{ caption: "Checkbox demo" }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <CheckboxComponent
                    fixBackgroundColor
                    hasBackgroundColor
                    style={ElementColor.Primary}
                    label={{ caption: "Checkbox demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="isFormLabel"
                description="Renders the label in form element style, placed at the left. Disabled by default."
                code={
                    <CodeExample
                        code={[
                            `import { Checkbox } from "@bodynarf/react.components";`,
                            "",
                            `<Checkbox`,
                            `    isFormLabel`,
                            `    label={{ caption: "Form Label", horizontal: false }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <CheckboxComponent
                    isFormLabel
                    label={{ caption: "Form Label", horizontal: false }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="checked"
                description="Controlled checked state. When provided, component works in controlled mode instead of using defaultValue."
                code={
                    <CodeExample
                        code={[
                            `import { Checkbox } from "@bodynarf/react.components";`,
                            "",
                            `// checked: true`,
                            `<Checkbox`,
                            `    checked`,
                            `    label={{ caption: "Checked" }}`,
                            `/>`,
                            "",
                            `// checked: false`,
                            `<Checkbox`,
                            `    checked={false}`,
                            `    label={{ caption: "Unchecked" }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "1rem" }}>
                    <CheckboxComponent checked label={{ caption: "Checked" }} />
                    <CheckboxComponent checked={false} label={{ caption: "Unchecked" }} />
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="indeterminate"
                description={`Displays a dash instead of a checkmark. Useful for "select all" partial selection scenarios.`}
                code={
                    <CodeExample
                        code={[
                            `import { Checkbox } from "@bodynarf/react.components";`,
                            "",
                            `<Checkbox`,
                            `    indeterminate`,
                            `    label={{ caption: "Indeterminate" }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <CheckboxComponent
                    indeterminate
                    label={{ caption: "Indeterminate" }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="defaultValue"
                description="Sets the initial checked state of the component. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import { Checkbox } from "@bodynarf/react.components";`,
                            "",
                            `<Checkbox`,
                            `    defaultValue`,
                            `    label={{ caption: "Checkbox demo" }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <CheckboxComponent
                    defaultValue
                    label={{ caption: "Checkbox demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="rounded"
                description="Applies border-radius to the component. Disabled by default."
                code={
                    <CodeExample
                        code={[
                            `import { Checkbox } from "@bodynarf/react.components";`,
                            "",
                            `<Checkbox`,
                            `    rounded`,
                            `    label={{ caption: "Checkbox demo" }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <CheckboxComponent
                    rounded
                    label={{ caption: "Checkbox demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="disabled"
                description="Renders a non-interactive disabled checkbox. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import { Checkbox } from "@bodynarf/react.components";`,
                            "",
                            `<Checkbox`,
                            `    disabled`,
                            `    label={{ caption: "Checkbox demo" }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <CheckboxComponent
                    disabled
                    label={{ caption: "Checkbox demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentSizeCase
                captionIsCode
                caption="size"
                description="Controls the visual size of the component. Supports all ElementSize values."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { Checkbox, ElementSize } from "@bodynarf/react.components";`,
                            "",
                            `<Checkbox`,
                            `    size={ElementSize.${id}}`,
                            `    label={{ caption: "Checkbox demo" }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
                componentProvider={size =>
                    <CheckboxComponent
                        size={size}
                        label={{ caption: "Checkbox demo", horizontal: true }}
                    />
                }
            />

            <ComponentColorCase
                captionIsCode
                caption="style"
                description="Color applied to the checkbox border and check indicator. Supports all ElementColor values."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { Checkbox, ElementColor } from "@bodynarf/react.components";`,
                            "",
                            `<Checkbox`,
                            `    style={ElementColor.${id}}`,
                            `    label={{ caption: "Checkbox demo" }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
                componentProvider={style =>
                    <CheckboxComponent
                        style={style}
                        label={{ caption: "Checkbox demo", horizontal: true }}
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
                            `import { Checkbox } from "@bodynarf/react.components";`,
                            "",
                            `<Checkbox`,
                            `    name="agreement"`,
                            `    label={{ caption: "Checkbox demo" }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <CheckboxComponent
                    name="agreement"
                    label={{ caption: "Checkbox demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onValueChange"
                description="Called when the checkbox value changes. Receives the new boolean value."
                code={
                    <CodeExample
                        code={[
                            `import { Checkbox } from "@bodynarf/react.components";`,
                            "",
                            `<Checkbox`,
                            `    label={{ caption: "Checkbox demo" }}`,
                            `    onValueChange={value => console.log("value:", value)}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <CheckboxComponent
                    label={{ caption: "Checkbox demo", horizontal: false }}
                    onValueChange={value => onValueChangeLogRef.current?.append(`value: ${value}`)}
                />
                <Log ref={onValueChangeLogRef} />
            </ComponentUseCase>
        </section>
    );
};

export default Checkbox;
