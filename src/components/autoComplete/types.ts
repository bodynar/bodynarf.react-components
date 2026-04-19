import { BaseInputElementProps } from "@bbr/types";

/** A single suggestion item in the AutoComplete dropdown */
export type AutoCompleteItem = {
    /** Unique identifier */
    id: string;

    /** Text displayed in the dropdown list */
    label: string;

    /** Value stored when the item is selected (defaults to `label` if omitted) */
    value?: string;
};

/** AutoComplete component props */
export type AutoCompleteProps = BaseInputElementProps<string> & {
    /** Static list of suggestion items. Used when not providing `onSearch`. */
    items?: AutoCompleteItem[];

    /**
     * Debounce delay in milliseconds before `onSearch` is called.
     * @default 300
     */
    debounce?: number;

    /** Text shown when no suggestions match the query */
    noResultsText?: string;

    /**
     * Maximum number of suggestions to display.
     * @default 8
     */
    maxSuggestions?: number;

    /**
     * Show a loading indicator while `onSearch` is in progress.
     * Controlled externally or automatically when using async `onSearch`.
     */
    isSearching?: boolean;

    /**
     * Show a clear (×) button when an item is confirmed selected.
     * Clicking it resets the input and calls `onSelect(undefined)`.
     * @default false
     */
    clearable?: boolean;

    /**
     * Called when the user types (after debounce).
     * Use this for async/server-side search.
     * Return value is set as the suggestion list.
     */
    onSearch?: (query: string) => Promise<AutoCompleteItem[]> | AutoCompleteItem[];

    /**
     * Called when the user selects a suggestion.
     * Receives the selected item.
     */
    onSelect?: (item: AutoCompleteItem | undefined) => void;

    /**
     * Called when the input value changes (raw text, before selection).
     * Compatible with the standard `onValueChange` from BaseInputElementProps.
     */
    onValueChange?: (value: string) => void;
};
