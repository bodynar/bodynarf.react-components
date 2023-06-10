import { BaseElementProps, ElementIcon, ElementSize } from "@bbr/components";

export interface ButtonProps extends BaseElementProps {
    /** Button displaying text */
    caption?: string;

    /** Type of button (color)  */
    type: ButtonType;

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

    /** Click action handler */
    onClick?: () => void;
};

/** Button types according to Bulma framework */
export type ButtonType = // TODO: to enum
    "default" /** color: transparent */
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
export interface SimpleButtonProps extends Omit<ButtonProps, 'className'> {
    /** Button class name*/
    className: string;
};

export interface ButtonWithIconProps extends SimpleButtonProps {
    /** Icon configuration */
    icon: ElementIcon;
};
