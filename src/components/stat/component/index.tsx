import { FC } from "react";

import { getClassName, isNotNullish } from "@bodynarf/utils";

import { ElementColor } from "@bbr/types";
import { getElementColorClassName, mapDataAttributes } from "@bbr/utils";
import Icon from "@bbr/components/icon";

import "./style.scss";

import { StatProps, StatTrendDirection } from "../types";

const TREND_ICON: Record<StatTrendDirection, string> = {
    [StatTrendDirection.Up]: "arrow-up-short",
    [StatTrendDirection.Down]: "arrow-down-short",
    [StatTrendDirection.Neutral]: "dash",
};

const TREND_COLOR: Record<StatTrendDirection, string> = {
    [StatTrendDirection.Up]: "has-text-success",
    [StatTrendDirection.Down]: "has-text-danger",
    [StatTrendDirection.Neutral]: "has-text-grey",
};

/** KPI / statistics display card */
const Stat: FC<StatProps> = ({
    value,
    label,
    icon,
    color = ElementColor.Primary,
    trend,

    className, title, data,
}) => {
    const dataAttributes = mapDataAttributes(data);

    const elClassName = getClassName([
        "bbr-stat",
        "box",
        className,
    ]);

    const iconBadgeClassName = getClassName([
        "bbr-stat__icon",
        getElementColorClassName(color),
    ]);

    return (
        <div
            {...dataAttributes}

            title={title}
            className={elClassName}
        >
            <div className="bbr-stat__inner">
                <div className="bbr-stat__body">
                    <p className="bbr-stat__value">
                        {value}
                    </p>
                    <p className="bbr-stat__label">
                        {label}
                    </p>

                    {isNotNullish(trend) && (
                        <span className={getClassName(["bbr-stat__trend", TREND_COLOR[trend.direction]])}>
                            <Icon name={TREND_ICON[trend.direction]} />
                            {trend.label}
                        </span>
                    )}
                </div>

                {isNotNullish(icon) && (
                    <span className={iconBadgeClassName}>
                        <Icon name={icon} />
                    </span>
                )}
            </div>
        </div>
    );
};

export default Stat;
