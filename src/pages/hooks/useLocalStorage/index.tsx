import { FC } from "react";

import { useLocalStorage } from "@bodynarf/react.components/hooks";

import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import ComponentUseCase from "@app/sharedComponents/useCase";
import CodeExample from "@app/sharedComponents/codeExample";

/** useLocalStorage hook demo */
const UseLocalStoragePage: FC = () => {
    const [storedValue, setStoredValue] = useLocalStorage("demo-key", "initial value");

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="useLocalStorage"
                version="1.15"
                description="Stores state in localStorage and keeps it in sync. Returns a tuple [value, setValue] similar to useState."
            />

            <ComponentUseCase
                caption="Basic usage"
                description="Type into the input — the value is persisted in localStorage and will survive page reloads."
                code={
                    <CodeExample
                        code={[
                            `import { useLocalStorage } from "@bodynarf/react.components/hooks";`,
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
        </section>
    );
};

export default UseLocalStoragePage;
