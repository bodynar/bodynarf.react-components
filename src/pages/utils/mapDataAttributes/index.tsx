import { FC, useState } from "react";

import { mapDataAttributes } from "@bodynarf/react.components/utils";

import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import ComponentUseCase from "@app/sharedComponents/useCase";
import CodeExample from "@app/sharedComponents/codeExample";

/** mapDataAttributes utility demo */
const MapDataAttributes: FC = () => {
    const [result, setResult] = useState<object | undefined>(undefined);

    const attrs = { id: "item-42", group: "primary", active: "true" };
    const mapped = mapDataAttributes(attrs);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="mapDataAttributes"
                version="1.6"
                description="Converts a plain key-value object into an object with data-* attribute keys suitable for spreading onto a React HTML element. Returns an empty object when the input is null or undefined."
            />

            <ComponentUseCase
                caption="Basic usage"
                description="Pass any object — the keys are prefixed with data- and the result can be spread onto any JSX element."
                code={
                    <CodeExample
                        code={[
                            `import { mapDataAttributes } from "@bodynarf/react.components/utils";`,
                            "",
                            `const attrs = { id: "item-42", group: "primary", active: "true" };`,
                            `const dataProps = mapDataAttributes(attrs);`,
                            "",
                            `<div {...dataProps} />`,
                            `// renders: <div data-id="item-42" data-group="primary" data-active="true" />`,
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <div
                        className="notification is-info is-light"
                        {...mapped}
                    >
                        <p>This element has the following data attributes spread onto it:</p>
                        <pre className="mt-2 p-2" style={{ background: "#f0f0f0", borderRadius: "4px" }}>
                            {JSON.stringify(mapped, null, 2)}
                        </pre>
                    </div>
                    <p className="is-size-7 has-text-grey mt-1">
                        Inspect the element in DevTools to see the <code>data-*</code> attributes.
                    </p>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                caption="null / undefined input"
                description="When called with undefined the function returns an empty object, so spreading it is always safe."
                code={
                    <CodeExample
                        code={[
                            `import { mapDataAttributes } from "@bodynarf/react.components/utils";`,
                            "",
                            `mapDataAttributes(undefined) // {}`,
                            "",
                            `// safe to spread unconditionally:`,
                            `<div {...mapDataAttributes(maybeAttrs)} />`,
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "12px" }}>
                    <button
                        type="button"
                        className="button is-small is-primary"
                        onClick={() => setResult(mapDataAttributes(undefined))}
                    >
                        mapDataAttributes(undefined)
                    </button>
                    <button
                        type="button"
                        className="button is-small is-info"
                        onClick={() => setResult(mapDataAttributes({}))}
                    >
                        mapDataAttributes({"{}"})
                    </button>
                </div>
                {result !== undefined && (
                    <p className="mt-2">
                        Result: <code>{JSON.stringify(result)}</code>
                    </p>
                )}
            </ComponentUseCase>
        </section>
    );
};

export default MapDataAttributes;
