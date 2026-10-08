import { ReactNode } from "react";

import { BaseElementProps, DisableableElement, ElementIcon } from "@bbr/types";
import { PopoverPosition } from "@bbr/components/popover";

/** Type of a dropdown menu entry */
export type DropdownMenuItemType = "item" | "separator" | "header";

/** Single dropdown menu entry */
export type DropdownMenuItem = {
    /** Unique entry identifier */
    key: string;

    /** Displayed text. Used by `item` and `header` entries */
    label?: string;

    /** Configuration of the entry icon */
    icon?: ElementIcon;

    /** Tooltip text (entry `title` attribute) */
    title?: string;

    /** Is entry disabled and cannot be clicked */
    disabled?: boolean;

    /**
     * Entry type.
     * @default "item"
     */
    type?: DropdownMenuItemType;

    /** Called when the entry is clicked */
    onClick?: () => void;
};

/** DropdownMenu component props type */
export type DropdownMenuProps =
    & BaseElementProps
    & DisableableElement
    & {
        /** Element which toggles the menu */
        trigger: ReactNode;

        /** Menu entries */
        items: DropdownMenuItem[];

        /**
         * Placement of the menu relative to its trigger.
         * @default PopoverPosition.Bottom
         */
        position?: PopoverPosition;

        /** Hide the menu on a click outside of it. Default is true */
        hideOnOuterClick?: boolean;

        /**
         * Called when the menu is opened or closed.
         * Item clicks are reported via the item `onClick` handlers only
         */
        onToggle?: (visible: boolean) => void;
    };
