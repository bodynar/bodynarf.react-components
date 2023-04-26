import { isNullOrUndefined } from "@bodynarf/utils";

import "../../../../common.scss";

import { MultilineProps } from "..";

import MultilineWithoutLabel from "../components/multilineWithoutLabel";
import MultilineWithLabel from "../components/multilineWithLabel";

/** Multiline textual input component */
const Multiline = (props: MultilineProps): JSX.Element => {
    if (isNullOrUndefined(props.label)) {
        return (<MultilineWithoutLabel {...props} />);
    }
    else {
        return (<MultilineWithLabel {...props} />);
    }

};

export default Multiline;
