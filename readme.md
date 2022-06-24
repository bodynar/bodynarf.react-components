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
### Simple components
Simple react components based on html elements.

 - **Date** - date input;
 - **Multiline** - multiline text input;
 - **Text**- single line text input;
 - **Anchor**
 - **Button**
 - **Icon** - *see p.4 of installation*
 - **Dropdown** - custom dropdown component, based on html div elements & css. Allows to use icon in elements
 - **Checkbox** - (*see p.5 of installation*) Checkbox component based on [bulma-checkradio](https://wikiki.github.io/form/checkradio)

### Complex components
Complex components is set of components built via combining simple components or represent complex logical component
 - **Search** - Search bar with optional button to perform search
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
 
### Hooks

 - **useComponentOutsideClick** - Attach watcher for mouse clicks and emmit event when click was outside of component
 - **usePagination** - Create a pagination config to easily manipulate with Paginator component
