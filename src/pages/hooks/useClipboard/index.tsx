import { FC } from "react";

import { useClipboard } from "@bodynarf/react.components";

import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import ComponentUseCase from "@app/sharedComponents/useCase";
import CodeExample from "@app/sharedComponents/codeExample";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.demo";

/** useClipboard hook demo */
const UseClipboard: FC = () => {
    const { copy, copied, reset } = useClipboard();
    const { copy: copyCustom, copied: copiedCustom } = useClipboard(5000);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="useClipboard"
                description="Copies text to the clipboard via the Clipboard API. Exposes { copy, copied, reset }. The copied flag resets automatically after resetDelay ms (default 2000)."
            />

            <ComponentUseCase
                caption="Basic usage"
                description="Call copy(text) to copy to clipboard. The copied flag is true for 2 seconds."
                code={
                    <CodeExample
                        code={[
                            `import { useClipboard } from "@bodynarf/react.components/hooks";`,
                            "",
                            `const { copy, copied } = useClipboard();`,
                            "",
                            `<button onClick={() => copy("Hello world!")}>`,
                            `    {copied ? "Copied!" : "Copy"}`,
                            `</button>`,
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "8px", alignItems: "center" }}>
                    <code style={{ flexGrow: 1, padding: "6px 12px", background: "#f5f5f5", borderRadius: "4px" }}>
                        {TOKEN}
                    </code>
                    <button
                        type="button"
                        className={`button is-small ${copied ? "is-success" : "is-primary"}`}
                        onClick={() => copy(TOKEN)}
                    >
                        {copied ? "Copied!" : "Copy token"}
                    </button>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                caption="Custom resetDelay"
                description="Pass a custom delay in ms to control how long the copied flag stays true."
                code={
                    <CodeExample
                        code={[
                            `import { useClipboard } from "@bodynarf/react.components/hooks";`,
                            "",
                            `// copied resets after 5 seconds:`,
                            `const { copy, copied } = useClipboard(5000);`,
                        ].join("\n")}
                    />
                }
            >
                <button
                    type="button"
                    className={`button ${copiedCustom ? "is-success" : "is-info"}`}
                    onClick={() => copyCustom("Custom delay copy")}
                >
                    {copiedCustom ? "Copied! (resets in 5s)" : "Copy (5s reset delay)"}
                </button>
            </ComponentUseCase>
        </section>
    );
};

export default UseClipboard;
