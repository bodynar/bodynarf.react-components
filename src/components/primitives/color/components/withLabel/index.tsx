import { ChangeEvent, useCallback, useEffect, useState } from "react";

import { generateGuid, getClassName, hexToRgb, isNullOrUndefined, rgbToHex, whiteHex } from "@bodynarf/utils";

import { getValidationValues, mapDataAttributes } from "@bbr";
import { ColorPickerProps } from "../..";
import ColorPickerControl from "../picker";

/** Color picker component with form label */
function ColorPickerWithLabel({
    className, title,
    showPreview,
    name,
    defaultValue, validationState,
    onValueChange,
    data,
    disabled = false, rounded = false,
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
        (): void => onValueChange.call(undefined, hexToRgb(value)!),
        [onValueChange, value]
    );

    const [isValidationDefined, styleClassName, validationMessages] = getValidationValues(undefined, validationState);

    const elClassName = getClassName([
        className,
        styleClassName,
        rounded ? "is-rounded" : "",
        "input",
    ]);

    const inputContainerClassName = getClassName([
        "control",
        "bbr-input",
        showPreview ? "column" : "",
    ]);

    const dataAttributes = isNullOrUndefined(data)
        ? undefined
        : mapDataAttributes(data!);

    const id = name || generateGuid();

    const labelClassName = getClassName([
        "label",
        label!.className
    ]);

    if (label!.horizontal) {
        const labelContainerClassName = getClassName([
            "field-label",
            "is-normal",
            label!.horizontalContainerClassName
        ]);

        const fieldContainerClassName = getClassName([
            "field-body",
            label!.horizontalFieldContainerClassName
        ]);

        return (
            <div className="bbr-color-picker bbr-input field is-horizontal">
                <div className={labelContainerClassName}>
                    <label
                        className={labelClassName}
                        htmlFor={id}
                    >
                        {label!.caption}
                    </label>
                </div>
                <div className={fieldContainerClassName}>
                    <div className="field">
                        <ColorPickerControl
                            containerClassName={inputContainerClassName}
                            className={elClassName}
                            disabled={disabled}
                            showPreview={showPreview}
                            defaultColor={defaultColor}
                            onValueChange={onChange}
                            value={value}
                            id={id}
                            title={title}
                            dataAttributes={dataAttributes}
                            isValidationDefined={isValidationDefined}
                            validationMessages={validationMessages}
                            styleClassName={styleClassName}
                        />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bbr-color-picker bbr-input field">
            <label
                className={labelClassName}
                htmlFor={id}
            >
                {label!.caption}
            </label>
            <ColorPickerControl
                containerClassName={inputContainerClassName}
                className={elClassName}
                disabled={disabled}
                showPreview={showPreview}
                defaultColor={defaultColor}
                onValueChange={onChange}
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

export default ColorPickerWithLabel;
