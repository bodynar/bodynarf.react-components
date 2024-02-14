import { isNullOrEmpty, isNullOrUndefined } from "@bodynarf/utils";

import Icon from "@bbr/components/icon";

import { ButtonWithIconProps } from "@bbr/components/button";
import { mapDataAttributes } from "@bbr/utils";

/** Button with icon component */
export const ButtonWithIcon = ({
    className, disabled,
    onClick,
    caption, icon,

    title, data,
}: ButtonWithIconProps): JSX.Element => {
    const iconPosition = icon.position || "left";

    const iconClassName: string | undefined = isNullOrEmpty(caption)
        ? icon.className
        : iconPosition === "left"
            ? `${icon.className} bbr-icon--left`
            : `${icon.className} bbr-icon--right`;

    className = isNullOrEmpty(caption)
        ? `${className} bbr-button--icon-only`
        : className;

    const dataAttributes = isNullOrUndefined(data)
        ? undefined
        : mapDataAttributes(data!);

    if (iconPosition === "left") {
        return (
            <button
                onClick={onClick}
                disabled={disabled}
                className={className}

                title={title}
                {...dataAttributes}
            >
                <Icon {...icon} className={iconClassName} />
                {caption}
            </button>
        );
    }

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={className}

            title={title}
            {...dataAttributes}
        >
            {caption}
            <Icon {...icon} className={iconClassName} />
        </button>
    );
};
