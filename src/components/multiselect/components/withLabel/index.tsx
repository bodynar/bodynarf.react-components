import { FC, useId } from "react";

// import { ElementSize } from "@bbr/types";
// import LabelWrapper from "@bbr/internalComponent/componentWithLabel";

import { MultiselectProps } from "../../types";
import MultiselectWithoutLabel from "../withoutLabel";
import { ElementSize } from "@bodynarf/react.components";
import LabelWrapper from "@bodynarf/react.components/components/primitives/internal/componentWithLabel";

/** Multiselect component with label*/
const MultiselectWithLabel: FC<MultiselectProps> = (props) => {
    const id = useId();

    return (
        <LabelWrapper
            id={id}
            label={props.label!}
            size={ElementSize.Normal} // TODO ?
        >
            <MultiselectWithoutLabel
                {...props}
            />
        </LabelWrapper>
    );
};

export default MultiselectWithLabel;
