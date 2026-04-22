import { FC, useState } from "react";

import { useDebounce } from "@bodynarf/react.components";

import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import ComponentUseCase from "@app/sharedComponents/useCase";
import CodeExample from "@app/sharedComponents/codeExample";

/** useDebounce hook demo */
const UseDebounce: FC = () => {
    const [inputValue, setInputValue] = useState("");
    const debouncedValue = useDebounce(inputValue, 500);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="useDebounce"
                description="Returns a debounced copy of value that only updates after the specified delay (ms) of inactivity. Useful for search inputs and live filtering."
            />

            <ComponentUseCase
                caption="Debounced input"
                description="The debounced value lags 500ms behind the input. Type quickly — the debounced value only updates after you stop."
                code={
                    <CodeExample
                        code={[
                            `import { useDebounce } from "@bodynarf/react.components";`,
                            "",
                            `const [inputValue, setInputValue] = useState("");`,
                            `const debouncedValue = useDebounce(inputValue, 500);`,
                            "",
                            `<input value={inputValue} onChange={e => setInputValue(e.target.value)} />`,
                            `<p>Debounced: {debouncedValue}</p>`,
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <div className="field">
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                placeholder="Type here..."
                                value={inputValue}
                                onChange={e => setInputValue(e.target.value)}
                            />
                        </div>
                    </div>
                    <p className="mt-1">Raw value: <strong>{inputValue || "—"}</strong></p>
                    <p>Debounced (500ms): <strong className="has-text-primary">{debouncedValue || "—"}</strong></p>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                caption="Configuring delay"
                description="Pass any delay in milliseconds. Shorter delays react faster; longer delays reduce noise."
                code={
                    <CodeExample
                        code={[
                            `import { useDebounce } from "@bodynarf/react.components";`,
                            "",
                            `// 300ms for search-as-you-type:`,
                            `const debouncedSearch = useDebounce(searchText, 300);`,
                            "",
                            `// 1000ms for heavier operations:`,
                            `const debouncedQuery = useDebounce(queryText, 1000);`,
                        ].join("\n")}
                    />
                }
            >
                <p className="has-text-grey">
                    Use a short delay (150–300ms) for search inputs, a longer delay (500–1000ms) for expensive operations like API calls.
                </p>
            </ComponentUseCase>
        </section>
    );
};

export default UseDebounce;
