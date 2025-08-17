import { MenuItem } from "../routing";

import ValidationStateProp from "./validationState";
import HintProp from "./hint";

const props: MenuItem = {
    name: "",
    caption: "Common props",
    children: [
        {
            name: "",
            path: "/props/validation",
            caption: "Validation state",
            component: <ValidationStateProp />
        },
        {
            name: "",
            path: "/props/hint",
            caption: "Hint",
            component: <HintProp />
        },
    ].sort((x, y) => x.caption.localeCompare(y.caption))
};

export default props;
