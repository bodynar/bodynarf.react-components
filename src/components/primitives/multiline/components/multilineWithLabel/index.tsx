import { ChangeEvent, useCallback } from 'react';

import { generateGuid, getClassName } from '@bodynarf/utils';

import { MultilineProps } from '../..';

/** Multiline textual input component with describing label */
const MultilineWithLabel = (props: MultilineProps): JSX.Element => {
    const onValueChange = useCallback(
        (event: ChangeEvent<HTMLTextAreaElement>) => props.onValueChange(event.target.value),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [props.onValueChange]
    );

    const id = props.name || generateGuid();

    const size = `is-${(props.size || 'normal')}`;

    const className = getClassName([
        props.className,
        size,
        props.rounded === true ? 'is-rounded' : '',
        "textarea",
        props.fixed === true ? 'has-fixed-size': '',
    ]);

    const inputContainerClassName = getClassName([
        "control",
        props.loading === true ? 'is-loading' : '',
        (props.style || 'default') === 'default' ? '' : `is-${props.style}`
    ]);

    const label = props.label!;

    const labelClassName = getClassName([
        "label",
        label.horizontal !== true ? size : "",
        label.className
    ]);

    if (label.horizontal === true) {
        const labelContainerClassName = getClassName([
            "field-label",
            size,
            label.horizontalContainerClassName
        ]);

        const fieldContainerClassName = getClassName([
            "field-body",
            label.horizontalFieldContainerClassName
        ]);

        return (
            <div className="app-input field is-horizontal">
                <div className={labelContainerClassName}>
                    <label
                        className={labelClassName}
                        htmlFor={id}
                    >
                        {label.caption}
                    </label>
                </div>
                <div className={fieldContainerClassName}>
                    <div className="field">
                        <div className={inputContainerClassName}>
                            <textarea
                                className={className}
                                placeholder={props.placeholder}
                                readOnly={props.readonly}
                                disabled={props.disabled}
                                defaultValue={props.defaultValue}
                                onChange={onValueChange}
                                name={id}
                                id={id}
                                rows={props.rows}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="app-input field">
            <label
                className={labelClassName}
                htmlFor={id}
            >
                {label.caption}
            </label>
            <div className={inputContainerClassName}>
                <textarea
                    className={className}
                    placeholder={props.placeholder}
                    readOnly={props.readonly}
                    disabled={props.disabled}
                    defaultValue={props.defaultValue}
                    onChange={onValueChange}
                    name={id}
                    id={id}
                    rows={props.rows}
                />
            </div>
        </div>
    );
};

export default MultilineWithLabel;
