import { isNullOrUndefined } from "@bodynarf/utils";

import "./style.scss";

import { ColorPickerProps } from "..";
import ColorPickerWithoutLabel from "../components/withoutLabel";
import ColorPickerWithLabel from "../components/withLabel";

/** Color picker component */
const ColorPicker = (props: ColorPickerProps): JSX.Element =>
    isNullOrUndefined(props.label)
        ? <ColorPickerWithoutLabel {...props} />
        : <ColorPickerWithLabel {...props} />
    ;

export default ColorPicker;
