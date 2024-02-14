import { BaseElementProps, ElementSize } from "@bbr/components";

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

    /** Control name. If empty - will be replaced by random guid */
    name?: string;

    /** Size of search bar */
    size?: ElementSize;

    /** Should search bar be rounded */
    rounded?: boolean;

    /** Is search bar disabled */
    disabled?: boolean;

    /** Should loading icon be displayed in search bar */
    isLoading?: boolean;
}
