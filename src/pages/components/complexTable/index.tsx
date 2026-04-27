import { FC, useCallback, useState } from "react";

import {
    ComplexTableAction,
    ComplexTableSearchConfig,
    TableHeading,
} from "@bodynarf/react.components";
import { PagedRequest, useComplexTable } from "@bodynarf/react.components/hooks";
import Icon from "@bodynarf/react.components/components/icon";
import ComplexTable from "@bodynarf/react.components/components/complexTable";

import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import ComponentUseCase from "@app/sharedComponents/useCase";
import CodeExample from "@app/sharedComponents/codeExample";

import { ALL_EMPLOYEES, Employee, PAGE_SIZE } from "./data";
import EmployeeRow from "./employeeRow";

const headings: Array<TableHeading> = [
    { caption: "Name", sortable: true, name: "name" },
    { caption: "Department", sortable: true, name: "department" },
    { caption: "Role", sortable: false, name: "role" },
    { caption: "Salary (USD)", sortable: true, name: "salary" },
    { caption: "Actions", sortable: false, name: "actions" },
];

const searchConfig: ComplexTableSearchConfig = {
    searchPlaceholder: "Search by name, department or role...",
    noItemsFoundBySearchCaption: "No employees match your search",
};

const rowActions: Array<ComplexTableAction> = [
    { name: "pencil-fill", title: "Edit employee", onClick: (id) => alert(`Edit: ${id}`) },
    { name: "trash-fill", title: "Delete employee", onClick: (id) => alert(`Delete: ${id}`) },
];

