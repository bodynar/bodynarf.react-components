import { FC } from "react";

import { getClassName } from "@bodynarf/utils";

import { ElementColor, ElementSize } from "@bbr/types";
import { getElementColorClassName, getSizeClassName, mapDataAttributes } from "@bbr/utils";

import "./style.scss";

import { SpinnerProps } from "..";

/** Circular loading indicator */
const Spinner: FC<SpinnerProps> = ({
    size = ElementSize.Normal,
    color = ElementColor.Primary,
    overlay = false,
    loadingLabel = "Loading",

    className, title, data,
}) => {
    const dataAttributes = mapDataAttributes(data);

    const spinnerClassName = getClassName([
        "bbr-spinner",
        getElementColorClassName(color),
        getSizeClassName(size),
        className,
    ]);

    const spinner = (
        <span
            {...(!overlay ? dataAttributes : {})}

            role="status"
            aria-label={loadingLabel}
            className={spinnerClassName}
            title={!overlay ? title : undefined}
        />
    );

    if (!overlay) {
        return spinner;
    }

    return (
        <div
            {...dataAttributes}

            title={title}
            className="bbr-spinner__overlay"
        >
            {spinner}
        </div>
    );
};

export default Spinner;
