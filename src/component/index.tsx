import { useEffect, useMemo } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";

import routeList, { isRootMenuItem } from "@app/pages/routing";

import styles from "./style.module.scss";

import LeftMenu from "../components/leftMenu";

/** Bootstrap component */
function App() {
    const { pathname } = useLocation();

    useEffect(() => window.scrollTo(0, 0), [pathname]);

    const routes = useMemo(
        () => routeList.flatMap(x => isRootMenuItem(x) ? x.children : [x]),
        []
    );

    return (
        <main className={`${styles.root} columns my-0 ml-6`}>
            <aside className={`column ${styles["left-menu"]}`}>
                <LeftMenu />
            </aside>
            <main className={`column box ${styles.content} p-5`}>
                <Routes>
                    <Route path="*" element={<Navigate to="/home" replace />} />
                    {routes.map(({ path, component }) =>
                        <Route
                            key={path}
                            path={path}
                            element={component}
                        />
                    )}
                </Routes>
            </main>
        </main>
    );
}

export default App;
