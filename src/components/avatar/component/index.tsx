import { FC, useState } from "react";

import { getClassName, isNotNullish, isNullish } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import { getSizeClassName, mapDataAttributes } from "@bbr/utils";

import Icon from "@bbr/components/icon";

import "./style.scss";

import { AvatarProps, AvatarShape } from "..";

/** Avatar component */
const Avatar: FC<AvatarProps> = ({
    src, alt, initials, icon,
    size = ElementSize.Normal,
    shape = AvatarShape.Circle,
    status,
    color,

    className, title, data,
    onClick,
}) => {
    const [imageError, setImageError] = useState(false);

    const classNames = getClassName([
        "bbr-avatar",
        className,
        getSizeClassName(size, ElementSize.Normal),
        `bbr-avatar--${shape}`,
        isNullish(onClick) ? undefined : "is-clickable",
    ]);

    const dataAttributes = mapDataAttributes(data);

    const showImage = isNotNullish(src) && !imageError;
    const showInitials = !showImage && isNotNullish(initials);
    const showIcon = !showImage && !showInitials && isNotNullish(icon);

    return (
        <div
            {...dataAttributes}

            title={title}
            onClick={onClick}
            className={classNames}
        >
            <div
                className="bbr-avatar__inner"
                style={(!showImage && isNotNullish(color)) ? { backgroundColor: color } : undefined}
            >
                {showImage ? (
                    <img
                        src={src}
                        alt={alt}
                        className="bbr-avatar__image"
                        onError={() => setImageError(true)}
                    />
                ) : null}

                {showInitials ? (
                    <span className="bbr-avatar__initials">
                        {initials}
                    </span>
                ) : null}

                {showIcon ? (
                    <Icon
                        name={icon}
                        className="bbr-avatar__icon"
                    />
                ) : null}
            </div>

            {isNotNullish(status) ? (
                <span className={getClassName(["bbr-avatar__status", `bbr-avatar__status--${status}`])} />
            ) : null}
        </div>
    );
};

export default Avatar;
