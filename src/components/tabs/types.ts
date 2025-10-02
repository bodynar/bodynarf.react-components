import { BaseElementProps, ElementIcon, ElementPosition, ElementSize } from "@bbr/types";

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

/** Tabs component props type */
export interface TabsProps extends BaseElementProps {
    /** Tabs */
    items: Array<TabItem>;

    /**
     * Active item by default.
     * If not set - first item will be active
     */
    defaultActive?: TabItem;

    /**
     * Component size.
     * Default is `normal`
     */
    size?: ElementSize;

    /** Component position */
    position?: ElementPosition;

    /** Component style */
    style?: TabsStyle;

    /** Is component tabs should take all width of parent */
    fullWidth?: boolean;

    /** Handler of changing current active item */
    onActiveItemChange: (item: TabItem) => void;
}
