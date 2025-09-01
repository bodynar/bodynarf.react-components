import { MenuItem } from "../routing";

import ValidationStateProp from "./validationState";
import HintProp from "./hint";
import BaseElementProps from "./baseElementProps";

const props: MenuItem = {
    name: "prop-group",
    caption: "Common props",
    children: [
        {
            path: "/props/base",
            caption: "Base element props",
            component: <BaseElementProps />
        },
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

export default props;
