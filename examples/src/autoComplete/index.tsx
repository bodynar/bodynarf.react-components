import { FC, useState } from "react";

import AutoComplete from "@bodynarf/react.components/components/primitives/autoComplete";
import { AutoCompleteItem } from "@bodynarf/react.components";

const COUNTRIES: AutoCompleteItem[] = [
    "Afghanistan", "Albania", "Algeria", "Argentina", "Australia", "Austria",
    "Belgium", "Brazil", "Canada", "Chile", "China", "Colombia", "Croatia",
    "Czech Republic", "Denmark", "Egypt", "Finland", "France", "Germany",
    "Greece", "Hungary", "India", "Indonesia", "Iran", "Iraq", "Ireland",
    "Israel", "Italy", "Japan", "Jordan", "Kenya", "Malaysia", "Mexico",
    "Morocco", "Netherlands", "New Zealand", "Nigeria", "Norway", "Pakistan",
    "Peru", "Philippines", "Poland", "Portugal", "Romania", "Russia",
    "Saudi Arabia", "South Africa", "Spain", "Sweden", "Switzerland",
    "Thailand", "Turkey", "Ukraine", "United Kingdom", "United States",
    "Vietnam", "Yemen", "Zimbabwe",
].map((c, i) => ({ id: String(i), label: c }));

const LANGS: AutoCompleteItem[] = [
    { id: "ts", label: "TypeScript", value: "ts" },
    { id: "js", label: "JavaScript", value: "js" },
    { id: "py", label: "Python", value: "py" },
    { id: "rs", label: "Rust", value: "rs" },
    { id: "go", label: "Go", value: "go" },
    { id: "java", label: "Java", value: "java" },
    { id: "cs", label: "C#", value: "cs" },
    { id: "cpp", label: "C++", value: "cpp" },
];

/** All AutoComplete component variations */
const AutoCompleteExamples: FC = () => {
    const [selected1, setSelected1] = useState<AutoCompleteItem | undefined>();
    const [selected2, setSelected2] = useState<AutoCompleteItem | undefined>();
    const [rawValue, setRawValue] = useState("");
    const [isSearching, setIsSearching] = useState(false);

    const asyncSearch = (query: string): Promise<AutoCompleteItem[]> => {
        setIsSearching(true);
        return new Promise(resolve => {
            setTimeout(() => {
                setIsSearching(false);
                resolve(COUNTRIES.filter(c => c.label.toLowerCase().includes(query.toLowerCase())).slice(0, 5));
            }, 600);
        });
    };

    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-3">AutoComplete</h1>

                {/* Static list */}
                <div className="box">
                    <p className="subtitle is-5">Static list</p>
                    <p className="help mb-4">Filters <code>items</code> client-side (60 countries).</p>
                    <AutoComplete
                        items={COUNTRIES}
                        placeholder="Search country..."
                        label={{ caption: "Country", horizontal: false }}
                        onSelect={setSelected1}
                    />
                    {selected1 && <p className="help mt-2">Selected: <strong>{selected1.label}</strong></p>}
                </div>

                {/* Separate value */}
                <div className="box">
                    <p className="subtitle is-5">Separate value/label</p>
                    <p className="help mb-4">
                        Each item has a distinct <code>value</code> (language code) separate from its displayed <code>label</code>.
                    </p>
                    <AutoComplete
                        items={LANGS}
                        placeholder="Search language…"
                        onSelect={setSelected2}
                    />
                    {selected2 && <p className="help mt-2">Value: <strong>{selected2.value}</strong>, Label: <strong>{selected2.label}</strong></p>}
                </div>

                {/* maxSuggestions */}
                <div className="box">
                    <p className="subtitle is-5">maxSuggestions</p>
                    <p className="help mb-4">Limits dropdown to 3 results.</p>
                    <AutoComplete
                        items={COUNTRIES}
                        placeholder="Search..."
                        maxSuggestions={3}
                    />
                </div>

                {/* noResultsText */}
                <div className="box">
                    <p className="subtitle is-5">noResultsText</p>
                    <p className="help mb-4">Shown when the query has no matches. Try typing "xyz".</p>
                    <AutoComplete
                        items={COUNTRIES}
                        placeholder="Search..."
                        noResultsText="Nothing found - try a different term"
                    />
                </div>

                {/* Async onSearch */}
                <div className="box">
                    <p className="subtitle is-5">Async onSearch</p>
                    <p className="help mb-4">Simulates a 600 ms server search with a spinner.</p>
                    <AutoComplete
                        onSearch={asyncSearch}
                        isSearching={isSearching}
                        placeholder="Search..."
                    />
                </div>

                {/* onValueChange */}
                <div className="box">
                    <p className="subtitle is-5">onValueChange</p>
                    <p className="help mb-4">Fires on every keystroke (before selection).</p>
                    <AutoComplete
                        items={COUNTRIES}
                        placeholder="Type to see raw value..."
                        onValueChange={setRawValue}
                    />
                    <p className="help mt-2">Raw: <strong>{rawValue || "(empty)"}</strong></p>
                </div>

                {/* Clearable */}
                <div className="box">
                    <p className="subtitle is-5">clearable</p>
                    <p className="help mb-4">Shows a clear button after an item is selected.</p>
                    <AutoComplete
                        items={COUNTRIES}
                        placeholder="Pick a country..."
                        clearable
                    />
                </div>

                {/* defaultValue */}
                <div className="box">
                    <p className="subtitle is-5">defaultValue</p>
                    <p className="help mb-4">Field is pre-filled on mount.</p>
                    <AutoComplete
                        items={COUNTRIES}
                        defaultValue="France"
                    />
                </div>

                {/* Disabled / readonly */}
                <div className="box">
                    <p className="subtitle is-5">Disabled and readonly</p>
                    <div className="columns">
                        <div className="column">
                            <p className="help mb-2">Disabled</p>
                            <AutoComplete items={COUNTRIES} placeholder="Disabled..." disabled defaultValue="Germany" />
                        </div>
                        <div className="column">
                            <p className="help mb-2">Readonly</p>
                            <AutoComplete items={COUNTRIES} placeholder="Readonly..." readonly defaultValue="Spain" />
                        </div>
                    </div>
                </div>

                {/* Custom debounce */}
                <div className="box">
                    <p className="subtitle is-5">Custom debounce (800 ms)</p>
                    <p className="help mb-4">Waits 800 ms after last keystroke before filtering.</p>
                    <AutoComplete
                        items={COUNTRIES}
                        debounce={800}
                        placeholder="Type slowly..."
                    />
                </div>
            </div>
        </section>
    );
};

export default AutoCompleteExamples;
