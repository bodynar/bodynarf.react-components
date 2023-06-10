import { isNullOrEmpty, isNullOrUndefined, getClassName } from "@bodynarf/utils";

import "./style.scss";

import { ButtonProps, ElementIcon } from "@bbr/components";

import { mapDataAttributes } from "@bbr/utils";

import { ButtonWithIcon } from "@bbr/components/button/components/buttonWithIcon";
import { SimpleButton } from "@bbr/components/button/components/simpleButton";

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
        "button",
        "bbr-button",
        props.className,
        `is-${props.type}`,
        light ? "is-light" : "",
        !isNullOrUndefined(props.size) ? `is-${props.size}` : "",
        outlined ? "is-outlined" : "",
        rounded ? "is-rounded" : "",
        isLoading ? "is-loading" : "",
        isStatic ? "is-static" : "",
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
