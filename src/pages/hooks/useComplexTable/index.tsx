import { FC } from "react";

import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import ComponentUseCase from "@app/sharedComponents/useCase";
import CodeExample from "@app/sharedComponents/codeExample";

/** useComplexTable hook demo */
const UseComplexTablePage: FC = () => {
    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="useComplexTable"
                version="1.15"
                description="Hook for managing ComplexTable state: server-side pagination, search, sorting, multi-row selection, loading overlay, and scroll restoration. Designed to be used exclusively with the ComplexTable component."
            />

            <ComponentUseCase
                caption="Overview"
                description="The hook accepts a loadPage function (called on each navigation, search, or sort change), the total item count known at initialization, and an optional page size. It returns ready-to-spread tableProps for ComplexTable and the current selectedRows array."
                code={
                    <CodeExample
                        code={[
                            `import { useComplexTable, PagedRequest } from "@bodynarf/react.components/hooks";`,
                            `import { ComplexTable } from "@bodynarf/react.components";`,
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
            />

            <ComponentUseCase
                captionIsCode
                caption="UseComplexTableOptions"
                description="Input options passed to the hook."
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
                        ].join("\n")}
                    />
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="UseComplexTableResult"
                description="Return value of the hook. Spread tableProps directly onto ComplexTable."
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
                        ].join("\n")}
                    />
                }
            />

            <ComponentUseCase
                caption="Important notes"
                description={
                    <>
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
                                Always pass <code>selectedRows</code> from the hook result back to
                                <code>ComplexTable</code> to keep selection state in sync.
                            </li>
                            <li>
                                See the <strong>ComplexTable</strong> demo page for a full live example
                                with search, sorting, pagination, row actions, and row click.
                            </li>
                        </ul>
                    </>
                }
            />
        </section>
    );
};

export default UseComplexTablePage;
