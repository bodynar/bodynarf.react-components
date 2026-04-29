import { FC, useCallback, useRef, useState } from "react";

import PaginatorComponent from "@bodynarf/react.components/components/paginator";
import { ElementPosition, ButtonStyle } from "@bodynarf/react.components";

import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import ComponentPositionCase from "@app/sharedComponents/positionUse";
import Log, { LogRef } from "@app/sharedComponents/log";
import CodeExample from "@app/sharedComponents/codeExample";

/** Paginator component demo */
const Paginator: FC = () => {
    const [page, setPage] = useState(1);
    const logRef = useRef<LogRef>(null);
    const appendLog = useCallback(
        (p: number) => {
            logRef.current?.append(`page changed to ${p}`);
            setPage(p);
        },
        []
    );

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Paginator"
                version="1.4"
                baseTypeName="BaseElementProps"
                description="A component to simplify navigation between pages (pages must be defined externally)"
            />

            <ComponentUseCase
                caption="Minimal use"
                description="The minimal set of props consists of the number of pages and the page change event handler function"
                code={
                    <CodeExample
                        code={[
                            `import Paginator from "@bodynarf/react.components/components/paginator";`,
                            "",
                            '<Paginator',
                            '    count={10}',
                            '    currentPage={1}',
                            '    onPageChange={setPage}',
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

            <hr />

            <div className="block">
                <h4 className="subtitle is-4">Custom component props</h4>
            </div>

            <ComponentUseCase
                captionIsCode
                caption="currentPage"
                description="The number of the current page. Must be stored and updated externally."
                code={
                    <CodeExample
                        code={[
                            `import Paginator from "@bodynarf/react.components/components/paginator";`,
                            "",
                            '<Paginator',
                            '    count={10}',
                            '    currentPage={5}',
                            '    onPageChange={setPage}',
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
                description="The component can be aligned differently relative to the center."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementPosition } from "@bodynarf/react.components";`,
                            `import Paginator from "@bodynarf/react.components/components/paginator";`,
                            "",
                            '<Paginator',
                            '    count={10}',
                            '    currentPage={page}',
                            '    onPageChange={setPage}',
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
                description="Option to use rounded navigation buttons. Disabled by default."
                code={
                    <CodeExample
                        code={[
                            `import Paginator from "@bodynarf/react.components/components/paginator";`,
                            "",
                            '<Paginator',
                            '    rounded',
                            '    count={10}',
                            '    currentPage={page}',
                            '    onPageChange={setPage}',
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
                description="The component supports all sizes defined in the ElementSize type."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementSize } from "@bodynarf/react.components";`,
                            `import Paginator from "@bodynarf/react.components/components/paginator";`,
                            "",
                            '<Paginator',
                            '    count={10}',
                            '    currentPage={page}',
                            '    onPageChange={setPage}',
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
                caption="nearPagesCount"
                description="Number of adjacent pages shown to the left and right of the current one. Default is 3."
                code={
                    <CodeExample
                        code={[
                            `import Paginator from "@bodynarf/react.components/components/paginator";`,
                            "",
                            '<Paginator',
                            '    count={10}',
                            '    nearPagesCount={1}',
                            '    currentPage={page}',
                            '    onPageChange={setPage}',
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
                caption="ariaLabel"
                description={<>Accessible label for the <code>{"<nav>"}</code> element. Defaults to <code>pagination</code>.</>}
                code={
                    <CodeExample
                        code={[
                            `import Paginator from "@bodynarf/react.components/components/paginator";`,
                            "",
                            '<Paginator',
                            '    count={10}',
                            '    currentPage={page}',
                            '    onPageChange={setPage}',
                            '    ariaLabel="Product list pagination"',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <PaginatorComponent
                    count={10}
                    currentPage={page}
                    onPageChange={setPage}
                    ariaLabel="Product list pagination"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="nextButtonsConfig"
                description={<>Configuration for Previous/Next navigation buttons. Replaces the deprecated <code>showNextButtons</code> prop. The <code>style</code> field controls button placement: <code>inline</code> — between page numbers, <code>aside</code> — at outer edges.</>}
                code={
                    <CodeExample
                        code={[
                            `import { ButtonStyle } from "@bodynarf/react.components";`,
                            `import Paginator from "@bodynarf/react.components/components/paginator";`,
                            "",
                            '<Paginator',
                            '    count={10}',
                            '    currentPage={page}',
                            '    onPageChange={setPage}',
                            '    nextButtonsConfig={{',
                            '        previousButtonConfig: { caption: "← Prev", style: ButtonStyle.Default },',
                            '        nextButtonConfig: { caption: "Next →", style: ButtonStyle.Default },',
                            '        style: "inline",',
                            '    }}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <p className="mb-2 is-size-7 has-text-grey is-italic">style: inline</p>
                    <PaginatorComponent
                        count={10}
                        currentPage={page}
                        onPageChange={setPage}
                        nextButtonsConfig={{
                            previousButtonConfig: { caption: "← Prev", style: ButtonStyle.Default },
                            nextButtonConfig: { caption: "Next →", style: ButtonStyle.Default },
                            style: "inline",
                        }}
                    />
                    <p className="mt-3 mb-2 is-size-7 has-text-grey is-italic">style: aside</p>
                    <PaginatorComponent
                        count={10}
                        currentPage={page}
                        onPageChange={setPage}
                        nextButtonsConfig={{
                            previousButtonConfig: { caption: "← Prev", style: ButtonStyle.Default },
                            nextButtonConfig: { caption: "Next →", style: ButtonStyle.Default },
                            style: "aside",
                        }}
                    />
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="pageButtonsConfig"
                description="Configuration for page number buttons. Allows customising the style of default (inactive) and active page buttons independently."
                code={
                    <CodeExample
                        code={[
                            `import { ButtonStyle } from "@bodynarf/react.components";`,
                            `import Paginator from "@bodynarf/react.components/components/paginator";`,
                            "",
                            '<Paginator',
                            '    count={10}',
                            '    currentPage={page}',
                            '    onPageChange={setPage}',
                            '    pageButtonsConfig={{',
                            '        default: { style: ButtonStyle.Default },',
                            '        active: { style: ButtonStyle.Primary, outlined: true },',
                            '    }}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <PaginatorComponent
                    count={10}
                    currentPage={page}
                    onPageChange={setPage}
                    pageButtonsConfig={{
                        default: { style: ButtonStyle.Default },
                        active: { style: ButtonStyle.Primary, outlined: true },
                    }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="resources"
                description="Configuration of displayed component labels for Previous/Next buttons and page titles."
                code={
                    <CodeExample
                        code={[
                            `import Paginator from "@bodynarf/react.components/components/paginator";`,
                            "",
                            '<Paginator',
                            '    count={10}',
                            '    showNextButtons',
                            '    currentPage={page}',
                            '    onPageChange={setPage}',
                            '    resources={{',
                            '        previousPageCaption: "previousPageCaption",',
                            '        previousPageTitle: "previousPageTitle",',
                            '        nextPageCaption: "nextPageCaption",',
                            '        nextPageTitle: "nextPageTitle",',
                            '        openConcretePageTitleTemplate: "openConcretePageTitleTemplate {0}",',
                            '    }}',
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
                    nearPagesCount={1}
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
                description="Page change event handler. Receives the new page number."
                code={
                    <CodeExample
                        code={[
                            `import { useCallback } from "react";`,
                            "",
                            `import Paginator from "@bodynarf/react.components/components/paginator";`,
                            "",
                            "const handlePageChange = useCallback((page: number) => { /* handler fn */ }, []);",
                            "",
                            '<Paginator',
                            '    count={10}',
                            '    currentPage={page}',
                            '    onPageChange={handlePageChange}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <PaginatorComponent
                    count={10}
                    currentPage={page}
                    onPageChange={appendLog}
                />
                <Log ref={logRef} />
            </ComponentUseCase>
        </section>
    );
};

export default Paginator;
