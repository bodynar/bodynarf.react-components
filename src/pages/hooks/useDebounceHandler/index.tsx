import { FC, useCallback } from "react";

import { useDebounceHandler } from "@bodynarf/react.components";

import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import ComponentUseCase from "@app/sharedComponents/useCase";
import CodeExample from "@app/sharedComponents/codeExample";

/** useDebounceHandler hook demo */
const UseDebounceHandlerPage: FC = () => {
    const handleAsyncAction = useCallback(async () => {
        await new Promise(resolve => setTimeout(resolve, 500));
    }, []);
    const [debounceActive, debouncedHandler] = useDebounceHandler(handleAsyncAction, 3);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="useDebounceHandler"
                description="Returns a debounced handler that prevents rapid successive calls. Useful for buttons that trigger async operations."
            />

            <ComponentUseCase
                caption="Basic usage"
                description="The hook accepts an async handler and a cooldown time in seconds. Returns a tuple with the active state and the debounced handler."
                code={
                    <CodeExample
                        code={[
                            `import { useDebounceHandler } from "@bodynarf/react.components";`,
                            "",
                            "const MyComponent = () => {",
                            "    const handleAsync = async () => {",
                            "        await fetchData();",
                            "    };",
                            "",
                            "    const [isActive, debouncedHandler] = useDebounceHandler(handleAsync, 3);",
                            "",
                            "    return (",
                            "        <button",
                            "            disabled={!isActive}",
                            "            onClick={debouncedHandler}",
                            "        >",
                            "            {isActive ? 'Click me' : 'Please wait...'}",
                            "        </button>",
                            "    );",
                            "};",
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <button
                        type="button"
                        className={`button ${debounceActive ? "is-primary" : "is-loading"}`}
                        disabled={!debounceActive}
                        onClick={debouncedHandler}
                    >
                        {debounceActive ? "Click me (3s debounce)" : "Please wait..."}
                    </button>
                </div>
            </ComponentUseCase>
        </section>
    );
};

export default UseDebounceHandlerPage;
