import { FC, useState } from "react";

import SpinnerComponent from "@bodynarf/react.components/components/spinner";
import { ElementColor } from "@bodynarf/react.components";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";

const allColors: Array<{ value: Exclude<ElementColor, ElementColor.Default>; label: string }> = [
    { value: ElementColor.Primary, label: "Primary" },
    { value: ElementColor.Link, label: "Link" },
    { value: ElementColor.Info, label: "Info" },
    { value: ElementColor.Success, label: "Success" },
    { value: ElementColor.Warning, label: "Warning" },
    { value: ElementColor.Danger, label: "Danger" },
];

/** Spinner component demo */
const Spinner: FC = () => {
    const [showOverlay, setShowOverlay] = useState(false);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Spinner"
                version="1.15"
                baseTypeName="BaseElementProps"
                description="A loading indicator for async operations and pending states."
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Default spinner with no required props."
                code={
                    <CodeExample
                        code={[
                            `import Spinner from "@bodynarf/react.components/components/spinner";`,
                            "",
                            "<Spinner />",
                        ].join("\n")}
                    />
                }
            >
                <SpinnerComponent />
            </ComponentUseCase>

            <hr />

            <div className="block">
                <h4 className="subtitle is-4">
                    Custom component props
                </h4>
            </div>

            <ComponentSizeCase
                captionIsCode
                caption="size"
                description="Spinner supports all ElementSize values"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementSize } from "@bodynarf/react.components";`,
                            `import Spinner from "@bodynarf/react.components/components/spinner";`,
                            "",
                            `<Spinner size={ElementSize.${id}} />`,
                        ].join("\n")}
                    />
                }
                componentProvider={size =>
                    <SpinnerComponent size={size} />
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="color"
                description="Spinner supports all available color variants"
                code={
                    <CodeExample
                        code={[
                            `import { ElementColor } from "@bodynarf/react.components";`,
                            `import Spinner from "@bodynarf/react.components/components/spinner";`,
                            "",
                            `<Spinner color={ElementColor.Success} />`,
                        ].join("\n")}
                    />
                }
            >
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "24px",
                    }}
                >
                    {allColors.map(({ value, label }) => (
                        <div
                            key={value}
                            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}
                        >
                            <SpinnerComponent color={value} />
                            <span className="is-size-7 has-text-grey">{label}</span>
                        </div>
                    ))}
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="overlay"
                description="When overlay is true, the spinner fills its nearest position:relative ancestor. Click the button to toggle."
                code={
                    <CodeExample
                        code={[
                            `import Spinner from "@bodynarf/react.components/components/spinner";`,
                            "",
                            `<div style={{ position: "relative", height: "80px" }}>`,
                            "    <Spinner overlay />",
                            "    <p>Content behind the overlay</p>",
                            "</div>",
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <button
                        type="button"
                        className="button is-small mb-2"
                        onClick={() => setShowOverlay(v => !v)}
                    >
                        {showOverlay ? "Hide overlay" : "Show overlay"}
                    </button>
                    <div style={{ position: "relative", height: "80px", background: "#f5f5f5", borderRadius: "4px" }}>
                        {showOverlay === true && <SpinnerComponent overlay />}
                        <p className="p-4">Content behind the overlay spinner</p>
                    </div>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="loadingLabel"
                description="Accessible label for screen readers. Defaults to 'Loading...'."
                code={
                    <CodeExample
                        code={[
                            `import Spinner from "@bodynarf/react.components/components/spinner";`,
                            "",
                            `<Spinner loadingLabel="Fetching data..." />`,
                        ].join("\n")}
                    />
                }
            >
                <SpinnerComponent loadingLabel="Fetching data..." />
            </ComponentUseCase>
        </section>
    );
};

export default Spinner;
