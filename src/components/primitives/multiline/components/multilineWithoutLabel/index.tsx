import { ChangeEvent, useCallback } from "react";

import { generateGuid, getClassName, getValueOrDefault } from "@bodynarf/utils";

import { ElementSize } from "@bbr/components";
import { getValidationValues } from "@bbr/utils";

import { MultilineProps } from "@bbr/components/multiline";

/** Multiline textual input component without describing label*/
const MultilineWithoutLabel = ({
    onValueChange, defaultValue, validationState,
    name, placeholder,
    onBlur,
    className, size, style, rounded, loading,
    fixed, rows,
}: MultilineProps): JSX.Element => {
    const onChange = useCallback(
        (event: ChangeEvent<HTMLTextAreaElement>) => onValueChange(event.target.value),
        [onValueChange]
    );

    const id = name || generateGuid();
    const [isValidationDefined, styleClassName, validationMessages] = getValidationValues(style, validationState);

    const elClassName = getClassName([
        className,
        "is-{0}".format(getValueOrDefault(size, ElementSize.Normal)),
        rounded === true ? "is-rounded" : "",
        styleClassName,
        "textarea",
        fixed === true ? "has-fixed-size" : "",
    ]);

    const inputContainerClassName = getClassName([
        "control",
        "bbr-input",
        loading === true ? "is-loading" : "",
    ]);

    return (
        <div className="field">
            <div className={inputContainerClassName}>
                <textarea
                    className={elClassName}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    onChange={onChange}
                    onBlur={onBlur}
                    id={id}
                    name={id}
                    rows={rows}
                />
            </div>
            {isValidationDefined && validationMessages.length > 0 &&
                <p className={`help m-help ${styleClassName}`}>{validationMessages.join("\n")}</p>
            }
        </div>
    );
};

export default MultilineWithoutLabel;
