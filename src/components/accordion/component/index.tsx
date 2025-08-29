import { FC, useCallback, useEffect, useRef, useState } from "react";

import { emptyFn, getClassName, isNullOrUndefined } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import { mapDataAttributes } from "@bbr/utils";
import Icon from "@bbr/components/icon";

import "./style.scss";

import { AccordionProps } from "..";

/** Accordion panel */
const Accordion: FC<AccordionProps> = ({
    children, caption,
    style, size = ElementSize.Normal,
    defaultExpanded = false,
    onToggle = emptyFn,

    className, title, data,
}) => {
    const expandablePanelRef = useRef<HTMLDivElement>(null);
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);
    const [maxHeight, setMaxHeight] = useState<number | undefined>(defaultExpanded ? undefined : 0);

    const toggleCollapse = useCallback(
        () => setMaxHeight(isExpanded ? 0 : expandablePanelRef.current!.scrollHeight),
        [isExpanded]
    );

    useEffect(() => {
        if (defaultExpanded && !isNullOrUndefined(expandablePanelRef.current)) {
            setMaxHeight(expandablePanelRef.current!.scrollHeight);
        }
    }, [defaultExpanded, size]);

    useEffect(() => setIsExpanded(maxHeight !== 0), [maxHeight]);
    useEffect(() => onToggle.call(undefined, !isExpanded), [isExpanded, onToggle]);

    const elClassName = getClassName([
        "bbr-accordion",
        "message",
        isNullOrUndefined(style) ? "" : `is-${style}`,
        isNullOrUndefined(size) ? "" : `is-${size}`,
        className,
    ]);

    const dataAttributes = isNullOrUndefined(data)
        ? undefined
        : mapDataAttributes(data!);

    return (
        <article
            className={elClassName}
            aria-expanded={isExpanded}

            {...dataAttributes}
        >
            <div
                className="message-header is-unselectable"
                onClick={toggleCollapse}
            >
                <span title={title}>
                    {caption}
                </span>
                <Icon
                    name="arrow-down"
                    size={size}
                />
            </div>
            <div
                className="message-body"
                ref={expandablePanelRef}
                style={{ maxHeight: `${maxHeight}px` }}
            >
                <div className="message-body__content">
                    {children}
                </div>
            </div>
        </article>
    );
};

export default Accordion;
