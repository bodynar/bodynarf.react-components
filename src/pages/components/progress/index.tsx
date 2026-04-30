import { FC, useCallback, useState } from "react";

import ProgressComponent from "@bodynarf/react.components/components/progress";

import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import CodeExample from "@app/sharedComponents/codeExample";

/** Progress component demo */
const Progress: FC = () => {
    const [value, setValue] = useState(40);

    const increment = useCallback(() => setValue(v => Math.min(v + 10, 100)), []);
    const decrement = useCallback(() => setValue(v => Math.max(v - 10, 0)), []);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Progress"
                version="1.14"
                baseTypeName="BaseElementProps"
                description="A progress bar component for displaying completion status"
            />

            <ComponentUseCase
                caption="Minimal use"
                description="To use the component, you only need to provide the value prop"
                code={
                    <CodeExample
                        code={[
                            `import Progress from "@bodynarf/react.components/components/progress";`,
                            "",
                            "<Progress value={40} />",
                        ].join("\n")}
                    />
                }
            >
                <ProgressComponent value={40} />
            </ComponentUseCase>

            <ComponentUseCase
                caption="Interactive value"
                description="Change the progress value dynamically"
                code={
                    <CodeExample
                        code={[
                            `import { useState } from "react";`,
                            "",
                            `import Progress from "@bodynarf/react.components/components/progress";`,
                            "",
                            "const [value, setValue] = useState(40);",
                            "",
                            "<Progress value={value} />",
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <ProgressComponent value={value} />
                    <div className="buttons are-small mt-2">
                        <button
                            type="button"
                            className="button is-danger"
                            onClick={decrement}
                        >
                            -10
                        </button>
                        <button
                            type="button"
                            className="button is-success"
                            onClick={increment}
                        >
                            +10
                        </button>
                    </div>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="showValue"
                description="Show or hide the percentage text"
                code={
                    <CodeExample
                        code={[
                            `import Progress from "@bodynarf/react.components/components/progress";`,
                            "",
                            "<Progress",
                            "    value={60}",
                            "    showValue={false}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <ProgressComponent
                    value={60}
                    showValue={false}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="indeterminate"
                description="Show an indeterminate loading state when the progress value is unknown"
                code={
                    <CodeExample
                        code={[
                            `import Progress from "@bodynarf/react.components/components/progress";`,
                            "",
                            "<Progress",
                            "    indeterminate",
                            `    loadingText="Loading..."`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <ProgressComponent
                    indeterminate
                    loadingText="Loading..."
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="animated"
                description="Disable or enable the progress bar animation"
                code={
                    <CodeExample
                        code={[
                            `import Progress from "@bodynarf/react.components/components/progress";`,
                            "",
                            "<Progress",
                            "    value={50}",
                            "    animated={false}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <ProgressComponent
                    value={50}
                    animated={false}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="min / max"
                description="Set custom min and max values for the progress bar"
                code={
                    <CodeExample
                        code={[
                            `import Progress from "@bodynarf/react.components/components/progress";`,
                            "",
                            "<Progress",
                            "    min={50}",
                            "    max={200}",
                            "    value={75}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <ProgressComponent
                    value={75}
                    min={50}
                    max={200}
                />
            </ComponentUseCase>

            <ComponentColorCase
                captionIsCode
                caption="color"
                description="The component supports all colors defined in ElementColor"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementColor } from "@bodynarf/react.components";`,
                            `import Progress from "@bodynarf/react.components/components/progress";`,
                            "",
                            "<Progress",
                            "    value={60}",
                            `    color={ElementColor.${id}}`,
                            "/>",
                        ].join("\n")}
                    />
                }
                componentProvider={color =>
                    <ProgressComponent
                        value={60}
                        color={color}
                    />
                }
            />

            <ComponentSizeCase
                captionIsCode
                caption="size"
                description="The component supports all sizes defined in ElementSize"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementSize } from "@bodynarf/react.components";`,
                            `import Progress from "@bodynarf/react.components/components/progress";`,
                            "",
                            "<Progress",
                            "    value={60}",
                            `    size={ElementSize.${id}}`,
                            "/>",
                        ].join("\n")}
                    />
                }
                componentProvider={size =>
                    <ProgressComponent
                        value={60}
                        size={size}
                    />
                }
            />
        </section>
    );
};

export default Progress;
