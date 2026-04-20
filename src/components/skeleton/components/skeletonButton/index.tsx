import { FC } from "react";

import { getClassName } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import { mapDataAttributes } from "@bbr/utils";

import { SkeletonButtonProps } from "../..";

const sizeToButtonWidth: Map<ElementSize, string> = new Map([
    [ElementSize.Small, "4rem"],
    [ElementSize.Normal, "6rem"],
    [ElementSize.Medium, "8rem"],
    [ElementSize.Large, "10rem"],
]);

const sizeToButtonHeight: Map<ElementSize, string> = new Map([
    [ElementSize.Small, "1.5rem"],
    [ElementSize.Normal, "2.25rem"],
    [ElementSize.Medium, "2.75rem"],
    [ElementSize.Large, "3.25rem"],
]);

/** Button-shaped skeleton placeholder */
const SkeletonButton: FC<SkeletonButtonProps> = ({
    size = ElementSize.Normal,
    width,
    className, title, data,
}) => {
    const w = width ?? sizeToButtonWidth.get(size) ?? "6rem";
    const h = sizeToButtonHeight.get(size) ?? "2.25rem";
    const dataAttributes = mapDataAttributes(data);

    const elClassName = getClassName([
        "bbr-skeleton__button",
        className,
    ]);

    return (
        <div
            {...dataAttributes}

            title={title}
            className={elClassName}
            style={{ width: w, height: h }}
        />
    );
};

export default SkeletonButton;
