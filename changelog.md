# Change log
All changes will be published here in reverse chronological order

## v1.3.0
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
