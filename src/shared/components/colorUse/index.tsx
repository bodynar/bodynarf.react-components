import { FC, ReactNode } from "react";

import { ElementColor } from "@bodynarf/react.components";
import Dropdown from "@bodynarf/react.components/components/dropdown";

import { Colors, useColorSelection } from "../..";

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

    return (
        <>
            <hr />
            <div className="block">
                <h5 className="subtitle is-5">
                    {captionIsCode
                        ? <code>{caption}</code>
                        : <>{caption}</>
                    }
                </h5>
                <p style={{ whiteSpace: "pre-line" }}>
                    {description}
                </p>
                <br />

                <div className="columns mt-0">
                    <div className="column is-6">
                        <span className="mb-2 is-block is-italic has-text-grey">
                            Code:
                        </span>
                        {codeProvider(Colors.keys[+colorHookValues.selectedValue!.id])}
                    </div>
                    <div className="column is-6">
                        <span className="mb-2 is-block is-italic has-text-grey">
                            Result:
                        </span>
                        <Dropdown
                            hideOnOuterClick
                            items={Colors.selectableItems}
                            onSelect={colorHookValues.handleOnSelect}
                            value={colorHookValues.selectedValue}
                            placeholder="Color"
                            deselectable={false}
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
