import { isNullOrUndefined, isNullOrEmpty, getClassName } from "@bodynarf/utils";

import "./style.scss";

import { AnchorProps, ElementIcon } from "@bbr/components";

import { SimpleAnchor } from "@bbr/components/anchor/components/simpleAnchor";
import { AnchorWithIcon } from "@bbr/components/anchor/components/anchorWithIcon";

/** Anchor component */
export default function Anchor(props: AnchorProps): JSX.Element {
    if (isNullOrUndefined(props.caption) && isNullOrUndefined(props.icon)) {
        throw new Error("No anchor content provided");
    }

    const className: string = getClassName([
        "bbr-anchor",
        !isNullOrEmpty(props.className) ? ` ${props.className}` : "",
        props.disableHovering === true ? " bbr-anchor--unhoverable" : ""
    ]);

    if (isNullOrUndefined(props.icon)) {
        return (
            <SimpleAnchor
                {...props}
                className={className}
                onClick={props.onClick}
            />
        );
    }

    return (
        <AnchorWithIcon
            {...props}
            className={className}
            onClick={props.onClick}
            icon={props.icon as ElementIcon}
        />
    );
}
