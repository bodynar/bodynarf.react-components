# About
Small library with react components based on Bulma CSS framework&nbsp; <a href="https://bulma.io" title="Bulma css framework">
	<img
    	src="https://bulma.io/assets/images/made-with-bulma.png"
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


## Demo
Demo of using all components can be found on https://bodynar.github.io/bodynarf.react-components/ (or open latest build in github repository)

## Components
The full catalog of components, CSS utilities and hooks lives in [COMPONENTS.md](./COMPONENTS.md).

## Description
Mostly all components have root css class with `bbr-` prefix. BBR - Bodynarf Bulma React

	Example of Paginator usage:
	```tsx
		const [{ currentPage, pagesCount, onPageChange }, paginate] = usePagination(items.length, ITEMS_PER_PAGE);
		const pageItems = useMemo(() => paginate(items), [paginate, items]);

		// ...

		<Paginator
			count={pagesCount}
			currentPage={currentPage}
			onPageChange={onPageChange}
			pageButtonsConfig={{
				default: { style: ButtonStyle.Light },
				active: { style: ButtonStyle.Primary },
			}}
			nextButtonsConfig={{
				style: "inline",
				previousButtonConfig: { style: ButtonStyle.Dark, caption: "Back" },
				nextButtonConfig: { style: ButtonStyle.Primary, caption: "Forward" },
			}}
		/>
		```

## Import recommendations

Prefer importing components directly from their folder rather than from the package barrel file.
Direct imports avoid pulling the entire library into the bundle and give bundlers (Vite, webpack, etc.) a clear tree-shaking boundary.

**Bad** — barrel import:
```ts
import { AutoComplete } from "@bodynarf/react.components";
```

**Good** — direct import:
```ts
import AutoComplete from "@bodynarf/react.components/components/primitives/autoComplete";
```

For **types only**, barrel imports are acceptable since they are erased at compile time and have no runtime cost:
```ts
import type { AutoCompleteItem, AutoCompleteProps } from "@bodynarf/react.components";
```
