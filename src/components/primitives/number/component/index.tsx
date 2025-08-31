import { FC } from "react";

import { isNullOrUndefined } from "@bodynarf/utils";

import { NumberProps } from "..";
import NumberWithLabel from "../components/withLabel";
import NumberWithoutLabel from "../components/withoutLabel";

/** Number input component */
const Number: FC<NumberProps> = (props) => {
    return isNullOrUndefined(props.label)
        ? <NumberWithoutLabel {...props} />
        : <NumberWithLabel {...props} />;
};

export default Number;
