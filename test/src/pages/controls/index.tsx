import { Outlet } from "react-router-dom";

import { RouteItem } from "../routing";

import ColorPicker from "./colorPicker";

export const controls: RouteItem = {
    path: "/controls",
    caption: "Controls",
    component: <Outlet />,
    display: false,
    children: [
        {
            path: "/controls/color",
            caption: "Color picker",
            component: <ColorPicker />
        },
    ]
};