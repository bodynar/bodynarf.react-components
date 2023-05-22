import { isNullOrEmpty } from "@bodynarf/utils";

import Icon from "@bbr/components/icon";

import { AnchorWithIconProps } from "@bbr/components/anchor";

/** Anchor with icon component */
export const AnchorWithIcon = ({ href, className, onClick, caption, title, target, icon }: AnchorWithIconProps): JSX.Element => {
    const iconPosition = icon.position || "left";

    const iconClassName: string | undefined = isNullOrEmpty(caption)
        ? icon.className
        : iconPosition === "left"
            ? `${icon.className} bbr-icon--left`
            : `${icon.className} bbr-icon--right`;


    if (iconPosition === "left") {
        return (
            <a
                href={href}
                className={className}
                title={title}
                target={target}
                onClick={onClick}
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
            title={title}
            target={target}
            onClick={onClick}
        >
            {caption}
            <Icon {...icon} className={iconClassName} />
        </a>
    );
};
