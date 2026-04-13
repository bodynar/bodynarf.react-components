import { FC, useCallback } from "react";

import { getClassName, isNotNullish } from "@bodynarf/utils";

import { ComplexTableItem, ComplexTableItemProps } from "@bbr/components/complexTable/types";

import ComplexTableRowAction from "../rowAction";

/** {@link ComplexTableItemDefaultComponent} props */
export type ComplexTableItemDefaultComponentProps = ComplexTableItemProps<
    ComplexTableItem & Record<string, unknown>
> & {
    /** Whether the row is selected */
    selected: boolean;
};

/** Table item component */
const ComplexTableItemDefaultComponent: FC<ComplexTableItemDefaultComponentProps> = ({
    headings,
    item,
    selected,
    actions,
    onRowClick,
    selectionCell,
}) => {
    const rowClassName = getClassName([
        selected ? "is-selected" : undefined,
        isNotNullish(onRowClick) ? "is-clickable" : undefined,
    ]);

    const handleRowClick = useCallback(
        () => onRowClick?.(item.id),
        [onRowClick, item.id],
    );

    return (
        <tr
            onClick={handleRowClick}
            className={rowClassName}
        >
            {selectionCell}
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
                            <ComplexTableRowAction
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

export default ComplexTableItemDefaultComponent;
