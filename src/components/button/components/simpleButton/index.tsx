import { SimpleButtonProps } from "@bbr/components/button";

/** Simple button component, without icon */
export const SimpleButton = ({
    className, disabled,
    onClick,
    caption, title,
    data
}: SimpleButtonProps): JSX.Element => {
    return (
        <button
            className={className}
            disabled={disabled}
            onClick={onClick}
            title={title}
            {...data}
        >
            {caption}
        </button>
    );
};
