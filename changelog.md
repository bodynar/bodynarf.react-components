# Change log
All changes will be published here in reverse chronological order

## v1.15.0
- **Calendar** *(new)*
  - Standalone date-picker panel component with day-grid, month-picker and year-picker views.
  - `value` / `onChange` for controlled usage; `initialView` (`"month"` | `"year"`) to open in a non-default view.
  - `locale` (BCP 47 tag, default `"en-US"`) localises month names and weekday labels via `Intl.DateTimeFormat`.
  - `style` (`ElementColor`) tints the accent colour and panel border; `size` (`ElementSize`) scales font and minimum width.
  - `minDate` / `maxDate` restrict the selectable range — days outside the range are rendered as disabled.
  - Navigation arrows are disabled when scrolling further would exceed `minDate` (prev) or `maxDate` (next); applies in all three views.
  - `todayButtonConfig?: CalendarFooterButtonConfig` — optional footer Today button (full `ButtonProps` passthrough minus `onClick`, `static`, `size`, `disabled`). Disabled automatically when the selected date is already today; hidden entirely when today falls outside `minDate` / `maxDate`.
  - `clearButtonConfig?: CalendarFooterButtonConfig` — optional footer Clear button; only visible when a date is currently selected.
  - Footer layout: one button renders centered at full width; two buttons split the footer evenly.
  - Pre-selected `value` is validated on mount — if it falls outside `minDate` / `maxDate` it is cleared via `onChange(undefined)` and a `console.error` is logged.

- **Card** *(new)*
  - Compound component with `Card.Header`, `Card.Body` and `Card.Footer` sub-components.
  - All three sections are optional and can be used in any combination.
  - `Card.Header` extends `ClickableElement` — accepts `onClick`, which automatically applies `is-clickable` class.
  - All sub-components and the root `Card` accept `className`, `title` and `data` props from `BaseElementProps`.

- **Toast** *(new)*
  - Inline or fixed-position notification component based on Bulma `notification`.
  - Supports all `ElementColor` variants via `color` prop.
  - Optional close button (shown by default) with `onClose` callback.
  - `fixed` prop renders the toast in a fixed overlay at the top of the viewport.
  - `position` prop (`ElementFloatPosition.Left` / `Right`) controls horizontal placement in fixed mode.
  - `autoClose` prop (ms) automatically calls `onClose` after the given delay.

- **Tooltip** *(new)*
  - Hover/click-triggered popup with configurable position, animation and close behaviour.
  - Compound component: use `<Tooltip.Hint>` for popup content and `<Tooltip.Target>` for the anchor element.
  - `position` (`TooltipPosition`): `Top` (default), `Bottom`, `Left`, `Right`.
  - `animation` (`TooltipAnimation`): `None`, `Fade` (default), `Slide`.
  - `closeOn` (`TooltipCloseOn`): `MouseLeave` (default), `OutsideClick`, `Manual`.
  - `openDelay` (ms) — delay before showing the tooltip, default `0`.
  - `lifetime` (ms) — auto-hide after given duration.
  - `visible` — controlled-mode prop; when provided, open/close events are ignored.
  - Hovering over the popup itself no longer dismisses it — a transparent bridge element fills the gap, and `onMouseLeave` uses an 80 ms debounce.
  - Tooltip content is rendered before the trigger in the DOM, preventing Bulma's `:not(:last-child)` margin on trigger buttons inside `.buttons`.
  - Slide animation is position-aware: each placement uses its own directional offset.
  - Dismiss animation added — `transition` drives both enter and exit opacity/transform.

