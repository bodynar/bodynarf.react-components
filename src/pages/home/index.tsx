import CodeExample from "@app/sharedComponents/codeExample";

/** Default page */
function Home() {
    return (
        <>
            <div className="block">
                <h1 className="title is-1">
                    About
                </h1>
                <p>
                    <code>@bodynarf/react.components</code> (also referred to as <code>BBR.Components</code>) is a library of ready-to-use React components styled with the Bulma CSS framework.
                    <br />
                    <br />
                    Currently, the library is based on Bulma versions <code>&lt; 1.0.0</code>, although this is not explicitly listed in the dependencies. Versions <code>&gt; 1.0.0</code> can also be used, but you may encounter minor conflicts that can be easily fixed with simple style overrides.
                    <br />
                    <br />
                    Each component imported from the library comes with a CSS class prefixed with <code>bbr</code> (<span className="is-italic">for example <code>.bbr-icon</code></span>).
                    <br />
                    <br />
                    A grouped overview of all public components is provided below.
                </p>
            </div>

            <div className="block">
                <h2 className="subtitle is-2">
                    Installation & usage
                </h2>
                <span>
                    Before installing, make sure the following dependencies are already present:
                </span>
                <ul style={{ listStyle: "circle", paddingLeft: "2.5rem", marginBottom: "1rem" }}>
                    <li>
                        <a title="View the '@bodynarf/utils' package on npm" target="_blank" href="https://www.npmjs.com/package/@bodynarf/utils">
                            @bodynarf/utils
                        </a>
                    </li>
                    <li>
                        <a title="View the 'bulma' package on npm" target="_blank" href="https://www.npmjs.com/package/bulma">
                            bulma
                        </a>
                    </li>
                    <li>
                        <a title="View the 'react' package on npm" target="_blank" href="https://www.npmjs.com/package/react">
                            react
                        </a>
                    </li>
                </ul>
                <span>
                    You can install the component library by running the following command with npm:
                </span>

                <CodeExample code="npm install @bodynarf/react.components" language="sh" />

                <span>
                    Once installed, you can start using the components in your project. For example:
                </span>
                <CodeExample
                    code={[
                        `import ButtonComponent from "@bodynarf/react.components/components/button";`,
                        "",
                        "/* ... */",
                        "",
                        `<ButtonComponent type="success" caption="Button caption" />`
                    ].join("\n")}
                    language="tsx"
                />
                <span>
                    A detailed description of each component can be found on its documentation page.
                </span>
            </div>

            <div className="block">
                <div className="block">
                    <h2 className="subtitle is-2">
                        Contents
                    </h2>
                </div>

                <div className="block">
                    <h3 className="subtitle is-3">
                        Components
                    </h3>
                    <p>
                        Overview of the basic building blocks provided by the library.
                    </p>
                </div>

                <div className="block">
                    <h3 className="subtitle is-3">
                        Controls
                    </h3>
                    <p>
                        Input elements and form controls designed for flexible use. Most control props are based on the <code>BaseInputElementProps</code> type, which defines common fields and simplifies configuration and interaction.
                    </p>
                </div>

                <div className="block">
                    <h3 className="subtitle is-3">
                        Common props
                    </h3>
                    <p>
                        Shared properties available across multiple components for consistent customization. This section covers the <code>BaseInputElementProps</code> type in detail.
                    </p>
                </div>
            </div>


        </>
    );
}

export default Home;
