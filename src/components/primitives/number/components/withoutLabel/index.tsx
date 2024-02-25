import { ChangeEvent, useCallback } from "react";

import { generateGuid, getClassName, getValueOrDefault, isNullOrUndefined } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import { getStyleClassName, mapDataAttributes } from "@bbr/utils";

import { NumberProps } from "@bbr/components/number";
import InternalHint from "@bbr/components/primitives/internal/hint";

/** Number component without label */
const NumberWithoutLabel = ({
    onValueChange, readonly, disabled, defaultValue, validationState,
    name,
    size, style, rounded = false, loading = false,
    placeholder,
    onBlur,
    step = 1,

    className, title, data,
    hint,
}: NumberProps): JSX.Element => {
    const onChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => onValueChange(+event.target.value),
        [onValueChange]
    );

    const elClassName = getClassName([
        className,
        "is-{0}".format(getValueOrDefault(size, ElementSize.Normal)),
        rounded ? "is-rounded" : "",
        getStyleClassName(style, validationState),
        "input",
    ]);

    const containerClassName = getClassName([
        "control",
        "bbr-input",
        loading ? "is-loading" : "",
    ]);

    const id = name || generateGuid();

    const dataAttributes = isNullOrUndefined(data)
        ? undefined
        : mapDataAttributes(data!);

    return (
        <>
            <div className={containerClassName}>
                <input
                    type="number"

                    id={id}
                    name={id}
                    step={step}
                    onBlur={onBlur}
                    onChange={onChange}
                    readOnly={readonly}
                    disabled={disabled}
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
        </>
    );
};

export default NumberWithoutLabel;
