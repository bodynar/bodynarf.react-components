import { FC } from "react";

import { ElementColor, ElementSize, Timeline as TimelineComponent, TimelineItem } from "@bodynarf/react.components";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";

const basicEvents: Array<TimelineItem> = [
    { id: "event1", title: "Project Started", content: "Initial planning and requirements gathering" },
    { id: "event2", title: "Development Phase", content: "Building core features" },
    { id: "event3", title: "Testing", content: "QA and bug fixes" },
    { id: "event4", title: "Launch", content: "Product released to market" },
];

const eventsWithIcons: Array<TimelineItem> = [
    { id: "event1", title: "Order Placed", content: "Your order has been received", icon: "fa-shopping-cart" },
    { id: "event2", title: "Processing", content: "Order is being prepared", icon: "fa-cog" },
    { id: "event3", title: "Shipped", content: "Package is on its way", icon: "fa-truck" },
    { id: "event4", title: "Delivered", content: "Package has arrived", icon: "fa-check-circle" },
];

const eventsWithTimestamps: Array<TimelineItem> = [
    { id: "event1", title: "Company Founded", timestamp: "January 2020", content: "Started with a small team" },
    { id: "event2", title: "Series A Funding", timestamp: "March 2021", content: "Raised $5M in funding" },
    { id: "event3", title: "Product Launch", timestamp: "June 2022", content: "Released our first product" },
    { id: "event4", title: "IPO", timestamp: "January 2024", content: "Listed on stock exchange" },
];

const eventsWithMarkers: Array<TimelineItem> = [
    { id: "event1", title: "Q1", marker: "2020", content: "First quarter results" },
    { id: "event2", title: "Q2", marker: "2021", content: "Second quarter results" },
    { id: "event3", title: "Q3", marker: "2022", content: "Third quarter results" },
    { id: "event4", title: "Q4", marker: "2023", content: "Fourth quarter results" },
];

const eventsWithColors: Array<TimelineItem> = [
    { id: "event1", title: "Planning", content: "Initial planning", color: ElementColor.Info },
    { id: "event2", title: "In Progress", content: "Development phase", color: ElementColor.Warning },
    { id: "event3", title: "Review", content: "Code review", color: ElementColor.Primary },
    { id: "event4", title: "Complete", content: "Deployed successfully", color: ElementColor.Success },
];

