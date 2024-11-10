import { ChangeEvent, useCallback } from "react";

import { generateGuid, getClassName, isNullOrUndefined } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import { getStyleClassName, mapDataAttributes } from "@bbr/utils";
import InternalHint from "@bbr/internalComponent/hint";

import { MultilineProps } from "../..";

/** Multiline textual input component without describing label*/
const MultilineWithoutLabel = ({
    onValueChange, defaultValue, validationState,
    name = generateGuid(), placeholder,
    onBlur,
    size = ElementSize.Normal, style, loading = false,
    fixed = false, autoFocus = false,
    rows,

    className, title, data,
    hint,
}: MultilineProps): JSX.Element => {
    const onChange = useCallback(
        (event: ChangeEvent<HTMLTextAreaElement>) => onValueChange(event.target.value),
        [onValueChange]
    );

    const elClassName = getClassName([
        className,
        size === ElementSize.Normal ? "" : `is-${size}`,
        getStyleClassName(style, validationState),
        "textarea",
        fixed ? "has-fixed-size" : "",
    ]);

    const inputContainerClassName = getClassName([
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
            <div className={inputContainerClassName}>
                <textarea
                    id={name}
                    name={name}
                    rows={rows}
                    onBlur={onBlur}
                    onChange={onChange}
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

export default MultilineWithoutLabel;
