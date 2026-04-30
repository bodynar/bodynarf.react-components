import { FC, useRef, useState } from "react";

import ToastComponent from "@bodynarf/react.components/components/toast";
import { ElementColor, ElementPosition, ElementFloatPosition } from "@bodynarf/react.components";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";
import Log, { LogRef } from "@app/sharedComponents/log";

/** Toast component demo */
const Toast: FC = () => {
    const onCloseLogRef = useRef<LogRef>(null);
    const [autoCloseVisible, setAutoCloseVisible] = useState(false);
    const [fixedVisible, setFixedVisible] = useState(false);
    const [positionVisible, setPositionVisible] = useState(false);
    const [positionValue, setPositionValue] = useState<ElementFloatPosition>(ElementPosition.Right);
    const [onCloseVisible, setOnCloseVisible] = useState(true);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Toast"
                version="1.15"
                baseTypeName="BaseElementProps"
                description="Inline or fixed-position notification banner. Supports auto-close and color variants. Use fixed + position for viewport-anchored toasts."
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Render an inline toast with default styling."
                code={
                    <CodeExample
                        code={[
                            `import Toast from "@bodynarf/react.components/components/toast";`,
                            "",
                            "<Toast>Operation completed successfully.</Toast>",
                        ].join("\n")}
                    />
                }
            >
                <ToastComponent>Operation completed successfully.</ToastComponent>
            </ComponentUseCase>

            <ComponentColorCase
                captionIsCode
                caption="color"
                description="Toast supports all available color variants"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementColor } from "@bodynarf/react.components";`,
                            `import Toast from "@bodynarf/react.components/components/toast";`,
                            "",
                            `<Toast color={ElementColor.${id}}>`,
                            "    Toast message.",
                            "</Toast>",
                        ].join("\n")}
                    />
                }
                componentProvider={color =>
                    <ToastComponent color={color}>
                        Toast with <strong>{color}</strong> color.
                    </ToastComponent>
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="closable"
                description="Show or hide the close (×) button. Defaults to true. Set to false to render a non-dismissible banner."
                code={
                    <CodeExample
                        code={[
                            `import Toast from "@bodynarf/react.components/components/toast";`,
                            "",
                            `<Toast closable={false}>`,
                            "    This toast cannot be closed by the user.",
                            "</Toast>",
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "12px", flexDirection: "column" }}>
                    <ToastComponent color={ElementColor.Info}>
                        closable (default — button is visible)
                    </ToastComponent>
                    <ToastComponent color={ElementColor.Info} closable={false}>
                        closable=false — no close button
                    </ToastComponent>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onClose"
                description="Called when the user clicks the close button. Use it to hide the toast by controlling its visibility in state."
                code={
                    <CodeExample
                        code={[
                            `import { useState } from "react";`,
                            "",
                            `import { ElementColor } from "@bodynarf/react.components";`,
                            `import Toast from "@bodynarf/react.components/components/toast";`,
                            "",
                            "const [visible, setVisible] = useState(true);",
                            "",
                            "{visible && (",
                            "    <Toast",
                            `        color={ElementColor.Warning}`,
                            "        onClose={() => setVisible(false)}",
                            "    >",
                            "        Click × to close.",
                            "    </Toast>",
                            ")}",
                        ].join("\n")}
                    />
                }
            >
                <div>
                    {!onCloseVisible && (
                        <button
                            type="button"
                            className="button is-small mb-2"
                            onClick={() => setOnCloseVisible(true)}
                        >
                            Reset
                        </button>
                    )}
                    {onCloseVisible
                        ? (
                            <ToastComponent
                                color={ElementColor.Warning}
                                onClose={() => {
                                    setOnCloseVisible(false);
                                    onCloseLogRef.current?.append("onClose called");
                                }}
                            >
                                Click × to close.
                            </ToastComponent>
                        )
                        : null
                    }
                    <Log ref={onCloseLogRef} />
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="fixed"
                description="Renders the toast in a fixed-position overlay anchored to the viewport corner instead of inline in the document flow."
                code={
                    <CodeExample
                        code={[
                            `import { ElementColor } from "@bodynarf/react.components";`,
                            `import Toast from "@bodynarf/react.components/components/toast";`,
                            "",
                            "{isVisible && (",
                            "    <Toast",
                            "        fixed",
                            "        color={ElementColor.Success}",
                            "        onClose={() => setIsVisible(false)}",
                            "    >",
                            "        Fixed toast",
                            "    </Toast>",
                            ")}",
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <button
                        type="button"
                        className="button is-small"
                        onClick={() => setFixedVisible(v => !v)}
                    >
                        {fixedVisible ? "Hide fixed toast" : "Show fixed toast"}
                    </button>
                    {fixedVisible
                        ? (
                            <ToastComponent
                                fixed
                                color={ElementColor.Success}
                                position={ElementPosition.Right}
                                onClose={() => setFixedVisible(false)}
                            >
                                Fixed toast — top-right corner
                            </ToastComponent>
                        )
                        : null
                    }
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="position"
                description="Horizontal position of the fixed toast on screen. Supports Left and Right (default). Applied only when fixed is true."
                code={
                    <CodeExample
                        code={[
                            `import { ElementColor, ElementPosition } from "@bodynarf/react.components";`,
                            `import Toast from "@bodynarf/react.components/components/toast";`,
                            "",
                            `<Toast`,
                            `    fixed`,
                            `    onClose={...}`,
                            `    color={ElementColor.Info}`,
                            `    position={ElementPosition.Left}`,
                            `>`,
                            "    Left-side toast",
                            "</Toast>",
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
                    <div className="is-flex" style={{ gap: "8px" }}>
                        {([ElementPosition.Left, ElementPosition.Right] as ElementFloatPosition[]).map(pos => (
                            <label key={pos} className="radio" style={{ cursor: "pointer" }}>
                                <input
                                    type="radio"
                                    name="toast-position"
                                    className="mr-1"
                                    checked={positionValue === pos}
                                    onChange={() => setPositionValue(pos)}
                                />
                                {pos}
                            </label>
                        ))}
                    </div>
                    <button
                        type="button"
                        className="button is-small"
                        onClick={() => setPositionVisible(true)}
                        disabled={positionVisible}
                    >
                        Show toast
                    </button>
                    {positionVisible
                        ? (
                            <ToastComponent
                                fixed
                                color={ElementColor.Info}
                                position={positionValue}
                                onClose={() => setPositionVisible(false)}
                            >
                                position={positionValue}
                            </ToastComponent>
                        )
                        : null
                    }
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="autoClose"
                description="Auto-close delay in milliseconds. When set, calls onClose automatically after the specified duration. The parent must control visibility."
                code={
                    <CodeExample
                        code={[
                            `import { ElementColor } from "@bodynarf/react.components";`,
                            `import Toast from "@bodynarf/react.components/components/toast";`,
                            "",
                            `<Toast`,
                            `    autoClose={3000}`,
                            `    color={ElementColor.Info}`,
                            `    onClose={() => setVisible(false)}`,
                            `>`,
                            "    This toast auto-closes in 3 seconds.",
                            "</Toast>",
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <button
                        type="button"
                        className="button is-small mb-2"
                        onClick={() => setAutoCloseVisible(true)}
                        disabled={autoCloseVisible}
                    >
                        Show auto-close toast (3 s)
                    </button>
                    {autoCloseVisible
                        ? (
                            <ToastComponent
                                color={ElementColor.Info}
                                autoClose={3000}
                                onClose={() => setAutoCloseVisible(false)}
                            >
                                This toast will auto-close in 3 seconds.
                            </ToastComponent>
                        )
                        : null
                    }
                </div>
            </ComponentUseCase>
        </section>
    );
};

export default Toast;
