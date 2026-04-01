import { FC, useState } from "react";

import { usePrevious } from "@bodynarf/react.components";

import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import ComponentUseCase from "@app/sharedComponents/useCase";
import CodeExample from "@app/sharedComponents/codeExample";

/** usePrevious hook demo */
const UsePreviousPage: FC = () => {
    const [count, setCount] = useState(0);
    const prevCount = usePrevious(count);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="usePrevious"
                description="Stores and returns the previous value of a state or prop. Returns undefined on the first render."
            />

            <ComponentUseCase
                caption="Basic usage"
                description="Click the button to increment and see the previous value tracked by the hook."
                code={
                    <CodeExample
                        code={[
                            `import { usePrevious } from "@bodynarf/react.components";`,
                            "",
                            "const MyComponent = () => {",
                            "    const [count, setCount] = useState(0);",
                            "    const prevCount = usePrevious(count);",
                            "",
                            "    return (",
                            "        <div>",
                            "            <p>Current: {count}, Previous: {prevCount}</p>",
                            "            <button onClick={() => setCount(c => c + 1)}>",
                            "                Increment",
                            "            </button>",
                            "        </div>",
                            "    );",
                            "};",
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <p className="mb-2">
                        {`Current: ${count}, Previous: ${prevCount ?? "undefined"}`}
                    </p>
                    <button
                        type="button"
                        className="button is-small is-primary"
                        onClick={() => setCount(c => c + 1)}
                    >
                        Increment
                    </button>
                </div>
            </ComponentUseCase>
        </section>
    );
};

export default UsePreviousPage;
