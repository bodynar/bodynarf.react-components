import { ChangeEvent, FC, useCallback, useMemo } from "react";

import { emptyFn, generateGuid, getClassName, isNullish, isStringEmpty } from "@bodynarf/utils";

import { ElementSize, LabeledElement } from "@bbr/types";
import { getSizeClassName, getStyleClassName, mapDataAttributes } from "@bbr/utils";
import ComponentWithLabel from "@bbr/internalComponent/componentWithLabel";
import InternalHint from "@bbr/components/internal/hint";

import "./style.scss";

import { TimePickerProps, TimeValue } from "../types";

/** Parse time string to TimeValue */
const parseTimeString = (timeString: string, showSeconds: boolean): TimeValue | undefined => {
    if (isStringEmpty(timeString)) {
        return undefined;
    }

    const parts = timeString.split(":");

    if (parts.length < 2) {
        return undefined;
    }

    const hours = parseInt(parts[0], 10);
    const minutes = parseInt(parts[1], 10);
    const seconds = showSeconds && parts.length >= 3 ? parseInt(parts[2], 10) : undefined;

    if (isNaN(hours) || isNaN(minutes)) {
        return undefined;
    }

    return {
        hours,
        minutes,
        seconds: showSeconds ? (seconds ?? 0) : undefined,
    };
};

/** Format TimeValue to string */
const formatTimeValue = (value: TimeValue | undefined, showSeconds: boolean): string => {
    if (isNullish(value)) {
        return "";
    }

    const hours = value.hours.toString().padStart(2, "0");
    const minutes = value.minutes.toString().padStart(2, "0");

    if (showSeconds) {
        const seconds = (value.seconds ?? 0).toString().padStart(2, "0");

        return `${hours}:${minutes}:${seconds}`;
    }

    return `${hours}:${minutes}`;
};

/** TimePicker input component */
const TimePicker: FC<
    Omit<TimePickerProps, "label"> & LabeledElement
> = ({
    defaultValue,
    onValueChange = emptyFn,
    validationState,
    name = generateGuid(),
    style,
    size = ElementSize.Normal,
    readonly = false,
    disabled = false,
    rounded = false,
    loading = false,
    autoFocus = false,
    label,
    onBlur,
    onKeyDown,
    onKeyUp,
    showSeconds = false,
    step = 1,
    min,
    max,
    placeholder,

    className,
    title,
    data,
    hint,
}) => {
    const elClassName = useMemo(() => getClassName([
        className,
        getSizeClassName(size, ElementSize.Normal),
        getStyleClassName(style, validationState),
        rounded === true ? "is-rounded" : "",
        "input",
        "bbr-time-picker",
    ]), [className, size, style, validationState, rounded]);

    const inputContainerClassName = useMemo(() => getClassName([
        "control",
        loading === true ? "is-loading" : "",
    ]), [loading]);

    const stringifiedDefValue = useMemo(
        () => formatTimeValue(defaultValue, showSeconds),
        [defaultValue, showSeconds]
    );

    const onChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const parsed = parseTimeString(event.target.value, showSeconds);

            onValueChange(parsed);
        },
        [onValueChange, showSeconds]
    );

    const dataAttributes = mapDataAttributes(data);

    return (
        <ComponentWithLabel
            id={name}
            size={size}
            label={label}
        >
            <div className={inputContainerClassName}>
                <input
                    id={name}

                    min={min}
                    max={max}
                    type="time"
                    name={name}
                    title={title}
                    onBlur={onBlur}
                    onKeyUp={onKeyUp}
                    {...dataAttributes}
                    onChange={onChange}
                    readOnly={readonly}
                    disabled={disabled}
                    onKeyDown={onKeyDown}
                    autoFocus={autoFocus}
                    className={elClassName}
                    placeholder={placeholder}
                    defaultValue={stringifiedDefValue}
                    step={showSeconds === true ? step : step * 60}
                />
            </div>
            <InternalHint
                hint={hint}
                validationState={validationState}
            />
        </ComponentWithLabel>
    );
};

export default TimePicker;
