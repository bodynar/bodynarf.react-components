import { FC, useState } from "react";

import { getClassName, isNullish } from "@bodynarf/utils";

import { useDebounce, useUpdateEffect } from "@bbr/hooks";
import { ComplexTableProps } from "@bbr/components/complexTable";
import Search from "@bbr/components/search";

/** Props for the {@link ComplexTableToolbar} component */
export type ComplexTableToolbarProps =
    Pick<
        ComplexTableProps,
        | "searchConfig"
        | "loading"
        | "onSearch"
    > & {
        /** Whether the toolbar is disabled */
        disabled?: boolean;
    };

/** Complex table toolbar (selection toggle + Search) */
const ComplexTableToolbar: FC<ComplexTableToolbarProps> = ({
    searchConfig, onSearch,
    loading, disabled = false,
}) => {
    const debounceTime = searchConfig?.debounceTime ?? 0;
    const shouldDebounce = debounceTime > 0;

    const [searchQuery, setSearchQuery] = useState("");
    const debouncedQuery = useDebounce(searchQuery, shouldDebounce ? debounceTime : 0);

    useUpdateEffect(() => {
        if (shouldDebounce) {
            onSearch(debouncedQuery);
        }
    }, [debouncedQuery]);

    if (isNullish(searchConfig)) {
        return null;
    }

    const handleSearch = shouldDebounce ? setSearchQuery : onSearch;

    const containerClassName = getClassName([
        "bbr-complex-table__toolbar",
        "block",
        "columns",
        "is-vcentered",
        searchConfig.containerClassName,
    ]);

    const className = getClassName([
        "column",
        searchConfig?.wrapperClassName,
    ]);

    return (
        <div className={containerClassName}>
            <div className={className}>
                <Search
                    {...searchConfig?.searchProps}

                    disabled={disabled}
                    isLoading={loading}
                    onSearch={handleSearch}
                    caption={searchConfig.searchPlaceholder}
                    searchType={searchConfig.searchProps?.searchType ?? "byTyping"}
                />
            </div>

        </div>
    );
};

export default ComplexTableToolbar;
