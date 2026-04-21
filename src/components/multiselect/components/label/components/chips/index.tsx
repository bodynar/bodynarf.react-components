import { FC, MouseEvent, useCallback } from "react";

import { getClassName } from "@bodynarf/utils";

import Chip from "@bbr/components/chip";

import { MultiselectItem, MultiselectResultAsChipDisplayConfig } from "../../../../types";
import MultiselectLabel from "../../component";

/** Props type of `ChipsLabel` */
type ChipsLabelProps = {
    /** Items to display as chips */
    selectedItems: Array<MultiselectItem>;

    /** Caption when no items selected */
    caption: string;

    /** Caption when some items were selected */
    selectionCaption: string;

    /** Amount of selected items */
    selectedItemsCount: number;

    /** Can user deselect all */
    deselectable: boolean;

    /** Chip display configuration */
    chipConfig: MultiselectResultAsChipDisplayConfig;

    /** Element classnames */
    className?: string;

    /** Click handler */
    onClick: (event: MouseEvent<HTMLElement>) => void;

    /**
     * Handler of removing chip (deselecting item)
     * @param item Item to deselect
     */
    onRemove: (item: MultiselectItem) => void;
};

/** Label component with chips rendered based on position config */
const ChipsLabel: FC<ChipsLabelProps> = ({
    selectedItems, caption, selectionCaption, selectedItemsCount,
    deselectable,
    chipConfig,
    onClick, onRemove,
    className,
}) => {
    const {
        position,
        containerClassName,
        ...chipProps
    } = chipConfig;

    if (position === "label") {
        return (
            <ChipsInLabel
                caption={caption}
                onClick={onClick}
                onRemove={onRemove}
                className={className}
                chipProps={chipProps}
                selectedItems={selectedItems}
            />
        );
    }

    return (
        <ChipsBelowLabel
            caption={caption}
            onClick={onClick}
            onRemove={onRemove}
            className={className}
            chipProps={chipProps}
            deselectable={deselectable}
            selectedItems={selectedItems}
            selectionCaption={selectionCaption}
            containerClassName={containerClassName}
            selectedItemsCount={selectedItemsCount}
        />
    );
};

export default ChipsLabel;

/** Shared chip props extracted from config (without position & containerClassName) */
type SharedChipProps = Omit<MultiselectResultAsChipDisplayConfig, "position" | "containerClassName">;

/** Props for chips rendered inside the label */
type ChipsInLabelProps = {
    /** Items to display as chips */
    selectedItems: Array<MultiselectItem>;

    /** Caption when no items selected */
    caption: string;

    /** Chip appearance configuration */
    chipProps: SharedChipProps;

    /** Element classnames */
    className?: string;

    /** Click handler */
    onClick: (event: MouseEvent<HTMLElement>) => void;

    /**
     * Handler of removing chip (deselecting item)
     * @param item Item to deselect
     */
    onRemove: (item: MultiselectItem) => void;
};

/** Chips rendered inside the label trigger (auto-expanding) */
const ChipsInLabel: FC<ChipsInLabelProps> = ({
    selectedItems, caption, onClick, className, chipProps, onRemove,
}) => {
    const hasItems = selectedItems.length > 0;

    const elClassName = getClassName([
        "button",
        "dropdown-trigger",
        "bbr-dropdown__label",
        "bbr-multiselect__chips-label",
        className,
        hasItems ? "" : "bbr-dropdown__label--default",
    ]);

    return (
        <span
            role="button"
            onClick={onClick}
            className={elClassName}
        >
            {hasItems
                ? (
                    <span className="bbr-multiselect__chips-container">
                        {selectedItems.map(item => (
                            <ChipItem
                                key={item.id}

                                item={item}
                                onRemove={onRemove}
                                chipProps={chipProps}
                            />
                        ))}
                    </span>
                )
                : (
                    <span className="mr-2">
                        {caption}
                    </span>
                )
            }
        </span>
    );
};

/** Props for chips rendered below the label */
type ChipsBelowLabelProps = {
    /** Items to display as chips */
    selectedItems: Array<MultiselectItem>;

    /** Caption when no items selected */
    caption: string;

    /** Caption when some items were selected */
    selectionCaption: string;

    /** Amount of selected items */
    selectedItemsCount: number;

    /** Can user deselect all */
    deselectable: boolean;

    /** Chip appearance configuration */
    chipProps: SharedChipProps;

    /** Element classnames */
    className?: string;

    /** Custom class name for the chips container */
    containerClassName?: string;

    /** Click handler */
    onClick: (event: MouseEvent<HTMLElement>) => void;

    /**
     * Handler of removing chip (deselecting item)
     * @param item Item to deselect
     */
    onRemove: (item: MultiselectItem) => void;
};

/** Chips rendered below the standard label */
const ChipsBelowLabel: FC<ChipsBelowLabelProps> = ({
    selectedItems, caption, selectionCaption, selectedItemsCount,
    deselectable,
    onClick, onRemove,
    className, containerClassName,
    chipProps,
}) => {
    const rowClassName = getClassName([
        "bbr-multiselect__chips-row",
        containerClassName,
    ]);

    return (
        <>
            <MultiselectLabel
                caption={caption}
                onClick={onClick}
                className={className}
                deselectable={deselectable}
                selectionCaption={selectionCaption}
                selectedItemsCount={selectedItemsCount}
            />
            {selectedItems.length > 0 && (
                <div className={rowClassName}>
                    {selectedItems.map(item => (
                        <ChipItem
                            key={item.id}

                            item={item}
                            onRemove={onRemove}
                            chipProps={chipProps}
                        />
                    ))}
                </div>
            )}
        </>
    );
};

/** Props for a single chip item */
type ChipItemProps = {
    /** Multiselect item to render as chip */
    item: MultiselectItem;

    /** Chip appearance configuration */
    chipProps: SharedChipProps;

    /**
     * Handler of removing chip (deselecting item)
     * @param item Item to deselect
     */
    onRemove: (item: MultiselectItem) => void;
};

const ChipItem: FC<ChipItemProps> = ({
    item, chipProps, onRemove,
}) => {
    const handleRemove = useCallback(
        () => onRemove(item),
        [item, onRemove]
    );

    return (
        <Chip
            {...chipProps}

            onRemove={handleRemove}
            content={item.displayValue}
        />
    );
};
