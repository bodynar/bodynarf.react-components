import SearchComponent from "@bodynarf/react.components/components/search";

import { emptyFn } from "@bodynarf/utils";
import DemoComponentTitleInfoMessage from "../../../shared/components/title";
import ComponentUseCase from "../../../shared/components/useCase";
import CommonPropsSuppressExampleInfoMessage from "../../../shared/components/commonPropsSuppress";
import ComponentSizeCase from "../../../shared/components/sizeUse";

/** Search component demo */
function Search() {
    return (
        <section>
            <DemoComponentTitleInfoMessage name="Search" />
            <ComponentUseCase
                caption="Default"
                code={`<Search caption="Default search" onSearch={onSearchHandler} searchType="byButton" />`}
                description="Default search props is caption, search handler and type"
                component={<SearchComponent caption="Default search" onSearch={emptyFn} searchType="byButton" />}
            />
            <CommonPropsSuppressExampleInfoMessage />
            <ComponentUseCase
                caption="searchType"
                captionIsCode
                code={`<Search searchType="byButton" />`}
                description={`Type describes way to call search function. It either by special button, either by typing text.
                "By button" will render a button and search handler will be invoked only after click on that button`}
                component={<SearchComponent searchType="byButton" caption="Default search" onSearch={emptyFn} />}
            />
            <ComponentUseCase
                caption="searchType"
                captionIsCode
                code={`<Search searchType="byTyping" />`}
                description={`"By typing" will not render button and will emit search handler after each inserted symbol`}
                component={<SearchComponent searchType="byTyping" caption="Default search" onSearch={emptyFn} />}
            />
            <ComponentUseCase
                caption="defaultValue"
                captionIsCode
                code={`<Search defaultValue="defaultValue" />`}
                description={`Value that would be used as initial value`}
                component={<SearchComponent defaultValue="defaultValue" caption="Default search" onSearch={emptyFn} searchType="byButton" />}
            />
            <ComponentUseCase
                caption="rounded"
                captionIsCode
                code={`<Search rounded />`}
                description={`Input field will have rounded corners`}
                component={<SearchComponent rounded caption="Default search" onSearch={emptyFn} searchType="byButton" />}
            />
            <ComponentUseCase
                caption="disabled"
                captionIsCode
                code={`<Search disabled />`}
                description={`Input field will be disabled`}
                component={<SearchComponent disabled caption="Default search" onSearch={emptyFn} searchType="byButton" />}
            />
            <ComponentUseCase
                caption="isLoading"
                captionIsCode
                code={`<Search isLoading />`}
                description={`Displays loading spinner in the end of the control`}
                component={<SearchComponent isLoading caption="Default search" onSearch={emptyFn} searchType="byButton" />}
            />
            <ComponentSizeCase
                caption="Sizes"
                codeProvider={id => `<Search size={ElementSize.${id}}/>`}
                description="Component supports all available sizes"
                componentProvider={
                    size =>
                        <SearchComponent size={size} caption="Default search" onSearch={emptyFn} searchType="byButton" />
                }
            />
        </section>
    )
}

export default Search;
