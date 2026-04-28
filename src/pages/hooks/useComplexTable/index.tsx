import { FC, useCallback, useState } from "react";

import {
    ComplexTableAction,
    ComplexTableSearchConfig,
    ComplexTableSelectionBarConfig,
    TableHeading,
} from "@bodynarf/react.components";
import { PagedRequest, useComplexTable } from "@bodynarf/react.components/hooks";
import ComplexTable from "@bodynarf/react.components/components/complexTable";

import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import ComponentUseCase from "@app/sharedComponents/useCase";
import CodeExample from "@app/sharedComponents/codeExample";

import { ALL_EMPLOYEES, Employee, PAGE_SIZE } from "../../components/complexTable/data";
import EmployeeRow from "../../components/complexTable/employeeRow";
import { Link } from "react-router";

const headings: Array<TableHeading> = [
    { caption: "Name", sortable: true, name: "name" },
    { caption: "Department", sortable: true, name: "department" },
    { caption: "Role", sortable: false, name: "role" },
    { caption: "Salary (USD)", sortable: true, name: "salary" },
    { caption: "Actions", sortable: false, name: "actions" },
];

const simpleHeadings: Array<TableHeading> = [
    { caption: "Name", sortable: true, name: "name" },
    { caption: "Department", sortable: true, name: "department" },
    { caption: "Role", sortable: false, name: "role" },
];

const searchConfig: ComplexTableSearchConfig = {
    searchPlaceholder: "Search by name or department...",
    noItemsFoundBySearchCaption: "No employees match your search",
};

const resultSelectionBarConfig: ComplexTableSelectionBarConfig = {
    type: "Button list",
    selectedCountPlaceholder: (count) => `${count} row(s) selected`,
    actions: [],
};

const rowActions: Array<ComplexTableAction> = [
    { name: "pencil-fill", title: "Edit employee", onClick: (id) => alert(`Edit: ${id}`) },
    { name: "trash-fill", title: "Delete employee", onClick: (id) => alert(`Delete: ${id}`) },
];

function runQuery(params: PagedRequest): { items: Employee[]; total: number } {
    let result = [...ALL_EMPLOYEES];

    if (params.search) {
        const q = params.search.toLowerCase();
        result = result.filter(e =>
            e.name.toLowerCase().includes(q) ||
            e.department.toLowerCase().includes(q) ||
            e.role.toLowerCase().includes(q)
        );
    }

    if (params.sortBy) {
        const key = params.sortBy as keyof Employee;
        result.sort((a, b) => {
            const av = a[key], bv = b[key];
            const cmp = typeof av === "string" && typeof bv === "string"
                ? av.localeCompare(bv)
                : (av as number) < (bv as number) ? -1 : (av as number) > (bv as number) ? 1 : 0;
            return params.sortOrder === "desc" ? -cmp : cmp;
        });
    }

    return {
        items: result.slice(params.offset, params.offset + params.limit),
        total: result.length,
    };
}

