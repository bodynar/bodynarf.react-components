import './icon.scss';

import { ElementSize } from '../types';

/** Icon component props */
export type IconProps = {
    /**
     * Class name for icon.
     * Used to display icon from bootstrap-icons
    */
    className: string;

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
export default function Icon(props: IconProps): JSX.Element {
    const size: ElementSize = props.size || 'medium';

    const className = `app-icon bi bi-${props.className}${sizeToClassMap.get(size)}`;

    return (
        <i className={className}></i>
    );
}
