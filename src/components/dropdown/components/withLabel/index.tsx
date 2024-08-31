import { FC, useId } from "react";

import { ElementSize } from "@bbr/types";
import LabelWrapper from "@bbr/internalComponent/componentWithLabel";

import { DropdownProps } from "../..";
import DropdownCompact from "../compact";

/** Dropdown component with label */
const DropdownWithLabel: FC<DropdownProps> = (props) => {
    const id = useId();

    return (
        <LabelWrapper
            id={id}
            label={props.label!}
            size={ElementSize.Normal}
        >
            <DropdownCompact
                {...props}

                id={id}
            />
        </LabelWrapper>
    );
};

export default DropdownWithLabel;
