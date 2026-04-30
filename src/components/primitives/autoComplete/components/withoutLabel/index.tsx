import { FC } from "react";

import { getClassName } from "@bodynarf/utils";

import { mapDataAttributes } from "@bbr/utils";
import InternalHint from "@bbr/internalComponent/hint";

import { AutoCompleteProps } from "../..";
import { useAutoComplete } from "../../component/useAutoComplete";
import AutoCompleteDropdown from "../dropdown";
import AutoCompleteInputControl from "../inputControl";

import "../../component/style.scss";

/** AutoComplete without a label */
const AutoCompleteWithoutLabel: FC<AutoCompleteProps> = ({
    placeholder,
    disabled = false,
    readonly = false,
    rounded = false,
    size,
    style,
    noResultsText = "No results",
    clearTitle,
    hint,
    validationState,
    className, title, data,
    ...hookProps
}) => {
    const {
        inputId,
        inputValue,
        isOpen,
        isSearching,
        isInvalid,
        activeIndex,
        suggestions,
        showClearButton,
        containerRef,
        handleInputChange,
        handleKeyDown,
        handleBlur,
        handleClear,
        openDropdown,
        selectItem,
        setClearPending,
    } = useAutoComplete(hookProps);

    const dataAttributes = mapDataAttributes(data);

    return (
        <div
            {...dataAttributes}

            title={title}
            ref={containerRef}
            className={getClassName(["bbr-autocomplete", isOpen ? "is-active" : "", className])}
        >
            <AutoCompleteInputControl
                size={size}
                style={style}
                isOpen={isOpen}
                rounded={rounded}
                inputId={inputId}
                onBlur={handleBlur}
                disabled={disabled}
                readonly={readonly}
                onClear={handleClear}
                isInvalid={isInvalid}
                onFocus={openDropdown}
                clearTitle={clearTitle}
                inputValue={inputValue}
                placeholder={placeholder}
                onKeyDown={handleKeyDown}
                onChange={handleInputChange}
                setClearPending={setClearPending}
                showClearButton={showClearButton}
                isLoading={isSearching || !!hookProps.loading}
            />
            {isOpen ? (
                <AutoCompleteDropdown
                    selectItem={selectItem}
                    activeIndex={activeIndex}
                    suggestions={suggestions}
                    noResultsText={noResultsText}
                />
            ) : null}
            <InternalHint
                hint={hint}
                validationState={validationState}
            />
        </div>
    );
};

export default AutoCompleteWithoutLabel;
