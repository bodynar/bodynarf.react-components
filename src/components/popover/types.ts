import { ReactNode } from "react";

import { BaseElementProps } from "@bbr/types";

/** Popover placement relative to the trigger element */
export enum PopoverPosition {
    Top = "top",
    Bottom = "bottom",
    Left = "left",
    Right = "right",
}

/** Popover.Trigger slot props */
export type PopoverTriggerProps = {
    /** The element that toggles the popover */
    children: ReactNode;
};

/** Popover.Content slot props */
export type PopoverContentProps = BaseElementProps & {
    /** The arbitrary content rendered inside the popover bubble */
    children: ReactNode;
};

/** Popover component props */
export type PopoverProps = BaseElementProps & {
    /** Must contain exactly one Popover.Trigger and one Popover.Content */
    children: ReactNode;

    /**
     * Placement of the popover relative to its trigger.
     * @default PopoverPosition.Bottom
     */
    position?: PopoverPosition;

    /**
     * Controlled visibility.
     * When provided, the component acts as a controlled component.
     */
    visible?: boolean;

    /**
     * Called when the popover is toggled (click on trigger or outside click).
     * Required when using controlled mode.
     */
    onToggle?: (visible: boolean) => void;
};
