import { ChangeEvent, useCallback, useState } from "react";

import { emptyFn, generateGuid, getClassName, isNullOrUndefined } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import { getStyleClassName, mapDataAttributes } from "@bbr/utils";
import Icon from "@bbr/components/icon";
import InternalHint from "@bbr/internalComponent/hint";

import { PasswordProps } from "../..";

const PasswordWithoutLabel = ({
    defaultValue,
    onValueChange = emptyFn, disabled, validationState,
    name = generateGuid(),
    size = ElementSize.Normal, style,
    rounded = false, loading = false, autoFocus = false,
    placeholder,
    canShowPassword = false, showPasswordIconTitle = "Show password",

    className, title, data,
    hint,
}: PasswordProps): JSX.Element => {
    const onChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => onValueChange(event.target.value),
        [onValueChange]
    );

    const [contentIsHidden, setContentIsHidden] = useState(true);
    const onIconClick = useCallback(() => setContentIsHidden(state => !state), [setContentIsHidden]);

    const elSizeClassName = size === ElementSize.Normal ? "" : "is-{0}".format(size);
    const elClassName = getClassName([
        "bbr-password",
        className,
        elSizeClassName,
        rounded ? "is-rounded" : "",
        getStyleClassName(style, validationState),
        "input",
    ]);

    const containerClassName = getClassName([
        "control",
        "bbr-input",
        loading ? "is-loading" : "",
        canShowPassword ? "has-icons-right" : "",
        "bbr-password__wrapper",
    ]);

    const dataAttributes = isNullOrUndefined(data)
        ? undefined
        : mapDataAttributes(data!);

    return (
        <div
            className="bbr-field field"
        >
            <div className={containerClassName}>
                <input
                    type={contentIsHidden ? "password" : "text"}

                    id={name}
                    name={name}
                    disabled={disabled}
                    onChange={onChange}
                    autoFocus={autoFocus}
                    className={elClassName}
                    placeholder={placeholder}
                    defaultValue={defaultValue}

                    title={title}
                    {...dataAttributes}
                />
                {!!canShowPassword && !loading &&
                    <span
                        onClick={onIconClick}
                        title={showPasswordIconTitle}
                        className={`icon is-right ${elSizeClassName}`}
                    >
                        <Icon
                            size={size}
                            name={contentIsHidden ? "eye" : "eye-slash"}
                        />
                    </span>
                }
            </div>
            <InternalHint
                hint={hint}
                validationState={validationState}
            />
        </div>
    );
};

export default PasswordWithoutLabel;
