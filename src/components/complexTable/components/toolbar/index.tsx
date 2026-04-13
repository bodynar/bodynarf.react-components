import { FC } from "react";

import { ActionFn, isNotNullish } from "@bodynarf/utils";

import Button from "@bbr/components/button";
import { ComplexTableProps } from "@bbr/components/complexTable";
import Search from "@bbr/components/search";

/** Props for the {@link ComplexTableToolbar} component */
export type ComplexTableToolbarProps =
    Pick<
        ComplexTableProps,
        | "searchConfig"
        | "selectionBarConfig" | "loading"
        | "onSearch"
    > & {
        /** Whether the toolbar is disabled */
        disabled?: boolean;

        /** Toggle multi-selection mode */
        toggleMultiSelection: ActionFn;
    };

/** Complex table toolbar (selection toggle + Search) */
const ComplexTableToolbar: FC<ComplexTableToolbarProps> = ({
    searchConfig, selectionBarConfig, onSearch, toggleMultiSelection,
    loading, disabled = false,
}) => {
    const hasContent = isNotNullish(selectionBarConfig) || isNotNullish(searchConfig);

    if (!hasContent) {
        return null;
    }

    return (
        <div className="block columns is-vcentered">
            {isNotNullish(selectionBarConfig)
                ? (
                    <div className="column is-flex-grow-0">
                        <Button
                            {...selectionBarConfig.multiSelectionToggleButtonConfig}

                            disabled={disabled}
                            isLoading={loading}
                            onClick={toggleMultiSelection}
                        />
                    </div>
                )
                : <div />
            }
            {isNotNullish(searchConfig)
                ? (
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
                )
                : null
            }
        </div>
    );
};

export default ComplexTableToolbar;
