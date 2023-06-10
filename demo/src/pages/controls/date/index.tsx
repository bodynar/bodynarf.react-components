import { emptyFn } from "@bodynarf/utils";
import { ValidationStatus } from "@bodynarf/react.components";
import DateComponent from "@bodynarf/react.components/components/primitives/date";

import ComponentUseCase from "../../../shared/components/useCase";
import CommonPropsSuppressExampleInfoMessage from "../../../shared/components/commonPropsSuppress";
import ComponentSizeCase from "../../../shared/components/sizeUse";
import ComponentColorCase from "../../../shared/components/colorUse";
import DemoComponentTitleInfoMessage from "../../../shared/components/title";

/** Date component demo */
function Date() {

    return (
        <section>
            <DemoComponentTitleInfoMessage name="Date picker" />
            <ComponentUseCase
                caption="Default"
                code={`<Date onValueChange={onValueChangeHandler} label={{ caption: "date picker label", horizontal: true }} />`}
                description="Control must have label and value change handler as base configuration"
                component={<DateComponent label={{ caption: "date picker label", horizontal: true }} onValueChange={emptyFn} />}
            />
            <CommonPropsSuppressExampleInfoMessage />
            <ComponentSizeCase
                caption="Sizes"
                codeProvider={id => `<Date size={ElementSize.${id}} />`}
                description="Control supports all available sizes"
                componentProvider={
                    size =>
                        <DateComponent
                            onValueChange={emptyFn}
                            size={size}
                            label={{ caption: "Sized date picker", horizontal: true }}
                        />
                }
            />
            <ComponentColorCase
                caption="Colors"
                codeProvider={id => `<Date style={ElementColor.${id}} />`}
                description="Control supports all available colors"
                componentProvider={
                    style =>
                        <DateComponent
                            onValueChange={emptyFn}
                            style={style}
                            label={{ caption: "Colored date picker", horizontal: false }}
                        />
                }
            />
            <ComponentUseCase
                caption="rounded"
                captionIsCode
                code={`<Date rounded />`}
                description="Control will have rounded corners after setting this prop"
                component={<DateComponent rounded label={{ caption: "Rounded date picker", horizontal: true }} onValueChange={emptyFn} />}
            />
            <ComponentUseCase
                caption="loading"
                captionIsCode
                code={`<Date loading />`}
                description="Control will have loading state with loading spinner on the end of the control"
                component={<DateComponent loading label={{ caption: "Loading date picker", horizontal: true }} onValueChange={emptyFn} />}
            />
            <ComponentUseCase
                caption="validationState"
                captionIsCode
                code={`<Date validationState={{ messages: ["Message 1", "Message 2"], status: ValidationStatus.Invalid, }} />`}
                description="As usual control date picker could be configured with validation state"
                component={<DateComponent validationState={{ messages: ["Message 1", "Message 2"], status: ValidationStatus.Invalid, }} label={{ caption: "Loading date picker", horizontal: true }} onValueChange={emptyFn} />}
            />
        </section>
    )
}

export default Date;
