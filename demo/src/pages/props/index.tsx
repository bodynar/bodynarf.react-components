import { Outlet } from "react-router-dom";

import { RouteItem } from "../routing";

import ValidationStateProp from "./validationState";
import HintProp from "./hint";

export const props: RouteItem = {
    path: "/props",
    caption: "Common props",
    component: <Outlet />,
    display: false,
    children: [
        {
            path: "/props/validation",
            caption: "Validation state",
            component: <ValidationStateProp />
        },
        {
            path: "/props/hint",
            caption: "Hint",
            component: <HintProp />
        },
    ].sort((x, y) => x.caption.localeCompare(y.caption))
};
