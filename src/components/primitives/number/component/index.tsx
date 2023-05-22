import { isNullOrUndefined } from "@bodynarf/utils";

import { NumberProps } from "@bbr/components/number";
import NumberWithLabel from "@bbr/components/number/components/withLabel";
import NumberWithoutLabel from "@bbr/components/number/components/withoutLabel";

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
