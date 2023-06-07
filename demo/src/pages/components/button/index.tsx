import { useMemo, } from "react";

import { SelectableItem } from "@bodynarf/react.components";
import ButtonComponent, { ButtonType } from "@bodynarf/react.components/components/button";

import { Sizes, useGenericSelection, useSizeSelection } from "../../../shared";
import Dropdown from "@bodynarf/react.components/components/dropdown";

/** Button component demo */
function Button() {
    // temporary solution
    const types: Array<ButtonType> = [
        "primary", "link", "info",
        "success", "warning", "danger", "white",
        "light", "dark", "black", "text", "ghost"
    ];

    const typesAsSelectItems = useMemo(
        () => types.map((x, i) => ({
            displayValue: x,
            id: i.toString(),
            value: x,
        }) as SelectableItem),
        []
    );

    const buttonTypeLookupParams = useGenericSelection<ButtonType>(typesAsSelectItems);
    const sizeLookupParams = useSizeSelection();

    return (
        <section>
            <div className="block">
                <h4 className="title is-4">
                    Button component
                </h4>
            </div>
            <div className="block">
                <h4 className="subtitle is-5">
                    Default
                </h4>
                <code>{`<Button type="success" caption="Button caption" />`}</code>
                <br />
                <br />
                <ButtonComponent type="success" caption="Button caption" />
            </div>
            <div className="block">
                <h4 className="subtitle is-5">
                    Icon as content
                </h4>
                <code>{`<Button type="success" icon={{ name: "bookmarks" }} />`}</code>
                <br />
                <br />
                <ButtonComponent type="success" icon={{ name: "bookmarks" }} />
            </div>
            <div className="block">
                <h4 className="subtitle is-5">
                    Icon + text as content
                </h4>
                <code>{`<Button type="success" icon={{ name: "broadcast", position: "right" }} caption="Book" />`}</code>
                <br />
                <br />
                <ButtonComponent type="success" icon={{ name: "broadcast", position: "right" }} caption="Start" />
            </div>
            <div className="block">
                <h4 className="subtitle is-5">
                    Rounded corners
                </h4>
                <code>{`<Button type="success" caption="Rules" rounded={true} />`}</code>
                <br />
                <br />
                <ButtonComponent type="success" caption="Rules" rounded={true} />
            </div>
            <div className="block">
                <h4 className="subtitle is-5">
                    Light type
                </h4>
                <code>{`<Button type="success" caption="Rules" light={true} />`}</code>
                <br />
                <br />
                <ButtonComponent type="success" caption="Rules" light={true} />
            </div>
            <div className="block">
                <h4 className="subtitle is-5">
                    Outlined mode
                </h4>
                <code>{`<Button type="success" caption="Rules" outlined={true} />`}</code>
                <br />
                <br />
                <ButtonComponent type="success" caption="Rules" outlined={true} />
            </div>
            <div className="block">
                <h4 className="subtitle is-5">
                    Loading state mode
                </h4>
                <code>{`<Button type="success" caption="Rules" isLoading={true} />`}</code>
                <br />
                <br />
                <ButtonComponent type="success" caption="Rules" isLoading={true} />
            </div>
            <div className="block">
                <h4 className="subtitle is-5">
                    Inactive mode
                </h4>
                <code>{`<Button type="success" caption="Rules" static={true} />`}</code>
                <br />
                <br />
                <ButtonComponent type="success" caption="Rules" static={true} />
            </div>
            <div className="block">
                <h4 className="subtitle is-5">
                    Types (colors)
                </h4>
                <div className="columns">
                    <div className="column is-2">
                        <Dropdown
                            hideOnOuterClick={true}
                            items={typesAsSelectItems}
                            onSelect={buttonTypeLookupParams.onValueSelect}
                            value={buttonTypeLookupParams.selectedValue}
                            placeholder="Size"
                            deselectable={false}
                        />
                    </div>
                    <div className="column">
                        <pre>{`<Button caption="Click me" type="${buttonTypeLookupParams.selectedValue!.value}" />`}</pre>
                    </div>
                </div>

                <ButtonComponent type={buttonTypeLookupParams.value} caption="Click me" />
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
                        <pre>{`<Button type="success" caption="Click me" size={ElementSize.${Sizes.keys[+sizeLookupParams.selectedValue!.id]}} />`}
                        </pre>
                    </div>
                </div>

                <ButtonComponent type="success" caption="Click me" size={sizeLookupParams.value} />
            </div>
        </section>
    )
}

export default Button;
