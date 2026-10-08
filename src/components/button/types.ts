import {
    BaseElementProps,
    ButtonStyle,
    ClickableElement,
    DisableableElement,
    ElementIcon,
    ElementWithIcon,
    OutlinedElement,
    RoundedElement,
    SizableElement,
} from "@bbr/types";

// The enum lives in @bbr/types since v1.16; re-exported to keep the old import path working
export { ButtonStyle };

export type ButtonProps =
    & BaseElementProps
    & ClickableElement
    & ElementWithIcon
    & SizableElement
    & OutlinedElement
    & RoundedElement
    & DisableableElement
    & {
        /** Style */
        style: ButtonStyle;

        /** Button displaying text */
        caption?: string;

        /** Is button uses light version of color  */
        light?: boolean;

        /** Display loading icon */
        isLoading?: boolean;

        /** Is non-interactive button */
        static?: boolean;
    };

/** Simple button props type */
export type SimpleButtonProps = Omit<ButtonProps, "className"> & {
    /** Button class name*/
    className: string;
};

export type ButtonWithIconProps = SimpleButtonProps & {
    /** Icon configuration */
    icon: ElementIcon;
};
