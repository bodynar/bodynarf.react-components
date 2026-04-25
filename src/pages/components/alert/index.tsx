import { FC, useRef } from "react";

import { Alert as AlertComponent, ElementColor } from "@bodynarf/react.components";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";
import Log, { LogRef } from "@app/sharedComponents/log";

/** Alert component demo */
const Alert: FC = () => {
    const onCloseLogRef = useRef<LogRef>(null);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Alert"
                version="1.15"
                baseTypeName="BaseElementProps"
                description="A styled message banner for informational, warning or error notices. Supports an optional closable header."
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Provide children content to display inside the alert."
                code={
                    <CodeExample
                        code={[
                            `import { Alert } from "@bodynarf/react.components";`,
                            "",
                            "<Alert>",
                            "    This is a default alert message.",
                            "</Alert>",
                        ].join("\n")}
                    />
                }
            >
                <AlertComponent>
                    This is a default alert message.
                </AlertComponent>
            </ComponentUseCase>

            <hr />
            <div><h4 className="subtitle is-4 has-text-weight-semibold">Custom component props</h4></div>

            <ComponentUseCase
                captionIsCode
                caption="children"
                description="Alert body content. Accepts any ReactNode."
                code={
                    <CodeExample
                        code={[
                            `import { Alert } from "@bodynarf/react.components";`,
                            "",
                            "<Alert>",
                            "    <p>Any <strong>ReactNode</strong> can go here.</p>",
                            "</Alert>",
                        ].join("\n")}
                    />
                }
            >
                <AlertComponent>
                    <p>Any <strong>ReactNode</strong> can go here.</p>
                </AlertComponent>
            </ComponentUseCase>

            <ComponentColorCase
                captionIsCode
                caption="color"
                description="Color variant of the alert. Defaults to ElementColor.Info."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { Alert, ElementColor } from "@bodynarf/react.components";`,
                            "",
                            "<Alert",
                            `    color={ElementColor.${id}}`,
                            ">",
                            "    Alert with color variant.",
                            "</Alert>",
                        ].join("\n")}
                    />
                }
                componentProvider={color =>
                    <AlertComponent color={color}>
                        Alert with <strong>{color}</strong> color variant.
                    </AlertComponent>
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="header"
                description="Optional title displayed in a header block above the body."
                code={
                    <CodeExample
                        code={[
                            `import { Alert, ElementColor } from "@bodynarf/react.components";`,
                            "",
                            "<Alert",
                            `    header="Important notice"`,
                            `    color={ElementColor.Warning}`,
                            ">",
                            "    Please review the terms before proceeding.",
                            "</Alert>",
                        ].join("\n")}
                    />
                }
            >
                <AlertComponent header="Important notice" color={ElementColor.Warning}>
                    Please review the terms before proceeding.
                </AlertComponent>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="closable"
                description="Show a close button in the header. Requires header to be set. Defaults to true."
                code={
                    <CodeExample
                        code={[
                            `import { Alert, ElementColor } from "@bodynarf/react.components";`,
                            "",
                            `// closable: true (default)`,
                            "<Alert header=\"Notice\" color={ElementColor.Info} closable>",
                            "    Closable alert.",
                            "</Alert>",
                            "",
                            `// closable: false`,
                            "<Alert header=\"Notice\" color={ElementColor.Info} closable={false}>",
                            "    Non-closable alert.",
                            "</Alert>",
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex is-flex-direction-column" style={{ gap: "0.75rem" }}>
                    <div>
                        <p className="mb-1 has-text-grey">closable: true (default)</p>
                        <AlertComponent header="Notice" color={ElementColor.Info} closable>
                            Closable alert — close button is visible in the header.
                        </AlertComponent>
                    </div>
                    <div>
                        <p className="mb-1 has-text-grey">closable: false</p>
                        <AlertComponent header="Notice" color={ElementColor.Info} closable={false}>
                            Non-closable alert — no close button.
                        </AlertComponent>
                    </div>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="closeLabel"
                description="Accessible aria-label for the close button. Defaults to &quot;close&quot;."
                code={
                    <CodeExample
                        code={[
                            `import { Alert, ElementColor } from "@bodynarf/react.components";`,
                            "",
                            "<Alert",
                            `    header="Notice"`,
                            `    color={ElementColor.Info}`,
                            `    closeLabel="Dismiss"`,
                            ">",
                            "    Alert with custom close button label.",
                            "</Alert>",
                        ].join("\n")}
                    />
                }
            >
                <AlertComponent header="Notice" color={ElementColor.Info} closeLabel="Dismiss">
                    Alert with custom close button aria-label.
                </AlertComponent>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onClose"
                description="Called when the close button in the header is clicked."
                code={
                    <CodeExample
                        code={[
                            `import { Alert, ElementColor } from "@bodynarf/react.components";`,
                            "",
                            "<Alert",
                            `    header="Closable"`,
                            `    color={ElementColor.Danger}`,
                            `    onClose={() => console.log("closed")}`,
                            ">",
                            "    Click the × to trigger onClose.",
                            "</Alert>",
                        ].join("\n")}
                    />
                }
            >
                <AlertComponent
                    header="Closable"
                    color={ElementColor.Danger}
                    onClose={() => onCloseLogRef.current?.append("onClose fired")}
                >
                    Click the × to trigger onClose.
                </AlertComponent>
                <Log ref={onCloseLogRef} />
            </ComponentUseCase>
        </section>
    );
};

export default Alert;
