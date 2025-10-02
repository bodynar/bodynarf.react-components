import { FC } from "react";

import { isNullish } from "@bodynarf/utils";

import "./style.scss";

import { ColorPickerProps } from "..";
import ColorPickerWithoutLabel from "../components/withoutLabel";
import ColorPickerWithLabel from "../components/withLabel";

/** Color picker component */
const ColorPicker: FC<ColorPickerProps> = (props) =>
    // eslint-disable-next-line react/destructuring-assignment
    isNullish(props.label)
        ? <ColorPickerWithoutLabel {...props} />
        : (
            <ColorPickerWithLabel
                {...props}
                // eslint-disable-next-line react/destructuring-assignment
                label={props.label}
            />
        )
    ;

export default ColorPicker;
