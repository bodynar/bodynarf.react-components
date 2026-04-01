import { FC, useRef } from "react";
import { Navigate, Route, Routes } from "react-router";

import routeList, { isRootMenuItem } from "@app/pages/routing";

import styles from "./style.module.scss";

import LeftMenu from "../components/leftMenu";
import ScrollToAnchor from "../components/scrollToAnchor";
import SuspenseWrapper from "src/components/suspense/pageWithSmartSuspense";
import { SuspenseReadyProvider } from "src/components/suspense/readyProvider";

const routes = routeList.flatMap(x => isRootMenuItem(x) ? x.children : [x]);

/** Bootstrap component */
const App: FC = () => {
    const contentRef = useRef<HTMLElement>(null);

    return (
        <main className={`${styles.root} columns my-0 ml-6`}>
            <aside className={`column ${styles["left-menu"]}`}>
                <LeftMenu />
            </aside>
            <main
                ref={contentRef}
                className={`column box ${styles.content} pt-5 pl-5`}
            >
                <SuspenseReadyProvider>
                    <ScrollToAnchor parentContainerRef={contentRef} />

                    <Routes>
                        <Route
                            path="*"
                            element={
                                <Navigate
                                    to="/home"
                                    replace
                                />}
                        />
                        {routes.map(({ path, component }) =>
                            <Route
                                key={path}
                                path={path}
                                element={
                                    <SuspenseWrapper>
                                        {component}
                                    </SuspenseWrapper>
                                }
                            />
                        )}
                    </Routes>
                </SuspenseReadyProvider>
            </main>
        </main>
    );
};

export default App;
