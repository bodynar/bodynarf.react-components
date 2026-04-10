import { FC, MouseEvent, useCallback } from "react";

import Icon from "@bbr/components/icon";

import { ComplexTableAction } from "@bbr/components/complexTable/types";

/** Пропсы компонента `ActionIcon` */
type ActionIconProps = {
    /** Идентификатор элемента таблицы */
    itemId: string;

    /** Конфигурация действия */
    action: ComplexTableAction;
};

/** Иконка действия строки таблицы */
const ActionIcon: FC<ActionIconProps> = ({ itemId, action }) => {
    const { onClick, ...iconProps } = action;

    const handleClick = useCallback(
        () => onClick(itemId),
        [onClick, itemId],
    );

    const handleWrapperClick = useCallback(
        (event: MouseEvent) => event.stopPropagation(),
        [],
    );

    return (
        <span onClick={handleWrapperClick}>
            <Icon
                {...iconProps}

                onClick={handleClick}
            />
        </span>
    );
};

export default ActionIcon;
