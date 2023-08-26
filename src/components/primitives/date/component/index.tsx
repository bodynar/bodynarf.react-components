import { ChangeEvent, useCallback } from "react";

import { generateGuid, getClassName, getValueOrDefault, isStringEmpty } from "@bodynarf/utils";

import "../../../../common.scss";

import { ElementSize } from "@bbr/components";
import { getValidationValues } from "@bbr/utils";
import ComponentWithLabel from "@bbr/components/primitives/internal/componentWithLabel";

import { DateProps } from "@bbr/components/date";

/** Date input component */
const DatePicker = ({
    defaultValue, onValueChange, readonly, disabled, validationState,
    name,
    size, className, rounded = false, loading = false, style,
    label,
    onBlur
}: DateProps): JSX.Element => {
    const onChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) =>
            onValueChange(
                isStringEmpty(event.target.value)
                    ? undefined
                    : new Date(event.target.value)
            ),
        [onValueChange]
    );

    const id = name || generateGuid();
    const elSizeClassName = "is-{0}".format(getValueOrDefault(size, ElementSize.Normal));

    const [isValidationDefined, styleClassName, validationMessages] = getValidationValues(style, validationState);

    const elClassName = getClassName([
        className,
        elSizeClassName,
        styleClassName,
        rounded ? "is-rounded" : "",
        "input",
    ]);

    const inputContainerClassName = getClassName([
        "control",
        loading ? "is-loading" : "",
    ]);
    const stringifiedDefValue = defaultValue?.toISOString().split("T")[0];

    return (
        <ComponentWithLabel
            id={id}
            label={label!}
            size={getValueOrDefault(size, ElementSize.Normal)}
        >
            <div className={inputContainerClassName}>
                <input
                    type="date"
                    className={elClassName}
                    readOnly={readonly}
                    disabled={disabled}
                    defaultValue={stringifiedDefValue}
                    onChange={onChange}
                    onBlur={onBlur}
                    name={id}
                    id={id}
                />
            </div>
            {isValidationDefined && validationMessages.length > 0 &&
                <p className={`help m-help ${styleClassName}`}>{validationMessages.join("\n")}</p>
            }
        </ComponentWithLabel>
    );
};

export default DatePicker;
