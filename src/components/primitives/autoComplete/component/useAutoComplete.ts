import { ChangeEvent, KeyboardEvent, RefObject, useCallback, useEffect, useId, useRef, useState } from "react";

import { isNotNullish, isNullish, isNotNullOrEmpty, isUndefined } from "@bodynarf/utils";

import { useDebounce, useEventListener } from "@bbr/hooks";

import { AutoCompleteItem, AutoCompleteProps } from "..";

/** Return type of {@link useAutoComplete} */
export type UseAutoCompleteResult = {
    /** Unique HTML `id` for the `<input>` element */
    inputId: string;

    /** Current text inside the input */
    inputValue: string;

    /** Whether the suggestions dropdown is visible */
    isOpen: boolean;

    /** Whether a search operation is in progress (internal or external) */
    isSearching: boolean;

    /** Whether the current input text failed blur validation */
    isInvalid: boolean;

    /** Index of the keyboard-highlighted suggestion (`-1` when none) */
    activeIndex: number;

    /** Currently confirmed selected item, if any */
    selectedItem: AutoCompleteItem | undefined;

    /** Filtered / fetched suggestion list */
    suggestions: AutoCompleteItem[];

    /** Whether the clear (×) button should be rendered */
    showClearButton: boolean;

    /** Ref to attach to the root container element (used for outside-click detection) */
    containerRef: RefObject<HTMLDivElement>;

    /** Handler for `<input onChange>` — updates value, triggers debounced search */
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;

    /** Handler for `<input onKeyDown>` — arrow navigation, Enter, Escape */
    handleKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;

    /** Handler for `<input onBlur>` — blur validation and auto-selection */
    handleBlur: () => void;

    /** Clears the input and resets selection */
    handleClear: () => void;

    /** Opens the dropdown on focus / click */
    openDropdown: () => void;

    /** Confirms selection of a suggestion item */
    selectItem: (item: AutoCompleteItem) => void;

    /** Marks the next blur as caused by the clear button (prevents blur validation) */
    setClearPending: () => void;
};

/** Options accepted by {@link useAutoComplete} — a subset of {@link AutoCompleteProps} */
export type UseAutoCompleteOptions = Pick<
    AutoCompleteProps,
    | "items"
    | "onSearch"
    | "debounce"
    | "onSelect"
    | "onValueChange"
    | "maxSuggestions"
    | "isSearching"
    | "clearable"
    | "defaultValue"
    | "loading"
>;

/** Shared logic for AutoComplete variants */
export const useAutoComplete = ({
    items: staticItems,
    onSearch,
    debounce: debounceMs = 300,
    onSelect,
    onValueChange,
    maxSuggestions = 8,
    isSearching: externalSearching = false,
    clearable = false,
    defaultValue = "",
    loading,
}: UseAutoCompleteOptions): UseAutoCompleteResult => {
    const [inputValue, setInputValue] = useState(defaultValue);
    const [suggestions, setSuggestions] = useState<AutoCompleteItem[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isInternalSearching, setIsInternalSearching] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);
    const [selectedItem, setSelectedItem] = useState<AutoCompleteItem | undefined>(undefined);
    const [isInvalid, setIsInvalid] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);
    const clearPendingRef = useRef(false);
    const id = useId();
    const inputId = `autocomplete-input-${id.replace(/:/g, "")}`;

    const [searchQuery, setSearchQuery] = useState<string | null>(null);
    const debouncedSearchQuery = useDebounce(searchQuery, debounceMs);

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

    const resetDropdown = useCallback(() => {
        setSuggestions([]);
        setIsOpen(false);
        setActiveIndex(-1);
        setIsInvalid(false);
    }, []);

    useEffect(() => {
        if (!isNotNullOrEmpty(debouncedSearchQuery)) {
            return;
        }

        const query = debouncedSearchQuery!;
        let cancelled = false;

        if (isNotNullish(onSearch)) {
            setIsInternalSearching(true);

            Promise.resolve(onSearch(query)).then(results => {
                if (cancelled) { return; }

                setSuggestions(results.slice(0, maxSuggestions));
                setIsOpen(true);
            }).finally(() => {
                if (!cancelled) { setIsInternalSearching(false); }
            });
        } else {
            const filtered = filterStatic(query);
            setSuggestions(filtered);
            setIsOpen(true);
        }

        return () => { cancelled = true; };
    }, [debouncedSearchQuery, onSearch, filterStatic, maxSuggestions]);

    const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;

        setInputValue(query);
        onValueChange?.(query);

        setActiveIndex(-1);
        setSelectedItem(undefined);
        setIsInvalid(false);

        if (!isNotNullOrEmpty(query)) {
            setSearchQuery(null);
            resetDropdown();
            onSelect?.(undefined);

            return;
        }

        setSearchQuery(query);
    }, [onValueChange, onSelect, resetDropdown]);

    const selectItem = useCallback((item: AutoCompleteItem) => {
        if (item.label !== inputValue) {
            onValueChange?.(item.label);
            setInputValue(item.label);
            onSelect?.(item);
            setSelectedItem(item);
        }

        resetDropdown();
    }, [inputValue, onSelect, onValueChange, resetDropdown]);

    const handleClear = useCallback(() => {
        if (inputValue !== "") {
            onValueChange?.("");
        }

        setInputValue("");
        setSelectedItem(undefined);
        resetDropdown();
        onSelect?.(undefined);
    }, [inputValue, onSelect, onValueChange, resetDropdown]);

    const handleKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
        if (!isOpen) {
            return;
        }

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

        setSearchQuery(null);
        setIsOpen(false);
        setActiveIndex(-1);

        if (isNotNullish(selectedItem)) {
            return;
        }
        if (!isNotNullOrEmpty(inputValue)) {
            return;
        }

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

        if (suggestions.length === 1
            && suggestions[0].label.toLowerCase().startsWith(inputValue.toLowerCase())
        ) {
            selectItem(suggestions[0]);

            return;
        }

        if (!isUndefined(selectedItem)) {
            setIsInvalid(true);

            onSelect?.(undefined);
        }

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

    const showClearButton = clearable && isNotNullish(selectedItem) && !isSearching && !loading;

    const setClearPending = useCallback(() => {
        clearPendingRef.current = true;
    }, []);

    return {
        inputId,
        inputValue,
        isOpen,
        isSearching,
        isInvalid,
        activeIndex,
        selectedItem,
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
    };
};
