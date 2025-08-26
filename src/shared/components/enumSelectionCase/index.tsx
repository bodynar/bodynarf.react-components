import { FC, ReactNode } from "react";

import Dropdown, { SelectableItem } from "@bodynarf/react.components/components/dropdown";

import { useGenericSelection } from "../..";

/** Component enum use case props type */
type ComponentEnumCaseProps = {
    /** Caption */
    caption: string;

    /** Is caption must be highlighted as code */
    captionIsCode?: boolean;

    /** Description */
    description: string | ReactNode;

    /** Available items to select */
    lookupValues: Array<SelectableItem>;

    /** Keys of enum */
    enumNames: Array<string>;

    /** Example of component with current enum */
    componentProvider: (color: never) => ReactNode;

    /** Code to represent selected enum */
    codeProvider: (id: string) => ReactNode;
};

/** Component enum variants case */
const ComponentEnumCase: FC<ComponentEnumCaseProps> = ({
    caption, captionIsCode = false,
    description,
    codeProvider, componentProvider,
    lookupValues, enumNames,
}) => {
    const hookValues = useGenericSelection<never>(lookupValues);

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
                        {codeProvider(enumNames[+hookValues.selectedValue!.id])}
                    </div>
                    <div className="column is-6">
                        <span className="mb-2 is-block is-italic has-text-grey">
                            Result:
                        </span>
                        <Dropdown
                            placeholder=""
                            hideOnOuterClick
                            deselectable={false}
                            items={lookupValues}
                            value={hookValues.selectedValue}
                            onSelect={hookValues.handleOnSelect}
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

export default ComponentEnumCase;
