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

    /** Input element placeholder */
    placeholder: string;

    /**
     * Action to update selected value, which stored outside
    */
    onSelect: (item?: SelectableItem) => void;

    /**
     * Selected value.
     * Must be stored outside
    */
    value?: SelectableItem;

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

    /**
     * Is element disabled
     */
    disabled?: boolean;

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

