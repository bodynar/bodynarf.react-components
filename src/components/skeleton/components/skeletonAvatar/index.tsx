import { FC } from "react";

import { getClassName } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import { mapDataAttributes } from "@bbr/utils";

import { SkeletonAvatarProps } from "../..";

const sizeToAvatarDimension: Map<ElementSize, string> = new Map([
    [ElementSize.Small, "2rem"],
    [ElementSize.Normal, "3rem"],
    [ElementSize.Medium, "4rem"],
    [ElementSize.Large, "6rem"],
]);

/** Circular (or square) avatar skeleton placeholder */
const SkeletonAvatar: FC<SkeletonAvatarProps> = ({
    size = ElementSize.Normal,
    square = false,
    className, title, data,
}) => {
    const dimension = sizeToAvatarDimension.get(size) ?? "3rem";
    const dataAttributes = mapDataAttributes(data);

    const elClassName = getClassName([
        "bbr-skeleton__avatar",
        square ? "bbr-skeleton__avatar--square" : "",
        className,
    ]);

    return (
        <div
            {...dataAttributes}

            title={title}
            className={elClassName}
            style={{ width: dimension, height: dimension }}
        />
    );
};

export default SkeletonAvatar;
