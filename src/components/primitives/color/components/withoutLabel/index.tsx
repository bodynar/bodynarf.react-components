import { ChangeEvent, useCallback, useEffect, useState } from "react";

import { generateGuid, getClassName, hexToRgb, isNullOrUndefined, rgbToHex, whiteHex } from "@bodynarf/utils";

import { ColorPickerProps } from "../..";
import ColorPickerControl from "../picker";

/** Color picker component without form label */
function ColorPickerWithoutLabel({
    preview,
    name,
    defaultValue, validationState,
    onValueChange,
    disabled = false, rounded = false, size,

    className, title, data,
    hint,
}: ColorPickerProps) {
    const defaultColor = isNullOrUndefined(defaultValue)
        ? whiteHex
        : rgbToHex(defaultValue!);

    const [value, setValue] = useState(defaultColor);

    const onChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value),
        [setValue]
    );

    useEffect(
        () => onValueChange(hexToRgb(value)!),
        [onValueChange, value]
    );

    const elClassName = getClassName([
        className,
        rounded ? "is-rounded" : "",
        isNullOrUndefined(size) ? "" : `is-${size}`,
        "input",
    ]);

    const id = name ?? generateGuid();

    return (
        <div className="bbr-color-picker">
            <ColorPickerControl
                id={id}
                value={value}
                disabled={disabled}
                previewConfig={preview}
                onValueChange={onChange}
                defaultValue={defaultColor}
                elementClassName={elClassName}

                data={data}
                title={title}

                hint={hint}
                validationState={validationState}
            />
        </div>
    );
}

export default ColorPickerWithoutLabel;
