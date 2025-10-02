import { ChangeEvent, FC, useCallback } from "react";

import { emptyFn, generateGuid, getClassName, isNullish, } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import { getSizeClassName, getStyleClassName, mapDataAttributes } from "@bbr/utils";
import InternalHint from "@bbr/internalComponent/hint";
import ComponentWithLabel from "@bbr/internalComponent/componentWithLabel";

import { TextProps } from "../..";

type TextWithLabelProps =
    & Omit<TextProps, "label">
    & Required<Pick<TextProps, "label">>;

/** Textual input with describing label */
const TextWithLabel: FC<TextWithLabelProps> = ({
    onValueChange = emptyFn, readonly, disabled, defaultValue, validationState,
    name = generateGuid(),
    size = ElementSize.Normal, style,
    rounded = false, loading = false, autoFocus = false,
    label, placeholder,
    onBlur,
    onKeyDown,
    onKeyUp,

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
                    type="text"
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
                    placeholder={placeholder}
                    defaultValue={defaultValue}
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
