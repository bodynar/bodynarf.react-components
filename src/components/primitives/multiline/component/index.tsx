import { FC } from "react";

import { isNullOrUndefined } from "@bodynarf/utils";

import { MultilineProps } from "..";
import MultilineWithoutLabel from "../components/withoutLabel";
import MultilineWithLabel from "../components/withLabel";

/** Multiline textual input component */
const Multiline: FC<MultilineProps> = (props) => {
    return isNullOrUndefined(props.label)
        ? <MultilineWithoutLabel {...props} />
        : <MultilineWithLabel {...props} />;

};

export default Multiline;
