import { isNullOrUndefined } from "@bodynarf/utils";

import "../../../../common.scss";

import { TextProps } from "@bbr/components";

import TextWithLabel from "@bbr/components/text/components/textWithLabel";
import TextWithoutLabel from "@bbr/components/text/components/textWithoutLabel";

/** Textual input component */
const Text = (props: TextProps): JSX.Element => {
    if (isNullOrUndefined(props.label)) {
        return (<TextWithoutLabel {...props} />);
    }
    else {
        return (<TextWithLabel {...props} />);
    }
};

export default Text;