import AnchorComponent from "@bodynarf/react.components/components/anchor";
import ComponentUseCase from "../../../shared/components/useCase";
import CommonPropsSuppressExampleInfoMessage from "../../../shared/components/commonPropsSuppress";
import DemoComponentTitleInfoMessage from "../../../shared/components/title";

/** Anchor component demo */
function Anchor() {
    return (
        <section>
            <DemoComponentTitleInfoMessage name="Anchor" />
            <ComponentUseCase
                caption="Default"
                code={`<Anchor caption={\`I"m the anchor\`} href="#" />`}
                description="Default configuration is caption and href"
                component={<AnchorComponent caption={`I"m the anchor`} href="#" />}
            />
            <CommonPropsSuppressExampleInfoMessage />
            <ComponentUseCase
                caption="Without hover effects"
                code={`<Anchor disableHovering />`}
                description="Hover effects could be disabled (link wont have underline effect on hover). But why?.."
                component={<AnchorComponent caption={`I"m the anchor`} href="#" disableHovering />}
            />
            <ComponentUseCase
                caption="With icon"
                code={`<Anchor icon={{ name: "basket2", position: "right" }} />`}
                description="Component could held an icon in its content"
                component={<AnchorComponent caption={`I"m the anchor`} href="#" icon={{ name: "basket2", position: "right" }} />}
            />
        </section>
    )
}

export default Anchor;
