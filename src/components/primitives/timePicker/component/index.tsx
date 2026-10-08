import {
    ChangeEvent, FC, FocusEvent, KeyboardEvent, useCallback,
    useEffect, useMemo, useRef, useState,
} from "react";

import { emptyFn, generateGuid, getClassName, isNotNullish, isNullish } from "@bodynarf/utils";

import { ElementSize, LabeledElement } from "@bbr/types";
import { getSizeClassName, getStyleClassName, mapDataAttributes, renderControlWithAddons } from "@bbr/utils";
import ComponentWithLabel from "@bbr/internalComponent/componentWithLabel";
import Icon from "@bbr/components/icon";
import InternalHint from "@bbr/components/internal/hint";
import Popover, { PopoverPosition } from "@bbr/components/popover";

import "./style.scss";

import { TimePickerProps, TimeValue } from "../types";

/** AM/PM period for the 12-hour mode. */
type TimePeriod = "AM" | "PM";

/** Mask segments the caret can live in. */
type TimeSegment = "hours" | "minutes" | "seconds";

/** Picker column kinds (mask segments plus the AM/PM column). */
type PickerColumn = TimeSegment | "period";

/** Descriptor of a single picker popover column. */
type PickerColumnConfig = {
    /** Column kind */
    column: PickerColumn;

    /** Cells to render */
    cells: ReadonlyArray<number | TimePeriod>;

    /** Accessible column label */
    label: string;
};

/** Mask separator character. */
const SEPARATOR = ":";

/** Hours available in the 24-hour picker column (0-23). */
const HOURS_24: ReadonlyArray<number> = Array.from({ length: 24 }, (_, i) => i);

/** Hours available in the 12-hour picker column (1-12). */
const HOURS_12: ReadonlyArray<number> = Array.from({ length: 12 }, (_, i) => i + 1);

/** Minutes / seconds available in the picker columns (0-59). */
const MINUTES_SECONDS: ReadonlyArray<number> = Array.from({ length: 60 }, (_, i) => i);

/** AM/PM cells of the period picker column. */
const PERIODS: ReadonlyArray<TimePeriod> = ["AM", "PM"];

/** Mask length: "HH:mm" => 5, "HH:mm:ss" => 8. */
const getMaskLength = (showSeconds: boolean): number => showSeconds ? 8 : 5;

/** Segment [start, end) ranges within the masked text. */
const SEGMENT_RANGES: Record<TimeSegment, [number, number]> = {
    hours: [0, 2],
    minutes: [3, 5],
    seconds: [6, 8],
};

/** Check if a mask position holds the separator. */
const isSeparatorPosition = (position: number): boolean => position === 2 || position === 5;

/** Default placeholder for the current mask. */
const getMaskPlaceholder = (showSeconds: boolean, use12Hours: boolean): string =>
    `${use12Hours ? "hh" : "HH"}:mm${showSeconds ? ":ss" : ""}`;

/** Pad a number to 2 digits. */
const pad2 = (value: number): string => value.toString().padStart(2, "0");

/** Convert a 24h hour (0-23) to a 12h hour (1-12) and its AM/PM period. */
const to12h = (hours: number): { hour12: number; period: TimePeriod } => {
    const period: TimePeriod = hours < 12 ? "AM" : "PM";
    const mod = hours % 12;

    return { hour12: mod === 0 ? 12 : mod, period };
};

/** Convert a 12h hour and period back to a 24h hour (0-23). */
const from12h = (hour12: number, period: TimePeriod): number => {
    if (period === "AM") {
        return hour12 === 12 ? 0 : hour12;
    }

    return hour12 === 12 ? 12 : hour12 + 12;
};

/**
 * Build the value that selecting a picker cell would produce.
 * Returns undefined when the cell kind does not match the column.
 */
