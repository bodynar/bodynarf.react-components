import { ElementIcon } from "..";

/** Tabs component style */
export enum TabsStyle {
    /**
     * Default style.
     * Single border at the bottom
     */
    default = "",

    /**
     * Classic style with borders.
     * Borders all except bottom
     */
    boxed = "is-boxed",

    /**
     * Styled as buttons
     */
    radioButton = "is-toggle",

    /**
     * Styled as rounded buttons
     */
    radioButtonRounded = "is-toggle is-toggle-rounded",
}

/**
 * Tabs items position on component
 */
export enum TabsPosition {
    /** On the left side. Default value */
    "left" = "",

    /** Center*/
    "center" = "is-centered",

    /** Pulled to right */
    "right" = "is-right",
}

/** Tab item */
export interface TabItem {
    /** Unique identifier across all tab items */
    id: string;

    /** Displayable caption */
    caption: string;

    /** Icon configuration */
    icon?: ElementIcon;
}
