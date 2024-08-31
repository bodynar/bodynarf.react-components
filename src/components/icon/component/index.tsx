import { FC } from "react";

import { getClassName, isNullOrUndefined } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import { mapDataAttributes } from "@bbr/utils";

import "./style.scss";
import { IconProps } from "../..";

const sizeToClassMap: Map<ElementSize, string> = new Map([
    [ElementSize.Small, "bbr-icon--size-small"],
    [ElementSize.Normal, ""],
    [ElementSize.Medium, "bbr-icon--size-medium"],
    [ElementSize.Large, "bbr-icon--size-large"]
]);

/**
 * Icon component. Based on bootstrap icons
 */
const Icon: FC<IconProps> = ({
    name, size = ElementSize.Normal,

    className, title, data,
    onClick,
}) => {
    const classNames = getClassName([
        "bbr-icon",
        "bi",
        `bi-${name}`,
        className,
        sizeToClassMap.has(size) ? sizeToClassMap.get(size) : "",
    ]);

    const dataAttributes = isNullOrUndefined(data)
        ? undefined
        : mapDataAttributes(data!);

    return (
        <i
            className={classNames}

            title={title}
            onClick={onClick}
            {...dataAttributes}
        />
    );
};

export default Icon;
