/** Default page */
function Home() {
    return (
        <>
            <div className="block">
                <h1 className="title is-1">
                    About
                </h1>
            </div>
            <div className="block">
                <div className="block">
                    <h2 className="subtitle is-2">
                        Components
                    </h2>
                    <p>
                        Components built via combining simple components or represent complex logical component
                    </p>
                </div>
                <div className="block">
                    <h2 className="subtitle is-2">
                        Controls
                    </h2>
                    <p>
                        Mostly all controls props type based on interface <code>BaseInputElementProps</code> which describes common structure
                    </p>
                </div>
                <div className="block">
                    <h2 className="subtitle is-2">
                        Common props
                    </h2>
                    <p>
                        Some props of base interface <code>BaseInputElementProps</code>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Home;
