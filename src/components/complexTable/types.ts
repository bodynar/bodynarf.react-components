import { FC, Ref } from "react";

import { IconProps, PaginatorProps, SortColumn, TableProps, TableSelectionCellProps } from "@bbr/components";
import { ButtonStyle } from "@bbr/components/button";

/** Типизация действия строки таблицы */
export type ComplexTableAction =
    & Omit<IconProps, "onClick">
    & {
        /** Обработчик клика по иконке действия */
        onClick: (itemId: string) => void;
    };

/** Типизация элемента таблицы */
export type ComplexTableItem = {
    /** Уникальный идентификатор элемента */
    id: string;
};

/** Типизация действия тулбара */
export type ToolbarAction = {
    /** Уникальный идентификатор действия */
    id: string;

    /** Текст кнопки */
    caption: string;

    /** Стиль кнопки */
    style?: ButtonStyle;

    /** Обработчик клика */
    onClick: () => void;
};

/** Конфигурация множественного выбора */
export type SelectionConfig = {
    /** Действия над выбранными элементами */
    actions: Array<ToolbarAction>;
};

/* Типизация пропсов компонента `ComplexTable` */
export type ComplexTableProps<TItem extends ComplexTableItem = ComplexTableItem> =
    & Pick<TableProps,
        | "headings"
        | "className"
        | "currentSortColumn"
        | "selectedRows"
    >
    & Pick<PaginatorProps, "position" | "showNextButtons">
    & {
        /** Элементы таблицы */
        items: Array<TItem>;

        /** Общее количество страниц */
        pagesCount: number;

        /** Текущая страница */
        currentPage: number;

        /** Текст для отображения при отсутствии элементов */
        noItemsCaption: string;

        /** Флаг наличия активного поискового запроса (влияет на текст пустой таблицы) */
        hasActiveSearch?: boolean;

        /** Флаг загрузки данных (отображает оверлей поверх таблицы) */
        loading?: boolean;

        /** Конфигурация множественного выбора. Если указана - отображается кнопка выбора и панель действий */
        selection?: SelectionConfig;

        /** Размер пагинатора */
        paginatorSize?: PaginatorProps["size"];

        /** Подсказка для поля поиска */
        searchPlaceholder?: string;

        /** Реф для контейнера таблицы (управление скроллом) */
        containerRef?: Ref<HTMLTableElement>;

        /** Компонент для рендеринга элемента таблицы */
        itemComponent?: FC<ComplexTableItemProps<TItem>>;

        /**
         * Действия для каждой строки таблицы.
         * Отображаются как кнопки в последнем столбце
         */
        actions?: Array<ComplexTableAction>;

        /**
         * Обработчик смены страницы
         * @param page Номер страницы
         */
        onPageChange: (page: number) => void;

        /**
         * Обработчик клика на строку таблицы
         * @param itemId Идентификатор элемента
         */
        onRowClick?: (itemId: string) => void;

        /**
         * Обработчик поиска. Если указан - отображается строка поиска
         * @param query Поисковый запрос
         */
        onSearch?: (query: string) => void;

        /**
         * Обработчик изменения сортировки.
         * Вызывается при клике на сортируемый заголовок столбца.
         * Порядок переключения: по возрастанию → по убыванию → без сортировки
         * @param sortColumn Текущая сортировка или `undefined` при сбросе
         */
        onSortChange?: (sortColumn?: SortColumn) => void;

        /**
         * Обработчик изменения выбранных элементов.
         * Вызывается при изменении набора выбранных строк
         * @param selectedIds Идентификаторы выбранных элементов
         */
        onSelectionChange?: (selectedIds: Array<string>) => void;
    };

/** Типизация пропсов компонента `ComplexTableItem` */
export type ComplexTableItemProps<TItem extends ComplexTableItem = ComplexTableItem> =
    & TableSelectionCellProps
    & Pick<TableProps, "headings">
    & {
        /** Элемент таблицы */
        item: TItem;

        /** Действия для строки */
        actions?: Array<ComplexTableAction>;

        /**
         * Обработчик клика на строку таблицы
         * @param itemId Идентификатор элемента
         */
        onRowClick?: (itemId: string) => void;
    };
