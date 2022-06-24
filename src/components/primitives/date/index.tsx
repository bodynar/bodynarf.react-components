import { ChangeEvent, useCallback } from 'react';

import { generateGuid, getClassName, isStringEmpty } from '@bodynarf/utils';

import { BaseInputElementProps, InputLabel } from '../types';

/** Date input conponent props type */
export type DateProps = Omit<BaseInputElementProps<Date | undefined>, 'placeholder'> & {
    /** Label configuration */
    label: InputLabel;
}

/** Date input component */
const DatePicker = (props: DateProps): JSX.Element => {
    const onValueChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) =>
            props.onValueChange(
                isStringEmpty(event.target.value)
                    ? undefined
                    : new Date(event.target.value)
            ),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [props.onValueChange]
    );

    const id = props.name || generateGuid();

    const size = `is-${(props.size || 'normal')}`;

    const className = getClassName([
        props.className,
        size,
        props.rounded === true ? 'is-rounded' : '',
        "input",
    ]);

    const inputContainerClassName = getClassName([
        "control",
        props.loading === true ? 'is-loading' : '',
        (props.style || 'default') === 'default' ? '' : `is-${props.style}`
    ]);

    const label = props.label;
    const defaultValue = props.defaultValue?.toISOString().split("T")[0];

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
                            <input
                                type="date"
                                className={className}
                                readOnly={props.readonly}
                                disabled={props.disabled}
                                defaultValue={defaultValue}
                                onChange={onValueChange}
                                name={id}
                                id={id}
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
                <input
                    type="date"
                    className={className}
                    readOnly={props.readonly}
                    disabled={props.disabled}
                    defaultValue={props.defaultValue?.toLocaleDateString()}
                    onChange={onValueChange}
                    name={id}
                    id={id}
                />
            </div>
        </div>
    );
};

export default DatePicker;
