import { useCallback } from "react";

import { getClassName, isNullOrUndefined } from "@bodynarf/utils";

import { ElementPosition } from "@bbr/types";
import Checkbox from "@bbr/components/primitives/checkbox";
import Icon from "@bbr/components/icon";

import { MultiselectItem as MultiselectItemModel } from "../../";

/** Multiselect item props */
interface MultiselectItemProps {
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
}

/** Single item in multiselect component */
const MultiselectItem = ({
    item, selected, rootId,
    onItemClick, onChange,
}: MultiselectItemProps): JSX.Element => {
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

    if (!isNullOrUndefined(item.icon)) {
        return <MultiselectItemWithIcon
            item={item}
            rootId={rootId}
            onChange={onChange}
            selected={selected}
            onItemClick={onItemClick}
        />;
    }

    const className = getClassName([
        "bbr-dropdown-item",
        "dropdown-item",
        selected ? "is-active" : "",
        "is-flex",
    ]);

    return (
        <li
            className={className}
            onClick={onClick}

            title={item.title}
            data-dropdown-id={rootId}
        >
            <Checkbox
                key={item.id + selected}
                defaultValue={selected}
                onValueChange={onChecked}
            />
            {item.displayValue}
        </li>
    );
};

export default MultiselectItem;

/** Single item in multiselect component with icon */
const MultiselectItemWithIcon = ({
    item, selected, rootId,
    onChange, onItemClick,
}: MultiselectItemProps): JSX.Element => {
    const icon = item.icon!;

    const className = getClassName([
        "bbr-dropdown-item",
        "dropdown-item",
        selected ? "is-active" : "",
        "is-flex is-align-items-center",
    ]);

    const iconClassName = getClassName([
        icon.className,
        icon.position === ElementPosition.Right
            ? "bbr-icon--right"
            : "bbr-icon--left",
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

    if (icon.position === ElementPosition.Right) {
        return (
            <li
                onClick={onClick}
                className={className}

                title={item.title}
            >
                <Checkbox
                    key={item.id + selected}
                    defaultValue={selected}
                    onValueChange={onChecked}
                />
                {item.displayValue}
                <Icon
                    name={icon.name}
                    size={icon.size}
                    className={iconClassName}
                />
            </li>
        );
    }

    return (
        <li
            onClick={onClick}
            className={className}

            title={item.title}
            data-dropdown-id={rootId}
        >
            <Checkbox
                key={item.id + selected}
                defaultValue={selected}
                onValueChange={onChecked}
            />
            <Icon
                name={icon.name}
                size={icon.size}
                className={iconClassName}
            />
            {item.displayValue}
        </li>
    );
};
