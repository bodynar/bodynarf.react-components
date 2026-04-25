import { FC, useState } from "react";

import { useInterval } from "@bodynarf/react.components";

import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import ComponentUseCase from "@app/sharedComponents/useCase";
import CodeExample from "@app/sharedComponents/codeExample";

/** useInterval hook demo */
const UseIntervalPage: FC = () => {
    const [intervalCount, setIntervalCount] = useState(0);
    const [intervalActive, setIntervalActive] = useState(false);
    useInterval(() => setIntervalCount(c => c + 1), intervalActive ? 1000 : null);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="useInterval"
                description="Executes a callback repeatedly with a fixed time delay. Automatically clears interval on unmount. Pass null to disable."
            />

            <ComponentUseCase
                caption="Basic usage"
                description="Start and stop a 1-second interval that increments a counter."
                code={
                    <CodeExample
                        code={[
                            `import { useInterval } from "@bodynarf/react.components/hooks";`,
                            "",
                            "const MyComponent = () => {",
                            "    const [count, setCount] = useState(0);",
                            "    const [active, setActive] = useState(false);",
                            "",
                            "    useInterval(",
                            "        () => setCount(c => c + 1),",
                            "        active ? 1000 : null",
                            "    );",
                            "",
                            "    return (",
                            "        <div>",
                            "            <span>Count: {count}</span>",
                            "            <button onClick={() => setActive(!active)}>",
                            "                {active ? 'Stop' : 'Start'}",
                            "            </button>",
                            "        </div>",
                            "    );",
                            "};",
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <span className="tag is-link is-medium mr-2">
                        {`Count: ${intervalCount}`}
                    </span>
                    <button
                        type="button"
                        className={`button is-small ${intervalActive ? "is-danger" : "is-success"}`}
                        onClick={() => setIntervalActive(!intervalActive)}
                    >
                        {intervalActive ? "Stop" : "Start"}
                    </button>
                </div>
            </ComponentUseCase>
        </section>
    );
};

export default UseIntervalPage;
