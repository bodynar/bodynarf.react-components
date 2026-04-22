import { FC, useCallback, useState } from "react";

import { getClassName } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import { getSizeClassName, mapDataAttributes } from "@bbr/utils";

import "./style.scss";

import { RatingProps } from "..";

/** Star rating component */
const Rating: FC<RatingProps> = ({
    value = 0,
    max = 5,
    size = ElementSize.Normal,
    readonly = false,
    clearable = true,
    allowHalf = false,
    onChange,

    className, title, data,
}) => {
    const [hovered, setHovered] = useState<number | undefined>(undefined);

    const handleStarClick = useCallback((starValue: number) => {
        if (readonly || !onChange) { return; }

        if (clearable && starValue === value) {
            onChange(0);
        } else {
            onChange(starValue);
        }
    }, [readonly, clearable, value, onChange]);

    const handleMouseEnter = useCallback((starValue: number) => {
        if (!readonly) {
            setHovered(starValue);
        }
    }, [readonly]);

    const handleMouseLeave = useCallback(() => {
        setHovered(undefined);
    }, []);

    const displayValue = hovered ?? value;

    const dataAttributes = mapDataAttributes(data);

    const wrapperClassName = getClassName([
        "bbr-rating",
        getSizeClassName(size),
        readonly ? "bbr-rating--readonly" : "",
        className,
    ]);

    const stars = Array.from({ length: max }, (_, i) => {
        const starNumber = i + 1;
        const halfNumber = i + 0.5;

        // Determine fill state
        const isFull = displayValue >= starNumber;
        const isHalf = allowHalf && !isFull && displayValue >= halfNumber;

        return (
            <span
                
              key={starNumber}

              onMouseLeave={handleMouseLeave}
              className="bbr-rating__star-wrap"
            
            >
                {allowHalf ? <span
                        
                               className="bbr-rating__half-trigger"
                               onClick={() => handleStarClick(halfNumber)}
                               onMouseEnter={() => handleMouseEnter(halfNumber)}
                             /> : null}
                <i
                    
                  onClick={() => handleStarClick(starNumber)}
                  onMouseEnter={() => handleMouseEnter(starNumber)}
                  className={getClassName([
                        "bbr-rating__star",
                        "bi",
                        isFull
                            ? "bi-star-fill bbr-rating__star--full"
                            : isHalf
                                ? "bi-star-half bbr-rating__star--half"
                                : "bi-star bbr-rating__star--empty",
                    ])}
                
                />
            </span>
        );
    });

    return (
        <div
            
          {...dataAttributes}

          title={title}
          role="slider"
          aria-valuemin={0}
          aria-valuemax={max}
          aria-valuenow={value}
          aria-readonly={readonly}
          className={wrapperClassName}
        
        >
            {stars}
        </div>
    );
};

export default Rating;
