import { FC, useCallback, useMemo } from "react";

import { isNullish } from "@bodynarf/utils";
import Button, { ButtonStyle } from "@bbr/components/button";
import SplitButton, { SplitButtonProps } from "@bbr/components/splitButton";

import { ToolbarAction } from "@bbr/components/complexTable/types";

import "./styles.scss";

/** Maximum number of actions that are rendered as separate buttons */
const MAX_BUTTON_ACTIONS = 4;

/** `SelectionBar` component props */
type SelectionBarProps = {
    /** Number of selected items */
    selectedCount: number;

    /** Actions for selected items */
    selectionActions?: Array<ToolbarAction>;
};

/** Action bar for selected items */
const SelectionBar: FC<SelectionBarProps> = ({
    selectedCount,
    selectionActions,
}) => {
    const splitButtonConfig = useMemo((): SplitButtonProps | undefined => {
        if (isNullish(selectionActions) || selectionActions.length <= MAX_BUTTON_ACTIONS) {
            return undefined;
        }

        const [primary, ...rest] = selectionActions;

        return {
            caption: primary.caption,
            style: primary.style ?? ButtonStyle.Default,
            onClick: primary.onClick,
            actions: rest.map(action => ({
                id: action.id,
                caption: action.caption,
                onClick: action.onClick,
            })) as SplitButtonProps["actions"],
        };
    }, [selectionActions]);

    if (selectedCount === 0 || isNullish(selectionActions) || selectionActions.length === 0) {
        return null;
    }

    return (
        <div className="complex-table-selection-bar block">
            <div className="complex-table-selection-bar__content">
                <span className="complex-table-selection-bar__text">
                    Selected:
                    {' '}
                    {selectedCount}
                </span>
                <div className="complex-table-selection-bar__actions">
                    {selectionActions.length > MAX_BUTTON_ACTIONS
                        ? <SplitButton {...splitButtonConfig!} />
                        : selectionActions.map(action => (
                            <SelectionBarAction
                                key={action.id}

                                action={action}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

// #region Helper components

type SelectionBarActionProps = {
    /** Action */
    action: ToolbarAction;
};

// Rule disabled: Helper component for SelectionBar
// eslint-disable-next-line react/no-multi-comp
const SelectionBarAction: FC<SelectionBarActionProps> = ({ action }) => {
    const handleClick = useCallback(
        () => action.onClick(),
        [action],
    );

    return (
        <Button
            onClick={handleClick}
            caption={action.caption}
            style={action.style ?? ButtonStyle.Default}
        />
    );
};

// #endregion Helper components

export default SelectionBar;
