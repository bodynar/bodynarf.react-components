import { FC, useCallback, useState } from "react";

import { ElementColor, ElementSize, Slider as SliderComponent } from "@bodynarf/react.components";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";

/** Slider component demo */
const Slider: FC = () => {
    // Event log for onValueChange demo
    const [onValueChangeLog, setOnValueChangeLog] = useState("");
    const appendOnValueChangeLog = useCallback(
        (value?: number) => setOnValueChangeLog(
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
                name="Slider"
                description={
                    <>
                        Slider - a range/slider component for selecting numeric values with Bulma styling.
                        <br />
                        Supports various customizations including progress display, vertical mode, and value tooltips.
                    </>
                }
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Minimal configuration: just the component without any props"
                code={
                    <CodeExample
                        code={[
                            `import { Slider } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            "<Slider />",
                        ].join("\n")}
                    />
                }
            >
                <SliderComponent />
            </ComponentUseCase>

            <hr />

            <div className="block">
                <h4 className="subtitle is-4">
                    Custom component props
                </h4>
            </div>

            <ComponentUseCase
                captionIsCode
                caption="min, max"
                description="Set the minimum and maximum values for the slider. Default is 0-100."
                code={
                    <CodeExample
                        code={[
                            `import { Slider } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `<Slider`,
                            `    min={0}`,
                            `    max={50}`,
                            `    defaultValue={25}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <SliderComponent
                    min={0}
                    max={50}
                    defaultValue={25}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="step"
                description="Set the step increment for the slider value"
                code={
                    <CodeExample
                        code={[
                            `import { Slider } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `<Slider`,
                            `    min={0}`,
                            `    max={100}`,
                            `    step={10}`,
                            `    defaultValue={30}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <SliderComponent
                    min={0}
                    max={100}
                    step={10}
                    defaultValue={30}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="defaultValue"
                description="Set the initial value of the slider"
                code={
                    <CodeExample
                        code={[
                            `import { Slider } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `<Slider`,
                            `    defaultValue={75}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <SliderComponent
                    defaultValue={75}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onValueChange"
                description="Handler for the value change event. Called when the slider value changes."
                code={
                    <CodeExample
                        code={[
                            `import { useCallback } from "react";`,
                            "",
                            `import { Slider } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            `const handleValueChange = useCallback((newValue?: number) => {`,
                            `    console.log("New value:", newValue);`,
                            `}, []);`,
                            "/* ... */",
                            "",
                            `<Slider`,
                            `    onValueChange={handleValueChange}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <SliderComponent
                    onValueChange={appendOnValueChangeLog}
                />
                <p style={{ whiteSpace: "pre-line" }}>
                    {onValueChangeLog}
                </p>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="showValue"
                description="Show a tooltip with the current value when dragging"
                code={
                    <CodeExample
                        code={[
                            `import { Slider } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `<Slider`,
                            `    showValue`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <SliderComponent
                    showValue
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="showMinMax"
                description="Display min and max value labels on the sides of the slider"
                code={
                    <CodeExample
                        code={[
                            `import { Slider } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `<Slider`,
                            `    showMinMax`,
                            `    min={0}`,
                            `    max={100}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <SliderComponent
                    showMinMax
                    min={0}
                    max={100}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="showProgress"
                description="Show filled track to indicate progress from minimum to current value"
                code={
                    <CodeExample
                        code={[
                            `import { Slider } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `<Slider`,
                            `    showProgress`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <SliderComponent
                    showProgress
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="circle"
                description="Use a circular thumb style instead of the default"
                code={
                    <CodeExample
                        code={[
                            `import { Slider } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `<Slider`,
                            `    circle`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <SliderComponent
                    circle
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="vertical"
                description="Render the slider in vertical orientation. Height can be customized."
                code={
                    <CodeExample
                        code={[
                            `import { Slider } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `<div style={{ height: "200px" }}>`,
                            `    <Slider`,
                            `        vertical`,
                            `    />`,
                            `</div>`,
                        ].join("\n")}
                    />
                }
            >
                <div style={{ height: "200px" }}>
                    <SliderComponent
                        vertical
                    />
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                caption="Combined options"
                description="Multiple options can be combined for a fully featured slider"
                code={
                    <CodeExample
                        code={[
                            `import { Slider, ElementColor } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `<Slider`,
                            `    min={0}`,
                            `    max={100}`,
                            `    step={5}`,
                            `    defaultValue={50}`,
                            `    showValue`,
                            `    showMinMax`,
                            `    showProgress`,
                            `    circle`,
                            `    style={ElementColor.Primary}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <SliderComponent
                    min={0}
                    max={100}
                    step={5}
                    defaultValue={50}
                    showValue
                    showMinMax
                    showProgress
                    circle
                    style={ElementColor.Primary}
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
                            `import { ElementSize, Slider } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            '<Slider',
                            `    size={ElementSize.${id}}`,
                            '/>',
                        ].join("\n")}
                    />
                }
                componentProvider={(size: ElementSize) =>
                    <SliderComponent
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
                            `import { ElementColor, Slider } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            '<Slider',
                            `    style={ElementColor.${id}}`,
                            '/>',
                        ].join("\n")}
                    />
                }
                componentProvider={(color: ElementColor) =>
                    <SliderComponent
                        style={color}
                    />
                }
            />
        </section>
    );
};

export default Slider;
