import { FC } from "react";

import { isNullish } from "@bodynarf/utils";

import { AutoCompleteProps } from "..";
import AutoCompleteWithLabel from "../components/withLabel";
import AutoCompleteWithoutLabel from "../components/withoutLabel";

/** Text input with a dropdown suggestions list */
const AutoComplete: FC<AutoCompleteProps> = (props) => {
    // eslint-disable-next-line react/destructuring-assignment
    return isNullish(props.label)
        ? <AutoCompleteWithoutLabel {...props} />
        : (
            <AutoCompleteWithLabel
                {...props}

                // eslint-disable-next-line react/destructuring-assignment
                label={props.label}
            />
        );
};

export default AutoComplete;

