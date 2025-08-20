import { FC, ReactNode } from "react";

import { ElementSize } from "@bodynarf/react.components";
import Dropdown from "@bodynarf/react.components/components/dropdown";

import { Sizes, useSizeSelection } from "../..";

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
                            Component:
                        </span>
                        <Dropdown
                            hideOnOuterClick
                            items={Sizes.selectableItems}
                            onSelect={sizeHookValues.onValueSelect}
                            value={sizeHookValues.selectedValue}
                            placeholder="Size"
                            deselectable={false}
                        />
                        <div className="block mt-2">
                            {componentProvider(sizeHookValues.value)}
                        </div>
                    </div>
                    <div className="column is-6">
                        <span className="mb-2 is-block is-italic has-text-grey">
                            Code:
                        </span>
                        {codeProvider(Sizes.keys[+sizeHookValues.selectedValue!.id])}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ComponentSizeCase;
