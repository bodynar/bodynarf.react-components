import { emptyFn } from "@bodynarf/utils";
import { ValidationStatus } from "@bodynarf/react.components";
import NumberComponent from "@bodynarf/react.components/components/primitives/number";

import ComponentUseCase from "@app/sharedComponents/useCase";
import CommonPropsSuppressExampleInfoMessage from "@app/sharedComponents/commonPropsSuppress";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";

/** Number component demo */
function Number() {
    return (
        <section>
            <DemoComponentTitleInfoMessage name="Number" />
            <ComponentUseCase
                caption="Default"
                code={`<Number onValueChange={onValueChangeHandler} label={{ caption: "Number label", horizontal: true }} />`}
                description="Control must have label and value change handler as base configuration"
                component={<NumberComponent label={{ caption: "Number label", horizontal: true }} onValueChange={emptyFn} />}
            />
            <CommonPropsSuppressExampleInfoMessage />
            <ComponentSizeCase
                caption="Sizes"
                codeProvider={id => `<Number size={ElementSize.${id}} />`}
                description="Control supports all available sizes"
                componentProvider={
                    size =>
                        <NumberComponent
                            onValueChange={emptyFn}
                            size={size}
                            label={{ caption: "Sized number", horizontal: true }}
                        />
                }
            />
            <ComponentColorCase
                caption="Colors"
                codeProvider={id => `<Number style={ElementColor.${id}} />`}
                description="Control supports all available colors"
                componentProvider={
                    style =>
                        <NumberComponent
                            onValueChange={emptyFn}
                            style={style}
                            label={{ caption: "Colored number", horizontal: true }}
                        />
                }
            />
            <ComponentUseCase
                caption="rounded"
                captionIsCode
                code={`<Number rounded />`}
                description="Control will have rounded corners after setting this prop"
                component={<NumberComponent rounded label={{ caption: "Rounded", horizontal: true }} onValueChange={emptyFn} />}
            />
            <ComponentUseCase
                caption="loading"
                captionIsCode
                code={`<Number loading />`}
                description="Control will have loading state with loading spinner on the end of the control"
                component={<NumberComponent loading label={{ caption: "Loading", horizontal: true }} onValueChange={emptyFn} />}
            />
            <ComponentUseCase
                caption="readonly"
                captionIsCode
                code={`<Number readonly />`}
                description="Control will be in readonly state. Looks like usual input, but without ability to input any text"
                component={<NumberComponent readonly label={{ caption: "Readonly", horizontal: true }} onValueChange={emptyFn} />}
            />
            <ComponentUseCase
                caption="disabled"
                captionIsCode
                code={`<Number disabled />`}
                description="Control will be in disabled state. Control will be colored in gray and mouse will indicate that control cannot take any value"
                component={<NumberComponent disabled label={{ caption: "Disabled", horizontal: true }} onValueChange={emptyFn} />}
            />
            <ComponentUseCase
                caption="validationState"
                captionIsCode
                code={`<Number validationState={{ messages: ["Message 1", "Message 2"], status: ValidationStatus.Invalid, }} />`}
                description="As usual control number could be configured with validation state"
                component={<NumberComponent validationState={{ messages: ["Message 1", "Message 2"], status: ValidationStatus.Invalid, }} label={{ caption: "Validation state", horizontal: true }} onValueChange={emptyFn} />}
            />
            <ComponentUseCase
                caption="step"
                captionIsCode
                code={`<Number step={1000} />`}
                description="Prop configures difference which is used to make a step using control increase\decrease buttons"
                component={<NumberComponent step={1000} label={{ caption: "Step", horizontal: true }} onValueChange={emptyFn} />}
            />
        </section>
    )
}

export default Number;
