import { FC } from "react";

import { getClassName, getValueOrDefault, isNullish } from "@bodynarf/utils";

import { ElementSize, LabelConfiguration } from "@bbr/types";
import { mapDataAttributes } from "@bbr/utils";

/** Form input component with label props */
export type ComponentWithLabelProps = {
    /** Label configuration */
    label: LabelConfiguration;

    /** Component size */
    size: ElementSize;

    /** Unique component identifier */
    id: string;

    /** Node element with input element */
    children: React.ReactNode;
};

/** Form input component with describing label */
const ComponentWithLabel: FC<ComponentWithLabelProps> = ({
    label, id, size,
    children,
}) => {
    const elSizeClassName = "is-{0}".format(getValueOrDefault(size, ElementSize.Normal));

    const labelClassName = getClassName([
        "label",
        !label.horizontal ? elSizeClassName : "",
        label.className,
    ]);

    const dataAttributes = isNullish(label.data)
        ? undefined
        : mapDataAttributes(label.data);

    if (label.horizontal) {
        const labelContainerClassName = getClassName([
            "field-label",
            elSizeClassName,
            label.horizontalContainerClassName
        ]);

        const fieldContainerClassName = getClassName([
            "field-body",
            label.horizontalFieldContainerClassName
        ]);

        return (
            <div
                className="bbr-field bbr-input field is-horizontal"
            >
                <div className={labelContainerClassName}>
                    <label
                        htmlFor={id}
                        className={labelClassName}

                        title={label.title}
                        {...dataAttributes}
                    >
                        {label.caption}
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
            className="bbr-field bbr-input field"
        >
            <label
                htmlFor={id}
                className={labelClassName}

                title={label.title}
                {...dataAttributes}
            >
                {label.caption}
            </label>

            {children}
        </div>
    );
};

export default ComponentWithLabel;
