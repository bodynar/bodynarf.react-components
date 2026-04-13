import { FC } from "react";

import { isNullish } from "@bodynarf/utils";

import Button from "@bbr/components/button";
import SplitButton from "@bbr/components/splitButton";

import { ComplexTableProps } from "@bbr/components/complexTable/types";

import "./styles.scss";

/** {@link SelectionBar} component props */
export type SelectionBarProps = Pick<
    ComplexTableProps,
    | "selectionBarConfig" | "loading" | "selectedRows"
>;

/** Action bar for selected items */
const SelectionBar: FC<SelectionBarProps> = ({
    selectionBarConfig, loading, selectedRows
}) => {
    if (selectedRows?.length === 0 || isNullish(selectionBarConfig)) {
        return null;
    }

    return (
        <div className="bbr-complex-table-selection-bar block">
            <div className="bbr-complex-table-selection-bar__content">
                <span className="bbr-complex-table-selection-bar__text">
                    {selectionBarConfig.selectedCountPlaceholder(selectedRows?.length ?? 0)}
                </span>
                <div className="bbr-complex-table-selection-bar__actions">
                    {selectionBarConfig.type === "SplitButton"
                        ? (
                            <SplitButton
                                {...selectionBarConfig.splitButtonConfig}

                                isLoading={loading}
                            />)
                        : (
                            <>
                                {selectionBarConfig.actions.map((action, index) => (
                                    <Button
                                        // eslint-disable-next-line react/no-array-index-key
                                        key={`${index}__${action.style}`}

                                        {...action}
                                    />
                                ))}
                            </>
                        )
                    }
                </div>
            </div>
        </div >
    );
};

export default SelectionBar;
