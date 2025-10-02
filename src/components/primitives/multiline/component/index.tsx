import { FC } from "react";

import { isNullish } from "@bodynarf/utils";

import { MultilineProps } from "..";
import MultilineWithoutLabel from "../components/withoutLabel";
import MultilineWithLabel from "../components/withLabel";

/** Multiline textual input component */
const Multiline: FC<MultilineProps> = (props) => {
    // eslint-disable-next-line react/destructuring-assignment
    return isNullish(props.label)
        ? <MultilineWithoutLabel {...props} />
        : (
            <MultilineWithLabel
                {...props}
                // eslint-disable-next-line react/destructuring-assignment
                label={props.label}
            />
        );

};

export default Multiline;
