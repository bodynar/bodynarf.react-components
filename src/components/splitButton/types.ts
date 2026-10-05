import { ActionFn } from "@bodynarf/utils";

import {
    BaseElementProps,
    DisableableElement,
    ElementIcon,
    ElementWithIcon,
    OutlinedElement,
    RoundedElement,
    SizableElement,
} from "@bbr/types";

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
    & ElementWithIcon
    & SizableElement
    & OutlinedElement
    & RoundedElement
    & DisableableElement
    & {
        /** Style */
        style: ButtonStyle;

        /** Button displaying text */
        caption: string;

        /** Dropdown items - alternative actions. Must contain at least 1 item */
        actions: [SplitButtonAction, ...SplitButtonAction[]];

        /** Is button uses light version of color */
        light?: boolean;

        /** Display loading icon */
        isLoading?: boolean;

        /** Hide dropdown on outside click. Default is true */
        hideOnOuterClick?: boolean;

        /** Primary button click handler */
        onClick: ActionFn;
    };