- **SidePanel** *(new)*
  - Sliding side panel with compound sub-components `SidePanel.Title` and `SidePanel.Body`.
  - `SidePanel.Title` renders a header with an optional built-in close (×) button (`showCloseButton`, default `true`).
  - `SidePanel.Body` renders a scrollable content area.
  - `position` (`ElementFloatPosition`): `Left` (default), `Right` — controls which side the panel slides in from.
  - `size` (`SidePanelSize`): `Small` (15vw), `Normal` (20vw, default), `Medium` (35vw), `Large` (50vw).
  - `customWidth` (number) — arbitrary panel width in vw units; overrides `size` when provided.
  - `closeOnOverlayClick` (default `true`) — closes the panel when the backdrop is clicked.
  - Panel also closes on Escape key press.
  - Backdrop fades in/out via CSS `opacity` transition; panel slides via `transform: translateX` transition.
  - `box-shadow` appears only after the panel is fully open (animates together with the slide).

- **ModalWrapper** *(extended)*
  - Added compound component pattern: `ModalWrapper.Header`, `ModalWrapper.Body`, `ModalWrapper.Footer`.
  - Only `ModalWrapper.Body` is required; `ModalWrapper.Header` and `ModalWrapper.Footer` are optional.
  - When `ModalWrapper.Body` is detected in children, compound mode activates automatically — legacy `title` / `actions` props are ignored. No breaking change.
  - `ModalWrapper.Header` renders a fully customizable `modal-card-head` — add any content, extra buttons, or icons.
  - `ModalWrapper.Footer` renders a `modal-card-foot` with arbitrary content instead of the `actions` button array.
  - Added `showMaximizeButton` prop (default `false`) — renders a maximize / restore icon button (`arrows-angle-expand` / `arrows-angle-contract`) to the left of the close button.
  - Maximize stretches the modal card to `95vw × 95vh`; restore returns it to its original size. Both transitions are animated.
  - `actions` prop is now optional (defaults to empty array); no breaking change.

## v1.14.7
- **Paginator**
  - Added `nextButtonsConfig` prop (`{ previousButtonConfig, nextButtonConfig, style }`) to render Previous/Next navigation as `Button` components with full styling support (`style`, `caption`, `rounded`, `outlined`, `icon`, etc.).
  - Each button is configured independently via `PaginatorDirectionStepButtonConfig` (`Omit<ButtonProps, "onClick" | "disabled" | "size" | "rounded" | "caption">`).
  - Added `style` option in `nextButtonsConfig`: `"aside"` places buttons at outer edges, `"inline"` places them beside page numbers.
  - Added `pageButtonsConfig` prop (`{ default, active }`) to render page number buttons as `Button` components. `default` styles non-active pages, `active` styles the current page.
  - Extracted internal `PaginatorNavButtons` and `PaginatorInternalNavButton` components for rendering the page number list.
  - `showNextButtons` is preserved for backwards compatibility with link-based navigation.

- **ClickableElement**
  - Changed `onClick` type from `ActionFn` (`() => void`) to `(event: MouseEvent<HTMLElement>) => void`. Existing zero-arg handlers remain compatible.

- **BlurableElement**
  - Changed `onBlur` type from `ActionFn` (`() => void`) to `(event: FocusEvent<HTMLElement>) => void`. Existing zero-arg handlers remain compatible.

- **ComplexTable** *(new)*
  - Table component with built-in server-side pagination, search, sorting, and multi-row selection.
  - Designed to be used with the `useComplexTable` hook, which manages paging, search, and sort state and exposes a `tableProps` object to spread directly onto the component. The hook's `loadPage` callback receives `{ offset, limit, search?, sortBy?, sortOrder? }` and returns the new total item count.
  - Multi-row selection is always active when `selectionBarConfig` is provided — no toggle button required.
  - Selection bar supports two layouts: list of buttons (`Button list`, with `actions: ButtonProps[]`) or a split button (`SplitButton`, with `splitButtonConfig: SplitButtonProps`). Both layouts accept `selectedCountPlaceholder` to format the selected count label.
  - Optional `searchConfig` prop enables a toolbar with a search input (`searchPlaceholder`, `noItemsFoundBySearchCaption`, `searchProps`, `containerClassName`).
  - Inner `<Table>` and `<Paginator>` can be further configured via `tableConfig` and `paginatorConfig`.
  - Supports custom row component via `itemComponent`, per-row icon actions via `actions` (`ComplexTableAction`), loading overlay via `loading`, and row click handling via `onRowClick`.

