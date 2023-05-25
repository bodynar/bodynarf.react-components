import { Fragment } from "react";

import { ElementSize } from "@bodynarf/react.components";
import ButtonComponent, { ButtonType } from "@bodynarf/react.components/components/button";

import { Sizes, Colors } from "../../../shared";

/** Button component demo */
function Button() {
    // temporary solution
    const types: Array<ButtonType> = [
        "primary", "link", "info",
        "success", "warning", "danger", "white",
        "light", "dark", "black", "text", "ghost"
    ];

    return (
        <section>
            <div className="block">
                <p style={{ whiteSpace: "pre-line" }}>
                    Button component
                </p>
                <ul>
                    <li>Available colors: [{Colors.string}]</li>
                    <li>Available sizes: [{Sizes.string}]</li>
                </ul>
            </div>
            <details>
                <summary className="subtitle is-5">Types</summary>
                <div className="block">
                    <h4 className="subtitle is-5">
                        Types (colors)
                    </h4>
                    <code>{`<ButtonComponent type="default" caption="Rules"/>`}</code>
                    <br />
                    <br />
                    <ButtonComponent type="default" caption="default button" />

                    {types.map(type =>
                        <Fragment key={type}>
                            <br />
                            <br />
                            <code>{`<ButtonComponent type="${type}" caption="Rules"/>`}</code>
                            <br />
                            <br />
                            <ButtonComponent type={type} caption={`${type} button`} className="ml-1" />
                        </Fragment>
                    )}
                </div>
            </details>

            <div className="block">
                <h4 className="subtitle is-5">
                    Default
                </h4>
                <code>{`<ButtonComponent type="success" caption="Button caption" />`}</code>
                <br />
                <br />
                <ButtonComponent type="success" caption="Button caption" />
            </div>
            <div className="block">
                <h4 className="subtitle is-5">
                    Icon as content
                </h4>
                <code>{`<ButtonComponent type="success" icon={{ name: "bookmarks" }} />`}</code>
                <br />
                <br />
                <ButtonComponent type="success" icon={{ name: "bookmarks" }} />
            </div>
            <div className="block">
                <h4 className="subtitle is-5">
                    Icon + text as content
                </h4>
                <code>{`<ButtonComponent type="success" icon={{ name: "broadcast", position: "right" }} caption="Book" />`}</code>
                <br />
                <br />
                <ButtonComponent type="success" icon={{ name: "broadcast", position: "right" }} caption="Start" />
            </div>
            <div className="block">
                <h4 className="subtitle is-5">
                    Rounded corners
                </h4>
                <code>{`<ButtonComponent type="success" caption="Rules" rounded={true} />`}</code>
                <br />
                <br />
                <ButtonComponent type="success" caption="Rules" rounded={true} />
            </div>
            <div className="block">
                <h4 className="subtitle is-5">
                    Light type
                </h4>
                <code>{`<ButtonComponent type="success" caption="Rules" light={true} />`}</code>
                <br />
                <br />
                <ButtonComponent type="success" caption="Rules" light={true} />
            </div>
            <div className="block">
                <h4 className="subtitle is-5">
                    Outlined mode
                </h4>
                <code>{`<ButtonComponent type="success" caption="Rules" outlined={true} />`}</code>
                <br />
                <br />
                <ButtonComponent type="success" caption="Rules" outlined={true} />
            </div>
            <div className="block">
                <h4 className="subtitle is-5">
                    Loading state mode
                </h4>
                <code>{`<ButtonComponent type="success" caption="Rules" isLoading={true} />`}</code>
                <br />
                <br />
                <ButtonComponent type="success" caption="Rules" isLoading={true} />
            </div>
            <div className="block">
                <h4 className="subtitle is-5">
                    Inactive mode
                </h4>
                <code>{`<ButtonComponent type="success" caption="Rules" static={true} />`}</code>
                <br />
                <br />
                <ButtonComponent type="success" caption="Rules" static={true} />
            </div>
            <details>
                <summary className="subtitle is-5">Sizes</summary>
                <div className="block">
                    <code>{`<ButtonComponent type="success" caption="Rules" size={ElementSize.Small} />`}</code>
                    <br />
                    <br />
                    <ButtonComponent type="success" caption="Rules" size={ElementSize.Small} />

                    <br />
                    <br />
                    <code>{`<ButtonComponent type="success" caption="Rules" size={ElementSize.Normal} />`}</code>
                    <br />
                    <br />
                    <ButtonComponent type="success" caption="Rules" size={ElementSize.Normal} className="ml-1" />

                    <br />
                    <br />
                    <code>{`<ButtonComponent type="success" caption="Rules" size={ElementSize.Medium} />`}</code>
                    <br />
                    <br />
                    <ButtonComponent type="success" caption="Rules" size={ElementSize.Medium} className="ml-1" />

                    <br />
                    <br />
                    <code>{`<ButtonComponent type="success" caption="Rules" size={ElementSize.Large} />`}</code>
                    <br />
                    <br />
                    <ButtonComponent type="success" caption="Rules" size={ElementSize.Large} className="ml-1" />
                </div>
            </details>
        </section>
    )
}

export default Button;
