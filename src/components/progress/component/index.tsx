import { FC } from "react";

import { getClassName, isNullish } from "@bodynarf/utils";

import { ElementColor, ElementSize } from "@bbr/types";
import { getElementColorClassName, getSizeClassName, mapDataAttributes } from "@bbr/utils";

import "./style.scss";

import { ProgressProps } from "../types";

/** Progress/Loader component */
const Progress: FC<ProgressProps> = ({
    value,
    min = 0,
    max = 100,
    size = ElementSize.Normal,
    color = ElementColor.Primary,
    showValue = true,
    indeterminate = false,
    loadingText = "Loading...",
    animated = true,

    className, title, data,
}) => {
    if (indeterminate) {
        const elClassName = getClassName([
            "bbr-progress",
            "bbr-progress--indeterminate",
            className,
            getElementColorClassName(color),
            getSizeClassName(size),
        ]);

        const dataAttributes = mapDataAttributes(data);

        return (
            <div>
                <div
                    title={title}
                    {...dataAttributes}
                    className={elClassName}
                />
                {!!showValue && (
                    <div className="bbr-progress-value">
                        {loadingText}
                    </div>
                )}
            </div>
        );
    }

    const percentage = isNullish(value) ? 0 : Math.min(max, Math.max(min, value));
    const displayValue = Math.round(((percentage - min) / (max - min)) * 100);

    const progressValue = ((percentage - min) / (max - min)) * max;

    const elClassName = getClassName([
        "bbr-progress",
        animated ? "bbr-progress--animated" : "",
        getElementColorClassName(color),
        getSizeClassName(size),
        className,
    ]);

    const dataAttributes = mapDataAttributes(data);

    return (
        <div>
            {animated ? (
                <div
                    title={title}
                    data-min={min}
                    data-max={max}
                    {...dataAttributes}
                    className={elClassName}
                    data-value={progressValue}
                >
                    <div
                        className="bbr-progress-fill"
                        style={{
                            width: `${(progressValue / max) * 100}%`
                        }}
                    />
                </div>
            ) : (
                <progress
                    max={max}
                    title={title}
                    data-min={min}
                    {...dataAttributes}
                    value={progressValue}
                    className={elClassName}
                />
            )}
            {!!showValue && (
                <div className="bbr-progress-value">
                    {displayValue}
                    %
                </div>
            )}
        </div>
    );
};

export default Progress;
