import { FC, useCallback, useState } from "react";

import {
    useDebounceHandler,
    useMount,
    useUnmount,
    usePrevious,
    useTimeout,
    useInterval,
    useUpdateEffect,
    useLocalStorage,
    usePagination,
} from "@bodynarf/react.components";

import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import ComponentUseCase from "@app/sharedComponents/useCase";
import CodeExample from "@app/sharedComponents/codeExample";

/** Hooks documentation page */
const HooksPage: FC = () => {
    // useDebounceHandler demo
    const handleAsyncAction = useCallback(async () => {
        await new Promise(resolve => setTimeout(resolve, 500));
    }, []);
    const [debounceActive, debouncedHandler] = useDebounceHandler(handleAsyncAction, 3);

    // useMount demo
    const [mountMessage, setMountMessage] = useState("");
    useMount(() => {
        setMountMessage("Component mounted!");
    });

    // useUnmount demo - just for documentation, no visible effect
    useUnmount(() => {
        // cleanup on unmount
    });

    // usePrevious demo
    const [count, setCount] = useState(0);
    const prevCount = usePrevious(count);

    // useTimeout demo
    const [timeoutMessage, setTimeoutMessage] = useState("Waiting...");
    const [timeoutDelay, setTimeoutDelay] = useState<number | null>(null);
    useTimeout(() => setTimeoutMessage("Timeout fired!"), timeoutDelay);

    // useInterval demo
    const [intervalCount, setIntervalCount] = useState(0);
    const [intervalActive, setIntervalActive] = useState(false);
    useInterval(() => setIntervalCount(c => c + 1), intervalActive ? 1000 : null);

    // useUpdateEffect demo
    const [updateCount, setUpdateCount] = useState(0);
    const [updateEffectLog, setUpdateEffectLog] = useState("Not triggered yet");
    useUpdateEffect(() => {
        setUpdateEffectLog(`Effect triggered! Count: ${updateCount}`);
    }, [updateCount]);

    // useLocalStorage demo
    const [storedValue, setStoredValue] = useLocalStorage("demo-key", "initial value");

    // usePagination demo
    const demoItems = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);
    const [paginationState, getPageItems] = usePagination(demoItems.length, 5);
    const currentPageItems = getPageItems(demoItems) as string[];

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Hooks"
                description="A collection of custom React hooks from @bodynarf/react.components library for common UI patterns and state management."
            />

            <ComponentUseCase
                caption="useDebounceHandler"
                description="Returns a debounced handler that prevents rapid successive calls. Useful for buttons that trigger async operations."
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

            <ComponentUseCase
                caption="useMount"
                description="Executes a function only once during the component's initial render (mount). Similar to useEffect with empty dependency array."
                code={
                    <CodeExample
                        code={[
                            `import { useMount } from "@bodynarf/react.components";`,
                            "",
                            "const MyComponent = () => {",
                            "    useMount(() => {",
                            "        console.log('Component mounted!');",
                            "        initializeData();",
                            "    });",
                            "",
                            "    return <div>Content</div>;",
                            "};",
                        ].join("\n")}
                    />
                }
            >
                <span className="tag is-success is-medium">
                    {mountMessage}
                </span>
            </ComponentUseCase>

            <ComponentUseCase
                caption="useUnmount"
                description="Runs a cleanup function only when the component unmounts. Useful for removing subscriptions or clearing resources."
                code={
                    <CodeExample
                        code={[
                            `import { useUnmount } from "@bodynarf/react.components";`,
                            "",
                            "const MyComponent = () => {",
                            "    useUnmount(() => {",
                            "        console.log('Component unmounted!');",
                            "        cleanupResources();",
                            "    });",
                            "",
                            "    return <div>Content</div>;",
                            "};",
                        ].join("\n")}
                    />
                }
            >
                <span className="tag is-info is-medium">
                    Cleanup will run on unmount (check console when navigating away)
                </span>
            </ComponentUseCase>

            <ComponentUseCase
                caption="usePrevious"
                description="Stores and returns the previous value of a state or prop. Returns undefined on the first render."
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

            <ComponentUseCase
                caption="useTimeout"
                description="Executes a callback after a specified delay. Automatically clears timeout if delay changes or component unmounts. Pass null to disable."
                code={
                    <CodeExample
                        code={[
                            `import { useTimeout } from "@bodynarf/react.components";`,
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

            <ComponentUseCase
                caption="useInterval"
                description="Executes a callback repeatedly with a fixed time delay. Automatically clears interval on unmount. Pass null to disable."
                code={
                    <CodeExample
                        code={[
                            `import { useInterval } from "@bodynarf/react.components";`,
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

            <ComponentUseCase
                caption="useUpdateEffect"
                description="Works like useEffect, but skips execution on the initial render. Runs only on subsequent updates."
                code={
                    <CodeExample
                        code={[
                            `import { useUpdateEffect } from "@bodynarf/react.components";`,
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

            <ComponentUseCase
                caption="useLocalStorage"
                description="Stores state in localStorage and keeps it in sync. Returns a tuple [value, setValue] similar to useState."
                code={
                    <CodeExample
                        code={[
                            `import { useLocalStorage } from "@bodynarf/react.components";`,
                            "",
                            "const MyComponent = () => {",
                            "    const [token, setToken] = useLocalStorage('auth-token', '');",
                            "",
                            "    return (",
                            "        <input",
                            "            value={token}",
                            "            onChange={e => setToken(e.target.value)}",
                            "            placeholder='Enter token'",
                            "        />",
                            "    );",
                            "};",
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <input
                        className="input is-small"
                        style={{ maxWidth: "300px" }}
                        value={storedValue}
                        onChange={e => setStoredValue(e.target.value)}
                        placeholder="Type here (persisted in localStorage)"
                    />
                    <p className="is-size-7 mt-1 has-text-grey">
                        {`Key: "demo-key", Value: "${storedValue}"`}
                    </p>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                caption="usePagination"
                description="Hook for pagination state management. Returns paginator state and a function to slice current page items."
                code={
                    <CodeExample
                        code={[
                            `import { usePagination } from "@bodynarf/react.components";`,
                            "",
                            "const MyComponent = () => {",
                            "    const items = ['Item 1', 'Item 2', /* ... */];",
                            "    const [state, getPageItems] = usePagination(items.length, 5);",
                            "    const currentItems = getPageItems(items);",
                            "",
                            "    return (",
                            "        <div>",
                            "            <ul>",
                            "                {currentItems.map(item => <li>{item}</li>)}",
                            "            </ul>",
                            "            <p>Page {state.currentPage} of {state.pagesCount}</p>",
                            "            <button onClick={() => state.onPageChange(state.currentPage + 1)}>",
                            "                Next",
                            "            </button>",
                            "        </div>",
                            "    );",
                            "};",
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <ul className="mb-2">
                        {currentPageItems.map(item => (
                            <li key={item}>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <p className="is-size-7 mb-2">
                        {`Page ${paginationState.currentPage} of ${paginationState.pagesCount}`}
                    </p>
                    <div className="buttons are-small">
                        <button
                            type="button"
                            className="button"
                            disabled={paginationState.currentPage === 1}
                            onClick={() => paginationState.onPageChange(paginationState.currentPage - 1)}
                        >
                            Previous
                        </button>
                        <button
                            type="button"
                            className="button"
                            disabled={paginationState.currentPage === paginationState.pagesCount}
                            onClick={() => paginationState.onPageChange(paginationState.currentPage + 1)}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </ComponentUseCase>
        </section>
    );
};

export default HooksPage;
