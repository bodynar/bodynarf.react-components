import { SimpleAnchorProps } from "@bbr/components/anchor";

/** Simple anchor component, without icon */
export const SimpleAnchor = ({ href, className, onClick, caption, title, target }: SimpleAnchorProps): JSX.Element => {
    return (
        <a
            className={className}
            href={href}
            title={title}
            target={target}
            onClick={onClick}
        >
            {caption}
        </a>
    );
};
