import { FC, useCallback, useState } from "react";

import { ElementColor, ElementSize, Switch as SwitchComponent } from "@bodynarf/react.components";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";

/** Switch component demo */
const Switch: FC = () => {
    // Event log for onValueChange demo
    const [onValueChangeLog, setOnValueChangeLog] = useState("");
    const appendOnValueChangeLog = useCallback(
        (value: boolean) => setOnValueChangeLog(
            t => t
                + "\n"
                + new Date().toLocaleTimeString()
                + " => " + `new value: ${value}`
        ),
        []
    );

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Switch"
                description={
                    <>
                        Switch - a toggle/switch component for boolean values with Bulma styling.
                        <br />
                        Supports various styles including rounded, outlined, and thin variants.
                    </>
                }
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Minimal configuration: component with a label"
                code={
                    <CodeExample
                        code={[
                            `import { Switch } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `<Switch`,
                            `    label={{ caption: "Toggle switch" }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <SwitchComponent
                    label={{ caption: "Toggle switch" }}
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
                caption="defaultValue"
                description="Option to set the initial checked state of the switch"
                code={
                    <CodeExample
                        code={[
                            `import { Switch } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `<Switch`,
                            `    label={{ caption: "Default checked" }}`,
                            `    defaultValue`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <SwitchComponent
                    label={{ caption: "Default checked" }}
                    defaultValue
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onValueChange"
                description="Handler for the value change event. Called when the switch state changes."
                code={
                    <CodeExample
                        code={[
                            `import { useCallback } from "react";`,
                            "",
                            `import { Switch } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            `const handleChange = useCallback((newValue: boolean) => {`,
                            `    console.log("Changed to:", newValue);`,
                            `}, []);`,
                            "/* ... */",
                            "",
                            `<Switch`,
                            `    label={{ caption: "Track changes" }}`,
                            `    onValueChange={handleChange}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <SwitchComponent
                    label={{ caption: "Track changes" }}
                    onValueChange={appendOnValueChangeLog}
                />
                <p style={{ whiteSpace: "pre-line" }}>
                    {onValueChangeLog}
                </p>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="rounded"
                description="Adds rounded/pill shape to the switch"
                code={
                    <CodeExample
                        code={[
                            `import { Switch } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `<Switch`,
                            `    label={{ caption: "Rounded switch" }}`,
                            `    rounded`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <SwitchComponent
                    label={{ caption: "Rounded switch" }}
                    rounded
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="outlined"
                description="Renders the switch with outlined style"
                code={
                    <CodeExample
                        code={[
                            `import { Switch } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `<Switch`,
                            `    label={{ caption: "Outlined switch" }}`,
                            `    outlined`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <SwitchComponent
                    label={{ caption: "Outlined switch" }}
                    outlined
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="thin"
                description="Renders the switch with a thinner track"
                code={
                    <CodeExample
                        code={[
                            `import { Switch } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `<Switch`,
                            `    label={{ caption: "Thin switch" }}`,
                            `    thin`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <SwitchComponent
                    label={{ caption: "Thin switch" }}
                    thin
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="rtl"
                description="Right-to-left mode - positions the switch on the right side of the label"
                code={
                    <CodeExample
                        code={[
                            `import { Switch } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `<Switch`,
                            `    label={{ caption: "RTL switch" }}`,
                            `    rtl`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <SwitchComponent
                    label={{ caption: "RTL switch" }}
                    rtl
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="isFormLabel"
                description="Renders the switch in form label mode with horizontal layout"
                code={
                    <CodeExample
                        code={[
                            `import { Switch } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `<Switch`,
                            `    label={{ caption: "Form label mode" }}`,
                            `    isFormLabel`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <SwitchComponent
                    label={{ caption: "Form label mode" }}
                    isFormLabel
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="disabled"
                description="Disables the switch input"
                code={
                    <CodeExample
                        code={[
                            `import { Switch } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `<Switch`,
                            `    label={{ caption: "Disabled switch" }}`,
                            `    disabled`,
                            `    defaultValue`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <SwitchComponent
                    label={{ caption: "Disabled switch" }}
                    disabled
                    defaultValue
                />
            </ComponentUseCase>

            <ComponentUseCase
                caption="Combined styles"
                description="Multiple style options can be combined for custom appearance"
                code={
                    <CodeExample
                        code={[
                            `import { Switch, ElementColor } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `<Switch`,
                            `    label={{ caption: "Rounded outlined switch" }}`,
                            `    rounded`,
                            `    outlined`,
                            `    style={ElementColor.Success}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <SwitchComponent
                    label={{ caption: "Rounded outlined switch" }}
                    rounded
                    outlined
                    style={ElementColor.Success}
                />
            </ComponentUseCase>

            <hr />

            <div className="block">
                <h4 className="subtitle is-4">
                    Size and color variations
                </h4>
            </div>

            <ComponentSizeCase
                captionIsCode
                caption="size"
                description="The component supports all sizes defined in the ElementSize type"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { Switch, ElementSize } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            "<Switch",
                            `    label={{ caption: "Size demo" }}`,
                            `    size={ElementSize.${id}}`,
                            "/>",
                        ].join("\n")}
                    />
                }
                componentProvider={(size: ElementSize) =>
                    <SwitchComponent
                        label={{ caption: "Size demo" }}
                        size={size}
                    />
                }
            />

            <ComponentColorCase
                captionIsCode
                caption="style"
                description="The component supports all colors defined in the ElementColor type"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { Switch, ElementColor } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            "<Switch",
                            `    label={{ caption: "Color demo" }}`,
                            `    style={ElementColor.${id}}`,
                            "/>",
                        ].join("\n")}
                    />
                }
                componentProvider={(color: ElementColor) =>
                    <SwitchComponent
                        label={{ caption: "Color demo" }}
                        style={color}
                        defaultValue
                    />
                }
            />
        </section>
    );
};

export default Switch;
