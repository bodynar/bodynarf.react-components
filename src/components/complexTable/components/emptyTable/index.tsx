import { FC } from "react";

import Table from "@bbr/components/table";

import { ComplexTableProps } from "@bbr/components/complexTable/types";

/** Props for the {@link EmptyComplexTable} component */
type EmptyComplexTableProps = Pick<
    ComplexTableProps,
    | "headings" | "className" | "noItemsCaption"
    | "hasActiveSearch" | "tableConfig" | "searchConfig"
>;

const EmptyComplexTable: FC<EmptyComplexTableProps> = ({
    noItemsCaption, className, hasActiveSearch,
    headings, tableConfig, searchConfig
}) => (
    <div
        className={className}
    >
        <Table
            {...tableConfig}

            hoverable={false}
            headings={headings}
        >
            <tr>
                <td
                    colSpan={100}
                    className="is-borderless"
                >
                    <p className="my-4 is-block has-text-centered is-italic has-text-grey">
                        {hasActiveSearch === true
                            ? searchConfig?.noItemsFoundBySearchCaption
                            : noItemsCaption
                        }
                    </p>
                </td>
            </tr>
        </Table>
    </div>
);

/** Component for rendering an empty state of a complex table */
export default EmptyComplexTable;
