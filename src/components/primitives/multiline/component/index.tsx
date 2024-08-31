import { isNullOrUndefined } from "@bodynarf/utils";

import { MultilineProps } from "..";
import MultilineWithoutLabel from "../components/withoutLabel";
import MultilineWithLabel from "../components/withLabel";

/** Multiline textual input component */
const Multiline = (props: MultilineProps): JSX.Element => {
    return isNullOrUndefined(props.label)
        ? <MultilineWithoutLabel {...props} />
        : <MultilineWithLabel {...props} />;

};

export default Multiline;
