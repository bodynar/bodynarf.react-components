/** Default page */
function Home() {
    return (
        <>
            <h1 className="title is-1">
                About
            </h1>
            <div className="block">
                <div className="block">
                    <h2 className="subtitle is-2">
                        Components
                    </h2>
                    <p style={{ whiteSpace: "pre-line", fontStyle: "italic" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minus pariatur ut molestias quibusdam nesciunt ipsum, ratione commodi tempore possimus, nobis repudiandae magnam rem. Ea adipisci dolorem sint doloremque voluptatibus.
                    </p>
                </div>
                <div className="block">
                    <h2 className="subtitle is-2">
                        Controls
                    </h2>
                    <p style={{ whiteSpace: "pre-line" }}>
                        Mostly all controls props type based on interface <code>BaseInputElementProps</code> which describes common structure.
                        <br />
                        And mostly all controls have implementation of this interface (like <code>size</code>, <code>style</code>, etc)
                    </p>
                </div>
            </div>
        </>
    );
}

export default Home;
