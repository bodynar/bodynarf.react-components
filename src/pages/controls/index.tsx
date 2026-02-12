import { MenuItem } from "../routing";

import ColorPicker from "./colorPicker";
import Checkbox from "./checkbox";
import Date from "./date";
import Text from "./text";
import Multiline from "./multiline";
import Number from "./number";
import Password from "./password";
import Switch from "./switch";
import Slider from "./slider";
import RadioGroup from "./radioGroup";
import TimePicker from "./timePicker";

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
        {
            path: "/controls/password",
            caption: "Password",
            component: <Password />
        },
        {
            path: "/controls/switch",
            caption: "Switch",
            component: <Switch />
        },
        {
            path: "/controls/slider",
            caption: "Slider",
            component: <Slider />
        },
        {
            path: "/controls/radioGroup",
            caption: "Radio Group",
            component: <RadioGroup />
        },
        {
            path: "/controls/timePicker",
            caption: "Time Picker",
            component: <TimePicker />
        },
    ].sort((x, y) => x.caption.localeCompare(y.caption))
};

export default controls;
