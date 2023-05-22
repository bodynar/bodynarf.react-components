import { isNullOrUndefined } from "@bodynarf/utils";

import "../../../../common.scss";

import { MultilineProps } from "@bbr/components/multiline";
import MultilineWithoutLabel from "@bbr/components/multiline/components/multilineWithoutLabel";
import MultilineWithLabel from "@bbr/components/multiline/components/multilineWithLabel";

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
