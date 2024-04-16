import { FC, MouseEvent } from "react";

import { isNullOrUndefined } from "@bodynarf/utils";

import { SelectableItem } from "@bbr/components";

import SelectedItemLabel from "../components/selected";
import EmptyLabel from "../components/empty";

/** Props type of `DropdownLabel` */
export interface DropdownLabelProps {
    /** Caption when no items selected */
    caption: string;

    /** Can user deselect */
    deselectable: boolean;

    /** Selected item */
    selectedItem?: SelectableItem;

    /** Element classnames */
    className?: string;

    /** Click handler*/
    onClick: (event: MouseEvent<HTMLLabelElement>) => void;
}

/** Label component */
const DropdownLabel: FC<DropdownLabelProps> = ({
    caption,
    selectedItem, onClick,
    deselectable, className,
}): JSX.Element => {
    if (isNullOrUndefined(selectedItem)) {
        return <EmptyLabel
            caption={caption}
            onClick={onClick}
            className={className}
        />;
    }

    return <SelectedItemLabel
        deselectable={deselectable}
        className={className}
        onClick={onClick}
        selectedItem={selectedItem}
    />;
};

export default DropdownLabel;
