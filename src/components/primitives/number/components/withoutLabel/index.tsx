import { ChangeEvent, FC, useCallback } from "react";

import { emptyFn, generateGuid, getClassName, isNullOrUndefined } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import { getSizeClassName, getStyleClassName, mapDataAttributes } from "@bbr/utils";
import InternalHint from "@bbr/internalComponent/hint";

import { NumberProps } from "../..";

/** Number component without label */
const NumberWithoutLabel: FC<NumberProps> = ({
    onValueChange = emptyFn, defaultValue, validationState,
    name = generateGuid(),
    size, style,
    readonly = false, disabled = false, autoFocus = false,
    rounded = false, loading = false,
    placeholder,
    onBlur,
    step = 1,

    className, title, data,
    hint,
}) => {
    const onChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => onValueChange(+event.target.value),
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
        </div>
    );
};

export default NumberWithoutLabel;
