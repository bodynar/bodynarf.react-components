import { FC, useId } from "react";

import { BaseInputWithLabel, ElementSize } from "@bbr/types";
import LabelWrapper from "@bbr/internalComponent/componentWithLabel";

import { DropdownProps } from "../..";
import DropdownCompact from "../compact";

/** Dropdown component with label */
const DropdownWithLabel: FC<BaseInputWithLabel<DropdownProps>> = (props) => {
    const id = useId();

    return (
        <LabelWrapper
            id={id}
            // eslint-disable-next-line react/destructuring-assignment
            label={props.label}
            size={ElementSize.Normal}
        >
            <DropdownCompact
                id={id}
                {...props}
            />
        </LabelWrapper>
    );
};

export default DropdownWithLabel;
