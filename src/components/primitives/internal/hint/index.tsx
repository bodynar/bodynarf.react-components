import { getClassName, isNullOrUndefined } from "@bodynarf/utils";

import { BaseInputElementProps, ElementPosition, ElementSize, HintConfiguration, ValidationStatus } from "@bbr/types";
import Icon from "@bbr/components/icon";

import "./style.scss";

/** Props of `InternalHint` */
type HintProps = Pick<BaseInputElementProps<any>, "validationState" | "hint">;

/** Hint component for internal use (as form input elements hints) */
const InternalHint = ({
    validationState, hint,
}: HintProps): JSX.Element => {
    if (isNullOrUndefined(validationState) && isNullOrUndefined(hint)) {
        return <></>;
    }

    const validationStateDefined =
        !isNullOrUndefined(validationState)
        && validationState!.status !== ValidationStatus.None
        && validationState!.messages.length > 0;

    if (validationStateDefined) {
        const validationClassName = validationState!.status === ValidationStatus.Valid
            ? "is-success"
            : "is-danger";

        return (
            <p className={`help m-help ${validationClassName}`}>
                {validationState!.messages.join("\n")}
            </p>
        );
    }

    if (isNullOrUndefined(hint)) {
        return (<></>);
    }

    const className = getClassName([
        "bbr-hint",
        "help",
        "m-help",
        (hint!.grey ?? false) ? "has-text-grey" : undefined,
        (hint!.italic ?? false) ? "is-italic" : undefined,
    ]);

    if (!isNullOrUndefined(hint!.icon)) {
        return (
            <HintWithIcon
                {...hint!}
                className={className}
            />
        );
    }

    return (
        <p className={className}>
            {hint!.content}
        </p>
    );
};

export default InternalHint;

/** Props of `HintWithIcon` */
interface HintWithIconProps extends Pick<
    HintConfiguration,
    | "content"
    | "icon"
> {
    /** Built element class name */
    className: string;
}

/** Hint element with icon */
const HintWithIcon = ({
    className,
    content, icon,
}: HintWithIconProps): JSX.Element => {
    const iconClassName: string =
        getClassName([
            icon!.className,
            icon!.position === ElementPosition.Right
                ? "bbr-icon--right"
                : "bbr-icon--left"
        ]);

    if (icon!.position === ElementPosition.Right) {
        return (
            <p className={className}>
                {content}
                <Icon
                    name={icon!.name}
                    className={iconClassName}
                    size={icon!.size ?? ElementSize.Small}
                />
            </p>
        );
    }

    return (
        <p className={className}>
            <Icon
                name={icon!.name}
                className={iconClassName}
                size={icon!.size ?? ElementSize.Small}
            />
            {content}
        </p>
    );
};
