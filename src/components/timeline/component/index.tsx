import { FC, useMemo } from "react";

import { getClassName } from "@bodynarf/utils";

import { ElementColor, ElementSize } from "@bbr/types";
import { getElementColorClassName, getSizeClassName, mapDataAttributes } from "@bbr/utils";

import "./style.scss";

import { TimelineProps } from "../types";
import TimelineItemComponent from "../components/item";

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
            {...dataAttributes}

            title={title}
            className={containerClassName}
        >
            {items.map((item, index) => (
                <TimelineItemComponent
                    key={item.id}

                    item={item}
                    index={index}
                    animated={animated}
                    defaultColor={color}
                    leftAligned={leftAligned}
                    showTimestampsSeparate={showTimestampsSeparate}
                    showConnector={showConnectors === true && index < items.length - 1}
                />
            ))}
        </div>
    );
};

export default Timeline;
