import { ChangeEvent, FC, useCallback } from "react";

import { emptyFn, generateGuid, getClassName, isNotNullish, isNullish } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import { getElementColorClassName, getSizeClassName, mapDataAttributes } from "@bbr/utils";
import ComponentWithLabel from "@bbr/internalComponent/componentWithLabel";

import "./style.scss";

import { CheckBoxProps } from "../..";
// todo: https://justboil.github.io/bulma-checkbox/
/** Boolean input component */
const CheckBox: FC<CheckBoxProps> = ({
    onValueChange = emptyFn, defaultValue,
    label,
    name = generateGuid(),
    size = ElementSize.Normal, style,
    disabled = false,
    rounded = false, block = false,
    withoutBorder = false, hasBackgroundColor = false, fixBackgroundColor = false,
    isFormLabel = false,

    className, data, title
}) => {
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
        getSizeClassName(size, ElementSize.Normal),
        rounded ? "is-circle" : "",
        getElementColorClassName(style),
        block ? "is-block" : "",
        withoutBorder ? "has-no-border" : "",
    ]);

    const dataAttributes = isNullish(data)
        ? undefined
        : mapDataAttributes(data);

    if (isNotNullish(label) && isFormLabel) {
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
                    id={name}
                    name={name}
                    type="checkbox"
                    disabled={disabled}
                    {...dataAttributes}
                    onChange={onChecked}
                    className={elClassName}
                    defaultChecked={defaultValue}
                />
                <label
                    title={title}
                    htmlFor={name}
                    className="is-empty"
                />
            </ComponentWithLabel>
        );
    }

    const isEmptyLabel = isNullish(label);

    const labelClassName = isEmptyLabel
        ? "is-empty"
        : undefined;

    const labelDataAttributes = isNullish(label?.data)
        ? undefined
        : mapDataAttributes(label.data);

    return (
        <div
            className="bbr-field bbr-input field mr-2"
        >
            <input
                id={name}
                name={name}
                type="checkbox"
                disabled={disabled}
                {...dataAttributes}
                onChange={onChecked}
                className={elClassName}
                defaultChecked={defaultValue}
            />
            <label
                htmlFor={name}
                {...labelDataAttributes}
                className={labelClassName}
                title={isEmptyLabel ? title : label?.title}
            >
                {label?.caption}
            </label>
        </div>
    );
};

export default CheckBox;
