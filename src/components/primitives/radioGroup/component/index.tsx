import { ChangeEvent, FC, useCallback } from "react";

import { emptyFn, generateGuid, getClassName, isNullish } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import { getElementColorClassName, getSizeClassName, mapDataAttributes } from "@bbr/utils";

import "./style.scss";

import { RadioGroupProps } from "../types";

/** RadioGroup component for selecting one option from multiple */
const RadioGroup: FC<RadioGroupProps> = ({
    items,
    value,
    onValueChange = emptyFn,
    name = generateGuid(),
    size = ElementSize.Normal,
    style,
    disabled = false,
    horizontal = false,
    block = false,
    circle = true,
    withoutBorder = false,
    hasBackgroundColor = false,

    className,
    data,
    title,
}) => {
    const onChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const selectedId = event.target.value;
            const selectedItem = items.find(item => item.id === selectedId);

            if (selectedItem) {
                onValueChange(selectedItem);
            }
        },
        [items, onValueChange]
    );

    const containerClassName = getClassName([
        "bbr-radio-group",
        className,
        horizontal ? "is-horizontal" : "",
    ]);

    const radioClassName = getClassName([
        "is-checkradio",
        "bbr-radio",
        getSizeClassName(size, ElementSize.Normal),
        getElementColorClassName(style),
        circle ? "is-circle" : "",
        block ? "is-block" : "",
        withoutBorder ? "has-no-border" : "",
        hasBackgroundColor ? "has-background-color" : "",
    ]);

    const dataAttributes = mapDataAttributes(data);

    return (
        <div
            title={title}
            {...dataAttributes}
            className={containerClassName}
        >
            {items.map((item) => {
                const itemId = `${name}-${item.id}`;
                const isDisabled = disabled || item.disabled;
                const isChecked = value === item.id;

                const itemDataAttributes = isNullish(item.title)
                    ? undefined
                    : { title: item.title };

                return (
                    <div
                        key={item.id}

                        className="bbr-radio-item"
                    >
                        <input
                            id={itemId}
                            name={name}
                            type="radio"
                            value={item.id}
                            checked={isChecked}
                            onChange={onChange}
                            disabled={isDisabled}
                            className={radioClassName}
                        />
                        <label
                            htmlFor={itemId}
                            {...itemDataAttributes}
                        >
                            {item.displayValue}
                        </label>
                    </div>
                );
            })}
        </div>
    );
};

export default RadioGroup;
