import { isNullOrUndefined } from '@bodynarf/utils';

import './dropdown.scss';

import { BaseElementProps } from '../types';
import { InputLabel, ValidationState } from '../primitives';

import { SelectableItem } from './types';
import DropdownWithLabel from './components/withLabel';
import DropdownCompact from './components/compact';

export type DropdownProps = BaseElementProps & {
    /** Items which can be selected */
    items: Array<SelectableItem>;

    /**
     * Selected value.
     * Must be stored outside
    */
    value?: SelectableItem;

    /**
     * Action to update selected value, which stored outside
    */
    onSelect: (item?: SelectableItem) => void;

    /** 
     * Caption.
     * Appears only no element selected
    */
    caption: string;

    /** Hide dropdown list when its opened and user click outside */
    hideOnOuterClick: boolean;

    /** Can user deselect */
    deselectable?: boolean;

    /** Custom dropdown list max-height property */
    listMaxHeight?: string;

    /**
     * Should dropdown be compact
     * Will have width by maximum current selection item width
     */
    compact?: boolean;

    /** Input element placeholder */
    placeholder: string;

    /** Label configuration */
    label?: InputLabel;

    /** Current validation state */
    validationState?: ValidationState;
}

/** Dropdown component */
const Dropdown = (props: DropdownProps): JSX.Element => {
    if (!isNullOrUndefined(props.label)) {
        return <DropdownWithLabel {...props} />;
    } else {
        return <DropdownCompact {...props} />;
    }
};

export default Dropdown;

