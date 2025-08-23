import { isNullOrUndefined, getClassName } from "@bodynarf/utils";

import "./style.scss";

import { AnchorProps } from "..";
import SimpleAnchor from "../components/simpleAnchor";
import AnchorWithIcon from "../components/anchorWithIcon";

/**
 * Anchor component
 * @deprecated Since v1.12.7. Use html element with custom formatting
 */
export default function Anchor(props: AnchorProps): JSX.Element {
    if (isNullOrUndefined(props.caption) && isNullOrUndefined(props.icon)) {
        throw new Error("No anchor content provided");
    }

    const className: string = getClassName([
        "bbr-anchor",
        props.className,
        props.disableHovering === true ? "bbr-anchor--unhoverable" : ""
    ]);

    if (isNullOrUndefined(props.icon)) {
        return (
            <SimpleAnchor
                {...props}

                className={className}
            />
        );
    }

    return (
        <AnchorWithIcon
            {...props}
            icon={props.icon!}

            className={className}
        />
    );
}
