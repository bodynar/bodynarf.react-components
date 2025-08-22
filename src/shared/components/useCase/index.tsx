import { FC, ReactNode } from "react";

/** Component use case props type */
type ComponentUseCaseProps = {
    /** Case caption */
    caption: string;

    /** Description of case */
    description: string | ReactNode;

    /** Example of component with current case */
    children: ReactNode;

    /** Code to represent case */
    code: ReactNode;

    /** Is caption must be highlighted as code */
    captionIsCode?: boolean;
};

/** Component use case */
const ComponentUseCase: FC<ComponentUseCaseProps> = ({
    caption, captionIsCode = false,
    description,
    code, children,
}) => {
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
                {typeof description === "string"
                    ?
                    <p style={{ whiteSpace: "pre-line" }}>
                        {description}
                    </p>
                    : description
                }
                <div className="columns mt-0">
                    <div className="column is-6">
                        <span className="mb-2 is-block is-italic has-text-grey">
                            Code:
                        </span>
                        {code}
                    </div>
                    <div className="column is-6">
                        <span className="mb-2 is-block is-italic has-text-grey">
                            Result:
                        </span>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ComponentUseCase;
