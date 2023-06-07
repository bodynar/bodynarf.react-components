import AnchorComponent from "@bodynarf/react.components/components/anchor";

/** Anchor component demo */
function Anchor() {
    return (
        <section>
            <div className="block">
                <h4 className="title is-4">
                    Anchor component
                </h4>
            </div>
            <div className="block">
                <h4 className="subtitle is-5">
                    Default
                </h4>
                <code>
                    {`<Anchor caption={\`I"m the anchor\`} href="#" />`}
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
                    {`<Anchor caption={\`I"m the anchor\`} href="#" disableHovering={true} />`}
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
                    {`<Anchor caption={\`I"m the anchor\`} href="#" icon={{ name: "basket2", position: "right" }} />`}
                </code>
                <br />
                <br />
                <AnchorComponent caption={`I"m the anchor`} href="#" icon={{ name: "basket2", position: "right" }} />
            </div>

        </section>
    )
}

export default Anchor;
