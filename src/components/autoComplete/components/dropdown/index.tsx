import { FC } from "react";

import { getClassName } from "@bodynarf/utils";

import { AutoCompleteItem } from "../..";

/** Props for the dropdown suggestions list */
type DropdownProps = {
    suggestions: AutoCompleteItem[];
    activeIndex: number;
    noResultsText: string;
    selectItem: (item: AutoCompleteItem) => void;
};

/** Dropdown suggestions list */
const AutoCompleteDropdown: FC<DropdownProps> = ({
    suggestions,
    activeIndex,
    noResultsText,
    selectItem,
}) => (
    <div
        role="listbox"
        className="bbr-autocomplete__dropdown"
    >
        {suggestions.length === 0
            ? (
                <div className="bbr-autocomplete__no-results">
                    {noResultsText}
                </div>
            )
            : suggestions.map((item, idx) => (
                <div
                    key={item.id}

                    role="option"
                    aria-selected={idx === activeIndex}
                    onMouseDown={e => {
                        e.preventDefault();
                        selectItem(item);
                    }}
                    className={getClassName([
                        "bbr-autocomplete__item",
                        idx === activeIndex ? "is-active" : "",
                    ])}
                >
                    {item.label}
                </div>
            ))
        }
    </div>
);

export default AutoCompleteDropdown;
