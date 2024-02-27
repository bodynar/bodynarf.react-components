import { ChangeEvent, useCallback } from "react";

import { generateGuid, getClassName, isNullOrUndefined } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import { mapDataAttributes } from "@bbr/utils";
import ComponentWithLabel from "@bbr/internalComponent/componentWithLabel";

import "./style.scss";
import { CheckBoxProps } from "../..";

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
        return (
            <ComponentWithLabel
                id={id}
                label={{
                    ...label!,
                    horizontalContainerClassName: getClassName([label!.horizontalContainerClassName, "p-0"]),
                }}
                size={ElementSize.Normal}
            >
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
            </ComponentWithLabel>
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
