import { emptyFn } from "@bodynarf/utils";
import { ValidationStatus } from "@bodynarf/react.components";
import MultilineComponent from "@bodynarf/react.components/components/primitives/multiline";

import ComponentUseCase from "@app/sharedComponents/useCase";
import CommonPropsSuppressExampleInfoMessage from "@app/sharedComponents/commonPropsSuppress";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";

/** Multiline component demo */
function Multiline() {
    return (
        <section>
            <DemoComponentTitleInfoMessage name="Multiline" description="Multiline text input" />
            <ComponentUseCase
                caption="Default"
                code={`<Multiline onValueChange={onValueChangeHandler} label={{ caption: "Multiline label", horizontal: true }} />`}
                description="Control must have label and value change handler as base configuration"
                component={<MultilineComponent label={{ caption: "Multiline label", horizontal: true }} onValueChange={emptyFn} />}
            />
            <CommonPropsSuppressExampleInfoMessage />
            <ComponentSizeCase
                caption="Sizes"
                codeProvider={id => `<Multiline size={ElementSize.${id}} />`}
                description="Control supports all available sizes"
                componentProvider={
                    size =>
                        <MultilineComponent
                            onValueChange={emptyFn}
                            size={size}
                            label={{ caption: "Sized multiline", horizontal: true }}
                        />
                }
            />
            <ComponentColorCase
                caption="Colors"
                codeProvider={id => `<Multiline style={ElementColor.${id}} />`}
                description="Control supports all available colors"
                componentProvider={
                    style =>
                        <MultilineComponent
                            onValueChange={emptyFn}
                            style={style}
                            label={{ caption: "Colored multiline", horizontal: true }}
                        />
                }
            />
            <ComponentUseCase
                caption="loading"
                captionIsCode
                code={`<Multiline loading />`}
                description="Control will have loading state with loading spinner on the end of the control"
                component={<MultilineComponent loading label={{ caption: "Loading", horizontal: true }} onValueChange={emptyFn} />}
            />
            <ComponentUseCase
                caption="readonly"
                captionIsCode
                code={`<Multiline readonly />`}
                description="Control will be in readonly state. Looks like usual input, but without ability to input any text"
                component={<MultilineComponent readonly label={{ caption: "Readonly", horizontal: true }} onValueChange={emptyFn} />}
            />
            <ComponentUseCase
                caption="disabled"
                captionIsCode
                code={`<Multiline disabled />`}
                description="Control will be in disabled state. Control will be colored in gray and mouse will indicate that control cannot take any value"
                component={<MultilineComponent disabled label={{ caption: "Disabled", horizontal: true }} onValueChange={emptyFn} />}
            />
            <ComponentUseCase
                caption="validationState"
                captionIsCode
                code={`<Multiline validationState={{ messages: ["Message 1", "Message 2"], status: ValidationStatus.Invalid, }} />`}
                description="As usual control multiline could be configured with validation state"
                component={<MultilineComponent validationState={{ messages: ["Message 1", "Message 2"], status: ValidationStatus.Invalid, }} label={{ caption: "Validation state", horizontal: true }} onValueChange={emptyFn} />}
            />
            <ComponentUseCase
                caption="Initial rows count"
                code={`<Multiline rows={10} />`}
                description="Initial rows count (height) could be configured"
                component={<MultilineComponent rows={10} label={{ caption: "Rows", horizontal: true }} onValueChange={emptyFn} />}
            />
            <ComponentUseCase
                caption="Fixed size"
                code={`<Multiline fixed />`}
                description={<>
                    Control can be made fixed, what means that control is'nt resizable
                    <br />
                    Works even better with <code>rows</code> prop
                </>}
                component={<MultilineComponent fixed label={{ caption: "Fixed", horizontal: true }} onValueChange={emptyFn} />}
            />
        </section>
    )
}

export default Multiline;
