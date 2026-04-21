import { FC, useCallback, useEffect, useRef, useState } from "react";

import { getClassName } from "@bodynarf/utils";

import { mapDataAttributes } from "@bbr/utils";
import { useInterval } from "@bbr/hooks";
import { Icon } from "@bbr/components";

import "./style.scss";

import { CarouselProps, CarouselEffect } from "..";

/** Slides carousel with optional auto-play, dots, and arrow navigation */
const Carousel: FC<CarouselProps> = ({
    items,
    autoPlay = false,
    interval = 3000,
    showDots = true,
    showArrows = true,
    loop = true,
    effect = CarouselEffect.Fade,
    activeIndex: controlledIndex,
    onChange,
    prevSlideLabel = "Previous slide",
    nextSlideLabel = "Next slide",
    goToSlideLabel = "Go to slide {0}",

    className, title, data,
}) => {
    const [internalIndex, setInternalIndex] = useState(0);
    const isControlled = controlledIndex !== undefined;
    const currentIndex = isControlled ? controlledIndex! : internalIndex;

    const count = items.length;

    // slide + loop: render [cloneLast, ...items, cloneFirst] and move the track
    // by a visual index that can temporarily land on a clone position.
    // After the transition ends we snap back to the real counterpart without animation.
    const isSlideLoop = effect === CarouselEffect.Slide && loop;

    // visual position in the extended array (1-based for real slides)
    const [trackIndex, setTrackIndex] = useState(currentIndex + 1);
    const [skipTransition, setSkipTransition] = useState(false);
    const prevControlledRef = useRef(controlledIndex);

    const goTo = useCallback((index: number) => {
        const next = loop
            ? ((index % count) + count) % count
            : Math.max(0, Math.min(index, count - 1));

        if (isSlideLoop) {
            setSkipTransition(false);
            setTrackIndex(next + 1);
        }

        if (!isControlled) {
            setInternalIndex(next);
        }

        onChange?.(next);
    }, [loop, count, isControlled, isSlideLoop, onChange]);

    const prev = useCallback(() => {
        if (isSlideLoop) {
            const next = ((currentIndex - 1 + count) % count);
            setSkipTransition(false);
            setTrackIndex(t => t - 1);

            if (!isControlled) {
                setInternalIndex(next);
            }

            onChange?.(next);
        } else {
            goTo(currentIndex - 1);
        }
    }, [isSlideLoop, currentIndex, count, isControlled, goTo, onChange]);

    const next = useCallback(() => {
        if (isSlideLoop) {
            const n = (currentIndex + 1) % count;

            setSkipTransition(false);
            setTrackIndex(t => t + 1);

            if (!isControlled) {
                setInternalIndex(n);
            }

            onChange?.(n);
        } else {
            goTo(currentIndex + 1);
        }
    }, [isSlideLoop, currentIndex, count, isControlled, goTo, onChange]);

    // After slide animation ends, snap from clone position to the real counterpart
    const handleTransitionEnd = useCallback(() => {
        if (!isSlideLoop) {
            return;
        }

        setTrackIndex(t => {
            if (t === 0) {
                setSkipTransition(true);

                return count;
            }

            if (t === count + 1) {
                setSkipTransition(true);

                return 1;
            }

            return t;
        });
    }, [isSlideLoop, count]);

    // Sync controlled index changes into trackIndex
    useEffect(() => {
        if (!isSlideLoop || !isControlled) {
            return;
        }

        const prev = prevControlledRef.current ?? 0;
        const curr = controlledIndex!;
        prevControlledRef.current = curr;

        setSkipTransition(false);

        if (prev === count - 1 && curr === 0) {
            // wrap forward: animate through cloneFirst then snap to real first
            setTrackIndex(count + 1);
        } else if (prev === 0 && curr === count - 1) {
            // wrap backward: animate through cloneLast then snap to real last
            setTrackIndex(0);
        } else {
            setTrackIndex(curr + 1);
        }
    }, [isSlideLoop, isControlled, controlledIndex, count]);

    useInterval(next, autoPlay && count > 1 ? interval : null);

    const dataAttributes = mapDataAttributes(data);

    const elClassName = getClassName([
        "bbr-carousel",
        `bbr-carousel--${effect}`,
        className,
    ]);

    let trackStyle: Record<string, string> | undefined;

    if (effect === CarouselEffect.Slide) {
        const offset = isSlideLoop ? trackIndex : currentIndex;
        trackStyle = {
            transform: `translateX(-${offset * 100}%)`
        };

        if (skipTransition) {
            trackStyle["transition"] = "none";
        }
    }

    if (count === 0) {
        return null;
    }

    // Extended slide list for slide+loop: [cloneLast, ...items, cloneFirst]
    const slideItems = isSlideLoop
        ? [
            { key: `${items[count - 1].key}--clone-end`, children: items[count - 1].children },
            ...items,
            { key: `${items[0].key}--clone-start`, children: items[0].children },
        ]
        : items;

    return (
        <div
            {...dataAttributes}

            title={title}
            className={elClassName}
        >
            {/* Slides */}
            <div
                style={trackStyle}
                className="bbr-carousel__track"
                onTransitionEnd={handleTransitionEnd}
            >
                {slideItems.map((item, i) => (
                    <div
                        key={item.key}

                        aria-hidden={isSlideLoop ? false : i !== currentIndex}
                        className={getClassName([
                            "bbr-carousel__slide",
                            !isSlideLoop && i === currentIndex ? "bbr-carousel__slide--active" : "",
                        ])}
                    >
                        {item.children}
                    </div>
                ))}
            </div>

            {/* Arrows */}
            {showArrows && count > 1 ? (
                <>
                    <button
                        type="button"
                        onClick={prev}
                        aria-label={prevSlideLabel}
                        disabled={!loop && currentIndex === 0}
                        className="bbr-carousel__arrow bbr-carousel__arrow--prev"
                    >
                        <Icon name="chevron-left" />
                    </button>
                    <button
                        type="button"
                        onClick={next}
                        aria-label={nextSlideLabel}
                        disabled={!loop && currentIndex === count - 1}
                        className="bbr-carousel__arrow bbr-carousel__arrow--next"
                    >
                        <Icon name="chevron-right" />
                    </button>
                </>
            ) : null}

            {/* Dots */}
            {showDots && count > 1 ? (
                <div className="bbr-carousel__dots">
                    {items.map((item, i) => (
                        <button
                            key={item.key}

                            type="button"
                            onClick={() => goTo(i)}
                            aria-label={goToSlideLabel.replace("{0}", String(i + 1))}
                            className={getClassName([
                                "bbr-carousel__dot",
                                i === currentIndex ? "bbr-carousel__dot--active" : "",
                            ])}
                        />
                    ))}
                </div>
            ) : null}
        </div>
    );
};

export default Carousel;
