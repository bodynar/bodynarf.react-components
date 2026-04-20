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

- **TreeView** *(new)*
  - Hierarchical tree with expand/collapse, selection, keyboard navigation and checkbox support.
  - `nodes: TreeNode[]` — root-level tree; each node has `id`, `label`, optional `icon` (Bootstrap Icons), `children` and `disabled`.
  - Uncontrolled by default; switches to fully controlled when `expandedIds` + `onToggleExpand` and/or `selectedIds` + `onSelect` are provided.
  - `multiSelect` (default `false`) — allows selecting multiple nodes simultaneously.
  - **Selection modifiers** (requires `multiSelect`):
    - Plain click — toggle node and all its non-disabled descendants.
    - Shift+Click — range from the last anchor to the clicked node (including all descendants); if the clicked node is already selected, every node in the range is toggled instead of set.
    - Space / Enter — keyboard-select the focused node.
  - **Parent ↔ child propagation**: selecting a parent selects all its non-disabled descendants; deselecting propagates the same way. The reverse direction is reflected in the checkbox state (see below).
  - `showCheckboxes` (default `false`) — renders a BBR `CheckBox` next to each label.
  - `checkboxConfig?: TreeViewCheckboxConfig` — visual configuration for the BBR Checkbox (`style`, `rounded`, `size`, `hasBackgroundColor`, `fixBackgroundColor`). When provided, checkboxes are shown automatically.
  - **Aggregate checkbox state** — parent checkbox state is derived from its non-disabled descendants:
    - all selected → checked
    - none selected → unchecked
    - some selected → indeterminate (dash)
  - **Keyboard navigation** (focus the container, then):
    - `↓` / `↑` — move focus to next / previous visible non-disabled node.
    - `→` — expand if collapsed, otherwise move focus to the first child.
    - `←` — collapse if expanded, otherwise move focus to the parent.
    - Space / Enter — select the focused node.
  - `selectionColor` (`ElementColor`) — accent color for the selected-node highlight and keyboard focus ring; all 7 Bulma variants supported via CSS custom properties.
  - Focus ring is hidden when focus moves to a child element (checked via `relatedTarget`).

- **Popover** *(new)*
  - Lightweight floating panel anchored to any trigger element.
  - Slot-based API: `Popover.Trigger` wraps the activator; `Popover.Content` holds arbitrary `ReactNode` content.
  - `position` (`PopoverPosition.Top | Bottom | Left | Right`, default `Bottom`) — placement of the bubble relative to the trigger.
  - Uncontrolled by default (internal open state); switches to fully controlled when `visible` + `onToggle` are provided.
  - Closes on outside click (via `useComponentOutsideClick`); controlled mode delegates close to `onToggle`.

- **DateRangePicker** *(new)*
  - Single-calendar date range picker — first click anchors the start, second click confirms the end.
  - While the end date is being chosen, moving the pointer over the calendar shows a live range-band preview.
  - Selected range is highlighted: endpoints get solid accent circles, intermediate days get a continuous tinted band.
  - `value: DateRange` (`{ start, end }`) + `onChange` — fully controlled.
  - `style` (`ElementColor`, default `Primary`) — accent color applied to the calendar highlight.
  - `size` (`ElementSize`) — forwarded to the inner `Calendar`.
  - `minDate` / `maxDate` — constrain the selectable range.
  - `locale` (BCP 47, default `"en-US"`) — forwarded to month / weekday labels.
  - `labelConfig?: DateRangePickerLabelConfig` — optional overrides for all user-visible strings:
    - `placeholder` (default `"Select range"`) — shown when nothing is selected.
    - `separator` (default `" → "`) — rendered between start and end in the label bar.
    - `pendingSuffix` (default `"…"`) — appended to the start date while the end date is not yet picked.
    - `clearAriaLabel` (default `"Clear range"`) — accessible label for the × clear button.
  - Calendar extended internally: `CalendarDaysGrid` gained `rangeStart`, `rangeEnd`, `hoverDate`, `onDayHover` props; day cells render inside `__day-inner` spans for circle/band separation.

- **Spinner** *(fixed)*
  - Colors were invisible — replaced unresolvable `var(--bulma-*)` CSS variables with hardcoded hex values matching Bulma defaults.
  - Improved rotation visibility — border pattern changed from 2-side (`bottom + left`) to 3-side (`top + right + bottom`) with one transparent side, producing a clear ¾-arc gap.

