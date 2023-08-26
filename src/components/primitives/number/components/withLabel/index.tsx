import { ChangeEvent, useCallback } from "react";

import { generateGuid, getClassName, getValueOrDefault, isStringEmpty } from "@bodynarf/utils";

import { ElementSize } from "@bbr/components";
import { getValidationValues } from "@bbr/utils";

import { NumberProps } from "@bbr/components/number";
import ComponentWithLabel from "@bbr/components/primitives/internal/componentWithLabel";

/** Number component with label */
const NumberWithLabel = ({
    onValueChange, readonly, disabled, defaultValue, validationState,
    name,
    className, size, style, rounded = false, loading = false,
    label, placeholder,
    onBlur,
    step = 1,
}: NumberProps): JSX.Element => {
    const onChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) =>
            onValueChange(isStringEmpty(event.target.value) ? undefined : +event.target.value),
        [onValueChange]
    );

    const id = name || generateGuid();
    const elSizeClassName = "is-{0}".format(getValueOrDefault(size, ElementSize.Normal));

    const [isValidationDefined, styleClassName, validationMessages] = getValidationValues(style, validationState);

    const elClassName = getClassName([
        className,
        elSizeClassName,
        rounded ? "is-rounded" : "",
        styleClassName,
        "input",
    ]);

    const inputContainerClassName = getClassName([
        "control",
        loading ? "is-loading" : "",
    ]);

    return (
        <ComponentWithLabel
            id={id}
            label={label!}
            size={getValueOrDefault(size, ElementSize.Normal)}
        >
            <div className={inputContainerClassName}>
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
                    step={step}
                />
            </div>
            {isValidationDefined && validationMessages.length > 0 &&
                <p className={`help m-help ${styleClassName}`}>{validationMessages.join("\n")}</p>
            }
        </ComponentWithLabel>
    );

    // const labelClassName = getClassName([
    //     "label",
    //     !label!.horizontal ? elSizeClassName : "",
    //     label!.className
    // ]);

    // if (label!.horizontal) {
    //     const labelContainerClassName = getClassName([
    //         "field-label",
    //         elSizeClassName,
    //         label!.horizontalContainerClassName
    //     ]);

    //     const fieldContainerClassName = getClassName([
    //         "field-body",
    //         label!.horizontalFieldContainerClassName
    //     ]);

    //     return (
    //         <div className="bbr-input field is-horizontal">
    //             <div className={labelContainerClassName}>
    //                 <label
    //                     className={labelClassName}
    //                     htmlFor={id}
    //                 >
    //                     {label!.caption}
    //                 </label>
    //             </div>
    //             <div className={fieldContainerClassName}>
    //                 <div className="field">
    //                     <div className={inputContainerClassName}>
    //                         <input
    //                             type="number"
    //                             className={elClassName}
    //                             placeholder={placeholder}
    //                             readOnly={readonly}
    //                             disabled={disabled}
    //                             defaultValue={defaultValue}
    //                             onChange={onChange}
    //                             onBlur={onBlur}
    //                             name={id}
    //                             id={id}
    //                             step={step}
    //                         />
    //                     </div>
    //                     {isValidationDefined && validationMessages.length > 0 &&
    //                         <p className={`help m-help ${styleClassName}`}>{validationMessages.join("\n")}</p>
    //                     }
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // }

    // return (
    //     <div className="bbr-input field">
    //         <label
    //             className={labelClassName}
    //             htmlFor={id}
    //         >
    //             {label!.caption}
    //         </label>
    //         <div className={inputContainerClassName}>
    //             <input
    //                 type="number"
    //                 className={elClassName}
    //                 placeholder={placeholder}
    //                 readOnly={readonly}
    //                 disabled={disabled}
    //                 defaultValue={defaultValue}
    //                 onChange={onChange}
    //                 onBlur={onBlur}
    //                 name={id}
    //                 id={id}
    //                 step={step}
    //             />
    //         </div>
    //         {isValidationDefined && validationMessages.length > 0 &&
    //             <p className={`help m-help ${styleClassName}`}>{validationMessages.join("\n")}</p>
    //         }
    //     </div>
    // );
};

export default NumberWithLabel;