- **Table**
  - Selection checkbox click (`stopPropagation`) now only prevents row click propagation when the click target is inside the checkbox (`.bbr-field`), allowing clicks on the rest of the selection cell to propagate normally.

- **SplitButton**
  - Added `isLoading` prop to display a loading state on the primary button. When active, both the primary button click and the dropdown toggle are disabled (readonly mode).

## v1.14.6
- **SplitButton** *(new)*
  - Added new split-button component with a dropdown of alternative actions.
  - Primary button triggers main action via `onClick`, chevron toggle opens a dropdown list of secondary actions.
  - Supports all `ButtonStyle` variants (Primary, Info, Success, Warning, Danger, Link, etc.).
  - Supports `light`, `outlined`, `rounded`, `disabled`, `size`, `icon` props — consistent with `Button`.
  - Each dropdown action (`SplitButtonAction`) supports `caption`, `icon`, `title`, `disabled`, and its own `onClick`.
  - Actions list is validated at compile-time to contain at least 1 item (non-empty tuple type).
  - Auto-detects available space and opens upward when near the bottom of the viewport.
  - Closes on outside click (configurable via `hideOnOuterClick`).

## v1.14.4
- **Table**
  - Added `ref` support via `forwardRef` for direct access to the underlying `<table>` element.
  - Added multiple row selection feature:
    - `selectable` prop enables a checkbox column for row selection.
    - `selectedRows` prop accepts an array of string keys corresponding to child row `key` props.
    - `onSelectedRowsChange` callback fires when selection changes.
    - Header checkbox supports "select all" with indeterminate state for partial selection.
  - Added `headerCheckBoxConfig` and `rowCheckBoxConfig` props (`Pick<CheckBoxProps, ...>`) for visual customization of selection checkboxes (size, style, rounded, block, etc.).

- **Checkbox**
  - Added `checked` prop for controlled mode (when provided, overrides `defaultValue`).
  - Added `indeterminate` prop for displaying a dash instead of a checkmark (useful for "select all" partial selection).

## v1.14.0
- **ModalWrapper** *(new)*
  - Added new modal window wrapper component based on Bulma modal.
  - Supports `title`, `size`, `className`, `data` props.
  - Action buttons in footer via `actions` prop (array of ButtonProps).
  - Close behavior options: `showCloseButton`, `closeOnBackgroundClick`, `closeOnEscape`.
  - Keyboard support: close on Escape, optional `onEnterPress` handler.

- **Number**
  - Added the `resetToDefaultOnBlur` prop: when enabled, resets the value to `defaultValue` (or `0` if not specified) on focus out if the field is empty.

- **Search**
  - Added optional search icon (magnifying glass) via `showIcon` prop. Icon size matches the input field size.

- **Switch** *(new)*
  - Added new toggle/switch component with Bulma styling.
  - Supports `size`, `style` (color), `label`, `name`, `onValueChange`, `defaultValue`, `className` props.
  - Additional style options: `rounded` (pill shape), `outlined`, `thin`, `rtl` (right-to-left mode).
  - Supports form label mode via `isFormLabel` prop.

- **Slider** *(new)*
  - Added new range/slider component with Bulma styling.
  - Supports `min`, `max`, `step`, `size`, `style` (color), `defaultValue`, `onValueChange`, `className` props.
  - Additional options: `showValue` (tooltip with current value), `showMinMax` (min/max labels), `showProgress` (filled track).
  - Supports vertical mode via `vertical` prop with configurable height.
  - Circle style thumb available via `circle` prop.
  - Added `valuePosition` prop to position the value tooltip below the slider (`"bottom"`) in horizontal mode.
  - Tooltip positioning now adjusts based on thumb size for all sizes (Small, Normal, Medium, Large).
  - Custom value formatting via `valueFormatter` callback.

