import { emptyFn } from "@bodynarf/utils";

import Dropdown from "@bodynarf/react.components/components/dropdown";
import PaginatorComponent from "@bodynarf/react.components/components/paginator";

import { Sizes, useGenericSelection, useSizeSelection } from "../../../shared";

/** Paginator component demo */
function Paginator() {
    const positionLookupValues = [
        ["left", "Left (default)"],
        ["center", "Center"],
        ["right", "Right"],
    ].map(x => ({
        id: x[0],
        value: x[0],
        displayValue: x[1],
    }));

    const sizeLookupParams = useSizeSelection();
    const positionLookupParams = useGenericSelection<string>(positionLookupValues);

    return (
        <section>
            <div className="block">
                <span>
                    <h4 className="title is-4">
                        Paginator component
                    </h4>
                    <br />
                    Displays buttons with numbers representing page numbers to walk through paged list
                </span>

                <br />
                <br />
                <pre>
                    {`<Paginator count={10} onPageChange={onPageChangeHandler} />`}
                </pre>
                <br />
                <PaginatorComponent
                    count={10}
                    onPageChange={emptyFn}
                />
            </div>
            <span>
                <hr />
                In next examples these common props configuration will not be presented to save space
                <hr />
            </span>

            <div className="block">
                <span>
                    <code>currentPage</code> Sets the current selected page (must be changed & tracked outside)
                </span>
                <br />
                <br />
                <PaginatorComponent
                    count={10}
                    onPageChange={emptyFn}
                    currentPage={5}
                />
                <pre>
                    {`<Paginator currentPage={5} />`}
                </pre>
            </div>

            <hr />
            <div className="block">
                <span>
                    <code>showNextButtons</code> Will render additional buttons for navigating 1 page forward or backward
                </span>
                <br />
                <br />
                <PaginatorComponent
                    count={10}
                    onPageChange={emptyFn}
                    showNextButtons
                />
                <pre>
                    {`<Paginator showNextButtons />`}
                </pre>
            </div>

            <hr />
            <div className="block">
                <span>
                    <code>position</code> Describes float point for page-buttons. Notice placement of "Next" & "Previous" buttons
                </span>
                <br />
                <br />
                <div className="columns">
                    <div className="column is-2">
                        <Dropdown
                            hideOnOuterClick={true}
                            items={positionLookupValues}
                            onSelect={positionLookupParams.onValueSelect}
                            value={positionLookupParams.selectedValue}
                            placeholder="Size"
                            deselectable={false}
                        />
                    </div>
                    <div className="column">
                        <PaginatorComponent
                            count={10}
                            onPageChange={emptyFn}
                            showNextButtons
                            position={positionLookupParams.value as "left" | "center" | "right" | undefined}
                        />
                        <pre>
                            {`<Paginator position="${positionLookupParams.selectedValue!.id}" />`}
                        </pre>
                    </div>
                </div>
            </div>

            <hr />
            <div className="block">
                <span>
                    <code>rounded</code> Buttons will have rounded corners
                </span>
                <br />
                <br />
                <PaginatorComponent
                    count={10}
                    onPageChange={emptyFn}
                    rounded
                />
                <pre>
                    {`<Paginator rounded />`}
                </pre>
            </div>

            <div className="block">
                <span>
                    <code>Size</code>
                </span>
                <br />
                <br />
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
                        <PaginatorComponent
                            count={10}
                            onPageChange={emptyFn}
                            size={sizeLookupParams.value}
                        />
                        <pre>
                            {`<Paginator size="ElementSize.${Sizes.keys[+sizeLookupParams.selectedValue!.id]}" />`}
                        </pre>
                    </div>
                </div>
            </div>

            <hr />
            <div className="block">
                <span>
                    <code>nearPagesCount</code> Determine how many buttons will be rendered from each side of current page. <code>3</code> is default
                </span>
                <br />
                <br />
                <PaginatorComponent
                    count={100}
                    onPageChange={emptyFn}
                    currentPage={50}
                    nearPagesCount={1}
                />
                <pre>
                    {`<Paginator nearPagesCount={1} />`}
                </pre>
            </div>
        </section>
    );
}

export default Paginator;
