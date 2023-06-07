import { useState } from "react";

import Button from "@bodynarf/react.components/components/button";

/** Default page */
function Home() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Vite + React</h1>

            <Button
                type="primary"
                caption={`count is ${count}`}
                onClick={() => setCount((count) => count + 1)}
            />
        </>
    )
}

export default Home;
