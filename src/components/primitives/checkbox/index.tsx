import { ChangeEvent, useCallback } from "react";

import { generateGuid, getClassName, isNullOrUndefined } from "@bodynarf/utils";

import "./checkbox.scss";

import { BaseInputElementProps } from "../types";

export interface CheckBoxProps extends BaseInputElementProps<boolean> {
    /** Is full colored checkbox */
    block?: boolean;

    /** Remove the checkbox border */
    withoutBorder?: boolean;

    /** 
     * Checkbox has background color.
     * Only works if style is set
    */
    hasBackgroundColor?: boolean;

    /**
     * Set unchecked background as transparent.
     * Only used with `hasBackgroundColor` set as `true`
     * @example `{ style: InputColor.Info, hasBackgrounColor: true, fixBackgroundColor: true }` -
    */
    fixBackgroundColor?: boolean;
};

/** Boolean input component */
const CheckBox = ({
    label,
    onValueChange, defaultValue,
    name, disabled,
    rounded, size, style, block, withoutBorder, hasBackgroundColor, fixBackgroundColor
}: CheckBoxProps): JSX.Element => {
    const onChecked = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => onValueChange(event.target.checked),
        [onValueChange]
    );

    const id = name || generateGuid();

    const className = getClassName([
        "is-checkradio",
        "m-check-radio",
        (hasBackgroundColor ?? false) ? "has-background-color" : "",
        (fixBackgroundColor ?? false) && (hasBackgroundColor ?? false) ? "m-has-background-color" : "",
        isNullOrUndefined(size) ? "" : size === "normal" ? "" : `is-${size}`,
        (rounded ?? false) ? "is-circle" : "",
        isNullOrUndefined(style) ? "" : `is-${style}`,
        (block ?? false) ? "is-block" : "",
        (withoutBorder ?? false) ? "has-no-border" : "",
    ]);

    return (
        <div className="field">
            <input
                type="checkbox"
                name={id}
                id={id}
                disabled={disabled}
                onChange={onChecked}
                className={className}
                defaultChecked={defaultValue}
            />
            <label
                htmlFor={id}
            >
                {label?.caption}
            </label>
        </div>
    );
};

export default CheckBox;
