import {
    ChangeEvent, FC, KeyboardEvent, useCallback,
    useEffect, useMemo, useRef, useState,
} from "react";

import { emptyFn, generateGuid, getClassName, isNullish } from "@bodynarf/utils";

import { ElementSize, LabeledElement } from "@bbr/types";
import { getSizeClassName, getStyleClassName, mapDataAttributes } from "@bbr/utils";
import ComponentWithLabel from "@bbr/internalComponent/componentWithLabel";
import InternalHint from "@bbr/internalComponent/hint";
import Popover, { PopoverPosition } from "@bbr/components/popover";
import Calendar from "@bbr/components/calendar";

import { DateInputProps } from "..";
import { formatDate, getFormatLength, getPlaceholder, parseDate, parseFormat, validateCharAtPosition } from "../utils";

import "./style.scss";

/** Date input with inline mask and calendar popover */
const DateInput: FC<
    Omit<DateInputProps, "label"> & Partial<LabeledElement>
> = ({
    defaultValue, onValueChange = emptyFn, validationState,
    name = generateGuid(),
    style, size = ElementSize.Normal,
    readonly = false, disabled = false,
    rounded = false, loading = false, autoFocus = false,
    label,
    onBlur,
    onKeyDown,
    onKeyUp,
    format = "dd.MM.yyyy",
    locale,
    minDate, maxDate,
    calendarConfig,

    className, title, data,
    hint,
}) => {
        const desc = useMemo(() => parseFormat(format), [format]);
        const maxLen = useMemo(() => getFormatLength(desc), [desc]);
        const placeholder = useMemo(() => getPlaceholder(desc), [desc]);

        const [text, setText] = useState<string>(
            defaultValue ? formatDate(defaultValue, desc) : ""
        );
        const [calendarVisible, setCalendarVisible] = useState(false);
        const [calendarValue, setCalendarValue] = useState<Date | undefined>(defaultValue);

        const inputRef = useRef<HTMLInputElement>(null);

        const notifyChange = useCallback(
            (date: Date | undefined) => {
                setCalendarValue(date);
                onValueChange(date);
            },
            [onValueChange],
        );

        const onInputChange = useCallback(
            (event: ChangeEvent<HTMLInputElement>) => {
                const raw = event.target.value;

                // Allow clearing
                if (raw === "") {
                    setText("");
                    notifyChange(undefined);
                    return;
                }

                // Build validated text character by character
                let validated = "";
                let srcIdx = 0;

                for (let pos = 0; pos < maxLen && srcIdx < raw.length; pos++) {
                    // Check if this position should be a separator
                    const isSepPos = desc.parts.some((p, i) => i < desc.parts.length - 1 && pos === p.end);

                    if (isSepPos) {
                        // Auto-insert separator if user typed a digit at separator position
                        if (raw[srcIdx] !== desc.separator) {
                            validated += desc.separator;
                            // Don't advance srcIdx — the user's digit will go to next position
                            continue;
                        }

                        validated += desc.separator;
                        srcIdx++;
                        continue;
                    }

                    const ch = validateCharAtPosition(raw[srcIdx], pos, validated, desc);

                    if (ch === "") {
                        srcIdx++;
                        continue;
                    }

                    validated += ch;
                    srcIdx++;
                }

                setText(validated);

                // Try parsing
                const parsed = parseDate(validated, desc);

                if (parsed) {
                    if (minDate && parsed < minDate) {
                        return;
                    }

                    if (maxDate && parsed > maxDate) {
                        return;
                    }

                    setCalendarValue(parsed);
                    onValueChange(parsed);
                } else {
                    setCalendarValue(undefined);

                    if (validated === "") {
                        onValueChange(undefined);
                    }
                }
            },
            [desc, notifyChange, maxLen, minDate, maxDate, onValueChange],
        );

        const onCalendarChange = useCallback(
            (date?: Date) => {
                if (date) {
                    setText(formatDate(date, desc));
                    notifyChange(date);
                } else {
                    setText("");
                    notifyChange(undefined);
                }

                setCalendarVisible(false);
            },
            [desc, notifyChange],
        );

        const onInputKeyDown = useCallback(
            (event: KeyboardEvent<HTMLInputElement>) => {
                if (event.key === "Escape") {
                    setCalendarVisible(false);
                }

                onKeyDown?.(event);
            },
            [onKeyDown],
        );

        const onInputClick = useCallback(() => {
            if (!disabled && !readonly) {
                setCalendarVisible(true);
            }
        }, [disabled, readonly]);

        const onCalendarToggle = useCallback(
            (visible: boolean) => {
                if (readonly || disabled) {
                    return;
                }

                setCalendarVisible(visible);
            },
            [readonly, disabled],
        );

        // Sync external defaultValue changes
        useEffect(() => {
            if (defaultValue) {
                setText(formatDate(defaultValue, desc));
                setCalendarValue(defaultValue);
            } else {
                setText("");
                setCalendarValue(undefined);
            }
        }, [defaultValue, desc]);

        const elClassName = getClassName([
            className,
            getSizeClassName(size, ElementSize.Normal),
            getStyleClassName(style, validationState),
            rounded ? "is-rounded" : "",
            "input",
            "bbr-date-input__input",
        ]);

        const inputContainerClassName = getClassName([
            "control",
            loading ? "is-loading" : "",
        ]);

        const dataAttributes = isNullish(data)
            ? undefined
            : mapDataAttributes(data);

        const inputElement = (
            <div className="bbr-date-input">
                <Popover
                    visible={calendarVisible}
                    onToggle={onCalendarToggle}
                    position={PopoverPosition.Bottom}
                >
                    <Popover.Trigger>
                        <div className={inputContainerClassName}>
                            <input
                                {...dataAttributes}

                                id={name}
                                type="text"
                                name={name}
                                value={text}
                                title={title}
                                ref={inputRef}
                                onBlur={onBlur}
                                onKeyUp={onKeyUp}
                                maxLength={maxLen}
                                autoComplete="off"
                                inputMode="numeric"
                                readOnly={readonly}
                                disabled={disabled}
                                autoFocus={autoFocus}
                                onClick={onInputClick}
                                className={elClassName}
                                onChange={onInputChange}
                                placeholder={placeholder}
                                onKeyDown={onInputKeyDown}
                            />
                        </div>
                    </Popover.Trigger>
                    <Popover.Content className="bbr-date-input__calendar">
                        <Calendar
                            key={calendarValue ? calendarValue.getTime() : "empty"}

                            {...calendarConfig}

                            size={size}
                            style={style}
                            locale={locale}
                            minDate={minDate}
                            maxDate={maxDate}
                            value={calendarValue}
                            onChange={onCalendarChange}
                        />
                    </Popover.Content>
                </Popover>
                <InternalHint
                    hint={hint}
                    validationState={validationState}
                />
            </div>
        );

        if (label) {
            return (
                <ComponentWithLabel
                    id={name}
                    size={size}
                    label={label}
                >
                    {inputElement}
                </ComponentWithLabel>
            );
        }

        return inputElement;
    };

export default DateInput;
