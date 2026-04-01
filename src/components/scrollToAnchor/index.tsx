import { FC, RefObject, useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scroll to anchor component props type */
type ScrollToAnchorProps = {
    /** Reference to scrollable parent container */
    parentContainerRef: RefObject<HTMLElement | null>;
};

/** Component that scrolls to anchor element on location change or resets scroll to top */
const ScrollToAnchor: FC<ScrollToAnchorProps> = ({
    parentContainerRef
}) => {
    const location = useLocation();

    useEffect(() => {
        if (!location.hash) {
            parentContainerRef.current?.scrollTo(0, 0);

            return;
        }

        const tryScroll = () => {
            const el = document.getElementById(location.hash.slice(1));

            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
            } else {
                requestAnimationFrame(tryScroll);
            }
        };

        requestAnimationFrame(tryScroll);
    }, [location, parentContainerRef]);

    return null;
};

export default ScrollToAnchor;
