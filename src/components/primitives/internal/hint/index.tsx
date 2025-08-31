import { FC } from "react";

import { getClassName, isNullOrUndefined } from "@bodynarf/utils";

import { BaseInputElementProps, ElementPosition, ElementSize, HintConfiguration, ValidationStatus } from "@bbr/types";
import Icon from "@bbr/components/icon";

import "./style.scss";

/** Props of `InternalHint` */
type HintProps = Pick<BaseInputElementProps<unknown>, "validationState" | "hint">;

/** Hint component for internal use (as form input elements hints) */
const InternalHint: FC<HintProps> = ({
    validationState, hint,
}) => {
    if (isNullOrUndefined(validationState) && isNullOrUndefined(hint)) {
        return null;
    }

    const validationStateDefined =
        !isNullOrUndefined(validationState)
        && validationState!.status !== ValidationStatus.None
        && (validationState!.messages ?? []).length > 0;

    if (validationStateDefined) {
        const validationClassName = validationState!.status === ValidationStatus.Valid
            ? "is-success"
            : "is-danger";

        return (
            <p className={`help m-help bbr-hint ${validationClassName}`}>
                {(validationState!.messages ?? []).join("\n")}
            </p>
        );
    }

    if (isNullOrUndefined(hint)) {
        return null;
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
type HintWithIconProps = Pick<
    HintConfiguration,
    | "content"
    | "icon"
> & {
    /** Built element class name */
    className: string;
};

/** Hint element with icon */
// eslint-disable-next-line react/no-multi-comp
const HintWithIcon: FC<HintWithIconProps> = ({
    className,
    content, icon,
}) => {
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
