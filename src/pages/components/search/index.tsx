import { FC, useCallback, useState } from "react";

import { emptyFn, isNullOrEmpty } from "@bodynarf/utils";
import { SelectableItem } from "@bodynarf/react.components";
import Icon from "@bodynarf/react.components/components/icon";
import SearchComponent from "@bodynarf/react.components/components/search";

import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import CodeExample from "@app/sharedComponents/codeExample";
import ComponentEnumCase from "@app/sharedComponents/enumSelectionCase";

const searchTypes: Array<"byTyping" | "byButton"> = [
    "byTyping", "byButton"
];

const searchTypesAsSelectList = searchTypes.map((x, i) => ({
    displayValue: x,
    id: i.toString(),
    value: x,
}) as SelectableItem);

/** Search component demo */
const Search: FC = () => {
    const [byButtonClickLog, setByButtonClickLog] = useState("");
    const appendByButtonClickLog = useCallback(
        (searchPattern: string) => setByButtonClickLog(
            t => t
                + "\n"
                + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getMilliseconds()
                + " => " + "search with " + (isNullOrEmpty(searchPattern) ? "[none]" : `"${searchPattern}"`)
        ),
        []
    );
    const [byTypingLog, setByTypingLog] = useState("");
    const appendByTypingLog = useCallback(
        (searchPattern: string) => setByTypingLog(
            t => t
                + "\n"
                + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getMilliseconds()
                + " => " + "search with " + (isNullOrEmpty(searchPattern) ? "[none]" : `"${searchPattern}"`)
        ),
        []
    );

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Search"
                baseTypeName="BaseElementProps"
                description="Block for performing search. Represents a search bar and a button in button mode"
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Minimal set of component props: caption, search type and search event handler"
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import SearchComponent from "@bodynarf/react.components/components/search";`,
                            "",
                            "/* ... */",
                            "",
                            '<SearchComponent',
                            '    onSearch={emptyFn} // TODO: Replace with your own handler function',
                            '    caption="Minimal use"',
                            '    searchType="byButton"',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <SearchComponent
                    onSearch={emptyFn}
                    caption="Minimal use"
                    searchType="byButton"
                />
            </ComponentUseCase>

            <ComponentEnumCase
                captionIsCode
                caption="searchType"
                enumNames={searchTypes}
                lookupValues={searchTypesAsSelectList}
                description="Search type can be either by button or by typing"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import SearchComponent from "@bodynarf/react.components/components/search";`,
                            "",
                            "/* ... */",
                            "",
                            '<SearchComponent',
                            '    onSearch={emptyFn} // TODO: Replace with your own handler function',
                            '    caption="Minimal use"',
                            `    searchType="${id}"`,
                            '/>',
                        ].join("\n")}
                    />
                }
                componentProvider={
                    (value: "byTyping" | "byButton") =>
                        <SearchComponent
                            onSearch={emptyFn}
                            searchType={value}
                            caption="Minimal use"
                        />
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="defaultValue"
                description="Option to set the initial search value"
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import SearchComponent from "@bodynarf/react.components/components/search";`,
                            "",
                            "/* ... */",
                            "",
                            '<SearchComponent',
                            '    onSearch={emptyFn} // TODO: Replace with your own handler function',
                            '    searchType="byButton"',
                            '    caption="Search caption"',
                            '    defaultValue="Default search query"',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <SearchComponent
                    onSearch={emptyFn}
                    searchType="byButton"
                    caption="Search caption"
                    defaultValue="Default search query"
                />
            </ComponentUseCase>

            <ComponentSizeCase
                captionIsCode
                caption="size"
                description="The component supports all sizes defined in the ElementSize type"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import { ElementSize } from "@bodynarf/react.components";`,
                            `import SearchComponent from "@bodynarf/react.components/components/search";`,
                            "",
                            "/* ... */",
                            "",
                            '<SearchComponent',
                            '    onSearch={emptyFn} // TODO: Replace with your own handler function',
                            '    caption="Size use"',
                            '    searchType="byButton"',
                            `    size={ElementSize.${id}}`,
                            '/>',
                        ].join("\n")}
                    />
                }
                componentProvider={
                    size =>
                        <SearchComponent
                            size={size}
                            onSearch={emptyFn}
                            caption="Size use"
                            searchType="byButton"
                        />
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="rounded"
                description="Option to use rounded elements. Disabled by default"
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import SearchComponent from "@bodynarf/react.components/components/search";`,
                            "",
                            "/* ... */",
                            "",
                            '<SearchComponent',
                            '    rounded',
                            '    onSearch={emptyFn} // TODO: Replace with your own handler function',
                            '    searchType="byButton"',
                            '    caption="Search caption"',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <SearchComponent
                    rounded
                    onSearch={emptyFn}
                    searchType="byButton"
                    caption="Search caption"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="disabled"
                description="Option to disable the component functionality and render it in a disabled state. Disabled by default"
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import SearchComponent from "@bodynarf/react.components/components/search";`,
                            "",
                            "/* ... */",
                            "",
                            '<SearchComponent',
                            '    disabled',
                            '    onSearch={emptyFn} // TODO: Replace with your own handler function',
                            '    searchType="byButton"',
                            '    caption="Search caption"',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <SearchComponent
                    disabled
                    onSearch={emptyFn}
                    searchType="byButton"
                    caption="Search caption"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="isLoading"
                description="Option to set component to a loading state. Disabled by default"
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import SearchComponent from "@bodynarf/react.components/components/search";`,
                            "",
                            "/* ... */",
                            "",
                            '<SearchComponent',
                            '    isLoading',
                            '    onSearch={emptyFn} // TODO: Replace with your own handler function',
                            '    searchType="byButton"',
                            '    caption="Search caption"',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <SearchComponent
                    isLoading
                    onSearch={emptyFn}
                    searchType="byButton"
                    caption="Search caption"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="autoFocus"
                description={
                    <>
                        Option to set focus on the component input field on initial render
                        <br />
                        <Icon
                            name="exclamation-triangle-fill"
                            className="has-text-warning"
                        />
                        {` `}
                        <span>
                            Only 1 element on the page can have this flag
                        </span>
                        <br />
                        <span className="is-italic">
                            Refresh the page and check which component (from the presented examples) received automatic focus
                        </span>
                    </>
                }
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import SearchComponent from "@bodynarf/react.components/components/search";`,
                            "",
                            "/* ... */",
                            "",
                            '<SearchComponent',
                            '    autoFocus',
                            '    onSearch={emptyFn} // TODO: Replace with your own handler function',
                            '    searchType="byButton"',
                            '    caption="Search caption"',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <SearchComponent
                    autoFocus
                    onSearch={emptyFn}
                    searchType="byButton"
                    caption="Search caption"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="searchButtonCaption"
                description={
                    <>
                        Text of the search button
                        <br />
                        Applied only when
                        {` `}
                        <code>
                            type=&quot;byButton&quot;
                        </code>
                    </>
                }
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import SearchComponent from "@bodynarf/react.components/components/search";`,
                            "",
                            "/* ... */",
                            "",
                            '<SearchComponent',
                            '    onSearch={emptyFn} // TODO: Replace with your own handler function',
                            '    searchType="byButton"',
                            '    caption="Search caption"',
                            `    searchButtonCaption="I'm feeling lucky!"`,
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <SearchComponent
                    onSearch={emptyFn}
                    searchType="byButton"
                    caption="Search caption"
                    searchButtonCaption="I'm feeling lucky!"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="searchButtonTitle"
                description={
                    <>
                        Tooltip of the search button when hovering with mouse
                        <br />
                        Applied only when
                        {` `}
                        <code>
                            type=&quot;byButton&quot;
                        </code>
                    </>
                }
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import SearchComponent from "@bodynarf/react.components/components/search";`,
                            "",
                            "/* ... */",
                            "",
                            '<SearchComponent',
                            '    onSearch={emptyFn} // TODO: Replace with your own handler function',
                            '    searchType="byButton"',
                            '    caption="Search caption"',
                            `    searchButtonTitle="Start search"`,
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <SearchComponent
                    onSearch={emptyFn}
                    searchType="byButton"
                    caption="Search caption"
                    searchButtonTitle="Start search"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onSearch"
                description="Search event handler in button mode"
                code={
                    <CodeExample
                        code={[
                            `import { useCallback } from "react"`,
                            "",
                            `import SearchComponent from "@bodynarf/react.components/components/search";`,
                            "",
                            "/* ... */",
                            "const ON_SEARCH_HANDLE_FN = useCallback((searchPattern: string) => { /* handler fn */}, []);",
                            "/* ... */",
                            "",
                            '<SearchComponent',
                            '    searchType="byButton"',
                            '    caption="Search caption"',
                            '    onSearch={ON_SEARCH_HANDLE_FN}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <SearchComponent
                    onSearch={appendByButtonClickLog}
                    searchType="byButton"
                    caption="Search caption"
                    searchButtonTitle="Start search"
                />
                <p style={{ whiteSpace: "pre-line" }}>
                    {byButtonClickLog}
                </p>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onSearch"
                description="Search event handler in typing mode"
                code={
                    <CodeExample
                        code={[
                            `import { useCallback } from "react"`,
                            "",
                            `import SearchComponent from "@bodynarf/react.components/components/search";`,
                            "",
                            "/* ... */",
                            "const ON_SEARCH_HANDLE_FN = useCallback((searchPattern: string) => { /* handler fn */}, []);",
                            "/* ... */",
                            "",
                            '<SearchComponent',
                            '    searchType="byTyping"',
                            '    caption="Search caption"',
                            '    onSearch={ON_SEARCH_HANDLE_FN}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <SearchComponent
                    searchType="byTyping"
                    caption="Search caption"
                    onSearch={appendByTypingLog}
                />
                <p style={{ whiteSpace: "pre-line" }}>
                    {byTypingLog}
                </p>
            </ComponentUseCase>
        </section>
    );
};

export default Search;