/** ComplexTable component demo */
const ComplexTablePage: FC = () => {
    const [items, setItems] = useState<Array<Employee>>(
        ALL_EMPLOYEES.slice(0, PAGE_SIZE)
    );

    const [clickLog, setClickLog] = useState<string>("");

    const loadPage = useCallback(
        async (params: PagedRequest): Promise<number> => {
            await new Promise<void>(r => setTimeout(r, 350));

            let filtered = [...ALL_EMPLOYEES];

            if (params.search) {
                const q = params.search.toLowerCase();
                filtered = filtered.filter(e =>
                    e.name.toLowerCase().includes(q) ||
                    e.department.toLowerCase().includes(q) ||
                    e.role.toLowerCase().includes(q)
                );
            }

            if (params.sortBy) {
                const key = params.sortBy as keyof Employee;
                filtered.sort((a, b) => {
                    const av = a[key];
                    const bv = b[key];
                    let cmp: number;
                    if (typeof av === "string" && typeof bv === "string") {
                        cmp = av.localeCompare(bv);
                    } else {
                        cmp = (av as number) < (bv as number) ? -1 : (av as number) > (bv as number) ? 1 : 0;
                    }
                    return params.sortOrder === "desc" ? -cmp : cmp;
                });
            }

            const total = filtered.length;
            setItems(filtered.slice(params.offset, params.offset + params.limit));
            return total;
        },
        [setItems]
    );

    const { tableProps, selectedRows } = useComplexTable({
        totalCount: ALL_EMPLOYEES.length,
        pageSize: PAGE_SIZE,
        loadPage,
    });

    const handleRowClick = useCallback(
        (id: string) => {
            const employee = ALL_EMPLOYEES.find(e => e.id === id);
            setClickLog(prev =>
                `${employee?.name ?? id}\n${prev}`.trim()
            );
        },
        [setClickLog]
    );

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="ComplexTable"
                version="1.15"
                description={
                    <>
                        <p>
                            A feature-rich table with built-in support for server-side pagination,
                            search, sorting, multi-row selection, and row actions.
                        </p>
                        <div className="notification is-warning mt-3">
                            <Icon
                                name="exclamation-triangle-fill"
                                className="mr-2"
                            />
                            <strong>
                                {`It is strongly recommended to use `}
                                <code>ComplexTable</code>
                                {` in combination with the `}
                                <code>useComplexTable</code>
                                {` hook.`}
                            </strong>
                            {` The hook manages all required state — pagination, search, sorting,
                            selection, loading indicator, and scroll restoration — and provides
                            ready-to-spread props via `}
                            <code>tableProps</code>.
                        </div>
                    </>
                }
            />

            <ComponentUseCase
                caption="Full demo"
                description="Live demo with search, sortable columns, pagination (5 items/page over 35 total), row actions (edit, delete), and row click handler. Uses useComplexTable with a simulated async data source."
                code={
                    <CodeExample
                        code={[
                            `import { useState, useCallback } from "react";`,
                            "",
                            `import { ComplexTableAction, ComplexTableItem, ComplexTableItemProps, ComplexTableSearchConfig, TableHeading } from "@bodynarf/react.components";`,
                            `import { PagedRequest, useComplexTable } from "@bodynarf/react.components/hooks";`,
                            `import ComplexTable from "@bodynarf/react.components/components/complexTable";`,
                            "",
                            "// Define your item type — must extend ComplexTableItem (requires id: string)",
                            "type Employee = ComplexTableItem & {",
                            "    name: string;",
                            "    department: string;",
                            "};",
                            "",
                            "const headings: Array<TableHeading> = [",
                            '    { caption: "Name", sortable: true, name: "name" },',
                            '    { caption: "Department", sortable: true, name: "department" },',
                            "];",
                            "",
                            "// Row renderer — must be defined outside the page component",
                            "const EmployeeRow = ({ item, selectionCell, actions, onRowClick }: ComplexTableItemProps<Employee>) => (",
                            "    <tr onClick={onRowClick ? () => onRowClick(item.id) : undefined}>",
                            "        {selectionCell}",
                            "        <td>{item.name}</td>",
                            "        <td>{item.department}</td>",
                            "    </tr>",
                            ");",
                            "",
                            "const [items, setItems] = useState<Array<Employee>>(initialPage);",
                            "const loadPage = useCallback(",
                            "    async ({ offset, limit, search, sortBy, sortOrder }: PagedRequest): Promise<number> => {",
                            "        const result = await api.getEmployees({ offset, limit, search, sortBy, sortOrder });",
                            "        setItems(result.items);",
                            "        return result.total;",
                            "    },",
                            "    [setItems]",
                            ");",
                            "",
                            "const { tableProps, selectedRows } = useComplexTable({",
                            "    totalCount: 100,",
                            "    pageSize: 10,",
                            "    loadPage,",
                            "});",
                            "",
                            "<ComplexTable",
                            "    {...tableProps}",
                            "    items={items}",
                            "    headings={headings}",
                            '    noItemsCaption="No employees found"',
                            "    itemComponent={EmployeeRow}",
                            "    selectedRows={selectedRows}",
                            "    searchConfig={{ searchPlaceholder: \"Search...\", noItemsFoundBySearchCaption: \"Nothing found\" }}",
                            "    actions={[",
                            '        { name: "pencil-fill", title: "Edit", onClick: (id) => handleEdit(id) },',
                            '        { name: "trash-fill", title: "Delete", onClick: (id) => handleDelete(id) },',
                            "    ]}",
                            "    onRowClick={handleRowClick}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <ComplexTable
                    {...tableProps}
                    items={items}
                    headings={headings}
                    itemComponent={EmployeeRow}
                    selectedRows={selectedRows}
                    searchConfig={searchConfig}
                    actions={rowActions}
                    onRowClick={handleRowClick}
                    noItemsCaption="No employees found"
                />
                {clickLog !== "" && (
                    <div className="notification is-light mt-3">
                        <strong>Row click log (latest first):</strong>
                        <pre
                            className="mt-1"
                            style={{ maxHeight: "80px", overflow: "auto", background: "transparent" }}
                        >
                            {clickLog}
                        </pre>
                    </div>
                )}
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="headings"
                description="Array of column definitions. Each heading specifies the display caption, whether the column is sortable, and a name used to identify the column in sort callbacks. Sortable columns display a sort indicator in the header."
                code={
                    <CodeExample
                        code={[
                            `import { TableHeading } from "@bodynarf/react.components";`,
                            "",
                            "const headings: Array<TableHeading> = [",
                            "    // sortable: true — clicking the header changes sort order",
                            '    { caption: "Name", sortable: true, name: "name" },',
                            '    { caption: "Department", sortable: true, name: "department" },',
                            "    // sortable: false — column header is not clickable for sorting",
                            '    { caption: "Role", sortable: false, name: "role" },',
                            "    // className — optional extra CSS class for the <th> element",
                            '    { caption: "Status", sortable: false, name: "status", className: "has-text-centered" },',
                            "];",
                            "",
                            "<ComplexTable",
                            "    headings={headings}",
                            "    /* ... other required props */",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                {null}
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="items / noItemsCaption"
                description="items is the array of data rows displayed on the current page. Each item must extend ComplexTableItem, which requires an id: string field — this is used as the row key for selection and actions. noItemsCaption is shown when items is empty."
                code={
                    <CodeExample
                        code={[
                            `import { ComplexTableItem } from "@bodynarf/react.components";`,
                            "",
                            "// Your type must extend ComplexTableItem",
                            "type Employee = ComplexTableItem & {",
                            "    // id: string — inherited from ComplexTableItem, required",
                            "    name: string;",
                            "    department: string;",
                            "};",
                            "",
                            "// items holds only the current page — update it inside loadPage",
                            "const [items, setItems] = useState<Array<Employee>>(firstPage);",
                            "",
                            "<ComplexTable",
                            "    items={items}",
                            '    noItemsCaption="No employees found"',
                            "    /* ... other required props */",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                {null}
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="itemComponent"
                description="Optional custom FC for rendering each data row. Receives item, selectionCell, actions, and onRowClick. When omitted, a default renderer that shows item field values in plain <td> cells is used."
                code={
                    <CodeExample
                        code={[
                            `import { JSX } from "react";`,
                            `import { ComplexTableItemProps, Icon } from "@bodynarf/react.components";`,
                            "",
                            "// Define outside the page component to keep the reference stable",
                            "const EmployeeRow = ({",
                            "    item,",
                            "    selectionCell,  // <td> with checkbox, injected when selectedRows is used",
                            "    actions,        // action icons from the actions prop",
                            "    onRowClick,     // from the onRowClick prop",
                            "}: ComplexTableItemProps<Employee>): JSX.Element => (",
                            "    <tr onClick={onRowClick ? () => onRowClick(item.id) : undefined}>",
                            "        {selectionCell}",
                            "        <td>{item.name}</td>",
                            "        <td>{item.department}</td>",
                            "        {actions && (",
                            "            <td>",
                            "                {actions.map((action, i) => {",
                            "                    const { onClick, ...iconProps } = action;",
                            "                    return <Icon key={i} {...iconProps} onClick={() => onClick(item.id)} />;",
                            "                })}",
                            "            </td>",
                            "        )}",
                            "    </tr>",
                            ");",
                            "",
                            "<ComplexTable",
                            "    itemComponent={EmployeeRow}",
                            "    /* ... other required props */",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                {null}
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="actions"
                description="Array of row action buttons. Each action extends IconProps (name, title, size, className, ...) but replaces the standard onClick with a handler that receives the row's item id. Actions are passed to the itemComponent via its actions prop."
                code={
                    <CodeExample
                        code={[
                            `import { ComplexTableAction } from "@bodynarf/react.components";`,
                            "",
                            "// ComplexTableAction = Omit<IconProps, 'onClick'> & { onClick: (itemId: string) => void }",
                            "// The icon name comes from Bootstrap Icons (without the 'bi-' prefix)",
                            "const rowActions: Array<ComplexTableAction> = [",
                            "    {",
                            '        name: "pencil-fill",',
                            '        title: "Edit",',
                            "        onClick: (id) => openEditModal(id),",
                            "    },",
                            "    {",
                            '        name: "trash-fill",',
                            '        title: "Delete",',
                            "        onClick: (id) => confirmDelete(id),",
                            "    },",
                            "];",
                            "",
                            "<ComplexTable",
                            "    actions={rowActions}",
                            "    /* ... other required props */",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                {null}
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onRowClick"
                description="Optional handler called when the user clicks anywhere on a row. Receives the item id. itemComponent must wire it up manually: pass onClick={() => onRowClick(item.id)} to the <tr> element."
                code={
                    <CodeExample
                        code={[
                            "<ComplexTable",
                            "    onRowClick={(id) => {",
                            "        const item = items.find(x => x.id === id);",
                            "        openDetailPanel(item);",
                            "    }}",
                            "    /* ... other required props */",
                            "/>",
                            "",
                            "// In your itemComponent, wire it to the <tr>:",
                            "const MyRow = ({ item, onRowClick }: ComplexTableItemProps<MyItem>) => (",
                            "    <tr",
                            "        onClick={onRowClick ? () => onRowClick(item.id) : undefined}",
                            "        style={onRowClick ? { cursor: 'pointer' } : undefined}",
                            "    >",
                            "        /* ... cells */",
                            "    </tr>",
                            ");",
                        ].join("\n")}
                    />
                }
            >
                {null}
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="selectedRows / onSelectionChange"
                description="selectedRows is the array of selected item ids. onSelectionChange is called when the user checks or unchecks rows. Both are managed automatically by useComplexTable — pass selectedRows from the hook result and spread tableProps which includes onSelectionChange."
                code={
                    <CodeExample
                        code={[
                            "const { tableProps, selectedRows } = useComplexTable({ /* ... */ });",
                            "",
                            "// tableProps already includes onSelectionChange",
                            "<ComplexTable",
                            "    {...tableProps}",
                            "    selectedRows={selectedRows}",
                            "    /* ... other required props */",
                            "/>",
                            "",
                            "// Access selected ids at any time:",
                            "const handleBulkDelete = () => {",
                            "    selectedRows.forEach(id => deleteItem(id));",
                            "};",
                        ].join("\n")}
                    />
                }
            >
                {null}
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="searchConfig"
                description={
                    <>
                        {`Configuration for the built-in search bar. When provided, a search field is rendered above the table.
`}
                        <code>searchConfig</code>
                        {` wraps `}
                        <a href="#/components/search">
                            Search
                        </a>
                        {` component props: the `}
                        <code>searchProps</code>
                        {` field accepts all `}
                        <code>SearchProps</code>
                        {` except `}
                        <code>onSearch</code>
                        {` and `}
                        <code>caption</code>
                        {` — which are managed by ComplexTable.`}
                    </>
                }
                code={
                    <CodeExample
                        code={[
                            `import { ComplexTableSearchConfig } from "@bodynarf/react.components";`,
                            "",
                            "const searchConfig: ComplexTableSearchConfig = {",
                            "    // Placeholder text inside the search input",
                            '    searchPlaceholder: "Search by name...",',
                            "",
                            "    // Shown in the empty state when search is active and returns no results",
                            '    noItemsFoundBySearchCaption: "No items match your query",',
                            "",
                            "    // Optional: extra CSS class for the search bar container",
                            '    containerClassName: "mb-3",',
                            "",
                            "    // Optional: additional SearchProps (size, rounded, searchType, etc.)",
                            "    // See the Search component demo for available options",
                            "    searchProps: {",
                            '        searchType: "byTyping",',
                            "        rounded: true,",
                            "    },",
                            "};",
                            "",
                            "<ComplexTable",
                            "    searchConfig={searchConfig}",
                            "    /* ... other required props */",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                {null}
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="tableConfig"
                description={
                    <>
                        {`Configuration for the inner `}
                        <a href="#/components/table">
                            Table
                        </a>
                        {` component. Accepts all `}
                        <code>TableProps</code>
                        {` except `}
                        <code>headings</code>
                        {`, `}
                        <code>children</code>
                        {`, `}
                        <code>currentSortColumn</code>
                        {`, `}
                        <code>selectable</code>
                        {`, `}
                        <code>selectedRows</code>
                        {`, and `}
                        <code>onSelectedRowsChange</code>
                        {` — those are managed by ComplexTable itself.
`}
                        {`The `}
                        <code>rowCheckBoxConfig</code>
                        {` and `}
                        <code>headerCheckBoxConfig</code>
                        {` fields let you customize selection `}
                        <a href="#/controls/checkbox">
                            Checkbox
                        </a>
                        {` appearance.`}
                    </>
                }
                code={
                    <CodeExample
                        code={[
                            "<ComplexTable",
                            "    tableConfig={{",
                            "        hasBorder: true,",
                            "        hoverable: true,",
                            "        zebra: true,",
                            "        narrow: true,",
                            "        hasStickyHeader: true,",
                            "",
                            "        // customize selection checkboxes (see Checkbox demo for options)",
                            "        rowCheckBoxConfig: { size: ElementSize.Small, rounded: true },",
                            "        headerCheckBoxConfig: { size: ElementSize.Small, rounded: true },",
                            "    }}",
                            "    /* ... other required props */",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                {null}
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="paginatorConfig"
                description={
                    <>
                        {`Configuration for the built-in `}
                        <a href="#/components/paginator">
                            Paginator
                        </a>
                        {` component. Accepts all `}
                        <code>PaginatorProps</code>
                        {` except `}
                        <code>count</code>
                        {`, `}
                        <code>currentPage</code>
                        {`, and `}
                        <code>onPageChange</code>
                        {` — those are managed by ComplexTable.`}
                    </>
                }
                code={
                    <CodeExample
                        code={[
                            `import { ElementPosition, ElementSize } from "@bodynarf/react.components";`,
                            "",
                            "<ComplexTable",
                            "    paginatorConfig={{",
                            "        size: ElementSize.Small,",
                            "        rounded: true,",
                            "        position: ElementPosition.Right,",
                            "        nearPagesCount: 2,",
                            "        nextButtonsConfig: {",
                            "            style: \"inline\",",
                            "            previousButtonConfig: { caption: \"← Prev\" },",
                            "            nextButtonConfig: { caption: \"Next →\" },",
                            "        },",
                            "    }}",
                            "    /* ... other required props */",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                {null}
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="selectionBarConfig"
                description={
                    <>
                        {`Configuration for the bar shown above the table when one or more rows are selected.
Supports two types: `}
                        <code>&quot;Button list&quot;</code>
                        {` (individual `}
                        <a href="#/components/button">
                            Button
                        </a>
                        {` components) and `}
                        <code>&quot;SplitButton&quot;</code>
                        {` (a `}
                        <a href="#/components/splitButton">
                            Split Button
                        </a>
                        {` with a dropdown menu).
Both types require `}
                        <code>selectedCountPlaceholder</code>
                        {` — a function that formats the selected row count label.`}
                    </>
                }
                code={
                    <CodeExample
                        code={[
                            `import { ButtonStyle } from "@bodynarf/react.components";`,
                            "",
                            "// Type: 'Button list' — renders individual buttons",
                            "<ComplexTable",
                            "    selectionBarConfig={{",
                            '        type: "Button list",',
                            "        selectedCountPlaceholder: (count) => `${count} row(s) selected`,",
                            "        actions: [",
                            "            {",
                            '                caption: "Export",',
                            "                onClick: () => exportRows(selectedRows),",
                            "            },",
                            "            {",
                            '                caption: "Delete",',
                            "                style: ButtonStyle.Danger,",
                            "                onClick: () => deleteRows(selectedRows),",
                            "            },",
                            "        ],",
                            "    }}",
                            "    /* ... other required props */",
                            "/>",
                            "",
                            "// Type: 'SplitButton' — renders a split button with dropdown",
                            "<ComplexTable",
                            "    selectionBarConfig={{",
                            '        type: "SplitButton",',
                            "        selectedCountPlaceholder: (count) => `${count} row(s) selected`,",
                            "        splitButtonConfig: {",
                            '            caption: "Actions",',
                            "            items: [",
                            '                { caption: "Export", onClick: () => exportRows(selectedRows) },',
                            '                { caption: "Delete", onClick: () => deleteRows(selectedRows) },',
                            "            ],",
                            "        },",
                            "    }}",
                            "    /* ... other required props */",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                {null}
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="loading"
                description="Displays a loading overlay over the table body when true. Managed automatically by useComplexTable — it is set to true before loadPage is called and back to false once the promise resolves."
                code={
                    <CodeExample
                        code={[
                            `import { useState } from "react";`,
                            "",
                            "// When using useComplexTable, loading is included in tableProps:",
                            "const { tableProps } = useComplexTable({ /* ... */ });",
                            "// tableProps.loading is set automatically",
                            "",
                            "<ComplexTable",
                            "    {...tableProps} // includes loading",
                            "    /* ... other required props */",
                            "/>",
                            "",
                            "// Manual control (without the hook):",
                            "const [isLoading, setIsLoading] = useState(false);",
                            "",
                            "<ComplexTable",
                            "    loading={isLoading}",
                            "    /* ... other required props */",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                {null}
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="hasActiveSearch"
                description="Indicates whether the user has entered a search query. Affects the empty-state caption: when true and items is empty, noItemsFoundBySearchCaption from searchConfig is shown instead of noItemsCaption. Managed automatically by useComplexTable."
                code={
                    <CodeExample
                        code={[
                            "// When using useComplexTable, hasActiveSearch is included in tableProps:",
                            "const { tableProps } = useComplexTable({ /* ... */ });",
                            "// tableProps.hasActiveSearch is set automatically",
                            "",
                            "<ComplexTable",
                            "    {...tableProps} // includes hasActiveSearch",
                            '    noItemsCaption="No employees"',
                            "    searchConfig={{",
                            '        searchPlaceholder: "Search...",',
                            '        noItemsFoundBySearchCaption: "No employees match your query",',
                            "        // ↑ shown when hasActiveSearch=true and items is empty",
                            "    }}",
                            "    /* ... other required props */",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                {null}
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="containerRef / tableRef"
                description="containerRef is a ref to the outer wrapper div used by useComplexTable for scroll-to-top on page change. tableRef is a ref to the inner <table> element for direct DOM access. containerRef is managed automatically by useComplexTable."
                code={
                    <CodeExample
                        code={[
                            "// containerRef — provided by useComplexTable, used for scroll management:",
                            "const { tableProps } = useComplexTable({ /* ... */ });",
                            "// tableProps.containerRef is a RefObject<HTMLDivElement>",
                            "",
                            "<ComplexTable",
                            "    {...tableProps} // includes containerRef",
                            "    /* ... other required props */",
                            "/>",
                            "",
                            "// tableRef — direct access to the inner <table> element:",
                            "const tableRef = useRef<HTMLTableElement>(null);",
                            "",
                            "<ComplexTable",
                            "    tableRef={tableRef}",
                            "    /* ... other required props */",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                {null}
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="pagesCount / currentPage / onPageChange / onSearch / onSortChange / currentSortColumn"
                description="These props form the core state contract between the table and the outside world. They are required and tightly coupled — all are managed automatically by useComplexTable and included in tableProps. Do not set them manually unless you are building a custom state manager."
                code={
                    <CodeExample
                        code={[
                            "// All of these are included in tableProps from useComplexTable:",
                            "const { tableProps } = useComplexTable({",
                            "    totalCount: 100,",
                            "    pageSize: 10,",
                            "    loadPage,",
                            "});",
                            "",
                            "// tableProps provides:",
                            "// pagesCount      — total page count, recalculated when loadPage returns new total",
                            "// currentPage     — active page number (1-based)",
                            "// currentSortColumn — active sort column and direction (or undefined)",
                            "// onPageChange    — called by the Paginator when the user selects a page",
                            "// onSearch        — called by the search bar when the query changes",
                            "// onSortChange    — called when a sortable column header is clicked",
                            "",
                            "<ComplexTable",
                            "    {...tableProps}",
                            "    items={items}",
                            "    headings={headings}",
                            '    noItemsCaption="No items"',
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                {null}
            </ComponentUseCase>
        </section>
    );
};

export default ComplexTablePage;
