import { FC, useState } from "react";

import { useUpdateEffect } from "@bodynarf/react.components/hooks";

import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import ComponentUseCase from "@app/sharedComponents/useCase";
import CodeExample from "@app/sharedComponents/codeExample";

/** useUpdateEffect hook demo */
const UseUpdateEffectPage: FC = () => {
    const [updateCount, setUpdateCount] = useState(0);
    const [updateEffectLog, setUpdateEffectLog] = useState("Not triggered yet");
    useUpdateEffect(() => {
        setUpdateEffectLog(`Effect triggered! Count: ${updateCount}`);
    }, [updateCount]);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="useUpdateEffect"
                version="1.15"
                description="Works like useEffect, but skips execution on the initial render. Runs only on subsequent updates."
            />

            <ComponentUseCase
                caption="Basic usage"
                description="Click the button to increment. The effect only fires on updates, not on mount."
                code={
                    <CodeExample
                        code={[
                            `import { useState } from "react";`,
                            "",
                            `import { useUpdateEffect } from "@bodynarf/react.components/hooks";`,
                            "",
                            "const MyComponent = () => {",
                            "    const [count, setCount] = useState(0);",
                            "",
                            "    useUpdateEffect(() => {",
                            "        console.log('Count updated:', count);",
                            "        // This won't run on first render!",
                            "    }, [count]);",
                            "",
                            "    return (",
                            "        <button onClick={() => setCount(c => c + 1)}>",
                            "            Increment ({count})",
                            "        </button>",
                            "    );",
                            "};",
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <p className="mb-2">
                        {updateEffectLog}
                    </p>
                    <button
                        type="button"
                        className="button is-small is-primary"
                        onClick={() => setUpdateCount(c => c + 1)}
                    >
                        {`Increment (${updateCount})`}
                    </button>
                </div>
            </ComponentUseCase>
        </section>
    );
};

export default UseUpdateEffectPage;
