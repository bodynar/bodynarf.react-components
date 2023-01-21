import { isNullOrUndefined } from "@bodynarf/utils";

import { BaseInputElementProps } from "..";

import NumberWithLabel from "./components/withLabel";
import NumberWithoutLabel from "./components/withoutLabel";

/** Number component props type */
export interface NumberProps extends BaseInputElementProps<number> {
    /** Focus out event handler */
    onBlur?: () => void;
}

/** Number input component */
const Number = (props: NumberProps): JSX.Element => {
    if (isNullOrUndefined(props.label)) {
        return (<NumberWithoutLabel {...props} />);
    }
    else {
        return (<NumberWithLabel {...props} />);
    }
};

export default Number;
