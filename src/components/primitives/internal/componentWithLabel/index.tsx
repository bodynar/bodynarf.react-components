import { getClassName, getValueOrDefault } from "@bodynarf/utils";

import { ElementSize, LabelConfiguration } from "@bbr/types";

/** Form input component with label props */
export interface ComponentWithLabelProps {
    /** Label configuration */
    label: LabelConfiguration;

    /** Component size */
    size: ElementSize;

    /** Unique component identifier */
    id: string;

    /**
     * Handle component click
     * @param event Mouse synth event
     */
    onClick?: (event: React.MouseEvent) => void;

    /** Node element with input element */
    children: React.ReactNode;
}

/** Form input component with describing label */
const ComponentWithLabel = ({
    label, id,
    size, onClick,
    children,
}: ComponentWithLabelProps): JSX.Element => {
    const elSizeClassName = "is-{0}".format(getValueOrDefault(size, ElementSize.Normal));

    const labelClassName = getClassName([
        "label",
        !label.horizontal ? elSizeClassName : "",
        label.className
    ]);

    if (label.horizontal) {
        const labelContainerClassName = getClassName([
            "field-label",
            elSizeClassName,
            label!.horizontalContainerClassName
        ]);

        const fieldContainerClassName = getClassName([
            "field-body",
            label!.horizontalFieldContainerClassName
        ]);

        return (
            <div
                onClick={onClick}
                className="bbr-field bbr-input field is-horizontal"
            >
                <div className={labelContainerClassName}>
                    <label
                        className={labelClassName}
                        htmlFor={id}
                    >
                        {label!.caption}
                    </label>
                </div>
                <div className={fieldContainerClassName}>
                    <div className="field">
                        {children}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div
            onClick={onClick}
            className="bbr-field bbr-input field"
        >
            <label
                className={labelClassName}
                htmlFor={id}
            >
                {label!.caption}
            </label>

            {children}
        </div>
    );
};

export default ComponentWithLabel;
