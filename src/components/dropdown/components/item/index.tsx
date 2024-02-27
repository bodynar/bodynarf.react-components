import { SelectableItem } from "@bbr/components/dropdown";
import { getClassName } from "@bodynarf/utils";

/** Dropdown item props */
interface DropdownItemProps {
    /** Item to present in dropdown */
    item: SelectableItem;

    /** Is item selected*/
    selected: boolean;

    /** Item click handler */
    onClick: (event: React.MouseEvent<HTMLLIElement>) => void;
}

/** Single item in dropdown component */
const DropdownItem = ({
    item, selected, onClick
}: DropdownItemProps): JSX.Element => {
    const className = getClassName([
        "bbr-dropdown-item",
        "dropdown-item",
        selected ? "is-active" : "",
    ]);

    return (
        <li
            key={item.id}
            onClick={onClick}
            className={className}
            data-dropdown-item-value={item.value}

            title={item.title}
        >
            {item.displayValue}
        </li>
    );
};

export default DropdownItem;
