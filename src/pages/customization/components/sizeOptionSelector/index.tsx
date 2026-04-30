import { FC, useCallback, useState } from "react";

import { ElementSize, SelectableItem } from "@bodynarf/react.components";
import SegmentedControlComponent from "@bodynarf/react.components/components/segmentedControl";

import { Sizes } from "../../../../shared";
import SizeSelectorView from "../../../../shared/components/sizeSelector";

import { ViewMode, previewOptions } from "../../constants";
import styles from "../../styles.module.scss";

type SelectorProps = { value: ViewMode; onChange: (v: string) => void };

/** Size variations display mode selector */
const SizeOptionSelector: FC<SelectorProps> = ({ value, onChange }) => (
    <div className={styles["option-container"]}>
        <div
            className={`${styles.option} ${value === "dropdown" ? styles["option--selected"] : ""}`}
            onClick={() => onChange("dropdown")}
        >
            <p className={styles["option-label"]}>Dropdown</p>
            <SizeDropdownPreview />
        </div>
        <div className={styles["option-divider"]} />
        <div
            className={`${styles.option} ${value === "buttons" ? styles["option--selected"] : ""}`}
            onClick={() => onChange("buttons")}
        >
            <p className={styles["option-label"]}>Buttons</p>
            <SizeButtonsPreview />
        </div>
    </div>
);

const SizeDropdownPreview: FC = () => {
    const [selected, setSelected] = useState<SelectableItem>(Sizes.selectableItems[0]);
    const [previewValue, setPreviewValue] = useState("a");
    const handleSelect = useCallback((item?: SelectableItem) => { if (item) setSelected(item); }, []);

    return (
        <div>
            <SizeSelectorView viewMode="dropdown" value={selected} onSelect={handleSelect} />
            <div className="mt-3">
                <SegmentedControlComponent
                    size={selected.value as ElementSize}
                    value={previewValue}
                    options={previewOptions}
                    onChange={setPreviewValue}
                />
            </div>
        </div>
    );
};

const SizeButtonsPreview: FC = () => {
    const [selected, setSelected] = useState<SelectableItem>(Sizes.selectableItems[0]);
    const [previewValue, setPreviewValue] = useState("a");
    const handleSelect = useCallback((item?: SelectableItem) => { if (item) setSelected(item); }, []);

    return (
        <div>
            <SizeSelectorView viewMode="buttons" value={selected} onSelect={handleSelect} />
            <div className="mt-2">
                <SegmentedControlComponent
                    size={selected.value as ElementSize}
                    value={previewValue}
                    options={previewOptions}
                    onChange={setPreviewValue}
                />
            </div>
        </div>
    );
};

export default SizeOptionSelector;
