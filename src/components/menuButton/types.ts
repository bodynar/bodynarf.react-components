import { ActionFn } from "@bodynarf/utils";

import { BaseElementProps, ElementIcon, ElementSize } from "@bbr/types";

import { ButtonStyle } from "@bbr/components/button";

/** Action item for MenuButton dropdown */
export interface MenuButtonAction {
    /** Unique action identifier */
    id: string;

    /** Displaying text */
    caption: string;

    /** Optional icon configuration */
    icon?: ElementIcon;

    /** Element title */
    title?: string;

    /** Is action disabled */
    disabled?: boolean;

    /** Click handler for this action */
    onClick: ActionFn;
}

/** Divider item for MenuButton dropdown */
export interface MenuButtonDivider {
    /** Unique identifier */
    id: string;

    /** Discriminant to distinguish from action items */
    type: "divider";
}

/** A single entry in MenuButton dropdown — either an action or a divider */
export type MenuButtonEntry = MenuButtonAction | MenuButtonDivider;

/** MenuButton component props type */
export type MenuButtonProps =
    & BaseElementProps
    & {
        /** Style */
        style: ButtonStyle;

        /** Actions displayed in dropdown. Must contain at least 1 item */
        actions: [MenuButtonEntry, ...MenuButtonEntry[]];

        /** Button size */
        size?: ElementSize;

        /**
         * Icon to display inside the toggle button.
         * Defaults to `three-dots-vertical`.
         */
        icon?: string;

        /** Is button uses light version of color */
        light?: boolean;

        /** Is button outlined */
        outlined?: boolean;

        /** Should button corners be rounded */
        rounded?: boolean;

        /** Is button disabled */
        disabled?: boolean;

        /** Hide dropdown on outside click. Default is true */
        hideOnOuterClick?: boolean;
    };
