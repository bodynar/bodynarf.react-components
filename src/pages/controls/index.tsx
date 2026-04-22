import { MenuItem } from "../routing";

import AutoComplete from "./autoComplete";
import ColorPicker from "./colorPicker";
import Checkbox from "./checkbox";
import Date from "./date";
import DateInput from "./dateInput";
import Text from "./text";
import Multiline from "./multiline";
import Number from "./number";
import OtpInput from "./otpInput";
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
            component: <ColorPicker />,
            version: "1.7",
        },
        {
            path: "/controls/checkbox",
            caption: "Check box",
            component: <Checkbox />,
            version: "1.3",
        },
        {
            path: "/controls/date",
            caption: "Date picker",
            component: <Date />,
            version: "0.1",
        },
        {
            path: "/controls/text",
            caption: "Text",
            component: <Text />,
            version: "0.1",
        },
        {
            path: "/controls/multiline",
            caption: "Multiline",
            component: <Multiline />,
            version: "0.1",
        },
        {
            path: "/controls/number",
            caption: "Number",
            component: <Number />,
            version: "1.4",
        },
        {
            path: "/controls/password",
            caption: "Password",
            component: <Password />,
            version: "1.4",
        },
        {
            path: "/controls/switch",
            caption: "Switch",
            component: <Switch />,
            version: "1.14",
        },
        {
            path: "/controls/slider",
            caption: "Slider",
            component: <Slider />,
            version: "1.14",
        },
        {
            path: "/controls/radioGroup",
            caption: "Radio Group",
            component: <RadioGroup />,
            version: "1.14",
        },
        {
            path: "/controls/timePicker",
            caption: "Time Picker",
            component: <TimePicker />,
            version: "1.14",
        },
        {
            path: "/controls/autoComplete",
            caption: "Auto Complete",
            component: <AutoComplete />,
            version: "1.15",
        },
        {
            path: "/controls/dateInput",
            caption: "Date Input",
            component: <DateInput />,
            version: "1.15",
        },
        {
            path: "/controls/otpInput",
            caption: "OTP Input",
            component: <OtpInput />,
            version: "1.15",
        },
    ].sort((x, y) => x.caption.localeCompare(y.caption))
};

export default controls;
