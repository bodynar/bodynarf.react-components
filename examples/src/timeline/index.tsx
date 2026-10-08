import { FC } from "react";

import Timeline from "@bodynarf/react.components/components/timeline";
import { ElementColor, ElementSize, TimelineItem } from "@bodynarf/react.components";

/** Full items: per-item colors, timestamps and content */
const ITEMS: Array<TimelineItem> = [
    {
        id: "1",
        title: "Project kickoff",
        content: "Initial meeting with all stakeholders. Requirements gathered.",
        timestamp: "Jan 10, 2026",
        color: ElementColor.Primary,
    },
    {
        id: "2",
        title: "Design phase complete",
        content: "Wireframes and mockups approved by the client.",
        timestamp: "Feb 3, 2026",
        color: ElementColor.Info,
    },
    {
        id: "3",
        title: "Development started",
        content: "Sprint 1 started. Backend API and frontend scaffolding.",
        timestamp: "Feb 17, 2026",
        color: ElementColor.Link,
    },
    {
        id: "4",
        title: "Beta release",
        content: "Internal beta released for QA testing.",
        timestamp: "Mar 30, 2026",
        color: ElementColor.Warning,
    },
    {
        id: "5",
        title: "Production release",
        content: "v1.0.0 shipped to production.",
        timestamp: "Apr 21, 2026",
        color: ElementColor.Success,
    },
    {
        id: "1",
        title: "Project kickoff",
        content: "Initial meeting with all stakeholders. Requirements gathered.",
        timestamp: "Jan 10, 2026",
        color: ElementColor.Primary,
    },
    {
        id: "2",
        title: "Design phase complete",
        content: "Wireframes and mockups approved by the client.",
        timestamp: "Feb 3, 2026",
        color: ElementColor.Info,
    },
    {
        id: "3",
        title: "Development started",
        content: "Sprint 1 started. Backend API and frontend scaffolding.",
        timestamp: "Feb 17, 2026",
        color: ElementColor.Link,
    },
    {
        id: "4",
        title: "Beta release",
        content: "Internal beta released for QA testing.",
        timestamp: "Mar 30, 2026",
        color: ElementColor.Warning,
    },
    {
        id: "5",
        title: "Production release",
        content: "v1.0.0 shipped to production.",
        timestamp: "Apr 21, 2026",
        color: ElementColor.Success,
    },
];

/** Minimal items: title only, no optional fields */
const MINIMAL: Array<TimelineItem> = [
    { id: "a", title: "Step 1: Plan" },
    { id: "b", title: "Step 2: Execute" },
    { id: "c", title: "Step 3: Review" },
];

/** Items with bootstrap icon names (bi- prefix omitted) */
const ICON_ITEMS: Array<TimelineItem> = [
    { id: "i1", title: "Scheduled", timestamp: "09:00", icon: "calendar-event", color: ElementColor.Info },
    { id: "i2", title: "In Progress", timestamp: "11:30", icon: "gear", color: ElementColor.Warning },
    { id: "i3", title: "Review", timestamp: "14:00", icon: "eye", color: ElementColor.Link },
    { id: "i4", title: "Done", timestamp: "16:45", icon: "check-circle", color: ElementColor.Success },
];

/** Items with custom text markers */
const MARKER_ITEMS: Array<TimelineItem> = [
    { id: "m1", title: "Alpha", content: "First internal build.", marker: "α" },
    { id: "m2", title: "Beta", content: "Public beta testing.", marker: "β" },
    { id: "m3", title: "RC", content: "Release candidate.", marker: "RC" },
    { id: "m4", title: "v1.0", content: "General availability.", marker: "GA" },
];

const TimelineExamples: FC = () => (
    <section className="section">
        <div className="container">
            <h1 className="title is-3">Timeline</h1>

            {/* Basic — left-aligned (default), per-item colors */}
            <div className="box">
                <p className="subtitle is-5">Basic (left-aligned)</p>
                <Timeline items={ITEMS} />
            </div>

            {/* Centered — leftAligned={false} */}
            <div className="box">
                <p className="subtitle is-5">Centered</p>
                <Timeline
                    items={ITEMS}
                    leftAligned={false}
                />
            </div>

            {/* Minimal — title only, no optional fields */}
            <div className="box">
                <p className="subtitle is-5">Minimal (title only)</p>
                <Timeline items={MINIMAL} />
            </div>

            {/* Icon markers — icon prop on TimelineItem */}
            <div className="box">
                <p className="subtitle is-5">Icon Markers</p>
                <Timeline items={ICON_ITEMS} />
            </div>

            {/* Text markers — marker prop on TimelineItem */}
            <div className="box">
                <p className="subtitle is-5">Text Markers</p>
                <Timeline items={MARKER_ITEMS} />
            </div>

            {/* Hollow markers */}
            <div className="box">
                <p className="subtitle is-5">Hollow Markers</p>
                <Timeline items={ITEMS} hollow />
            </div>

            {/* Separate timestamps — only works in centered mode */}
            <div className="box">
                <p className="subtitle is-5">Timestamps Separate (centered)</p>
                <Timeline
                    items={ITEMS}
                    leftAligned={false}
                    showTimestampsSeparate
                />
            </div>

            {/* Without connectors */}
            <div className="box">
                <p className="subtitle is-5">Without Connectors</p>
                <Timeline items={ITEMS} showConnectors={false} />
            </div>

            {/* Animated — left-aligned, all items animate from left */}
            <div className="box">
                <p className="subtitle is-5">Animated (left-aligned)</p>
                <Timeline items={ITEMS} animated />
            </div>

            {/* Animated centered — alternating left/right animation */}
            <div className="box">
                <p className="subtitle is-5">Animated (centered)</p>
                <Timeline
                    items={ITEMS}
                    leftAligned={false}
                    animated
                />
            </div>

            {/* Global color — fallback color for items without per-item color */}
            <div className="box">
                <p className="subtitle is-5">Global Color (Danger)</p>
                <p className="help mb-2">Default color for items that have no per-item color override</p>
                <Timeline
                    items={MINIMAL.map(i => ({ ...i, timestamp: "Today" }))}
                    color={ElementColor.Danger}
                />
            </div>

            {/* Sizes */}
            <div className="box">
                <p className="subtitle is-5">Sizes</p>
                <div className="columns">
                    {[ElementSize.Small, ElementSize.Normal, ElementSize.Medium, ElementSize.Large].map(size => (
                        <div key={size} className="column is-3">
                            <p className="help mb-2">{size}</p>
                            <Timeline items={MINIMAL} size={size} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default TimelineExamples;
