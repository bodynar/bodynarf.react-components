import { Navigate } from "react-router";

import Home from "./home";

import { components } from "./components";
import { controls } from "./controls";
import { props } from "./props";

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
        path: "/home",
        caption: "Home",
        component: <Home />,
    },
    components,
    controls,
    props,
    {
        path: "*",
        caption: "",
        component: <Navigate to="/home" replace />,
        display: false,
    },
];
