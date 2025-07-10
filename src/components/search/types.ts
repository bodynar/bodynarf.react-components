import { BaseElementProps, ElementSize } from "@bbr/types";

/** Search component props type */
export interface SearchProps extends BaseElementProps {
    /**
     * Search type: by typing, starts from minimum characters to search
     * or by clicking on button next to search bar.
     * Default `is byTyping`
    */
    searchType: "byTyping" | "byButton";

    /** Search caption */
    caption: string;

    /** Search handler */
    onSearch: (searchPattern: string) => void;

    /** Initial search value */
    defaultValue?: string;

    /** Size of search bar */
    size?: ElementSize;

    /** Should search bar be rounded */
    rounded?: boolean;

    /** Is search bar disabled */
    disabled?: boolean;

    /** Should loading icon be displayed in search bar */
    isLoading?: boolean;

    /**
     * Set focus on search field after render
     *
     * !NOTE! Only 1 element at page can have this flag
     */
    autoFocus?: boolean;

    /**
     * Caption for search button.
     * Visible only in `searchType = "byButton"`
     * @default "Search"
     */
    searchButtonCaption?: string;

    /**
     * Title for search button.
     * Visible only in `searchType = "byButton"`
     */
    searchButtonTitle?: string;
}
