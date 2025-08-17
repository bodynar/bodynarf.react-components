import { ElementColor, ElementSize } from "@bodynarf/react.components";
import TagComponent from "@bodynarf/react.components/components/tag";

import ComponentUseCase from "@app/sharedComponents/useCase";
import CommonPropsSuppressExampleInfoMessage from "@app/sharedComponents/commonPropsSuppress";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";

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
                            size={size === ElementSize.Small ? ElementSize.Normal : size}
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
    );
}

export default Tag;
