import { FC, useCallback, useRef, useState } from "react";

import CircularMeterComponent from "@bodynarf/react.components/components/circularMeter";

import Log, { LogRef } from "@app/sharedComponents/log";
import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";

/** CircularMeter component demo */
const CircularMeter: FC = () => {
    const logRef = useRef<LogRef>(null);
    const appendLog = useCallback(
        (text: string) => logRef.current?.append(text),
        []
    );

    const [battery, setBattery] = useState(72);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="CircularMeter"
                version="1.16"
                baseTypeName="BaseElementProps"
                description="SVG circular progress meter with a value template. Read-only by default; can be made interactive (drag / arrow keys)."
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Provide the current value — the meter is read-only by default and spans 0..100."
                code={
                    <CodeExample
                        code={[
                            `import CircularMeter from "@bodynarf/react.components/components/circularMeter";`,
                            "",
                            "<CircularMeter",
                            `    value={64}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <CircularMeterComponent value={64} />
            </ComponentUseCase>

            <hr />

            <div className="block">
                <h4 className="subtitle is-4">
                    Custom component props
                </h4>
            </div>

            <ComponentUseCase
                captionIsCode
                caption="min / max"
                description="Custom scale boundaries. The value is clamped into the range."
                code={
                    <CodeExample
                        code={[
                            `import CircularMeter from "@bodynarf/react.components/components/circularMeter";`,
                            "",
                            "<CircularMeter",
                            `    value={320}`,
                            `    min={0}`,
                            `    max={500}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <CircularMeterComponent value={320} min={0} max={500} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="label / valueTemplate"
                description="Caption rendered under the value and a template for the value text — `{value}` is replaced with the current value."
                code={
                    <CodeExample
                        code={[
                            `import CircularMeter from "@bodynarf/react.components/components/circularMeter";`,
                            "",
                            "<CircularMeter",
                            `    value={76}`,
                            `    label="Storage"`,
                            `    valueTemplate="{value}% of 100 GB"`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "32px", flexWrap: "wrap" }}>
                    <CircularMeterComponent value={76} label="Storage" valueTemplate="{value}%" />
                    <CircularMeterComponent value={8} label="Errors" valueTemplate="{value} / 10" />
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="trackColor / strokeWidth"
                description="CSS color of the background track and the arc thickness (in viewBox units of a 100×100 box)."
                code={
                    <CodeExample
                        code={[
                            `import CircularMeter from "@bodynarf/react.components/components/circularMeter";`,
                            "",
                            "<CircularMeter",
                            `    value={45}`,
                            `    trackColor="#e8e8e8"`,
                            `    strokeWidth={14}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "32px", flexWrap: "wrap" }}>
                    <CircularMeterComponent value={45} trackColor="#e8e8e8" strokeWidth={14} />
                    <CircularMeterComponent value={45} strokeWidth={4} />
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="readonly / step / onChange"
                description="Set `readonly={false}` to make the meter interactive: drag the arc or focus it and use the arrow keys. `step` configures the increment. With `onChange` handled and no `value` provided the meter manages its own state."
                code={
                    <CodeExample
                        code={[
                            `import { useState } from "react";`,
                            `import CircularMeter from "@bodynarf/react.components/components/circularMeter";`,
                            "",
                            `const [battery, setBattery] = useState(72);`,
                            "",
                            "<CircularMeter",
                            `    value={battery}`,
                            "    readonly={false}",
                            `    step={5}`,
                            "    onChange={setBattery}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <CircularMeterComponent
                    value={battery}
                    readonly={false}
                    step={5}
                    label="Battery"
                    valueTemplate="{value}%"
                    onChange={value => { setBattery(value); appendLog(`Battery: ${value}`); }}
                />
                <Log ref={logRef} />
            </ComponentUseCase>

            <ComponentColorCase
                captionIsCode
                caption="style"
                description="Color of the value arc."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementColor } from "@bodynarf/react.components";`,
                            `import CircularMeter from "@bodynarf/react.components/components/circularMeter";`,
                            "",
                            "<CircularMeter",
                            `    value={64}`,
                            `    style={ElementColor.${id}}`,
                            "/>",
                        ].join("\n")}
                    />
                }
                componentProvider={style =>
                    <CircularMeterComponent value={64} style={style} />
                }
            />

            <ComponentSizeCase
                captionIsCode
                caption="size"
                description="The component supports all sizes defined in ElementSize."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementSize } from "@bodynarf/react.components";`,
                            `import CircularMeter from "@bodynarf/react.components/components/circularMeter";`,
                            "",
                            "<CircularMeter",
                            `    value={64}`,
                            `    size={ElementSize.${id}}`,
                            "/>",
                        ].join("\n")}
                    />
                }
                componentProvider={size =>
                    <CircularMeterComponent value={64} size={size} />
                }
            />
        </section>
    );
};

export default CircularMeter;
