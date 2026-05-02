import { FC, ReactNode } from "react";

import { ElementColor } from "@bodynarf/react.components";
import { useLocalStorage } from "@bodynarf/react.components/hooks";

import { Colors, useColorSelection } from "../..";
import AnchorHeading from "../anchorHeading";
import ColorSelectorView from "../colorSelector";
import { LS_KEYS, ViewMode } from "../../../pages/customization/constants";

/** Component color use case props type */
type ComponentColorCaseProps = {
    /** Caption */
    caption: string;

    /** Is caption must be highlighted as code */
    captionIsCode?: boolean;

    /** Description */
    description: string | React.ReactNode;

    /** Example of component with current color */
    componentProvider: (color: ElementColor) => ReactNode;

    /** Code to represent selected color */
    codeProvider: (id: string) => ReactNode;
};

/** Component color variants case */
const ComponentColorCase: FC<ComponentColorCaseProps> = ({
    caption, captionIsCode = false,
    description,
    codeProvider, componentProvider,
}) => {
    const colorHookValues = useColorSelection();
    const [colorViewMode] = useLocalStorage(LS_KEYS.colors, "dropdown");

    return (
        <>
            <hr />
            <div className="block">
                <AnchorHeading caption={caption} captionIsCode={captionIsCode} />
                <p style={{ whiteSpace: "pre-line" }}>
                    {description}
                </p>
                <br />

                <div className="columns mt-0">
                    <div className="column is-6">
                        <span className="mb-2 is-block is-italic has-text-grey">
                            Code:
                        </span>
                        {codeProvider(Colors.keys[+colorHookValues.selectedValue.id])}
                    </div>

                    <div className="column is-6">
                        <span className="mb-2 is-block is-italic has-text-grey">
                            Result:
                        </span>

                        <ColorSelectorView
                            viewMode={colorViewMode as ViewMode}
                            value={colorHookValues.selectedValue}
                            onSelect={colorHookValues.handleOnSelect}
                        />

                        <div className="block mt-2">
                            {componentProvider(colorHookValues.value)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ComponentColorCase;
