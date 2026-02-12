import { ChangeEvent, FC, useCallback } from "react";

import { emptyFn, generateGuid, getClassName, isNotNullish, isNullish } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import { getElementColorClassName, getSizeClassName, mapDataAttributes } from "@bbr/utils";
import ComponentWithLabel from "@bbr/internalComponent/componentWithLabel";

import "./style.scss";

import { SwitchProps } from "..";

/** Switch/Toggle input component */
const Switch: FC<SwitchProps> = ({
    onValueChange = emptyFn, defaultValue,
    label,
    name = generateGuid(),
    size = ElementSize.Normal, style,
    disabled = false,
    rounded = false, outlined = false, thin = false, rtl = false,
    isFormLabel = false,

    className, data, title
}) => {
    const onChecked = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => onValueChange(event.target.checked),
        [onValueChange]
    );

    const elClassName = getClassName([
        "switch",
        "bbr-switch",
        className,
        getSizeClassName(size, ElementSize.Normal),
        getElementColorClassName(style),
        rounded ? "is-rounded" : "",
        outlined ? "is-outlined" : "",
        thin ? "is-thin" : "",
        rtl ? "is-rtl" : "",
    ]);

    const dataAttributes = mapDataAttributes(data);

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

export default Switch;
