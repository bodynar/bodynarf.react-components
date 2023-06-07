import SearchComponent from "@bodynarf/react.components/components/search";

import { Sizes, useSizeSelection } from "../../../shared";
import Dropdown from "@bodynarf/react.components/components/dropdown";
import { emptyFn } from "@bodynarf/utils";

/** Search component demo */
function Search() {
    const sizeLookupParams = useSizeSelection();

    return (
        <section>
            <div className="block">
                <h4 className="title is-4">
                    Search component
                </h4>
            </div>
            <div className="block">
                <h4 className="subtitle is-5">
                    Default
                </h4>
                <code>{`<Search caption="Default search" onSearch={onSearchHandler} searchType="byButton" />`}</code>
                <br />
                <br />
                <SearchComponent caption="Default search" onSearch={emptyFn} searchType="byButton" />
            </div>
            <span>
                <hr />
                In next examples these common props configuration will not be presented to save space
                <hr />
            </span>
            <hr />
            <div className="block">
                <p>
                    <code>searchType</code> describes way to call search function.
                    It either by special button ("byButton"), either by typing text.
                    <br />
                    "byButton" will render a button and search handler will be invoked only after click on that button
                </p>
                <br />
                <code>{`<Search searchType="byButton" />`}</code>
                <br />
                <br />
                <SearchComponent caption="searchType" onSearch={emptyFn} searchType="byButton" />
            </div>

            <hr />
            <div className="block">
                <p>
                    <code>searchType</code> "byTyping" will not render button and will emit search handler after each inserted symbol
                </p>
                <br />
                <code>{`<Search searchType="byTyping" />`}</code>
                <br />
                <br />
                <SearchComponent caption="searchType" onSearch={emptyFn} searchType="byTyping" />
            </div>

            <hr />
            <div className="block">
                <p>
                    <code>defaultValue</code> Value that would be used as initial value
                </p>
                <br />
                <code>{`<Search defaultValue="defaultValue" />`}</code>
                <br />
                <br />
                <SearchComponent caption="searchType" onSearch={emptyFn} searchType="byButton" defaultValue="defaultValue" />
            </div>

            <hr />
            <div className="block">
                <p>
                    <code>rounded</code> Input field will have rounded corners
                </p>
                <br />
                <code>{`<Search rounded />`}</code>
                <br />
                <br />
                <SearchComponent caption="searchType" onSearch={emptyFn} searchType="byTyping" rounded />
            </div>

            <hr />
            <div className="block">
                <p>
                    <code>disabled</code> Input field will be disabled
                </p>
                <br />
                <code>{`<Search disabled />`}</code>
                <br />
                <br />
                <SearchComponent caption="searchType" onSearch={emptyFn} searchType="byTyping" disabled />
            </div>

            <hr />
            <div className="block">
                <p>
                    <code>isLoading</code> Displays loading spinner in the end of the control
                </p>
                <br />
                <code>{`<Search isLoading />`}</code>
                <br />
                <br />
                <SearchComponent caption="searchType" onSearch={emptyFn} searchType="byTyping" isLoading />
            </div>

            <div className="block">
                <h4 className="subtitle is-5">
                    Sizes
                </h4>
                <div className="columns">
                    <div className="column is-2">
                        <Dropdown
                            hideOnOuterClick={true}
                            items={Sizes.selectableItems}
                            onSelect={sizeLookupParams.onValueSelect}
                            value={sizeLookupParams.selectedValue}
                            placeholder="Size"
                            deselectable={false}
                        />
                    </div>
                    <div className="column">
                        <pre>{`<Search size={ElementSize.${Sizes.keys[+sizeLookupParams.selectedValue!.id]}} />`}
                        </pre>
                    </div>
                </div>

                <SearchComponent caption="searchType" onSearch={emptyFn} searchType="byTyping" size={sizeLookupParams.value} />
            </div>
        </section>
    )
}

export default Search;
