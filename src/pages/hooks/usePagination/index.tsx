import { FC } from "react";

import { usePagination } from "@bodynarf/react.components";

import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import ComponentUseCase from "@app/sharedComponents/useCase";
import CodeExample from "@app/sharedComponents/codeExample";

const demoItems = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

/** usePagination hook demo */
const UsePaginationPage: FC = () => {
    const [paginationState, getPageItems] = usePagination(demoItems.length, 5);
    const currentPageItems = getPageItems(demoItems) as string[];

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="usePagination"
                description="Hook for pagination state management. Returns paginator state and a function to slice current page items."
            />

            <ComponentUseCase
                caption="Basic usage"
                description="Paginate through a list of 50 items with 5 items per page."
                code={
                    <CodeExample
                        code={[
                            `import { usePagination } from "@bodynarf/react.components/hooks";`,
                            "",
                            "const MyComponent = () => {",
                            "    const items = ['Item 1', 'Item 2', /* ... */];",
                            "    const [state, getPageItems] = usePagination(items.length, 5);",
                            "    const currentItems = getPageItems(items);",
                            "",
                            "    return (",
                            "        <div>",
                            "            <ul>",
                            "                {currentItems.map(item => <li>{item}</li>)}",
                            "            </ul>",
                            "            <p>Page {state.currentPage} of {state.pagesCount}</p>",
                            "            <button onClick={() => state.onPageChange(state.currentPage + 1)}>",
                            "                Next",
                            "            </button>",
                            "        </div>",
                            "    );",
                            "};",
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <ul className="mb-2">
                        {currentPageItems.map(item => (
                            <li key={item}>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <p className="is-size-7 mb-2">
                        {`Page ${paginationState.currentPage} of ${paginationState.pagesCount}`}
                    </p>
                    <div className="buttons are-small">
                        <button
                            type="button"
                            className="button"
                            disabled={paginationState.currentPage === 1}
                            onClick={() => paginationState.onPageChange(paginationState.currentPage - 1)}
                        >
                            Previous
                        </button>
                        <button
                            type="button"
                            className="button"
                            disabled={paginationState.currentPage === paginationState.pagesCount}
                            onClick={() => paginationState.onPageChange(paginationState.currentPage + 1)}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </ComponentUseCase>
        </section>
    );
};

export default UsePaginationPage;
