/* eslint-disable react/no-multi-comp */
import { FC, useMemo } from "react";

import Icon from "@bbr/components/icon";

import { getMonthNames } from "../../utils";
import { CalendarView } from "../../types";

/** Props for the CalendarHeader subcomponent */
export type CalendarHeaderProps = {
    /** Current display view mode */
    view: CalendarView;

    /** The month/year currently shown in the panel */
    displayDate: Date;

    /** First year of the currently rendered 12-year range (relevant in `year-picker` view only) */
    yearRangeStart: number;

    /** BCP 47 locale tag forwarded to month-name formatting */
    locale: string;

    /** Whether the previous navigation button should be disabled */
    isPrevDisabled?: boolean;

    /** Whether the next navigation button should be disabled */
    isNextDisabled?: boolean;

    /** Called when the user clicks the left (previous) navigation arrow */
    onPrev: () => void;

    /** Called when the user clicks the right (next) navigation arrow */
    onNext: () => void;

    /** Called when the user clicks the month label in day-grid view to open the month picker */
    onMonthClick: () => void;

    /** Called when the user clicks the year label to open the year picker */
    onYearClick: () => void;
};

/** Calendar header: left/right navigation arrows + context-sensitive title */
const CalendarHeader: FC<CalendarHeaderProps> = ({
    view,
    displayDate,
    yearRangeStart,
    locale,
    onPrev,
    onNext,
    onMonthClick,
    onYearClick,
    isPrevDisabled,
    isNextDisabled,
}) => {
    const year = displayDate.getFullYear();
    const month = displayDate.getMonth();

    const monthName = useMemo(
        () => getMonthNames(locale, "long")[month],
        [locale, month]
    );

    return (
        <div className="bbr-calendar__header">
            <button
                type="button"
                onClick={onPrev}
                aria-label="Previous"
                disabled={isPrevDisabled}
                className="bbr-calendar__nav-btn"
            >
                <Icon name="chevron-left" />
            </button>

            {view === "year-picker" && (
                <CalendarTitleYearRange yearRangeStart={yearRangeStart} />
            )}

            {view === "month-picker" && (
                <CalendarTitleYear
                    year={year}
                    onYearClick={onYearClick}
                />
            )}

            {view === "days" && (
                <CalendarTitleMonthYear
                    year={year}
                    monthName={monthName}
                    onYearClick={onYearClick}
                    onMonthClick={onMonthClick}
                />
            )}

            <button
                type="button"
                onClick={onNext}
                aria-label="Next"
                disabled={isNextDisabled}
                className="bbr-calendar__nav-btn"
            >
                <Icon name="chevron-right" />
            </button>
        </div>
    );
};

export default CalendarHeader;

// #region Internal components (not exported from index.ts)

/** Props for the year-range title (year-picker view) */
type YearRangeTitleProps = {
    /** First year of the 12-year range */
    yearRangeStart: number;
};

/** Title showing a year range, e.g. "2024 – 2035". Used in year-picker view */
const CalendarTitleYearRange: FC<YearRangeTitleProps> = ({
    yearRangeStart
}) => (
    <span className="bbr-calendar__title">
        {`${yearRangeStart} \u2013 ${yearRangeStart + 11}`}
    </span>
);

/** Props for the single-year title (month-picker view) */
type YearTitleProps = {
    /** The full year displayed in the header */
    year: number;

    /** Called when the user clicks the year label */
    onYearClick: () => void;
};

/** Title showing a single year, clickable to navigate up to the year picker */
const CalendarTitleYear: FC<YearTitleProps> = ({
    year, onYearClick
}) => (
    <span
        onClick={onYearClick}
        className="bbr-calendar__title bbr-calendar__title--clickable"
    >
        {year}
    </span>
);

/** Props for the month + year title (day-grid view) */
type MonthYearTitleProps = {
    /** Localized full month name */
    monthName: string;

    /** The full year displayed in the header */
    year: number;

    /** Called when the user clicks the month label */
    onMonthClick: () => void;

    /** Called when the user clicks the year label */
    onYearClick: () => void;
};

/** Title showing month and year, each part independently clickable. Used in day-grid view */
const CalendarTitleMonthYear: FC<MonthYearTitleProps> = ({
    monthName, year, onMonthClick, onYearClick
}) => (
    <span className="bbr-calendar__title">
        <span
            onClick={onMonthClick}
            className="bbr-calendar__title-part bbr-calendar__title-part--clickable"
        >
            {monthName}
        </span>
        <span
            onClick={onYearClick}
            className="bbr-calendar__title-part bbr-calendar__title-part--clickable"
        >
            {year}
        </span>
    </span>
);

// #endregion Internal components
