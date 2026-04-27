import { FC, useRef } from "react";

import Icon from "@bodynarf/react.components/components/icon";
import PasswordComponent from "@bodynarf/react.components/components/primitives/password";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";
import Log, { LogRef } from "@app/sharedComponents/log";

/** Password component demo */
const Password: FC = () => {
    const onValueChangeLogRef = useRef<LogRef>(null);
    const onKeyDownLogRef = useRef<LogRef>(null);
    const onKeyUpLogRef = useRef<LogRef>(null);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Password"
                version="1.4"
                description="Component for entering sensitive data (e.g., password)"
            />

            <ComponentUseCase
                caption="Minimal use"
                description="The component can be rendered without any props."
                code={
                    <CodeExample
                        code={[
                            `import Password from "@bodynarf/react.components/components/primitives/password";`,
                            "",
                            "<Password />",
                        ].join("\n")}
                    />
                }
            >
                <PasswordComponent />
            </ComponentUseCase>

            <hr />
            <div><h4 className="subtitle is-4 has-text-weight-semibold">Custom component props</h4></div>

            <ComponentUseCase
                captionIsCode
                caption="canShowPassword"
                description="Displays a toggle icon that reveals or hides the password on click. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import Password from "@bodynarf/react.components/components/primitives/password";`,
                            "",
                            `<Password`,
                            `    canShowPassword`,
                            `    label={{ caption: "Password demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <PasswordComponent
                    canShowPassword
                    label={{ caption: "Password demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="showPasswordIconTitle"
                description='Tooltip text for the show-password icon. Only used when canShowPassword is enabled. Defaults to &quot;Show password&quot;.'
                code={
                    <CodeExample
                        code={[
                            `import Password from "@bodynarf/react.components/components/primitives/password";`,
                            "",
                            `<Password`,
                            `    canShowPassword`,
                            `    showPasswordIconTitle="sHoW pAsSwOrD"`,
                            `    label={{ caption: "Password demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <PasswordComponent
                    canShowPassword
                    showPasswordIconTitle="sHoW pAsSwOrD"
                    label={{ caption: "Password demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="label"
                description="Optional label configuration rendered next to the input."
                code={
                    <CodeExample
                        code={[
                            `import Password from "@bodynarf/react.components/components/primitives/password";`,
                            "",
                            `<Password`,
                            `    label={{ caption: "Password demo", horizontal: false }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <PasswordComponent label={{ caption: "Password demo", horizontal: false }} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="defaultValue"
                description="Sets the initial password value. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import Password from "@bodynarf/react.components/components/primitives/password";`,
                            "",
                            `<Password`,
                            `    defaultValue="pwd"`,
                            `    label={{ caption: "Password demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <PasswordComponent
                    defaultValue="pwd"
                    label={{ caption: "Password demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="placeholder"
                description="Placeholder text shown when the input is empty. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import Password from "@bodynarf/react.components/components/primitives/password";`,
                            "",
                            `<Password`,
                            `    placeholder="Enter your password"`,
                            `    label={{ caption: "Password demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <PasswordComponent
                    placeholder="Enter your password"
                    label={{ caption: "Password demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="rounded"
                description="Applies border-radius to the component. Disabled by default."
                code={
                    <CodeExample
                        code={[
                            `import Password from "@bodynarf/react.components/components/primitives/password";`,
                            "",
                            `<Password`,
                            `    rounded`,
                            `    label={{ caption: "Password demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <PasswordComponent
                    rounded
                    label={{ caption: "Password demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="disabled"
                description="Renders a non-interactive disabled input. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import Password from "@bodynarf/react.components/components/primitives/password";`,
                            "",
                            `<Password`,
                            `    disabled`,
                            `    label={{ caption: "Password demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <PasswordComponent
                    disabled
                    label={{ caption: "Password demo", horizontal: true }}
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
                            `import Password from "@bodynarf/react.components/components/primitives/password";`,
                            "",
                            `<Password`,
                            `    size={ElementSize.${id}}`,
                            `    label={{ caption: "Password demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
                componentProvider={size =>
                    <PasswordComponent
                        size={size}
                        label={{ caption: "Password demo", horizontal: true }}
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
                            `import Password from "@bodynarf/react.components/components/primitives/password";`,
                            "",
                            `<Password`,
                            `    loading`,
                            `    label={{ caption: "Password demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <PasswordComponent
                    loading
                    label={{ caption: "Password demo", horizontal: true }}
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
                            `import Password from "@bodynarf/react.components/components/primitives/password";`,
                            "",
                            `<Password`,
                            `    style={ElementColor.${id}}`,
                            `    label={{ caption: "Password demo", horizontal: false }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
                componentProvider={style =>
                    <PasswordComponent
                        style={style}
                        label={{ caption: "Password demo", horizontal: false }}
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
                            `import Password from "@bodynarf/react.components/components/primitives/password";`,
                            "",
                            `<Password`,
                            `    name="key"`,
                            `    label={{ caption: "Password demo", horizontal: false }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <PasswordComponent
                    name="key"
                    label={{ caption: "Password demo", horizontal: false }}
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
                            `import Password from "@bodynarf/react.components/components/primitives/password";`,
                            "",
                            `<Password`,
                            `    autoFocus`,
                            `    label={{ caption: "Password demo", horizontal: false }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <PasswordComponent
                    autoFocus
                    label={{ caption: "Password demo", horizontal: false }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onValueChange"
                description="Called when the input value changes. Receives the new string value."
                code={
                    <CodeExample
                        code={[
                            `import Password from "@bodynarf/react.components/components/primitives/password";`,
                            "",
                            `<Password`,
                            `    onValueChange={value => console.log("value:", value)}`,
                            `    label={{ caption: "Password demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <PasswordComponent
                    label={{ caption: "Password demo", horizontal: true }}
                    onValueChange={value => onValueChangeLogRef.current?.append(`value: ${value}`)}
                />
                <Log ref={onValueChangeLogRef} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onKeyDown"
                description="Called when a key is pressed while the input is focused."
                code={
                    <CodeExample
                        code={[
                            `import Password from "@bodynarf/react.components/components/primitives/password";`,
                            "",
                            `<Password`,
                            `    onKeyDown={e => console.log("keyDown:", e.key)}`,
                            `    label={{ caption: "Password demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <PasswordComponent
                    label={{ caption: "Password demo", horizontal: true }}
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
                            `import Password from "@bodynarf/react.components/components/primitives/password";`,
                            "",
                            `<Password`,
                            `    onKeyUp={e => console.log("keyUp:", e.key)}`,
                            `    label={{ caption: "Password demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <PasswordComponent
                    label={{ caption: "Password demo", horizontal: true }}
                    onKeyUp={e => onKeyUpLogRef.current?.append(`keyUp: ${e.key}`)}
                />
                <Log ref={onKeyUpLogRef} />
            </ComponentUseCase>
        </section>
    );
};

export default Password;
