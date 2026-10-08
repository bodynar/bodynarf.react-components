import { FC, useState } from "react";

import Search from "@bodynarf/react.components/components/search";
import { ElementSize } from "@bodynarf/react.components";

const SearchExamples: FC = () => {
    const [query1, setQuery1] = useState("");
    const [query2, setQuery2] = useState("");

    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-3">Search</h1>

                {/* By typing */}
                <div className="box">
                    <p className="subtitle is-5">Search by Typing</p>
                    <p className="help mb-2">Fires <code>onSearch</code> on each keystroke.</p>
                    <Search
                        searchType="byTyping"
                        caption="Search..."
                        onSearch={setQuery1}
                    />
                    <p className="help mt-2">Query: <strong>{query1 || "(empty)"}</strong></p>
                </div>

                {/* By button */}
                <div className="box">
                    <p className="subtitle is-5">Search by Button</p>
                    <p className="help mb-2">Fires <code>onSearch</code> only when button is clicked (or Enter pressed).</p>
                    <Search
                        searchType="byButton"
                        caption="Search..."
                        onSearch={setQuery2}
                    />
                    <p className="help mt-2">Query: <strong>{query2 || "(empty)"}</strong></p>
                </div>

                {/* Custom button caption */}
                <div className="box">
                    <p className="subtitle is-5">Custom Button Caption</p>
                    <Search
                        searchType="byButton"
                        caption="Enter product name..."
                        searchButtonCaption="Find"
                        searchButtonTitle="Search products"
                        onSearch={() => {}}
                    />
                </div>

                {/* With icon */}
                <div className="box">
                    <p className="subtitle is-5">With Icon</p>
                    <Search
                        searchType="byTyping"
                        caption="Search with icon..."
                        showIcon
                        onSearch={() => {}}
                    />
                </div>

                {/* Sizes */}
                <div className="box">
                    <p className="subtitle is-5">Sizes</p>
                    {[ElementSize.Small, ElementSize.Normal, ElementSize.Medium, ElementSize.Large].map(size => (
                        <div key={size} className="mb-3">
                            <p className="help mb-1">{size}</p>
                            <Search searchType="byTyping" caption={`Size: ${size}`} size={size} onSearch={() => {}} />
                        </div>
                    ))}
                </div>

                {/* Rounded */}
                <div className="box">
                    <p className="subtitle is-5">Rounded</p>
                    <Search searchType="byTyping" caption="Rounded search..." rounded onSearch={() => {}} />
                </div>

                {/* Default value */}
                <div className="box">
                    <p className="subtitle is-5">Default Value</p>
                    <Search searchType="byTyping" caption="Search..." defaultValue="react" onSearch={() => {}} />
                </div>

                {/* Disabled / Loading */}
                <div className="box">
                    <p className="subtitle is-5">Disabled &amp; Loading</p>
                    <div className="mb-3">
                        <p className="help mb-1">Disabled</p>
                        <Search searchType="byTyping" caption="Disabled..." disabled onSearch={() => {}} />
                    </div>
                    <div>
                        <p className="help mb-1">Loading</p>
                        <Search searchType="byTyping" caption="Loading..." isLoading onSearch={() => {}} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SearchExamples;
