import { FC, KeyboardEventHandler, useCallback, useState } from "react";

import { Multiline as MultilineComponent } from "@bodynarf/react.components";

import ComponentUseCase from "@app/sharedComponents/useCase";
import CodeExample from "@app/sharedComponents/codeExample";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";

/** KeyboardElement events demo */
const KeyboardElementDemo: FC = () => {
    // First example - onKeyDown only
    const [onKeyDownLog1, setOnKeyDownLog1] = useState("");
    const appendOnKeyDownLog1 = useCallback(
        (key: string) => setOnKeyDownLog1(
            t => t
                + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getMilliseconds()
                + " => " + `Key down: ${key}`
                + "\n"
        ),
        []
    );

    const handleKeyDown1: KeyboardEventHandler = useCallback(
        (event) => {
            appendOnKeyDownLog1(event.key);
        },
        [appendOnKeyDownLog1]
    );

    // Second example - onKeyUp only
    const [onKeyUpLog2, setOnKeyUpLog2] = useState("");
    const appendOnKeyUpLog2 = useCallback(
        (key: string) => setOnKeyUpLog2(
            t => t
                + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getMilliseconds()
                + " => " + `Key up: ${key}`
                + "\n"
        ),
        []
    );

    const handleKeyUp2: KeyboardEventHandler = useCallback(
        (event) => {
            appendOnKeyUpLog2(event.key);
        },
        [appendOnKeyUpLog2]
    );

    // Third example - both events
    const [onKeyDownLog3, setOnKeyDownLog3] = useState("");
    const [onKeyUpLog3, setOnKeyUpLog3] = useState("");

    const appendOnKeyDownLog3 = useCallback(
        (key: string) => setOnKeyDownLog3(
            t => t
                + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getMilliseconds()
                + " => " + `Key down: ${key}`
                + "\n"
        ),
        []
    );

    const appendOnKeyUpLog3 = useCallback(
        (key: string) => setOnKeyUpLog3(
            t => t
                + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getMilliseconds()
                + " => " + `Key up: ${key}`
                + "\n"
        ),
        []
    );

    const handleKeyDown3: KeyboardEventHandler = useCallback(
        (event) => {
            appendOnKeyDownLog3(event.key);
        },
        [appendOnKeyDownLog3]
    );

    const handleKeyUp3: KeyboardEventHandler = useCallback(
        (event) => {
            appendOnKeyUpLog3(event.key);
        },
        [appendOnKeyUpLog3]
    );

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="KeyboardElement"
                description={
                    <>
                        Keyboard event handlers for components that support keyboard interaction.
                        <br />
                        The KeyboardElement type provides optional handlers for key down and key up events.
                        <br />
                        Keyboard events can be used with any component whose props type inherits from
                        {` `}
                        <code>
                            KeyboardElement
                        </code>
                        {` `}
                        .
                    </>
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="onKeyDown"
                description="Handler for key down events. Triggered when a key is pressed down."
                code={
                    <CodeExample
                        code={[
                            `import { KeyboardEventHandler } from "react";`,
                            `import MultilineComponent from "@bodynarf/react.components/components/primitives/multiline";`,
                            "",
                            "/* ... */",
                            "",
                            `const handleKeyDown: KeyboardEventHandler = (event) => {`,
                            `    console.log("Key pressed:", event.key);`,
                            `};`,
                            "",
                            `<MultilineComponent`,
                            `    onKeyDown={handleKeyDown}`,
                            `    placeholder="Type something and watch the console"`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <MultilineComponent
                    onKeyDown={handleKeyDown1}
                    placeholder="Type something to trigger key down events"
                />
                <div className="box mt-3">
                    <h6 className="subtitle is-6">
                        Key Down Events:
                    </h6>
                    <pre
                        style={{
                            maxHeight: "150px",
                            overflow: "auto",
                            fontSize: "0.8rem",
                            whiteSpace: "pre-wrap"
                        }}
                    >
                        {onKeyDownLog1 ?? "No events yet"}
                    </pre>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onKeyUp"
                description="Handler for key up events. Triggered when a key is released."
                code={
                    <CodeExample
                        code={[
                            `import { KeyboardEventHandler } from "react";`,
                            `import MultilineComponent from "@bodynarf/react.components/components/primitives/multiline";`,
                            "",
                            "/* ... */",
                            "",
                            `const handleKeyUp: KeyboardEventHandler = (event) => {`,
                            `    console.log("Key released:", event.key);`,
                            `};`,
                            "",
                            `<MultilineComponent`,
                            `    onKeyUp={handleKeyUp}`,
                            `    placeholder="Type something and watch the console"`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <MultilineComponent
                    onKeyUp={handleKeyUp2}
                    placeholder="Type something to trigger key up events"
                />
                <div className="box mt-3">
                    <h6 className="subtitle is-6">
                        Key Up Events:
                    </h6>
                    <pre
                        style={{
                            maxHeight: "150px",
                            overflow: "auto",
                            fontSize: "0.8rem",
                            whiteSpace: "pre-wrap"
                        }}
                    >
                        {onKeyUpLog2 ?? "No events yet"}
                    </pre>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                caption="Combined Events"
                description="Both key down and key up events can be used together to track complete key interactions."
                code={
                    <CodeExample
                        code={[
                            `import { KeyboardEventHandler } from "react";`,
                            `import MultilineComponent from "@bodynarf/react.components/components/primitives/multiline";`,
                            "",
                            "/* ... */",
                            "",
                            `const handleKeyDown: KeyboardEventHandler = (event) => {`,
                            `    console.log("Key pressed:", event.key);`,
                            `};`,
                            "",
                            `const handleKeyUp: KeyboardEventHandler = (event) => {`,
                            `    console.log("Key released:", event.key);`,
                            `};`,
                            "",
                            `<MultilineComponent`,
                            `    onKeyDown={handleKeyDown}`,
                            `    onKeyUp={handleKeyUp}`,
                            `    placeholder="Type something to trigger both events"`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <MultilineComponent
                    onKeyDown={handleKeyDown3}
                    onKeyUp={handleKeyUp3}
                    placeholder="Type something to trigger both key events"
                />
                <div className="box mt-3">
                    <h6 className="subtitle is-6">
                        Combined Events:
                    </h6>
                    <div style={{ overflow: "auto" }}>
                        <div className="mb-2">
                            <strong>
                                Key Down:
                            </strong>
                            <pre
                                style={{
                                    fontSize: "0.75rem",
                                    whiteSpace: "pre-wrap",
                                    maxHeight: "150px",
                                    overflow: "auto"
                                }}
                            >
                                {onKeyDownLog3 ?? "No events yet"}
                            </pre>
                        </div>
                        <div>
                            <strong>
                                Key Up:
                            </strong>
                            <pre
                                style={{
                                    fontSize: "0.75rem",
                                    whiteSpace: "pre-wrap",
                                    maxHeight: "150px",
                                    overflow: "auto"
                                }}
                            >
                                {onKeyUpLog3 ?? "No events yet"}
                            </pre>
                        </div>
                    </div>
                </div>
            </ComponentUseCase>
        </section>
    );
};

export default KeyboardElementDemo;
