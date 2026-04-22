import { createLabelRouter } from "@bbr/utils";

import "./style.scss";

import { ColorPickerProps } from "..";
import ColorPickerWithoutLabel from "../components/withoutLabel";
import ColorPickerWithLabel from "../components/withLabel";

/** Color picker component */
const ColorPicker = createLabelRouter<ColorPickerProps>(ColorPickerWithoutLabel, ColorPickerWithLabel);

export default ColorPicker;
