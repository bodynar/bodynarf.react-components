import { ChangeEvent, FC, useCallback } from "react";

import { emptyFn, generateGuid, getClassName, isNullish, isStringEmpty } from "@bodynarf/utils";

import { ElementSize, LabeledElement } from "@bbr/types";
import { getSizeClassName, getStyleClassName, mapDataAttributes } from "@bbr/utils";
import ComponentWithLabel from "@bbr/internalComponent/componentWithLabel";
import InternalHint from "@bbr/components/internal/hint";

import "./style.scss";

import { DateProps } from "../..";

/** Date input component */
const DatePicker: FC<
    Omit<DateProps, "label"> & LabeledElement
> = ({
    defaultValue, onValueChange = emptyFn, validationState,
    name = generateGuid(),
    style, size = ElementSize.Normal,
    readonly = false, disabled = false,
    rounded = false, loading = false, autoFocus = false,
    label,
    onBlur,
    onKeyDown,
    onKeyUp,

    className, title, data,
    hint,
}) => {
        const onChange = useCallback(
            (event: ChangeEvent<HTMLInputElement>) =>
                onValueChange(
                    isStringEmpty(event.target.value)
                        ? undefined
                        : new Date(event.target.value)
                ),
            [onValueChange]
        );

        const elClassName = getClassName([
            className,
            getSizeClassName(size, ElementSize.Normal),
            getStyleClassName(style, validationState),
            rounded ? "is-rounded" : "",
            "input",
        ]);

        const inputContainerClassName = getClassName([
            "control",
            loading ? "is-loading" : "",
        ]);

        const stringifiedDefValue = defaultValue?.toISOString().split("T")[0];

        const dataAttributes = isNullish(data)
            ? undefined
            : mapDataAttributes(data);

        return (
            <ComponentWithLabel
                id={name}
                size={size}
                label={label}
            >
                <div className={inputContainerClassName}>
                    <input
                        id={name}
                        type="date"
                        name={name}
                        title={title}
                        onBlur={onBlur}
                        onKeyUp={onKeyUp}
                        readOnly={readonly}
                        disabled={disabled}
                        onChange={onChange}
                        {...dataAttributes}
                        onKeyDown={onKeyDown}
                        autoFocus={autoFocus}
                        className={elClassName}
                        defaultValue={stringifiedDefValue}
                    />
                </div>
                <InternalHint
                    hint={hint}
                    validationState={validationState}
                />
            </ComponentWithLabel>
        );
    };

export default DatePicker;