- **EmptyState** *(fixed)*
  - Colors were not applied — SCSS selector incorrectly checked for `has-text-*` classes; component emits `is-*` classes. Fixed selectors and added hardcoded hex values for each color variant.

- **Stat** *(new)*
  - KPI / statistics display card.
  - `value: string | number` + `label` — primary metric and its description.
  - `icon` — optional Bootstrap Icons name; rendered in a colored badge.
  - `color` (`ElementColor`, default `Primary`) — accent color of the icon badge (hardcoded bg + text per variant; Bulma CSS vars are not used).
  - `trend?: StatTrend` — optional badge with `label` text and `direction` (`Up` / `Down` / `Neutral`); colored green / red / grey automatically.

- **OtpInput** *(new)*
  - One-time password / PIN input rendered as a row of single-character cells.
  - `length` (default `6`) — number of cells.
  - `type` — `"text"` (default) or `"password"`.
  - `numbersOnly` (default `true`) — restricts input to digits; set `false` for alphanumeric.
  - `autoFocus` (default `false`) — focuses the first cell on mount.
  - `disabled` (default `false`) — dims and disables all cells.
  - `size` (`ElementSize`, default `Normal`) — Small / Normal / Medium / Large.
  - `color` (`ElementColor`, default `Default`) — applies colored border to all cells and a matching focus ring. Uses custom `bbr-otp--color-*` BEM modifiers (not Bulma `is-*`) to prevent Bulma's color inheritance from making typed text white.
  - Supports paste, Backspace (delete current then previous), and ← → arrow key navigation between cells.

- **Rating** *(new)*
  - Star-based rating input.
  - `value` (0–`max`), `max` (default `5`), `onChange`.
  - `allowHalf` (default `false`) — enables 0.5-increment selection via the left-half trigger area.
  - `clearable` (default `true`) — clicking the active star resets to 0.
  - `readonly` (default `false`) — disables hover and click; useful for display-only contexts.
  - `size` (`ElementSize`, default `Normal`) — maps to font-size via Bulma icon sizing classes.

- **SegmentedControl** *(new)*
  - Pill-style option selector built on Bulma `buttons has-addons`.
  - `options: SegmentedOption[]` — each option has `value`, `label`, optional `icon` and `disabled`.
  - `value` / `onChange` — fully controlled.
  - `color` (`ElementColor`, default `Primary`) — accent color of the active segment; `Default` maps to `is-dark`.
  - `size` (`ElementSize.Small | Normal | Medium | Large`, default `Normal`).
  - `fullWidth` (default `false`) — stretches to container width, each button takes equal space.
  - `disabled` (default `false`) — disables all options globally.

- **ImageViewer** *(new)*
  - Lightbox-style overlay for single images and galleries.
  - `images: ImageViewerImage[]` — each entry has `src`, optional `alt` and `caption`.
  - `visible` / `onClose` — fully controlled open state.
  - `initialIndex` (default `0`) — which image to show on open.
  - Navigation arrows and ← → keyboard support; arrows are hidden for single-image mode.
  - Closes on Escape, overlay click, or the × button.

- **Menu** *(new)*
  - Vertical navigation sidebar based on Bulma `.menu`.
  - `sections: MenuSectionConfig[]` — each section has an optional `label` and a list of items.
  - `MenuItemConfig`: `id`, `label`, optional `icon` (Bootstrap Icons), `href`, `disabled`.
  - `activeItemId` — controlled highlight; matching item receives `is-active`.
  - `onItemClick(id)` — fires for non-disabled items.
  - Items with `href` render as real `<a>` tags; items without render as `<a href="#">`.
  - Disabled items are dimmed and non-interactive (`pointer-events: none`).

- **Skeleton** *(new)*
  - `Skeleton.Text` — one or more shimmer text-line placeholders; `lines` and `lastLineWidth` props.
  - `Skeleton.Block` — rectangular placeholder with explicit `width` / `height`.
  - `Skeleton.Avatar` — circular or square placeholder in four `ElementSize` values.
  - `Skeleton.Button` — button-shaped placeholder; size-based or explicit `width`.
  - Sub-components split into individual files under `components/skeletonText|Block|Avatar|Button/`.

