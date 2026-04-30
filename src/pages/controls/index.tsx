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
            createVersion: "1.7",
        },
        {
            path: "/controls/checkbox",
            caption: "Check box",
            component: <Checkbox />,
            createVersion: "1.3",
            updateVersion: "1.14",
        },
        {
            path: "/controls/date",
            caption: "Date picker",
            component: <Date />,
            createVersion: "0.1",
        },
        {
            path: "/controls/text",
            caption: "Text",
            component: <Text />,
            createVersion: "0.1",
        },
        {
            path: "/controls/multiline",
            caption: "Multiline",
            component: <Multiline />,
            createVersion: "0.1",
        },
        {
            path: "/controls/number",
            caption: "Number",
            component: <Number />,
            createVersion: "1.4",
            updateVersion: "1.14",
        },
        {
            path: "/controls/password",
            caption: "Password",
            component: <Password />,
            createVersion: "1.4",
        },
        {
            path: "/controls/switch",
            caption: "Switch",
            component: <Switch />,
            createVersion: "1.14",
        },
        {
            path: "/controls/slider",
            caption: "Slider",
            component: <Slider />,
            createVersion: "1.14",
            updateVersion: "1.15",
        },
        {
            path: "/controls/radioGroup",
            caption: "Radio Group",
            component: <RadioGroup />,
            createVersion: "1.14",
            updateVersion: "1.15",
        },
        {
            path: "/controls/timePicker",
            caption: "Time Picker",
            component: <TimePicker />,
            createVersion: "1.14",
        },
        {
            path: "/controls/autoComplete",
            caption: "Auto Complete",
            component: <AutoComplete />,
            createVersion: "1.15",
        },
        {
            path: "/controls/dateInput",
            caption: "Date Input",
            component: <DateInput />,
            createVersion: "1.15",
        },
        {
            path: "/controls/otpInput",
            caption: "OTP Input",
            component: <OtpInput />,
            createVersion: "1.15",
        },
    ].sort((x, y) => x.caption.localeCompare(y.caption))
};

export default controls;
