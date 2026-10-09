import { FC, useCallback, useRef, useState } from "react";

import RadioCardGroupComponent from "@bodynarf/react.components/components/radioCardGroup";

import Log, { LogRef } from "@app/sharedComponents/log";
import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";

/** RadioCardGroup component demo */
const RadioCardGroup: FC = () => {
    const logRef = useRef<LogRef>(null);
    const appendLog = useCallback(
        (text: string) => logRef.current?.append(text),
        []
    );

    const [plan, setPlan] = useState<string>("pro");

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="RadioCardGroup"
                version="1.16"
                baseTypeName="BaseElementProps"
                description="Card-style single selection laid out in a grid. Card `value` falls back to its `label` when omitted."
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Provide the cards — each needs at least a label."
                code={
                    <CodeExample
                        code={[
                            `import RadioCardGroup from "@bodynarf/react.components/components/radioCardGroup";`,
                            "",
                            "<RadioCardGroup",
                            "    items={[",
                            `        { label: "Beginner" },`,
                            `        { label: "Intermediate" },`,
                            `        { label: "Advanced" },`,
                            "    ]}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <RadioCardGroupComponent
                    items={[
                        { label: "Beginner" },
                        { label: "Intermediate" },
                        { label: "Advanced" },
                    ]}
                />
            </ComponentUseCase>

            <hr />

            <div className="block">
                <h4 className="subtitle is-4">
                    Custom component props
                </h4>
            </div>

            <ComponentUseCase
                captionIsCode
                caption="RadioCardItem"
                description="Each card is described by a `RadioCardItem`: `label` (required), optional `value` (falls back to the label), `description`, `icon` and `disabled`."
                code={
                    <CodeExample
                        code={[
                            `import RadioCardGroup from "@bodynarf/react.components/components/radioCardGroup";`,
                            "",
                            "<RadioCardGroup",
                            `    defaultValue="pro"`,
                            "    items={[",
                            `        { label: "Free",  value: "free",  description: "1 project",        icon: { name: "person" } },`,
                            `        { label: "Pro",   value: "pro",   description: "Unlimited projects", icon: { name: "people" } },`,
                            `        { label: "Team",  value: "team",  description: "Per-seat billing",   icon: { name: "diagram-3" } },`,
                            "    ]}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <RadioCardGroupComponent
                    defaultValue="pro"
                    items={[
                        { label: "Free", value: "free", description: "1 project", icon: { name: "person" } },
                        { label: "Pro", value: "pro", description: "Unlimited projects", icon: { name: "people" } },
                        { label: "Team", value: "team", description: "Per-seat billing", icon: { name: "diagram-3" } },
                        { label: "Enterprise", value: "ent", description: "Contact sales", icon: { name: "building" }, disabled: true },
                    ]}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="columns"
                description="Number of columns in the cards grid. Defaults to `1`."
                code={
                    <CodeExample
                        code={[
                            `import RadioCardGroup from "@bodynarf/react.components/components/radioCardGroup";`,
                            "",
                            "<RadioCardGroup",
                            `    columns={3}`,
                            "    items={…}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <RadioCardGroupComponent
                    columns={3}
                    items={[
                        { label: "S", description: "Small" },
                        { label: "M", description: "Medium" },
                        { label: "L", description: "Large" },
                        { label: "XL", description: "Extra large" },
                        { label: "XXL", description: "Extra extra large" },
                        { label: "Custom", description: "Your size" },
                    ]}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="value / onChange"
                description="Controlled selection: `value` is the selected card value, changes are reported via `onChange`."
                code={
                    <CodeExample
                        code={[
                            `import { useState } from "react";`,
                            `import RadioCardGroup from "@bodynarf/react.components/components/radioCardGroup";`,
                            "",
                            `const [plan, setPlan] = useState("pro");`,
                            "",
                            "<RadioCardGroup",
                            "    value={plan}",
                            "    onChange={setPlan}",
                            "    items={…}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <RadioCardGroupComponent
                    value={plan}
                    onChange={value => { setPlan(value); appendLog(`Plan: ${value}`); }}
                    columns={2}
                    items={[
                        { label: "Free", value: "free" },
                        { label: "Pro", value: "pro" },
                        { label: "Team", value: "team" },
                        { label: "Enterprise", value: "ent" },
                    ]}
                />
                <Log ref={logRef} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="name"
                description="`name` attribute for the underlying radio inputs. Useful when several groups live on the same page."
                code={
                    <CodeExample
                        code={[
                            `import RadioCardGroup from "@bodynarf/react.components/components/radioCardGroup";`,
                            "",
                            "<RadioCardGroup",
                            `    name="shipping-method"`,
                            "    items={…}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <RadioCardGroupComponent
                    name="shipping-method-demo"
                    items={[
                        { label: "Standard shipping" },
                        { label: "Express shipping" },
                    ]}
                />
            </ComponentUseCase>

            <ComponentColorCase
                captionIsCode
                caption="style"
                description="Color of the selected card border and marker."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementColor } from "@bodynarf/react.components";`,
                            `import RadioCardGroup from "@bodynarf/react.components/components/radioCardGroup";`,
                            "",
                            "<RadioCardGroup",
                            `    style={ElementColor.${id}}`,
                            "    items={…}",
                            "/>",
                        ].join("\n")}
                    />
                }
                componentProvider={style =>
                    <RadioCardGroupComponent
                        style={style}
                        defaultValue="b"
                        items={[
                            { label: "A", value: "a" },
                            { label: "B", value: "b" },
                            { label: "C", value: "c" },
                        ]}
                    />
                }
            />

            <ComponentSizeCase
                captionIsCode
                caption="size"
                description="The component supports all sizes defined in ElementSize."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementSize } from "@bodynarf/react.components";`,
                            `import RadioCardGroup from "@bodynarf/react.components/components/radioCardGroup";`,
                            "",
                            "<RadioCardGroup",
                            `    size={ElementSize.${id}}`,
                            "    items={…}",
                            "/>",
                        ].join("\n")}
                    />
                }
                componentProvider={size =>
                    <RadioCardGroupComponent
                        size={size}
                        defaultValue="b"
                        items={[
                            { label: "A", value: "a" },
                            { label: "B", value: "b" },
                        ]}
                    />
                }
            />
        </section>
    );
};

export default RadioCardGroup;
