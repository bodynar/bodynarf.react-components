import { isNullOrUndefined } from "@bodynarf/utils";

import "./style.scss";

import DropdownWithLabel from "@bbr/components/dropdown/components/withLabel";
import DropdownCompact from "@bbr/components/dropdown/components/compact";

import { DropdownProps } from "@bbr/components/dropdown";

/** Dropdown component */
const Dropdown = (props: DropdownProps): JSX.Element => {
    if (!isNullOrUndefined(props.label)) {
        return <DropdownWithLabel {...props} />;
    } else {
        return <DropdownCompact {...props} />;
    }
};

export default Dropdown;

