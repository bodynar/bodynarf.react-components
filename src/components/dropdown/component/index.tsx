import { isNullOrUndefined } from "@bodynarf/utils";

import "./style.scss";

import { DropdownProps } from "..";
import DropdownWithLabel from "../components/withLabel";
import DropdownCompact from "../components/compact";

/** Dropdown component */
const Dropdown = (props: DropdownProps): JSX.Element => {
    return isNullOrUndefined(props.label)
        ? <DropdownCompact {...props} />
        : <DropdownWithLabel {...props} />;
};

export default Dropdown;

