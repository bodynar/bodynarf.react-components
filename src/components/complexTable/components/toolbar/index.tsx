import { FC } from "react";

import { getClassName, isNullish } from "@bodynarf/utils";

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
    if (isNullish(searchConfig)) {
        return null;
    }

    const containerClassName = getClassName([
        "bbr-complex-table__toolbar",
        "block",
        "columns",
        "is-vcentered",
        searchConfig.containerClassName,
    ]);

    const className = getClassName([
        "column",
        searchConfig?.searchProps?.className,
    ]);

    return (
        <div className={containerClassName}>
            <Search
                {...searchConfig?.searchProps}

                disabled={disabled}
                onSearch={onSearch}
                isLoading={loading}
                className={className}
                caption={searchConfig.searchPlaceholder}
                searchType={searchConfig.searchProps?.searchType ?? "byTyping"}
            />
        </div>
    );
};

export default ComplexTableToolbar;
