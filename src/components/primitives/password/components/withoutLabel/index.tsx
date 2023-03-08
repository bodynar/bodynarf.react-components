import { ChangeEvent, useCallback, useState } from "react";

import { generateGuid, getClassName, getValueOrDefault } from "@bodynarf/utils";

import Icon from "../../../../icon";

import { ElementSize } from "../../../..";
import { getValidationValues } from "../../../../../utils";

import { PasswordProps } from "../..";

const PasswordWithoutLabel = ({
    onValueChange, disabled, validationState,
    name,
    className, size, style, rounded, loading,
    placeholder,
    canShowPassword,
}: PasswordProps): JSX.Element => {
    const onChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => onValueChange(event.target.value),
        [onValueChange]
    );

    const [contentIsHidden, setContentIsHidden] = useState(true);
    const onIconClick = useCallback(() => setContentIsHidden(state => !state), [setContentIsHidden]);

    const [isValidationDefined, styleClassName, validationMessages] = getValidationValues(style, validationState);
    const elSizeClassName = "is-{0}".format(getValueOrDefault(size, ElementSize.Normal));
    const id = name || generateGuid();

    const elClassName = getClassName([
        className,
        elSizeClassName,
        rounded === true ? "is-rounded" : "",
        styleClassName,
        "bbr-password",
        "input",
    ]);

    const containerClassName = getClassName([
        "control",
        loading === true ? "is-loading" : "",
        canShowPassword ? "has-icons-right" : "",
        "bbr-password__wrapper",
    ]);

    return (
        <>
            <div className={containerClassName}>
                <input
                    type={contentIsHidden ? "password" : "text"}
                    className={elClassName}
                    placeholder={placeholder}
                    disabled={disabled}
                    onChange={onChange}
                    name={id}
                    id={id}
                />
                {canShowPassword && !loading &&
                    <span
                        className={`icon is-right ${elSizeClassName}`}
                        onMouseEnter={onIconClick}
                        onMouseLeave={onIconClick}
                    >
                        <Icon
                            name={contentIsHidden ? "eye" : "eye-slash"}
                            size={ElementSize.Medium}
                        />
                    </span>
                }
            </div>
            {isValidationDefined && validationMessages.length > 0 &&
                <p className={`help m-help ${styleClassName}`}>{validationMessages.join("\n")}</p>
            }
        </>
    );
};

export default PasswordWithoutLabel;
