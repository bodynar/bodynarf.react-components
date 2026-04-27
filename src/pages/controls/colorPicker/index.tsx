import { FC, useRef } from "react";

import { Color } from "@bodynarf/utils";

import ColorComponent from "@bodynarf/react.components/components/primitives/color";
import { ElementPosition, ElementFloatPosition } from "@bodynarf/react.components";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";
import Log, { LogRef } from "@app/sharedComponents/log";

/** Color picker component demo */
const ColorPicker: FC = () => {
    const onValueChangeLogRef = useRef<LogRef>(null);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Color picker"
                version="1.7"
                description="Control for selecting a color from the RGB palette"
            />

            <ComponentUseCase
                caption="Minimal use"
                description="The component can be rendered without any props."
                code={
                    <CodeExample
                        code={[
                            `import Color from "@bodynarf/react.components/components/primitives/color";`,
                            "",
                            "<Color />",
                        ].join("\n")}
                    />
                }
            >
                <ColorComponent />
            </ComponentUseCase>

            <hr />
            <div><h4 className="subtitle is-4 has-text-weight-semibold">Custom component props</h4></div>

            <ComponentUseCase
                captionIsCode
                caption="preview"
                description="When provided, renders a color preview button next to the picker at the specified position."
                code={
                    <CodeExample
                        code={[
                            `import { ElementPosition, ElementFloatPosition } from "@bodynarf/react.components";`,
                            `import Color from "@bodynarf/react.components/components/primitives/color";`,
                            "",
                            `// preview on the right`,
                            `<Color`,
                            `    preview={{ position: ElementPosition.Right as ElementFloatPosition }}`,
                            `/>`,
                            "",
                            `// preview on the left`,
                            `<Color`,
                            `    preview={{ position: ElementPosition.Left as ElementFloatPosition }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex is-flex-direction-column" style={{ gap: "0.75rem" }}>
                    <div>
                        <p className="mb-1 has-text-grey">position: Right</p>
                        <ColorComponent preview={{ position: ElementPosition.Right as ElementFloatPosition }} />
                    </div>
                    <div>
                        <p className="mb-1 has-text-grey">position: Left</p>
                        <ColorComponent preview={{ position: ElementPosition.Left as ElementFloatPosition }} />
                    </div>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="label"
                description="Optional label configuration rendered next to the picker."
                code={
                    <CodeExample
                        code={[
                            `import Color from "@bodynarf/react.components/components/primitives/color";`,
                            "",
                            `<Color`,
                            `    label={{ caption: "Color picker", horizontal: false }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <ColorComponent label={{ caption: "Color picker", horizontal: false }} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="defaultValue"
                description="Sets the initial selected color. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import Color from "@bodynarf/react.components/components/primitives/color";`,
                            "",
                            `<Color`,
                            `    defaultValue={{ red: 75, green: 100, blue: 155 }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <ColorComponent defaultValue={{ red: 75, green: 100, blue: 155 }} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="rounded"
                description="Applies border-radius to the component. Disabled by default."
                code={
                    <CodeExample
                        code={[
                            `import Color from "@bodynarf/react.components/components/primitives/color";`,
                            "",
                            `<Color rounded />`,
                        ].join("\n")}
                    />
                }
            >
                <ColorComponent rounded />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="disabled"
                description="Renders a non-interactive disabled picker. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import Color from "@bodynarf/react.components/components/primitives/color";`,
                            "",
                            `<Color disabled />`,
                        ].join("\n")}
                    />
                }
            >
                <ColorComponent disabled />
            </ComponentUseCase>

            <ComponentSizeCase
                captionIsCode
                caption="size"
                description="Controls the visual size of the component. Supports all ElementSize values."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementSize } from "@bodynarf/react.components";`,
                            `import Color from "@bodynarf/react.components/components/primitives/color";`,
                            "",
                            `<Color size={ElementSize.${id}} />`,
                        ].join("\n")}
                    />
                }
                componentProvider={size =>
                    <ColorComponent size={size} />
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="name"
                description="Specifies the HTML name attribute for use as a form element."
                code={
                    <CodeExample
                        code={[
                            `import Color from "@bodynarf/react.components/components/primitives/color";`,
                            "",
                            `<Color name="personalColor" />`,
                        ].join("\n")}
                    />
                }
            >
                <ColorComponent name="personalColor" />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onValueChange"
                description="Called when the selected color changes. Receives the new Color value."
                code={
                    <CodeExample
                        code={[
                            `import Color from "@bodynarf/react.components/components/primitives/color";`,
                            "",
                            `<Color`,
                            `    onValueChange={value => console.log("value:", JSON.stringify(value))}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <ColorComponent
                    onValueChange={(value: Color) => onValueChangeLogRef.current?.append(`value: ${JSON.stringify(value)}`)}
                />
                <Log ref={onValueChangeLogRef} />
            </ComponentUseCase>
        </section>
    );
};

export default ColorPicker;
