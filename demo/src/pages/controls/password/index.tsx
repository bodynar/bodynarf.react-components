import { emptyFn } from "@bodynarf/utils";
import { ValidationStatus } from "@bodynarf/react.components";
import PasswordComponent from "@bodynarf/react.components/components/primitives/password";

import ComponentUseCase from "../../../shared/components/useCase";
import CommonPropsSuppressExampleInfoMessage from "../../../shared/components/commonPropsSuppress";
import ComponentSizeCase from "../../../shared/components/sizeUse";
import ComponentColorCase from "../../../shared/components/colorUse";
import DemoComponentTitleInfoMessage from "../../../shared/components/title";

/** Password component demo */
function Password() {
    return (
        <section>
            <DemoComponentTitleInfoMessage name="Password" />
            <ComponentUseCase
                caption="Default"
                code={`<Password onValueChange={onValueChangeHandler} label={{ caption: "Password label", horizontal: true }} />`}
                description="Control must have label and value change handler as base configuration"
                component={<PasswordComponent label={{ caption: "Password label", horizontal: true }} onValueChange={emptyFn} />}
            />
            <CommonPropsSuppressExampleInfoMessage />
            <ComponentSizeCase
                caption="Sizes"
                codeProvider={id => `<Password size={ElementSize.${id}} />`}
                description="Control supports all available sizes"
                componentProvider={
                    size =>
                        <PasswordComponent
                            onValueChange={emptyFn}
                            size={size}
                            label={{ caption: "Sized password", horizontal: true }}
                        />
                }
            />
            <ComponentColorCase
                caption="Colors"
                codeProvider={id => `<Password style={ElementColor.${id}} />`}
                description="Control supports all available colors"
                componentProvider={
                    style =>
                        <PasswordComponent
                            onValueChange={emptyFn}
                            style={style}
                            label={{ caption: "Colored password", horizontal: false }}
                        />
                }
            />
            <ComponentUseCase
                caption="rounded"
                captionIsCode
                code={`<Password rounded />`}
                description="Control will have rounded corners after setting this prop"
                component={<PasswordComponent rounded label={{ caption: "Rounded", horizontal: true }} onValueChange={emptyFn} />}
            />
            <ComponentUseCase
                caption="loading"
                captionIsCode
                code={`<Password loading />`}
                description="Control will have loading state with loading spinner on the end of the control"
                component={<PasswordComponent loading label={{ caption: "Loading", horizontal: true }} onValueChange={emptyFn} />}
            />
            <ComponentUseCase
                caption="disabled"
                captionIsCode
                code={`<Password disabled />`}
                description="Control will be disabled"
                component={<PasswordComponent disabled label={{ caption: "Disabled", horizontal: true }} onValueChange={emptyFn} />}
            />
            <ComponentUseCase
                caption="validationState"
                captionIsCode
                code={`<Password validationState={{ messages: ["Message 1", "Message 2"], status: ValidationStatus.Invalid, }} />`}
                description="As usual control password could be configured with validation state"
                component={<PasswordComponent validationState={{ messages: ["Message 1", "Message 2"], status: ValidationStatus.Invalid, }} label={{ caption: "Loading password", horizontal: true }} onValueChange={emptyFn} />}
            />
            <ComponentUseCase
                caption="canShowPassword"
                captionIsCode
                code={`<Password canShowPassword />`}
                description="Allows user to see password after clicking on eye icon"
                component={<PasswordComponent canShowPassword label={{ caption: "Loading password", horizontal: true }} onValueChange={emptyFn} />}
            />
        </section>
    );
}

export default Password;
