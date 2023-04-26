import { useCallback, useEffect, useRef, useState } from "react";

import { getClassName, isNullOrUndefined } from "@bodynarf/utils";

import "./style.scss";

import { ElementSize } from "../..";
import Icon from "../../icon";

import { mapDataAttributes } from "../../..";

import { AccordionProps } from "..";

/** Accordion panel */
const Accordion = ({
    children, caption,
    style, size, defaultExpanded,
    onToggle,
    className, data, title,
}: AccordionProps): JSX.Element => {
    const expandablePanelRef = useRef<HTMLDivElement>(null);
    const [isExpanded, setIsExpanded] = useState(defaultExpanded ?? false);
    const [maxHeight, setMaxHeight] = useState<number | undefined>(defaultExpanded === true ? undefined : 0);

    const toggleCollapse = useCallback(
        () => setMaxHeight(isExpanded ? 0 : expandablePanelRef.current!.scrollHeight),
        [isExpanded]
    );

    useEffect(() => {
        if (defaultExpanded === true && !isNullOrUndefined(expandablePanelRef.current)) {
            setMaxHeight(expandablePanelRef.current!.scrollHeight);
        }
    }, [defaultExpanded]);

    useEffect(() => setIsExpanded(maxHeight !== 0), [maxHeight]);
    useEffect(() => {
        onToggle?.call(undefined, !isExpanded);
    }, [isExpanded, onToggle]);

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
                    size={size ?? ElementSize.Medium}
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
