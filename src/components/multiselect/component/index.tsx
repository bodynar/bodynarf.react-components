import { createLabelRouter } from "@bbr/utils";

import "../../dropdown/component/style.scss";
import "./style.scss";

import { MultiselectProps } from "../types";
import MultiselectWithoutLabel from "../components/withoutLabel";
import MultiselectWithLabel from "../components/withLabel";

/** Multiselect component */
const Multiselect = createLabelRouter<MultiselectProps>(MultiselectWithoutLabel, MultiselectWithLabel);

export default Multiselect;
