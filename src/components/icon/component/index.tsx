import { FC } from "react";

import { getClassName, isNullish } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import { getSizeClassName, mapDataAttributes } from "@bbr/utils";

import "./style.scss";

import { IconProps } from "../..";

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
        getSizeClassName(size),
        isNullish(onClick) ? undefined : "is-clickable"
    ]);

    const dataAttributes = isNullish(data)
        ? undefined
        : mapDataAttributes(data);

    return (
        <i
            title={title}
            onClick={onClick}
            {...dataAttributes}
            className={classNames}
        />
    );
};

export default Icon;
