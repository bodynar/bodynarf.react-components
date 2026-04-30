import { FC, useRef } from "react";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router";

import TooltipComponent from "@bodynarf/react.components/components/tooltip";
import { TooltipPosition } from "@bodynarf/react.components";
import Icon from "@bodynarf/react.components/components/icon";

import Customization from "@app/pages/customization";

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
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const isCustomizationPage = pathname === "/customization";

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
                        <Route
                            path="/customization"
                            element={
                                <SuspenseWrapper>
                                    <Customization />
                                </SuspenseWrapper>
                            }
                        />
                    </Routes>
                </SuspenseReadyProvider>
            </main>
            <div className={styles["settings-button"]}>
                <TooltipComponent position={TooltipPosition.Left}>
                    <TooltipComponent.Target>
                        <button
                            type="button"
                            className={`button ${styles["settings-button__btn"]}`}
                            onClick={() => navigate("/customization")}
                            disabled={isCustomizationPage}
                        >
                            <Icon name="gear" />
                        </button>
                    </TooltipComponent.Target>
                    <TooltipComponent.Hint>
                        Open Display Settings
                    </TooltipComponent.Hint>
                </TooltipComponent>
            </div>
        </main>
    );
};

export default App;
