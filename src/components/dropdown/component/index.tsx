import { FC } from "react";

import { isNullOrUndefined } from "@bodynarf/utils";

import "./style.scss";

import { DropdownProps } from "..";
import DropdownWithLabel from "../components/withLabel";
import DropdownCompact from "../components/compact";

/** Dropdown component */
const Dropdown: FC<DropdownProps> = (props) => {
    return isNullOrUndefined(props.label)
        ? <DropdownCompact {...props} />
        : <DropdownWithLabel {...props} />;
};

export default Dropdown;

