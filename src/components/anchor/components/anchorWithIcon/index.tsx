import { getClassName, isNullOrEmpty, isNullOrUndefined } from "@bodynarf/utils";

import { ElementIcon, ElementPosition } from "@bbr/types";
import { mapDataAttributes } from "@bbr/utils";
import Icon from "@bbr/components/icon";

import { AnchorProps } from "../..";

/** Props type of `AnchorWithIcon` */
interface AnchorWithIconProps extends Omit<AnchorProps, "icon"> {
    /** Configuration of icon */
    icon: ElementIcon;
}

/** Anchor with icon component */
const AnchorWithIcon = ({
    href, caption,
    target, icon,
    onClick,

    className, title, data,
}: AnchorWithIconProps): JSX.Element => {
    const iconClassName: string | undefined = isNullOrEmpty(caption)
        ? icon.className
        : getClassName([
            icon.className,
            icon.position === ElementPosition.Right
                ? "bbr-icon--right"
                : "bbr-icon--left"
        ]);

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
};

export default AnchorWithIcon;
