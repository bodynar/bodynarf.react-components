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

        const dataAttributes = isNullish(data)
            ? undefined
            : mapDataAttributes(data!);

        return (
            <div>
                <div
                    className={elClassName}
                    title={title}
                    {...dataAttributes}
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
        className,
        getElementColorClassName(color),
        getSizeClassName(size),
        animated ? "bbr-progress--animated" : "",
    ]);

    const dataAttributes = isNullish(data)
        ? undefined
        : mapDataAttributes(data!);

    return (
        <div>
            {animated ? (
                <div
                    className={getClassName([
                        "bbr-progress",
                        "bbr-progress--custom",
                        "bbr-progress--animated",
                        className,
                        getElementColorClassName(color),
                        getSizeClassName(size),
                    ])}
                    title={title}
                    {...dataAttributes}
                    data-min={min}
                    data-max={max}
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
                    className={elClassName}
                    value={progressValue}
                    max={max}
                    title={title}
                    {...dataAttributes}
                    data-min={min}
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
