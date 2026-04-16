import { FC, ReactNode } from "react";

import { getClassName } from "@bodynarf/utils";

import { TooltipAnimation, TooltipPosition } from "../..";

/** TooltipContent sub-component props */
type TooltipContentProps = {
    /** Tooltip popup content */
    children: ReactNode;

    /** Whether the tooltip is currently visible */
    visible: boolean;

    /** Placement relative to trigger */
    position: TooltipPosition;

    /** Animation style */
    animation: TooltipAnimation;
};

/** Tooltip popup box */
const TooltipContent: FC<TooltipContentProps> = ({
    children,
    visible,
    position,
    animation,
}) => {
    const className = getClassName([
        "bbr-tooltip__content",
        `bbr-tooltip__content--${position}`,
        animation !== TooltipAnimation.None ? `bbr-tooltip__content--${animation}` : undefined,
        visible ? "bbr-tooltip__content--visible" : undefined,
    ]);

    return (
        <div
            role="tooltip"
            className={className}
        >
            {children}
        </div>
    );
};

export default TooltipContent;
