import { FC } from "react";

import { isNullOrEmpty, isUndefined } from "@bodynarf/utils";

import Icon from "@bodynarf/react.components/components/icon";

/** Title demo component props type */
type DemoComponentTitleInfoMessageProps = {
    /** Component name */
    name: string;

    /** Description of component purpose */
    description?: string | React.ReactNode;

    /** Name of base type to show props display warning */
    baseTypeName?: string;
};

/** Title info message about further demo of component use */
const DemoComponentTitleInfoMessage: FC<DemoComponentTitleInfoMessageProps> = ({
    name, description,
    baseTypeName
}) => {
    return (
        <div className="block">
            <h4 className="title is-4">
                {name}
            </h4>
            {!isNullOrEmpty(baseTypeName) &&
                <span style={{ fontStyle: "italic", whiteSpace: "pre-line" }}>
                    <hr />
                    <Icon
                        name="exclamation-triangle-fill"
                        className="mr-1"
                    />
                    This page shows the props of a specific component
                    {`\n`}
                    Some props inherited from the base type
                    {` `}
                    <code>
                        {baseTypeName}
                    </code>
                    {` `}
                    are described on a separate page
                </span>
            }
            {!isUndefined(description)
                &&
                <p
                    className="mt-4"
                    style={{ whiteSpace: "pre-line" }}
                >
                    {description}
                </p>
            }
        </div>
    );
};

export default DemoComponentTitleInfoMessage;
