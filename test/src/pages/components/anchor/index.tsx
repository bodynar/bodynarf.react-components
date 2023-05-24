import AnchorComponent from "@bodynarf/react.components/components/anchor";

/** Anchor component demo */
function Anchor() {
    return (
        <section>
            <div className="block">
                <p style={{ whiteSpace: "pre-line" }}>
                    Anchor component for simple links
                </p>
            </div>
            <div className="block">
                <h4 className="subtitle is-5">
                    Default
                </h4>
                <code>
                    {`<AnchorComponent caption={\`I"m the anchor\`} href="#" />`}
                </code>
                <br />
                <br />
                <AnchorComponent caption={`I"m the anchor`} href="#" />
            </div>
            <div className="block">
                <h4 className="subtitle is-5">
                    Without hover effects
                </h4>
                <code>
                    {`<AnchorComponent caption={\`I"m the anchor\`} href="#" disableHovering={true} />`}
                </code>
                <br />
                <br />
                <AnchorComponent caption={`I"m the anchor`} href="#" disableHovering={true} />
            </div>
            <div className="block">
                <h4 className="subtitle is-5">
                    Icon content
                </h4>
                <code>
                    {`<AnchorComponent caption={\`I"m the anchor\`} href="#" icon={{ name: "basket2", position: "right" }} />`}
                </code>
                <br />
                <br />
                <AnchorComponent caption={`I"m the anchor`} href="#" icon={{ name: "basket2", position: "right" }} />
            </div>

        </section>
    )
}

export default Anchor;
