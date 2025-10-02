import { FC, useCallback, useEffect, useRef, useState } from "react";

import { emptyFn, getClassName, isNotNullish } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import { getElementColorClassName, getSizeClassName, mapDataAttributes } from "@bbr/utils";
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
        if (defaultExpanded && isNotNullish(expandablePanelRef.current)) {
            setMaxHeight(expandablePanelRef.current.scrollHeight);
        }
    }, [defaultExpanded, size]);

    useEffect(() => setIsExpanded(maxHeight !== 0), [maxHeight]);
    useEffect(() => onToggle.call(undefined, !isExpanded), [isExpanded, onToggle]);

    const elClassName = getClassName([
        "bbr-accordion",
        "message",
        getElementColorClassName(style),
        getSizeClassName(size),
        className,
    ]);

    const dataAttributes = mapDataAttributes(data);

    return (
        <article
            {...dataAttributes}
            className={elClassName}
            aria-expanded={isExpanded}
        >
            <div
                onClick={toggleCollapse}
                className="message-header is-unselectable"
            >
                <span title={title}>
                    {caption}
                </span>
                <Icon
                    size={size}
                    name="arrow-down"
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
