import { createLabelRouter } from "@bbr/utils";

import { NumberProps } from "..";
import NumberWithLabel from "../components/withLabel";
import NumberWithoutLabel from "../components/withoutLabel";

/** Number input component */
const Number = createLabelRouter<NumberProps>(NumberWithoutLabel, NumberWithLabel);

export default Number;
