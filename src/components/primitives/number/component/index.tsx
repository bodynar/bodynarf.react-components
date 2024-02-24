import { isNullOrUndefined } from "@bodynarf/utils";

import { NumberProps } from "@bbr/components/number";
import NumberWithLabel from "@bbr/components/number/components/withLabel";
import NumberWithoutLabel from "@bbr/components/number/components/withoutLabel";

/** Number input component */
const Number = (props: NumberProps): JSX.Element => {
    return isNullOrUndefined(props.label)
        ? <NumberWithoutLabel {...props} />
        : <NumberWithLabel {...props} />;
};

export default Number;
