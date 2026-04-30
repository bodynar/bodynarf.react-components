import { FC, useCallback, useState } from "react";

import TableComponent from "@bodynarf/react.components/components/table";
import { TableHeading, TableSelectionCellProps } from "@bodynarf/react.components";

import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import ComponentUseCase from "@app/sharedComponents/useCase";
import CodeExample from "@app/sharedComponents/codeExample";

const tableHeadings: Array<TableHeading> = [
    { caption: "Name", sortable: false, name: "Name" },
    { caption: "Age", sortable: false, name: "Age" },
    { caption: "Department", sortable: false, name: "Department" },
];

const numbers = new Array(10).fill({}).map((_, i) => i + 1);

type SelectableRowProps = TableSelectionCellProps & {
    name: string;
    age: number;
    department: string;
};

const SelectableRow: FC<SelectableRowProps> = ({ selectionCell, name, age, department }) => (
    <tr
        key={name}
    >
        {selectionCell}
        <td>{name}</td>
        <td>{age}</td>
        <td>{department}</td>
    </tr>
);

/** Table component demo */
const Table: FC = () => {
    const [onHeaderClickLog, setOnHeaderClickLog] = useState("");
    const appendOnHeaderClick = useCallback(
        (item: TableHeading) => setOnHeaderClickLog(
            t => t
                + "\n"
                + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getMilliseconds()
                + " => " + `clicked on header "${item.caption} [${item.name}]"`
        ),
        []
    );

    const [selectableRows, setSelectableRows] = useState<Array<string>>([]);
    const [headerConfigRows, setHeaderConfigRows] = useState<Array<string>>([]);
    const [rowConfigRows, setRowConfigRows] = useState<Array<string>>([]);


    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Table"
                version="1.8"
                baseTypeName="BaseElementProps"
                description="A table component for displaying data in a grouped format"
            />

            <ComponentUseCase
                caption="Minimal use"
                description="To use the component, you need to provide an array of columns (headings) and the table body"
                code={
                    <CodeExample
                        code={[
                            `import { TableHeading } from "@bodynarf/react.components";`,
                            `import TableComponent from "@bodynarf/react.components/components/table";`,
                            "",
                            'const tableHeadings: Array<TableHeading> = [',
                            '    { caption: "Name", sortable: false, name: "Name" },',
                            '    { caption: "Age", sortable: false, name: "Age" },',
                            '    { caption: "Department", sortable: false, name: "Department" },',
                            '];',
                            "",
                            "<TableComponent",
                            '    headings={tableHeadings}',
                            '>',
                            '    <tr>',
                            '        <td>John Doe</td>',
                            '        <td>30</td>',
                            '        <td>Human Resources</td>',
                            '    </tr>',
                            "    /* ... */",
                            '    <tr>',
                            '        <td>John Doe</td>',
                            '        <td>30</td>',
                            '        <td>Human Resources</td>',
                            '    </tr>',
                            '</TableComponent>',
                        ].join("\n")}
                    />
                }
            >
                <TableComponent
                    headings={tableHeadings}
                >
                    {numbers.map(x =>
                        <tr key={`item-${x}`}>
                            <td>
                                John Doe
                            </td>
                            <td>
                                {x + 30}
                            </td>
                            <td>
                                Human Resources
                            </td>
                        </tr>
                    )}
                </TableComponent>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="hasBorder"
                description="Option to enable borders in table cells. Disabled by default"
                code={
                    <CodeExample
                        code={[
                            `import { TableHeading } from "@bodynarf/react.components";`,
                            `import TableComponent from "@bodynarf/react.components/components/table";`,
                            "",
                            'const tableHeadings: Array<TableHeading> = [',
                            '    { caption: "Name", sortable: false, name: "Name" },',
                            '    { caption: "Age", sortable: false, name: "Age" },',
                            '    { caption: "Department", sortable: false, name: "Department" },',
                            '];',
                            "",
                            "<TableComponent",
                            '    hasBorder',
                            '    headings={tableHeadings}',
                            '>',
                            '    <tr>',
                            '        <td>John Doe</td>',
                            '        <td>30</td>',
                            '        <td>Human Resources</td>',
                            '    </tr>',
                            "    /* ... */",
                            '    <tr>',
                            '        <td>John Doe</td>',
                            '        <td>30</td>',
                            '        <td>Human Resources</td>',
                            '    </tr>',
                            '</TableComponent>',
                        ].join("\n")}
                    />
                }
            >
                <TableComponent
                    hasBorder
                    headings={tableHeadings}
                >
                    {numbers.map(x =>
                        <tr key={`item-${x}`}>
                            <td>
                                John Doe
                            </td>
                            <td>
                                {x + 30}
                            </td>
                            <td>
                                Human Resources
                            </td>
                        </tr>
                    )}
                </TableComponent>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="hoverable"
                description="Option to highlight a row on mouse hover. Disabled by default"
                code={
                    <CodeExample
                        code={[
                            `import { TableHeading } from "@bodynarf/react.components";`,
                            `import TableComponent from "@bodynarf/react.components/components/table";`,
                            "",
                            'const tableHeadings: Array<TableHeading> = [',
                            '    { caption: "Name", sortable: false, name: "Name" },',
                            '    { caption: "Age", sortable: false, name: "Age" },',
                            '    { caption: "Department", sortable: false, name: "Department" },',
                            '];',
                            "",
                            "<TableComponent",
                            '    hoverable',
                            '    headings={tableHeadings}',
                            '>',
                            '    <tr>',
                            '        <td>John Doe</td>',
                            '        <td>30</td>',
                            '        <td>Human Resources</td>',
                            '    </tr>',
                            "    /* ... */",
                            '    <tr>',
                            '        <td>John Doe</td>',
                            '        <td>30</td>',
                            '        <td>Human Resources</td>',
                            '    </tr>',
                            '</TableComponent>',
                        ].join("\n")}
                    />
                }
            >
                <TableComponent
                    hoverable
                    headings={tableHeadings}
                >
                    {numbers.map(x =>
                        <tr key={`item-${x}`}>
                            <td>
                                John Doe
                            </td>
                            <td>
                                {x + 30}
                            </td>
                            <td>
                                Human Resources
                            </td>
                        </tr>
                    )}
                </TableComponent>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="narrow"
                description="Option to render table cells with reduced padding inside the box model. Disabled by default"
                code={
                    <CodeExample
                        code={[
                            `import { TableHeading } from "@bodynarf/react.components";`,
                            `import TableComponent from "@bodynarf/react.components/components/table";`,
                            "",
                            'const tableHeadings: Array<TableHeading> = [',
                            '    { caption: "Name", sortable: false, name: "Name" },',
                            '    { caption: "Age", sortable: false, name: "Age" },',
                            '    { caption: "Department", sortable: false, name: "Department" },',
                            '];',
                            "",
                            "<TableComponent",
                            '    narrow',
                            '    headings={tableHeadings}',
                            '>',
                            '    <tr>',
                            '        <td>John Doe</td>',
                            '        <td>30</td>',
                            '        <td>Human Resources</td>',
                            '    </tr>',
                            "    /* ... */",
                            '    <tr>',
                            '        <td>John Doe</td>',
                            '        <td>30</td>',
                            '        <td>Human Resources</td>',
                            '    </tr>',
                            '</TableComponent>',
                        ].join("\n")}
                    />
                }
            >
                <TableComponent
                    narrow
                    headings={tableHeadings}
                >
                    {numbers.map(x =>
                        <tr key={`item-${x}`}>
                            <td>
                                John Doe
                            </td>
                            <td>
                                {x + 30}
                            </td>
                            <td>
                                Human Resources
                            </td>
                        </tr>
                    )}
                </TableComponent>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="fullWidth"
                description="Option to stretch the table to the full width of the parent container. Disabled by default"
                code={
                    <CodeExample
                        code={[
                            `import { TableHeading } from "@bodynarf/react.components";`,
                            `import TableComponent from "@bodynarf/react.components/components/table";`,
                            "",
                            'const tableHeadings: Array<TableHeading> = [',
                            '    { caption: "Name", sortable: false, name: "Name" },',
                            '    { caption: "Age", sortable: false, name: "Age" },',
                            '    { caption: "Department", sortable: false, name: "Department" },',
                            '];',
                            "",
                            "<TableComponent",
                            '    fullWidth',
                            '    headings={tableHeadings}',
                            '>',
                            '    <tr>',
                            '        <td>John Doe</td>',
                            '        <td>30</td>',
                            '        <td>Human Resources</td>',
                            '    </tr>',
                            "    /* ... */",
                            '    <tr>',
                            '        <td>John Doe</td>',
                            '        <td>30</td>',
                            '        <td>Human Resources</td>',
                            '    </tr>',
                            '</TableComponent>',
                        ].join("\n")}
                    />
                }
            >
                <TableComponent
                    fullWidth
                    headings={tableHeadings}
                >
                    {numbers.map(x =>
                        <tr key={`item-${x}`}>
                            <td>
                                John Doe
                            </td>
                            <td>
                                {x + 30}
                            </td>
                            <td>
                                Human Resources
                            </td>
                        </tr>
                    )}
                </TableComponent>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="hasStickyHeader"
                description="Option to keep the table header visible while scrolling (sticky effect). Disabled by default"
                code={
                    <CodeExample
                        code={[
                            `import { TableHeading } from "@bodynarf/react.components";`,
                            `import TableComponent from "@bodynarf/react.components/components/table";`,
                            "",
                            'const tableHeadings: Array<TableHeading> = [',
                            '    { caption: "Name", sortable: false, name: "Name" },',
                            '    { caption: "Age", sortable: false, name: "Age" },',
                            '    { caption: "Department", sortable: false, name: "Department" },',
                            '];',
                            "",
                            "<TableComponent",
                            '    hasStickyHeader',
                            '    headings={tableHeadings}',
                            '>',
                            '    <tr>',
                            '        <td>John Doe</td>',
                            '        <td>30</td>',
                            '        <td>Human Resources</td>',
                            '    </tr>',
                            "    /* ... */",
                            '    <tr>',
                            '        <td>John Doe</td>',
                            '        <td>30</td>',
                            '        <td>Human Resources</td>',
                            '    </tr>',
                            '</TableComponent>',
                        ].join("\n")}
                    />
                }
            >
                <TableComponent
                    hasStickyHeader
                    headings={tableHeadings}
                >
                    {numbers.map(x =>
                        <tr key={`item-${x}`}>
                            <td>
                                John Doe
                            </td>
                            <td>
                                {x + 30}
                            </td>
                            <td>
                                Human Resources
                            </td>
                        </tr>
                    )}
                </TableComponent>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="headerWithBorder"
                description="Option to render the table header with borders. Disabled by default"
                code={
                    <CodeExample
                        code={[
                            `import { TableHeading } from "@bodynarf/react.components";`,
                            `import TableComponent from "@bodynarf/react.components/components/table";`,
                            "",
                            'const tableHeadings: Array<TableHeading> = [',
                            '    { caption: "Name", sortable: false, name: "Name" },',
                            '    { caption: "Age", sortable: false, name: "Age" },',
                            '    { caption: "Department", sortable: false, name: "Department" },',
                            '];',
                            "",
                            "<TableComponent",
                            '    headerWithBorder',
                            '    headings={tableHeadings}',
                            '>',
                            '    <tr>',
                            '        <td>John Doe</td>',
                            '        <td>30</td>',
                            '        <td>Human Resources</td>',
                            '    </tr>',
                            "    /* ... */",
                            '    <tr>',
                            '        <td>John Doe</td>',
                            '        <td>30</td>',
                            '        <td>Human Resources</td>',
                            '    </tr>',
                            '</TableComponent>',
                        ].join("\n")}
                    />
                }
            >
                <TableComponent
                    headerWithBorder
                    headings={tableHeadings}
                >
                    {numbers.map(x =>
                        <tr key={`item-${x}`}>
                            <td>
                                John Doe
                            </td>
                            <td>
                                {x + 30}
                            </td>
                            <td>
                                Human Resources
                            </td>
                        </tr>
                    )}
                </TableComponent>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="headerBorderless"
                description="Option to render the table header without borders. Disabled by default"
                code={
                    <CodeExample
                        code={[
                            `import { TableHeading } from "@bodynarf/react.components";`,
                            `import TableComponent from "@bodynarf/react.components/components/table";`,
                            "",
                            'const tableHeadings: Array<TableHeading> = [',
                            '    { caption: "Name", sortable: false, name: "Name" },',
                            '    { caption: "Age", sortable: false, name: "Age" },',
                            '    { caption: "Department", sortable: false, name: "Department" },',
                            '];',
                            "",
                            "<TableComponent",
                            '    headerBorderless',
                            '    headings={tableHeadings}',
                            '>',
                            '    <tr>',
                            '        <td>John Doe</td>',
                            '        <td>30</td>',
                            '        <td>Human Resources</td>',
                            '    </tr>',
                            "    /* ... */",
                            '    <tr>',
                            '        <td>John Doe</td>',
                            '        <td>30</td>',
                            '        <td>Human Resources</td>',
                            '    </tr>',
                            '</TableComponent>',
                        ].join("\n")}
                    />
                }
            >
                <TableComponent
                    headerBorderless
                    headings={tableHeadings}
                >
                    {numbers.map(x =>
                        <tr key={`item-${x}`}>
                            <td>
                                John Doe
                            </td>
                            <td>
                                {x + 30}
                            </td>
                            <td>
                                Human Resources
                            </td>
                        </tr>
                    )}
                </TableComponent>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="zebra"
                description="Option to display table rows in zebra style: with a background for even rows. By default, this option is disabled"
                code={
                    <CodeExample
                        code={[
                            `import { TableHeading } from "@bodynarf/react.components";`,
                            `import TableComponent from "@bodynarf/react.components/components/table";`,
                            "",
                            'const tableHeadings: Array<TableHeading> = [',
                            '    { caption: "Name", sortable: false, name: "Name" },',
                            '    { caption: "Age", sortable: false, name: "Age" },',
                            '    { caption: "Department", sortable: false, name: "Department" },',
                            '];',
                            "",
                            "<TableComponent",
                            '    zebra',
                            '    headings={tableHeadings}',
                            '>',
                            '    <tr>',
                            '        <td>John Doe</td>',
                            '        <td>30</td>',
                            '        <td>Human Resources</td>',
                            '    </tr>',
                            "    /* ... */",
                            '    <tr>',
                            '        <td>John Doe</td>',
                            '        <td>30</td>',
                            '        <td>Human Resources</td>',
                            '    </tr>',
                            '</TableComponent>',
                        ].join("\n")}
                    />
                }
            >
                <TableComponent
                    zebra
                    headings={tableHeadings}
                >
                    {numbers.map(x =>
                        <tr key={`item-${x}`}>
                            <td>
                                John Doe
                            </td>
                            <td>
                                {x + 30}
                            </td>
                            <td>
                                Human Resources
                            </td>
                        </tr>
                    )}
                </TableComponent>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="currentSortColumn"
                description="Option to specify the current sorting column. By default, this option is not set"
                code={
                    <CodeExample
                        code={[
                            `import { TableHeading } from "@bodynarf/react.components";`,
                            `import TableComponent from "@bodynarf/react.components/components/table";`,
                            "",
                            'const tableHeadings: Array<TableHeading> = [',
                            '    { caption: "Name", sortable: true, name: "Name" },',
                            '    { caption: "Age", sortable: true, name: "Age" },',
                            '    { caption: "Department", sortable: true, name: "Department" },',
                            '];',
                            "",
                            "<TableComponent",
                            '    headings={tableHeadings}',
                            '    currentSortColumn={{ ascending: true, columnName: "Age" }}',
                            '>',
                            '    <tr>',
                            '        <td>John Doe</td>',
                            '        <td>30</td>',
                            '        <td>Human Resources</td>',
                            '    </tr>',
                            "    /* ... */",
                            '    <tr>',
                            '        <td>John Doe</td>',
                            '        <td>30</td>',
                            '        <td>Human Resources</td>',
                            '    </tr>',
                            '</TableComponent>',
                        ].join("\n")}
                    />
                }
            >
                <TableComponent
                    headings={tableHeadings.map(x => ({ ...x, sortable: true }))}
                    currentSortColumn={{ ascending: true, columnName: "Age" }}
                >
                    {numbers.map(x =>
                        <tr key={`item-${x}`}>
                            <td>
                                John Doe
                            </td>
                            <td>
                                {x + 30}
                            </td>
                            <td>
                                Human Resources
                            </td>
                        </tr>
                    )}
                </TableComponent>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onHeaderClick"
                description="Function to handle the event of clicking on a column header. The column must be sortable (flag in the column model)"
                code={
                    <CodeExample
                        code={[
                            `import { TableHeading } from "@bodynarf/react.components";`,
                            `import TableComponent from "@bodynarf/react.components/components/table";`,
                            "",
                            'const tableHeadings: Array<TableHeading> = [',
                            '    { caption: "Name", sortable: true, name: "Name" },',
                            '    { caption: "Age", sortable: true, name: "Age" },',
                            '    { caption: "Department", sortable: true, name: "Department" },',
                            '];',
                            ``,
                            `const onHeaderClick = (item: TableHeading) => { /* handle click */ };`,
                            "",
                            "<TableComponent",
                            '    headings={tableHeadings}',
                            '    onHeaderClick={onHeaderClick}',
                            '>',
                            '    <tr>',
                            '        <td>John Doe</td>',
                            '        <td>30</td>',
                            '        <td>Human Resources</td>',
                            '    </tr>',
                            "    /* ... */",
                            '    <tr>',
                            '        <td>John Doe</td>',
                            '        <td>30</td>',
                            '        <td>Human Resources</td>',
                            '    </tr>',
                            '</TableComponent>',
                        ].join("\n")}
                    />
                }
            >
                <TableComponent
                    onHeaderClick={appendOnHeaderClick}
                    headings={tableHeadings.map(x => ({ ...x, sortable: true }))}
                >
                    {numbers.map(x =>
                        <tr key={`item-${x}`}>
                            <td>
                                John Doe
                            </td>
                            <td>
                                {x + 30}
                            </td>
                            <td>
                                Human Resources
                            </td>
                        </tr>
                    )}
                </TableComponent>
                <p style={{ whiteSpace: "pre-line" }}>
                    {onHeaderClickLog}
                </p>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="selectable"
                description={(
                    <span>
                        Option to enable row selection via checkboxes. Each child row must be a custom component
                        that accepts <code>TableSelectionCellProps</code> — it receives <code>selectionCell</code> (the
                        checkbox <code>&lt;td&gt;</code>) and <code>selected</code> (boolean) injected by the table, and
                        must render <code>selectionCell</code> as the first cell inside its <code>&lt;tr&gt;</code>. A
                        plain <code>&lt;tr&gt;</code> will not work because it cannot accept or render these injected
                        props. A unique <code>key</code> prop is required on each row — it is used as the selection
                        identifier. Requires <code>selectedRows</code> and <code>onSelectedRowsChange</code> to manage
                        the selection state
                    </span>
                )}
                code={
                    <CodeExample
                        code={[
                            `import { FC, useState } from "react";`,
                            "",
                            `import { TableHeading, TableSelectionCellProps } from "@bodynarf/react.components";`,
                            `import TableComponent from "@bodynarf/react.components/components/table";`,
                            "",
                            'const tableHeadings: Array<TableHeading> = [',
                            '    { caption: "Name", sortable: false, name: "Name" },',
                            '    { caption: "Age", sortable: false, name: "Age" },',
                            '    { caption: "Department", sortable: false, name: "Department" },',
                            '];',
                            "",
                            'type RowProps = TableSelectionCellProps & {',
                            '    name: string;',
                            '    age: number;',
                            '    department: string;',
                            '};',
                            "",
                            'const Row: FC<RowProps> = ({ selectionCell, selected, name, age, department }) => (',
                            '    <tr className={selected ? "is-selected" : undefined}>',
                            '        {selectionCell}',
                            '        <td>{name}</td>',
                            '        <td>{age}</td>',
                            '        <td>{department}</td>',
                            '    </tr>',
                            ');',
                            "",
                            `const [selectedRows, setSelectedRows] = useState<Array<string>>([]);`,
                            "",
                            "<TableComponent",
                            '    selectable',
                            '    headings={tableHeadings}',
                            '    selectedRows={selectedRows}',
                            '    onSelectedRowsChange={setSelectedRows}',
                            '>',
                            '    <Row key="item-1" name="John Doe" age={31} department="Human Resources" />',
                            '</TableComponent>',
                        ].join("\n")}
                    />
                }
            >
                <TableComponent
                    selectable
                    headings={tableHeadings}
                    selectedRows={selectableRows}
                    onSelectedRowsChange={setSelectableRows}
                >
                    {numbers.map(x =>
                        <SelectableRow
                            key={`item-${x}`}
                            name="John Doe"
                            age={x + 30}
                            department="Human Resources"
                        />
                    )}
                </TableComponent>
                <p>
                    Selected rows: {selectableRows.length === 0 ? "none" : selectableRows.join(", ")}
                </p>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="headerCheckBoxConfig"
                description="Visual configuration for the 'select all' checkbox in the table header. Accepts the same visual props as the Checkbox component"
                code={
                    <CodeExample
                        code={[
                            `import { FC, useState } from "react";`,
                            "",
                            `import { TableHeading, TableCheckBoxConfig, TableSelectionCellProps } from "@bodynarf/react.components";`,
                            `import TableComponent from "@bodynarf/react.components/components/table";`,
                            "",
                            'const tableHeadings: Array<TableHeading> = [',
                            '    { caption: "Name", sortable: false, name: "Name" },',
                            '    { caption: "Age", sortable: false, name: "Age" },',
                            '    { caption: "Department", sortable: false, name: "Department" },',
                            '];',
                            "",
                            'type RowProps = TableSelectionCellProps & {',
                            '    name: string;',
                            '    age: number;',
                            '    department: string;',
                            '};',
                            "",
                            'const Row: FC<RowProps> = ({ selectionCell, selected, name, age, department }) => (',
                            '    <tr className={selected ? "is-selected" : undefined}>',
                            '        {selectionCell}',
                            '        <td>{name}</td>',
                            '        <td>{age}</td>',
                            '        <td>{department}</td>',
                            '    </tr>',
                            ');',
                            "",
                            `const headerCheckBoxConfig: TableCheckBoxConfig = { rounded: true };`,
                            `const [selectedRows, setSelectedRows] = useState<Array<string>>([]);`,
                            "",
                            "<TableComponent",
                            '    selectable',
                            '    headings={tableHeadings}',
                            '    selectedRows={selectedRows}',
                            '    onSelectedRowsChange={setSelectedRows}',
                            '    headerCheckBoxConfig={headerCheckBoxConfig}',
                            '>',
                            '    <Row key="item-1" name="John Doe" age={31} department="Human Resources" />',
                            '</TableComponent>',
                        ].join("\n")}
                    />
                }
            >
                <TableComponent
                    selectable
                    headings={tableHeadings}
                    selectedRows={headerConfigRows}
                    onSelectedRowsChange={setHeaderConfigRows}
                    headerCheckBoxConfig={{ rounded: true }}
                >
                    {numbers.map(x =>
                        <SelectableRow
                            key={`item-${x}`}
                            name="John Doe"
                            age={x + 30}
                            department="Human Resources"
                        />
                    )}
                </TableComponent>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="rowCheckBoxConfig"
                description="Visual configuration for the row selection checkboxes. Accepts the same visual props as the Checkbox component"
                code={
                    <CodeExample
                        code={[
                            `import { FC, useState } from "react";`,
                            "",
                            `import { TableHeading, TableCheckBoxConfig, TableSelectionCellProps } from "@bodynarf/react.components";`,
                            `import TableComponent from "@bodynarf/react.components/components/table";`,
                            "",
                            'const tableHeadings: Array<TableHeading> = [',
                            '    { caption: "Name", sortable: false, name: "Name" },',
                            '    { caption: "Age", sortable: false, name: "Age" },',
                            '    { caption: "Department", sortable: false, name: "Department" },',
                            '];',
                            "",
                            'type RowProps = TableSelectionCellProps & {',
                            '    name: string;',
                            '    age: number;',
                            '    department: string;',
                            '};',
                            "",
                            'const Row: FC<RowProps> = ({ selectionCell, selected, name, age, department }) => (',
                            '    <tr className={selected ? "is-selected" : undefined}>',
                            '        {selectionCell}',
                            '        <td>{name}</td>',
                            '        <td>{age}</td>',
                            '        <td>{department}</td>',
                            '    </tr>',
                            ');',
                            "",
                            `const rowCheckBoxConfig: TableCheckBoxConfig = { block: true };`,
                            `const [selectedRows, setSelectedRows] = useState<Array<string>>([]);`,
                            "",
                            "<TableComponent",
                            '    selectable',
                            '    headings={tableHeadings}',
                            '    selectedRows={selectedRows}',
                            '    onSelectedRowsChange={setSelectedRows}',
                            '    rowCheckBoxConfig={rowCheckBoxConfig}',
                            '>',
                            '    <Row key="item-1" name="John Doe" age={31} department="Human Resources" />',
                            '</TableComponent>',
                        ].join("\n")}
                    />
                }
            >
                <TableComponent
                    selectable
                    headings={tableHeadings}
                    selectedRows={rowConfigRows}
                    onSelectedRowsChange={setRowConfigRows}
                    rowCheckBoxConfig={{ block: true }}
                >
                    {numbers.map(x =>
                        <SelectableRow
                            key={`item-${x}`}
                            name="John Doe"
                            age={x + 30}
                            department="Human Resources"
                        />
                    )}
                </TableComponent>
            </ComponentUseCase>
        </section>
    );
};

export default Table;
