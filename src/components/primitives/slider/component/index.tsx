import { ChangeEvent, FC, useCallback, useMemo, useState } from "react";

import { emptyFn, generateGuid, getClassName, isNullish } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import { getElementColorClassName, getSizeClassName, mapDataAttributes } from "@bbr/utils";

import "./style.scss";

import { SliderProps } from "../types";

/** Slider/Range input component */
const Slider: FC<SliderProps> = ({
    onValueChange = emptyFn,
    defaultValue,
    name = generateGuid(),
    size = ElementSize.Normal,
    style,
    disabled = false,
    min = 0,
    max = 100,
    step = 1,
    showValue = false,
    showMinMax = false,
    showProgress = true,
    vertical = false,
    verticalHeight = "200px",
    circle = false,
    valueFormatter,
    onBlur,

    className,
    data,
    title,
}) => {
    const [value, setValue] = useState<number>(defaultValue ?? min);

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

    return (
        <div
            className={containerClassName}
            style={vertical ? { height: verticalHeight } : undefined}
        >
            {showValue === true && (
                <output
                    className="bbr-slider-output"
                    style={{ left: `calc(${progressPercent}% - 1rem)` }}
                >
                    {valueFormatter ? valueFormatter(value) : value}
                </output>
            )}
            <input
                min={min}
                max={max}
                id={name}
                step={step}
                name={name}
                type="range"
                title={title}
                value={value}
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
