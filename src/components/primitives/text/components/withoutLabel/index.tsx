import { ChangeEvent, FC, useCallback } from "react";

import { emptyFn, generateGuid, getClassName, isNullOrUndefined } from "@bodynarf/utils";

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

    const dataAttributes = isNullOrUndefined(data)
        ? undefined
        : mapDataAttributes(data!);

    return (
        <div
            className="bbr-field field"
        >
            <div className={containerClassName}>
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
        </div>
    );
};

export default TextWithoutLabel;
