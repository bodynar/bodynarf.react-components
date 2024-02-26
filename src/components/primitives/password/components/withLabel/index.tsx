import { ChangeEvent, useCallback, useState } from "react";

import { generateGuid, getClassName, getValueOrDefault, isNullOrUndefined } from "@bodynarf/utils";

import { getStyleClassName, mapDataAttributes } from "@bbr/utils";
import { ElementSize } from "@bbr/types";
import Icon from "@bbr/components/icon";

import { PasswordProps } from "@bbr/components/password";
import ComponentWithLabel from "@bbr/internalComponent/componentWithLabel";
import InternalHint from "@bbr/internalComponent/hint";

const PasswordWithLabel = ({
    onValueChange, disabled, validationState,
    name,
    size, style,
    rounded = false, loading = false,
    label, placeholder,
    canShowPassword = false,

    className, title, data,
    hint,
}: PasswordProps): JSX.Element => {
    const onChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => onValueChange(event.target.value),
        [onValueChange]
    );

    const [contentIsHidden, setContentIsHidden] = useState(true);
    const onIconClick = useCallback(() => setContentIsHidden(state => !state), [setContentIsHidden]);

    const elSizeClassName = "is-{0}".format(getValueOrDefault(size, ElementSize.Normal));
    const id = name || generateGuid();

    const elClassName = getClassName([
        "bbr-password",
        className,
        elSizeClassName,
        rounded ? "is-rounded" : "",
        getStyleClassName(style, validationState),
        "input",
    ]);

    const inputContainerClassName = getClassName([
        "control",
        loading ? "is-loading" : "",
        canShowPassword ? "has-icons-right" : "",
        "bbr-password__wrapper",
    ]);

    const dataAttributes = isNullOrUndefined(data)
        ? undefined
        : mapDataAttributes(data!);

    return (
        <ComponentWithLabel
            id={id}
            label={label!}
            size={getValueOrDefault(size, ElementSize.Normal)}
        >
            <div className={inputContainerClassName}>
                <input
                    type={contentIsHidden ? "password" : "text"}

                    id={id}
                    name={id}
                    disabled={disabled}
                    onChange={onChange}
                    className={elClassName}
                    placeholder={placeholder}

                    title={title}
                    {...dataAttributes}
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
            <InternalHint
                hint={hint}
                validationState={validationState}
            />
        </ComponentWithLabel>
    );
};

export default PasswordWithLabel;
