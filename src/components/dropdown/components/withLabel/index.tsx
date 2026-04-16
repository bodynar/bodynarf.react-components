import { FC, useId } from "react";

import { BaseInputWithLabel, ElementSize } from "@bbr/types";
import LabelWrapper from "@bbr/internalComponent/componentWithLabel";

import { DropdownProps } from "../..";
import DropdownCompact from "../compact";

/** Dropdown component with label */
const DropdownWithLabel: FC<BaseInputWithLabel<DropdownProps>> = ({ label, ...props }) => {
    const id = useId();

    return (
        <LabelWrapper
            id={id}
            label={label}
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
