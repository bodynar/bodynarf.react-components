import { FC, useState } from "react";

import { ElementSize } from "@bodynarf/react.components";
import { getSizeClassName } from "@bodynarf/react.components/utils";

import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import ComponentUseCase from "@app/sharedComponents/useCase";
import CodeExample from "@app/sharedComponents/codeExample";

import { Sizes } from "../../../shared/enums";

/** getSizeClassName utility demo */
const GetSizeClassName: FC = () => {
    const [selectedSize, setSelectedSize] = useState<ElementSize>(ElementSize.Normal);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="getSizeClassName"
                description="Maps an ElementSize value to the corresponding Bulma CSS size class. Returns an empty string when the value is nullish or equals the optional skipValue parameter."
            />

            <ComponentUseCase
                caption="Size → class mapping"
                description="Pick a size to see the resulting Bulma class name."
                code={
                    <CodeExample
                        code={[
                            `import { ElementSize } from "@bodynarf/react.components";`,
                            `import { getSizeClassName } from "@bodynarf/react.components/utils";`,
                            "",
                            `getSizeClassName(ElementSize.Small)  // "is-small"`,
                            `getSizeClassName(ElementSize.Large)  // "is-large"`,
                            `getSizeClassName(ElementSize.Normal) // ""`,
                            `getSizeClassName(undefined)          // ""`,
                            "",
                            `// skip a specific size:`,
                            `getSizeClassName(ElementSize.Small, ElementSize.Small) // ""`,
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <div className="is-flex is-flex-wrap-wrap" style={{ gap: "8px", marginBottom: "12px" }}>
                        {Sizes.values.map(s => (
                            <button
                                key={s}
                                type="button"
                                className={`button is-small ${selectedSize === s ? "is-primary" : "is-primary is-outlined"}`}
                                onClick={() => setSelectedSize(s)}
                            >
                                {s}
                            </button>
                        ))}
                    </div>
                    <p>
                        <code>getSizeClassName(ElementSize.{selectedSize})</code>
                        {" → "}
                        <code>&quot;{getSizeClassName(selectedSize)}&quot;</code>
                    </p>
                </div>
            </ComponentUseCase>
        </section>
    );
};

export default GetSizeClassName;
