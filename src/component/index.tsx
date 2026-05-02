import { FC, useCallback, useEffect, useRef, useState } from "react";
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
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // Close mobile menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        const el = contentRef.current;
        if (el == null) {
            return;
        }

        const onScroll = () => setShowBackToTop(el.scrollTop > 300);
        el.addEventListener("scroll", onScroll, { passive: true });
        return () => el.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = useCallback(() => {
        contentRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <main className={`${styles.root} columns my-0 ml-6`}>
            {menuOpen ? (
                <div
                    aria-hidden="true"
                    onClick={() => setMenuOpen(false)}
                    className={styles["mobile-overlay"]}
                />
            ) : null}
            <button
                type="button"
                className={styles.hamburger}
                aria-label="Open navigation menu"
                onClick={() => setMenuOpen(true)}
            >
                <Icon name="list" />
            </button>
            <aside className={`column ${styles["left-menu"]}${menuOpen ? ` ${styles["left-menu--open"]}` : ""}`}>
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

            {showBackToTop ? (
                <div className={styles["back-to-top"]}>
                    <button
                        type="button"
                        title="Back to top"
                        className={`button ${styles["back-to-top__btn"]}`}
                        onClick={scrollToTop}
                    >
                        <Icon name="arrow-up" />
                    </button>
                </div>
            ) : null}

        </main>
    );
};

export default App;