- **RadioGroup** *(new)*
  - Added new radio group component for single selection from multiple options.
  - Supports `items`, `value`, `onValueChange`, `size`, `style` (color), `name`, `className` props.
  - Additional style options: `horizontal` (row layout), `block` (filled background), `circle`, `withoutBorder`, `hasBackgroundColor`.
  - Each item can be individually disabled.

- **Stepper** *(new)*
  - Added new stepper/progress indicator component for multi-step workflows.
  - Supports `steps`, `currentStep`, `size`, `color`, `className` props.
  - Additional options: `vertical` (vertical layout), `showNumbers` (step numbers vs checkmarks), `showConnectors` (lines between steps), `animated` (connector animations).
  - Clickable steps support via `clickable` and `onStepClick` props for navigating to completed steps.
  - Each step can have a title, description, and optional custom icon.

- **Timeline** *(new)*
  - Added new timeline component for displaying chronological events.
  - Supports `items`, `size`, `color`, `className` props.
  - Layout options: `leftAligned` (default, markers on left) or centered mode with alternating content.
  - Additional options: `showConnectors`, `animated` (fade-in animation), `hollow` (outlined markers).
  - Supports `showTimestampsSeparate` for displaying timestamps on opposite side in centered mode.
  - Each item can have title, content, timestamp, icon, marker, and individual color override.

- **TimePicker** *(new)*
  - Added new time input component for hours/minutes/seconds selection.
  - Supports `defaultValue`, `onValueChange`, `size`, `style`, `name`, `className` props.
  - Time value represented as object with `hours`, `minutes`, and optional `seconds` fields.
  - Additional options: `showSeconds` (enable seconds input), `step` (value increment in seconds), `min`, `max` (time range limits).
  - Supports all standard input features: `rounded`, `loading`, `disabled`, `readonly`, validation states, labels, and hints.

## v1.2.0
- **Accordion**
  - Fixed an issue where the height changed incorrectly when the component’s `size` prop was updated.
  - Fixed an issue where the `onToggle` callback was triggered on the initial render.

- **Anchor**
  - Component is now marked as deprecated. Use the native `<a>` element instead.

- **Breadcrumbs**
  - Fixed an issue with applying the positioning prop.
  - Updated the breadcrumb model (see type definition).

- **Button**
  - Introduced the `style` prop, which replaces the old `type` prop. Typing has been updated to use `enum ButtonStyle`.

- **Dropdown**
  - Made the `placeholder` and `hideOnOuterClick` props optional.
  - Made the `value` prop required, while allowing `undefined`.
  - Fixed visual styles for the disabled state.
  - When the item list is empty or when no items are found in search mode, the dropdown displays its text in *italic* and gray.

- **File**
  - Added missing styles for the disabled state.

- **Icon**
  - When the `onClick` prop is provided, the `is-clickable` CSS class is now added automatically to make the element interactive (see Bulma documentation).
  - Updated CSS class names related to button sizes.

- **Multiselect**
  - Made the `placeholder` and `hideOnOuterClick` props optional.

- **Paginator**
  - Added error handling for the case when `currentPage > count` (see props).
  - Made the `currentPage` prop required since it is used for internal rendering.

- **Search**
  - Fixed an issue where the button did not have rounded corners.

- **Table**
  - Adjusted prop typings and removed the generic parameter to simplify usage.
  - Made the `children` prop required since it represents the main content of the table.

- **All input controls**
  - Updated the `onValueChange` callback signature to support `nullable` values, depending on the component;
  - Updated the `ValidationState`: `messages` property has been made optional.

- **Checkbox**
  - Updated requirements for members of the `label` prop.
  - Fixed a mismatch between the component size and the form label size.

- **Password**
  - Ensured the show/hide password icon scales when the control size changes.
