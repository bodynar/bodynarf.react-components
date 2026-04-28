import { FC, useCallback, useEffect, useMemo, useState } from "react";

import { getClassName, isNotNullish, isNullish, isSameDay, startOfDay, getToday } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import { getElementColorClassName, getSizeClassName, mapDataAttributes } from "@bbr/utils";

import "./style.scss";

import { CalendarProps, CalendarView } from "..";

import CalendarHeader from "../components/calendarHeader";
import CalendarDaysGrid from "../components/calendarDaysGrid";
import CalendarMonthPicker from "../components/calendarMonthPicker";
import CalendarYearPicker from "../components/calendarYearPicker";
import CalendarFooter from "../components/calendarFooter";

const YEARS_PER_PAGE = 12;

/** Calendar panel component */
const Calendar: FC<CalendarProps> = ({
    value,
    onChange,
    style,
    size = ElementSize.Normal,
    minDate,
    maxDate,
    todayButtonConfig,
    clearButtonConfig,
    initialView,
    locale = "en-US",
    rangeStart,
    rangeEnd,
    hoverDate,
    onDayHover,
    prevLabel = "Previous",
    nextLabel = "Next",

    className, title, data,
}) => {
    const [displayDate, setDisplayDate] = useState<Date>(() => {
        const base = value ?? getToday();
        return new Date(base.getFullYear(), base.getMonth(), 1);
    });

    const [view, setView] = useState<CalendarView>(() => {
        if (initialView === "year")
            return "year-picker";
        if (initialView === "month")
            return "month-picker";

        return "days";
    });

    const [yearRangeStart, setYearRangeStart] = useState<number>(() => {
        const baseYear = value?.getFullYear() ?? getToday().getFullYear();
        return baseYear - (baseYear % YEARS_PER_PAGE);
    });

    const today = useMemo(() => getToday(), []);

    const isPrevDisabled = useMemo(() => {
        if (isNullish(minDate)) {
            return false;
        }

        const min = startOfDay(minDate);

        if (view === "days") {
            // last day of the previous month
            const lastDayOfPrevMonth = new Date(displayDate.getFullYear(), displayDate.getMonth(), 0);
            return lastDayOfPrevMonth < min;
        }

        if (view === "month-picker") {
            return (displayDate.getFullYear() - 1) < min.getFullYear();
        }

        // year-picker: prev range ends at yearRangeStart - 1
        return (yearRangeStart - 1) < min.getFullYear();
    }, [view, displayDate, yearRangeStart, minDate]);

    const isNextDisabled = useMemo(() => {
        if (isNullish(maxDate)) {
            return false;
        }

        const max = startOfDay(maxDate);

        if (view === "days") {
            // first day of the next month
            const firstDayOfNextMonth = new Date(displayDate.getFullYear(), displayDate.getMonth() + 1, 1);
            return firstDayOfNextMonth > max;
        }

        if (view === "month-picker") {
            return (displayDate.getFullYear() + 1) > max.getFullYear();
        }

        // year-picker: next range starts at yearRangeStart + YEARS_PER_PAGE
        return (yearRangeStart + YEARS_PER_PAGE) > max.getFullYear();
    }, [view, displayDate, yearRangeStart, maxDate]);

    const todayInRange = useMemo(() => {
        const min = isNotNullish(minDate) ? startOfDay(minDate) : null;
        const max = isNotNullish(maxDate) ? startOfDay(maxDate) : null;

        return (min === null || today >= min) && (max === null || today <= max);
    }, [today, minDate, maxDate]);

    const handlePrev = useCallback(() => {
        if (view === "days") {
            setDisplayDate(d => new Date(d.getFullYear(), d.getMonth() - 1, 1));
        } else if (view === "month-picker") {
            setDisplayDate(d => new Date(d.getFullYear() - 1, d.getMonth(), 1));
        } else {
            setYearRangeStart(y => y - YEARS_PER_PAGE);
        }
    }, [view]);

    const handleNext = useCallback(() => {
        if (view === "days") {
            setDisplayDate(d => new Date(d.getFullYear(), d.getMonth() + 1, 1));
        } else if (view === "month-picker") {
            setDisplayDate(d => new Date(d.getFullYear() + 1, d.getMonth(), 1));
        } else {
            setYearRangeStart(y => y + YEARS_PER_PAGE);
        }
    }, [view]);

    const handleMonthClick = useCallback(() => {
        setView("month-picker");
    }, []);

    const handleYearClick = useCallback(() => {
        setYearRangeStart(() => {
            const curYear = displayDate.getFullYear();
            return curYear - (curYear % YEARS_PER_PAGE);
        });

        setView("year-picker");
    }, [displayDate]);

    const handleMonthSelect = useCallback((month: number) => {
        setDisplayDate(d => new Date(d.getFullYear(), month, 1));
        setView("days");
    }, []);

    const handleYearSelect = useCallback((year: number) => {
        setDisplayDate(d => new Date(year, d.getMonth(), 1));
        setView("month-picker");
    }, []);

    const handleDayClick = useCallback((date: Date) => {
        if (isNotNullish(value) && isSameDay(date, value)) {
            return;
        }

        onChange?.(date);
    }, [onChange, value]);

    const handleTodayClick = useCallback(() => {
        const todayDate = getToday();
        onChange?.(todayDate);

        setDisplayDate(new Date(todayDate.getFullYear(), todayDate.getMonth(), 1));
        setView("days");
    }, [onChange]);

    const handleClearClick = useCallback(() => {
        onChange?.(undefined);
    }, [onChange]);

    useEffect(() => {
        if (isNullish(value)) {
            return;
        }

        const min = isNotNullish(minDate) ? startOfDay(minDate) : null;
        const max = isNotNullish(maxDate) ? startOfDay(maxDate) : null;

        if ((min !== null && value < min) || (max !== null && value > max)) {
            console.error(
                `[Calendar] Pre-selected value ${value.toISOString()} is outside the allowed range ` +
                `[${min?.toISOString() ?? "\u2212\u221e"}, ${max?.toISOString() ?? "+\u221e"}]. It will be cleared.`
            );

            onChange?.(undefined);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const effectiveTodayConfig = todayInRange ? todayButtonConfig : undefined;

    const calendarClassName = getClassName([
        "bbr-calendar",
        className,
        getSizeClassName(size, ElementSize.Normal),
        getElementColorClassName(style),
    ]);

    const dataAttributes = isNullish(data) ? undefined : mapDataAttributes(data);

    return (
        <div
            {...dataAttributes}

            title={title}
            className={calendarClassName}
        >
            <CalendarHeader
                view={view}
                locale={locale}
                onPrev={handlePrev}
                onNext={handleNext}
                prevLabel={prevLabel}
                nextLabel={nextLabel}
                displayDate={displayDate}
                onYearClick={handleYearClick}
                onMonthClick={handleMonthClick}
                yearRangeStart={yearRangeStart}
                isPrevDisabled={isPrevDisabled}
                isNextDisabled={isNextDisabled}
            />

            {view === "days" && (
                <CalendarDaysGrid
                    locale={locale}
                    minDate={minDate}
                    maxDate={maxDate}
                    rangeEnd={rangeEnd}
                    selectedDate={value}
                    hoverDate={hoverDate}
                    onDayHover={onDayHover}
                    rangeStart={rangeStart}
                    displayDate={displayDate}
                    onDayClick={handleDayClick}
                />
            )}

            {view === "month-picker" && (
                <CalendarMonthPicker
                    locale={locale}
                    minDate={minDate}
                    maxDate={maxDate}
                    selectedDate={value}
                    displayDate={displayDate}
                    onMonthSelect={handleMonthSelect}
                />
            )}

            {view === "year-picker" && (
                <CalendarYearPicker
                    minDate={minDate}
                    maxDate={maxDate}
                    yearRangeStart={yearRangeStart}
                    onYearSelect={handleYearSelect}
                    currentYear={today.getFullYear()}
                    selectedYear={value?.getFullYear()}
                />
            )}

            <CalendarFooter
                size={size}
                hasValue={isNotNullish(value)}
                onTodayClick={handleTodayClick}
                onClearClick={handleClearClick}
                clearButtonConfig={clearButtonConfig}
                todayButtonConfig={effectiveTodayConfig}
                isTodaySelected={isNotNullish(value) && isSameDay(value, today)}
            />
        </div>
    );
};

export default Calendar;
