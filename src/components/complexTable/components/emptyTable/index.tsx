import { FC } from "react";

import Table, { TableProps } from "@bbr/components/table";

import { ComplexTableProps } from "@bbr/components/complexTable/types";

const EmptyComplexTable: FC<
    & Pick<ComplexTableProps, "className" | "noItemsCaption" | "hasActiveSearch">
    & Omit<TableProps, "children">
> = ({
    noItemsCaption, className, hasActiveSearch,
    ...tableProps
}) => (
        <div
            className={className}
        >
            <Table
                {...tableProps}

                fullWidth
                hoverable={false}
            >
                <tr>
                    <td
                        colSpan={100}
                        className="is-borderless"
                    >
                        <p className="my-4 is-block has-text-centered is-italic has-text-grey">
                            {hasActiveSearch === true
                                ? (
                                    <>
                                        No records found for your query.
                                        <br />
                                        Try changing or simplifying the search query
                                    </>
                                ) : noItemsCaption
                            }
                        </p>
                    </td>
                </tr>
            </Table>
        </div>
    );

export default EmptyComplexTable;
