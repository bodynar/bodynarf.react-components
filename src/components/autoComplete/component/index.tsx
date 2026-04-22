import { createLabelRouter } from "@bbr/utils";

import { AutoCompleteProps } from "..";
import AutoCompleteWithLabel from "../components/withLabel";
import AutoCompleteWithoutLabel from "../components/withoutLabel";

/** Text input with a dropdown suggestions list */
const AutoComplete = createLabelRouter<AutoCompleteProps>(AutoCompleteWithoutLabel, AutoCompleteWithLabel);

export default AutoComplete;

