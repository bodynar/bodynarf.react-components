import { isNullOrUndefined } from "@bodynarf/utils";

import "../../../common.scss";

import { BaseInputElementProps } from "..";

import MultilineWithoutLabel from "./components/multilineWithoutLabel";
import MultilineWithLabel from "./components/multilineWithLabel";

/** Multiline textual input conponent props type */
export type MultilineProps = BaseInputElementProps<string> & {
    /** Is input should be resizable */
    fixed?: boolean;

    /** Number of initial rows count */
    rows?: number;

    /** Focus out event handler */
    onBlur?: () => void;
};

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
