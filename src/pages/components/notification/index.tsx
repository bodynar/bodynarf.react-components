import { FC, useState } from "react";

import NotificationContainer, { useNotification } from "@bodynarf/react.components/components/notification";
import { ElementColor, ElementPosition, ElementFloatPosition } from "@bodynarf/react.components";

import ComponentUseCase from "@app/sharedComponents/useCase";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";

const colors: Array<ElementColor> = [
    ElementColor.Default,
    ElementColor.Primary,
    ElementColor.Link,
    ElementColor.Info,
    ElementColor.Success,
    ElementColor.Warning,
    ElementColor.Danger,
];

/** Notification component demo page */
const Notification: FC = () => {
    const { add, remove, clear } = useNotification();
    const [lastId, setLastId] = useState<string | null>(null);
    const [position, setPosition] = useState<ElementFloatPosition>(ElementPosition.Right);

    return (
        <section>
            <NotificationContainer position={position} />

            <DemoComponentTitleInfoMessage
                name="Notification"
                version="1.15"
                description="Toast-like notification system with auto-close and stacking. Requires NotificationContainer.Provider as a context wrapper and NotificationContainer as the visual stack renderer. Use the useNotification hook to add, remove, or clear notifications."
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Wrap your app root with NotificationContainer.Provider, render NotificationContainer to display the stack, then call add() from useNotification inside any descendant component."
                code={
                    <CodeExample
                        code={[
                            `import { useNotification } from "@bodynarf/react.components";`,
                            `import NotificationContainer from "@bodynarf/react.components/components/notification";`,
                            "",
                            `// App root:`,
                            `<NotificationContainer.Provider>`,
                            `    <NotificationContainer />`,
                            `    <App />`,
                            `</NotificationContainer.Provider>`,
                            "",
                            `// Inside any descendant component:`,
                            `const { add } = useNotification();`,
                            `add({ content: "Hello!" });`,
                        ].join("\n")}
                    />
                }
            >
                <button
                    type="button"
                    className="button is-primary"
                    onClick={() => add({ content: "Hello from Minimal use!" })}
                >
                    Add notification
                </button>
            </ComponentUseCase>

            <hr />
            <div>
                <h5 className="subtitle is-5 has-text-weight-semibold">
                    NotificationContainer props
                </h5>
            </div>

            <ComponentUseCase
                captionIsCode
                caption="position"
                description="Horizontal position of the notification stack on screen. Accepts ElementPosition.Left or ElementPosition.Right. Default is Right."
                code={
                    <CodeExample
                        code={[
                            `import { ElementPosition } from "@bodynarf/react.components";`,
                            `import NotificationContainer from "@bodynarf/react.components/components/notification";`,
                            "",
                            `<NotificationContainer position={ElementPosition.Left} />`,
                            `// or`,
                            `<NotificationContainer position={ElementPosition.Right} />`,
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
                    <button
                        type="button"
                        className="button"
                        onClick={() => add({ content: `Check ${position === ElementPosition.Right ? "bottom-right" : "bottom-left"} corner` })}
                    >
                        Add notification
                    </button>
                    <button
                        type="button"
                        className="button is-info"
                        onClick={() => setPosition(p => p === ElementPosition.Right ? ElementPosition.Left : ElementPosition.Right)}
                    >
                        Toggle position (current: <strong className="ml-1">{position === ElementPosition.Right ? "Right" : "Left"}</strong>)
                    </button>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="maxVisible"
                description="Maximum number of notifications shown at once. Older notifications are removed when the limit is exceeded. Default is 5."
                code={
                    <CodeExample
                        code={[
                            `import NotificationContainer from "@bodynarf/react.components/components/notification";`,
                            "",
                            `<NotificationContainer maxVisible={3} />`,
                        ].join("\n")}
                    />
                }
            >
                <button
                    type="button"
                    className="button"
                    onClick={() => {
                        for (let i = 1; i <= 8; i++) {
                            add({ content: `Notification #${i} of 8` });
                        }
                    }}
                >
                    Add 8 notifications (only 5 visible at once)
                </button>
            </ComponentUseCase>

            <hr />
            <div>
                <h5 className="subtitle is-5 has-text-weight-semibold">
                    Notification item props
                </h5>
            </div>

            <ComponentUseCase
                captionIsCode
                caption="content"
                description="The content of the notification. Accepts any ReactNode — text, markup, or components."
                code={
                    <CodeExample
                        code={[
                            `add({ content: "Simple text" });`,
                            "",
                            `add({ content: <span><strong>Bold</strong> + regular text</span> });`,
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "8px", flexWrap: "wrap" }}>
                    <button
                        type="button"
                        className="button"
                        onClick={() => add({ content: "Simple text notification" })}
                    >
                        Text content
                    </button>
                    <button
                        type="button"
                        className="button"
                        onClick={() => add({ content: <span><strong>Bold</strong> + regular text</span> })}
                    >
                        ReactNode content
                    </button>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="color"
                description="Color variant of the notification. Uses ElementColor values. Default is ElementColor.Default."
                code={
                    <CodeExample
                        code={[
                            `import { ElementColor } from "@bodynarf/react.components";`,
                            "",
                            `add({ content: "Success!", color: ElementColor.Success });`,
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "8px", flexWrap: "wrap" }}>
                    {colors.map(color => (
                        <button
                            key={color}
                            type="button"
                            className="button"
                            onClick={() => add({ content: `Color: ${color || "default"}`, color })}
                        >
                            {color || "default"}
                        </button>
                    ))}
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="autoClose"
                description="Auto-close delay in milliseconds. When omitted the notification stays until manually dismissed."
                code={
                    <CodeExample
                        code={[
                            `add({ content: "Closes in 2 seconds", autoClose: 2000 });`,
                            `add({ content: "Closes in 5 seconds", autoClose: 5000 });`,
                            `add({ content: "Stays until dismissed" }); // no autoClose`,
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "8px", flexWrap: "wrap" }}>
                    <button
                        type="button"
                        className="button"
                        onClick={() => add({ content: "Auto-close in 2s", autoClose: 2000 })}
                    >
                        2 seconds
                    </button>
                    <button
                        type="button"
                        className="button"
                        onClick={() => add({ content: "Auto-close in 5s", autoClose: 5000 })}
                    >
                        5 seconds
                    </button>
                    <button
                        type="button"
                        className="button"
                        onClick={() => add({ content: "No auto-close — stays until dismissed" })}
                    >
                        No auto-close
                    </button>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="closable"
                description="Whether to show the dismiss button. Default is true. Set to false to prevent manual dismissal (combine with autoClose)."
                code={
                    <CodeExample
                        code={[
                            `add({ content: "Has dismiss button", closable: true });`,
                            `add({ content: "No dismiss button", closable: false, autoClose: 4000 });`,
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "8px", flexWrap: "wrap" }}>
                    <button
                        type="button"
                        className="button"
                        onClick={() => add({ content: "closable: true (default)", closable: true })}
                    >
                        closable: true
                    </button>
                    <button
                        type="button"
                        className="button"
                        onClick={() => add({ content: "closable: false — auto-closes in 4s", closable: false, autoClose: 4000 })}
                    >
                        closable: false
                    </button>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="dismissLabel"
                description='Accessible label for the dismiss button. Default is "Dismiss".'
                code={
                    <CodeExample
                        code={[
                            `add({ content: "Custom dismiss label", dismissLabel: "Close me" });`,
                        ].join("\n")}
                    />
                }
            >
                <button
                    type="button"
                    className="button"
                    onClick={() => add({ content: 'dismissLabel: "Close me"', dismissLabel: "Close me" })}
                >
                    Add (dismissLabel: &quot;Close me&quot;)
                </button>
            </ComponentUseCase>

            <hr />
            <div>
                <h5 className="subtitle is-5 has-text-weight-semibold">
                    useNotification hook
                </h5>
            </div>

            <ComponentUseCase
                captionIsCode
                caption="add"
                description="Adds a new notification and returns its unique string id. The id can be used later with remove()."
                code={
                    <CodeExample
                        code={[
                            `const { add } = useNotification();`,
                            "",
                            `const id: string = add({ content: "New notification" });`,
                        ].join("\n")}
                    />
                }
            >
                <button
                    type="button"
                    className="button is-primary"
                    onClick={() => {
                        const id = add({ content: "Added via add() — id stored for remove()" });
                        setLastId(id);
                    }}
                >
                    add()
                </button>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="remove"
                description="Removes a specific notification by the id returned from add()."
                code={
                    <CodeExample
                        code={[
                            `const { add, remove } = useNotification();`,
                            "",
                            `const id = add({ content: "Removable notification" });`,
                            `remove(id);`,
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "8px", alignItems: "center" }}>
                    <button
                        type="button"
                        className="button is-info"
                        onClick={() => {
                            const id = add({ content: "Click remove() to dismiss this one" });
                            setLastId(id);
                        }}
                    >
                        Add removable
                    </button>
                    <button
                        type="button"
                        className="button is-warning"
                        disabled={lastId === null}
                        onClick={() => {
                            if (lastId !== null) {
                                remove(lastId);
                                setLastId(null);
                            }
                        }}
                    >
                        remove()
                    </button>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="clear"
                description="Removes all active notifications at once."
                code={
                    <CodeExample
                        code={[
                            `const { add, clear } = useNotification();`,
                            "",
                            `add({ content: "Notification 1" });`,
                            `add({ content: "Notification 2" });`,
                            `clear(); // removes all`,
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "8px" }}>
                    <button
                        type="button"
                        className="button is-info"
                        onClick={() => {
                            add({ content: "Notification A", color: ElementColor.Info });
                            add({ content: "Notification B", color: ElementColor.Warning });
                            add({ content: "Notification C", color: ElementColor.Danger });
                        }}
                    >
                        Add 3 notifications
                    </button>
                    <button
                        type="button"
                        className="button is-danger"
                        onClick={() => clear()}
                    >
                        clear()
                    </button>
                </div>
            </ComponentUseCase>
        </section>
    );
};

export default Notification;
