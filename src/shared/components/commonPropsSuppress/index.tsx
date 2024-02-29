import Icon from "@bodynarf/react.components/components/icon";

/** Info message about suppressing common props in examples below */
const CommonPropsSuppressExampleInfoMessage = (): JSX.Element => {

    return (
        <span style={{ fontStyle: "italic" }}>
            <hr />
            <Icon name="info-circle-fill" className="mr-1" />
            In the following examples, common props will not be displayed to preserve white space
        </span>
    );
};

export default CommonPropsSuppressExampleInfoMessage;
