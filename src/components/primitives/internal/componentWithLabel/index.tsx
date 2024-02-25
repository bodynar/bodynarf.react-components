import { getClassName, getValueOrDefault } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import { InputLabel } from "@bbr/components";

/** Form input component with label props */
export interface ComponentWithLabelProps {
    /** Label configuration */
    label: InputLabel;

    /** Component size */
    size: ElementSize;

    /** Unique component identifier */
    id: string;

    /** Node element with input element */
    children: React.ReactNode;
}

/** Form input component with describing label */
const ComponentWithLabel = ({
    label, id,
    size,
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
            <div className="bbr-input field is-horizontal">
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
        <div className="bbr-input field">
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
