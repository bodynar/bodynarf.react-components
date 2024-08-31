import { FC, useId } from "react";

import { ElementSize } from "@bbr/types";
import LabelWrapper from "@bbr/internalComponent/componentWithLabel";

import { MultiselectProps } from "../../types";
import MultiselectWithoutLabel from "../withoutLabel";

/** Multiselect component with label */
const MultiselectWithLabel: FC<MultiselectProps> = (props) => {
    const id = useId();

    return (
        <LabelWrapper
            id={id}
            label={props.label!}
            size={ElementSize.Normal}
        >
            <MultiselectWithoutLabel
                {...props}
            />
        </LabelWrapper>
    );
};

export default MultiselectWithLabel;