const buildCellCandidate = (
    column: PickerColumn,
    cellValue: number | TimePeriod,
    base: TimeValue,
    activePeriod: TimePeriod,
    use12Hours: boolean,
    showSeconds: boolean,
): TimeValue | undefined => {
    const seconds = showSeconds ? (base.seconds ?? 0) : undefined;

    switch (column) {
        case "hours": {
            if (typeof cellValue !== "number") {
                return undefined;
            }

            return {
                hours: use12Hours ? from12h(cellValue, activePeriod) : cellValue,
                minutes: base.minutes,
                seconds,
            };
        }
        case "minutes": {
            if (typeof cellValue !== "number") {
                return undefined;
            }

            return { hours: base.hours, minutes: cellValue, seconds };
        }
        case "seconds": {
            if (typeof cellValue !== "number") {
                return undefined;
            }

            return { hours: base.hours, minutes: base.minutes, seconds: cellValue };
        }
        case "period": {
            if (typeof cellValue !== "string") {
                return undefined;
            }

            return {
                hours: from12h(to12h(base.hours).hour12, cellValue),
                minutes: base.minutes,
                seconds,
            };
        }
    }
};

/**
 * Validate a single typed character at a mask position.
 * Returns the character when accepted, or "" when it must be rejected.
 */
const validateCharAtPosition = (
    char: string,
    position: number,
    currentText: string,
    use12Hours: boolean,
): string => {
    // Separator positions accept only the separator itself
    if (isSeparatorPosition(position)) {
        return char === SEPARATOR ? SEPARATOR : "";
    }

    if (!/^\d$/.test(char)) {
        return "";
    }

    const digit = parseInt(char, 10);

    // Hours segment
    if (position < 2) {
        if (position === 0) {
            return digit > (use12Hours ? 1 : 2) ? "" : char;
        }

        const firstDigit = parseInt(currentText[0] ?? "0", 10);

        if (use12Hours) {
            if (firstDigit === 0 && digit === 0) {
                return ""; // 12h hours cannot be 00
            }

            if (firstDigit === 1 && digit > 2) {
                return ""; // 12h hours cap at 12
            }
        } else if (firstDigit === 2 && digit > 3) {
            return ""; // 24h hours cap at 23
        }

        return char;
    }

    // Minutes / seconds: first digit capped at 5
    if (position === 3 || position === 6) {
        return digit > 5 ? "" : char;
    }

    return char;
};

/** Format a TimeValue into masked display text. */
const formatMaskedValue = (
    value: TimeValue | undefined,
    showSeconds: boolean,
    use12Hours: boolean,
): string => {
    if (isNullish(value)) {
        return "";
    }

    const hours = use12Hours ? to12h(value.hours).hour12 : value.hours;
    const core = `${pad2(hours)}:${pad2(value.minutes)}`;

    return showSeconds ? `${core}:${pad2(value.seconds ?? 0)}` : core;
};

/** Parse complete masked text into a TimeValue. Returns undefined while incomplete or invalid. */
const parseMaskedValue = (
    text: string,
    showSeconds: boolean,
    use12Hours: boolean,
    period: TimePeriod,
): TimeValue | undefined => {
    if (text.length !== getMaskLength(showSeconds)) {
        return undefined;
    }

    const hoursRaw = text.substring(0, 2);
    const minutesRaw = text.substring(3, 5);
    const secondsRaw = text.substring(6, 8);

    if (!/^\d+$/.test(hoursRaw) || !/^\d+$/.test(minutesRaw)) {
        return undefined;
    }

    if (showSeconds && !/^\d+$/.test(secondsRaw)) {
        return undefined;
    }

    const hour12 = parseInt(hoursRaw, 10);

    return {
        hours: use12Hours ? from12h(hour12, period) : hour12,
        minutes: parseInt(minutesRaw, 10),
        seconds: showSeconds ? parseInt(secondsRaw, 10) : undefined,
    };
};

