import { FC } from "react";

import { isUndefined } from "@bodynarf/utils";

import Icon from "@bodynarf/react.components/components/icon";

/** Title demo component props type */
type DemoComponentTitleInfoMessageProps = {
    /** Component name */
    name: string;

    /** Description of component purpose */
    description?: string | React.ReactNode;

    /** Hide suppress common props message */
    hidePropsNotice?: boolean;
};

/** Title info message about further demo of component use */
const DemoComponentTitleInfoMessage: FC<DemoComponentTitleInfoMessageProps> = ({
    name, description,
    hidePropsNotice = false,
}) => {
    return (
        <div className="block">
            <h4 className="title is-4">
                {name}
            </h4>
            {!hidePropsNotice &&
                <span style={{ fontStyle: "italic", whiteSpace: "pre-line" }}>
                    <hr />
                    <Icon name="exclamation-triangle-fill" className="mr-1" />
                    Not all props are listed bellow, mostly those that can be displayed.
                    {`\n`}
                    For a complete list of props see type definition & description
                </span>
            }
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
