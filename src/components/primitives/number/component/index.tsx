import { FC } from "react";

import { isNullish } from "@bodynarf/utils";

import { NumberProps } from "..";
import NumberWithLabel from "../components/withLabel";
import NumberWithoutLabel from "../components/withoutLabel";

/** Number input component */
const Number: FC<NumberProps> = (props) => {
    // eslint-disable-next-line react/destructuring-assignment
    return isNullish(props.label)
        ? <NumberWithoutLabel {...props} />
        : (
            <NumberWithLabel
                {...props}
                // eslint-disable-next-line react/destructuring-assignment
                label={props.label}
            />
        );
};

export default Number;
