import { FC, useState } from "react";

import { ElementColor } from "@bodynarf/react.components";
import { getElementColorClassName } from "@bodynarf/react.components/utils";

import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import ComponentUseCase from "@app/sharedComponents/useCase";
import CodeExample from "@app/sharedComponents/codeExample";

import { Colors } from "../../../shared/enums";

/** getElementColorClassName utility demo */
const GetElementColorClassName: FC = () => {
    const [selectedColor, setSelectedColor] = useState<ElementColor>(ElementColor.Primary);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="getElementColorClassName"
                version="1.14"
                description="Converts an ElementColor enum value to the corresponding Bulma is-* CSS class. Returns an empty string for the Default color or nullish values."
            />

            <ComponentUseCase
                caption="Color → class mapping"
                description="Pick a color to see the class name returned by the function."
                code={
                    <CodeExample
                        code={[
                            `import { ElementColor } from "@bodynarf/react.components";`,
                            `import { getElementColorClassName } from "@bodynarf/react.components/utils";`,
                            "",
                            `getElementColorClassName(ElementColor.Primary) // "is-primary"`,
                            `getElementColorClassName(ElementColor.Default) // ""`,
                            `getElementColorClassName(undefined)            // ""`,
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
                        <code>getElementColorClassName(ElementColor.{selectedColor.capitalize() || "Default"})</code>
                        {" → "}
                        <code>&quot;{getElementColorClassName(selectedColor)}&quot;</code>
                    </p>
                </div>
            </ComponentUseCase>
        </section>
    );
};

export default GetElementColorClassName;
