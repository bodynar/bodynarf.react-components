import { FC } from "react";

import { Button, ButtonStyle, Dropdown, ElementColor, ElementSize, SelectableItem } from "@bodynarf/react.components";

import { Colors } from "../..";
import { ViewMode } from "../../../pages/customization/constants";

/** Map to convert ElementColor to ButtonStyle */
const elementColorToButtonStyleMap: Map<ElementColor, ButtonStyle> = new Map([
    [ElementColor.Default, ButtonStyle.Default],
    [ElementColor.Primary, ButtonStyle.Primary],
    [ElementColor.Info, ButtonStyle.Info],
    [ElementColor.Success, ButtonStyle.Success],
    [ElementColor.Warning, ButtonStyle.Warning],
    [ElementColor.Danger, ButtonStyle.Danger],
    [ElementColor.Link, ButtonStyle.Link],
]);

/** Props for pure color selector view */
type ColorSelectorViewProps = {
    /** Current display mode */
    viewMode: ViewMode;

    /** Currently selected item */
    value: SelectableItem;

    /** Selection handler */
    onSelect: (item?: SelectableItem) => void;
};

/** Pure color selector — renders either a Dropdown or colored Buttons depending on viewMode */
const ColorSelectorView: FC<ColorSelectorViewProps> = ({ viewMode, value, onSelect }) => {
    if (viewMode === "buttons") {
        return (
            <div className="buttons is-flex-wrap-wrap">
                {Colors.selectableItems.map((item: SelectableItem) => (
                    <Button
                        key={item.id}
                        size={ElementSize.Small}
                        caption={item.displayValue}
                        onClick={() => onSelect(item)}
                        outlined={value?.id !== item.id}
                        style={elementColorToButtonStyleMap.get(item.value as ElementColor) ?? ButtonStyle.Default}
                    />
                ))}
            </div>
        );
    }

    return (
        <Dropdown
            value={value}
            hideOnOuterClick
            onSelect={onSelect}
            placeholder="Color"
            items={Colors.selectableItems}
        />
    );
};

export default ColorSelectorView;
