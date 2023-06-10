import { emptyFn } from "@bodynarf/utils";
import { ValidationStatus } from "@bodynarf/react.components";
import TextComponent from "@bodynarf/react.components/components/primitives/text";

import ComponentUseCase from "../../../shared/components/useCase";
import CommonPropsSuppressExampleInfoMessage from "../../../shared/components/commonPropsSuppress";
import ComponentSizeCase from "../../../shared/components/sizeUse";
import ComponentColorCase from "../../../shared/components/colorUse";
import DemoComponentTitleInfoMessage from "../../../shared/components/title";

/** Text component demo */
function Text() {
    return (
        <section>
            <DemoComponentTitleInfoMessage name="Text" description="Single line of text" />
            <ComponentUseCase
                caption="Default"
                code={`<Text onValueChange={onValueChangeHandler} label={{ caption: "text label", horizontal: true }} />`}
                description="Control must have label and value change handler as base configuration"
                component={<TextComponent label={{ caption: "Text label", horizontal: true }} onValueChange={emptyFn} />}
            />
            <CommonPropsSuppressExampleInfoMessage />
            <ComponentSizeCase
                caption="Sizes"
                codeProvider={id => `<Text size={ElementSize.${id}} />`}
                description="Control supports all available sizes"
                componentProvider={
                    size =>
                        <TextComponent
                            onValueChange={emptyFn}
                            size={size}
                            label={{ caption: "Sized text", horizontal: true }}
                        />
                }
            />
            <ComponentColorCase
                caption="Colors"
                codeProvider={id => `<Text style={ElementColor.${id}} />`}
                description="Control supports all available colors"
                componentProvider={
                    style =>
                        <TextComponent
                            onValueChange={emptyFn}
                            style={style}
                            label={{ caption: "Colored text", horizontal: true }}
                        />
                }
            />
            <ComponentUseCase
                caption="rounded"
                captionIsCode
                code={`<Text rounded />`}
                description="Control will have rounded corners after setting this prop"
                component={<TextComponent rounded label={{ caption: "Rounded", horizontal: true }} onValueChange={emptyFn} />}
            />
            <ComponentUseCase
                caption="loading"
                captionIsCode
                code={`<Text loading />`}
                description="Control will have loading state with loading spinner on the end of the control"
                component={<TextComponent loading label={{ caption: "Loading", horizontal: true }} onValueChange={emptyFn} />}
            />
            <ComponentUseCase
                caption="readonly"
                captionIsCode
                code={`<Text readonly />`}
                description="Control will be in readonly state. Looks like usual input, but without ability to input any text"
                component={<TextComponent readonly label={{ caption: "Readonly", horizontal: true }} onValueChange={emptyFn} />}
            />
            <ComponentUseCase
                caption="disabled"
                captionIsCode
                code={`<Text disabled />`}
                description="Control will be in disabled state. Control will be colored in gray and mouse will indicate that control cannot take any value"
                component={<TextComponent disabled label={{ caption: "Disabled", horizontal: true }} onValueChange={emptyFn} />}
            />
            <ComponentUseCase
                caption="validationState"
                captionIsCode
                code={`<Text validationState={{ messages: ["Message 1", "Message 2"], status: ValidationStatus.Invalid, }} />`}
                description="As usual control text could be configured with validation state"
                component={<TextComponent validationState={{ messages: ["Message 1", "Message 2"], status: ValidationStatus.Invalid, }} label={{ caption: "Validation state", horizontal: true }} onValueChange={emptyFn} />}
            />
        </section>
    )
}

export default Text;
