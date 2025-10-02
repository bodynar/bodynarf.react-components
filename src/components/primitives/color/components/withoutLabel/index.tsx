import { ChangeEvent, FC, useCallback, useEffect, useState } from "react";

import { generateGuid, getClassName, hexToRgb, isNullish, rgbToHex, whiteHex } from "@bodynarf/utils";

import { getSizeClassName } from "@bbr/utils";

import { ColorPickerProps } from "../..";
import ColorPickerControl from "../picker";

/** Color picker component without form label */
const ColorPickerWithoutLabel: FC<ColorPickerProps> = ({
    preview,
    name = generateGuid(),
    defaultValue, onValueChange,
    validationState,
    disabled = false, rounded = false, size,
    autoFocus = false,

    className, title, data,
    hint,
}) => {
    const defaultColor = isNullish(defaultValue)
        ? whiteHex
        : rgbToHex(defaultValue);

    const [value, setValue] = useState(defaultColor);

    const onChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value),
        [setValue]
    );

    useEffect(
        () => onValueChange?.(hexToRgb(value)!),
        [onValueChange, value]
    );

    const elClassName = getClassName([
        className,
        rounded ? "is-rounded" : "",
        getSizeClassName(size),
        "input",
    ]);

    return (
        <div
            className="bbr-color-picker"
        >
            <ColorPickerControl
                id={name}
                data={data}
                hint={hint}
                value={value}
                title={title}
                disabled={disabled}
                autoFocus={autoFocus}
                previewConfig={preview}
                onValueChange={onChange}
                defaultValue={defaultColor}
                elementClassName={elClassName}
                validationState={validationState}
            />
        </div>
    );
};

export default ColorPickerWithoutLabel;
