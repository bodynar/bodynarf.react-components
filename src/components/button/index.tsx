import { isNullOrEmpty, isNullOrUndefined, getClassName } from "@bodynarf/utils";

import "./button.scss";

import { BaseElementProps, ElementIcon, ElementSize } from "..";

import { mapDataAttributes } from "../../utils";

import { ButtonType } from "./types";
import { ButtonWithIcon } from "./components/buttonWithIcon";
import { SimpleButton } from "./components/simpleButton";

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

/**
 * Button component
 * @throws Caption is not defined and icon configuration is not defined at the same time
 */
export default function Button(props: ButtonProps): JSX.Element {
    if (isNullOrEmpty(props.caption) && isNullOrUndefined(props.icon)) {
        throw new Error("No button content provided.");
    }

    const className: string = getClassName([
        "button",
        "bbr-button",
        props.className,
        `is-${props.type}`,
        props.light === true ? "is-light" : "",
        !isNullOrUndefined(props.size) ? `is-${props.size}` : "",
        props.outlined === true ? "is-outlined" : "",
        props.rounded === true ? "is-rounded" : "",
        props.isLoading === true ? "is-loading" : "",
        props.static === true ? "is-static" : "",
    ]);

    const data = isNullOrUndefined(props.data)
        ? undefined
        : mapDataAttributes(props.data!);

    if (!isNullOrUndefined(props.icon)) {
        return (
            <ButtonWithIcon
                {...props}
                className={className}
                onClick={props.onClick}
                icon={props.icon as ElementIcon}
                data={data}
            />
        );
    } else {
        return (
            <SimpleButton
                {...props}
                className={className}
                onClick={props.onClick}
                data={data}
            />
        );
    }
}