/** useComplexTable hook demo */
const UseComplexTablePage: FC = () => {
    // --- Overview demo ---
    const [overviewItems, setOverviewItems] = useState<Array<Employee>>(
        ALL_EMPLOYEES.slice(0, PAGE_SIZE)
    );
    const overviewLoadPage = useCallback(
        async (params: PagedRequest): Promise<number> => {
            await new Promise<void>(r => setTimeout(r, 300));
            const { items, total } = runQuery(params);
            setOverviewItems(items);
            return total;
        },
        []
    );
    const { tableProps: overviewTableProps, selectedRows: overviewSelectedRows } = useComplexTable({
        totalCount: ALL_EMPLOYEES.length,
        pageSize: PAGE_SIZE,
        loadPage: overviewLoadPage,
    });

    // --- pageSize demo (UseComplexTableOptions) ---
    const [optionsItems, setOptionsItems] = useState<Array<Employee>>(
        ALL_EMPLOYEES.slice(0, 3)
    );
    const optionsLoadPage = useCallback(
        async (params: PagedRequest): Promise<number> => {
            await new Promise<void>(r => setTimeout(r, 300));
            const { items, total } = runQuery(params);
            setOptionsItems(items);
            return total;
        },
        []
    );
    const { tableProps: optionsTableProps } = useComplexTable({
        totalCount: ALL_EMPLOYEES.length,
        pageSize: 3,
        loadPage: optionsLoadPage,
    });

    // --- selectedRows demo (UseComplexTableResult) ---
    const [resultItems, setResultItems] = useState<Array<Employee>>(
        ALL_EMPLOYEES.slice(0, PAGE_SIZE)
    );
    const resultLoadPage = useCallback(
        async (params: PagedRequest): Promise<number> => {
            await new Promise<void>(r => setTimeout(r, 300));
            const { items, total } = runQuery(params);
            setResultItems(items);
            return total;
        },
        []
    );
    const { tableProps: resultTableProps, selectedRows: resultSelectedRows } = useComplexTable({
        totalCount: ALL_EMPLOYEES.length,
        pageSize: PAGE_SIZE,
        loadPage: resultLoadPage,
    });

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="useComplexTable"
                version="1.14"
                description="Hook for managing ComplexTable state: server-side pagination, search, sorting, multi-row selection, loading overlay, and scroll restoration. Designed to be used exclusively with the ComplexTable component."
            />

            <ComponentUseCase
                caption="Overview"
                description="The hook accepts a loadPage function (called on each navigation, search, or sort change), the total item count known at initialization, and an optional page size. It returns ready-to-spread tableProps for ComplexTable and the current selectedRows array."
                code={
                    <CodeExample
                        code={[
                            `import { useState, useCallback } from "react";`,
                            "",
                            `import { useComplexTable, PagedRequest } from "@bodynarf/react.components/hooks";`,
                            `import ComplexTable from "@bodynarf/react.components/components/complexTable";`,
                            "",
                            "const MyPage: FC = () => {",
                            "    // Initialize items state with the first page (pre-loaded)",
                            "    const [items, setItems] = useState<Employee[]>(initialPage);",
                            "",
                            "    // loadPage is called by the hook whenever the user",
                            "    // changes page, types in search, or clicks a sortable column",
                            "    const loadPage = useCallback(",
                            "        async ({ offset, limit, search, sortBy, sortOrder }: PagedRequest): Promise<number> => {",
                            "            const result = await api.getEmployees({ offset, limit, search, sortBy, sortOrder });",
                            "            setItems(result.items);",
                            "            return result.total; // total matching count",
                            "        },",
                            "        [setItems]",
                            "    );",
                            "",
                            "    const { tableProps, selectedRows } = useComplexTable({",
                            "        totalCount: 100, // total count known at mount time",
                            "        pageSize: 10,    // optional, default: 10",
                            "        loadPage,",
                            "    });",
                            "",
                            "    return (",
                            "        <ComplexTable",
                            "            {...tableProps}        // spreads all required state/handlers",
                            "            items={items}",
                            "            headings={headings}",
                            '            noItemsCaption="No items found"',
                            "            itemComponent={MyRow}",
                            "            selectedRows={selectedRows}",
                            "        />",
                            "    );",
                            "};",
                        ].join("\n")}
                    />
                }
            >
                <ComplexTable
                    {...overviewTableProps}
                    items={overviewItems}
                    headings={headings}
                    itemComponent={EmployeeRow}
                    selectedRows={overviewSelectedRows}
                    searchConfig={searchConfig}
                    actions={rowActions}
                    noItemsCaption="No employees found"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="UseComplexTableOptions"
                description="Input options passed to the hook. totalCount initializes the paginator. pageSize controls how many items are requested per page (default: 10) -- this demo uses pageSize: 3 to make pagination clearly visible. loadPage is called on every page change, search, and sort."
                code={
                    <CodeExample
                        code={[
                            "type UseComplexTableOptions = {",
                            "    // Total number of available items (known at initialization)",
                            "    totalCount: number;",
                            "",
                            "    // Number of items per page. Default: 10",
                            "    pageSize?: number;",
                            "",
                            "    // Called on page change, search, and sort.",
                            "    // Must fetch/filter data, update items state, and return the",
                            "    // total count of matching items (may differ from initial totalCount",
                            "    // when search is active).",
                            "    loadPage: (params: PagedRequest) => Promise<number>;",
                            "};",
                            "",
                            "type PagedRequest = {",
                            "    offset: number;      // 0-based start index",
                            "    limit: number;       // max items to return",
                            "    search?: string;     // active search query",
                            "    sortBy?: string;     // column name from TableHeading.name",
                            '    sortOrder?: "asc" | "desc";',
                            "};",
                            "",
                            "// pageSize: 3 -- 3 rows per page, 35 total => 12 pages",
                            "const { tableProps } = useComplexTable({",
                            "    totalCount: 35,",
                            "    pageSize: 3,",
                            "    loadPage,",
                            "});",
                        ].join("\n")}
                    />
                }
            >
                <ComplexTable
                    {...optionsTableProps}
                    items={optionsItems}
                    headings={simpleHeadings}
                    itemComponent={EmployeeRow}
                    noItemsCaption="No employees found"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="UseComplexTableResult"
                description="Return value of the hook. Spread tableProps directly onto ComplexTable. selectedRows holds the ids of currently selected rows -- it updates automatically as the user checks/unchecks rows. Select rows in the table below to see the array update."
                code={
                    <CodeExample
                        code={[
                            "type UseComplexTableResult = {",
                            "    // Currently selected row identifiers (item.id values)",
                            "    selectedRows: Array<string>;",
                            "",
                            "    // Spread onto ComplexTable to wire up all managed state",
                            "    tableProps: {",
                            "        containerRef: RefObject<HTMLDivElement>; // scroll management",
                            "        pagesCount: number;",
                            "        currentPage: number;",
                            "        hasActiveSearch: boolean;",
                            "        loading: boolean;           // true while loadPage is running",
                            "        currentSortColumn?: SortColumn;",
                            "        onPageChange: (page: number) => void;",
                            "        onSearch: (query: string) => void;",
                            "        onSortChange: (sortColumn?: SortColumn) => void;",
                            "        onSelectionChange: (selectedIds: Array<string>) => void;",
                            "    };",
                            "};",
                            "",
                            "const { tableProps, selectedRows } = useComplexTable({ ... });",
                            "",
                            "// selectedRows updates automatically when rows are checked:",
                            "console.log(selectedRows); // e.g. [\"3\", \"7\", \"12\"]",
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <ComplexTable
                        {...resultTableProps}
                        items={resultItems}
                        headings={simpleHeadings}
                        itemComponent={EmployeeRow}
                        selectedRows={resultSelectedRows}
                        selectionBarConfig={resultSelectionBarConfig}
                        noItemsCaption="No employees found"
                    />
                    <p className="mt-2 has-text-grey">
                        <code>selectedRows</code>
                        {": "}
                        {resultSelectedRows.length === 0
                            ? "[]"
                            : `[${resultSelectedRows.map(id => `"${id}"`).join(", ")}]`
                        }
                    </p>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                caption="Important notes"
                description={
                    <ul>
                        <li>
                            The hook assumes the <strong>first page of data is already loaded</strong> and
                            passed to <code>ComplexTable</code> as <code>items</code>.
                            It does not call <code>loadPage</code> on mount.
                        </li>
                        <li>
                            <code>loadPage</code> must be stable (wrapped in <code>useCallback</code>)
                            to avoid infinite re-renders.
                        </li>
                        <li>
                            Always pass <code>selectedRows</code> from the hook result back to{" "}
                            <code>ComplexTable</code> to keep selection state in sync.
                        </li>
                        <li>
                            See the <Link to="/components/complexTable"><strong>ComplexTable</strong></Link> demo page for a full live example
                            with search, sorting, pagination, row actions, and row click.
                        </li>
                    </ul>
                }
                code={null}
            >
                {null}
            </ComponentUseCase>
        </section>
    );
};

export default UseComplexTablePage;
