import { FC, useState } from "react";

import { useTimeout } from "@bodynarf/react.components/hooks";

import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import ComponentUseCase from "@app/sharedComponents/useCase";
import CodeExample from "@app/sharedComponents/codeExample";

/** useTimeout hook demo */
const UseTimeoutPage: FC = () => {
    const [timeoutMessage, setTimeoutMessage] = useState("Waiting...");
    const [timeoutDelay, setTimeoutDelay] = useState<number | null>(null);
    useTimeout(() => setTimeoutMessage("Timeout fired!"), timeoutDelay);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="useTimeout"
                version="1.15"
                description="Executes a callback after a specified delay. Automatically clears timeout if delay changes or component unmounts. Pass null to disable."
            />

            <ComponentUseCase
                caption="Basic usage"
                description="Click the button to start a 2-second timeout. The message will update when it fires."
                code={
                    <CodeExample
                        code={[
                            `import { useState } from "react";`,
                            "",
                            `import { useTimeout } from "@bodynarf/react.components/hooks";`,
                            "",
                            "const MyComponent = () => {",
                            "    const [message, setMessage] = useState('Waiting...');",
                            "",
                            "    useTimeout(() => setMessage('Timeout fired!'), 2000);",
                            "",
                            "    return <span>{message}</span>;",
                            "};",
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <span className="tag is-warning is-medium mr-2">
                        {timeoutMessage}
                    </span>
                    <button
                        type="button"
                        className="button is-small"
                        onClick={() => {
                            setTimeoutMessage("Waiting...");
                            setTimeoutDelay(2000);
                        }}
                    >
                        Start 2s timeout
                    </button>
                </div>
            </ComponentUseCase>
        </section>
    );
};

export default UseTimeoutPage;
