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
                    {`<AnchorComponent caption="Link text" href="#" />`}
                </code>
                <br />
                <br />
                <AnchorComponent caption="Link text" href="#" />
            </div>
            <div className="block">
                <h4 className="subtitle is-5">
                    Without hover effects
                </h4>
                <code>
                    {`<AnchorComponent caption="Link text" href="#" disableHovering={true} />`}
                </code>
                <br />
                <br />
                <AnchorComponent caption="Link text" href="#" disableHovering={true}/>
            </div>

        </section>
    )
}

export default Anchor;
