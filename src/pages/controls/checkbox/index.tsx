import { FC, useCallback, useState } from "react";

import { emptyFn } from "@bodynarf/utils";

import { ElementColor } from "@bodynarf/react.components";
import CheckboxComponent from "@bodynarf/react.components/components/primitives/checkbox";
import Icon from "@bodynarf/react.components/components/icon";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";

/** Checkbox component demo */
const Checkbox: FC = () => {
    const [onValueChangeLog, setOnValueChangeLog] = useState("");
    const appendOnValueChangeLog = useCallback(
        (value?: boolean) => setOnValueChangeLog(
            t => t
                + "\n"
                + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getMilliseconds()
                + " => " + `new value: ${value}`
        ),
        []
    );

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Checkbox"
                baseTypeName="BaseInputElementProps"
                description={
                    <>
                        Checkbox - an input component for type
                        {` `}
                        <code>
                            boolean
                        </code>
                        { }
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
                                '/* Project root, main.tsx file */',
                                `import "bulma-checkradio/dist/css/bulma-checkradio.min.css";`,
                            ].join("\n")}
                        />
                    </div>
                </div>
            </div>

            <ComponentUseCase
                caption="Minimal use"
                description="Minimal configuration: onValueChange event handler"
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import CheckboxComponent from "@bodynarf/react.components/components/primitives/checkbox";`,
                            "",
                            "/* ... */",
                            "",
                            `<CheckboxComponent`,
                            "    onValueChange={emptyFn} // TODO: Replace with your own handler function",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <CheckboxComponent
                    onValueChange={emptyFn}
                />
            </ComponentUseCase>

            <ComponentUseCase
                caption="Minimal use with label"
                description="Minimal configuration: onValueChange event handler and optional label"
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import CheckboxComponent from "@bodynarf/react.components/components/primitives/checkbox";`,
                            "",
                            "/* ... */",
                            "",
                            `<CheckboxComponent`,
                            "    onValueChange={emptyFn} // TODO: Replace with your own handler function",
                            `    label={{ caption: "Checkbox demo" }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <CheckboxComponent
                    onValueChange={emptyFn}
                    label={{ caption: "Checkbox demo", horizontal: false }}
                />
            </ComponentUseCase>

            <hr />

            <div className="block">
                <h4 className="subtitle is-4">
                    Custom component props
                </h4>
            </div>

            <div className="block">
                <p>
                    For better readability in examples the
                    {` `}
                    <code>
                        label
                    </code>
                    {` `}
                    prop is included. However, it is not required.
                </p>
            </div>

            <ComponentUseCase
                captionIsCode
                caption="block"
                description="Option to stretch the component container. Disabled by default"
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import CheckboxComponent from "@bodynarf/react.components/components/primitives/checkbox";`,
                            "",
                            "/* ... */",
                            "",
                            `<CheckboxComponent`,
                            `    block`,
                            "    onValueChange={emptyFn} // TODO: Replace with your own handler function",
                            `    label={{ caption: "Checkbox demo" }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <CheckboxComponent
                    block
                    onValueChange={emptyFn}
                    label={{ caption: "Checkbox demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="withoutBorder"
                description="Option to render the component without a border. Disabled by default"
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import CheckboxComponent from "@bodynarf/react.components/components/primitives/checkbox";`,
                            "",
                            "/* ... */",
                            "",
                            `<CheckboxComponent`,
                            `    withoutBorder`,
                            "    onValueChange={emptyFn} // TODO: Replace with your own handler function",
                            `    label={{ caption: "Checkbox demo" }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <CheckboxComponent
                    withoutBorder
                    onValueChange={emptyFn}
                    label={{ caption: "Checkbox demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="hasBackgroundColor"
                description="Option to render the component with background fill. Disabled by default"
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import { ElementColor } from "@bodynarf/react.components";`,
                            `import CheckboxComponent from "@bodynarf/react.components/components/primitives/checkbox";`,
                            "",
                            "/* ... */",
                            "",
                            `<CheckboxComponent`,
                            `    hasBackgroundColor`,
                            "    onValueChange={emptyFn} // TODO: Replace with your own handler function",
                            `    style={ElementColor.Primary}`,
                            `    label={{ caption: "Checkbox demo" }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <CheckboxComponent
                    hasBackgroundColor
                    onValueChange={emptyFn}
                    style={ElementColor.Primary}
                    label={{ caption: "Checkbox demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="fixBackgroundColor"
                description="Option to apply background fill only when checked. Disabled by default"
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import { ElementColor } from "@bodynarf/react.components";`,
                            `import CheckboxComponent from "@bodynarf/react.components/components/primitives/checkbox";`,
                            "",
                            "/* ... */",
                            "",
                            `<CheckboxComponent`,
                            `    fixBackgroundColor`,
                            `    hasBackgroundColor`,
                            "    onValueChange={emptyFn} // TODO: Replace with your own handler function",
                            `    style={ElementColor.Primary}`,
                            `    label={{ caption: "Checkbox demo" }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <CheckboxComponent
                    fixBackgroundColor
                    hasBackgroundColor
                    onValueChange={emptyFn}
                    style={ElementColor.Primary}
                    label={{ caption: "Checkbox demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="isFormLabel"
                description="Option to render label in a form element style. Disabled by default"
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import CheckboxComponent from "@bodynarf/react.components/components/primitives/checkbox";`,
                            "",
                            "/* ... */",
                            "",
                            `<CheckboxComponent`,
                            `    isFormLabel`,
                            "    onValueChange={emptyFn} // TODO: Replace with your own handler function",
                            '    label={{ caption: "is Form Label", horizontal: false, }}',
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <CheckboxComponent
                    isFormLabel
                    onValueChange={emptyFn}
                    label={{ caption: "is Form Label", horizontal: false, }}
                />
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
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import CheckboxComponent from "@bodynarf/react.components/components/primitives/checkbox";`,
                            "",
                            "/* ... */",
                            "",
                            `<CheckboxComponent`,
                            `    defaultValue={true}`,
                            "    onValueChange={emptyFn} // TODO: Replace with your own handler function",
                            `    label={{ caption: "Checkbox demo" }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <CheckboxComponent
                    defaultValue
                    onValueChange={emptyFn}
                    label={{ caption: "Checkbox demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="rounded"
                description="Option to apply border-radius to the component. Disabled by default."
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import CheckboxComponent from "@bodynarf/react.components/components/primitives/checkbox";`,
                            "",
                            "/* ... */",
                            "",
                            `<CheckboxComponent`,
                            `    rounded`,
                            "    onValueChange={emptyFn} // TODO: Replace with your own handler function",
                            `    label={{ caption: "Checkbox demo" }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <CheckboxComponent
                    rounded
                    onValueChange={emptyFn}
                    label={{ caption: "Checkbox demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="disabled"
                description="Option to render a disabled component. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import CheckboxComponent from "@bodynarf/react.components/components/primitives/checkbox";`,
                            "",
                            "/* ... */",
                            "",
                            `<CheckboxComponent`,
                            `    disabled`,
                            "    onValueChange={emptyFn} // TODO: Replace with your own handler function",
                            `    label={{ caption: "Checkbox demo" }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <CheckboxComponent
                    disabled
                    onValueChange={emptyFn}
                    label={{ caption: "Checkbox demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentSizeCase
                caption="Sizes"
                description="The component supports all sizes defined in the ElementSize type"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import { ElementSize } from "@bodynarf/react.components";`,
                            `import CheckboxComponent from "@bodynarf/react.components/components/primitives/checkbox";`,
                            "",
                            "/* ... */",
                            "",
                            `<CheckboxComponent`,
                            `    size={ElementSize.${id}}`,
                            "    onValueChange={emptyFn} // TODO: Replace with your own handler function",
                            `    label={{ caption: "Checkbox demo" }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
                componentProvider={
                    size =>
                        <CheckboxComponent
                            size={size}
                            onValueChange={emptyFn}
                            label={{ caption: "Checkbox demo", horizontal: true }}
                        />
                }
            />

            <ComponentColorCase
                caption="Colors"
                description="Component supports all available colors"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import { ElementColor } from "@bodynarf/react.components";`,
                            `import CheckboxComponent from "@bodynarf/react.components/components/primitives/checkbox";`,
                            "",
                            "/* ... */",
                            "",
                            `<CheckboxComponent`,
                            `    style={ElementColor.${id}}`,
                            "    onValueChange={emptyFn} // TODO: Replace with your own handler function",
                            `    label={{ caption: "Checkbox demo" }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
                componentProvider={
                    style =>
                        <CheckboxComponent
                            style={style}
                            onValueChange={emptyFn}
                            label={{ caption: "Checkbox demo", horizontal: true }}
                        />
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="name"
                description="Option to specify the component name. Used as the form element attribute"
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import CheckboxComponent from "@bodynarf/react.components/components/primitives/checkbox";`,
                            "",
                            "/* ... */",
                            "",
                            '<CheckboxComponent',
                            '    name="agreement"',
                            '    onValueChange={emptyFn} // TODO: Replace with your own handler function',
                            `    label={{ caption: "Checkbox demo" }}`,
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <CheckboxComponent
                    name="agreement"
                    onValueChange={emptyFn}
                    label={{ caption: "Checkbox demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onValueChange"
                description="Option for handling the onValueChange event. Not set by default"
                code={
                    <CodeExample
                        code={[
                            `import { useCallback } from "react"`,
                            "",
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import CheckboxComponent from "@bodynarf/react.components/components/primitives/checkbox";`,
                            "",
                            "/* ... */",
                            "const ON_VALUE_CHANGE_HANDLE_FN = useCallback((value?: boolean) => { /* handler fn */}, []);",
                            "/* ... */",
                            "",
                            `<CheckboxComponent`,
                            `    label={{ caption: "Checkbox demo" }}`,
                            "    onValueChange={ON_VALUE_CHANGE_HANDLE_FN}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <CheckboxComponent
                    onValueChange={appendOnValueChangeLog}
                    label={{ caption: "Checkbox demo", horizontal: false }}
                />
                <p style={{ whiteSpace: "pre-line" }}>
                    {onValueChangeLog}
                </p>
            </ComponentUseCase>
        </section>
    );
};

export default Checkbox;
