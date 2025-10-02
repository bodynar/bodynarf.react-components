import { FC } from "react";

import { isNullish } from "@bodynarf/utils";

import "../../dropdown/component/style.scss";
import "./style.scss";

import { MultiselectProps } from "../types";
import MultiselectWithoutLabel from "../components/withoutLabel";
import MultiselectWithLabel from "../components/withLabel";

/** Multiselect component */
const Multiselect: FC<MultiselectProps> = (props) => {
    // eslint-disable-next-line react/destructuring-assignment
    return isNullish(props.label)
        ? <MultiselectWithoutLabel {...props} />
        : (
            <MultiselectWithLabel
                {...props}
                // eslint-disable-next-line react/destructuring-assignment
                label={props.label}
            />
        )
        ;
};

export default Multiselect;
