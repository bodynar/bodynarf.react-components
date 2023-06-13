import { useEffect, useMemo } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { RouteItem, routes } from "./pages/routing";
import Navbar from "./components/navbar";
import LeftMenu from "./components/leftMenu";

/** Bootstrap component */
function App() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	const menuItems = useMemo(() =>
		routes
			.flatMap(x => x.children ? [x, ...x.children] : [x])
			.filter(({ display }) => display !== false)
		,
		[]
	);

	const activeItem = menuItems.find(({ path }) => pathname.startsWith(path))?.path ?? "";

	return (
		<main>
			<Navbar />
			<main className="container my-4">
				<section className="columns">
					<aside className="column is-3">
						<div className="menu box" style={{ top: "4em", position: "sticky" }}>
							<LeftMenu activeItem={activeItem} />
						</div>

					</aside>
					<main className="column">
						<div className="box">
							<Routes>
								{routes.map(route => RouteItemComponent(route))}
							</Routes>
						</div>
					</main>
				</section>
			</main>
		</main>
	);
}

/**
 * Get module routing table as tree of react-router components.
 * Presented as function (not component) to satisfy react-router Routes rule (child type)
*/
const RouteItemComponent = ({ path, component, children }: RouteItem): JSX.Element => {
	return (
		<Route
			key={path}
			path={path}
			element={component}
		>
			{children?.map(c => RouteItemComponent(c))}
		</Route>
	);
};

export default App;
