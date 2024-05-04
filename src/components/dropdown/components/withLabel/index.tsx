import { FC, useId } from "react";

import { ElementSize } from "@bbr/types";
import LabelWrapper from "@bbr/internalComponent/componentWithLabel";

import { DropdownProps } from "../..";
import DropdownCompact from "../compact";

/** Dropdown component with label */
const DropdownWithLabel: FC<DropdownProps> = (props) => {
    const id = useId();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { onClick, ...otherProps } = props;

    return (
        <LabelWrapper
            id={id}
            label={props.label!}
            onClick={props.onClick}
            size={ElementSize.Normal}
        >
            <DropdownCompact
                {...otherProps}

                id={id}
            />
        </LabelWrapper>
    );
};

export default DropdownWithLabel;
