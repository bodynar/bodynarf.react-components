import { FC, ReactNode } from "react";

import { ElementPosition } from "@bodynarf/react.components";
import Dropdown from "@bodynarf/react.components/components/dropdown";

import { Positions, usePositionSelection } from "../..";

/** Component size use case props type */
type ComponentSizeCaseProps = {
    /** Caption */
    caption: string;

    /** Is caption must be highlighted as code */
    captionIsCode?: boolean;

    /** Description */
    description: string | ReactNode;

    /** Example of component with current size */
    componentProvider: (size: ElementPosition) => ReactNode;

    /** Code to represent current size */
    codeProvider: (id: string) => ReactNode;
};

/** Component position variants case */
const ComponentPositionCase: FC<ComponentSizeCaseProps> = ({
    caption, captionIsCode = false,
    description,
    codeProvider, componentProvider,
}) => {
    const hookValues = usePositionSelection();

    return (
        <>
            <hr />
            <div className="block">
                <h5 className="subtitle is-5">
                    {captionIsCode
                        ?
                        <code>
                            {caption}
                        </code>
                        : caption
                    }
                </h5>
                <p style={{ whiteSpace: "pre-line" }}>
                    {description}
                </p>

                <div className="columns mt-0">
                    <div className="column is-6">
                        <span className="mb-2 is-block is-italic has-text-grey">
                            Code:
                        </span>
                        {codeProvider(Positions.keys[+hookValues.selectedValue!.id])}
                    </div>
                    <div className="column is-6">
                        <span className="mb-2 is-block is-italic has-text-grey">
                            Result:
                        </span>
                        <Dropdown
                            hideOnOuterClick
                            items={Positions.selectableItems}
                            onSelect={hookValues.handleOnSelect}
                            value={hookValues.selectedValue}
                            placeholder="Size"
                            deselectable={false}
                        />
                        <div className="block mt-2">
                            {componentProvider(hookValues.value)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ComponentPositionCase;
