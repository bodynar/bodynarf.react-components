import { ReactNode } from "react";

import { ActionFn } from "@bodynarf/utils";

import { BaseElementProps, ElementFloatPosition } from "@bbr/types";

/** SidePanel preset width in vw units */
export enum SidePanelSize {
    /** 10vw */
    Small = 10,

    /** 15vw */
    Normal = 15,

    /** 25vw */
    Medium = 25,

    /** 40vw */
    Large = 40,
}

/** SidePanel root component props */
export type SidePanelProps = BaseElementProps & {
    /** Panel content (SidePanel.Title, SidePanel.Body) */
    children: ReactNode;

    /**
     * Whether the panel is visible.
     */
    isOpen: boolean;

    /**
     * Side from which the panel slides in.
     * @default Left
     */
    position?: ElementFloatPosition;

    /**
     * Panel width as a preset size (in vw).
     * Ignored when `customWidth` is provided.
     * @default Normal (15vw)
     */
    size?: SidePanelSize;

    /**
     * Custom panel width as a CSS value (e.g. `"320px"`, `"20%"`, `"20vw"`).
     * Overrides `size` when provided.
     */
    customWidth?: string;

    /**
     * Close the panel when the overlay background is clicked.
     * @default true
     */
    closeOnOverlayClick?: boolean;

    /** Called when the overlay or close button is clicked */
    onClose: ActionFn;
};

/** SidePanel.Title sub-component props */
export type SidePanelTitleProps = BaseElementProps & {
    /** Title content */
    children: ReactNode;

    /**
     * Show the built-in close (×) button.
     * @default true
     */
    showCloseButton?: boolean;

    /**
     * Accessible label for the close button.
     * @default "Close panel"
     */
    closeLabel?: string;
};

/** SidePanel.Body sub-component props */
export type SidePanelBodyProps = BaseElementProps & {
    /** Body content */
    children: ReactNode;
};
