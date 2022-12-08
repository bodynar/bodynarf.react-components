import { ChangeEvent, useCallback } from "react";

import { generateGuid, getClassName, getValueOrDefault } from "@bodynarf/utils";

import { InputSize } from "../../../types";
import { TextProps } from "../..";
import { getValidationValues } from "../../../../../utils";

/** Textual input without describing label */
const TextWithoutLabel = ({
    onValueChange, readonly, disabled, defaultValue, validationState,
    name,
    className, size, style, rounded, loading,
    placeholder,
    onBlur,
}: TextProps): JSX.Element => {
    const onChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => onValueChange(event.target.value),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [onValueChange]
    );

    const [isValidationDefined, styleClassName, validationMessages] = getValidationValues(style, validationState);

    const elClassName = getClassName([
        className,
        "is-{0}".format(getValueOrDefault(size, InputSize.Normal)),
        rounded === true ? "is-rounded" : "",
        styleClassName,
        "input",
    ]);

    const containerClassName = getClassName([
        "control",
        loading === true ? "is-loading" : "",
    ]);

    const id = name || generateGuid();

    return (
        <>
            <div className={containerClassName}>
                <input
                    className={elClassName}
                    type="text"
                    placeholder={placeholder}
                    readOnly={readonly}
                    disabled={disabled}
                    defaultValue={defaultValue}
                    onChange={onChange}
                    onBlur={onBlur}
                    name={id}
                    id={id}
                />
            </div>
            {isValidationDefined && validationMessages.length > 0 &&
                <p className={`help m-help ${styleClassName}`}>{validationMessages.join("\n")}</p>
            }
        </>
    );
};

export default TextWithoutLabel;
