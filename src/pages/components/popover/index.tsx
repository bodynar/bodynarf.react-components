import { FC, useCallback, useRef, useState } from "react";

import { Popover as PopoverComponent, PopoverPosition } from "@bodynarf/react.components";

import Log, { LogRef } from "@app/sharedComponents/log";
import ComponentUseCase from "@app/sharedComponents/useCase";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";

/** Popover component demo */
const Popover: FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isOnToggleVisible, setIsOnToggleVisible] = useState(false);
    const onToggleLogRef = useRef<LogRef>(null);
    const handleOnToggle = useCallback((v: boolean) => {
        setIsOnToggleVisible(v);
        onToggleLogRef.current?.append(`onToggle called with: ${v}`);
    }, []);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Popover"
                version="1.15"
                baseTypeName="BaseElementProps"
                description="Lightweight floating panel anchored to a trigger element. Compound component: Popover.Trigger + Popover.Content. Uncontrolled by default; becomes controlled with visible + onToggle."
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Click the trigger to open the popover. Closes on outside click automatically."
                code={
                    <CodeExample
                        code={[
                            `import { Popover } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            "<Popover>",
                            "    <Popover.Trigger>",
                            "        <button className=\"button\">Open popover</button>",
                            "    </Popover.Trigger>",
                            "    <Popover.Content>",
                            "        <p>Popover content goes here.</p>",
                            "    </Popover.Content>",
                            "</Popover>",
                        ].join("\n")}
                    />
                }
            >
                <PopoverComponent>
                    <PopoverComponent.Trigger>
                        <button type="button" className="button">Open popover</button>
                    </PopoverComponent.Trigger>
                    <PopoverComponent.Content>
                        <p>Popover content goes here.</p>
                    </PopoverComponent.Content>
                </PopoverComponent>
            </ComponentUseCase>

            <hr />

            <div className="block">
                <h4 className="subtitle is-4">Custom component props</h4>
            </div>

            <ComponentUseCase
                captionIsCode
                caption="position"
                description="Controls where the popover appears relative to the trigger. Supports Top, Bottom, Left, Right."
                code={
                    <CodeExample
                        code={[
                            `import { Popover, PopoverPosition } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            "<Popover position={PopoverPosition.Top}>",
                            "    <Popover.Trigger>",
                            "        <button className=\"button\">Top</button>",
                            "    </Popover.Trigger>",
                            "    <Popover.Content><p>Opens above</p></Popover.Content>",
                            "</Popover>",
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "12px", flexWrap: "wrap" }}>
                    {([PopoverPosition.Top, PopoverPosition.Bottom, PopoverPosition.Left, PopoverPosition.Right] as PopoverPosition[]).map(pos => (
                        <PopoverComponent key={pos} position={pos}>
                            <PopoverComponent.Trigger>
                                <button type="button" className="button is-small">{pos}</button>
                            </PopoverComponent.Trigger>
                            <PopoverComponent.Content>
                                <p>Position: <strong>{pos}</strong></p>
                            </PopoverComponent.Content>
                        </PopoverComponent>
                    ))}
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="visible"
                description="Controls popover visibility externally. Use together with onToggle for fully controlled mode."
                code={
                    <CodeExample
                        code={[
                            `import { Popover } from "@bodynarf/react.components";`,
                            "",
                            "const [isVisible, setIsVisible] = useState(false);",
                            "",
                            "<Popover visible={isVisible} onToggle={setIsVisible}>",
                            "    <Popover.Trigger>",
                            "        <button className=\"button\">Controlled trigger</button>",
                            "    </Popover.Trigger>",
                            "    <Popover.Content>",
                            "        <p>Controlled popover</p>",
                            "        <button onClick={() => setIsVisible(false)}>Close</button>",
                            "    </Popover.Content>",
                            "</Popover>",
                        ].join("\n")}
                    />
                }
            >
                <PopoverComponent visible={isVisible} onToggle={setIsVisible}>
                    <PopoverComponent.Trigger>
                        <button type="button" className="button">Controlled trigger</button>
                    </PopoverComponent.Trigger>
                    <PopoverComponent.Content>
                        <p className="mb-2">Controlled popover</p>
                        <button
                            type="button"
                            className="button is-small is-danger"
                            onClick={() => setIsVisible(false)}
                        >
                            Close
                        </button>
                    </PopoverComponent.Content>
                </PopoverComponent>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onToggle"
                description="Callback fired when the popover open state changes. Receives the new visibility boolean. Required when using controlled mode with visible."
                code={
                    <CodeExample
                        code={[
                            `import { Popover } from "@bodynarf/react.components";`,
                            "",
                            "const [isVisible, setIsVisible] = useState(false);",
                            "",
                            "<Popover visible={isVisible} onToggle={v => { console.log('toggled:', v); setIsVisible(v); }}>",
                            "    <Popover.Trigger>",
                            "        <button className=\"button\">Toggle</button>",
                            "    </Popover.Trigger>",
                            "    <Popover.Content><p>Content</p></Popover.Content>",
                            "</Popover>",
                        ].join("\n")}
                    />
                }
            >
                <PopoverComponent
                    visible={isOnToggleVisible}
                    onToggle={handleOnToggle}
                >
                    <PopoverComponent.Trigger>
                        <button type="button" className="button">Toggle</button>
                    </PopoverComponent.Trigger>
                    <PopoverComponent.Content>
                        <p>Visibility is controlled via onToggle.</p>
                    </PopoverComponent.Content>
                </PopoverComponent>
                <Log ref={onToggleLogRef} />
            </ComponentUseCase>
        </section>
    );
};

export default Popover;
