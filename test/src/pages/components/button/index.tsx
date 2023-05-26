import { useCallback, useMemo, useState } from "react";

import { isNullOrUndefined } from "@bodynarf/utils";

import { ElementSize, SelectableItem } from "@bodynarf/react.components";
import ButtonComponent, { ButtonType } from "@bodynarf/react.components/components/button";

import { Sizes } from "../../../shared";
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

    const [selectedSize, setSelectedSize] = useState(Sizes.selectableItems[0]);
    const [selectedType, setSelectedType] = useState(typesAsSelectItems[0]);

    const onSizeSelect = useCallback(
        (item?: SelectableItem) => {
            if (isNullOrUndefined(item)) {
                return;
            }

            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            setSelectedSize(item!);
        }, []);
    const onTypeSelect = useCallback(
        (item?: SelectableItem) => {
            if (isNullOrUndefined(item)) {
                return;
            }

            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            setSelectedType(item!);
        }, []);

    const size = selectedSize!.value as ElementSize;

    return (
        <section>
            <div className="block">
                <p style={{ whiteSpace: "pre-line" }}>
                    Button component
                </p>
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
                            onSelect={onTypeSelect}
                            value={selectedType}
                            placeholder="Size"
                            deselectable={false}
                        />
                    </div>
                    <div className="column">
                        <pre>{`<Button caption="Click me" type="${selectedType!.value}" />`}</pre>
                    </div>
                </div>

                <ButtonComponent type={selectedType!.value as ButtonType} caption="Click me" />
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
                            onSelect={onSizeSelect}
                            value={selectedSize}
                            placeholder="Size"
                            deselectable={false}
                        />
                    </div>
                    <div className="column">
                        <pre>{`<Button type="success" caption="Click me" size={ElementSize.${Sizes.keys[+selectedSize!.id]}} />`}
                        </pre>
                    </div>
                </div>

                <ButtonComponent type="success" caption="Click me" size={size} />
            </div>
        </section>
    )
}

export default Button;
