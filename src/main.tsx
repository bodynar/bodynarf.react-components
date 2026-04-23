import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { HashRouter } from "react-router";

import { NotificationContainer } from "@bodynarf/react.components";

import App from "./component";

import "bootstrap-icons/font/bootstrap-icons.css";
import "bulma/bulma.sass";
import "bulma-checkradio/dist/css/bulma-checkradio.min.css";

import "./style.scss";

createRoot(
	document.getElementById("root") as HTMLElement
).render(
	<StrictMode>
		<HashRouter>
			<NotificationContainer.Provider>
				<App />
			</NotificationContainer.Provider>
		</HashRouter>
	</StrictMode>
);

