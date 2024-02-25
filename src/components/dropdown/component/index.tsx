import { isNullOrUndefined } from "@bodynarf/utils";

import "./style.scss";

import DropdownWithLabel from "@bbr/components/dropdown/components/withLabel";
import DropdownCompact from "@bbr/components/dropdown/components/compact";

import { DropdownProps } from "@bbr/components/dropdown";

/** Dropdown component */
const Dropdown = (props: DropdownProps): JSX.Element => {
    return isNullOrUndefined(props.label)
        ? <DropdownCompact {...props} />
        : <DropdownWithLabel {...props} />;
};

export default Dropdown;

