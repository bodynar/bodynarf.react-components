import { isNullOrEmpty, isUndefined } from "@bodynarf/utils";

import Icon from "@bodynarf/react.components/components/icon";

/** Title demo component props type */
export interface DemoComponentTitleInfoMessageProps {
    /** Component name */
    name: string;

    /** Description of component purpose */
    description?: string | React.ReactNode;
}

/** Title info message about further demo of component use */
const DemoComponentTitleInfoMessage = ({
    name, description,
}: DemoComponentTitleInfoMessageProps): JSX.Element => {
    return (
        <div className="block">
            <h4 className="title is-4">
                {name}
            </h4>
            <span style={{ fontStyle: "italic", whiteSpace: "pre-line" }}>
                <hr />
                <Icon name="exclamation-triangle-fill" className="mr-1" />
                Not all props listed bellow, only those which can be displayed.
                {`\n`}
                For full props list see type definition & its description
            </span>
            {!isUndefined(description)
                &&
                <p className="mt-4" style={{ whiteSpace: "pre-line" }}>
                    {description}
                </p>
            }
        </div>
    );
};

export default DemoComponentTitleInfoMessage;
