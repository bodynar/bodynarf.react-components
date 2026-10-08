# Components

Full catalog of the components shipped with `@bodynarf/react.components`.
Live demo of every component: https://bodynar.github.io/bodynarf.react-components/

## Inputs

 - **AutoComplete** — text input with a suggestion dropdown (static list or async search with debounce)
 - **Checkbox** — checkbox based on [bulma-checkradio](https://www.npmjs.com/package/bulma-checkradio) *(see installation p.5)*
 - **ColorPicker** — color picking with an optional preview element
 - **DateInput** — masked manual date entry with a calendar popover, configurable format and min/max bounds
 - **DateRangePicker** — calendar-based date range selector with a live hover preview
 - **Multiline** — textarea with fixed/autosized height
 - **Number** — numeric input with step and reset-on-blur
 - **Password** — password input with an optional visibility toggle
 - **RadioCardGroup** *(new in v1.16)* — single selection from card-like options laid out in a grid
 - **RadioGroup** — group of radio buttons, vertical or horizontal
 - **Slider** — range input with value, min/max labels and a progress track
 - **Switch** — toggle switch (rounded, outlined, thin, RTL variants)
 - **Text** — single line text input
 - **TimePicker** — time input: masked typing or picker popover (hours / minutes / seconds, 12h AM/PM)

## Buttons and menus

 - **Button** — standard button with styles, sizes, icons and loading state
 - **ButtonGroup** *(new in v1.16)* — attached buttons sharing one style, horizontal or vertical
 - **SplitButton** — primary action plus a dropdown of alternatives
 - **MenuButton** — icon button opening a dropdown of actions
 - **DropdownMenu** *(new in v1.16)* — popover menu (items, separators, headers) over any trigger
 - **ToggleButton** *(new in v1.16)* — pressable button with an active state
 - **ToggleButtonGroup** *(new in v1.16)* — attached toggle buttons with single (radio) or multiple (checkbox) selection
 - **FloatButton** *(new in v1.16)* — floating action button pinned to a screen corner
 - **ActionBar** *(new in v1.16)* — floating panel with actions for selected items

## Navigation

 - **Breadcrumbs** — navigation chain with separators and optional icons
 - **Paginator** — pagination with page-number windows and configurable prev/next buttons
 - **Tabs** — tabbed content switching (with optional icons)
 - **Stepper** — step indicator, horizontal or vertical; `panel` variant renders attached flag steps
 - **Timeline** — vertical chronological timeline
 - **TableOfContents** *(new in v1.16)* — scrollspy contents list with smooth scrolling
 - **Dropdown** — select-like dropdown based on div elements & css *(requires icon)*

## Overlays and feedback

 - **Modal** (`ModalWrapper`) — modal window with header/body/actions
 - **ConfirmDialog** — confirmation modal with configured buttons
 - **SidePanel** — sliding side panel
 - **Popover** — floating panel anchored to a trigger (compound: `Popover.Trigger` / `Popover.Content`)
 - **Tooltip** — hint on hover (compound: `Tooltip.Hint` slot)
 - **ContextMenu** — context menu invoked by a trigger
 - **Notification** — toast notifications via `NotificationContainer` + `useNotification`
 - **Toast** — lightweight toast messages

## Layout

 - **Card** — Bulma card wrapper
 - **Center** *(new in v1.16)* — absolute centering of content relative to a positioned parent
 - **Stack** / `HStack` / `VStack` *(new in v1.16)* — flexbox container with gap/align/justify/wrap
 - **Accordion** — collapsible panel with the `Accordion.Header` slot
 - **Carousel** — sliding carousel of arbitrary content
 - **Menu** — vertical Bulma menu

## Content display

 - **Icon** — Bootstrap Icons glyph *(see installation p.4)*
 - **Tag** — tag with colors, icons, outlined/light variants and a delete button
 - **TagGroup** — group of tags
 - **Chip** — compact tag with an inner delete button
 - **Badge** — small count/label badge
 - **Alert** — inline message block
 - **Progress** — progress bar with percentage and indeterminate state
 - **Spinner** — loading indicator
 - **Skeleton** — loading placeholder
 - **EmptyState** — placeholder for empty lists/results
 - **Stat** — compact statistic tile
 - **Rating** — star rating (half stars, clearable, readonly)
 - **SegmentedControl** — segmented single-choice control
 - **CircularMeter** *(new in v1.16)* — SVG circular progress meter, optionally interactive
 - **Avatar** — user avatar (image, initials or icon) with a status dot
 - **AvatarGroup** *(new in v1.16)* — overlapping avatar stack with a `+N` overflow popover
 - **ImageViewer** — image with a fullscreen viewer
 - **Calendar** — standalone month calendar with footer buttons

## Data and files

 - **Table** — table with sortable headers and multi-row selection
 - **ComplexTable** — table with built-in pagination, search and sorting
 - **TreeView** — hierarchical tree with checkboxes and keyboard navigation
 - **DndList** *(new in v1.16)* — reorderable list via native drag-and-drop
 - **Search** — search bar with an optional search button
 - **Multiselect** — dropdown with multiple selection (plain or chips result)
 - **File** — file upload with type filtering and a boxed variant
 - **Dropzone** *(new in v1.16)* — drag-and-drop file area with idle/accept/reject slots
 - **OtpInput** — one-time password input

## CSS utilities

 - `animations.scss` — reusable animation classes (`bbr-pulse`, `bbr-spin`, `bbr-bounce`, …) and **BorderBeam** *(new in v1.16)* — animated rotating border ring (`.bbr-border-beam--*`)

## Hooks

 - **useComponentOutsideClick** — invoke a handler on a click outside of a component
 - **useDebounceHandler** — cooldown event handler
 - **useEventListener** — window/document/element listener with automatic cleanup
 - **useInterval** — repeated callback with a fixed delay
 - **useLocalStorage** — state persisted in localStorage
 - **useMount** / **useUnmount** — mount/unmount lifecycle handlers
 - **usePagination** — pagination config bound to the Paginator component
 - **usePrevious** — previous value of a state or prop
 - **useTimeout** — delayed callback
 - **useUpdateEffect** — useEffect that skips the initial render
