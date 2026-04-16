import { ActionFn } from "@bodynarf/utils";

import { BaseElementProps, ElementIcon, ElementSize } from "@bbr/types";

import { ButtonStyle } from "@bbr/components/button";

/** Action item for SplitButton dropdown */
export interface SplitButtonAction {
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

/** SplitButton component props type */
export type SplitButtonProps =
    & BaseElementProps
    & {
        /** Style */
        style: ButtonStyle;

        /** Button displaying text */
        caption: string;

        /** Dropdown items - alternative actions. Must contain at least 1 item */
        actions: [SplitButtonAction, ...SplitButtonAction[]];

        /** Configuration of inner icon */
        icon?: ElementIcon;

        /** Button size */
        size?: ElementSize;

        /** Is button uses light version of color */
        light?: boolean;

        /** Is button outlined */
        outlined?: boolean;

        /** Should button corners be rounded */
        rounded?: boolean;

        /** Display loading icon */
        isLoading?: boolean;

        /** Is button disabled */
        disabled?: boolean;

        /** Hide dropdown on outside click. Default is true */
        hideOnOuterClick?: boolean;

        /** Primary button click handler */
        onClick: ActionFn;
    };
