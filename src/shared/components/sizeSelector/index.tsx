import { FC } from "react";

import { Button, ButtonStyle, Dropdown, ElementSize, SelectableItem } from "@bodynarf/react.components";

import { Sizes } from "../..";
import { ViewMode } from "../../../pages/customization/constants";

/** Props for pure size selector view */
type SizeSelectorViewProps = {
    /** Current display mode */
    viewMode: ViewMode;

    /** Currently selected item */
    value: SelectableItem;

    /** Selection handler */
    onSelect: (item?: SelectableItem) => void;
};

/** Pure size selector — renders either a Dropdown or labeled Buttons depending on viewMode */
const SizeSelectorView: FC<SizeSelectorViewProps> = ({ viewMode, value, onSelect }) => {
    if (viewMode === "buttons") {
        return (
            <div className="buttons">
                {Sizes.selectableItems.map((item: SelectableItem) => (
                    <Button
                        key={item.id}
                        caption={item.displayValue}
                        onClick={() => onSelect(item)}
                        outlined={value?.id !== item.id}
                        size={item.value as ElementSize}
                        style={value?.id !== item.id ? ButtonStyle.Default : ButtonStyle.Primary}
                    />
                ))}
            </div>
        );
    }

    return (
        <Dropdown
            value={value}
            hideOnOuterClick
            placeholder="Size"
            onSelect={onSelect}
            items={Sizes.selectableItems}
        />
    );
};

export default SizeSelectorView;
