import { FC, useCallback } from "react";

import { isNotNullish } from "@bodynarf/utils";
import { Search } from "@bbr/components";
import Button, { ButtonStyle } from "@bbr/components/button";

/** Toggle button configuration */
type ToggleButtonConfig = {
    /** Button text */
    caption: string;

    /** Click handler */
    onClick: () => void;
};

/** `ComplexTableToolbar` component props */
type ComplexTableToolbarProps = {
    /** Search field placeholder */
    searchPlaceholder: string;

    /** Multi-selection toggle button configuration */
    toggleButton?: ToggleButtonConfig;

    /** Disable toolbar buttons */
    disabled?: boolean;

    /** Search handler */
    onSearch?: (query: string) => void;
};

/** Complex table toolbar (selection toggle + Search) */
const ComplexTableToolbar: FC<ComplexTableToolbarProps> = ({
    toggleButton,
    searchPlaceholder,
    disabled = false,
    onSearch,
}) => {
    const handleToggleClick = useCallback(
        () => toggleButton?.onClick(),
        [toggleButton],
    );

    const hasContent = isNotNullish(toggleButton) || isNotNullish(onSearch);

    if (!hasContent) {
        return null;
    }

    return (
        <div className="block columns is-vcentered">
            {isNotNullish(toggleButton)
                ? (
                    <div className="column is-flex-grow-0">
                        <Button
                            disabled={disabled}
                            style={ButtonStyle.Link}
                            onClick={handleToggleClick}
                            caption={toggleButton.caption}
                        />
                    </div>
                )
                : <div />
            }
            {isNotNullish(onSearch)
                ? (
                    <div className="column">
                        <Search
                            disabled={disabled}
                            onSearch={onSearch}
                            searchType="byTyping"
                            caption={searchPlaceholder}
                        />
                    </div>
                )
                : null
            }
        </div>
    );
};

export default ComplexTableToolbar;
