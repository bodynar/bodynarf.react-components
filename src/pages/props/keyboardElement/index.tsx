import { FC, KeyboardEventHandler, useCallback, useRef } from "react";

import MultilineComponent from "@bodynarf/react.components/components/primitives/multiline";

import ComponentUseCase from "@app/sharedComponents/useCase";
import CodeExample from "@app/sharedComponents/codeExample";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import Log, { LogRef } from "@app/sharedComponents/log";

/** KeyboardElement events demo */
const KeyboardElementDemo: FC = () => {
    // First example - onKeyDown only
    const keyDownLog1Ref = useRef<LogRef>(null);

    const handleKeyDown1: KeyboardEventHandler = useCallback(
        (event) => {
            keyDownLog1Ref.current?.append(`Key down: ${event.key}`);
        },
        []
    );

    // Second example - onKeyUp only
    const keyUpLog2Ref = useRef<LogRef>(null);

    const handleKeyUp2: KeyboardEventHandler = useCallback(
        (event) => {
            keyUpLog2Ref.current?.append(`Key up: ${event.key}`);
        },
        []
    );

    // Third example - both events
    const keyDownLog3Ref = useRef<LogRef>(null);
    const keyUpLog3Ref = useRef<LogRef>(null);

    const handleKeyDown3: KeyboardEventHandler = useCallback(
        (event) => {
            keyDownLog3Ref.current?.append(`Key down: ${event.key}`);
        },
        []
    );

    const handleKeyUp3: KeyboardEventHandler = useCallback(
        (event) => {
            keyUpLog3Ref.current?.append(`Key up: ${event.key}`);
        },
        []
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
                            "",
                            `import MultilineComponent from "@bodynarf/react.components/components/primitives/multiline";`,
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
                <Log ref={keyDownLog1Ref} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onKeyUp"
                description="Handler for key up events. Triggered when a key is released."
                code={
                    <CodeExample
                        code={[
                            `import { KeyboardEventHandler } from "react";`,
                            "",
                            `import MultilineComponent from "@bodynarf/react.components/components/primitives/multiline";`,
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
                <Log ref={keyUpLog2Ref} />
            </ComponentUseCase>

            <ComponentUseCase
                caption="Combined Events"
                description="Both key down and key up events can be used together to track complete key interactions."
                code={
                    <CodeExample
                        code={[
                            `import { KeyboardEventHandler } from "react";`,
                            "",
                            `import MultilineComponent from "@bodynarf/react.components/components/primitives/multiline";`,
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
                <Log ref={keyDownLog3Ref} />
                <Log ref={keyUpLog3Ref} />
            </ComponentUseCase>
        </section>
    );
};

export default KeyboardElementDemo;