/** Convert a "HH:MM[:SS]" bound string to seconds. Returns undefined when malformed. */
const boundToSeconds = (bound: string | undefined): number | undefined => {
    if (isNullish(bound) || bound.length === 0) {
        return undefined;
    }

    const parts = bound.split(":");

    const hours = parseInt(parts[0] ?? "", 10);
    const minutes = parseInt(parts[1] ?? "0", 10);
    const seconds = parts.length > 2 ? parseInt(parts[2] ?? "0", 10) : 0;

    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
        return undefined;
    }

    return hours * 3600 + minutes * 60 + seconds;
};

/** TimePicker component — masked input or popover picker */
const TimePicker: FC<
    Omit<TimePickerProps, "label"> & LabeledElement
> = ({
    defaultValue,
    value,
    onValueChange = emptyFn,
    validationState,
    name = generateGuid(),
    style,
    size = ElementSize.Normal,
    readonly = false,
    disabled = false,
    rounded = false,
    loading = false,
    autoFocus = false,
    label,
    onBlur,
    onKeyDown,
    onKeyUp,
    showSeconds = false,
    min,
    max,
    placeholder,
    use12Hours = false,
    clearable = false,
    clearTitle = "Clear",
    variant = "input",

    className,
    title,
    data,
    hint,
    addonLeft,
    addonRight,
}) => {
    const maskLength = getMaskLength(showSeconds);
    const sizeClassName = getSizeClassName(size, ElementSize.Normal);

    const inputRef = useRef<HTMLInputElement>(null);

    /** Caret range to re-apply after arrow key stepping replaced the text. */
    const selectionRef = useRef<[number, number] | undefined>(undefined);

    /** Columns container of the picker popover. */
    const columnsRef = useRef<HTMLDivElement>(null);

    const [internalValue, setInternalValue] = useState<TimeValue | undefined>(defaultValue);
    const [period, setPeriod] = useState<TimePeriod>(
        () => isNullish(defaultValue) ? "AM" : to12h(defaultValue.hours).period
    );
    const [text, setText] = useState<string>(
        () => formatMaskedValue(defaultValue, showSeconds, use12Hours)
    );
    const [pickerVisible, setPickerVisible] = useState(false);

    /** Sticky flag: the component stays controlled once a value has been provided. */
    const [everControlled] = useState(() => isNotNullish(value));

    const isControlled = useMemo(
        () => everControlled || isNotNullish(value),
        [everControlled, value],
    );

    const currentValue = useMemo(
        () => isControlled ? value : internalValue,
        [isControlled, value, internalValue],
    );

    const minSeconds = useMemo(() => boundToSeconds(min), [min]);
    const maxSeconds = useMemo(() => boundToSeconds(max), [max]);

    /** Check a value against optional min/max bounds. */
    const isInRange = useCallback((candidate: TimeValue): boolean => {
        const seconds = candidate.hours * 3600 + candidate.minutes * 60 + (candidate.seconds ?? 0);

        if (isNotNullish(minSeconds) && seconds < minSeconds) {
            return false;
        }

        if (isNotNullish(maxSeconds) && seconds > maxSeconds) {
            return false;
        }

        return true;
    }, [minSeconds, maxSeconds]);

    const commit = useCallback((next: TimeValue | undefined) => {
        if (!isControlled) {
            setInternalValue(next);
        }

        onValueChange(next);
    }, [isControlled, onValueChange]);

    // Sync the internal mirror and the display with external value changes (controlled mode).
    // The sticky controlled flag keeps currentValue consistent after the controlled
    // value is cleared to undefined (e.g. by the clear button).
    useEffect(() => {
        if (!isControlled) {
            return;
        }

        setInternalValue(value);
        setText(formatMaskedValue(value, showSeconds, use12Hours));

        if (isNotNullish(value)) {
            setPeriod(to12h(value.hours).period);
        }
    }, [value, isControlled, showSeconds, use12Hours]);

    // Restore the caret selection after arrow key stepping replaced the text
    useEffect(() => {
        if (isNullish(selectionRef.current) || isNullish(inputRef.current)) {
            return;
        }

        inputRef.current.setSelectionRange(selectionRef.current[0], selectionRef.current[1]);
        selectionRef.current = undefined;
    }, [text]);

    // Scroll the picker columns so the active cells are visible when the popover opens
    useEffect(() => {
        if (!pickerVisible || isNullish(columnsRef.current)) {
            return;
        }

        const columns = columnsRef.current.querySelectorAll(".bbr-time-picker__column");

        for (const columnNode of Array.from(columns)) {
            const column = columnNode as HTMLElement;
            const activeNode = column.querySelector(".bbr-time-picker__cell.is-active");

            if (isNullish(activeNode)) {
                continue;
            }

            const active = activeNode as HTMLElement;
            column.scrollTop = active.offsetTop - (column.clientHeight - active.clientHeight) / 2;
        }
    }, [pickerVisible]);

    const onInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const raw = event.target.value;

        // Fully cleared text resets the value
        if (raw === "") {
            setText("");
            commit(undefined);
            return;
        }

        const isDeletion = raw.length < text.length;

        // Rebuild the masked text character by character
        let validated = "";
        let srcIdx = 0;

        while (validated.length < maskLength && srcIdx < raw.length) {
            const position = validated.length;

            // Separator positions: typed separator is consumed, otherwise auto-inserted
            if (isSeparatorPosition(position)) {
                if (raw[srcIdx] === SEPARATOR) {
                    srcIdx++;
                }

                validated += SEPARATOR;
                continue;
            }

            const char = raw[srcIdx];

            // Auto-prefix "0" when the typed digit exceeds the segment first digit cap
            // (e.g. "9" in hours becomes "09")
            const isFirstDigitOfSegment = position === 0 || position === 3 || position === 6;
            const firstDigitCap = position === 0
                ? (use12Hours ? 1 : 2)
                : 5;

            if (isFirstDigitOfSegment && /^\d$/.test(char) && parseInt(char, 10) > firstDigitCap) {
                validated += "0";
                continue;
            }

            const validChar = validateCharAtPosition(char, position, validated, use12Hours);

            srcIdx++;

            if (validChar !== "") {
                validated += validChar;
            }
        }

        // Auto-insert the trailing separator after a fully typed segment (not on deletion)
        if (!isDeletion && (validated.length === 2 || (showSeconds && validated.length === 5))) {
            validated += SEPARATOR;
        }

        setText(validated);

        const parsed = parseMaskedValue(validated, showSeconds, use12Hours, period);

        if (isNotNullish(parsed) && isInRange(parsed)) {
            commit(parsed);
        } else if (validated === "") {
            commit(undefined);
        }
    }, [text, maskLength, showSeconds, use12Hours, period, isInRange, commit]);

    /** Step the segment under the caret up (1) or down (-1) with wrap-around. */
    const bumpSegment = useCallback((delta: 1 | -1) => {
        const input = inputRef.current;
        const caret = isNullish(input) || isNullish(input.selectionStart)
            ? 0
            : input.selectionStart;

        // Hours occupy [0,2), minutes [3,5), seconds [6,8); separators belong to the left segment
        const segment: TimeSegment =
            caret < 3
                ? "hours"
                : caret < 6 || !showSeconds
                    ? "minutes"
                    : "seconds";

        const [start, end] = SEGMENT_RANGES[segment];

        // Prefer fully typed digits of the target segment, then the committed value, then defaults
        const source = parseMaskedValue(text, showSeconds, use12Hours, period) ?? currentValue;

        const readTypedSegment = (): number | undefined => {
            const raw = text.substring(start, end);

            return raw.length === 2 && /^\d+$/.test(raw) ? parseInt(raw, 10) : undefined;
        };

        const wrap = (segmentValue: number, bound: number): number =>
            (segmentValue + delta + bound) % bound;

        let hours = isNotNullish(source)
            ? (use12Hours ? to12h(source.hours).hour12 : source.hours)
            : (use12Hours ? 12 : 0);
        let minutes = source?.minutes ?? 0;
        let seconds = source?.seconds ?? 0;

        switch (segment) {
            case "hours": {
                const base = readTypedSegment() ?? hours;
                hours = use12Hours ? wrap(base - 1, 12) + 1 : wrap(base, 24);
                break;
            }
            case "minutes": {
                minutes = wrap(readTypedSegment() ?? minutes, 60);
                break;
            }
            case "seconds": {
                seconds = wrap(readTypedSegment() ?? seconds, 60);
                break;
            }
        }

        const next: TimeValue = {
            hours: use12Hours ? from12h(hours, period) : hours,
            minutes,
            seconds: showSeconds ? seconds : undefined,
        };

        // Wrap-around would leave the allowed min/max range — keep the current value
        if (!isInRange(next)) {
            return;
        }

        setText(formatMaskedValue(next, showSeconds, use12Hours));
        selectionRef.current = [start, end];
        commit(next);
    }, [text, currentValue, showSeconds, use12Hours, period, isInRange, commit]);

    /** Commit the typed text, or revert the display to the last committed value (Enter/blur). */
    const finalize = useCallback(() => {
        const parsed = parseMaskedValue(text, showSeconds, use12Hours, period);

        if (isNotNullish(parsed) && isInRange(parsed)) {
            setText(formatMaskedValue(parsed, showSeconds, use12Hours));
            commit(parsed);
            return;
        }

        // Incomplete or out of range: fall back to the committed value
        setText(formatMaskedValue(currentValue, showSeconds, use12Hours));

        if (isNotNullish(currentValue)) {
            setPeriod(to12h(currentValue.hours).period);
        }
    }, [text, showSeconds, use12Hours, period, isInRange, commit, currentValue]);

    const onInputKeyDown = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
        if (!readonly && !disabled) {
            if (event.key === "ArrowUp" || event.key === "ArrowDown") {
                event.preventDefault();

                bumpSegment(event.key === "ArrowUp" ? 1 : -1);

                return;
            }

            if (event.key === "Enter") {
                finalize();
            }
        }

        onKeyDown?.(event);
    }, [readonly, disabled, bumpSegment, finalize, onKeyDown]);

    const onInputBlur = useCallback((event: FocusEvent<HTMLInputElement>) => {
        finalize();
        onBlur?.(event);
    }, [finalize, onBlur]);

    const onPeriodToggle = useCallback(() => {
        if (readonly || disabled) {
            return;
        }

        const nextPeriod: TimePeriod = period === "AM" ? "PM" : "AM";
        setPeriod(nextPeriod);

        // Flip the committed value only when the masked text is complete
        const parsed = parseMaskedValue(text, showSeconds, use12Hours, period);

        if (isNotNullish(parsed)) {
            const flipped: TimeValue = {
                ...parsed,
                hours: from12h(to12h(parsed.hours).hour12, nextPeriod),
            };

            setText(formatMaskedValue(flipped, showSeconds, use12Hours));

            if (isInRange(flipped)) {
                commit(flipped);
            }
        }
    }, [readonly, disabled, period, text, showSeconds, use12Hours, isInRange, commit]);

    /** Select a picker column cell: hours / minutes / seconds / AM-PM. */
    const onCellSelect = useCallback((column: PickerColumn, cellValue: number | TimePeriod) => {
        if (readonly || disabled) {
            return;
        }

        // No committed value yet: a period cell only remembers the period for the next selection
        if (isNullish(currentValue)) {
            if (column === "period") {
                if (typeof cellValue === "string") {
                    setPeriod(cellValue);
                }

                return;
            }

            const candidate = buildCellCandidate(
                column, cellValue, { hours: 0, minutes: 0, seconds: 0 }, period, use12Hours, showSeconds,
            );

            if (isNotNullish(candidate) && isInRange(candidate)) {
                commit(candidate);
            }

            return;
        }

        const candidate = buildCellCandidate(
            column, cellValue, currentValue, to12h(currentValue.hours).period, use12Hours, showSeconds,
        );

        if (isNullish(candidate) || !isInRange(candidate)) {
            return;
        }

        if (column === "period" && typeof cellValue === "string") {
            setPeriod(cellValue);
        }

        commit(candidate);
    }, [readonly, disabled, currentValue, period, use12Hours, showSeconds, isInRange, commit]);

    /** Open/close the picker popover (guarded against readonly/disabled). */
    const onPickerToggle = useCallback((next: boolean) => {
        if (readonly || disabled) {
            return;
        }

        setPickerVisible(next);
    }, [readonly, disabled]);

    const onPickerKeyDown = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Escape") {
            setPickerVisible(false);
        }

        onKeyDown?.(event);
    }, [onKeyDown]);

    const onClear = useCallback(() => {
        setText("");
        setPeriod("AM");
        commit(undefined);
    }, [commit]);

    const elClassName = useMemo(() => getClassName([
        className,
        sizeClassName,
        getStyleClassName(style, validationState),
        rounded === true ? "is-rounded" : "",
        "input",
        variant === "picker" ? "bbr-time-picker__picker-input" : "bbr-time-picker__input",
    ]), [className, sizeClassName, style, validationState, rounded, variant]);

    const showClear = clearable && isNotNullish(currentValue) && !disabled && !loading;
    const hasAddons = isNotNullish(addonLeft) || isNotNullish(addonRight);

    const inputContainerClassName = getClassName([
        "control",
        "bbr-time-picker__control",
        loading === true ? "is-loading" : "",
        showClear ? "has-icons-right" : "",
        use12Hours && variant === "input" ? "has-period" : "",
        hasAddons ? "is-expanded" : "",
    ]);

    const dataAttributes = mapDataAttributes(data);

    /** Period shown in the picker: derived from the committed value, or the remembered one. */
    const displayPeriod: TimePeriod = isNotNullish(currentValue)
        ? to12h(currentValue.hours).period
        : period;

    /** Read-only text of the picker trigger. */
    const pickerValue = formatMaskedValue(currentValue, showSeconds, use12Hours);
    const pickerDisplayValue = pickerValue === ""
        ? ""
        : use12Hours ? `${pickerValue} ${displayPeriod}` : pickerValue;

    /** Check if selecting a cell would produce a value outside the min/max bounds. */
    const isCellDisabled = (column: PickerColumn, cellValue: number | TimePeriod): boolean => {
        const base = currentValue ?? { hours: 0, minutes: 0, seconds: 0 };
        const candidate = buildCellCandidate(column, cellValue, base, displayPeriod, use12Hours, showSeconds);

        return isNotNullish(candidate) && !isInRange(candidate);
    };

    /** Check if the cell matches the committed value. */
    const isCellActive = (column: PickerColumn, cellValue: number | TimePeriod): boolean => {
        if (column === "period") {
            return displayPeriod === cellValue;
        }

        if (isNullish(currentValue)) {
            return false;
        }

        switch (column) {
            case "hours":
                return (use12Hours ? to12h(currentValue.hours).hour12 : currentValue.hours) === cellValue;
            case "minutes":
                return currentValue.minutes === cellValue;
            case "seconds":
                return (currentValue.seconds ?? 0) === cellValue;
            default:
                return false;
        }
    };

    /** Seconds column, shown only when enabled. */
    const secondsColumns: ReadonlyArray<PickerColumnConfig> = showSeconds
        ? [{ column: "seconds", cells: MINUTES_SECONDS, label: "Seconds" }]
        : [];

    /** AM/PM column, shown only in the 12-hour mode. */
    const periodColumns: ReadonlyArray<PickerColumnConfig> = use12Hours
        ? [{ column: "period", cells: PERIODS, label: "AM or PM" }]
        : [];

    /** Picker columns for the current configuration. */
    const pickerColumns: ReadonlyArray<PickerColumnConfig> = [
        { column: "hours", cells: use12Hours ? HOURS_12 : HOURS_24, label: "Hours" },
        { column: "minutes", cells: MINUTES_SECONDS, label: "Minutes" },
        ...secondsColumns,
        ...periodColumns,
    ];

    const clearButton = showClear
        ? (
            <span
                onClick={onClear}
                title={clearTitle}
                className={getClassName(["icon", "is-right", sizeClassName, "bbr-time-picker__clear"])}
            >
                <Icon
                    name="x-lg"
                    size={size}
                />
            </span>
        )
        : null;

    const control = variant === "picker"
        ? (
            <Popover

                visible={pickerVisible}
                onToggle={onPickerToggle}
                position={PopoverPosition.Bottom}
                className={hasAddons ? "control is-expanded" : undefined}
            >
                <Popover.Trigger>
                    <div
                        {...dataAttributes}

                        className={inputContainerClassName}
                    >
                        <input

                            readOnly
                            id={name}
                            type="text"
                            name={name}
                            title={title}
                            onBlur={onBlur}
                            onKeyUp={onKeyUp}
                            disabled={disabled}
                            autoFocus={autoFocus}
                            className={elClassName}
                            value={pickerDisplayValue}
                            onKeyDown={onPickerKeyDown}
                            placeholder={placeholder ?? getMaskPlaceholder(showSeconds, use12Hours)}
                        />
                        {clearButton}
                    </div>
                </Popover.Trigger>
                <Popover.Content className="bbr-time-picker__popover">
                    <div
                        ref={columnsRef}
                        className="bbr-time-picker__columns"
                    >
                        {pickerColumns.map(({ column, cells, label }) => (
                            <div
                                key={column}

                                role="listbox"
                                aria-label={label}
                                className="bbr-time-picker__column"
                            >
                                {cells.map(cellValue => {
                                    const active = isCellActive(column, cellValue);
                                    const cellDisabled = isCellDisabled(column, cellValue);
                                    const cellClassName = getClassName([
                                        "bbr-time-picker__cell",
                                        active ? "is-active" : "",
                                    ]);

                                    return (
                                        <button
                                            key={String(cellValue)}

                                            type="button"
                                            role="option"
                                            aria-selected={active}
                                            disabled={cellDisabled}
                                            className={cellClassName}
                                            tabIndex={cellDisabled ? -1 : 0}
                                            onClick={() => onCellSelect(column, cellValue)}
                                        >
                                            {typeof cellValue === "number" ? pad2(cellValue) : cellValue}
                                        </button>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </Popover.Content>
            </Popover>
        )
        : (
            <div
                {...dataAttributes}

                className={inputContainerClassName}
            >
                <input

                    id={name}
                    type="text"
                    name={name}
                    value={text}
                    title={title}
                    ref={inputRef}
                    onKeyUp={onKeyUp}
                    autoComplete="off"
                    readOnly={readonly}
                    disabled={disabled}
                    inputMode="numeric"
                    onBlur={onInputBlur}
                    autoFocus={autoFocus}
                    maxLength={maskLength}
                    className={elClassName}
                    onChange={onInputChange}
                    onKeyDown={onInputKeyDown}
                    placeholder={placeholder ?? getMaskPlaceholder(showSeconds, use12Hours)}
                />
                {use12Hours
                    ? (
                        <button
                            type="button"

                            title="Toggle AM/PM"
                            onClick={onPeriodToggle}
                            disabled={disabled || readonly}
                            aria-label="Toggle AM/PM period"
                            className={getClassName(["bbr-time-picker__period", sizeClassName])}
                        >
                            {period}
                        </button>
                    )
                    : null}
                {clearButton}
            </div>
        );

    return (
        <ComponentWithLabel
            id={name}
            size={size}
            label={label}
        >
            {renderControlWithAddons(
                control,
                addonLeft,
                addonRight
            )}
            <InternalHint
                hint={hint}
                validationState={validationState}
            />
        </ComponentWithLabel>
    );
};

export default TimePicker;
