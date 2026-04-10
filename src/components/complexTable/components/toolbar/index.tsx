import { FC, useCallback } from "react";

import { isNotNullish } from "@bodynarf/utils";
import { Search } from "@bbr/components";
import Button, { ButtonStyle } from "@bbr/components/button";

/** Конфигурация кнопки-переключателя */
type ToggleButtonConfig = {
    /** Текст кнопки */
    caption: string;

    /** Обработчик клика */
    onClick: () => void;
};

/** Пропсы компонента `ComplexTableToolbar` */
type ComplexTableToolbarProps = {
    /** Подсказка для поля поиска */
    searchPlaceholder: string;

    /** Конфигурация кнопки переключения множественного выбора */
    toggleButton?: ToggleButtonConfig;

    /** Заблокировать кнопки тулбара */
    disabled?: boolean;

    /** Обработчик поиска */
    onSearch?: (query: string) => void;
};

/** Тулбар комплексной таблицы (кнопка выбора + Search) */
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
