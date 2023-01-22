import './icon.scss';

import { ElementSize } from '../types';
import { getClassName } from '@bodynarf/utils';

/** Icon component props */
export type IconProps = {
    /**
     * Icon name. Must be without `bi-`
     * @example ["Arrow repeat", "arrow-repeat"]
     * // Icon name to icon class name.
     * // For class name check bootstrap icons website
    */
    name: string;

    /** Additional classname */
    className?: string;

    /** Icon size */
    size?: ElementSize;
}

const sizeToClassMap: Map<ElementSize, string> = new Map([
    ['small', ' app-icon--smal'],
    ['medium', ''],
    ['large', ' app-icon--large']
]);

/**
 * Icon component. Based on bootstrap icons
 */
export default function Icon({ size = 'medium', name, className }: IconProps): JSX.Element {
    const classNames = getClassName([
        "bbr-icon",
        "bi",
        `bi-${name}`,
        sizeToClassMap.has(size) ? sizeToClassMap.get(size) : "",
        className
    ]);

    return (
        <i className={classNames}></i>
    );
}
