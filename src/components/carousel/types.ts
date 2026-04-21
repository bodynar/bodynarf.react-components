import { ReactNode } from "react";

import { BaseElementProps } from "@bbr/types";

/** Transition effect applied when switching between slides */
export enum CarouselEffect {
    /** Fade in/out (default) */
    Fade = "fade",

    /** Slide content horizontally */
    Slide = "slide",
}

/** A single slide in the carousel */
export type CarouselItem = {
    /** Unique key */
    key: string;

    /** Slide content */
    children: ReactNode;
};

/** Carousel component props */
export type CarouselProps = BaseElementProps & {
    /** Slides to display */
    items: CarouselItem[];

    /**
     * Auto-advance slides.
     * @default false
     */
    autoPlay?: boolean;

    /**
     * Auto-play interval in milliseconds.
     * @default 3000
     */
    interval?: number;

    /**
     * Show navigation dots.
     * @default true
     */
    showDots?: boolean;

    /**
     * Show previous/next arrows.
     * @default true
     */
    showArrows?: boolean;

    /**
     * Loop around when reaching first/last slide.
     * @default true
     */
    loop?: boolean;

    /**
     * Controlled active slide index.
     * When set the component becomes fully controlled.
     */
    activeIndex?: number;

    /**
     * Transition effect when switching slides.
     * @default CarouselEffect.Fade
     */
    effect?: CarouselEffect;

    /**
     * Accessible label for the "previous slide" arrow button.
     * @default "Previous slide"
     */
    prevSlideLabel?: string;

    /**
     * Accessible label for the "next slide" arrow button.
     * @default "Next slide"
     */
    nextSlideLabel?: string;

    /**
     * Template for the "go to slide" dot button label.
     * Must contain `{0}` which is replaced with the 1-based slide number.
     * @default "Go to slide {0}"
     */
    goToSlideLabel?: string;

    /** Called when the active slide changes */
    onChange?: (index: number) => void;
};
