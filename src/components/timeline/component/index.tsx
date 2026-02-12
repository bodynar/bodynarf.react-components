import { FC, useMemo } from "react";

import { getClassName } from "@bodynarf/utils";

import { ElementColor, ElementSize } from "@bbr/types";
import { getElementColorClassName, getSizeClassName, mapDataAttributes } from "@bbr/utils";

import "./style.scss";

import { TimelineItem, TimelineProps } from "../types";

/** Get color class for timeline item */
const getItemColorClass = (
    item: TimelineItem,
    defaultColor: ElementColor
): string => {
    const color = item.color ?? defaultColor;

    return getElementColorClassName(color);
};

/** Timeline component for displaying chronological events */
const Timeline: FC<TimelineProps> = ({
    items,
    size = ElementSize.Normal,
    color = ElementColor.Primary,
    leftAligned = true,
    showConnectors = true,
    animated = false,
    showTimestampsSeparate = false,
    hollow = false,

    className,
    title,
    data,
}) => {
    const containerClassName = useMemo(() => getClassName([
        "bbr-timeline",
        className,
        getSizeClassName(size, ElementSize.Normal),
        getElementColorClassName(color),
        leftAligned ? "is-left-aligned" : "is-centered",
        showConnectors ? "has-connectors" : "",
        animated ? "is-animated" : "",
        showTimestampsSeparate && !leftAligned ? "has-separate-timestamps" : "",
        hollow ? "is-hollow" : "",
    ]), [className, size, color, leftAligned, showConnectors, animated, showTimestampsSeparate, hollow]);

    const dataAttributes = mapDataAttributes(data);

    return (
        <div
            title={title}
            {...dataAttributes}
            className={containerClassName}
        >
            {items.map((item, index) => {
                const itemColorClass = getItemColorClass(item, color);

                const itemClassName = getClassName([
                    "bbr-timeline-item",
                    itemColorClass,
                    animated ? `is-animated-${index % 2 === 0 ? "left" : "right"}` : "",
                ]);

                return (
                    <div
                        key={item.id}

                        className={itemClassName}
                    >
                        {/* Timestamp on left side (centered mode only) */}
                        {showTimestampsSeparate === true && leftAligned === false && item.timestamp !== undefined && (
                            <div className="bbr-timeline-timestamp is-left">
                                {item.timestamp}
                            </div>
                        )}

                        {/* Marker */}
                        <div className="bbr-timeline-marker">
                            {item.icon !== undefined ? (
                                <span className="bbr-timeline-icon">
                                    <i className={`fas ${item.icon}`} />
                                </span>
                            ) : item.marker !== undefined ? (
                                <span className="bbr-timeline-marker-content">
                                    {item.marker}
                                </span>
                            ) : null}
                        </div>

                        {/* Content */}
                        <div className="bbr-timeline-content">
                            {item.timestamp !== undefined && showTimestampsSeparate === false && (
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

                        {/* Timestamp on right side (centered mode only) */}
                        {showTimestampsSeparate === true && leftAligned === false && item.timestamp !== undefined && (
                            <div className="bbr-timeline-timestamp is-right">
                                {item.timestamp}
                            </div>
                        )}

                        {/* Connector line */}
                        {showConnectors === true && index < items.length - 1 && (
                            <div className="bbr-timeline-connector" />
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Timeline;
