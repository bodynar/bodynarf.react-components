/** Component use case props type */
interface ComponentUseCaseProps {
    /** Case caption */
    caption: string;

    /** Is caption must be highlighted as code */
    captionIsCode?: boolean;

    /** Description of case */
    description: string | React.ReactNode;

    /** Example of component with current case */
    component: React.ReactNode;

    /** Code to represent case */
    code: string | React.ReactNode;
}

/** Component use case */
const ComponentUseCase = ({
    caption, captionIsCode = false,
    description,
    code, component,
}: ComponentUseCaseProps): JSX.Element => {
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
                {typeof description === "string"
                    ?
                    <p style={{ whiteSpace: "pre-line" }}>
                        {description}
                    </p>
                    : description
                }
                <br />
                {typeof code === "string"
                    ? <code>{code}</code>
                    : code
                }
                <br />
                <br />
                {component}
            </div>
        </>
    );
};

export default ComponentUseCase;
