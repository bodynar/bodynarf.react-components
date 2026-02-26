import { ChangeEvent, FC, useCallback, useMemo, useState } from "react";

import { emptyFn, generateGuid, getClassName, isNullish } from "@bodynarf/utils";

import { ElementSize, ElementColor } from "@bbr/types";
import { getElementColorClassName, getSizeClassName, mapDataAttributes } from "@bbr/utils";

import "./style.scss";

import { SliderProps } from "../types";

/** Get thumb size in rem based on ElementSize */
const getThumbSize = (size: ElementSize): number => {
    switch (size) {
        case ElementSize.Small: return 0.75;
        case ElementSize.Medium: return 1.25;
        case ElementSize.Large: return 1.5;
        default: return 1; // Normal
    }
};

/** Slider/Range input component */
const Slider: FC<SliderProps> = ({
    onValueChange = emptyFn,
    defaultValue,
    name,
    size = ElementSize.Normal,
    style = ElementColor.Primary,
    disabled = false,
    min = 0, max = 100, step = 1,
    showValue = false, showMinMax = false,
    valuePosition = "top",
    vertical = false, circle = false,
    showProgress = true,
    verticalHeight = "200px",
    valueFormatter,
    onBlur,

    className,
    data,
    title,
}) => {
    const [value, setValue] = useState<number>(defaultValue ?? min);

    const elementId = useMemo(() => name ?? generateGuid(), [name]);
    const thumbSize = useMemo(() => getThumbSize(size), [size]);

    const progressPercent = useMemo(() => {
        if (max === min) {
            return 0;
        }
        return ((value - min) / (max - min)) * 100;
    }, [value, min, max]);

    const onChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const newValue = Number(event.target.value);
            setValue(newValue);
            onValueChange(newValue);
        },
        [onValueChange]
    );

    const handleBlur = useCallback(() => {
        if (isNullish(onBlur)) {
            return;
        }

        onBlur();
    }, [onBlur]);

    const elClassName = getClassName([
        "slider",
        "bbr-slider",
        className,
        getSizeClassName(size, ElementSize.Normal),
        getElementColorClassName(style),
        showProgress ? "has-output-tooltip" : "",
        circle ? "is-circle" : "",
        vertical ? "is-vertical" : "",
    ]);

    const containerClassName = getClassName([
        "bbr-slider-container",
        vertical ? "is-vertical" : "",
    ]);

    const dataAttributes = mapDataAttributes(data);

    const outputClassName = getClassName([
        "bbr-slider-output",
        getElementColorClassName(style),
        vertical ? "is-vertical" : "",
        !vertical && valuePosition === "bottom" ? "is-bottom" : "",
    ]);

    const wrapperClassName = getClassName([
        "bbr-slider-track-wrapper",
        vertical ? "is-vertical" : "",
    ]);

    return (
        <div
            className={containerClassName}
            style={vertical ? { height: verticalHeight } : undefined}
        >
            <div className={wrapperClassName}>
                {showValue === true && (
                    <output
                        className={outputClassName}
                        style={vertical
                            ? { top: `calc(${100 - progressPercent}% - ${1.5 + thumbSize / 2 - thumbSize * progressPercent / 100}rem)` }
                            : {
                                left: `calc(${progressPercent}% - ${1.5 - thumbSize / 2 + thumbSize * progressPercent / 100}rem)`,
                                marginBottom: valuePosition === "top" ? `${(thumbSize - 1) * 0.5}rem` : undefined,
                                marginTop: valuePosition === "bottom" ? `${0.5 - (thumbSize - 1) * 0.5}rem` : undefined,
                            }
                        }
                    >
                        {valueFormatter ? valueFormatter(value) : value}
                    </output>
                )}
                <input
                    min={min}
                    max={max}
                    step={step}
                    type="range"
                    title={title}
                    value={value}
                    id={elementId}
                    name={elementId}
                    {...dataAttributes}
                    disabled={disabled}
                    onBlur={handleBlur}
                    onChange={onChange}
                    className={elClassName}
                    style={{
                        ["--progress-percent" as string]: `${progressPercent}%`,
                        ...(vertical ? { height: verticalHeight } : {}),
                    }}
                />
            </div>
            {showMinMax === true && (
                <div className="bbr-slider-labels">
                    <span className="bbr-slider-label-min">
                        {min}
                    </span>
                    <span className="bbr-slider-label-max">
                        {max}
                    </span>
                </div>
            )}
        </div>
    );
};

export default Slider;