/** Timeline component demo */
const Timeline: FC = () => {
    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Timeline"
                description={
                    <>
                        Timeline - a component for displaying chronological events or history.
                        <br />
                        Useful for showing project milestones, order tracking, or company history.
                    </>
                }
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Minimal configuration: component with events"
                code={
                    <CodeExample
                        code={[
                            `import { Timeline, TimelineItem } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `const events: Array<TimelineItem> = [`,
                            `    { id: "event1", title: "Project Started", content: "Initial planning" },`,
                            `    { id: "event2", title: "Development", content: "Building features" },`,
                            `    { id: "event3", title: "Launch", content: "Released to market" },`,
                            `];`,
                            "",
                            `<Timeline items={events} />`,
                        ].join("\n")}
                    />
                }
            >
                <TimelineComponent items={basicEvents} />
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
                description="Each event can have a custom icon (Font Awesome class name) displayed on the timeline marker"
                code={
                    <CodeExample
                        code={[
                            `import { Timeline, TimelineItem } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `const events: Array<TimelineItem> = [`,
                            `    { id: "e1", title: "Order Placed", content: "Order received", icon: "fa-shopping-cart" },`,
                            `    { id: "e2", title: "Shipped", content: "On its way", icon: "fa-truck" },`,
                            `    { id: "e3", title: "Delivered", content: "Has arrived", icon: "fa-check-circle" },`,
                            `];`,
                            "",
                            `<Timeline items={events} />`,
                        ].join("\n")}
                    />
                }
            >
                <TimelineComponent items={eventsWithIcons} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="timestamp"
                description="Each event can have a timestamp displayed alongside the content"
                code={
                    <CodeExample
                        code={[
                            `import { Timeline, TimelineItem } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `const events: Array<TimelineItem> = [`,
                            `    { id: "e1", title: "Founded", timestamp: "January 2020", content: "Small team" },`,
                            `    { id: "e2", title: "Series A", timestamp: "March 2021", content: "Raised $5M" },`,
                            `    { id: "e3", title: "IPO", timestamp: "January 2024", content: "Listed" },`,
                            `];`,
                            "",
                            `<Timeline items={events} />`,
                        ].join("\n")}
                    />
                }
            >
                <TimelineComponent items={eventsWithTimestamps} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="marker"
                description="Custom marker content (text) displayed on the timeline marker instead of icon or default"
                code={
                    <CodeExample
                        code={[
                            `import { Timeline, TimelineItem } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `const events: Array<TimelineItem> = [`,
                            `    { id: "e1", title: "Q1", marker: "2020", content: "First quarter" },`,
                            `    { id: "e2", title: "Q2", marker: "2021", content: "Second quarter" },`,
                            `    { id: "e3", title: "Q3", marker: "2022", content: "Third quarter" },`,
                            `];`,
                            "",
                            `<Timeline items={events} />`,
                        ].join("\n")}
                    />
                }
            >
                <TimelineComponent items={eventsWithMarkers} />
            </ComponentUseCase>

            <ComponentUseCase
                caption="Item colors"
                description="Each event can have its own color override using the color property"
                code={
                    <CodeExample
                        code={[
                            `import { Timeline, TimelineItem, ElementColor } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `const events: Array<TimelineItem> = [`,
                            `    { id: "e1", title: "Planning", content: "Initial planning", color: ElementColor.Info },`,
                            `    { id: "e2", title: "In Progress", content: "Development", color: ElementColor.Warning },`,
                            `    { id: "e3", title: "Complete", content: "Deployed", color: ElementColor.Success },`,
                            `];`,
                            "",
                            `<Timeline items={events} />`,
                        ].join("\n")}
                    />
                }
            >
                <TimelineComponent items={eventsWithColors} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="leftAligned"
                description="When true (default), timeline is on the left. When false, timeline is centered with alternating content."
                code={
                    <CodeExample
                        code={[
                            `import { Timeline, TimelineItem } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `<Timeline`,
                            `    items={events}`,
                            `    leftAligned={false}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <TimelineComponent
                    items={basicEvents}
                    leftAligned={false}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="animated"
                description="Use animated appearance for items"
                code={
                    <CodeExample
                        code={[
                            `import { Timeline } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `<Timeline items={events} animated />`,
                        ].join("\n")}
                    />
                }
            >
                <TimelineComponent
                    items={basicEvents}
                    animated
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="showConnectors"
                description="Show or hide connector lines between events (default: true)"
                code={
                    <CodeExample
                        code={[
                            `import { Timeline } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `<Timeline items={events} showConnectors={false} />`,
                        ].join("\n")}
                    />
                }
            >
                <TimelineComponent
                    items={basicEvents}
                    showConnectors={false}
                />
            </ComponentUseCase>

            <hr />

            <div className="block">
                <h4 className="subtitle is-4">
                    Size and color variations
                </h4>
            </div>

            <ComponentSizeCase
                captionIsCode
                caption="size"
                description="The component supports all sizes defined in the ElementSize type"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementSize, Timeline } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            "<Timeline",
                            `    items={events}`,
                            `    size={ElementSize.${id}}`,
                            "/>",
                        ].join("\n")}
                    />
                }
                componentProvider={(size: ElementSize) =>
                    <TimelineComponent
                        items={basicEvents}
                        size={size}
                    />
                }
            />

            <ComponentColorCase
                captionIsCode
                caption="color"
                description="The default color for timeline markers (can be overridden per item)"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementColor, Timeline } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            "<Timeline",
                            `    items={events}`,
                            `    color={ElementColor.${id}}`,
                            "/>",
                        ].join("\n")}
                    />
                }
                componentProvider={(color: ElementColor) =>
                    <TimelineComponent
                        items={basicEvents}
                        color={color}
                    />
                }
            />
        </section>
    );
};

export default Timeline;
