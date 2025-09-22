import { ChangeEvent, FC, useCallback } from "react";

import { emptyFn, generateGuid, getClassName, isNullOrUndefined, } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import { getSizeClassName, getStyleClassName, mapDataAttributes } from "@bbr/utils";
import InternalHint from "@bbr/internalComponent/hint";
import ComponentWithLabel from "@bbr/internalComponent/componentWithLabel";

import { TextProps } from "../..";

/** Textual input with describing label */
const TextWithLabel: FC<TextProps> = ({
    onValueChange = emptyFn, readonly, disabled, defaultValue, validationState,
    name = generateGuid(),
    size = ElementSize.Normal, style,
    rounded = false, loading = false, autoFocus = false,
    label, placeholder,
    onBlur,

    className, title, data,
    hint,
}) => {
    const onChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => onValueChange(event.target.value),
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
                    type="text"

                    id={name}
                    name={name}
                    onBlur={onBlur}
                    readOnly={readonly}
                    disabled={disabled}
                    onChange={onChange}
                    className={elClassName}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    autoFocus={autoFocus}

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

export default TextWithLabel;
