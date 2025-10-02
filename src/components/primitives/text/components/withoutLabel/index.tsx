import { ChangeEvent, FC, useCallback } from "react";

import { emptyFn, generateGuid, getClassName } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import { getSizeClassName, getStyleClassName, mapDataAttributes } from "@bbr/utils";
import InternalHint from "@bbr/internalComponent/hint";

import { TextProps } from "../..";

/** Textual input without describing label */
const TextWithoutLabel: FC<TextProps> = ({
    onValueChange = emptyFn, defaultValue, validationState,
    readonly = false, disabled = false,
    name = generateGuid(),
    size = ElementSize.Normal, style,
    rounded = false, loading = false, autoFocus = false,
    placeholder,
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

    const containerClassName = getClassName([
        "control",
        "bbr-input",
        loading ? "is-loading" : "",
    ]);

    const dataAttributes = mapDataAttributes(data);

    return (
        <div
            className="bbr-field field"
        >
            <div className={containerClassName}>
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
        </div>
    );
};

export default TextWithoutLabel;
