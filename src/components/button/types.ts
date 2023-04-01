import { ButtonProps } from ".";
import { ElementIcon } from "../types";

/** Button types according to Bulma framework */
export type ButtonType =
    "default" /** color: transparent */
    | "primary" /** color: seawave green */
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
