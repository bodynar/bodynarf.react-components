import { FC } from "react";

import { getClassName } from "@bodynarf/utils";

import { ElementColor } from "@bbr/types";
import { getElementColorClassName } from "@bbr/utils";

import Icon from "@bbr/components/icon";

import { TimelineItem } from "../../types";

/** Props for a single timeline item */
interface TimelineItemProps {
    /** Item data */
    item: TimelineItem;

    /** Item index within the list */
    index: number;

    /** Default color used when item has no color override */
    defaultColor: ElementColor;

    /** Whether animation classes are applied */
    animated: boolean;

    /** Whether to render a connector line below the item */
    showConnector: boolean;

    /** Whether timestamps are displayed on a separate side (centered mode only) */
    showTimestampsSeparate: boolean;

    /** Whether the timeline is left-aligned */
    leftAligned: boolean;
}

/** Single timeline event item */
const TimelineItemComponent: FC<TimelineItemProps> = ({
    item,
    index,
    defaultColor,
    animated,
    showConnector,
    showTimestampsSeparate,
    leftAligned,
}) => {
    const itemColorClass = getElementColorClassName(item.color ?? defaultColor);

    const itemClassName = getClassName([
        "bbr-timeline-item",
        itemColorClass,
        animated ? (leftAligned || index % 2 === 0 ? "is-animated-left" : "is-animated-right") : "",
    ]);

    const showSeparateTimestamp = showTimestampsSeparate && !leftAligned && item.timestamp !== undefined;

    return (
        <div
            className={itemClassName}
            style={animated ? { animationDelay: `${index * 0.15}s` } : undefined}
        >
            {showSeparateTimestamp ? (
                <div className="bbr-timeline-timestamp is-left">
                    {item.timestamp}
                </div>
            ) : null}

            <div className={`bbr-timeline-marker${item.marker !== undefined && item.icon === undefined ? " has-text-marker" : ""}`}>
                {item.icon !== undefined ? (
                    <span className="bbr-timeline-icon">
                        <Icon name={item.icon} />
                    </span>
                ) : item.marker !== undefined ? (
                    <span className="bbr-timeline-marker-content">
                        {item.marker}
                    </span>
                ) : null}
            </div>

            <div className="bbr-timeline-content">
                {item.timestamp !== undefined && !showTimestampsSeparate && (
                    <div className="bbr-timeline-timestamp">
                        {item.timestamp}
                    </div>
                )}
                <div className="bbr-timeline-title">
                    {item.title}
                </div>
                {item.content !== undefined && item.content !== "" && (
                    <div className="bbr-timeline-text">
                        {item.content}
                    </div>
                )}
            </div>

            {showSeparateTimestamp ? (
                <div className="bbr-timeline-timestamp is-right">
                    {item.timestamp}
                </div>
            ) : null}

            {showConnector ? (
                <div className="bbr-timeline-connector" />
            ) : null}
        </div>
    );
};

export default TimelineItemComponent;
