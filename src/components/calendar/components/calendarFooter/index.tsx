import { FC } from "react";

import { isNotNullish, isNullish } from "@bodynarf/utils";

import Button, { ButtonStyle } from "@bbr/components/button";

import { CalendarProps } from "../..";
import { ElementSize } from "@bbr/types";

/** Props for the CalendarFooter subcomponent */
export type CalendarFooterProps =
    & Pick<CalendarProps, "todayButtonConfig" | "clearButtonConfig" | "size">
    & {
        /** Whether a date is currently selected; gates visibility of the Clear button */
        hasValue: boolean;

        /** Whether the currently selected date is today; disables the Today button when true */
        isTodaySelected: boolean;

        /** Called when the user clicks the Today button */
        onTodayClick: () => void;

        /** Called when the user clicks the Clear button */
        onClearClick: () => void;
    };

/** Calendar footer containing optional Today and Clear action buttons */
const CalendarFooter: FC<CalendarFooterProps> = ({
    todayButtonConfig, onTodayClick,
    clearButtonConfig, onClearClick,
    hasValue, isTodaySelected, size,
}) => {
    const showClear = isNotNullish(clearButtonConfig) && hasValue;

    if (isNullish(todayButtonConfig) && !showClear) {
        return null;
    }

    const showToday = isNotNullish(todayButtonConfig) === true;

    const buttonSize = calendarSizeToButtonSizeMap.get(size ?? ElementSize.Normal) ?? ElementSize.Small;

    return (
        <div className="bbr-calendar__footer">
            {showToday
                ? (
                    <Button
                        {...todayButtonConfig}

                        size={buttonSize}
                        onClick={onTodayClick}
                        style={ButtonStyle.White}
                        disabled={isTodaySelected}
                    />
                )
                : null
            }

            {showClear
                ? (
                    <Button
                        {...clearButtonConfig}

                        light
                        size={buttonSize}
                        onClick={onClearClick}
                        style={ButtonStyle.Danger}
                    />
                )
                : null
            }
        </div>
    );
};

export default CalendarFooter;

const calendarSizeToButtonSizeMap: Map<ElementSize, ElementSize> = new Map([
    [ElementSize.Small, ElementSize.Small],
    [ElementSize.Normal, ElementSize.Small],
    [ElementSize.Medium, ElementSize.Normal],
    [ElementSize.Large, ElementSize.Medium],
]);
