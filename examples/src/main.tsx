import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "bulma/css/bulma.min.css";
import "bulma-checkradio/dist/css/bulma-checkradio.min.css";

import App from "./App";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
