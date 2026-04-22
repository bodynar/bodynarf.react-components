import { FC, useState } from "react";

import { Tooltip as TooltipComponent, TooltipPosition, TooltipAnimation, TooltipCloseOn } from "@bodynarf/react.components";

import ComponentUseCase from "@app/sharedComponents/useCase";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";

/** Tooltip component demo */
const Tooltip: FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Tooltip"
                version="1.15"
                baseTypeName="BaseElementProps"
                description="Hover/click-triggered popup for contextual hints and help text. Compound component: Tooltip.Hint (content) + Tooltip.Target (anchor)."
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Wrap your trigger with Tooltip.Target and the hint text with Tooltip.Hint. Tooltip appears above the target on hover by default."
                code={
                    <CodeExample
                        code={[
                            `import { Tooltip } from "@bodynarf/react.components";`,
                            "",
                            "<Tooltip>",
                            "    <Tooltip.Target>",
                            "        <button className=\"button\">Hover me</button>",
                            "    </Tooltip.Target>",
                            "    <Tooltip.Hint>",
                            "        This is a helpful hint.",
                            "    </Tooltip.Hint>",
                            "</Tooltip>",
                        ].join("\n")}
                    />
                }
            >
                <TooltipComponent>
                    <TooltipComponent.Target>
                        <button type="button" className="button">Hover me</button>
                    </TooltipComponent.Target>
                    <TooltipComponent.Hint>
                        This is a helpful hint.
                    </TooltipComponent.Hint>
                </TooltipComponent>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="position"
                description="Tooltip placement relative to the trigger. Supports Top (default), Bottom, Left, Right."
                code={
                    <CodeExample
                        code={[
                            `import { Tooltip, TooltipPosition } from "@bodynarf/react.components";`,
                            "",
                            "<Tooltip position={TooltipPosition.Bottom}>",
                            "    <Tooltip.Target><button className=\"button\">Bottom</button></Tooltip.Target>",
                            "    <Tooltip.Hint>Below the trigger</Tooltip.Hint>",
                            "</Tooltip>",
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "12px", flexWrap: "wrap" }}>
                    {([
                        TooltipPosition.Top,
                        TooltipPosition.Bottom,
                        TooltipPosition.Left,
                        TooltipPosition.Right,
                    ] as const).map(pos => (
                        <TooltipComponent key={pos} position={pos}>
                            <TooltipComponent.Target>
                                <button type="button" className="button">{pos}</button>
                            </TooltipComponent.Target>
                            <TooltipComponent.Hint>Position: {pos}</TooltipComponent.Hint>
                        </TooltipComponent>
                    ))}
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="animation"
                description="Entrance / exit animation style. Supports Fade (default), Slide, None."
                code={
                    <CodeExample
                        code={[
                            `import { Tooltip, TooltipAnimation, TooltipPosition } from "@bodynarf/react.components";`,
                            "",
                            "<Tooltip animation={TooltipAnimation.Slide} position={TooltipPosition.Bottom}>",
                            "    <Tooltip.Target><button className=\"button\">Slide</button></Tooltip.Target>",
                            "    <Tooltip.Hint>Slides in from below</Tooltip.Hint>",
                            "</Tooltip>",
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "12px", flexWrap: "wrap" }}>
                    <TooltipComponent animation={TooltipAnimation.Fade} position={TooltipPosition.Bottom}>
                        <TooltipComponent.Target>
                            <button type="button" className="button">Fade</button>
                        </TooltipComponent.Target>
                        <TooltipComponent.Hint>Fade animation (default)</TooltipComponent.Hint>
                    </TooltipComponent>
                    <TooltipComponent animation={TooltipAnimation.Slide} position={TooltipPosition.Bottom}>
                        <TooltipComponent.Target>
                            <button type="button" className="button">Slide</button>
                        </TooltipComponent.Target>
                        <TooltipComponent.Hint>Slide animation</TooltipComponent.Hint>
                    </TooltipComponent>
                    <TooltipComponent animation={TooltipAnimation.None} position={TooltipPosition.Bottom}>
                        <TooltipComponent.Target>
                            <button type="button" className="button">None</button>
                        </TooltipComponent.Target>
                        <TooltipComponent.Hint>No animation</TooltipComponent.Hint>
                    </TooltipComponent>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="closeOn"
                description="How the tooltip is dismissed. MouseLeave (default) — on cursor leave; OutsideClick — on click outside the trigger; Manual — never closes automatically, requires controlled visible prop."
                code={
                    <CodeExample
                        code={[
                            `import { Tooltip, TooltipCloseOn } from "@bodynarf/react.components";`,
                            "",
                            "<Tooltip closeOn={TooltipCloseOn.OutsideClick}>",
                            "    <Tooltip.Target>",
                            "        <button className=\"button\">Click outside to close</button>",
                            "    </Tooltip.Target>",
                            "    <Tooltip.Hint>Closes on outside click</Tooltip.Hint>",
                            "</Tooltip>",
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "12px", flexWrap: "wrap" }}>
                    <TooltipComponent closeOn={TooltipCloseOn.MouseLeave} position={TooltipPosition.Bottom}>
                        <TooltipComponent.Target>
                            <button type="button" className="button">MouseLeave (default)</button>
                        </TooltipComponent.Target>
                        <TooltipComponent.Hint>Closes when cursor leaves</TooltipComponent.Hint>
                    </TooltipComponent>
                    <TooltipComponent closeOn={TooltipCloseOn.OutsideClick} position={TooltipPosition.Bottom}>
                        <TooltipComponent.Target>
                            <button type="button" className="button">OutsideClick</button>
                        </TooltipComponent.Target>
                        <TooltipComponent.Hint>Hover to open, click outside to close</TooltipComponent.Hint>
                    </TooltipComponent>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="openDelay"
                description="Delay in milliseconds before the tooltip appears after the trigger is hovered. Default is 0 (immediate)."
                code={
                    <CodeExample
                        code={[
                            `import { Tooltip } from "@bodynarf/react.components";`,
                            "",
                            "<Tooltip openDelay={800}>",
                            "    <Tooltip.Target>",
                            "        <button className=\"button\">Hover (800 ms delay)</button>",
                            "    </Tooltip.Target>",
                            "    <Tooltip.Hint>Appeared after 800 ms</Tooltip.Hint>",
                            "</Tooltip>",
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "12px", flexWrap: "wrap" }}>
                    <TooltipComponent openDelay={0} position={TooltipPosition.Bottom}>
                        <TooltipComponent.Target>
                            <button type="button" className="button">No delay (default)</button>
                        </TooltipComponent.Target>
                        <TooltipComponent.Hint>Appears immediately</TooltipComponent.Hint>
                    </TooltipComponent>
                    <TooltipComponent openDelay={800} position={TooltipPosition.Bottom}>
                        <TooltipComponent.Target>
                            <button type="button" className="button">800 ms delay</button>
                        </TooltipComponent.Target>
                        <TooltipComponent.Hint>Appeared after 800 ms</TooltipComponent.Hint>
                    </TooltipComponent>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="lifetime"
                description="Auto-hide delay in milliseconds after the tooltip becomes visible. When omitted the tooltip stays open until closeOn triggers."
                code={
                    <CodeExample
                        code={[
                            `import { Tooltip } from "@bodynarf/react.components";`,
                            "",
                            "<Tooltip lifetime={2000}>",
                            "    <Tooltip.Target>",
                            "        <button className=\"button\">Hover me</button>",
                            "    </Tooltip.Target>",
                            "    <Tooltip.Hint>Auto-hides after 2 s</Tooltip.Hint>",
                            "</Tooltip>",
                        ].join("\n")}
                    />
                }
            >
                <TooltipComponent lifetime={2000} position={TooltipPosition.Bottom}>
                    <TooltipComponent.Target>
                        <button type="button" className="button">Hover — hides after 2 s</button>
                    </TooltipComponent.Target>
                    <TooltipComponent.Hint>Auto-hides after 2 seconds</TooltipComponent.Hint>
                </TooltipComponent>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="visible"
                description="Externally controlled visibility. When provided, the component enters controlled mode and ignores mouse hover — only closeOn / lifetime can close it automatically."
                code={
                    <CodeExample
                        code={[
                            `import { Tooltip, TooltipCloseOn } from "@bodynarf/react.components";`,
                            "",
                            "const [isVisible, setIsVisible] = useState(false);",
                            "",
                            "<button onClick={() => setIsVisible(v => !v)}>Toggle</button>",
                            "<Tooltip visible={isVisible} closeOn={TooltipCloseOn.Manual}>",
                            "    <Tooltip.Target>",
                            "        <span>Target element</span>",
                            "    </Tooltip.Target>",
                            "    <Tooltip.Hint>Controlled tooltip</Tooltip.Hint>",
                            "</Tooltip>",
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "12px", alignItems: "center" }}>
                    <button
                        type="button"
                        className="button is-small"
                        onClick={() => setIsVisible(v => !v)}
                    >
                        {isVisible ? "Hide" : "Show"} tooltip
                    </button>
                    <TooltipComponent visible={isVisible} closeOn={TooltipCloseOn.Manual}>
                        <TooltipComponent.Target>
                            <span className="tag is-info">Target element</span>
                        </TooltipComponent.Target>
                        <TooltipComponent.Hint>Controlled tooltip content</TooltipComponent.Hint>
                    </TooltipComponent>
                </div>
            </ComponentUseCase>
        </section>
    );
};

export default Tooltip;
