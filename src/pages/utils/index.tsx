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
            createVersion: "1.6",
            component: <MapDataAttributes />,
        },
        {
            path: "/utils/getStyleClassName",
            caption: "getStyleClassName",
            createVersion: "1.4",
            component: <GetStyleClassName />,
        },
        {
            path: "/utils/getPositionClassName",
            caption: "getPositionClassName",
            createVersion: "1.14",
            component: <GetPositionClassName />,
        },
        {
            path: "/utils/getSizeClassName",
            caption: "getSizeClassName",
            createVersion: "1.14",
            component: <GetSizeClassName />,
        },
        {
            path: "/utils/getElementColorClassName",
            caption: "getElementColorClassName",
            createVersion: "1.14",
            component: <GetElementColorClassName />,
        },
    ].sort((x, y) => x.caption.localeCompare(y.caption)),
};

export default utils;
