import { useEffect, useMemo, useRef } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";

import routeList, { isRootMenuItem } from "@app/pages/routing";

import styles from "./style.module.scss";

import LeftMenu from "../components/leftMenu";

/** Bootstrap component */
function App() {
    const { pathname } = useLocation();

    const contentRef = useRef<HTMLElement>(null);
    useEffect(() => contentRef.current?.scrollTo(0, 0), [pathname]);

    const routes = useMemo(
        () => routeList.flatMap(x => isRootMenuItem(x) ? x.children : [x]),
        []
    );

    return (
        <main className={`${styles.root} columns my-0 ml-6`}>
            <aside className={`column ${styles["left-menu"]}`}>
                <LeftMenu />
            </aside>
            <main
                ref={contentRef}
                className={`column box ${styles.content} pt-5 pl-5`}
            >
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
