import Dropdown, { SelectableItem } from "@bodynarf/react.components/components/dropdown";

import { useGenericSelection } from "../..";

/** Component enum use case props type */
interface ComponentEnumCaseProps<TEnum> {
    /** Caption */
    caption: string;

    /** Lookup placeholder */
    placeholder: string;

    /** Is caption must be highlighted as code */
    captionIsCode?: boolean;

    /** Description */
    description: string | React.ReactNode;

    /** Available items to select */
    lookupValues: Array<SelectableItem>;

    /** Keys of enum */
    enumNames: Array<string>;

    /** Example of component with current enum */
    componentProvider: (color: TEnum) => React.ReactNode;

    /** Code to represent selected enum */
    codeProvider: (id: string) => string;
}

/** Component enum variants case */
function ComponentEnumCase<TEnum>({
    caption, captionIsCode = false,
    description,
    codeProvider, componentProvider,
    lookupValues, enumNames, placeholder,
}: ComponentEnumCaseProps<TEnum>): JSX.Element {
    const hookValues = useGenericSelection<TEnum>(lookupValues);

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
                            items={lookupValues}
                            onSelect={hookValues.onValueSelect}
                            value={hookValues.selectedValue}
                            placeholder={placeholder}
                            deselectable={false}
                        />
                    </div>
                    <div className="column">
                        <pre>
                            {codeProvider(enumNames[+hookValues.selectedValue!.id])}
                        </pre>
                    </div>
                </div>

                {componentProvider(hookValues.value)}
            </div>
        </>
    );
}

export default ComponentEnumCase;
