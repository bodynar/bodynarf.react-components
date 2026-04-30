import { FC, useRef } from "react";

import SliderComponent from "@bodynarf/react.components/components/primitives/slider";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";
import Log, { LogRef } from "@app/sharedComponents/log";

/** Slider component demo */
const Slider: FC = () => {
    const onValueChangeLogRef = useRef<LogRef>(null);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Slider"
                version="1.14"
                description="Range slider component for selecting numeric values."
            />

            <ComponentUseCase
                caption="Minimal use"
                description="The component can be rendered without any props."
                code={
                    <CodeExample
                        code={[
                            `import Slider from "@bodynarf/react.components/components/primitives/slider";`,
                            "",
                            "<Slider />",
                        ].join("\n")}
                    />
                }
            >
                <SliderComponent />
            </ComponentUseCase>

            <hr />
            <div><h4 className="subtitle is-4 has-text-weight-semibold">Custom component props</h4></div>

            <ComponentUseCase
                captionIsCode
                caption="min"
                description="Minimum value of the slider. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import Slider from "@bodynarf/react.components/components/primitives/slider";`,
                            "",
                            `<Slider`,
                            `    min={20}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <SliderComponent min={20} defaultValue={20} showMinMax />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="max"
                description="Maximum value of the slider. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import Slider from "@bodynarf/react.components/components/primitives/slider";`,
                            "",
                            `<Slider`,
                            `    max={50}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <SliderComponent max={50} showMinMax />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="step"
                description="Step increment between selectable values. Defaults to 1."
                code={
                    <CodeExample
                        code={[
                            `import Slider from "@bodynarf/react.components/components/primitives/slider";`,
                            "",
                            `<Slider`,
                            `    step={10}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <SliderComponent step={10} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="defaultValue"
                description="Initial value of the slider. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import Slider from "@bodynarf/react.components/components/primitives/slider";`,
                            "",
                            `<Slider`,
                            `    defaultValue={75}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <SliderComponent defaultValue={75} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="showValue"
                description="Displays the current value as a tooltip above the slider thumb. Defaults to false."
                code={
                    <CodeExample
                        code={[
                            `import Slider from "@bodynarf/react.components/components/primitives/slider";`,
                            "",
                            `<Slider`,
                            `    showValue`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <SliderComponent showValue />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="valuePosition"
                description='Position of the value tooltip in horizontal mode. Defaults to "top".'
                code={
                    <CodeExample
                        code={[
                            `import Slider from "@bodynarf/react.components/components/primitives/slider";`,
                            "",
                            `<Slider`,
                            `    showValue`,
                            `    valuePosition="bottom"`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <SliderComponent showValue valuePosition="bottom" />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="showMinMax"
                description="Displays min and max value labels below the slider. Defaults to false."
                code={
                    <CodeExample
                        code={[
                            `import Slider from "@bodynarf/react.components/components/primitives/slider";`,
                            "",
                            `<Slider`,
                            `    min={0}`,
                            `    max={100}`,
                            `    showMinMax`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <SliderComponent showMinMax min={0} max={100} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="showProgress"
                description="Fills the track from start to the current value. Defaults to true."
                code={
                    <CodeExample
                        code={[
                            `import Slider from "@bodynarf/react.components/components/primitives/slider";`,
                            "",
                            `<Slider`,
                            `    showProgress={false}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <SliderComponent showProgress={false} defaultValue={50} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="circle"
                description="Applies a circular/rounded style to the slider thumb. Defaults to false."
                code={
                    <CodeExample
                        code={[
                            `import Slider from "@bodynarf/react.components/components/primitives/slider";`,
                            "",
                            `<Slider`,
                            `    circle`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <SliderComponent circle />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="vertical"
                description="Renders the slider in vertical orientation. Defaults to false."
                code={
                    <CodeExample
                        code={[
                            `import Slider from "@bodynarf/react.components/components/primitives/slider";`,
                            "",
                            `<Slider`,
                            `    vertical`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <SliderComponent vertical />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="verticalHeight"
                description='Height of the slider in vertical mode. Any CSS unit is accepted. Defaults to "200px".'
                code={
                    <CodeExample
                        code={[
                            `import Slider from "@bodynarf/react.components/components/primitives/slider";`,
                            "",
                            `<Slider`,
                            `    vertical`,
                            `    verticalHeight="300px"`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <SliderComponent vertical verticalHeight="300px" />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="valueFormatter"
                description="Formats the displayed value when showValue is enabled."
                code={
                    <CodeExample
                        code={[
                            `import Slider from "@bodynarf/react.components/components/primitives/slider";`,
                            "",
                            `<Slider`,
                            `    showValue`,
                            `    valueFormatter={value => \`\${value}%\`}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <SliderComponent showValue valueFormatter={value => `${value}%`} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="name"
                description="Specifies the HTML name attribute for use as a form element."
                code={
                    <CodeExample
                        code={[
                            `import Slider from "@bodynarf/react.components/components/primitives/slider";`,
                            "",
                            `<Slider`,
                            `    name="volume"`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <SliderComponent name="volume" />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="disabled"
                description="Renders the slider as non-interactive. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import Slider from "@bodynarf/react.components/components/primitives/slider";`,
                            "",
                            `<Slider`,
                            `    disabled`,
                            `    defaultValue={40}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <SliderComponent disabled defaultValue={40} />
            </ComponentUseCase>

            <ComponentSizeCase
                captionIsCode
                caption="size"
                description="Controls the visual size of the component. Supports all ElementSize values."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementSize } from "@bodynarf/react.components";`,
                            `import Slider from "@bodynarf/react.components/components/primitives/slider";`,
                            "",
                            `<Slider`,
                            `    size={ElementSize.${id}}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
                componentProvider={size =>
                    <SliderComponent size={size} />
                }
            />

            <ComponentColorCase
                captionIsCode
                caption="style"
                description="Color applied to the slider track and thumb. Supports all ElementColor values."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementColor } from "@bodynarf/react.components";`,
                            `import Slider from "@bodynarf/react.components/components/primitives/slider";`,
                            "",
                            `<Slider`,
                            `    style={ElementColor.${id}}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
                componentProvider={style =>
                    <SliderComponent style={style} />
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="onValueChange"
                description="Called when the slider value changes. Receives the new numeric value."
                code={
                    <CodeExample
                        code={[
                            `import Slider from "@bodynarf/react.components/components/primitives/slider";`,
                            "",
                            `<Slider`,
                            `    onValueChange={value => console.log("value:", value)}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <SliderComponent
                    onValueChange={value => onValueChangeLogRef.current?.append(`value: ${value}`)}
                />
                <Log ref={onValueChangeLogRef} />
            </ComponentUseCase>
        </section>
    );
};

export default Slider;
