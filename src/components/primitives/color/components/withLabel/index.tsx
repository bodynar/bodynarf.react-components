import { ChangeEvent, useCallback, useEffect, useState } from "react";

import { generateGuid, getClassName, hexToRgb, isNullOrUndefined, rgbToHex, whiteHex } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import { getStyleClassName } from "@bbr/utils";
import ComponentWithLabel from "@bbr/internalComponent/componentWithLabel";

import { ColorPickerProps } from "../..";
import ColorPickerControl from "../picker";

/** Color picker component with form label */
function ColorPickerWithLabel({
    preview,
    name = generateGuid(),
    defaultValue, onValueChange,
    validationState,
    disabled = false, rounded = false, size = ElementSize.Normal,
    label,

    hint,
    className, title, data,
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

    const elClassName = getClassName([
        className,
        rounded ? "is-rounded" : "",
        getStyleClassName(undefined, validationState),
        size === ElementSize.Normal ? "" : `is-${size}`,
        "input",
    ]);

    return (
        <ComponentWithLabel
            id={name}
            size={size}
            label={label!}
        >
            <ColorPickerControl
                id={name}
                value={value}
                disabled={disabled}
                previewConfig={preview}
                onValueChange={onChange}
                defaultValue={defaultColor}
                elementClassName={elClassName}

                hint={hint}
                validationState={validationState}

                data={data}
                title={title}
            />
        </ComponentWithLabel>
    );
}

export default ColorPickerWithLabel;
