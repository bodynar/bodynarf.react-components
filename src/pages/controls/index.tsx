import { MenuItem } from "../routing";

import ColorPicker from "./colorPicker";
import Checkbox from "./checkbox";
import Date from "./date";
import Text from "./text";
import Multiline from "./multiline";
import Number from "./number";

const controls: MenuItem = {
    name: "",
    caption: "Controls",
    children: [
        {
            name: "",
            path: "/controls/color",
            caption: "Color picker",
            component: <ColorPicker />
        },
        {
            name: "",
            path: "/controls/checkbox",
            caption: "Check box",
            component: <Checkbox />
        },
        {
            name: "",
            path: "/controls/date",
            caption: "Date picker",
            component: <Date />
        },
        {
            name: "",
            path: "/controls/text",
            caption: "Text",
            component: <Text />
        },
        {
            name: "",
            path: "/controls/multiline",
            caption: "Multiline",
            component: <Multiline />
        },
        {
            name: "",
            path: "/controls/number",
            caption: "Number",
            component: <Number />
        },
    ].sort((x, y) => x.caption.localeCompare(y.caption))
};

export default controls;
