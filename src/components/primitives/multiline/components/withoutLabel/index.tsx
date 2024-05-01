import { ChangeEvent, useCallback } from "react";

import { generateGuid, getClassName, getValueOrDefault, isNullOrUndefined } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import { getStyleClassName, mapDataAttributes } from "@bbr/utils";
import InternalHint from "@bbr/internalComponent/hint";

import { MultilineProps } from "../..";

/** Multiline textual input component without describing label*/
const MultilineWithoutLabel = ({
    onValueChange, defaultValue, validationState,
    name, placeholder,
    onBlur,
    size, style, loading = false,
    fixed = false,
    rows,

    className, title, data,
    hint,
}: MultilineProps): JSX.Element => {
    const onChange = useCallback(
        (event: ChangeEvent<HTMLTextAreaElement>) => onValueChange(event.target.value),
        [onValueChange]
    );

    const id = name ?? generateGuid();

    const elClassName = getClassName([
        className,
        "is-{0}".format(getValueOrDefault(size, ElementSize.Normal)),
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
        <div className="field">
            <div className={inputContainerClassName}>
                <textarea
                    id={id}
                    name={id}
                    rows={rows}
                    onBlur={onBlur}
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
        </div>
    );
};

export default MultilineWithoutLabel;
