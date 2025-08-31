import { FC, useCallback } from "react";

import { getClassName, isNullish, isNullOrUndefined } from "@bodynarf/utils";

import Icon from "@bbr/components/icon";

import { SortColumn, TableHeading } from "../../types";

/** Table heading cell component props */
export type TableHeaderProps = {
    /** Table heading item */
    item: TableHeading;

    /** Current sort column */
    sortColumn?: SortColumn;

    /** Cell click handler */
    onClick?: (column: TableHeading) => void;
};

/** Table heading cell */
const TableHeader: FC<TableHeaderProps> = ({
    item, sortColumn, onClick
}) => {

    const { className, caption, name, sortable } = item;

    const onHeaderClick = useCallback(
        () => {
            if (sortable && !isNullOrUndefined(onClick)) {
                onClick!(item);
            }
        },
        [onClick, item, sortable]
    );

    const containerClassName = getClassName([
        className,
        sortable ? "is-clickable" : "",
    ]);

    return (
        <th
            onClick={onHeaderClick}
            className={isNullish(containerClassName) ? undefined : containerClassName}
        >
            <span>
                {caption}
            </span>
            {!!sortable && sortColumn?.columnName === name!
                &&
                <Icon
                    className="ml-1"
                    name={`sort-alpha-down${sortColumn!.ascending ? "" : "-alt"}`}
                />
            }
        </th>
    );
};

export default TableHeader;
