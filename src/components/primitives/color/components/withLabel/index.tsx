import { ChangeEvent, useCallback, useEffect, useState } from "react";

import { generateGuid, getClassName, hexToRgb, isNullOrUndefined, rgbToHex, whiteHex } from "@bodynarf/utils";

import { ElementSize, getValidationValues, mapDataAttributes } from "@bbr";
import ComponentWithLabel from "@bbr/components/primitives/internal/componentWithLabel";

import { ColorPickerProps } from "../..";
import ColorPickerControl from "../picker";

/** Color picker component with form label */
function ColorPickerWithLabel({
    className, title,
    preview,
    name,
    defaultValue, validationState,
    onValueChange,
    data,
    disabled = false, rounded = false, size,
    label,
}: ColorPickerProps) {
    const defaultColor = isNullOrUndefined(defaultValue)
        ? whiteHex
        : rgbToHex(defaultValue!);

    const [value, setValue] = useState(defaultColor);

    const onChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>): void => setValue(event.target.value),
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

    const inputContainerClassName = getClassName([
        "control",
        "bbr-input",
    ]);

    const dataAttributes = isNullOrUndefined(data)
        ? undefined
        : mapDataAttributes(data!);

    const id = name || generateGuid();

    return (
        <ComponentWithLabel
            id={id}
            label={label!}
            size={ElementSize.Normal}
        >
            <ColorPickerControl
                id={id}
                value={value}
                title={title}
                disabled={disabled}
                previewConfig={preview}
                className={elClassName}
                onValueChange={onChange}
                defaultColor={defaultColor}
                styleClassName={styleClassName}
                dataAttributes={dataAttributes}
                validationMessages={validationMessages}
                isValidationDefined={isValidationDefined}
                containerClassName={inputContainerClassName}
            />
        </ComponentWithLabel>
    );
}

export default ColorPickerWithLabel;
