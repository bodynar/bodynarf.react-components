import { isNullOrEmpty, isNullOrUndefined } from "@bodynarf/utils";

import Icon from "@bbr/components/icon";
import { AnchorWithIconProps } from "@bbr/components/anchor";
import { mapDataAttributes } from "@bbr/utils";

/** Anchor with icon component */
export const AnchorWithIcon = ({
    href, className, onClick, caption,
    target, icon,

    title, data,
}: AnchorWithIconProps): JSX.Element => {
    const iconPosition = icon.position || "left";

    const iconClassName: string | undefined = isNullOrEmpty(caption)
        ? icon.className
        : iconPosition === "left"
            ? `${icon.className} bbr-icon--left`
            : `${icon.className} bbr-icon--right`;

    const dataAttributes = isNullOrUndefined(data)
        ? undefined
        : mapDataAttributes(data!);

    if (iconPosition === "left") {
        return (
            <a
                href={href}
                target={target}
                onClick={onClick}
                className={className}

                title={title}
                {...dataAttributes}
            >
                <Icon {...icon} className={iconClassName} />
                {caption}
            </a>
        );
    }

    return (
        <a
            href={href}
            className={className}
            target={target}
            onClick={onClick}

            title={title}
            {...dataAttributes}
        >
            {caption}
            <Icon {...icon} className={iconClassName} />
        </a>
    );
};
