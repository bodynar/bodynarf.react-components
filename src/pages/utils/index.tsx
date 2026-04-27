import { MenuItem } from "../routing";

import MapDataAttributes from "./mapDataAttributes";
import GetStyleClassName from "./getStyleClassName";
import GetPositionClassName from "./getPositionClassName";
import GetSizeClassName from "./getSizeClassName";
import GetElementColorClassName from "./getElementColorClassName";

const utils: MenuItem = {
    name: "utils-group",
    caption: "Utilities",
    defaultCollapsed: true,
    children: [
        {
            path: "/utils/mapDataAttributes",
            caption: "mapDataAttributes",
            component: <MapDataAttributes />,
        },
        {
            path: "/utils/getStyleClassName",
            caption: "getStyleClassName",
            component: <GetStyleClassName />,
        },
        {
            path: "/utils/getPositionClassName",
            caption: "getPositionClassName",
            component: <GetPositionClassName />,
        },
        {
            path: "/utils/getSizeClassName",
            caption: "getSizeClassName",
            component: <GetSizeClassName />,
        },
        {
            path: "/utils/getElementColorClassName",
            caption: "getElementColorClassName",
            component: <GetElementColorClassName />,
        },
    ].sort((x, y) => x.caption.localeCompare(y.caption)),
};

export default utils;
