import { FC, useCallback } from "react";

import { getClassName, isNotNullish } from "@bodynarf/utils";

import { ElementPosition } from "@bbr/types";
import Icon from "@bbr/components/icon";
import Checkbox from "@bbr/components/primitives/checkbox";

import { MultiselectItem as MultiselectItemModel, MultiselectProps } from "../../";

/** Multiselect item props */
type MultiselectItemProps = Pick<MultiselectProps, "checkboxConfig"> & {
    rootId: string;

    /** Item to present in multiselect */
    item: MultiselectItemModel;

    /** Is item selected */
    selected: boolean;

    /**
     * Handler of item selection change event
     * @param item Current item
     * @param checked New checked state
     */
    onChange: (item: MultiselectItemModel, checked: boolean) => void;

    /**
     * Handler of item click event
     * @param item Current item
     */
    onItemClick: (item: MultiselectItemModel) => void;
};

/** Single item in multiselect component */
const MultiselectItem: FC<MultiselectItemProps> = ({
    item, selected, rootId,
    onItemClick, onChange,
    checkboxConfig,
}) => {
    const onChecked = useCallback(
        (value?: boolean) => onChange(item, value ?? false),
        [item, onChange]
    );

    const onClick = useCallback(
        (event: React.MouseEvent<HTMLLIElement>) => {
            if (event.target instanceof HTMLLIElement) {
                onItemClick(item);
            } else {
                event.stopPropagation();
            }
        },
        [item, onItemClick]
    );

    if (isNotNullish(item.icon)) {
        return (
            <MultiselectItemWithIcon
                item={item}
                rootId={rootId}
                onChange={onChange}
                selected={selected}
                onItemClick={onItemClick}
            />
        );
    }

    const className = getClassName([
        "bbr-dropdown-item",
        "dropdown-item",
        selected ? "is-active" : "",
        "is-flex",
    ]);

    return (
        <li
            onClick={onClick}
            title={item.title}
            className={className}
            data-dropdown-id={rootId}
        >
            <Checkbox
                key={item.id + selected}

                {...checkboxConfig}

                defaultValue={selected}
                onValueChange={onChecked}
                label={{ caption: item.displayValue }}
            />
        </li>
    );
};

export default MultiselectItem;

/** Single item in multiselect component with icon */
const MultiselectItemWithIcon: FC<MultiselectItemProps> = ({
    item, selected, rootId,
    onChange, onItemClick,
    checkboxConfig,
}) => {
    const icon = item.icon!;

    const listItemClassName = getClassName([
        "bbr-dropdown-item",
        "dropdown-item",
        "bbr-dropdown-item--with-icon",
        selected ? "is-active" : "",
        "is-flex",
        "is-align-items-center",
    ]);

    const onChecked = useCallback(
        (value?: boolean) => onChange(item, value ?? false),
        [item, onChange]
    );

    const onClick = useCallback(
        (event: React.MouseEvent<HTMLLIElement>) => {
            if (event.target instanceof HTMLLIElement) {
                onItemClick(item);
            } else {
                event.stopPropagation();
            }
        },
        [item, onItemClick]
    );

    const checkboxClassName = getClassName([
        checkboxConfig?.className,
        "mb-1",
        "mr-2",
    ]);

    if (icon.position === ElementPosition.Right) {
        return (
            <li
                onClick={onClick}
                title={item.title}
                className={listItemClassName}
            >
                <Checkbox
                    key={item.id + selected}

                    {...checkboxConfig}

                    defaultValue={selected}
                    onValueChange={onChecked}
                    className={checkboxClassName}
                />
                {item.displayValue}
                <Icon
                    name={icon.name}
                    size={icon.size}
                    className={icon.className}
                />
            </li>
        );
    }

    return (
        <li
            onClick={onClick}
            title={item.title}
            data-dropdown-id={rootId}
            className={listItemClassName}
        >
            <Checkbox
                key={item.id + selected}

                {...checkboxConfig}

                defaultValue={selected}
                onValueChange={onChecked}
                className={checkboxClassName}
            />
            <Icon
                name={icon.name}
                size={icon.size}
                className={icon.className}
            />
            {item.displayValue}
        </li>
    );
};
