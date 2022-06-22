import { ChangeEvent, useCallback } from "react";

import { generateGuid, getClassName, isNullOrUndefined } from "@bodynarf/utils";

import './checkbox.scss';

import { BaseInputElementProps } from "../types";

export type CheckBoxProps = BaseInputElementProps<boolean> & {
    /** Is full colored checkbox */
    block?: boolean;

    /** Remove the checkbox border */
    withoutBorder?: boolean;

    /** Checkbox has background color */
    hasBackgroundColor?: boolean;

    /**
     * Set unchecked background as transparent.
     * Only used with `hasBackgroundColor` 
    */
    fixBackgroundColor?: boolean;
};

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
        "m-check-radio",
        "is-checkradio",
        hasBackgroundColor == true ? "has-background-color" : "",
        fixBackgroundColor === true && hasBackgroundColor == true ? "m-has-background-color" : "",
        isNullOrUndefined(style) ? "" : size === 'normal' ? "" : `is-${size}`,
        rounded === true ? "is-circle" : "",
        isNullOrUndefined(style) ? "" : `is-${style}`,
        block === true ? "is-block" : "",
        withoutBorder === true ? "has-no-border" : "",
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
