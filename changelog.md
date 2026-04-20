# Change log
All changes will be published here in reverse chronological order

## v1.15.0
### New hooks

- **useDebounce** *(new)* — returns a debounced copy of `value` that only updates after `delay` ms of inactivity.
- **useDebounceHandler** *(new)* — wraps an async handler and returns `[canFire, fire]`; `canFire` is `false` for `debounceTime` seconds after each invocation.
- **usePrevious** *(new)* — stores and returns the previous render's value of any state or prop; returns `undefined` on the first render.
- **useUpdateEffect** *(new)* — identical to `useEffect` but skips execution on the initial render.
- **useTimeout** *(new)* — fires `callback` once after `delay` ms; pass `null` to disable. Auto-clears on unmount or delay change.
- **useInterval** *(new)* — repeats `callback` every `delay` ms; pass `null` to pause without unmounting. Auto-clears on unmount.
- **useEventListener** *(new)* — attaches a typed event listener to `window` (default) or any `HTMLElement` / `Document`; cleans up automatically.
- **useLocalStorage** *(new)* — `useState`-like hook that persists its value to `localStorage`; initialises from storage on first render.
- **useSessionStorage** *(new)* — mirrors `useLocalStorage` API but uses `sessionStorage`; value is cleared when the tab is closed.
- **useClipboard** *(new)* — copies text to the clipboard via the Clipboard API; exposes `{ copy, copied, reset }`. `copied` resets automatically after `resetDelay` ms (default `2000`).
- **useKeyPress** *(new)* — tracks whether a specific `KeyboardEvent.key` is currently held down; returns `boolean`.
- **useFocus** *(new)* — returns `[ref, isFocused]`; attach `ref` to any element to reactively track its focus state.
- **useWindowSize** *(new)* — reactively tracks `{ width, height }` of the browser viewport; updates on every `resize` event.

- **TreeView** *(new)* — Hierarchical tree component for displaying nested data (file explorers, org charts, category trees). Supports expand/collapse, single and multi-selection with parent ↔ child propagation, optional checkboxes with indeterminate state, and full keyboard navigation (arrows, Enter, Space). Uncontrolled by default; becomes controlled when `expandedIds`/`selectedIds` are provided.

- **Popover** *(new)* — Lightweight floating panel anchored to a trigger element; useful for rich tooltips, mini-forms or contextual actions. Compound component: `Popover.Trigger` + `Popover.Content`. Uncontrolled by default; becomes controlled with `visible` + `onToggle`.

- **DateRangePicker** *(new)* — Calendar-based date range selector for booking, reporting and filtering flows. First click sets start, second sets end; live hover preview between dates. Fully controlled.

- **Spinner** *(new)* — Loading indicator for async operations and pending states.

- **EmptyState** *(new)* — Placeholder for empty lists, search results or pages with no data.

- **Stat** *(new)* — KPI / statistics display card for dashboards. Shows a primary metric value with label, optional icon badge and trend indicator (up/down/neutral).

- **OtpInput** *(new)* — One-time password / PIN input rendered as a row of single-character cells. Supports paste, Backspace navigation and arrow keys between cells.

- **Rating** *(new)* — Star-based rating input for reviews and feedback forms. Supports half-star increments and read-only display mode.

- **SegmentedControl** *(new)* — Pill-style option selector (tab bar alternative) for switching between a small set of values. Fully controlled.

- **ImageViewer** *(new)* — Lightbox-style fullscreen overlay for viewing single images and galleries. Supports keyboard navigation and closes on Escape. Fully controlled (`visible` + `onClose`).

- **Menu** *(new)* — Vertical navigation sidebar based on Bulma `.menu`. Supports grouped sections, icons, active item highlight and disabled items.

- **Skeleton** *(new)* — Shimmer placeholders for content loading states. Compound component with sub-variants: `Skeleton.Text`, `Skeleton.Block`, `Skeleton.Avatar`, `Skeleton.Button`.

- **Notification** *(new)* — Toast-like notification system with auto-close and stacking. Requires `NotificationContainer.Provider` as a wrapper around the app/subtree. Programmatic control via `useNotification()` hook (`add`, `remove`, `clear`).

- **TagGroup** *(new)* — Editable tag list for label management, filtering and multi-value inputs. Supports add/remove, duplicate prevention, configurable confirm keys and max tag limit.

- **Tag** *(updated)*
  - Added `onRemove?: () => void` — when provided, the component wraps itself in a `<div class="tags has-addons">` and appends an `is-delete` span. The delete span receives the same size class as the tag so they always scale together.

- **ContextMenu** *(new)* — Right-click context menu for any element. Rendered via portal into `<body>`, auto-flips when near viewport edges. Closes on outside click, Escape or scroll.

- **ConfirmDialog** *(new)* — Focused confirmation modal for destructive or important actions. Supports async confirm with loading state. `cancellable` mode prevents closing via backdrop/Escape — user must click a button.

- **Carousel** *(new)* — Slides carousel for image galleries, banners and onboarding flows. Supports Fade and Slide effects, auto-play, loop, dots and arrow navigation. Uncontrolled by default; becomes controlled with `activeIndex` + `onChange`.

- **Alert** *(new)* — Styled message banner for informational, warning or error notices. Optional closable header.

- **AutoComplete** *(new)* — Text input with dropdown suggestions for search and selection. Supports static items (local filter) and async `onSearch` for server-side lookup. Blur validation auto-selects on exact/prefix match or shows an error underline.

- **Badge** *(new)* — Overlay indicator (counter or dot) rendered on the top-right corner of any child element. Useful for unread counts, "new" markers and notification badges.

- **animations.scss** *(new)*
  - Standalone global animation stylesheet (`src/animations.scss`) — import once at the app entry point, then apply animations via `className` on any element.
  - **Infinite** (support pause via `bbr-anim-paused`): `bbr-pulse`, `bbr-spin`, `bbr-spin-reverse`, `bbr-bounce`, `bbr-heartbeat`, `bbr-float`, `bbr-wobble`.
  - **One-time** (re-trigger by changing React `key`): `bbr-shake`, `bbr-fade-in`, `bbr-pop`, `bbr-flip`, `bbr-rubber-band`, `bbr-tada`, `bbr-zoom-in`, `bbr-slide-in-left`, `bbr-slide-in-right`, `bbr-slide-in-down`.
  - `bbr-anim-paused` — pauses any running animation via `animation-play-state: paused`.

- **Avatar** *(new)* — User avatar component with automatic fallback chain: image → initials → icon. Supports status indicator dot (Online/Away/Offline) and multiple shapes (circle, square, rounded square).

- **Calendar** *(new)* — Standalone date-picker panel with day-grid, month-picker and year-picker views. Supports locale, min/max date range, optional Today and Clear footer buttons. Pre-selected value outside min/max is auto-cleared on mount.

- **Card** *(new)* — Generic content container. Compound component with optional `Card.Header`, `Card.Body` and `Card.Footer` sub-components in any combination.

- **Toast** *(new)* — Inline or fixed-position notification banner. Supports auto-close and color variants. Use `fixed` + `position` for viewport-anchored toasts.

- **Tooltip** *(new)* — Hover/click-triggered popup for contextual hints and help text. Compound component: `Tooltip.Hint` (content) + `Tooltip.Target` (anchor). Supports Fade/Slide animation, configurable close behavior (MouseLeave, OutsideClick, Manual) and controlled mode.

- **SidePanel** *(new)* — Sliding side panel with backdrop overlay for detail views, settings and filters. Compound component: `SidePanel.Title` + `SidePanel.Body`. Closes on Escape and backdrop click.

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
