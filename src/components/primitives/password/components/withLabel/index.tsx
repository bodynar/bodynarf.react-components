import { ChangeEvent, useCallback, useState } from "react";

import { generateGuid, getClassName, getValueOrDefault } from "@bodynarf/utils";

import { getValidationValues } from "@bbr/utils";
import { ElementSize } from "@bbr/components";
import Icon from "@bbr/components/icon";

import { PasswordProps } from "@bbr/components/password";
import ComponentWithLabel from "@bbr/components/primitives/internal/componentWithLabel";

const PasswordWithLabel = ({
    onValueChange, disabled, validationState,
    name,
    className, size, style,
    rounded = false, loading = false,
    label, placeholder,
    canShowPassword = false,
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
        rounded ? "is-rounded" : "",
        styleClassName,
        "bbr-password",
        "input",
    ]);

    const inputContainerClassName = getClassName([
        "control",
        loading ? "is-loading" : "",
        canShowPassword ? "has-icons-right" : "",
        "bbr-password__wrapper",
    ]);

    return (
        <ComponentWithLabel
            id={id}
            label={label!}
            size={getValueOrDefault(size, ElementSize.Normal)}
        >
            <div className={inputContainerClassName}>
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
                        title="Show password"
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
        </ComponentWithLabel>
    );
};

export default PasswordWithLabel;
