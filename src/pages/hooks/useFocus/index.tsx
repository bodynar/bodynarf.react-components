import { FC } from "react";

import { useFocus } from "@bodynarf/react.components";

import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import ComponentUseCase from "@app/sharedComponents/useCase";
import CodeExample from "@app/sharedComponents/codeExample";

/** useFocus hook demo */
const UseFocus: FC = () => {
    const [inputRef, isInputFocused] = useFocus<HTMLInputElement>();
    const [btnRef, isBtnFocused] = useFocus<HTMLButtonElement>();

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="useFocus"
                description="Tracks the focus state of a DOM element. Returns [ref, isFocused]. Attach ref to any element to reactively track its focus state."
            />

            <ComponentUseCase
                caption="Basic usage"
                description="Attach the ref to an input and observe the isFocused state change."
                code={
                    <CodeExample
                        code={[
                            `import { useFocus } from "@bodynarf/react.components";`,
                            "",
                            `const [ref, isFocused] = useFocus<HTMLInputElement>();`,
                            "",
                            `<input`,
                            `    ref={ref}`,
                            `    className={isFocused ? "input is-focused" : "input"}`,
                            `/>`,
                            `<p>{isFocused ? "Input is focused" : "Click the input"}</p>`,
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <div className="field">
                        <div className="control">
                            <input
                                ref={inputRef}
                                className={`input ${isInputFocused ? "is-primary" : ""}`}
                                type="text"
                                placeholder="Click here to focus"
                            />
                        </div>
                    </div>
                    <p className="mt-1">
                        Focus state: <strong className={isInputFocused ? "has-text-primary" : "has-text-grey"}>
                            {isInputFocused ? "focused" : "not focused"}
                        </strong>
                    </p>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                caption="Custom element"
                description="Works with any focusable HTML element. Here applied to a button."
                code={
                    <CodeExample
                        code={[
                            `import { useFocus } from "@bodynarf/react.components";`,
                            "",
                            `const [ref, isFocused] = useFocus<HTMLButtonElement>();`,
                            "",
                            `<button ref={ref} className="button">`,
                            `    {isFocused ? "Focused!" : "Focus me (Tab)"}`,
                            `</button>`,
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <button
                        ref={btnRef}
                        type="button"
                        className={`button ${isBtnFocused ? "is-info" : ""}`}
                    >
                        {isBtnFocused ? "Button is focused!" : "Tab to focus this button"}
                    </button>
                </div>
            </ComponentUseCase>
        </section>
    );
};

export default UseFocus;
