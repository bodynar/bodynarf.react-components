import { FC, useRef } from "react";

import { AutoComplete as AutoCompleteComponent, AutoCompleteItem } from "@bodynarf/react.components";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";
import Log, { LogRef } from "@app/sharedComponents/log";

const staticItems: AutoCompleteItem[] = [
    { id: "1", label: "Apple" },
    { id: "2", label: "Apricot" },
    { id: "3", label: "Banana" },
    { id: "4", label: "Blueberry" },
    { id: "5", label: "Cherry" },
    { id: "6", label: "Grape" },
    { id: "7", label: "Mango" },
    { id: "8", label: "Orange" },
    { id: "9", label: "Peach" },
    { id: "10", label: "Pear" },
];

/** AutoComplete component demo */
const AutoComplete: FC = () => {
    const minimalLogRef = useRef<LogRef>(null);
    const onSearchLogRef = useRef<LogRef>(null);
    const onSelectLogRef = useRef<LogRef>(null);
    const onValueChangeLogRef = useRef<LogRef>(null);
    const debounceLogRef = useRef<LogRef>(null);
    const clearableLogRef = useRef<LogRef>(null);
    const clearTitleLogRef = useRef<LogRef>(null);

    const handleAsyncSearch = async (query: string): Promise<AutoCompleteItem[]> => {
        await new Promise(resolve => setTimeout(resolve, 300));
        return staticItems.filter(item =>
            item.label.toLowerCase().includes(query.toLowerCase())
        );
    };

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="AutoComplete"
                version="1.15"
                baseTypeName="BaseInputElementProps"
                description="Text input with dropdown suggestions for search and selection. Supports static items (local filter) and async onSearch for server-side lookup."
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Pass items for local filtering. Suggestions are filtered automatically as the user types."
                code={
                    <CodeExample
                        code={[
                            `import { AutoComplete } from "@bodynarf/react.components";`,
                            "",
                            `const items = [`,
                            `    { id: "1", label: "Apple" },`,
                            `    { id: "2", label: "Banana" },`,
                            `    // ...`,
                            `];`,
                            "",
                            `<AutoComplete`,
                            `    items={items}`,
                            `    placeholder="Search fruit..."`,
                            `    onSelect={item => console.log(item)}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <AutoCompleteComponent
                        items={staticItems}
                        placeholder="Search fruit..."
                        onSelect={item => minimalLogRef.current?.append(
                            item ? `selected: ${item.label} (id=${item.id})` : "cleared"
                        )}
                    />
                    <Log ref={minimalLogRef} />
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onSearch"
                description="Provide onSearch for server-side lookup. The returned array becomes the suggestion list."
                code={
                    <CodeExample
                        code={[
                            `import { AutoComplete } from "@bodynarf/react.components";`,
                            "",
                            `const handleSearch = async (query: string) => {`,
                            `    const results = await fetchSuggestions(query);`,
                            `    return results;`,
                            `};`,
                            "",
                            `<AutoComplete`,
                            `    placeholder="Type to search..."`,
                            `    onSearch={handleSearch}`,
                            `    onSelect={item => console.log(item)}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <AutoCompleteComponent
                        placeholder="Type to search (simulated async)..."
                        onSearch={async query => {
                            const results = await handleAsyncSearch(query);
                            onSearchLogRef.current?.append(`search("${query}") => [${results.map(r => r.label).join(", ")}]`);
                            return results;
                        }}
                    />
                    <Log ref={onSearchLogRef} />
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onSelect"
                description="Called when the user clicks a suggestion. Receives the selected AutoCompleteItem."
                code={
                    <CodeExample
                        code={[
                            `import { AutoComplete, AutoCompleteItem } from "@bodynarf/react.components";`,
                            "",
                            `<AutoComplete`,
                            `    items={items}`,
                            `    onSelect={(item: AutoCompleteItem | undefined) => console.log(item)}`,
                            `    placeholder="Search..."`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <AutoCompleteComponent
                        items={staticItems}
                        placeholder="Select a fruit..."
                        onSelect={item => onSelectLogRef.current?.append(
                            item ? `{ id: "${item.id}", label: "${item.label}" }` : "undefined"
                        )}
                    />
                    <Log ref={onSelectLogRef} />
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onValueChange"
                description="Called on every keystroke with the current raw text value, before a suggestion is confirmed."
                code={
                    <CodeExample
                        code={[
                            `import { AutoComplete } from "@bodynarf/react.components";`,
                            "",
                            `<AutoComplete`,
                            `    items={items}`,
                            `    onValueChange={value => console.log(value)}`,
                            `    placeholder="Search..."`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <AutoCompleteComponent
                        items={staticItems}
                        placeholder="Type something..."
                        onValueChange={value => onValueChangeLogRef.current?.append(`"${value}"`)}
                    />
                    <Log ref={onValueChangeLogRef} />
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="debounce"
                description="Delay in milliseconds before onSearch is triggered after the user stops typing. Default is 300 ms."
                code={
                    <CodeExample
                        code={[
                            `import { AutoComplete } from "@bodynarf/react.components";`,
                            "",
                            `<AutoComplete`,
                            `    debounce={600}`,
                            `    onSearch={handleSearch}`,
                            `    placeholder="600 ms debounce..."`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <AutoCompleteComponent
                        debounce={600}
                        onSearch={async query => {
                            const results = await handleAsyncSearch(query);
                            debounceLogRef.current?.append(`search("${query}") => [${results.map(r => r.label).join(", ")}]`);
                            return results;
                        }}
                        placeholder="600 ms debounce (notice the delay)..."
                    />
                    <Log ref={debounceLogRef} />
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="noResultsText"
                description="Text shown in the dropdown when the query matches nothing."
                code={
                    <CodeExample
                        code={[
                            `import { AutoComplete } from "@bodynarf/react.components";`,
                            "",
                            `<AutoComplete`,
                            `    items={items}`,
                            `    noResultsText="Nothing found"`,
                            `    placeholder="Search..."`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <AutoCompleteComponent
                    items={staticItems}
                    noResultsText="Nothing found"
                    placeholder='Try "zzz" to trigger no-results...'
                    onSelect={() => undefined}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="maxSuggestions"
                description="Limits the number of suggestions shown in the dropdown. Default is 8."
                code={
                    <CodeExample
                        code={[
                            `import { AutoComplete } from "@bodynarf/react.components";`,
                            "",
                            `<AutoComplete`,
                            `    items={items}`,
                            `    maxSuggestions={3}`,
                            `    placeholder="Search..."`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <AutoCompleteComponent
                    items={staticItems}
                    maxSuggestions={3}
                    placeholder='Try "a" — only 3 results shown...'
                    onSelect={() => undefined}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="isSearching"
                description="When true, shows a loading indicator inside the dropdown. Useful when controlling async state manually."
                code={
                    <CodeExample
                        code={[
                            `import { AutoComplete } from "@bodynarf/react.components";`,
                            "",
                            `<AutoComplete`,
                            `    items={[]}`,
                            `    isSearching`,
                            `    placeholder="Loading..."`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <AutoCompleteComponent
                    items={[]}
                    isSearching
                    placeholder="Type anything — spinner is always visible..."
                    onSelect={() => undefined}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="clearable"
                description="Shows a clear button when a suggestion is confirmed. Clicking it resets the field and calls onSelect(undefined)."
                code={
                    <CodeExample
                        code={[
                            `import { AutoComplete } from "@bodynarf/react.components";`,
                            "",
                            `<AutoComplete`,
                            `    items={items}`,
                            `    clearable`,
                            `    placeholder="Clearable..."`,
                            `    onSelect={item => console.log(item)}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <AutoCompleteComponent
                        items={staticItems}
                        clearable
                        placeholder="Select and then clear..."
                        onSelect={item => clearableLogRef.current?.append(
                            item ? `selected: ${item.label}` : "cleared"
                        )}
                    />
                    <Log ref={clearableLogRef} />
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="clearTitle"
                description='Tooltip text for the clear button. Default is "Clear".'
                code={
                    <CodeExample
                        code={[
                            `import { AutoComplete } from "@bodynarf/react.components";`,
                            "",
                            `<AutoComplete`,
                            `    items={items}`,
                            `    clearable`,
                            `    clearTitle="Reset selection"`,
                            `    placeholder="Search..."`,
                            `    onSelect={item => console.log(item)}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <AutoCompleteComponent
                        items={staticItems}
                        clearable
                        clearTitle="Reset selection"
                        placeholder="Select something to see the custom clear title..."
                        onSelect={item => clearTitleLogRef.current?.append(
                            item ? `selected: ${item.label}` : "cleared"
                        )}
                    />
                    <Log ref={clearTitleLogRef} />
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="label"
                description="Wraps the input with a label element. Supports horizontal layout."
                code={
                    <CodeExample
                        code={[
                            `import { AutoComplete } from "@bodynarf/react.components";`,
                            "",
                            `<AutoComplete`,
                            `    items={items}`,
                            `    label={{ caption: "Fruit", horizontal: false }}`,
                            `    placeholder="Search..."`,
                            `    onSelect={setSelected}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "24px", flexWrap: "wrap", alignItems: "flex-start" }}>
                    <AutoCompleteComponent
                        items={staticItems}
                        label={{ caption: "Fruit", horizontal: false }}
                        placeholder="Search..."
                        onSelect={() => undefined}
                    />
                    <AutoCompleteComponent
                        items={staticItems}
                        label={{ caption: "Fruit", horizontal: true }}
                        placeholder="Horizontal..."
                        onSelect={() => undefined}
                    />
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="hint"
                description="Shows a hint message below the input."
                code={
                    <CodeExample
                        code={[
                            `import { AutoComplete } from "@bodynarf/react.components";`,
                            "",
                            `<AutoComplete`,
                            `    items={items}`,
                            `    label={{ caption: "Fruit", horizontal: false }}`,
                            `    hint={{ content: "Start typing to see suggestions" }}`,
                            `    placeholder="Search..."`,
                            `    onSelect={setSelected}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <AutoCompleteComponent
                    items={staticItems}
                    label={{ caption: "Fruit", horizontal: false }}
                    hint={{ content: "Start typing to see suggestions" }}
                    placeholder="Search..."
                    onSelect={() => undefined}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="disabled"
                description="Renders the input in a disabled state."
                code={
                    <CodeExample
                        code={[
                            `import { AutoComplete } from "@bodynarf/react.components";`,
                            "",
                            `<AutoComplete items={items} disabled placeholder="Disabled..." />`,
                        ].join("\n")}
                    />
                }
            >
                <AutoCompleteComponent
                    items={staticItems}
                    disabled
                    placeholder="Disabled..."
                    onSelect={() => undefined}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="defaultValue"
                description="Pre-fills the input with an initial value on mount."
                code={
                    <CodeExample
                        code={[
                            `import { AutoComplete } from "@bodynarf/react.components";`,
                            "",
                            `<AutoComplete`,
                            `    items={items}`,
                            `    defaultValue="Mango"`,
                            `    placeholder="Search..."`,
                            `    onSelect={item => console.log(item)}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <AutoCompleteComponent
                    items={staticItems}
                    defaultValue="Mango"
                    placeholder="Search..."
                    onSelect={() => undefined}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="readonly"
                description="Renders the input in a read-only state. The value is visible but cannot be changed."
                code={
                    <CodeExample
                        code={[
                            `import { AutoComplete } from "@bodynarf/react.components";`,
                            "",
                            `<AutoComplete`,
                            `    items={items}`,
                            `    readonly`,
                            `    defaultValue="Peach"`,
                            `    placeholder="Readonly..."`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <AutoCompleteComponent
                    items={staticItems}
                    readonly
                    defaultValue="Peach"
                    placeholder="Readonly..."
                    onSelect={() => undefined}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="rounded"
                description="Applies rounded borders to the input field."
                code={
                    <CodeExample
                        code={[
                            `import { AutoComplete } from "@bodynarf/react.components";`,
                            "",
                            `<AutoComplete`,
                            `    items={items}`,
                            `    rounded`,
                            `    placeholder="Search..."`,
                            `    onSelect={item => console.log(item)}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <AutoCompleteComponent
                    items={staticItems}
                    rounded
                    placeholder="Search..."
                    onSelect={() => undefined}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="loading"
                description="Displays a loading spinner at the right end of the input. Use for generic async state unrelated to suggestions search."
                code={
                    <CodeExample
                        code={[
                            `import { AutoComplete } from "@bodynarf/react.components";`,
                            "",
                            `<AutoComplete`,
                            `    items={items}`,
                            `    loading`,
                            `    placeholder="Loading..."`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <AutoCompleteComponent
                    items={staticItems}
                    loading
                    placeholder="Loading..."
                    onSelect={() => undefined}
                />
            </ComponentUseCase>

            <ComponentSizeCase
                captionIsCode
                caption="size"
                description="AutoComplete supports all ElementSize values"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { AutoComplete, ElementSize } from "@bodynarf/react.components";`,
                            "",
                            `<AutoComplete`,
                            `    items={items}`,
                            `    size={ElementSize.${id}}`,
                            `    placeholder="Search..."`,
                            `/>`,
                        ].join("\n")}
                    />
                }
                componentProvider={size =>
                    <AutoCompleteComponent
                        items={staticItems}
                        size={size}
                        placeholder="Search..."
                        onSelect={() => undefined}
                    />
                }
            />

            <ComponentColorCase
                captionIsCode
                caption="style"
                description="AutoComplete supports all ElementColor values"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { AutoComplete, ElementColor } from "@bodynarf/react.components";`,
                            "",
                            `<AutoComplete`,
                            `    items={items}`,
                            `    style={ElementColor.${id}}`,
                            `    placeholder="Search..."`,
                            `    onSelect={item => console.log(item)}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
                componentProvider={style =>
                    <AutoCompleteComponent
                        items={staticItems}
                        style={style}
                        placeholder="Search..."
                        onSelect={() => undefined}
                    />
                }
            />
        </section>
    );
};

export default AutoComplete;
