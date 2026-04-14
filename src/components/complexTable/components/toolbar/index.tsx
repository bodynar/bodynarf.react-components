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

    const className = getClassName([
        "bbr-complex-table__toolbar",
        "block",
        "columns",
        "is-vcentered",
        searchConfig.containerClassName,
    ]);

    return (
        <div className={className}>
            <div className="column">
                <Search
                    {...searchConfig?.searchProps}

                    disabled={disabled}
                    onSearch={onSearch}
                    isLoading={loading}
                    caption={searchConfig.searchPlaceholder}
                    searchType={searchConfig.searchProps?.searchType ?? "byTyping"}
                />
            </div>
        </div>
    );
};

export default ComplexTableToolbar;
