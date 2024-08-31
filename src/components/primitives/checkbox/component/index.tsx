import { ChangeEvent, useCallback } from "react";

import { generateGuid, getClassName, isNullOrUndefined } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import { mapDataAttributes } from "@bbr/utils";
import ComponentWithLabel from "@bbr/internalComponent/componentWithLabel";

import "./style.scss";
import { CheckBoxProps } from "../..";

/** Boolean input component */
const CheckBox = ({
    onValueChange, defaultValue,
    label,
    name = generateGuid(),
    size = ElementSize.Normal, style,
    disabled = false,
    rounded = false, block = false,
    withoutBorder = false, hasBackgroundColor = false, fixBackgroundColor = false,
    isFormLabel = false,

    className, title, data,
}: CheckBoxProps): JSX.Element => {
    const onChecked = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => onValueChange(event.target.checked),
        [onValueChange]
    );

    const elClassName = getClassName([
        "is-checkradio",
        "m-check-radio",
        className,
        hasBackgroundColor ? "has-background-color" : "",
        fixBackgroundColor && hasBackgroundColor ? "m-has-background-color" : "",
        size === ElementSize.Normal ? "" : `is-${size}`,
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
                id={name}
                label={{
                    ...label!,
                    horizontalContainerClassName: getClassName([label!.horizontalContainerClassName, "p-0"]),
                }}
                size={ElementSize.Normal}
            >
                <input
                    type="checkbox"

                    id={name}
                    name={name}
                    disabled={disabled}
                    onChange={onChecked}
                    className={elClassName}
                    defaultChecked={defaultValue}

                    title={title}
                    {...dataAttributes}
                />
                <label
                    className="is-empty"
                    htmlFor={name}
                >
                </label>
            </ComponentWithLabel>
        );
    }

    const labelClassName = isNullOrUndefined(label)
        ? "is-empty"
        : undefined;

    return (
        <div
            className="bbr-field bbr-input field mr-2"
        >
            <input
                type="checkbox"

                id={name}
                name={name}
                disabled={disabled}
                onChange={onChecked}
                className={elClassName}
                defaultChecked={defaultValue}

                title={title}
                {...dataAttributes}
            />
            <label
                htmlFor={name}
                className={labelClassName}
            >
                {label?.caption}
            </label>
        </div>
    );
};

export default CheckBox;
