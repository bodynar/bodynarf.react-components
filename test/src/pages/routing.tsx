import { Navigate, Outlet } from "react-router-dom";

import Home from "./home";

import Icon from "./components/icon";
import Accordion from "./components/accordion";

/** Route menu item */
export interface RouteItem {
    /** Unique name */
    caption: string;

    /** Target route link */
    path: string;

    /** Which component should be rendered as module */
    component: JSX.Element;

    /** Child routes */
    children?: Array<RouteItem>;

    /** Should be item be presented */
    display?: boolean;
}

export const routes: Array<RouteItem> = [
    {
        path: "",
        caption: "",
        component: <Navigate to="/home" replace />,
        display: false,
    },
    {
        path: "/home",
        caption: "Home",
        component: <Home />,
    },
    {
        path: "/components",
        caption: "Components",
        component: <Outlet />,
        display: false,
        children: [
            {
                path: "/components/icon",
                caption: "Icon",
                component: <Icon />,
            },
            {
                path: "/components/accordion",
                caption: "Accordion",
                component: <Accordion />,
            },
        ]
    },
    {
        path: "*",
        caption: "",
        component: <Navigate to="/home" replace />,
        display: false,
    },
];