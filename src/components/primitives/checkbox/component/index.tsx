import { ChangeEvent, useCallback } from "react";

import { generateGuid, getClassName, isNullOrUndefined } from "@bodynarf/utils";

import { mapDataAttributes } from "@bbr/utils";

import "./style.scss";

import { CheckBoxProps } from "@bbr/components/checkbox";

/** Boolean input component */
const CheckBox = ({
    label,
    onValueChange, defaultValue,
    name, disabled,
    size, style,
    rounded = false, block = false, withoutBorder = false, hasBackgroundColor = false, fixBackgroundColor = false,
    isFormLabel = false,

    className, title, data,
}: CheckBoxProps): JSX.Element => {
    const onChecked = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => onValueChange(event.target.checked),
        [onValueChange]
    );

    const id = name ?? generateGuid();

    const elClassName = getClassName([
        "is-checkradio",
        "m-check-radio",
        className,
        hasBackgroundColor ? "has-background-color" : "",
        fixBackgroundColor && hasBackgroundColor ? "m-has-background-color" : "",
        isNullOrUndefined(size) ? "" : size === "normal" ? "" : `is-${size}`,
        rounded ? "is-circle" : "",
        isNullOrUndefined(style) ? "" : `is-${style}`,
        block ? "is-block" : "",
        withoutBorder ? "has-no-border" : "",
    ]);

    const dataAttributes = isNullOrUndefined(data)
        ? undefined
        : mapDataAttributes(data!);

    if (!isNullOrUndefined(label) && isFormLabel) {
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

                            id={id}
                            name={id}
                            disabled={disabled}
                            onChange={onChecked}
                            className={elClassName}
                            defaultChecked={defaultValue}

                            title={title}
                            {...dataAttributes}
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

                id={id}
                name={id}
                disabled={disabled}
                onChange={onChecked}
                className={elClassName}
                defaultChecked={defaultValue}

                title={title}
                {...dataAttributes}
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
