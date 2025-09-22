import { ChangeEvent, FC, useCallback } from "react";

import { emptyFn, generateGuid, getClassName, isNullOrUndefined, isStringEmpty } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import { getSizeClassName, getStyleClassName, mapDataAttributes } from "@bbr/utils";
import ComponentWithLabel from "@bbr/internalComponent/componentWithLabel";
import InternalHint from "@bbr/internalComponent/hint";

import { NumberProps } from "../..";

/** Number component with label */
const NumberWithLabel: FC<NumberProps> = ({
    onValueChange = emptyFn, defaultValue, validationState,
    name = generateGuid(),
    label, placeholder,
    size = ElementSize.Normal, style, rounded = false, loading = false,
    readonly = false, disabled = false, autoFocus = false,
    onBlur,
    step = 1,

    className, title, data,
    hint,
}) => {
    const onChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) =>
            onValueChange(isStringEmpty(event.target.value) ? undefined : +event.target.value),
        [onValueChange]
    );

    const elClassName = getClassName([
        className,
        getSizeClassName(size, ElementSize.Normal),
        rounded ? "is-rounded" : "",
        getStyleClassName(style, validationState),
        "input",
    ]);

    const inputContainerClassName = getClassName([
        "control",
        loading ? "is-loading" : "",
    ]);

    const dataAttributes = isNullOrUndefined(data)
        ? undefined
        : mapDataAttributes(data!);

    return (
        <ComponentWithLabel
            id={name}
            size={size}
            label={label!}
        >
            <div className={inputContainerClassName}>
                <input
                    type="number"

                    id={name}
                    name={name}
                    step={step}
                    onBlur={onBlur}
                    onChange={onChange}
                    readOnly={readonly}
                    disabled={disabled}
                    autoFocus={autoFocus}
                    className={elClassName}
                    placeholder={placeholder}
                    defaultValue={defaultValue}

                    title={title}
                    {...dataAttributes}
                />
            </div>
            <InternalHint
                hint={hint}
                validationState={validationState}
            />
        </ComponentWithLabel>
    );
};

export default NumberWithLabel;
