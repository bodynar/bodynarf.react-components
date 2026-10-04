import { BaseElementProps, ButtonStyle, ClickableElement, ElementIcon, ElementSize } from "@bbr/types";

// The enum lives in @bbr/types since v1.16; re-exported to keep the old import path working
export { ButtonStyle };

export type ButtonProps =
    & BaseElementProps
    & ClickableElement
    & {
        /** Style */
        style: ButtonStyle;

        /** Button displaying text */
        caption?: string;

        /**
         * Type of button (color)
         * @deprecated [Will be removed in v1.15] Use `style` prop instead
         */
        type?: ButtonType;

        /** Configuration of inner icon */
        icon?: ElementIcon;

        /** Button size  */
        size?: ElementSize;

        /** Is button uses light version of color  */
        light?: boolean;

        /** Is button outlined */
        outlined?: boolean;

        /** Should button corners be rounded  */
        rounded?: boolean;

        /** Display loading icon */
        isLoading?: boolean;

        /** Is button disabled */
        disabled?: boolean;

        /** Is non-interactive button */
        static?: boolean;
    };

/**
 * Button types according to Bulma framework
 * @deprecated [Will be removed in v1.15] Use `ButtonStyle` enum
 */
export type ButtonType =
    | "default" /** color: transparent */
    | "primary" /** color: sea-wave green */
    | "link" /** color: blue-violet */
    | "info" /** color: sky-blue */
    | "success" /** color: green */
    | "warning" /** color: yellow */
    | "danger" /** color: red */
    | "white" /** color: white */
    | "light" /** color: light-gray */
    | "dark" /** color: dark-gray */
    | "black" /** color: black */
    | "text" /** Underline text with color: gray */
    | "ghost" /** Blue underline text with color: transparent */
    ;

/** Simple button props type */
export type SimpleButtonProps = Omit<ButtonProps, "className"> & {
    /** Button class name*/
    className: string;
};

export type ButtonWithIconProps = SimpleButtonProps & {
    /** Icon configuration */
    icon: ElementIcon;
};
