import { isNullOrEmpty, isNullOrUndefined } from "@bodynarf/utils";

import { ElementPosition } from "@bbr/types";
import { mapDataAttributes } from "@bbr/utils";
import Icon from "@bbr/components/icon";

import { ButtonWithIconProps } from "../..";

/** Button with icon component */
const ButtonWithIcon = ({
    className, disabled,
    onClick,
    caption, icon,

    title, data,
}: ButtonWithIconProps): JSX.Element => {
    const iconClassName: string | undefined = isNullOrEmpty(caption)
        ? icon.className
        : icon.position === ElementPosition.Right
            ? `${icon.className} bbr-icon--right`
            : `${icon.className} bbr-icon--left`;

    className = isNullOrEmpty(caption)
        ? `${className} bbr-button--icon-only`
        : className;

    const dataAttributes = isNullOrUndefined(data)
        ? undefined
        : mapDataAttributes(data!);

    if (icon.position === ElementPosition.Right) {
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
    }

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
};

export default ButtonWithIcon;
