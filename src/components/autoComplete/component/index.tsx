import { ChangeEvent, FC, KeyboardEvent, useCallback, useId, useRef, useState } from "react";

import { getClassName, isNotNullish, isNullish, isNotNullOrEmpty } from "@bodynarf/utils";

import { mapDataAttributes } from "@bbr/utils";
import { useEventListener } from "@bbr/hooks";

import "./style.scss";

import { AutoCompleteItem, AutoCompleteProps } from "..";

/** Text input with a dropdown suggestions list */
const AutoComplete: FC<AutoCompleteProps> = ({
    items: staticItems,
    onSearch,
    debounce: debounceMs = 300,
    onSelect,
    onValueChange,
    noResultsText = "No results",
    maxSuggestions = 8,
    isSearching: externalSearching = false,
    clearable = false,

    defaultValue = "",
    placeholder,
    disabled = false,
    readonly = false,
    loading,
    label,

    className, title, data,
}) => {
    const [inputValue, setInputValue] = useState(defaultValue);
    const [suggestions, setSuggestions] = useState<AutoCompleteItem[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isInternalSearching, setIsInternalSearching] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);
    const [selectedItem, setSelectedItem] = useState<AutoCompleteItem | undefined>(undefined);
    const [isInvalid, setIsInvalid] = useState(false);

    const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const clearPendingRef = useRef(false);
    const id = useId();
    const inputId = `autocomplete-input-${id.replace(/:/g, "")}`;

    const isSearching = externalSearching || isInternalSearching;

    const filterStatic = useCallback((query: string): AutoCompleteItem[] => {
        if (!isNotNullOrEmpty(query) || isNullish(staticItems)) {
            return staticItems?.slice(0, maxSuggestions) ?? [];
        }

        const lower = query.toLowerCase();

        return staticItems
            .filter(item => item.label.toLowerCase().includes(lower))
            .slice(0, maxSuggestions);
    }, [staticItems, maxSuggestions]);

    const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setInputValue(query);
        onValueChange?.(query);
        setActiveIndex(-1);
        setSelectedItem(undefined);
        setIsInvalid(false);

        if (debounceTimer.current !== null) {
            clearTimeout(debounceTimer.current);
        }

        if (!isNotNullOrEmpty(query)) {
            setSuggestions([]);
            setIsOpen(false);
            onSelect?.(undefined);

            return;
        }

        debounceTimer.current = setTimeout(async () => {
            debounceTimer.current = null;

            if (isNotNullish(onSearch)) {
                setIsInternalSearching(true);

                try {
                    const results = await onSearch(query);
                    setSuggestions(results.slice(0, maxSuggestions));
                    setIsOpen(true);
                } finally {
                    setIsInternalSearching(false);
                }
            } else {
                const filtered = filterStatic(query);
                setSuggestions(filtered);
                setIsOpen(true);
            }
        }, debounceMs);
    }, [onSearch, filterStatic, debounceMs, maxSuggestions, onValueChange, onSelect]);

    const selectItem = useCallback((item: AutoCompleteItem) => {
        setInputValue(item.label);
        onValueChange?.(item.label);
        onSelect?.(item);
        setSelectedItem(item);
        setSuggestions([]);
        setIsOpen(false);
        setActiveIndex(-1);
        setIsInvalid(false);
    }, [onSelect, onValueChange]);

    const handleClear = useCallback(() => {
        setInputValue("");
        setSelectedItem(undefined);
        setSuggestions([]);
        setIsOpen(false);
        setIsInvalid(false);
        setActiveIndex(-1);
        onSelect?.(undefined);
        onValueChange?.("");
    }, [onSelect, onValueChange]);

    const handleKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
        if (!isOpen) { return; }

        if (e.key === "ArrowDown") {
            e.preventDefault();
            setActiveIndex(prev => Math.min(prev + 1, suggestions.length - 1));
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setActiveIndex(prev => Math.max(prev - 1, -1));
        } else if (e.key === "Enter" && activeIndex >= 0) {
            e.preventDefault();
            selectItem(suggestions[activeIndex]);
        } else if (e.key === "Escape") {
            setIsOpen(false);
            setActiveIndex(-1);
        }
    }, [isOpen, suggestions, activeIndex, selectItem]);

    const openDropdown = useCallback(() => {
        if (isOpen || !isNotNullOrEmpty(inputValue)) {
            return;
        }

        if (suggestions.length > 0) {
            setIsOpen(true);

            return;
        }

        if (isNullish(onSearch)) {
            const filtered = filterStatic(inputValue);
            setSuggestions(filtered);
            setIsOpen(true);

            return;
        }

        setIsInternalSearching(true);

        Promise.resolve(onSearch(inputValue))
            .then(results => {
                setSuggestions(results.slice(0, maxSuggestions));
                setIsOpen(true);
            })
            .finally(() => setIsInternalSearching(false));
    }, [isOpen, inputValue, suggestions, filterStatic, onSearch, maxSuggestions]);

    const handleBlur = useCallback(() => {
        if (clearPendingRef.current) {
            clearPendingRef.current = false;

            return;
        }

        if (debounceTimer.current !== null) {
            clearTimeout(debounceTimer.current);
            debounceTimer.current = null;
        }

        setIsOpen(false);
        setActiveIndex(-1);

        if (isNotNullish(selectedItem)) { return; }
        if (!isNotNullOrEmpty(inputValue)) { return; }

        if (isNotNullish(staticItems)) {
            const lower = inputValue.toLowerCase();
            const exactMatch = staticItems.find(item => item.label.toLowerCase() === lower);

            if (isNotNullish(exactMatch)) {
                selectItem(exactMatch);

                return;
            }
        }

        const exactInSuggestions = suggestions.find(
            item => item.label.toLowerCase() === inputValue.toLowerCase()
        );

        if (isNotNullish(exactInSuggestions)) {
            selectItem(exactInSuggestions);

            return;
        }

        if (
            suggestions.length === 1
            && suggestions[0].label.toLowerCase().startsWith(inputValue.toLowerCase())
        ) {
            selectItem(suggestions[0]);

            return;
        }

        setIsInvalid(true);
        onSelect?.(undefined);
    }, [selectedItem, inputValue, suggestions, staticItems, selectItem, onSelect]);

    const onDocumentClick = useCallback((event: MouseEvent) => {
        if (!isOpen) {
            return;
        }

        if (!containerRef.current?.contains(event.target as Node)) {
            setIsOpen(false);
            setActiveIndex(-1);
        }
    }, [isOpen]);

    useEventListener("click", onDocumentClick, document);

    const dataAttributes = mapDataAttributes(data);

    const showClearButton = clearable && isNotNullish(selectedItem) && !isSearching && !loading;

    const innerClassName = getClassName([
        "bbr-autocomplete",
        isOpen ? "is-active" : "",
    ]);

    const inputClassName = getClassName([
        "input",
        isInvalid ? "bbr-autocomplete__input--invalid" : "",
    ]);

    const controlClassName = getClassName([
        "control",
        isSearching || loading ? "is-loading" : "",
        showClearButton ? "has-icons-right" : "",
    ]);

    const inputControl = (
        <div className={controlClassName}>
            <input
                type="text"
                id={inputId}
                role="combobox"
                value={inputValue}
                autoComplete="off"
                disabled={disabled}
                readOnly={readonly}
                onBlur={handleBlur}
                onFocus={openDropdown}
                onClick={openDropdown}
                aria-expanded={isOpen}
                aria-haspopup="listbox"
                aria-autocomplete="list"
                placeholder={placeholder}
                onKeyDown={handleKeyDown}
                className={inputClassName}
                onChange={handleInputChange}
            />
            {showClearButton
                ? (
                    <span
                        role="button"
                        title="Clear"
                        onClick={handleClear}
                        className="icon is-right bbr-autocomplete__clear"
                        onPointerDown={e => {
                            e.preventDefault();
                            clearPendingRef.current = true;
                        }}
                    >
                        <i className="bi bi-x-lg" />
                    </span>
                )
                : null
            }
        </div>
    );

    const dropdown = isOpen ? (
        <div
            role="listbox"
            className="bbr-autocomplete__dropdown"
        >
            {suggestions.length === 0
                ? (
                    <div className="bbr-autocomplete__no-results">
                        {noResultsText}
                    </div>
                )
                : suggestions.map((item, idx) => (
                    <div
                        key={item.id}

                        role="option"
                        aria-selected={idx === activeIndex}
                        onMouseDown={e => {
                            e.preventDefault();
                            selectItem(item);
                        }}
                        className={getClassName([
                            "bbr-autocomplete__item",
                            idx === activeIndex ? "is-active" : "",
                        ])}
                    >
                        {item.label}
                    </div>
                ))
            }
        </div>
    ) : null;

    if (isNotNullish(label) && label.horizontal) {
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
            {isNotNullish(label) && (
                <label
                    htmlFor={inputId}
                    title={label.title}
                    className={getClassName(["label", label.className])}
                >
                    {label.caption}
                </label>
            )}
            {inputControl}
            {dropdown}
        </div>
    );
};

export default AutoComplete;
