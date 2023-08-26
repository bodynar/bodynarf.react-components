import { ChangeEvent, useCallback, useEffect, useState } from "react";

import { generateGuid, getClassName, hexToRgb, isNullOrUndefined, rgbToHex, whiteHex } from "@bodynarf/utils";

import { ElementSize, getValidationValues, mapDataAttributes } from "@bbr";
import { ColorPickerProps } from "../..";
import ColorPickerControl from "../picker";
import ComponentWithLabel from "@bbr/components/primitives/internal/componentWithLabel";

/** Color picker component with form label */
function ColorPickerWithLabel({
    className, title,
    preview,
    name,
    defaultValue, validationState,
    onValueChange,
    data,
    disabled = false, rounded = false, size,
    label,
}: ColorPickerProps) {
    const defaultColor = isNullOrUndefined(defaultValue)
        ? whiteHex
        : rgbToHex(defaultValue!);

    const [value, setValue] = useState(defaultColor);

    const onChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>): void => setValue(event.target.value),
        [setValue]
    );

    useEffect(
        () => onValueChange(hexToRgb(value)!),
        [onValueChange, value]
    );

    const [isValidationDefined, styleClassName, validationMessages] = getValidationValues(undefined, validationState);

    const elClassName = getClassName([
        className,
        styleClassName,
        rounded ? "is-rounded" : "",
        isNullOrUndefined(size) ? "" : `is-${size}`,
        "input",
    ]);

    const inputContainerClassName = getClassName([
        "control",
        "bbr-input",
    ]);

    const dataAttributes = isNullOrUndefined(data)
        ? undefined
        : mapDataAttributes(data!);

    const id = name || generateGuid();

    return (
        <ComponentWithLabel
            id={id}
            label={label!}
            size={ElementSize.Normal}
        >
            <ColorPickerControl
                id={id}
                value={value}
                title={title}
                disabled={disabled}
                previewConfig={preview}
                className={elClassName}
                onValueChange={onChange}
                defaultColor={defaultColor}
                styleClassName={styleClassName}
                dataAttributes={dataAttributes}
                validationMessages={validationMessages}
                isValidationDefined={isValidationDefined}
                containerClassName={inputContainerClassName}
            />
        </ComponentWithLabel>
    );

    // const labelClassName = getClassName([
    //     "label",
    //     label!.className
    // ]);

    // if (label!.horizontal) {
    //     const labelContainerClassName = getClassName([
    //         "field-label",
    //         "is-normal",
    //         label!.horizontalContainerClassName
    //     ]);

    //     const fieldContainerClassName = getClassName([
    //         "field-body",
    //         label!.horizontalFieldContainerClassName
    //     ]);

    //     return (
    //         <div className="bbr-color-picker bbr-input field is-horizontal">
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
    //                     <ColorPickerControl
    //                         id={id}
    //                         value={value}
    //                         title={title}
    //                         disabled={disabled}
    //                         previewConfig={preview}
    //                         className={elClassName}
    //                         onValueChange={onChange}
    //                         defaultColor={defaultColor}
    //                         styleClassName={styleClassName}
    //                         dataAttributes={dataAttributes}
    //                         validationMessages={validationMessages}
    //                         isValidationDefined={isValidationDefined}
    //                         containerClassName={inputContainerClassName}
    //                     />
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // }

    // return (
    //     <div className="bbr-color-picker bbr-input field">
    //         <label
    //             className={labelClassName}
    //             htmlFor={id}
    //         >
    //             {label!.caption}
    //         </label>
    //         <ColorPickerControl
    //             id={id}
    //             value={value}
    //             title={title}
    //             disabled={disabled}
    //             previewConfig={preview}
    //             className={elClassName}
    //             onValueChange={onChange}
    //             defaultColor={defaultColor}
    //             dataAttributes={dataAttributes}
    //             styleClassName={styleClassName}
    //             validationMessages={validationMessages}
    //             isValidationDefined={isValidationDefined}
    //             containerClassName={inputContainerClassName}
    //         />
    //     </div>
    // );
}

export default ColorPickerWithLabel;
