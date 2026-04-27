import { FC, useState } from "react";

import { ElementPosition } from "@bodynarf/react.components";
import { getPositionClassName } from "@bodynarf/react.components/utils";

import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import ComponentUseCase from "@app/sharedComponents/useCase";
import CodeExample from "@app/sharedComponents/codeExample";

import { Positions } from "../../../shared/enums";

/** getPositionClassName utility demo */
const GetPositionClassName: FC = () => {
    const [selectedPos, setSelectedPos] = useState<ElementPosition>(ElementPosition.Left);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="getPositionClassName"
                description="Maps an ElementPosition value to the corresponding Bulma CSS positioning class. Returns an empty string for the default (left) position."
            />

            <ComponentUseCase
                caption="Position → class mapping"
                description="Pick a position to see the resulting Bulma class name."
                code={
                    <CodeExample
                        code={[
                            `import { ElementPosition } from "@bodynarf/react.components";`,
                            `import { getPositionClassName } from "@bodynarf/react.components/utils";`,
                            "",
                            `getPositionClassName(ElementPosition.Center) // "is-centered"`,
                            `getPositionClassName(ElementPosition.Right)  // "is-right"`,
                            `getPositionClassName(ElementPosition.Left)   // ""`,
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <div className="is-flex" style={{ gap: "8px", marginBottom: "12px" }}>
                        {Positions.values.map(p => (
                            <button
                                key={p}
                                type="button"
                                className={`button is-small ${selectedPos === p ? "is-info" : "is-info is-outlined"}`}
                                onClick={() => setSelectedPos(p)}
                            >
                                {p || "left (default)"}
                            </button>
                        ))}
                    </div>
                    <p>
                        <code>getPositionClassName(ElementPosition.{selectedPos || "Left"})</code>
                        {" → "}
                        <code>&quot;{getPositionClassName(selectedPos)}&quot;</code>
                    </p>
                </div>
            </ComponentUseCase>
        </section>
    );
};

export default GetPositionClassName;
