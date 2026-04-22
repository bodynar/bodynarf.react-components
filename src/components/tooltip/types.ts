import { ReactNode } from "react";

import { BaseElementProps } from "@bbr/types";

/** Tooltip placement relative to the trigger element */
export enum TooltipPosition {
    Top = "top",
    Bottom = "bottom",
    Left = "left",
    Right = "right",
}

/** Tooltip entrance / exit animation style */
export enum TooltipAnimation {
    /** No animation */
    None = "none",

    /** Simple opacity fade */
    Fade = "fade",

    /** Slide in from the tooltip side */
    Slide = "slide",
}

/** How the tooltip is dismissed */
export enum TooltipCloseOn {
    /** Closes when the cursor leaves the trigger */
    MouseLeave = "mouseleave",

    /** Closes when the user clicks anywhere outside the trigger */
    OutsideClick = "outsideClick",

    /** Never closes automatically — must be controlled via `visible` prop */
    Manual = "manual",
}

/** Tooltip.Hint slot props */
export type TooltipHintProps = {
    /** The popup text / markup shown inside the tooltip */
    children: ReactNode;
};

/** Tooltip.Target slot props */
export type TooltipTargetProps = {
    /** The element that the tooltip is anchored to */
    children: ReactNode;
};

/** Tooltip component props */
export type TooltipProps = BaseElementProps & {
    /** Must contain exactly one Tooltip.Hint and one Tooltip.Target */
    children: ReactNode;

    /**
     * Tooltip placement relative to the trigger.
     * @default TooltipPosition.Top
     */
    position?: TooltipPosition;

    /**
     * Entrance / exit animation.
     * @default TooltipAnimation.Fade
     */
    animation?: TooltipAnimation;

    /**
     * How the tooltip is closed.
     * @default TooltipCloseOn.MouseLeave
     */
    closeOn?: TooltipCloseOn;

    /**
     * Delay before the tooltip appears, in milliseconds.
     * @default 0
     */
    openDelay?: number;

    /**
     * Auto-hide delay after the tooltip becomes visible, in milliseconds.
     * `null` or omitted means the tooltip stays until `closeOn` triggers.
     */
    lifetime?: number;

    /**
     * Externally controlled visibility.
     * When provided, the component is in controlled mode and ignores
     * mouse events for opening — only `closeOn` / `lifetime` can close it.
     */
    visible?: boolean;
};
