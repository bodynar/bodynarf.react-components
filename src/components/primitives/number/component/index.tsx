import { isNullOrUndefined } from "@bodynarf/utils";

import { NumberProps } from "..";
import NumberWithLabel from "../components/withLabel";
import NumberWithoutLabel from "../components/withoutLabel";

/** Number input component */
const Number = (props: NumberProps): JSX.Element => {
    return isNullOrUndefined(props.label)
        ? <NumberWithoutLabel {...props} />
        : <NumberWithLabel {...props} />;
};

export default Number;
