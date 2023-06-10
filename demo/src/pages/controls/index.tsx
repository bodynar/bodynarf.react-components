import { Outlet } from "react-router-dom";

import { RouteItem } from "../routing";

import ColorPicker from "./colorPicker";
import Checkbox from "./checkbox";
import Date from "./date";
import Text from "./text";
import Multiline from "./multiline";
import Number from "./number";

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
            caption: "Check box",
            component: <Checkbox />
        },
        {
            path: "/controls/date",
            caption: "Date picker",
            component: <Date />
        },
        {
            path: "/controls/text",
            caption: "Text",
            component: <Text />
        },
        {
            path: "/controls/multiline",
            caption: "Multiline",
            component: <Multiline />
        },
        {
            path: "/controls/number",
            caption: "Number",
            component: <Number />
        },
    ].sort((x, y) => x.caption.localeCompare(y.caption))
};