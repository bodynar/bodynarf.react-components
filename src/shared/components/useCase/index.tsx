import { FC, ReactNode } from "react";

import AnchorHeading from "../anchorHeading";
import { isNotNullish } from "@bodynarf/utils";

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
                <AnchorHeading
                    caption={caption}
                    captionIsCode={captionIsCode}
                />
                <br />
                {typeof description === "string"
                    ?
                    <p style={{ whiteSpace: "pre-line" }}>
                        {description}
                    </p>
                    : description
                }
                {isNotNullish(code)
                    ? (
                        <div className="columns mt-0">
                            <div className="column is-6">
                                <span className="mb-2 is-block is-italic has-text-grey">
                                    Code:
                                </span>
                                {code}
                            </div>

                            {isNotNullish(children)
                                ? (
                                    <div className="column is-6">
                                        <span className="mb-2 is-block is-italic has-text-grey">
                                            Result:
                                        </span>
                                        {children}
                                    </div>
                                )
                                : null}
                        </div>
                    )
                    : null}
            </div>
        </>
    );
};

export default ComponentUseCase;
