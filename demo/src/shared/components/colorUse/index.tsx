import { ElementColor } from "@bodynarf/react.components";
import Dropdown from "@bodynarf/react.components/components/dropdown";

import { Colors, useColorSelection } from "../..";

/** Component color use case props type */
interface ComponentColorCaseProps {
    /** Caption */
    caption: string;

    /** Is caption must be highlighted as code */
    captionIsCode?: boolean;

    /** Description */
    description: string;

    /** Example of component with current color */
    componentProvider: (color: ElementColor) => React.ReactNode;

    /** Code to represent selected color */
    codeProvider: (id: string) => string;
}

/** Component color variants case */
const ComponentColorCase = ({
    caption, captionIsCode = false,
    description,
    codeProvider, componentProvider,
}: ComponentColorCaseProps): JSX.Element => {
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
                <div className="columns">
                    <div className="column is-2">
                        <Dropdown
                            hideOnOuterClick={true}
                            items={Colors.selectableItems}
                            onSelect={colorHookValues.onValueSelect}
                            value={colorHookValues.selectedValue}
                            placeholder="Color"
                            deselectable={false}
                        />
                    </div>
                    <div className="column">
                        <pre>
                            {codeProvider(Colors.keys[+colorHookValues.selectedValue!.id])}
                        </pre>
                    </div>
                </div>

                {componentProvider(colorHookValues.value)}
            </div>
        </>
    );
};

export default ComponentColorCase;
