import { FC, ReactNode } from "react";

import Icon from "@bodynarf/react.components/components/icon";

/* Props type of `ObsoleteWarning` */
type ObsoleteWarningProps = {
    /** Version when deprecated mark appears */
    version: string;

    /** Recommendation about code update */
    recommendation: ReactNode;

    /**
     * Current deprecation state
     * @default "warning"
     */
    state?: "warning" | "danger";
};

/* Obsolete warning panel */
const ObsoleteWarning: FC<ObsoleteWarningProps> = ({
    version, recommendation, state = "warning"
}) => {
    return (
        <article className={`message is-${state}`}>
            <div className="message-body">
                <Icon name="exclamation-triangle-fill" />
                {` `}
                Warning!
                This component has been marked as obsolete since version
                {` `}
                <code>
                    {version}
                </code>
                <br />
                {recommendation}
            </div>
        </article>
    );
};

export default ObsoleteWarning;
