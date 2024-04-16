import { FC } from "react";

import { getClassName, isNullOrEmpty } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import Icon from "@bbr/components/icon";

import { DropdownLabelProps } from "../../component";

/** Props type of `EmptyLabel` */
type EmptyLabelProps = Pick<DropdownLabelProps, "caption" | "onClick" | "className">;

/** Empty dropdown label component (no item selected) */
const EmptyLabel: FC<EmptyLabelProps> = ({
    caption, onClick, className,
}): JSX.Element => {
    const elClassName = getClassName([
        "dropdown-trigger",
        "bbr-dropdown__label",
        isNullOrEmpty(className) ? "" : `${className}--md`,
        "bbr-dropdown__label--default",
        "button"
    ]);

    return (
        <label
            className={elClassName}
            onClick={onClick}
        >
            <span className="mr-2">
                {caption}
            </span>
            <Icon name="arrow-down" size={ElementSize.Medium} />
        </label>
    );
};

export default EmptyLabel;
