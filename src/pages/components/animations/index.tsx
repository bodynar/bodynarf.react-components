import { FC, useState } from "react";

import "@bodynarf/react.components/animations.css";

import ComponentUseCase from "@app/sharedComponents/useCase";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";

/** animations.scss demo page */
const Animations: FC = () => {
    const [oneTimeKey, setOneTimeKey] = useState(0);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="animations.scss"
                version="1.15"
                description="Standalone global animation stylesheet. Import once at the app entry point, then apply animations via className on any element."
            />

            <ComponentUseCase
                caption="Setup"
                description="Import the stylesheet once in your app entry point."
                code={
                    <CodeExample
                        code={[
                            `// main.tsx`,
                            `import "@bodynarf/react.components/animations.css";`,
                            "",
                            `// Then apply className on any element:`,
                            `<div className="bbr-pulse">Pulsing element</div>`,
                        ].join("\n")}
                    />
                }
            >
                <p className="has-text-grey">Import is already done in this demo app.</p>
            </ComponentUseCase>

            <ComponentUseCase
                caption="Infinite animations"
                description="These animations loop continuously. Use bbr-anim-paused to pause any of them."
                code={
                    <CodeExample
                        code={[
                            `<span className="bbr-pulse">bbr-pulse</span>`,
                            `<span className="bbr-spin">bbr-spin</span>`,
                            `<span className="bbr-spin-reverse">bbr-spin-reverse</span>`,
                            `<span className="bbr-bounce">bbr-bounce</span>`,
                            `<span className="bbr-heartbeat">bbr-heartbeat</span>`,
                            `<span className="bbr-float">bbr-float</span>`,
                            `<span className="bbr-wobble">bbr-wobble</span>`,
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "20px", flexWrap: "wrap", alignItems: "center" }}>
                    {(["bbr-pulse", "bbr-spin", "bbr-spin-reverse", "bbr-bounce", "bbr-heartbeat", "bbr-float", "bbr-wobble"] as const).map(cls => (
                        <div key={cls} style={{ textAlign: "center" }}>
                            <span
                                className={`icon is-medium ${cls}`}
                                style={{ display: "inline-flex" }}
                            >
                                <i className="bi bi-star-fill" style={{ fontSize: "1.5rem", color: "#3273dc" }} />
                            </span>
                            <p style={{ fontSize: "0.7rem", marginTop: "4px" }}>{cls}</p>
                        </div>
                    ))}
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                caption="One-time animations"
                description="These animations play once on mount. Re-trigger by changing the React key."
                code={
                    <CodeExample
                        code={[
                            `<span className="bbr-shake">bbr-shake</span>`,
                            `<span className="bbr-fade-in">bbr-fade-in</span>`,
                            `<span className="bbr-pop">bbr-pop</span>`,
                            `<span className="bbr-flip">bbr-flip</span>`,
                            `<span className="bbr-rubber-band">bbr-rubber-band</span>`,
                            `<span className="bbr-tada">bbr-tada</span>`,
                            `<span className="bbr-zoom-in">bbr-zoom-in</span>`,
                            `<span className="bbr-slide-in-left">bbr-slide-in-left</span>`,
                            `<span className="bbr-slide-in-right">bbr-slide-in-right</span>`,
                            `<span className="bbr-slide-in-down">bbr-slide-in-down</span>`,
                        ].join("\n")}
                    />
                }
            >
                <div className="mb-3">
                    <button
                        type="button"
                        className="button is-small is-light"
                        onClick={() => setOneTimeKey(k => k + 1)}
                    >
                        <span className="icon is-small">
                            <i className="bi bi-arrow-clockwise" />
                        </span>
                        <span>Restart animations</span>
                    </button>
                </div>
                <div key={oneTimeKey} className="is-flex" style={{ gap: "12px", flexWrap: "wrap" }}>
                    {(["bbr-shake", "bbr-fade-in", "bbr-pop", "bbr-flip", "bbr-rubber-band", "bbr-tada", "bbr-zoom-in", "bbr-slide-in-left", "bbr-slide-in-right", "bbr-slide-in-down"] as const).map(cls => (
                        <span
                            key={cls}
                            className={`tag is-info ${cls}`}
                            style={{ cursor: "default" }}
                        >
                            {cls}
                        </span>
                    ))}
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                caption="bbr-anim-paused"
                description="Add bbr-anim-paused alongside any infinite animation class to pause it."
                code={
                    <CodeExample
                        code={[
                            `<span className="bbr-spin bbr-anim-paused">Paused spin</span>`,
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "16px", alignItems: "center" }}>
                    <div style={{ textAlign: "center" }}>
                        <span className="icon is-medium bbr-spin" style={{ display: "inline-flex" }}>
                            <i className="bi bi-arrow-repeat" style={{ fontSize: "1.5rem", color: "#3273dc" }} />
                        </span>
                        <p style={{ fontSize: "0.75rem" }}>Active</p>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <span className="icon is-medium bbr-spin bbr-anim-paused" style={{ display: "inline-flex" }}>
                            <i className="bi bi-arrow-repeat" style={{ fontSize: "1.5rem", color: "#999" }} />
                        </span>
                        <p style={{ fontSize: "0.75rem" }}>Paused</p>
                    </div>
                </div>
            </ComponentUseCase>
        </section>
    );
};

export default Animations;
