import { FC } from "react";

import { isNullish } from "@bodynarf/utils";

import "./style.scss";

import { DropdownProps } from "..";
import DropdownWithLabel from "../components/withLabel";
import DropdownCompact from "../components/compact";

/** Dropdown component */
const Dropdown: FC<DropdownProps> = (props) => {
    // eslint-disable-next-line react/destructuring-assignment
    return isNullish(props.label)
        ? <DropdownCompact {...props} />
        : (
            <DropdownWithLabel
                {...props}
                // eslint-disable-next-line react/destructuring-assignment
                label={props.label}
            />);
};

export default Dropdown;

