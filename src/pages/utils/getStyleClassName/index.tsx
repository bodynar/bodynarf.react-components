import { FC, useState } from "react";

import { ElementColor } from "@bodynarf/react.components";
import { getStyleClassName } from "@bodynarf/react.components/utils";

import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import ComponentUseCase from "@app/sharedComponents/useCase";
import CodeExample from "@app/sharedComponents/codeExample";

import { Colors } from "../../../shared/enums";

/** getStyleClassName utility demo */
const GetStyleClassName: FC = () => {
    const [selectedColor, setSelectedColor] = useState<ElementColor>(ElementColor.Primary);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="getStyleClassName"
                version="1.4"
                description="Returns the Bulma CSS class name for a given ElementColor value, taking the current ValidationState into account. Validation always takes priority over the element style."
            />

            <ComponentUseCase
                caption="Color → class mapping"
                description="Each ElementColor maps to a Bulma is-* class. The Default color returns an empty string."
                code={
                    <CodeExample
                        code={[
                            `import { ElementColor } from "@bodynarf/react.components";`,
                            `import { getStyleClassName } from "@bodynarf/react.components/utils";`,
                            "",
                            `getStyleClassName(ElementColor.Primary)  // "is-primary"`,
                            `getStyleClassName(ElementColor.Success)  // "is-success"`,
                            `getStyleClassName(ElementColor.Default)  // ""`,
                            `getStyleClassName(undefined)             // ""`,
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <div className="is-flex is-flex-wrap-wrap" style={{ gap: "8px", marginBottom: "12px" }}>
                        {Colors.values.map(c => (
                            <button
                                key={c}
                                type="button"
                                className={`button is-small ${c !== ElementColor.Default ? `is-${c}` : ""} ${selectedColor === c ? "" : "is-outlined"}`}
                                onClick={() => setSelectedColor(c)}
                            >
                                {c || "default"}
                            </button>
                        ))}
                    </div>
                    <p>
                        <code>getStyleClassName(ElementColor.{selectedColor.capitalize() || "Default"})</code>
                        {" → "}
                        <code>&quot;{getStyleClassName(selectedColor)}&quot;</code>
                    </p>
                </div>
            </ComponentUseCase>
        </section>
    );
};

export default GetStyleClassName;
