import { FC, useState } from "react";

import { useEventListener } from "@bodynarf/react.components/hooks";

import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import ComponentUseCase from "@app/sharedComponents/useCase";
import CodeExample from "@app/sharedComponents/codeExample";

/** useEventListener hook demo */
const UseEventListenerPage: FC = () => {
    const [lastKey, setLastKey] = useState<string>("Press any key...");
    useEventListener("keydown", (e) => setLastKey(e.key));

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="useEventListener"
                version="1.15"
                description="Attaches an event listener to a given element (default: window). Automatically cleans up on unmount."
            />

            <ComponentUseCase
                caption="Basic usage"
                description="Track which key was pressed last."
                code={
                    <CodeExample
                        code={[
                            `import { useState } from "react";`,
                            "",
                            `import { useEventListener } from "@bodynarf/react.components/hooks";`,
                            "",
                            "const MyComponent = () => {",
                            "    const [lastKey, setLastKey] = useState('');",
                            "",
                            "    useEventListener('keydown', (e) => setLastKey(e.key));",
                            "",
                            "    return <span>Last key: {lastKey}</span>;",
                            "};",
                        ].join("\n")}
                    />
                }
            >
                <span className="tag is-primary is-medium">
                    {`Last key: ${lastKey}`}
                </span>
            </ComponentUseCase>
        </section>
    );
};

export default UseEventListenerPage;
