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
                component={<DateComponent label={{ caption: "Date picker label", horizontal: true }} onValueChange={emptyFn} />}
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
                            label={{ caption: "Colored date picker", horizontal: true }}
                        />
                }
            />
            <ComponentUseCase
                caption="rounded"
                captionIsCode
                code={`<Date rounded />`}
                description="Control will have rounded corners after setting this prop"
                component={<DateComponent rounded label={{ caption: "Rounded", horizontal: true }} onValueChange={emptyFn} />}
            />
            <ComponentUseCase
                caption="loading"
                captionIsCode
                code={`<Date loading />`}
                description="Control will have loading state with loading spinner on the end of the control"
                component={<DateComponent loading label={{ caption: "Loading", horizontal: true }} onValueChange={emptyFn} />}
            />
            <ComponentUseCase
                caption="readonly"
                captionIsCode
                code={`<Date readonly />`}
                description="Control will be in readonly state. Looks like usual input, but without ability to input any text"
                component={<DateComponent readonly label={{ caption: "Readonly", horizontal: true }} onValueChange={emptyFn} />}
            />
            <ComponentUseCase
                caption="disabled"
                captionIsCode
                code={`<Date disabled />`}
                description="Control will be in disabled state. Control will be colored in gray and mouse will indicate that control cannot take any value"
                component={<DateComponent disabled label={{ caption: "Disabled", horizontal: true }} onValueChange={emptyFn} />}
            />
            <ComponentUseCase
                caption="validationState"
                captionIsCode
                code={`<Date validationState={{ messages: ["Message 1", "Message 2"], status: ValidationStatus.Invalid, }} />`}
                description="As usual control date picker could be configured with validation state"
                component={<DateComponent validationState={{ messages: ["Message 1", "Message 2"], status: ValidationStatus.Invalid, }} label={{ caption: "Validation state", horizontal: true }} onValueChange={emptyFn} />}
            />
        </section>
    );
}

export default Date;
