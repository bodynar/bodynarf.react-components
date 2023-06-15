import { ChangeEvent, useCallback, useEffect, useState } from "react";

import { generateGuid, getClassName, hexToRgb, isNullOrUndefined, rgbToHex, whiteHex } from "@bodynarf/utils";

import { getValidationValues, mapDataAttributes } from "@bbr";
import { ColorPickerProps } from "../..";
import ColorPickerControl from "../picker";

/** Color picker component without form label */
function ColorPickerWithoutLabel({
    className, title,
    preview,
    name,
    defaultValue, validationState,
    onValueChange,
    data,
    disabled = false, rounded = false, size,
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

    const [isValidationDefined, styleClassName, validationMessages] = getValidationValues(undefined, validationState);

    const elClassName = getClassName([
        className,
        styleClassName,
        rounded ? "is-rounded" : "",
        isNullOrUndefined(size) ? "" : `is-${size}`,
        "input",
    ]);

    const containerClassName = getClassName([
        "control",
        "bbr-input",
    ]);

    const dataAttributes = isNullOrUndefined(data)
        ? undefined
        : mapDataAttributes(data!);

    const id = name || generateGuid();

    return (
        <div className="bbr-color-picker">
            <ColorPickerControl
                id={id}
                title={title}
                value={value}
                disabled={disabled}
                className={elClassName}
                previewConfig={preview}
                onValueChange={onChange}
                defaultColor={defaultColor}
                dataAttributes={dataAttributes}
                styleClassName={styleClassName}
                validationMessages={validationMessages}
                containerClassName={containerClassName}
                isValidationDefined={isValidationDefined}
            />
        </div>
    );
}

export default ColorPickerWithoutLabel;