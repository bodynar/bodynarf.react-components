import { ChangeEvent, FC, useCallback, useRef, useEffect } from "react";

import { emptyFn, generateGuid, getClassName, isNotNullish, isNullish, isNullOrEmpty } from "@bodynarf/utils";

import { ElementColor, ElementSize } from "@bbr/types";
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
    size = ElementSize.Normal, style = ElementColor.Default,
    disabled = false,
    rounded = false, block = false,
    withoutBorder = false, hasBackgroundColor = false, fixBackgroundColor = false,
    isFormLabel = false,
    checked, indeterminate = false,

    className, data, title
}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const onChecked = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => onValueChange(event.target.checked),
        [onValueChange]
    );

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.indeterminate = indeterminate;
        }
    }, [indeterminate]);

    const isControlled = checked !== undefined;

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
                    {...dataAttributes}
                    {...(isControlled ? { checked } : { defaultChecked: defaultValue })}

                    id={name}
                    name={name}
                    ref={inputRef}
                    type="checkbox"
                    disabled={disabled}
                    onChange={onChecked}
                    className={elClassName}
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

    const wrapperClassName = getClassName([
        "bbr-field",
        "bbr-input",
        "field",
        isNullish(label) || isNullOrEmpty(label.caption) ? undefined : "mr-2",
    ]);

    return (
        <div
            className={wrapperClassName}
        >
            <input
                {...(isControlled ? { checked } : { defaultChecked: defaultValue })}
                {...dataAttributes}

                id={name}
                name={name}
                ref={inputRef}
                type="checkbox"
                disabled={disabled}
                onChange={onChecked}
                className={elClassName}
            />
            <label
                {...labelDataAttributes}

                htmlFor={name}
                className={labelClassName}
                title={isEmptyLabel ? title : label?.title}
            >
                {label?.caption}
            </label>
        </div>
    );
};

export default CheckBox;
