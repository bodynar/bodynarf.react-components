import { FC, MouseEvent } from "react";

import { isNullOrUndefined } from "@bodynarf/utils";

import { SelectableItem } from "@bbr/components";

import SelectedItemLabel from "../components/selected";
import EmptyLabel from "../components/empty";
import DropdownLabelWithSearch from "../components/withSearch";

/** Props type of `DropdownLabel` */
export interface DropdownLabelProps {
    /** Caption when no items selected */
    caption: string;

    /** Can user deselect */
    deselectable: boolean;

    /** Is search through items enabled */
    searchable: boolean;

    /** Selected item */
    selectedItem?: SelectableItem;

    /** Element classnames */
    className?: string;

    /** Click handler*/
    onClick: (event: MouseEvent<HTMLElement>) => void;

    /** Last user search */
    lastSearch: string | null;

    /** Is items list visible */
    isListVisible: boolean;

    /** Handler of search value change by user */
    onSearchChange: (value: string) => void;
}

/** Label component */
const DropdownLabel: FC<DropdownLabelProps> = ({
    caption,
    selectedItem, onClick,
    deselectable, className,

    searchable, onSearchChange, lastSearch, isListVisible,
}): JSX.Element => {
    if (searchable) {
        return <DropdownLabelWithSearch
            caption={caption}
            onClick={onClick}
            className={className}
            onSearchChange={onSearchChange!}
            deselectable={deselectable}
            selectedItem={selectedItem}
            lastSearch={lastSearch!}
            isListVisible={isListVisible}
        />;
    }

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
