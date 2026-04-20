import { BaseElementProps, ClickableElement } from "@bbr/types";

/** A single navigation item within the menu */
export type MenuItemConfig = {
    /** Unique identifier for the item */
    id: string;

    /** Visible label text */
    label: string;

    /**
     * Navigation href.
     * When provided, the item renders as an `<a>` tag.
     */
    href?: string;

    /** Bootstrap icon name (without `bi-` prefix) */
    icon?: string;

    /**
     * Mark item as disabled — not clickable, visually dimmed.
     * @default false
     */
    disabled?: boolean;
};

/** A labelled group of menu items */
export type MenuSectionConfig = {
    /** Items in this section */
    items: MenuItemConfig[];

    /** Optional section label displayed above the items */
    label?: string;
};

/** Menu component props */
export type MenuProps = BaseElementProps & ClickableElement & {
    /** Sections (groups) of navigation items */
    sections: MenuSectionConfig[];

    /**
     * ID of the currently active item.
     * The matching item will receive the `is-active` class.
     */
    activeItemId?: string;

    /**
     * Callback fired when a non-disabled item is clicked.
     * Receives the `id` of the clicked item.
     */
    onItemClick?: (id: string) => void;
};
