import { FC } from "react";

import { getClassName } from "@bodynarf/utils";

import { mapDataAttributes } from "@bbr/utils";

import { SkeletonBlockProps } from "../..";

/** Rectangular block skeleton placeholder */
const SkeletonBlock: FC<SkeletonBlockProps> = ({
    width,
    height,
    className, title, data,
}) => {
    const dataAttributes = mapDataAttributes(data);

    const elClassName = getClassName([
        "bbr-skeleton__block",
        className,
    ]);

    return (
        <div
            {...dataAttributes}

            title={title}
            className={elClassName}
            style={{ width, height }}
        />
    );
};

export default SkeletonBlock;
