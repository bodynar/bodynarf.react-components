import { FC, useCallback, useState } from "react";

import { Icon } from "@bodynarf/react.components";

import "./styles.scss";

/** Anchor heading props type */
type AnchorHeadingProps = {
    /** Heading text */
    caption: string;

    /** Is caption must be highlighted as code */
    captionIsCode?: boolean;
};

/**
 * Get base URL without anchor suffix.
 * With HashRouter URL looks like `origin/base/#/route#anchor`,
 * so we need to strip everything after the second `#`
 */
const getBaseUrl = (): string => {
    const full = window.location.href.split("?")[0];
    const hashIndex = full.indexOf("#");

    if (hashIndex === -1) {
        return full;
    }

    const afterHash = full.substring(hashIndex + 1);
    const secondHash = afterHash.indexOf("#");

    if (secondHash === -1) {
        return full;
    }

    return full.substring(0, hashIndex + 1 + secondHash);
};

/** Heading with anchor link that copies URL to clipboard on click */
const AnchorHeading: FC<AnchorHeadingProps> = ({ caption, captionIsCode = false }) => {
    const anchor = caption.toLowerCase().replace(/\s+/g, "-");
    const [showToast, setShowToast] = useState(false);

    const handleClick = useCallback(() => {
        const url = `${getBaseUrl()}#${anchor}`;
        navigator.clipboard.writeText(url);

        window.history.replaceState(null, "", url);

        setShowToast(true);
        setTimeout(() => setShowToast(false), 1500);
    }, [anchor]);

    return (
        <h5
            id={anchor}
            className="subtitle is-5 anchor-heading has-text-weight-semibold"
        >
            <span
                role="link"
                onClick={handleClick}
                className="is-clickable"
            >
                {captionIsCode
                    ?
                    <code>
                        {caption}
                    </code>
                    : caption
                }
                <span className="anchor-heading__icon">
                    <Icon name="link-45deg" />
                </span>
            </span>
            {showToast === true
                ?
                <span className="anchor-heading__toast">
                    Link copied to clipboard
                </span>
                : null
            }
        </h5>
    );
};

export default AnchorHeading;
