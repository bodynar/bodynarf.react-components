import { createRoot } from "react-dom/client";

import "bootstrap-icons/font/bootstrap-icons.css";
import "bulma/bulma.sass";

const container = document.getElementById("root");

const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<div> Components </div>);
