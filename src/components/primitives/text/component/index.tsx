import { FC } from "react";

import { isNullish } from "@bodynarf/utils";

import { TextProps } from "..";
import TextWithLabel from "../components/withLabel";
import TextWithoutLabel from "../components/withoutLabel";

/** Textual input component */
const Text: FC<TextProps> = (props) => {
    // eslint-disable-next-line react/destructuring-assignment
    return isNullish(props.label)
        ? <TextWithoutLabel {...props} />
        : (
            <TextWithLabel
                {...props}
                // eslint-disable-next-line react/destructuring-assignment
                label={props.label}
            />
        );
};

export default Text;
