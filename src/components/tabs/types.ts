import { ElementIcon } from "@bbr/components";

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

/** Tab item */
export interface TabItem {
    /** Unique identifier across all tab items */
    id: string;

    /** Displayable caption */
    caption: string;

    /** Icon configuration */
    icon?: ElementIcon;
}
