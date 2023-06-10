import { useMemo, } from "react";

import { SelectableItem } from "@bodynarf/react.components";
import ButtonComponent, { ButtonType } from "@bodynarf/react.components/components/button";

import DemoComponentTitleInfoMessage from "../../../shared/components/title";
import CommonPropsSuppressExampleInfoMessage from "../../../shared/components/commonPropsSuppress";
import ComponentUseCase from "../../../shared/components/useCase";
import ComponentEnumCase from "../../../shared/components/enumSelectionCase";
import ComponentSizeCase from "../../../shared/components/sizeUse";

/** Button component demo */
function Button() {
    // temporary solution
    const types: Array<ButtonType> = [
        "primary", "link", "info",
        "success", "warning", "danger", "white",
        "light", "dark", "black", "text", "ghost"
    ];

    const typesAsSelectItems = useMemo(
        () => types.map((x, i) => ({
            displayValue: x,
            id: i.toString(),
            value: x,
        }) as SelectableItem),
        []
    );

    return (
        <section>
            <DemoComponentTitleInfoMessage name="Button" />
            <ComponentUseCase
                caption="Default"
                code={`<Button type="success" caption="Button caption" />`}
                description="Default props is type and caption"
                component={<ButtonComponent type="success" caption="Button caption" />}
            />
            <ComponentUseCase
                caption="Icon as content"
                code={`<Button icon={{ name: "bookmarks" }} />`}
                description="Caption could be as string value but also icon configuration"
                component={<ButtonComponent type="success" icon={{ name: "bookmarks" }} />}
            />
            <ComponentUseCase
                caption="Icon + text as content"
                code={`<Button type="success" icon={{ name: "broadcast", position: "right" }} caption="Book" />`}
                description="Caption could be as string value but also icon configuration"
                component={<ButtonComponent type="success" icon={{ name: "broadcast", position: "right" }} caption="Start" />}
            />
            <CommonPropsSuppressExampleInfoMessage />
            <ComponentUseCase
                captionIsCode
                caption="rounded"
                code={`<Button rounded />`}
                description="Button will be rounded in corners"
                component={<ButtonComponent rounded type="success" caption="Start" />}
            />
            <ComponentUseCase
                captionIsCode
                caption="light"
                code={`<Button light />`}
                description="Button style will be a little bit lighter"
                component={<ButtonComponent light type="success" caption="Start" />}
            />
            <ComponentUseCase
                captionIsCode
                caption="outlined"
                code={`<Button outlined />`}
                description="Button background will be transparent until mouse hover"
                component={<ButtonComponent outlined type="success" caption="Start" />}
            />
            <ComponentUseCase
                caption="Loading state mode"
                code={`<Button isLoading />`}
                description="Button will display loading spinner instead of caption"
                component={<ButtonComponent isLoading type="success" caption="Start" />}
            />
            <ComponentUseCase
                caption="Inactive mode"
                code={`<Button static />`}
                description="Button will be inactive, static. No style is applicable"
                component={<ButtonComponent static type="success" caption="Start" />}
            />
            <ComponentEnumCase
                caption="Types (colors)"
                enumNames={types}
                placeholder="Type"
                lookupValues={typesAsSelectItems}
                description="Button can have different own colors"
                codeProvider={id => `<Button type="${id}" />`}
                componentProvider={
                    (value: ButtonType) =>
                        <ButtonComponent type={value} caption="Click me" />
                }
            />
            <ComponentSizeCase
                caption="Sizes"
                codeProvider={id => `<Button size={ElementSize.${id}} />`}
                description="Component supports all available sizes"
                componentProvider={
                    size =>
                        <ButtonComponent size={size} caption="Click me" type="success" />
                }
            />
        </section>
    );
}

export default Button;
