import { isNullOrUndefined } from "@bodynarf/utils";

import "./style.scss";

import DropdownWithLabel from "../components/withLabel";
import DropdownCompact from "../components/compact";

import { DropdownProps } from "..";

/** Dropdown component */
const Dropdown = (props: DropdownProps): JSX.Element => {
    if (!isNullOrUndefined(props.label)) {
        return <DropdownWithLabel {...props} />;
    } else {
        return <DropdownCompact {...props} />;
    }
};

export default Dropdown;

