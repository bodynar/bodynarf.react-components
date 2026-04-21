import { FC, MouseEvent, useCallback } from "react";

import { getClassName, isNullOrEmpty } from "@bodynarf/utils";

import { ElementColor, ElementSize } from "@bbr/types";
import Icon from "@bbr/components/icon";
import Tag from "@bbr/components/tag";

import { MultiselectItem, MultiselectTagsConfig } from "../../../../types";

/** Props type of `TagsLabel` */
type TagsLabelProps = {
    /** Items to display as tags */
    selectedItems: Array<MultiselectItem>;

    /** Caption when no items selected */
    caption: string;

    /** Tags configuration */
    tagsConfig?: MultiselectTagsConfig;

    /** Element classnames */
    className?: string;

    /** Click handler */
    onClick: (event: MouseEvent<HTMLElement>) => void;

    /**
     * Handler of removing tag (deselecting item)
     * @param item Item to deselect
     */
    onRemove: (item: MultiselectItem) => void;
};

/** Label component displaying selected items as removable tags */
const TagsLabel: FC<TagsLabelProps> = ({
    selectedItems, caption,
    tagsConfig,
    onClick, onRemove,
    className,
}) => {
    const {
        color = ElementColor.Primary,
        size = ElementSize.Normal,
        rounded = false,
        lightColor = false,
    } = tagsConfig ?? {};

    const elClassName = getClassName([
        "button",
        "dropdown-trigger",
        "bbr-dropdown__label",
        "bbr-multiselect__tags-label",
        isNullOrEmpty(className) ? "" : `${className}--md`,
    ]);

    const onLabelAreaClick = useCallback(
        (event: MouseEvent<HTMLElement>) => {
            const target = event.target as HTMLElement;

            if (
                target.classList.contains("is-delete")
                || target.closest(".tags.has-addons")
            ) {
                return;
            }

            onClick(event);
        },
        [onClick]
    );

    if (selectedItems.length === 0) {
        return (
            <label
                onClick={onClick}
                className={getClassName([
                    elClassName,
                    "bbr-dropdown__label--default",
                ])}
            >
                <span className="mr-2">
                    {caption}
                </span>
                <Icon
                    name="arrow-down"
                    size={ElementSize.Medium}
                />
            </label>
        );
    }

    return (
        <label
            className={elClassName}
            onClick={onLabelAreaClick}
        >
            <span className="bbr-multiselect__tags-container">
                {selectedItems.map(item => (
                    <TagItem
                        key={item.id}

                        item={item}
                        size={size}
                        color={color}
                        rounded={rounded}
                        onRemove={onRemove}
                        lightColor={lightColor}
                    />
                ))}
            </span>
            <Icon
                name="arrow-down"
                size={ElementSize.Medium}
            />
        </label>
    );
};

export default TagsLabel;

/** Props for a single tag item */
type TagItemProps = {
    item: MultiselectItem;
    color: ElementColor;
    size: Exclude<ElementSize, ElementSize.Small>;
    rounded: boolean;
    lightColor: boolean;
    onRemove: (item: MultiselectItem) => void;
};

const TagItem: FC<TagItemProps> = ({
    item, color, size, rounded, lightColor, onRemove,
}) => {
    const handleRemove = useCallback(
        () => onRemove(item),
        [item, onRemove]
    );

    return (
        <Tag
            size={size}
            style={color}
            rounded={rounded}
            lightColor={lightColor}
            onRemove={handleRemove}
            content={item.displayValue}
        />
    );
};
