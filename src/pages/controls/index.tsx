import { MenuItem } from "../routing";

import ColorPicker from "./colorPicker";
import Checkbox from "./checkbox";
import Date from "./date";
import Text from "./text";
import Multiline from "./multiline";
import Number from "./number";

const controls: MenuItem = {
    name: "control-group",
    caption: "Controls",
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

export default controls;
