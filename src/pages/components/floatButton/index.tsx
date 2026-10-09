import { CSSProperties, FC, useCallback, useRef, useState } from "react";

import FloatButtonComponent from "@bodynarf/react.components/components/floatButton";
import CheckboxComponent from "@bodynarf/react.components/components/primitives/checkbox";
import { ButtonStyle, ElementSize, FloatPosition } from "@bodynarf/react.components";

import Log, { LogRef } from "@app/sharedComponents/log";
import ComponentUseCase from "@app/sharedComponents/useCase";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";

// nudge the demo button away from the site chrome (gear / back-to-top buttons)
const playgroundStyle = {
    "--float-button-top": "5rem",
    "--float-button-bottom": "5rem",
    "--float-button-left": "18rem",
    "--float-button-right": "5rem",
} as CSSProperties;

const positions: FloatPosition[] = ["bottom-right", "bottom-left", "top-right", "top-left"];
const styles: ButtonStyle[] = [ButtonStyle.Primary, ButtonStyle.Success, ButtonStyle.Danger, ButtonStyle.Dark];
const sizes: ElementSize[] = [ElementSize.Small, ElementSize.Normal, ElementSize.Medium, ElementSize.Large];

/** FloatButton component demo */
const FloatButton: FC = () => {
    const logRef = useRef<LogRef>(null);
    const appendLog = useCallback(
        (text: string) => logRef.current?.append(text),
        []
    );

    const [position, setPosition] = useState<FloatPosition>("bottom-right");
    const [style, setStyle] = useState<ButtonStyle>(ButtonStyle.Primary);
    const [size, setSize] = useState<ElementSize>(ElementSize.Normal);
    const [hasCaption, setHasCaption] = useState(false);

    return (
        <section style={playgroundStyle}>
            <DemoComponentTitleInfoMessage
                name="FloatButton"
                version="1.16"
                baseTypeName="BaseElementProps"
                description="Floating action button pinned to a screen corner. Icon-only round button, or a pill when a caption is provided."
            />

            <p className="is-size-7 has-text-grey mb-2">
                The page renders a single live button — use the controls in the sections below to change it.
            </p>

            <ComponentUseCase
                caption="Minimal use"
                description="Only the icon is required. The button is pinned to the bottom-right corner by default."
                code={
                    <CodeExample
                        code={[
                            `import FloatButton from "@bodynarf/react.components/components/floatButton";`,
                            "",
                            "<FloatButton",
                            `    icon="plus"`,
                            "    onClick={() => console.log('clicked')}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <Log ref={logRef} />
            </ComponentUseCase>

            <hr />

            <div className="block">
                <h4 className="subtitle is-4">
                    Custom component props
                </h4>
            </div>

            <ComponentUseCase
                captionIsCode
                caption="position"
                description="Screen corner to pin the button to. Defaults to `bottom-right`."
                code={
                    <CodeExample
                        code={[
                            `import FloatButton from "@bodynarf/react.components/components/floatButton";`,
                            "",
                            "<FloatButton",
                            `    icon="plus"`,
                            `    position="top-left"`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <div className="buttons">
                    {positions.map(x =>
                        <button
                            key={x}
                            type="button"
                            className={`button is-small ${position === x ? "is-primary" : ""}`}
                            onClick={() => setPosition(x)}
                        >
                            {x}
                        </button>
                    )}
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="style"
                description="Button color. Supports all styles defined in ButtonStyle; defaults to `ButtonStyle.Primary`."
                code={
                    <CodeExample
                        code={[
                            `import { ButtonStyle } from "@bodynarf/react.components";`,
                            `import FloatButton from "@bodynarf/react.components/components/floatButton";`,
                            "",
                            "<FloatButton",
                            `    icon="chat-dots"`,
                            `    style={ButtonStyle.Success}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <div className="buttons">
                    {styles.map(x =>
                        <button
                            key={x}
                            type="button"
                            className={`button is-small ${style === x ? "is-primary" : ""}`}
                            onClick={() => setStyle(x)}
                        >
                            {x.capitalize()}
                        </button>
                    )}
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="caption"
                description="Optional caption next to the icon — expands the round button into a pill."
                code={
                    <CodeExample
                        code={[
                            `import FloatButton from "@bodynarf/react.components/components/floatButton";`,
                            "",
                            "<FloatButton",
                            `    icon="headset"`,
                            `    caption="Support"`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <CheckboxComponent
                    checked={hasCaption}
                    onValueChange={setHasCaption}
                    label={{ caption: "Show caption" }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="tooltip"
                description="Tooltip text — becomes the native button `title` attribute. Hover the live button to see it."
                code={
                    <CodeExample
                        code={[
                            `import FloatButton from "@bodynarf/react.components/components/floatButton";`,
                            "",
                            "<FloatButton",
                            `    icon="plus"`,
                            `    tooltip="Create new item"`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <p className="is-size-7 has-text-grey">
                    Already applied to the live button.
                </p>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="size"
                description="The component supports all sizes defined in ElementSize. A caption expands any size into a pill."
                code={
                    <CodeExample
                        code={[
                            `import { ElementSize } from "@bodynarf/react.components";`,
                            `import FloatButton from "@bodynarf/react.components/components/floatButton";`,
                            "",
                            "<FloatButton",
                            `    icon="plus"`,
                            `    size={ElementSize.Large}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <div className="buttons">
                    {sizes.map(x =>
                        <button
                            key={x}
                            type="button"
                            className={`button is-small ${size === x ? "is-primary" : ""}`}
                            onClick={() => setSize(x)}
                        >
                            {x.capitalize()}
                        </button>
                    )}
                </div>
            </ComponentUseCase>

            <FloatButtonComponent
                icon="plus"
                caption={hasCaption ? "Create" : undefined}
                tooltip="Create new item"
                position={position}
                style={style}
                size={size}
                onClick={() => appendLog("Float button clicked")}
            />
        </section>
    );
};

export default FloatButton;
