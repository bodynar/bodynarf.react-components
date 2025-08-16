import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { HashRouter } from "react-router";

import App from "./App.tsx";

import "./style.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bulma/bulma.sass";
import "bulma-checkradio/dist/css/bulma-checkradio.min.css";

createRoot(
	document.getElementById("root") as HTMLElement
).render(
	<StrictMode>
		<HashRouter>
			<App />
		</HashRouter>
	</StrictMode>
);
