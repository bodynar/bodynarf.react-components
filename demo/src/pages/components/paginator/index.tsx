import { emptyFn } from "@bodynarf/utils";

import PaginatorComponent from "@bodynarf/react.components/components/paginator";

import DemoComponentTitleInfoMessage from "../../../shared/components/title";
import CommonPropsSuppressExampleInfoMessage from "../../../shared/components/commonPropsSuppress";
import ComponentUseCase from "../../../shared/components/useCase";
import ComponentEnumCase from "../../../shared/components/enumSelectionCase";
import ComponentSizeCase from "../../../shared/components/sizeUse";

type ElementPosition = "left" | "center" | "right";

/** Paginator component demo */
function Paginator() {
    const positionLookupValues = [
        ["left", "Left (default)"],
        ["center", "Center"],
        ["right", "Right"],
    ].map((x, i) => ({
        id: `${i}`,
        value: x[0],
        displayValue: x[1],
    }));

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Paginator"
                description="Displays buttons with numbers representing page numbers to walk through paged list"
            />
            <ComponentUseCase
                caption="Default"
                code={`<Paginator count={10} onPageChange={onPageChangeHandler} />`}
                description="Default search props is caption, search handler and type"
                component={<PaginatorComponent count={10} onPageChange={emptyFn} />}
            />
            <CommonPropsSuppressExampleInfoMessage />
            <ComponentUseCase
                captionIsCode
                caption="currentPage"
                code={`<Paginator currentPage={5} />`}
                description="Sets the current selected page (must be changed & tracked outside)"
                component={<PaginatorComponent currentPage={5} count={10} onPageChange={emptyFn} />}
            />
            <ComponentUseCase
                captionIsCode
                caption="showNextButtons"
                code={`<Paginator showNextButtons />`}
                description="Will render additional buttons for navigating 1 page forward or backward"
                component={<PaginatorComponent showNextButtons count={10} onPageChange={emptyFn} />}
            />
            <ComponentEnumCase
                caption="Positions"
                enumNames={["left", "center", "right"]}
                placeholder="Position"
                lookupValues={positionLookupValues}
                description={`Describes float point for page-buttons. Notice placement of "Next" & "Previous" buttons`}
                codeProvider={id => `<Paginator position="${id}" />`}
                componentProvider={
                    (value: ElementPosition) =>
                        <PaginatorComponent position={value} showNextButtons count={10} onPageChange={emptyFn} />
                }
            />
            <ComponentUseCase
                captionIsCode
                caption="rounded"
                code={`<Paginator rounded />`}
                description="Buttons will have rounded corners"
                component={<PaginatorComponent rounded count={10} onPageChange={emptyFn} />}
            />
            <ComponentSizeCase
                caption="Sizes"
                codeProvider={id => `<Paginator size={ElementSize.${id}} />`}
                description="Component supports all available sizes"
                componentProvider={
                    size =>
                        <PaginatorComponent size={size} count={10} onPageChange={emptyFn} />
                }
            />
            <ComponentUseCase
                captionIsCode
                caption="nearPagesCount"
                code={`<Paginator nearPagesCount={1} />`}
                description={<pre>Determine how many buttons will be rendered from each side of current page. <code>3</code> is default</pre>}
                component={<PaginatorComponent nearPagesCount={1} count={100} currentPage={50} onPageChange={emptyFn} />}
            />
        </section>
    );
}

export default Paginator;
