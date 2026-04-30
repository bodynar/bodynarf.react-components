import { FC } from "react";

import { useSessionStorage } from "@bodynarf/react.components/hooks";

import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import ComponentUseCase from "@app/sharedComponents/useCase";
import CodeExample from "@app/sharedComponents/codeExample";

/** useSessionStorage hook demo */
const UseSessionStorage: FC = () => {
    const [step, setStep] = useSessionStorage("demo-wizard-step", 1);
    const [name, setName] = useSessionStorage("demo-name", "");

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="useSessionStorage"
                version="1.15"
                description="Stores state in sessionStorage and keeps it in sync. Mirrors the useState API. Value is cleared when the tab is closed."
            />

            <ComponentUseCase
                caption="Basic usage"
                description="Works like useState but persists to sessionStorage. Reload the page — the value is preserved. Close the tab — it's gone."
                code={
                    <CodeExample
                        code={[
                            `import { useSessionStorage } from "@bodynarf/react.components/hooks";`,
                            "",
                            `const [step, setStep] = useSessionStorage("wizard-step", 1);`,
                            "",
                            `<p>Step: {step}</p>`,
                            `<button onClick={() => setStep(s => s + 1)}>Next step</button>`,
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <p>Wizard step: <strong>{step}</strong></p>
                    <div className="buttons mt-2">
                        <button
                            type="button"
                            className="button is-small"
                            disabled={step <= 1}
                            onClick={() => setStep(step - 1)}
                        >
                            Previous
                        </button>
                        <button
                            type="button"
                            className="button is-small is-primary"
                            disabled={step >= 5}
                            onClick={() => setStep(step + 1)}
                        >
                            Next
                        </button>
                        <button
                            type="button"
                            className="button is-small is-danger"
                            onClick={() => setStep(1)}
                        >
                            Reset
                        </button>
                    </div>
                    <p className="has-text-grey is-size-7 mt-1">Reload the page — step is preserved. Close the tab — step resets.</p>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                caption="String value"
                description="Works with any serializable type."
                code={
                    <CodeExample
                        code={[
                            `import { useSessionStorage } from "@bodynarf/react.components/hooks";`,
                            "",
                            `const [name, setName] = useSessionStorage("user-name", "");`,
                            "",
                            `<input value={name} onChange={e => setName(e.target.value)} />`,
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <div className="field">
                        <label className="label">Name (stored in sessionStorage)</label>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                placeholder="Type your name..."
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                    </div>
                    <p className="has-text-grey is-size-7">Value: &quot;{name}&quot;</p>
                </div>
            </ComponentUseCase>
        </section>
    );
};

export default UseSessionStorage;
