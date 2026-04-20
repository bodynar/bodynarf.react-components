import { FC } from "react";

import { getClassName } from "@bodynarf/utils";

import { mapDataAttributes } from "@bbr/utils";

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
    noResultsText = "No results",
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
                isOpen={isOpen}
                inputId={inputId}
                disabled={disabled}
                readonly={readonly}
                onBlur={handleBlur}
                isInvalid={isInvalid}
                onClear={handleClear}
                onFocus={openDropdown}
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
        </div>
    );
};

export default AutoCompleteWithoutLabel;
