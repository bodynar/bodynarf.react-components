import { ChangeEvent, useCallback, useEffect, useState } from "react";

import { generateGuid, getClassName, hexToRgb, isNullOrUndefined, rgbToHex, whiteHex } from "@bodynarf/utils";

import { getValidationValues, mapDataAttributes } from "@bbr";
import { ColorPickerProps } from "../..";
import ColorPickerControl from "../picker";

/** Color picker component without form label */
function ColorPickerWithoutLabel({
    className, title,
    showPreview,
    name,
    defaultValue, validationState,
    onChange,
    data, disabled,
}: ColorPickerProps) {
    const defaultColor = isNullOrUndefined(defaultValue)
        ? whiteHex
        : rgbToHex(defaultValue!);

    const [value, setValue] = useState(defaultColor);

    const onValueChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value),
        [setValue]
    );

    useEffect(
        () => onChange?.call(undefined, hexToRgb(value)!),
        [onChange, value]
    );

    const [isValidationDefined, styleClassName, validationMessages] = getValidationValues(undefined, validationState);

    const elClassName = getClassName([
        className,
        styleClassName,
        "input",
    ]);

    const containerClassName = getClassName([
        "control",
        "bbr-input",
        showPreview ? "column" : "",
    ]);

    const dataAttributes = isNullOrUndefined(data)
        ? undefined
        : mapDataAttributes(data!);

    const id = name || generateGuid();

    if (showPreview) {
        return (
            <div className="bbr-color-picker">
                <ColorPickerControl
                    containerClassName={containerClassName}
                    className={elClassName}
                    disabled={disabled}
                    showPreview={showPreview}
                    defaultColor={defaultColor}
                    onValueChange={onValueChange}
                    value={value}
                    id={id}
                    title={title}
                    dataAttributes={dataAttributes}
                    isValidationDefined={isValidationDefined}
                    validationMessages={validationMessages}
                    styleClassName={styleClassName}
                />
            </div>
        );
    }

    return (
        <div className="bbr-color-picker">
            <ColorPickerControl
                containerClassName={containerClassName}
                className={elClassName}
                disabled={disabled}
                showPreview={showPreview}
                defaultColor={defaultColor}
                onValueChange={onValueChange}
                value={value}
                id={id}
                title={title}
                dataAttributes={dataAttributes}
                isValidationDefined={isValidationDefined}
                validationMessages={validationMessages}
                styleClassName={styleClassName}
            />
        </div>
    );
}

export default ColorPickerWithoutLabel;