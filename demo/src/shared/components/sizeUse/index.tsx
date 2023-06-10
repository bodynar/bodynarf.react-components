import { ElementSize } from "@bodynarf/react.components";
import Dropdown from "@bodynarf/react.components/components/dropdown";

import { Sizes, useSizeSelection } from "../..";

/** Component size use case props type */
interface ComponentSizeCaseProps {
    /** Caption */
    caption: string;

    /** Is caption must be highlighted as code */
    captionIsCode?: boolean;

    /** Description */
    description: string | React.ReactNode;

    /** Example of component with current size */
    componentProvider: (size: ElementSize) => React.ReactNode;

    /** Code to represent current size */
    codeProvider: (id: string) => string;
}

/** Component size variants case */
const ComponentSizeCase = ({
    caption, captionIsCode = false,
    description,
    codeProvider, componentProvider,
}: ComponentSizeCaseProps): JSX.Element => {
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
                <div className="columns">
                    <div className="column is-2">
                        <Dropdown
                            hideOnOuterClick
                            items={Sizes.selectableItems}
                            onSelect={sizeHookValues.onValueSelect}
                            value={sizeHookValues.selectedValue}
                            placeholder="Size"
                            deselectable={false}
                        />
                    </div>
                    <div className="column">
                        <pre>
                            {codeProvider(Sizes.keys[+sizeHookValues.selectedValue!.id])}
                        </pre>
                    </div>
                </div>

                {componentProvider(sizeHookValues.value)}
            </div>
        </>
    );
};

export default ComponentSizeCase;
