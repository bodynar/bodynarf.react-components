import { createLabelRouter } from "@bbr/utils";

import { TextProps } from "..";
import TextWithLabel from "../components/withLabel";
import TextWithoutLabel from "../components/withoutLabel";

/** Textual input component */
const Text = createLabelRouter<TextProps>(TextWithoutLabel, TextWithLabel);

export default Text;
