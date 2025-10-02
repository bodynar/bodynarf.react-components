import { BaseElementProps, ClickableElement, ElementIcon, ElementSize } from "@bbr/types";

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
         * @deprecated Use `style` prop instead
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
 * @deprecated Use `ButtonStyle` enum
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

/** Button style type */
export enum ButtonStyle {
    /** color: transparent */
    Default = "default",

    /** color: sea-wave green */
    Primary = "primary",

    /** color: blue-violet */
    Link = "link",

    /** color: sky-blue */
    Info = "info",

    /** color: green */
    Success = "success",

    /** color: yellow */
    Warning = "warning",

    /** color: red */
    Danger = "danger",

    /** color: white */
    White = "white",

    /** color: light-gray */
    Light = "light",

    /** color: dark-gray */
    Dark = "dark",

    /** color: black */
    Black = "black",

    /** Underline text with color: gray */
    Text = "text",

    /** Blue underline text with color: transparent */
    Ghost = "ghost",
}
