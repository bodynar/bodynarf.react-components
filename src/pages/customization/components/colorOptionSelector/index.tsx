import { FC, useCallback, useState } from "react";

import { ElementColor, SelectableItem } from "@bodynarf/react.components";
import SegmentedControlComponent from "@bodynarf/react.components/components/segmentedControl";

import { Colors } from "../../../../shared";
import ColorSelectorView from "../../../../shared/components/colorSelector";

import { ViewMode, previewOptions } from "../../constants";
import styles from "../../styles.module.scss";

type SelectorProps = { value: ViewMode; onChange: (v: string) => void };

/** Color variations display mode selector */
const ColorOptionSelector: FC<SelectorProps> = ({ value, onChange }) => (
    <div className={styles["option-container"]}>
        <div
            className={`${styles.option} ${value === "dropdown" ? styles["option--selected"] : ""}`}
            onClick={() => onChange("dropdown")}
        >
            <p className={styles["option-label"]}>Dropdown</p>
            <ColorDropdownPreview />
        </div>
        <div className={styles["option-divider"]} />
        <div
            className={`${styles.option} ${value === "buttons" ? styles["option--selected"] : ""}`}
            onClick={() => onChange("buttons")}
        >
            <p className={styles["option-label"]}>Buttons</p>
            <ColorButtonsPreview />
        </div>
    </div>
);

const ColorDropdownPreview: FC = () => {
    const [selected, setSelected] = useState<SelectableItem>(Colors.selectableItems[0]);
    const [previewValue, setPreviewValue] = useState("a");
    const handleSelect = useCallback((item?: SelectableItem) => { if (item) setSelected(item); }, []);

    return (
        <div>
            <ColorSelectorView viewMode="dropdown" value={selected} onSelect={handleSelect} />
            <div className="mt-3">
                <SegmentedControlComponent
                    color={selected.value as ElementColor}
                    value={previewValue}
                    options={previewOptions}
                    onChange={setPreviewValue}
                />
            </div>
        </div>
    );
};

const ColorButtonsPreview: FC = () => {
    const [selected, setSelected] = useState<SelectableItem>(Colors.selectableItems[0]);
    const [previewValue, setPreviewValue] = useState("a");
    const handleSelect = useCallback((item?: SelectableItem) => { if (item) setSelected(item); }, []);

    return (
        <div>
            <ColorSelectorView viewMode="buttons" value={selected} onSelect={handleSelect} />
            <div className="mt-2">
                <SegmentedControlComponent
                    color={selected.value as ElementColor}
                    value={previewValue}
                    options={previewOptions}
                    onChange={setPreviewValue}
                />
            </div>
        </div>
    );
};

export default ColorOptionSelector;
