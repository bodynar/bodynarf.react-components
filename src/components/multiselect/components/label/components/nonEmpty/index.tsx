import { FC } from "react";

import { getClassName, isNullOrEmpty } from "@bodynarf/utils";
import { ElementSize } from "@bodynarf/react.components";
import Icon from "@bodynarf/react.components/components/icon";

import { MultiselectLabelProps } from "../../component";

/** Props type of `NonEmptyMultiselectLabel` */
type NonEmptyMultiselectLabelProps = Pick<
    MultiselectLabelProps,
    | "onClick" | "caption"
    | "deselectable" | "className"
>;

/** Dropdown label when item is selected */
const NonEmptyMultiselectLabel: FC<NonEmptyMultiselectLabelProps> = ({
    onClick,
    deselectable, className, caption
}): JSX.Element => {
    const elClassName = getClassName([
        "dropdown-trigger",
        "bbr-dropdown__label",
        isNullOrEmpty(className) ? "" : `${className}--md`,
        "button"
    ]);

    return (
        <label
            className={elClassName}
            onClick={onClick}
        >
            {deselectable &&
                <Icon name="plus-lg" size={ElementSize.Medium} />
            }
            <span
                className={deselectable ? "px-2" : "pr-2"}
            >
                {caption}
            </span>
            <Icon name="arrow-down" size={ElementSize.Medium} />
        </label>
    );
};

export default NonEmptyMultiselectLabel;
