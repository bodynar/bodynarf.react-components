import { FC, ReactNode } from "react";

import { ElementSize } from "@bodynarf/react.components";
import { useLocalStorage } from "@bodynarf/react.components/hooks";

import { Sizes, useSizeSelection } from "../..";
import AnchorHeading from "../anchorHeading";
import SizeSelectorView from "../sizeSelector";

import { LS_KEYS, ViewMode } from "../../../pages/customization/constants";

/** Component size use case props type */
type ComponentSizeCaseProps = {
    /** Caption */
    caption: string;

    /** Is caption must be highlighted as code */
    captionIsCode?: boolean;

    /** Description */
    description: string | React.ReactNode;

    /** Example of component with current size */
    componentProvider: (size: ElementSize) => React.ReactNode;

    /** Code to represent current size */
    codeProvider: (id: string) => ReactNode;
};

/** Component size variants case */
const ComponentSizeCase: FC<ComponentSizeCaseProps> = ({
    caption, captionIsCode = false,
    description,
    codeProvider, componentProvider,
}) => {
    const sizeHookValues = useSizeSelection();
    const [sizeViewMode] = useLocalStorage(LS_KEYS.sizes, "dropdown");

    return (
        <>
            <hr />
            <div className="block">
                <AnchorHeading caption={caption} captionIsCode={captionIsCode} />
                <p style={{ whiteSpace: "pre-line" }}>
                    {description}
                </p>

                <div className="columns mt-0">
                    <div className="column is-6">
                        <span className="mb-2 is-block is-italic has-text-grey">
                            Code:
                        </span>
                        {codeProvider(Sizes.keys[+sizeHookValues.selectedValue.id])}
                    </div>
                    <div className="column is-6">
                        <span className="mb-2 is-block is-italic has-text-grey">
                            Result:
                        </span>

                        <SizeSelectorView
                            viewMode={sizeViewMode as ViewMode}
                            value={sizeHookValues.selectedValue}
                            onSelect={sizeHookValues.handleOnSelect}
                        />

                        <div className="block mt-2">
                            {componentProvider(sizeHookValues.value)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ComponentSizeCase;
