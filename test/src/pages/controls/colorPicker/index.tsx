import ColorComponent from "@bodynarf/react.components/components/primitives/color";

/** Color component demo */
function Color() {
    return (
        <section>
            <div className="block">
                <p style={{ whiteSpace: "pre-line" }}>
                    Color picker
                </p>

                <br />
                <br />
                <span>Default</span>
                <div className="columns is-align-items-center">
                    <div className="column is-2">
                        <code>{`<Color />`}</code>
                    </div>
                    <div className="column">
                        <ColorComponent />
                    </div>
                </div>
            </div>
            <div className="block">
                <h4 className="subtitle is-5">
                    With preview
                </h4>
                <code>
                    <code>{`<Color showPreview={true} />`}</code>
                </code>
                <br />
                <br />
                <ColorComponent showPreview />
            </div>
            <div className="block">
                <h4 className="subtitle is-5">
                    With label (no preview)
                </h4>
                <code>
                    <code>{`<Color label={{ caption: "Color picker label", horizontal: true }} />`}</code>
                </code>
                <br />
                <br />
                <ColorComponent label={{ caption: "Color picker label", horizontal: true }} />
            </div>
            <div className="block">
                <h4 className="subtitle is-5">
                    With label (with preview)
                </h4>
                <code>
                    <code>{`<Color showPreview={true} label={{ caption: "Color picker label", horizontal: true }} />`}</code>
                </code>
                <br />
                <br />
                <ColorComponent showPreview label={{ caption: "Color picker label", horizontal: true }} />
            </div>
            <div className="block">
                <h4 className="subtitle is-5">
                    Disabled state with default value
                </h4>
                <code>
                    <code>{`<Color disabled={true} defaultValue={{ blue: 240, green: 200, red: 140 }} />`}</code>
                </code>
                <br />
                <br />
                <ColorComponent disabled defaultValue={{ blue: 240, green: 200, red: 140 }} />
            </div>

        </section>
    )
}

export default Color;
