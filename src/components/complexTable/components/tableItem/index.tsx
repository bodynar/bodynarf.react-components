import { FC, useCallback } from "react";

import { getClassName, isNotNullish } from "@bodynarf/utils";

import { ComplexTableItem, ComplexTableItemProps } from "@bbr/components/complexTable/types";

import ActionIcon from "../actionIcon";

/** Table item component */
const ComplexTableItemCmp: FC<ComplexTableItemProps<ComplexTableItem & Record<string, unknown>>> = ({
    headings,
    item,
    actions,
    onRowClick,
}) => {
    const rowClassName = getClassName([
        item.selected ? "is-selected" : undefined,
        isNotNullish(onRowClick) ? "is-clickable" : undefined,
    ]);

    const handleRowClick = useCallback(
        () => onRowClick?.(item.id),
        [onRowClick, item.id],
    );

    return (
        <tr
            onClick={handleRowClick}
            className={rowClassName || undefined}
        >
            {headings.map((heading, index) => (
                <td key={heading.name ?? index}>
                    {heading.name ? String(item[heading.name] ?? "") : ""}
                </td>
            ))}

            {isNotNullish(actions) && actions.length > 0 && (
                <td role="row-actions">
                    <div
                        className="is-flex"
                        style={{ gap: "0.25rem" }}
                    >
                        {actions.map(action => (
                            <ActionIcon
                                key={action.name}

                                action={action}
                                itemId={item.id}
                            />
                        ))}
                    </div>
                </td>
            )}
        </tr>
    );
};

export default ComplexTableItemCmp;
