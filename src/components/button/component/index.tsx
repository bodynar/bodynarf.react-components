import { isNullOrEmpty, isNullOrUndefined, getClassName } from "@bodynarf/utils";

import "./style.scss";

import { ButtonProps, ElementIcon } from "../..";

import { mapDataAttributes } from "../../../utils";

import { ButtonWithIcon } from "../components/buttonWithIcon";
import { SimpleButton } from "../components/simpleButton";

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
