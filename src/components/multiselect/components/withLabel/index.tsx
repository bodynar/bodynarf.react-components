import { FC, useId } from "react";

import { BaseInputWithLabel, ElementSize } from "@bbr/types";
import LabelWrapper from "@bbr/internalComponent/componentWithLabel";

import { MultiselectProps } from "../../types";
import MultiselectWithoutLabel from "../withoutLabel";

/** Multiselect component with label */
const MultiselectWithLabel: FC<BaseInputWithLabel<MultiselectProps>> = (props) => {
    const id = useId();

    return (
        <LabelWrapper
            id={id}
            // eslint-disable-next-line react/destructuring-assignment
            label={props.label}
            size={ElementSize.Normal}
        >
            <MultiselectWithoutLabel
                {...props}
            />
        </LabelWrapper>
    );
};

export default MultiselectWithLabel;
