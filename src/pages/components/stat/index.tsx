import { FC } from "react";

import { Stat as StatComponent, StatTrendDirection } from "@bodynarf/react.components";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";

/** Stat component demo */
const Stat: FC = () => {
    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Stat"
                version="1.15"
                baseTypeName="BaseElementProps"
                description="KPI / statistics display card for dashboards. Shows a primary metric value with label, optional icon badge and trend indicator."
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Provide value and label — the two required props."
                code={
                    <CodeExample
                        code={[
                            `import { Stat } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `<Stat value={1024} label="Total users" />`,
                        ].join("\n")}
                    />
                }
            >
                <StatComponent value={1024} label="Total users" />
            </ComponentUseCase>

            <hr />

            <div className="block">
                <h4 className="subtitle is-4">
                    Custom component props
                </h4>
            </div>

            <ComponentUseCase
                captionIsCode
                caption="icon"
                description="Bootstrap Icons name (without the bi- prefix) to render a badge next to the value."
                code={
                    <CodeExample
                        code={[
                            `import { Stat } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `<Stat value={1024} label="Total users" icon="people" />`,
                        ].join("\n")}
                    />
                }
            >
                <StatComponent value={1024} label="Total users" icon="people" />
            </ComponentUseCase>

            <ComponentColorCase
                captionIsCode
                caption="color"
                description="Color of the icon badge. Only visible when icon is provided."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { Stat, ElementColor } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `<Stat`,
                            `    value="$48,200"`,
                            `    label="Monthly revenue"`,
                            `    icon="currency-dollar"`,
                            `    color={ElementColor.${id}}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
                componentProvider={color =>
                    <StatComponent
                        value="$48,200"
                        label="Monthly revenue"
                        icon="currency-dollar"
                        color={color}
                    />
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="trend"
                description={
                    <>
                        Trend badge attached to the stat. Accepts an object with <code>label</code> (display text) and <code>direction</code> (<code>StatTrendDirection.Up</code>, <code>Down</code> or <code>Neutral</code>).
                    </>
                }
                code={
                    <CodeExample
                        code={[
                            `import { Stat, StatTrendDirection } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `<Stat value="98.7%" label="Uptime" icon="activity"`,
                            `    trend={{ label: "+2.1%", direction: StatTrendDirection.Up }} />`,
                            `<Stat value={302} label="Issues" icon="bug"`,
                            `    trend={{ label: "-12%", direction: StatTrendDirection.Down }} />`,
                            `<Stat value={54} label="Pending" icon="clock"`,
                            `    trend={{ label: "0%", direction: StatTrendDirection.Neutral }} />`,
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "16px", flexWrap: "wrap" }}>
                    <StatComponent
                        value="98.7%"
                        label="Uptime"
                        icon="activity"
                        trend={{ label: "+2.1%", direction: StatTrendDirection.Up }}
                    />
                    <StatComponent
                        value={302}
                        label="Issues"
                        icon="bug"
                        trend={{ label: "-12%", direction: StatTrendDirection.Down }}
                    />
                    <StatComponent
                        value={54}
                        label="Pending"
                        icon="clock"
                        trend={{ label: "0%", direction: StatTrendDirection.Neutral }}
                    />
                </div>
            </ComponentUseCase>
        </section>
    );
};

export default Stat;
