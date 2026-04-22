import { FC } from "react";

import { useKeyPress } from "@bodynarf/react.components";

import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import ComponentUseCase from "@app/sharedComponents/useCase";
import CodeExample from "@app/sharedComponents/codeExample";

/** useKeyPress hook demo */
const UseKeyPress: FC = () => {
    const isShiftHeld = useKeyPress("Shift");
    const isEnterHeld = useKeyPress("Enter");
    const isCtrlHeld = useKeyPress("Control");

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="useKeyPress"
                description="Tracks whether a specific keyboard key is currently held down. Returns true while the key is pressed, false otherwise."
            />

            <ComponentUseCase
                caption="Track key state"
                description="Hold Shift, Enter, or Ctrl and watch the indicators below change."
                code={
                    <CodeExample
                        code={[
                            `import { useKeyPress } from "@bodynarf/react.components";`,
                            "",
                            `const isShiftHeld = useKeyPress("Shift");`,
                            `const isEnterHeld = useKeyPress("Enter");`,
                            "",
                            `<p>{isShiftHeld ? "Shift is held" : "Shift is up"}</p>`,
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "12px", flexWrap: "wrap" }}>
                    {([
                        { key: "Shift", held: isShiftHeld },
                        { key: "Enter", held: isEnterHeld },
                        { key: "Control", held: isCtrlHeld },
                    ] as const).map(({ key, held }) => (
                        <span
                            key={key}
                            className={`tag is-medium ${held ? "is-success" : "is-light"}`}
                            style={{ minWidth: "100px", justifyContent: "center" }}
                        >
                            {key}: {held ? "held ↓" : "up"}
                        </span>
                    ))}
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                caption="Practical use: modifier-aware click"
                description="Use useKeyPress to implement modifier-aware interactions, e.g. Ctrl+Click to open in new tab."
                code={
                    <CodeExample
                        code={[
                            `import { useKeyPress } from "@bodynarf/react.components";`,
                            "",
                            `const isCtrlHeld = useKeyPress("Control");`,
                            "",
                            `const handleClick = () => {`,
                            `    if (isCtrlHeld) {`,
                            `        // open in background tab`,
                            `    } else {`,
                            `        // normal navigation`,
                            `    }`,
                            `};`,
                        ].join("\n")}
                    />
                }
            >
                <p className="has-text-grey">
                    Hold <kbd>Ctrl</kbd> while clicking the button to simulate modifier-aware behavior.
                    Current Ctrl state: <strong className={isCtrlHeld ? "has-text-success" : ""}>{isCtrlHeld ? "held" : "not held"}</strong>
                </p>
            </ComponentUseCase>
        </section>
    );
};

export default UseKeyPress;
