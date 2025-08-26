import { FC, useCallback, useState } from "react";

import { ElementPosition } from "@bodynarf/react.components";
import PaginatorComponent from "@bodynarf/react.components/components/paginator";

import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import ComponentPositionCase from "@app/sharedComponents/positionUse";
import CodeExample from "@app/sharedComponents/codeExample";

/** Paginator component demo */
const Paginator: FC = () => {
    const [page, setPage] = useState(1);
    const [text, setText] = useState("");
    const appendText = useCallback(
        (page: number) => {
            setText(
                t => t
                    + "\n"
                    + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getMilliseconds()
                    + " => " + "page changed to " + page
            );

            setPage(page);
        },
        []
    );

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Paginator"
                hidePropsNotice
                description="A component to simplify navigation between pages (pages must be defined externally)"
            />

            <ComponentUseCase
                caption="Minimal use"
                description="The minimal set of props consists of the number of pages and the page change event handler function"
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import PaginatorComponent from "@bodynarf/react.components/components/paginator";`,
                            "",
                            "/* ... */",
                            "",
                            '<PaginatorComponent',
                            '    count={10}',
                            '    onPageChange={emptyFn} // TODO: Replace with your own handler function',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <PaginatorComponent
                    count={10}
                    currentPage={page}
                    onPageChange={setPage}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="currentPage"
                description="The number of the current page. Must be stored and updated externally"
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import PaginatorComponent from "@bodynarf/react.components/components/paginator";`,
                            "",
                            "/* ... */",
                            "",
                            '<PaginatorComponent',
                            '    count={10}',
                            '    currentPage={5}',
                            '    onPageChange={emptyFn} // TODO: Replace with your own handler function',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <PaginatorComponent
                    count={10}
                    currentPage={5}
                    onPageChange={setPage}
                />
            </ComponentUseCase>

            <ComponentPositionCase
                captionIsCode
                caption="position"
                description="The component can be aligned differently relative to the center"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import { ElementPosition } from "@bodynarf/react.components";`,
                            `import PaginatorComponent from "@bodynarf/react.components/components/paginator";`,
                            "",
                            "/* ... */",
                            "",
                            '<PaginatorComponent',
                            '    count={10}',
                            '    onPageChange={emptyFn} // TODO: Replace with your own handler function',
                            `    position={ElementPosition.${id}}`,
                            '/>',
                        ].join("\n")}
                    />
                }
                componentProvider={
                    (position: ElementPosition) =>
                        <PaginatorComponent
                            count={10}
                            position={position}
                            currentPage={page}
                            onPageChange={setPage}
                        />
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="rounded"
                description="Option to use rounded navigation buttons. Disabled by default"
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import PaginatorComponent from "@bodynarf/react.components/components/paginator";`,
                            "",
                            "/* ... */",
                            "",
                            '<PaginatorComponent',
                            '    rounded',
                            '    count={10}',
                            '    onPageChange={emptyFn} // TODO: Replace with your own handler function',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <PaginatorComponent
                    rounded
                    count={10}
                    currentPage={page}
                    onPageChange={setPage}
                />
            </ComponentUseCase>

            <ComponentSizeCase
                captionIsCode
                caption="size"
                description="The component supports all sizes defined in the ElementSize type"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementSize } from "@bodynarf/react.components";`,
                            `import PaginatorComponent from "@bodynarf/react.components/components/paginator";`,
                            "",
                            "/* ... */",
                            "",
                            '<PaginatorComponent',
                            '    count={10}',
                            '    onPageChange={emptyFn} // TODO: Replace with your own handler function',
                            `    size={ElementSize.${id}}`,
                            '/>',
                        ].join("\n")}
                    />
                }
                componentProvider={
                    size =>
                        <PaginatorComponent
                            count={10}
                            size={size}
                            currentPage={page}
                            onPageChange={setPage}
                        />
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="showNextButtons"
                description="Option to display navigation buttons for adjacent pages. Disabled by default"
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import PaginatorComponent from "@bodynarf/react.components/components/paginator";`,
                            "",
                            "/* ... */",
                            "",
                            '<PaginatorComponent',
                            '    count={10}',
                            '    showNextButtons',
                            '    onPageChange={emptyFn} // TODO: Replace with your own handler function',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <PaginatorComponent
                    count={10}
                    showNextButtons
                    currentPage={page}
                    onPageChange={setPage}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="nearPagesCount"
                description="Parameter for specifying the number of adjacent pages to the left and right of the current one. Default is 2"
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import PaginatorComponent from "@bodynarf/react.components/components/paginator";`,
                            "",
                            "/* ... */",
                            "",
                            '<PaginatorComponent',
                            '    count={10}',
                            '    nearPagesCount={1}',
                            '    onPageChange={emptyFn} // TODO: Replace with your own handler function',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <PaginatorComponent
                    count={10}
                    nearPagesCount={1}
                    currentPage={page}
                    onPageChange={setPage}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="resources"
                description="Configuration of displayed component labels"
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import PaginatorComponent from "@bodynarf/react.components/components/paginator";`,
                            "",
                            "/* ... */",
                            "",
                            '<PaginatorComponent',
                            '    count={10}',
                            '    nearPagesCount={1}',
                            '    onPageChange={emptyFn} // TODO: Replace with your own handler function',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <PaginatorComponent
                    count={10}
                    currentPage={page}
                    onPageChange={setPage}
                    resources={{
                        previousPageCaption: "previousPageCaption",
                        previousPageTitle: "previousPageTitle",
                        nextPageCaption: "nextPageCaption",
                        nextPageTitle: "nextPageTitle",
                        openConcretePageTitleTemplate: "openConcretePageTitleTemplate {0}",
                    }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onPageChange"
                description="Page change event handler"
                code={
                    <CodeExample
                        code={[
                            `import { useCallback } from "react";`,
                            "",
                            `import PaginatorComponent from "@bodynarf/react.components/components/paginator";`,
                            "",
                            "/* ... */",
                            "const ON_PAGE_CHANGE_HANDLE_FN = useCallback(() => { /* handler fn */}, []);",
                            "/* ... */",
                            "",
                            '<PaginatorComponent',
                            '    count={10}',
                            '    nearPagesCount={1}',
                            '    onPageChange={ON_PAGE_CHANGE_HANDLE_FN}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <PaginatorComponent
                    count={10}
                    currentPage={page}
                    onPageChange={appendText}
                />
                <p style={{ whiteSpace: "pre-line" }}>
                    {text}
                </p>
            </ComponentUseCase>
        </section>
    );
};

export default Paginator;
