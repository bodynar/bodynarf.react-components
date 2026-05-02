import { ReactNode } from "react";

import Home from "./home";
import Changelog from "./changelog";

import componentsRoutes from "./components";
import controlsRoutes from "./controls";
import propsRoutes from "./props";
import hooksRoutes from "./hooks";
import utilsRoutes from "./utils";

/** Menu single item */
export type MenuItem = {
    /** Text which will be displayed in menu */
    caption: string;

    /** Unique name */
    name: string;

    /** Child item as routes to pages */
    children: Array<RouteMenuItem>;

    /** Whether the group is collapsed by default */
    defaultCollapsed?: boolean;
};

/** Routing menu item */
export type RouteMenuItem = Omit<MenuItem, "children" | "name"> & {
    /** Unique path */
    path: string;

    /** Component responsible for UI */
    component: ReactNode;

    /** Version when component was added */
    createVersion?: string;

    /** Version when component was last updated */
    updateVersion?: string;
};

const routeList: Array<RouteMenuItem | MenuItem> = [
    {
        caption: "Home",
        path: "/home",
        component: <Home />,
    } as RouteMenuItem & Partial<Pick<MenuItem, "children">>,
    {
        caption: "Changelog",
        path: "/changelog",
        component: <Changelog />,
    } as RouteMenuItem & Partial<Pick<MenuItem, "children">>,
    { ...componentsRoutes },
    { ...controlsRoutes },
    { ...propsRoutes },
    { ...hooksRoutes },
    { ...utilsRoutes },
];

export default routeList;

/**
 * Type guard for menu items
 * @param item Menu item
 * @returns Is item member of `MenuItem` type
 */
export const isRootMenuItem = (item: MenuItem | RouteMenuItem): item is MenuItem => {
    return "children" in item;
};
