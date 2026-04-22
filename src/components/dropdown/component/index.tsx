import { createLabelRouter } from "@bbr/utils";

import "./style.scss";

import { DropdownProps } from "..";
import DropdownWithLabel from "../components/withLabel";
import DropdownCompact from "../components/compact";

/** Dropdown component */
const Dropdown = createLabelRouter<DropdownProps>(DropdownCompact, DropdownWithLabel);

export default Dropdown;

