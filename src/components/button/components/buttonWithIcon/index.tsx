import { isNullOrEmpty } from "@bodynarf/utils";

import Icon from "@bbr/components/icon";

import { ButtonWithIconProps } from "@bbr/components/button";

/** Button with icon component */
export const ButtonWithIcon = ({
    className, disabled,
    onClick,
    caption, title, icon,
    data,
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

    if (iconPosition === "left") {
        return (
            <button
                className={className}
                disabled={disabled}
                onClick={onClick}
                title={title}
                {...data}
            >
                <Icon {...icon} className={iconClassName} />
                {caption}
            </button>
        );
    }

    return (
        <button
            className={className}
            disabled={disabled}
            onClick={onClick}
            title={title}
            {...data}
        >
            {caption}
            <Icon {...icon} className={iconClassName} />
        </button>
    );
};
