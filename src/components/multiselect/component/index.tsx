import { FC } from "react";

import { isNullOrUndefined } from "@bodynarf/utils";

import "../../dropdown/component/style.scss";
import "./style.scss";

import { MultiselectProps } from "../types";
import MultiselectWithoutLabel from "../components/withoutLabel";
import MultiselectWithLabel from "../components/withLabel";

/** Multiselect component */
const Multiselect: FC<MultiselectProps> = (props) => {
    return isNullOrUndefined(props.label)
        ? <MultiselectWithoutLabel {...props} />
        : <MultiselectWithLabel {...props} />
    ;
};

export default Multiselect;
