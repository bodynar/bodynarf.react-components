import { ChangeEvent, FC, KeyboardEvent } from "react";

import { getClassName } from "@bodynarf/utils";

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
        isInvalid ? "bbr-autocomplete__input--invalid" : "",
    ]);

    const controlClassName = getClassName([
        "control",
        isLoading ? "is-loading" : "",
        showClearButton ? "has-icons-right" : "",
    ]);

    return (
        <div className={controlClassName}>
            <input
                type="text"
                id={inputId}
                role="combobox"
                onBlur={onBlur}
                onFocus={onFocus}
                onClick={onFocus}
                value={inputValue}
                autoComplete="off"
                disabled={disabled}
                readOnly={readonly}
                onChange={onChange}
                onKeyDown={onKeyDown}
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
