import { FC, useRef } from "react";

import { Switch as SwitchComponent } from "@bodynarf/react.components";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";
import Log, { LogRef } from "@app/sharedComponents/log";

/** Switch component demo */
const Switch: FC = () => {
    const onValueChangeLogRef = useRef<LogRef>(null);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Switch"
                version="1.14"
                description="Toggle switch component for boolean values."
            />

            <ComponentUseCase
                caption="Minimal use"
                description="The component can be rendered with just a label."
                code={
                    <CodeExample
                        code={[
                            `import { Switch } from "@bodynarf/react.components";`,
                            "",
                            `<Switch label={{ caption: "Toggle" }} />`,
                        ].join("\n")}
                    />
                }
            >
                <SwitchComponent label={{ caption: "Toggle" }} />
            </ComponentUseCase>

            <hr />
            <div><h4 className="subtitle is-4 has-text-weight-semibold">Custom component props</h4></div>

            <ComponentUseCase
                captionIsCode
                caption="label"
                description="Label configuration rendered next to the switch."
                code={
                    <CodeExample
                        code={[
                            `import { Switch } from "@bodynarf/react.components";`,
                            "",
                            `<Switch`,
                            `    label={{ caption: "My label", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <SwitchComponent label={{ caption: "My label", horizontal: true }} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="defaultValue"
                description="Sets the initial checked state. Defaults to false."
                code={
                    <CodeExample
                        code={[
                            `import { Switch } from "@bodynarf/react.components";`,
                            "",
                            `<Switch`,
                            `    label={{ caption: "Switch demo" }}`,
                            `    defaultValue`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <SwitchComponent label={{ caption: "Switch demo" }} defaultValue />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="rounded"
                description="Applies pill-shaped rounded edges to the switch. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import { Switch } from "@bodynarf/react.components";`,
                            "",
                            `<Switch`,
                            `    label={{ caption: "Switch demo" }}`,
                            `    rounded`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <SwitchComponent label={{ caption: "Switch demo" }} rounded />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="outlined"
                description="Renders the switch with an outlined style. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import { Switch } from "@bodynarf/react.components";`,
                            "",
                            `<Switch`,
                            `    label={{ caption: "Switch demo" }}`,
                            `    outlined`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <SwitchComponent label={{ caption: "Switch demo" }} outlined />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="thin"
                description="Renders the switch with a thinner track. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import { Switch } from "@bodynarf/react.components";`,
                            "",
                            `<Switch`,
                            `    label={{ caption: "Switch demo" }}`,
                            `    thin`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <SwitchComponent label={{ caption: "Switch demo" }} thin />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="rtl"
                description="Right-to-left mode â€” places the switch on the right side of the label. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import { Switch } from "@bodynarf/react.components";`,
                            "",
                            `<Switch`,
                            `    label={{ caption: "Switch demo" }}`,
                            `    rtl`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <SwitchComponent label={{ caption: "Switch demo" }} rtl />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="isFormLabel"
                description="Renders the label as a form element label positioned to the left. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import { Switch } from "@bodynarf/react.components";`,
                            "",
                            `<Switch`,
                            `    label={{ caption: "Switch demo" }}`,
                            `    isFormLabel`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <SwitchComponent label={{ caption: "Switch demo" }} isFormLabel />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="disabled"
                description="Renders a non-interactive switch. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import { Switch } from "@bodynarf/react.components";`,
                            "",
                            `<Switch`,
                            `    label={{ caption: "Switch demo" }}`,
                            `    disabled`,
                            `    defaultValue`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <SwitchComponent label={{ caption: "Switch demo" }} disabled defaultValue />
            </ComponentUseCase>

            <ComponentSizeCase
                captionIsCode
                caption="size"
                description="Controls the visual size of the component. Supports all ElementSize values."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { Switch, ElementSize } from "@bodynarf/react.components";`,
                            "",
                            `<Switch`,
                            `    label={{ caption: "Switch demo" }}`,
                            `    size={ElementSize.${id}}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
                componentProvider={size =>
                    <SwitchComponent label={{ caption: "Switch demo" }} size={size} />
                }
            />

            <ComponentColorCase
                captionIsCode
                caption="style"
                description="Color applied to the switch when checked. Supports all ElementColor values."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { Switch, ElementColor } from "@bodynarf/react.components";`,
                            "",
                            `<Switch`,
                            `    label={{ caption: "Switch demo" }}`,
                            `    style={ElementColor.${id}}`,
                            `    defaultValue`,
                            `/>`,
                        ].join("\n")}
                    />
                }
                componentProvider={style =>
                    <SwitchComponent label={{ caption: "Switch demo" }} style={style} defaultValue />
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="name"
                description="Specifies the HTML name attribute for use as a form element."
                code={
                    <CodeExample
                        code={[
                            `import { Switch } from "@bodynarf/react.components";`,
                            "",
                            `<Switch`,
                            `    label={{ caption: "Switch demo" }}`,
                            `    name="mySwitch"`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <SwitchComponent label={{ caption: "Switch demo" }} name="mySwitch" />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onValueChange"
                description="Called when the switch state changes. Receives the new boolean value."
                code={
                    <CodeExample
                        code={[
                            `import { Switch } from "@bodynarf/react.components";`,
                            "",
                            `<Switch`,
                            `    label={{ caption: "Switch demo" }}`,
                            `    onValueChange={value => console.log("value:", value)}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <SwitchComponent
                    label={{ caption: "Switch demo" }}
                    onValueChange={value => onValueChangeLogRef.current?.append(`value: ${value}`)}
                />
                <Log ref={onValueChangeLogRef} />
            </ComponentUseCase>
        </section>
    );
};

export default Switch;
