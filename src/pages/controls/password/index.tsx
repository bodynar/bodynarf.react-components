import { FC, useCallback, useState } from "react";

import { emptyFn } from "@bodynarf/utils";
import Icon from "@bodynarf/react.components/components/icon";
import PasswordComponent from "@bodynarf/react.components/components/primitives/password";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";

/** Password component demo */
const Password: FC = () => {
    const [onValueChangeLog, setOnValueChangeLog] = useState("");
    const appendOnValueChangeLog = useCallback(
        (value?: string) => setOnValueChangeLog(
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
                name="Password"
                description="Component for entering sensitive data (e.g., password)"
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
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import PasswordComponent from "@bodynarf/react.components/components/primitives/password";`,
                            "",
                            "/* ... */",
                            "",
                            `<PasswordComponent />`,
                        ].join("\n")}
                    />
                }
            >
                <PasswordComponent
                    onValueChange={emptyFn} // todo: remove this after lib update
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
                caption="canShowPassword"
                description="Option to display the password visibility icon. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import PasswordComponent from "@bodynarf/react.components/components/primitives/password";`,
                            "",
                            "/* ... */",
                            "",
                            `<PasswordComponent`,
                            "    canShowPassword",
                            "    onValueChange={emptyFn} // TODO: Replace with your own handler function",
                            `    label={{ caption: "Password demo", horizontal: true }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <PasswordComponent
                    canShowPassword
                    onValueChange={emptyFn}
                    label={{ caption: "Password demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="showPasswordIconTitle"
                description="Option to configure the tooltip text when hovering over the password visibility icon. Works only when canShowPassword is enabled. Default is 'Show password'"
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import PasswordComponent from "@bodynarf/react.components/components/primitives/password";`,
                            "",
                            "/* ... */",
                            "",
                            `<PasswordComponent`,
                            "    canShowPassword",
                            '    showPasswordIconTitle="sHoW pAsSwOrD"',
                            "    onValueChange={emptyFn} // TODO: Replace with your own handler function",
                            `    label={{ caption: "Password demo", horizontal: true }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <PasswordComponent
                    canShowPassword
                    showPasswordIconTitle="sHoW pAsSwOrD"
                    onValueChange={emptyFn}
                    label={{ caption: "Password demo", horizontal: true }}
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
                            `import PasswordComponent from "@bodynarf/react.components/components/primitives/password";`,
                            "",
                            "/* ... */",
                            "",
                            `<PasswordComponent`,
                            '    defaultValue="pwd"',
                            "    onValueChange={emptyFn} // TODO: Replace with your own handler function",
                            `    label={{ caption: "Password demo", horizontal: true }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <PasswordComponent
                    defaultValue="pwd"
                    onValueChange={emptyFn}
                    label={{ caption: "Password demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="placeholder"
                description="Option to specify the component's placeholder. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import PasswordComponent from "@bodynarf/react.components/components/primitives/password";`,
                            "",
                            "/* ... */",
                            "",
                            `<PasswordComponent`,
                            '    placeholder="Password demo control"',
                            "    onValueChange={emptyFn} // TODO: Replace with your own handler function",
                            `    label={{ caption: "Password demo", horizontal: true }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <PasswordComponent
                    placeholder="Password demo control"
                    onValueChange={emptyFn}
                    label={{ caption: "Password demo", horizontal: true }}
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
                            `import PasswordComponent from "@bodynarf/react.components/components/primitives/password";`,
                            "",
                            "/* ... */",
                            "",
                            `<PasswordComponent`,
                            `    rounded`,
                            "    onValueChange={emptyFn} // TODO: Replace with your own handler function",
                            `    label={{ caption: "Password demo", horizontal: true }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <PasswordComponent
                    rounded
                    onValueChange={emptyFn}
                    label={{ caption: "Password demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="disabled"
                description="Option to render the component as disabled. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import PasswordComponent from "@bodynarf/react.components/components/primitives/password";`,
                            "",
                            "/* ... */",
                            "",
                            `<PasswordComponent`,
                            `    disabled`,
                            "    onValueChange={emptyFn} // TODO: Replace with your own handler function",
                            `    label={{ caption: "Password demo", horizontal: true }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <PasswordComponent
                    disabled
                    onValueChange={emptyFn}
                    label={{ caption: "Password demo", horizontal: true }}
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
                            `import PasswordComponent from "@bodynarf/react.components/components/primitives/password";`,
                            "",
                            "/* ... */",
                            "",
                            `<PasswordComponent`,
                            `    size={ElementSize.${id}}`,
                            "    onValueChange={emptyFn} // TODO: Replace with your own handler function",
                            `    label={{ caption: "Password demo", horizontal: true }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
                componentProvider={
                    size =>
                        <PasswordComponent
                            size={size}
                            onValueChange={emptyFn}
                            label={{ caption: "Password demo", horizontal: true }}
                        />
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="label"
                description="Option to specify the component label. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import PasswordComponent from "@bodynarf/react.components/components/primitives/password";`,
                            "",
                            "/* ... */",
                            "",
                            `<PasswordComponent`,
                            "    onValueChange={emptyFn} // TODO: Replace with your own handler function",
                            `    label={{ caption: "Password demo", horizontal: false }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <PasswordComponent
                    loading
                    onValueChange={emptyFn}
                    label={{ caption: "Password demo", horizontal: false }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="loading"
                description="Option to render the component in a loading state. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import PasswordComponent from "@bodynarf/react.components/components/primitives/password";`,
                            "",
                            "/* ... */",
                            "",
                            `<PasswordComponent`,
                            `    loading`,
                            "    onValueChange={emptyFn} // TODO: Replace with your own handler function",
                            `    label={{ caption: "Password demo", horizontal: true }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <PasswordComponent
                    loading
                    onValueChange={emptyFn}
                    label={{ caption: "Password demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentColorCase
                caption="Colors"
                description="Component supports all available colors"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import { ElementColor } from "@bodynarf/react.components";`,
                            `import PasswordComponent from "@bodynarf/react.components/components/primitives/password";`,
                            "",
                            "/* ... */",
                            "",
                            `<PasswordComponent`,
                            `    style={ElementColor.${id}}`,
                            "    onValueChange={emptyFn} // TODO: Replace with your own handler function",
                            `    label={{ caption: "Password demo", horizontal: false }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
                componentProvider={
                    style =>
                        <PasswordComponent
                            style={style}
                            onValueChange={emptyFn}
                            label={{ caption: "Password demo", horizontal: false }}
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
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import PasswordComponent from "@bodynarf/react.components/components/primitives/password";`,
                            "",
                            "/* ... */",
                            "",
                            '<PasswordComponent',
                            '    name="key"',
                            '    onValueChange={emptyFn} // TODO: Replace with your own handler function',
                            '    label={{ caption: "Password demo", horizontal: false }}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <PasswordComponent
                    name="key"
                    onValueChange={emptyFn}
                    label={{ caption: "Password demo", horizontal: false }}
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
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import PasswordComponent from "@bodynarf/react.components/components/primitives/password";`,
                            "",
                            "/* ... */",
                            "",
                            '<PasswordComponent',
                            '    autoFocus',
                            '    onValueChange={emptyFn} // TODO: Replace with your own handler function',
                            '    label={{ caption: "Password demo", horizontal: false }}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <PasswordComponent
                    autoFocus
                    onValueChange={emptyFn}
                    label={{ caption: "Password demo", horizontal: false }}
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
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import PasswordComponent from "@bodynarf/react.components/components/primitives/password";`,
                            "",
                            "/* ... */",
                            "const ON_VALUE_CHANGE_HANDLE_FN = useCallback((value: string) => { /* handler fn */}, []);",
                            "/* ... */",
                            "",
                            `<PasswordComponent`,
                            "    onValueChange={ON_VALUE_CHANGE_HANDLE_FN}",
                            `    label={{ caption: "Password demo", horizontal: true }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <PasswordComponent
                    onValueChange={appendOnValueChangeLog}
                    label={{ caption: "Password demo", horizontal: true }}
                />
                <p style={{ whiteSpace: "pre-line" }}>
                    {onValueChangeLog}
                </p>
            </ComponentUseCase>
        </section>
    );
};

export default Password;
