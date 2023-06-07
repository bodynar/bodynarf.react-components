import { Outlet } from "react-router-dom";

import { RouteItem } from "../routing";

import ColorPicker from "./colorPicker";
import Checkbox from "./checkbox";

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
        {
            path: "/controls/checkbox",
            caption: "CheckBox",
            component: <Checkbox />
        },
    ].sort((x, y) => x.caption.localeCompare(y.caption))
};