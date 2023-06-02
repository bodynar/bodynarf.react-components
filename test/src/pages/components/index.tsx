import { Outlet } from "react-router-dom";

import { RouteItem } from "../routing";
import Icon from "./icon";
import Accordion from "./accordion";
import Anchor from "./anchor";
import Button from "./button";
import Tag from "./tag";

export const components: RouteItem = {
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
        {
            path: "/components/anchor",
            caption: "Anchor",
            component: <Anchor />,
        },
        {
            path: "/components/button",
            caption: "Button",
            component: <Button />,
        },
        {
            path: "/components/tag",
            caption: "Tag",
            component: <Tag />,
        }
    ]
};