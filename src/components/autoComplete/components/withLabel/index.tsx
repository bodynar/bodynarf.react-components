import { FC } from "react";

import { getClassName } from "@bodynarf/utils";

import { mapDataAttributes } from "@bbr/utils";

import { AutoCompleteProps } from "../..";
import { useAutoComplete } from "../../component/useAutoComplete";
import AutoCompleteDropdown from "../dropdown";
import AutoCompleteInputControl from "../inputControl";

import "../../component/style.scss";

/** Props for {@link AutoCompleteWithLabel} component */
type AutoCompleteWithLabelProps =
    & Omit<AutoCompleteProps, "label">
    & Required<Pick<AutoCompleteProps, "label">>;

/** AutoComplete with a describing label */
const AutoCompleteWithLabel: FC<AutoCompleteWithLabelProps> = ({
    label,
    placeholder,
    disabled = false,
    readonly = false,
    noResultsText = "No results",
    clearTitle,
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

    const inputControl = (
        <AutoCompleteInputControl
            isOpen={isOpen}
            inputId={inputId}
            disabled={disabled}
            readonly={readonly}
            onBlur={handleBlur}
            isInvalid={isInvalid}
            onClear={handleClear}
            onFocus={openDropdown}
            clearTitle={clearTitle}
            inputValue={inputValue}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            onChange={handleInputChange}
            showClearButton={showClearButton}
            setClearPending={setClearPending}
            isLoading={isSearching || !!hookProps.loading}
        />
    );

    const dropdown = isOpen ? (
        <AutoCompleteDropdown
            selectItem={selectItem}
            activeIndex={activeIndex}
            suggestions={suggestions}
            noResultsText={noResultsText}
        />
    ) : null;

    if (label.horizontal) {
        const innerClassName = getClassName([
            "bbr-autocomplete",
            isOpen ? "is-active" : "",
        ]);

        return (
            <div
                {...dataAttributes}

                title={title}
                ref={containerRef}
                className={getClassName(["field", "is-horizontal", className])}
            >
                <div className={getClassName(["field-label", "is-normal", label.horizontalContainerClassName])}>
                    <label
                        htmlFor={inputId}
                        title={label.title}
                        className={getClassName(["label", label.className])}
                    >
                        {label.caption}
                    </label>
                </div>
                <div className={getClassName(["field-body", label.horizontalFieldContainerClassName])}>
                    <div className="field">
                        <div className={innerClassName}>
                            {inputControl}
                            {dropdown}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div
            {...dataAttributes}

            title={title}
            ref={containerRef}
            className={getClassName(["bbr-autocomplete", isOpen ? "is-active" : "", className])}
        >
            <label
                htmlFor={inputId}
                title={label.title}
                className={getClassName(["label", label.className])}
            >
                {label.caption}
            </label>
            {inputControl}
            {dropdown}
        </div>
    );
};

export default AutoCompleteWithLabel;
