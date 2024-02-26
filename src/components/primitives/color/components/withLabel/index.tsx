import { ChangeEvent, useCallback, useEffect, useState } from "react";

import { generateGuid, getClassName, hexToRgb, isNullOrUndefined, rgbToHex, whiteHex } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import ComponentWithLabel from "@bbr/internalComponent/componentWithLabel";

import { ColorPickerProps } from "../..";
import ColorPickerControl from "../picker";

/** Color picker component with form label */
function ColorPickerWithLabel({
    preview,
    name,
    defaultValue, validationState,
    onValueChange,
    disabled = false, rounded = false, size,
    label,

    className, title, data,
    hint,
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
        isNullOrUndefined(size) ? "" : `is-${size}`,
        "input",
    ]);

    const id = name ?? generateGuid();

    return (
        <ComponentWithLabel
            id={id}
            label={label!}
            size={size ?? ElementSize.Normal}
        >
            <ColorPickerControl
                id={id}
                value={value}
                disabled={disabled}
                previewConfig={preview}
                elementClassName={elClassName}
                onValueChange={onChange}
                defaultValue={defaultColor}

                hint={hint}
                validationState={validationState}

                data={data}
                title={title}

            />
        </ComponentWithLabel>
    );
}

export default ColorPickerWithLabel;
