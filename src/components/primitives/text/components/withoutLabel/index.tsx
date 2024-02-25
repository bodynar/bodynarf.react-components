import { ChangeEvent, useCallback } from "react";

import { generateGuid, getClassName, getValueOrDefault, isNullOrUndefined } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import { getStyleClassName, mapDataAttributes } from "@bbr/utils";

import { TextProps } from "@bbr/components/text";
import InternalHint from "@bbr/components/primitives/internal/hint";

/** Textual input without describing label */
const TextWithoutLabel = ({
    onValueChange, readonly, disabled, defaultValue, validationState,
    name,
    size, style,
    rounded = false, loading = false,
    placeholder,
    onBlur,

    className, title, data,
    hint,
}: TextProps): JSX.Element => {
    const onChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => onValueChange(event.target.value),
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
                    type="text"

                    id={id}
                    name={id}
                    onBlur={onBlur}
                    readOnly={readonly}
                    disabled={disabled}
                    onChange={onChange}
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

export default TextWithoutLabel;
