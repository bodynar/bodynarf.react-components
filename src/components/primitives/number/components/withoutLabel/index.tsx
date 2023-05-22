import { ChangeEvent, useCallback } from "react";

import { generateGuid, getClassName, getValueOrDefault } from "@bodynarf/utils";

import { ElementSize } from "@bbr/components";
import { getValidationValues } from "@bbr/utils";

import { NumberProps } from "@bbr/components/number";

/** Number component without label */
const NumberWithoutLabel = ({
    onValueChange, readonly, disabled, defaultValue, validationState,
    name,
    className, size, style, rounded, loading,
    placeholder,
    onBlur,
    step,
}: NumberProps): JSX.Element => {
    const onChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => onValueChange(+event.target.value),
        [onValueChange]
    );

    const [isValidationDefined, styleClassName, validationMessages] = getValidationValues(style, validationState);

    const elClassName = getClassName([
        className,
        "is-{0}".format(getValueOrDefault(size, ElementSize.Normal)),
        rounded === true ? "is-rounded" : "",
        styleClassName,
        "input",
    ]);

    const containerClassName = getClassName([
        "control",
        "bbr-input",
        loading === true ? "is-loading" : "",
    ]);

    const id = name || generateGuid();

    return (
        <>
            <div className={containerClassName}>
                <input
                    type="number"
                    className={elClassName}
                    placeholder={placeholder}
                    readOnly={readonly}
                    disabled={disabled}
                    defaultValue={defaultValue}
                    onChange={onChange}
                    onBlur={onBlur}
                    name={id}
                    id={id}
                    step={step ?? 1}
                />
            </div>
            {isValidationDefined && validationMessages.length > 0 &&
                <p className={`help m-help ${styleClassName}`}>{validationMessages.join("\n")}</p>
            }
        </>
    );
};

export default NumberWithoutLabel;
