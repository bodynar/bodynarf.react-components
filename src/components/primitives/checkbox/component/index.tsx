import { ChangeEvent, useCallback } from "react";

import { generateGuid, getClassName, isNullOrUndefined } from "@bodynarf/utils";

import "./style.scss";

import { CheckBoxProps } from "..";

/** Boolean input component */
const CheckBox = ({
    label,
    onValueChange, defaultValue,
    name, disabled,
    rounded, size, style, block, withoutBorder, hasBackgroundColor, fixBackgroundColor,
    isFormLabel,
}: CheckBoxProps): JSX.Element => {
    const onChecked = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => onValueChange(event.target.checked),
        [onValueChange]
    );

    const id = name || generateGuid();

    const className = getClassName([
        "is-checkradio",
        "m-check-radio",
        (hasBackgroundColor ?? false) ? "has-background-color" : "",
        (fixBackgroundColor ?? false) && (hasBackgroundColor ?? false) ? "m-has-background-color" : "",
        isNullOrUndefined(size) ? "" : size === "normal" ? "" : `is-${size}`,
        (rounded ?? false) ? "is-circle" : "",
        isNullOrUndefined(style) ? "" : `is-${style}`,
        (block ?? false) ? "is-block" : "",
        (withoutBorder ?? false) ? "has-no-border" : "",
    ]);

    if (!isNullOrUndefined(label) && isFormLabel === true) {
        const labelClassName = getClassName([
            "label",
            label!.className
        ]);

        const labelContainerClassName = getClassName([
            "field-label",
            label!.horizontalContainerClassName
        ]);

        const fieldContainerClassName = getClassName([
            "field-body",
            label!.horizontalFieldContainerClassName
        ]);

        return (
            <div className="bbr-input field is-horizontal">
                <div className={labelContainerClassName}>
                    <label
                        className={labelClassName}
                    >
                        {label!.caption}
                    </label>
                </div>
                <div className={fieldContainerClassName}>
                    <div className="field">
                        <input
                            type="checkbox"
                            name={id}
                            id={id}
                            disabled={disabled}
                            onChange={onChecked}
                            className={className}
                            defaultChecked={defaultValue}
                        />
                        <label
                            htmlFor={id}
                        >
                        </label>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bbr-input field">
            <input
                type="checkbox"
                name={id}
                id={id}
                disabled={disabled}
                onChange={onChecked}
                className={className}
                defaultChecked={defaultValue}
            />
            <label
                htmlFor={id}
            >
                {label?.caption}
            </label>
        </div>
    );
};

export default CheckBox;
