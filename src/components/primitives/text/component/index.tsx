import { isNullOrUndefined } from "@bodynarf/utils";

import "../../../../common.scss";

import { TextProps } from "@bbr/components";

import TextWithLabel from "@bbr/components/primitives/text/components/withLabel";
import TextWithoutLabel from "@bbr/components/primitives/text/components/withoutLabel";

/** Textual input component */
const Text = (props: TextProps): JSX.Element => {
    return isNullOrUndefined(props.label)
        ? <TextWithoutLabel {...props} />
        : <TextWithLabel {...props} />;
};

export default Text;
