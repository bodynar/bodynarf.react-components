import { FC, MouseEvent } from "react";

import SelectedItemLabel from "../components/nonEmpty";
import EmptyLabel from "../components/empty";

/** Props type of `MultiselectLabel` */
export type MultiselectLabelProps = {
    /** Caption when no items selected */
    caption: string;

    /** Caption when some items were selected */
    selectionCaption: string;

    /** Amount of selected items */
    selectedItemsCount: number;

    /** Can user deselect */
    deselectable: boolean;

    /** Element classnames */
    className?: string;

    /** Click handler*/
    onClick: (event: MouseEvent<HTMLElement>) => void;
};

/** Label component */
const MultiselectLabel: FC<MultiselectLabelProps> = ({
    caption, selectionCaption, selectedItemsCount,
    onClick,
    deselectable, className,
}) => {
    if (selectedItemsCount === 0) {
        return (
            <EmptyLabel
                caption={caption}
                onClick={onClick}
                className={className}
            />
        );
    }

    const captionWhenItemsSelected = selectionCaption.format(selectedItemsCount);

    return (
        <SelectedItemLabel
            onClick={onClick}
            className={className}
            deselectable={deselectable}
            caption={captionWhenItemsSelected}
        />
    );
};

export default MultiselectLabel;
