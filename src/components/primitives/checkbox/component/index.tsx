import { ChangeEvent, useCallback } from "react";

import { emptyFn, generateGuid, getClassName, isNullish, isNullOrUndefined } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import { mapDataAttributes } from "@bbr/utils";
import ComponentWithLabel from "@bbr/internalComponent/componentWithLabel";

import "./style.scss";

import { CheckBoxProps } from "../..";
// todo: https://justboil.github.io/bulma-checkbox/
/** Boolean input component */
const CheckBox = ({
    onValueChange = emptyFn, defaultValue,
    label,
    name = generateGuid(),
    size = ElementSize.Normal, style,
    disabled = false,
    rounded = false, block = false,
    withoutBorder = false, hasBackgroundColor = false, fixBackgroundColor = false,
    isFormLabel = false,

    className, data, title
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

    const dataAttributes = isNullish(data)
        ? undefined
        : mapDataAttributes(data);

    if (!isNullish(label) && isFormLabel) {
        return (
            <ComponentWithLabel
                id={name}
                size={size}
                label={{
                    ...label,
                    horizontal: label.horizontal ?? false,
                    horizontalContainerClassName: getClassName([label.horizontalContainerClassName, "p-0"]),
                }}
            >
                <input
                    type="checkbox"

                    id={name}
                    name={name}
                    disabled={disabled}
                    onChange={onChecked}
                    className={elClassName}
                    defaultChecked={defaultValue}

                    {...dataAttributes}
                />
                <label
                    title={title}
                    htmlFor={name}
                    className="is-empty"
                />
            </ComponentWithLabel>
        );
    }

    const isEmptyLabel = isNullOrUndefined(label);

    const labelClassName = isEmptyLabel
        ? "is-empty"
        : undefined;

    const labelDataAttributes = isNullish(label?.data)
        ? undefined
        : mapDataAttributes(label!.data);

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

                {...dataAttributes}
            />
            <label
                htmlFor={name}
                className={labelClassName}

                title={isEmptyLabel ? title : label?.title}
                {...labelDataAttributes}
            >
                {label?.caption}
            </label>
        </div>
    );
};

export default CheckBox;
