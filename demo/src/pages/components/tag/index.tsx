import { ElementColor } from "@bodynarf/react.components";
import TagComponent from "@bodynarf/react.components/components/tag";

import ComponentUseCase from "../../../shared/components/useCase";
import CommonPropsSuppressExampleInfoMessage from "../../../shared/components/commonPropsSuppress";
import ComponentSizeCase from "../../../shared/components/sizeUse";
import ComponentColorCase from "../../../shared/components/colorUse";
import DemoComponentTitleInfoMessage from "../../../shared/components/title";

/** Tag component demo */
function Tag() {
    return (
        <section>
            <DemoComponentTitleInfoMessage name="Tag" />
            <ComponentUseCase
                caption="Default"
                code={`<Tag content="Tag content" />`}
                description="By default its only content required"
                component={<TagComponent content="Tag content" />}
            />
            <CommonPropsSuppressExampleInfoMessage />
            <ComponentUseCase
                caption="Rounded"
                captionIsCode
                code={`<Tag rounded />`}
                description="Makes corners more rounded"
                component={<TagComponent content="Tag content" style={ElementColor.Success} rounded />}
            />
            <ComponentSizeCase
                caption="Sizes"
                codeProvider={id => `<Tag size={ElementSize.${id}} />`}
                description="Component supports all available sizes. But normal and small size are equal"
                componentProvider={
                    size =>
                        <TagComponent
                            content="Tag content"
                            size={size}
                            style={ElementColor.Success}
                        />
                }
            />
            <ComponentColorCase
                caption="Colors"
                codeProvider={id => `<Tag style={ElementColor.${id}} />`}
                description="Component supports all available colors"
                componentProvider={
                    style =>
                        <TagComponent
                            content="Tag content"
                            style={style}
                        />
                }
            />
            <ComponentUseCase
                caption="Custom color"
                code={`<Tag customColor={{ color: "black", backgroundColor: "#98ffff" }} />`}
                description={`Besides of pre-defined styled it"s possible to configure with custom colors`}
                component={<TagComponent content="Custom color" customColor={{ color: "black", backgroundColor: "#98ffff" }} />}
            />
            <ComponentColorCase
                caption="Colors (light)"
                codeProvider={id => `<Tag style={ElementColor.${id}} lightColor />`}
                description={<>Colors could be made lighter by passing <code>lightColor</code> prop</>}
                componentProvider={
                    style =>
                        <TagComponent
                            content="Tag content"
                            style={style}
                            lightColor
                        />
                }
            />
        </section>
    )
}

export default Tag;
