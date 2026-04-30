import { ChangeEvent, FC, KeyboardEvent } from "react";

import { getClassName } from "@bodynarf/utils";

import { ElementColor, ElementSize } from "@bbr/types";
import { getSizeClassName, getStyleClassName } from "@bbr/utils";
import Icon from "@bbr/components/icon";

/** Props for the AutoComplete input control */
type InputControlProps = {
    inputId: string;
    inputValue: string;
    isOpen: boolean;
    isInvalid: boolean;
    isLoading: boolean;
    showClearButton: boolean;
    disabled: boolean;
    readonly: boolean;
    rounded?: boolean;
    size?: ElementSize;
    style?: ElementColor;
    placeholder?: string;
    clearTitle?: string;

    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
    onBlur: () => void;
    onFocus: () => void;
    onClear: () => void;
    setClearPending: () => void;
};

/** Input control with optional clear button for AutoComplete */
const AutoCompleteInputControl: FC<InputControlProps> = ({
    inputId,
    inputValue,
    isOpen,
    isInvalid,
    isLoading,
    showClearButton,
    disabled,
    readonly,
    rounded = false,
    size = ElementSize.Normal,
    style,
    placeholder,
    onChange,
    onKeyDown,
    onBlur,
    onFocus,
    onClear,
    setClearPending,
    clearTitle = "Clear",
}) => {
    const inputClassName = getClassName([
        "input",
        getSizeClassName(size, ElementSize.Normal),
        getStyleClassName(style),
        rounded ? "is-rounded" : "",
        isInvalid ? "bbr-autocomplete__input--invalid" : "",
    ]);

    const controlClassName = getClassName([
        "control",
        isLoading ? "is-loading" : "",
        showClearButton ? "has-icons-right" : "",
    ]);

    const handleFocus = readonly ? undefined : onFocus;

    return (
        <div className={controlClassName}>
            <input
                type="text"
                id={inputId}
                role="combobox"
                onBlur={onBlur}
                value={inputValue}
                autoComplete="off"
                disabled={disabled}
                readOnly={readonly}
                onChange={onChange}
                onFocus={handleFocus}
                onKeyDown={onKeyDown}
                onClick={handleFocus}
                aria-expanded={isOpen}
                aria-haspopup="listbox"
                aria-autocomplete="list"
                placeholder={placeholder}
                className={inputClassName}
            />
            {showClearButton
                ? (
                    <span
                        role="button"
                        onClick={onClear}
                        title={clearTitle}
                        className="icon is-right bbr-autocomplete__clear"
                        onPointerDown={e => {
                            e.preventDefault();
                            setClearPending();
                        }}
                    >
                        <Icon name="x-lg" />
                    </span>
                )
                : null
            }
        </div>
    );
};

export default AutoCompleteInputControl;
