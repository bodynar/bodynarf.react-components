import { ChangeEvent, FC, useCallback, useEffect, useState } from "react";

import { generateGuid, getClassName, hexToRgb, isNullish, rgbToHex, whiteHex } from "@bodynarf/utils";

import { BaseInputWithLabel, ElementSize } from "@bbr/types";
import { getSizeClassName, getStyleClassName } from "@bbr/utils";
import ComponentWithLabel from "@bbr/internalComponent/componentWithLabel";

import { ColorPickerProps } from "../..";
import ColorPickerControl from "../picker";

/** Color picker component with form label */
const ColorPickerWithLabel: FC<BaseInputWithLabel<ColorPickerProps>> = ({
    preview,
    name = generateGuid(),
    defaultValue, onValueChange,
    validationState,
    disabled = false, rounded = false, size = ElementSize.Normal,
    autoFocus = false,
    label,

    hint,
    className, title, data,
}) => {
    const defaultColor = isNullish(defaultValue)
        ? whiteHex
        : rgbToHex(defaultValue);

    const [value, setValue] = useState(defaultColor);

    const onChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>): void => setValue(event.target.value),
        [setValue]
    );

    useEffect(
        () => onValueChange?.(hexToRgb(value)!),
        [onValueChange, value]
    );

    const elClassName = getClassName([
        className,
        rounded ? "is-rounded" : "",
        getStyleClassName(undefined, validationState),
        getSizeClassName(size),
        "input",
    ]);

    return (
        <ComponentWithLabel
            id={name}
            size={size}
            label={label}
        >
            <ColorPickerControl
                id={name}
                hint={hint}
                data={data}
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
        </ComponentWithLabel>
    );
};

export default ColorPickerWithLabel;
