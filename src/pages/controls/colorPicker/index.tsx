import { FC, useCallback, useState } from "react";

import { Color } from "@bodynarf/utils";

import { ElementPosition } from "@bodynarf/react.components";
import ColorComponent from "@bodynarf/react.components/components/primitives/color";

import ComponentUseCase from "@app/sharedComponents/useCase";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";

/** Color component demo */
const Color: FC = () => {
    const [onValueChangeLog, setOnValueChangeLog] = useState("");
    const appendOnValueChangeLog = useCallback(
        (value?: Color) => setOnValueChangeLog(
            t => t
                + "\n"
                + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getMilliseconds()
                + " => " + `new value: ${JSON.stringify(value)}`
        ),
        []
    );

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Color picker"
                description="Control for selecting a color from the RGB palette"
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Minimal configuration is absent, the component can be used 'empty'"
                code={
                    <CodeExample
                        code={[
                            `import ColorComponent from "@bodynarf/react.components/components/primitives/color";`,
                            "",
                            "/* ... */",
                            "",
                            "<ColorComponent />",
                        ].join("\n")}
                    />
                }
            >
                <ColorComponent />
            </ComponentUseCase>

            <hr />

            <div className="block">
                <h4 className="subtitle is-4">
                    Custom component props
                </h4>
            </div>

            <ComponentUseCase
                captionIsCode
                caption="preview"
                description="Option to display a preview button block with the selected color. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import { ElementPosition } from "@bodynarf/react.components";`,
                            `import ColorComponent from "@bodynarf/react.components/components/primitives/color";`,
                            "",
                            "/* ... */",
                            "",
                            `<ColorComponent`,
                            "    preview={{ position: ElementPosition.Right }}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <ColorComponent
                    preview={{ position: ElementPosition.Right }}
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
                            `import ColorComponent from "@bodynarf/react.components/components/primitives/color";`,
                            "",
                            "/* ... */",
                            "",
                            `<ColorComponent`,
                            `    defaultValue={{ blue: 155, green: 100, red: 75 }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <ColorComponent
                    defaultValue={{ blue: 155, green: 100, red: 75 }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="rounded"
                description="Option to apply border-radius to the component. Disabled by default."
                code={
                    <CodeExample
                        code={[
                            `import ColorComponent from "@bodynarf/react.components/components/primitives/color";`,
                            "",
                            "/* ... */",
                            "",
                            `<ColorComponent`,
                            `    rounded`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <ColorComponent
                    rounded
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="disabled"
                description="Option to render the component as disabled. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import ColorComponent from "@bodynarf/react.components/components/primitives/color";`,
                            "",
                            "/* ... */",
                            "",
                            `<ColorComponent`,
                            `    disabled`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <ColorComponent
                    disabled
                />
            </ComponentUseCase>

            <ComponentSizeCase
                caption="Sizes"
                description="The component supports all sizes defined in the ElementSize type"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementSize } from "@bodynarf/react.components";`,
                            `import ColorComponent from "@bodynarf/react.components/components/primitives/color";`,
                            "",
                            "/* ... */",
                            "",
                            `<ColorComponent`,
                            `    size={ElementSize.${id}}`,
                            "/>",
                        ].join("\n")}
                    />
                }
                componentProvider={
                    size =>
                        <ColorComponent
                            size={size}
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
                            `import ColorComponent from "@bodynarf/react.components/components/primitives/color";`,
                            "",
                            "/* ... */",
                            "",
                            '<ColorComponent',
                            '    label={{ caption: "Color picker", horizontal: false }}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <ColorComponent
                    label={{ caption: "Color picker", horizontal: false }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="name"
                description="Option to specify the component name. Used as a form element attribute."
                code={
                    <CodeExample
                        code={[
                            `import ColorComponent from "@bodynarf/react.components/components/primitives/color";`,
                            "",
                            "/* ... */",
                            "",
                            '<ColorComponent',
                            '    name="personalColor"',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <ColorComponent
                    name="personalColor"
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
                            `import ColorComponent from "@bodynarf/react.components/components/primitives/color";`,
                            "",
                            "/* ... */",
                            "const ON_VALUE_CHANGE_HANDLE_FN = useCallback((value: Color) => { /* handler fn */}, []);",
                            "/* ... */",
                            "",
                            `<ColorComponent`,
                            "    onValueChange={ON_VALUE_CHANGE_HANDLE_FN}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <ColorComponent
                    onValueChange={appendOnValueChangeLog}
                />
                <p style={{ whiteSpace: "pre-line" }}>
                    {onValueChangeLog}
                </p>
            </ComponentUseCase>
        </section>
    );
};

export default Color;
