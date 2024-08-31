import { isNullOrEmpty, isNullOrUndefined, getClassName } from "@bodynarf/utils";

import "./style.scss";

import { ButtonProps } from "..";
import ButtonWithIcon from "../components/buttonWithIcon";
import SimpleButton from "../components/simpleButton";

/**
 * Button component
 * @throws Caption is not defined and icon configuration is not defined at the same time
 */
export default function Button(props: ButtonProps): JSX.Element {
    if (isNullOrEmpty(props.caption) && isNullOrUndefined(props.icon)) {
        throw new Error("No button content provided.");
    }

    const {
        light = false,
        outlined = false,
        rounded = false,
        isLoading = false,
        static: isStatic = false
    } = props;

    const className: string = getClassName([
        "bbr-button",
        "button",
        props.className,
        `is-${props.type}`,
        light ? "is-light" : "",
        !isNullOrUndefined(props.size) ? `is-${props.size}` : "",
        outlined ? "is-outlined" : "",
        rounded ? "is-rounded" : "",
        isLoading ? "is-loading" : "",
        isStatic ? "is-static" : "",
    ]);

    if (!isNullOrUndefined(props.icon)) {
        return (
            <ButtonWithIcon
                {...props}
                icon={props.icon!}
                className={className}
            />
        );
    } else {
        return (
            <SimpleButton
                {...props}
                className={className}
            />
        );
    }
}