- **Notification** *(new)*
  - `NotificationContainer.Provider` — wraps the app (or a subtree) and owns the notification queue.
  - `NotificationContainer` — fixed-position stack; `position` (`ElementPosition.Left | Right`) and `maxVisible` props.
  - `useNotification()` hook — returns `add`, `remove`, `clear` for programmatic control.
  - `NotificationItem`: `content: ReactNode`, `color`, `autoClose` (ms), `closable` (default `true`).

- **TagGroup** *(new)*
  - Editable list of string tags rendered as Bulma tag pills inside a text-field-style container.
  - `value: string[]` + `onChange` — fully controlled; duplicates are silently ignored.
  - `color` (`ElementColor`, default `Primary`) — tag color applied via `Tag` component.
  - `size` (`ElementSize`, excluding `Small`, default `Normal`) — tag and delete-button size; the × button inherits the same size class so both elements scale together.
  - `placeholder` (default `"Add tag…"`) — shown in the input when the list is empty.
  - `addable` (default `true`) — shows the text input for adding new tags.
  - `removable` (default `true`) — shows the × delete button on each tag.
  - `disabled` (default `false`) — disables the entire component; input and all × buttons become inert.
  - `confirmKeys` (default `["Enter", ","]`) — keys that commit the current input as a new tag. `Backspace` on empty input removes the last tag.
  - `maxTags` — optional upper limit; the input is hidden once the limit is reached.
  - Tags are rendered using the `Tag` component; `Tag` gained an `onRemove` prop that renders a sized delete button via `has-addons`.

- **Tag** *(updated)*
  - Added `onRemove?: () => void` — when provided, the component wraps itself in a `<div class="tags has-addons">` and appends an `is-delete` span. The delete span receives the same size class as the tag so they always scale together.

- **ContextMenu** *(new)*
  - Right-click context menu that attaches to any `children` element.
  - `items: ContextMenuItem[]` — menu entries; each item has `key`, optional `label`, `icon` (Bootstrap Icons), `disabled` and `onClick`. An item with no `label` renders as a horizontal divider.
  - `disabled` (default `false`) — suppresses the custom menu entirely when `true`.
  - Rendered via `createPortal` directly into `<body>` — fully isolated from the trigger's DOM tree; parent CSS selectors (e.g. `.notification:not(:last-child)`) never affect the menu.
  - Auto-flip: after opening, the menu measures its own dimensions and flips upward and/or leftward if it would overflow the viewport.
  - Closes on outside click, `Escape` key press, or any scroll event (captured in the capture phase, so nested scrollable containers are also handled).

- **ConfirmDialog** *(new)*
  - Focused confirmation modal built on Bulma `modal-card`.
  - `visible` — controls whether the dialog is rendered.
  - `title` (default `"Are you sure?"`) — heading text.
  - `message?: ReactNode` — optional body; accepts a plain string or arbitrary React content.
  - `confirmLabel` / `cancelLabel` (defaults `"Confirm"` / `"Cancel"`) — button labels.
  - `confirmColor` (`ElementColor`, default `Danger`) — colour of the confirm button; mapped to `ButtonStyle` via an explicit `Map` (no type casts).
  - `icon` (default `"exclamation-triangle"`) — Bootstrap Icons name shown in the header.
  - `isLoading` (default `false`) — disables both buttons and shows a spinner on confirm; intended for async `onConfirm` handlers.
  - `cancellable` (default `false`) — when `true`, clicking the backdrop or pressing `Escape` does **not** close the dialog; the user must interact with a button.
  - `onConfirm` / `onCancel` — action callbacks.

- **Carousel** *(new)*
  - Slides carousel with optional auto-play, navigation dots, arrow buttons and loop.
  - `items: CarouselItem[]` — slide definitions; each item has a `key` and arbitrary `children` (`ReactNode`).
  - `effect` (`CarouselEffect`, default `Fade`) — transition effect between slides:
    - `Fade` — active slide fades in/out via CSS opacity animation.
    - `Slide` — track scrolls horizontally; in loop mode uses a clone-pair technique so wrap-around is seamless in both directions.
  - `showArrows` (default `true`) — prev/next chevron buttons; disabled at boundaries when `loop={false}`.
  - `showDots` (default `true`) — clickable dot indicators; both arrows and dots are hidden when only one slide is present.
  - `loop` (default `true`) — wraps around from last to first and vice-versa.
  - `autoPlay` (default `false`) — auto-advances slides on a timer; paused when `count ≤ 1`.
  - `interval` (ms, default `3000`) — auto-play delay.
  - `activeIndex` + `onChange` — controlled mode; the component becomes fully controlled when `activeIndex` is provided.

