import { isNullOrEmpty, isNullOrUndefined } from "@bodynarf/utils";

import { ElementPosition } from "@bbr/types";
import { mapDataAttributes } from "@bbr/utils";
import Icon from "@bbr/components/icon";

import { AnchorWithIconProps } from "../..";

/** Anchor with icon component */
export const AnchorWithIcon = ({
    href, className, onClick, caption,
    target, icon,

    title, data,
}: AnchorWithIconProps): JSX.Element => {
    const iconClassName: string | undefined = isNullOrEmpty(caption)
        ? icon.className
        : icon.position === ElementPosition.Right
            ? `${icon.className} bbr-icon--right`
            : `${icon.className} bbr-icon--left`;

    const dataAttributes = isNullOrUndefined(data)
        ? undefined
        : mapDataAttributes(data!);

    if (icon.position === ElementPosition.Right) {
        return (
            <a
                href={href}
                target={target}
                onClick={onClick}
                className={className}

                title={title}
                {...dataAttributes}
            >
                {caption}
                <Icon {...icon} className={iconClassName} />
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
            <Icon {...icon} className={iconClassName} />
            {caption}
        </a>
    );
};
