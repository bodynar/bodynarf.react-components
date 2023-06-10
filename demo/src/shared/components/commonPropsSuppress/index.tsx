import Icon from "@bodynarf/react.components/components/icon";

/** Info message about suppressing common props in examples below */
const CommonPropsSuppressExampleInfoMessage = (): JSX.Element => {

    return (
        <span style={{ fontStyle: "italic" }}>
            <hr />
            <Icon name="info-circle-fill" className="mr-1" />
            In next examples these common props configuration will not be presented to save space
        </span>
    );
};

export default CommonPropsSuppressExampleInfoMessage;
