# Change log
All changes will be published here in reverse chronological order

## v1.3.0
- **Number**
  - Added the `resetToDefaultOnBlur` prop: when enabled, resets the value to `defaultValue` (or `0` if not specified) on focus out if the field is empty.

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
