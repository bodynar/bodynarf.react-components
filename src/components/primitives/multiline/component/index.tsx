import { createLabelRouter } from "@bbr/utils";

import { MultilineProps } from "..";
import MultilineWithoutLabel from "../components/withoutLabel";
import MultilineWithLabel from "../components/withLabel";

/** Multiline textual input component */
const Multiline = createLabelRouter<MultilineProps>(MultilineWithoutLabel, MultilineWithLabel);

export default Multiline;
