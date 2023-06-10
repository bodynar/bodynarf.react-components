import React from "react";
import ReactDOM from "react-dom/client";

import { HashRouter } from "react-router-dom";

import App from "./App.tsx";

import "./style.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bulma/bulma.sass";
import "bulma-checkradio/dist/css/bulma-checkradio.sass";

ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
).render(
	<React.StrictMode>
		<HashRouter>
			<App />
		</HashRouter>
	</React.StrictMode>,
);