- **Alert** *(new)*
  - Styled message banner based on Bulma `message`.
  - `children` — arbitrary React content rendered as the message body.
  - `color` (`ElementColor`, default `Info`) — controls the colour variant of the banner.
  - `header` — optional title rendered in a `.message-header` block above the body.
  - `closable` (default `true`) — shows a close (×) button in the header; requires `header` to be set.
  - `onClose` — callback fired when the close button is clicked.

- **AutoComplete** *(new)*
  - Text input with a dropdown suggestions list.
  - `items` — static suggestion array; filtered locally (case-insensitive substring match).
  - `onSearch` — async or sync search function for server-side lookup; called after debounce.
  - `debounce` (ms, default `300`) — delay before `onSearch` / static filter fires.
  - `maxSuggestions` (default `8`) — caps the number of visible dropdown items.
  - `noResultsText` (default `"No results"`) — message shown when the dropdown is open but nothing matches.
  - `isSearching` — external loading flag; shows Bulma spinner on the control.
  - `clearable` (default `false`) — shows a × button when an item is confirmed selected; clicking it resets the field and calls `onSelect(undefined)`.
  - `onSelect` — called with the selected `AutoCompleteItem` on pick, or `undefined` on clear / invalid blur.
  - `onValueChange` — fires on every raw keystroke (before selection).
  - Keyboard navigation: `↑` / `↓` move highlight, `Enter` confirms, `Escape` closes.
  - **Blur validation**: on focus loss with unconfirmed text — auto-selects on exact match or single prefix match; applies red wavy underline otherwise.
  - Supports `label` (vertical & horizontal), `defaultValue`, `placeholder`, `disabled`, `readonly`, `loading` from `BaseInputElementProps`.

- **Badge** *(new)*
  - Overlay indicator rendered on the top-right corner of any child element.
  - `value` — numeric badge; when `value > max` displays `{max}+`.
  - `max` (default `99`) — overflow threshold.
  - `dot` — small dot variant with no text, useful for "has new" signals; mutually exclusive with `value`.
  - `color` (`ElementColor`, default `Danger`) — badge background colour.
  - `hidden` (default `false`) — hides the badge without unmounting the child.

- **animations.scss** *(new)*
  - Standalone global animation stylesheet (`src/animations.scss`) — import once at the app entry point, then apply animations via `className` on any element.
  - **Infinite** (support pause via `bbr-anim-paused`): `bbr-pulse`, `bbr-spin`, `bbr-spin-reverse`, `bbr-bounce`, `bbr-heartbeat`, `bbr-float`, `bbr-wobble`.
  - **One-time** (re-trigger by changing React `key`): `bbr-shake`, `bbr-fade-in`, `bbr-pop`, `bbr-flip`, `bbr-rubber-band`, `bbr-tada`, `bbr-zoom-in`, `bbr-slide-in-left`, `bbr-slide-in-right`, `bbr-slide-in-down`.
  - `bbr-anim-paused` — pauses any running animation via `animation-play-state: paused`.

- **Avatar** *(new)*
  - Displays a user avatar as a circle, square or rounded square (`shape?: AvatarShape`).
  - `src` + `alt` — renders an `<img>`; on load error automatically falls back to initials or icon.
  - `initials?: string` — text fallback when no image is available (e.g. `"JD"`).
  - `icon?: string` — Bootstrap icon name (without `bi-`) used as fallback when neither image nor initials are provided.
  - `status?: AvatarStatus` — optional status indicator dot: `Online` (green), `Away` (yellow), `Offline` (grey).
  - `shape?: AvatarShape` — `Circle` (default), `Square`, `RoundedSquare` (4 px corners).
  - `size?: ElementSize` — Small (24 px), Normal (40 px, default), Medium (56 px), Large (72 px).
  - `color?: string` — background colour for initials / icon mode; accepts any CSS colour value.
  - `onClick` — from `ClickableElement`; presence automatically adds `is-clickable` cursor.

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
