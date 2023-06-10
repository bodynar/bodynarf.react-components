# About
Small library with react components based on Bulma CSS framework&nbsp; <a href="https://bulma.io" title="Bulma css framework">
	<img
    	src="https://bulma.io/images/made-with-bulma.png"
    	alt="Made with Bulma"
    	width="128"
    	height="24"/>
</a>

## Installation
1. Install [React](https://reactjs.org/)
2. Install [Bulma](https://bulma.io/)
3. Make sure you imported bulma styles in parent container
4. *(Optional)* To use **Icon** component - install [Bootstrap Icons](https://icons.getbootstrap.com/) and make sure you imported these styles in parent container
5. *(Optional)* To use **Checkbox** component - install [bulma-checkradio](https://www.npmjs.com/package/bulma-checkradio) and make sure you imported these styles in parent container

## Description
Mostly all components have root css class with `bbr-` prefix. BBR - Bodynarf Bulma React

### Simple components
Simple react components based on html elements.

#### Controls
 - **Checkbox** - (*see p.5 of installation*) Checkbox component based on [bulma-checkradio](https://wikiki.github.io/form/checkradio)
 - **ColorPicker** - control that allows picking color (with preview option)
 - **Date** - date input
 - **Multiline** - multiline text input
 - **Number** - number input with step
 - **Password** - single line password input (requires icon, see icon component description)
 - **Text** - single line text input;

#### Components
 - **Anchor** - simple anchor (link) component
 - **Button** - button that allows user to interact with system by clicking it _(assume everyone knows what is button)_
 - **Icon** - *see p.4 of installation*
 - **Tag** - small component stands for tag visualization

### Complex components
Complex components is set of components built via combining simple components or represent complex logical component
 - **Accordion** - Collapsible container that can hide some content inside
 - **Dropdown** - custom dropdown component, based on html div elements & css (requires icon, see icon component description)
 - **Paginator** - Pagination elements to navigate through paged list
  
	Example:
	```tsx
		const [{ currentPage, pagesCount, onPageChange }, paginate] = usePagination(items.length, ITEMS_PER_PAGE);
		const pageItems = useMemo(() => paginate(items), [paginate, items]);

		// ...

		<Paginator
			count={pagesCount}
			currentPage={currentPage}
			onPageChange={onPageChange}
		/>
	```
 - **Search** - Search bar with optional button to perform search
 - **Tabs** - Container for multi-content with option of switching displaying content without refreshing\scrolling page
 
### Hooks

 - **useComponentOutsideClick** - Attach watcher for mouse clicks and emit event when click was outside of component
 - **usePagination** - Create a pagination config to easily manipulate with Paginator component
