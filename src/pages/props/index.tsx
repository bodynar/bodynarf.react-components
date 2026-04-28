import { MenuItem } from "../routing";

import ValidationStateProp from "./validationState";
import HintProp from "./hint";
import BaseElementProps from "./baseElementProps";
import KeyboardElementDemo from "./keyboardElement";
import BlurableElementDemo from "./blurableElement";

const props: MenuItem = {
    name: "prop-group",
    caption: "Common props",
    defaultCollapsed: true,
    children: [
        {
            path: "/props/base",
            caption: "Base element props",
            component: <BaseElementProps />
        },
        {
            path: "/props/keyboard",
            caption: "Keyboard events",
            component: <KeyboardElementDemo />
        },
        {
            path: "/props/blur",
            caption: "Blur event",
            component: <BlurableElementDemo />
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
