import { FC, useState } from "react";

import { emptyFn } from "@bodynarf/utils";
import OtpInputComponent from "@bodynarf/react.components/components/otpInput";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";

/** OtpInput component demo */
const OtpInput: FC = () => {
    const [value, setValue] = useState("");
    const [pin, setPin] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [colorValue, setColorValue] = useState("");

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="OtpInput"
                version="1.15"
                baseTypeName="BaseElementProps"
                description="One-time password / PIN input rendered as a row of single-character cells. Supports paste, Backspace navigation and arrow keys between cells."
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Default: 6 cells, digits only. Provide value and onChange."
                code={
                    <CodeExample
                        code={[
                            `import { useState } from "react";`,
                            "",
                            `import OtpInput from "@bodynarf/react.components/components/otpInput";`,
                            "",
                            `const [value, setValue] = useState("");`,
                            "",
                            `<OtpInput`,
                            `    value={value}`,
                            `    onChange={setValue}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <OtpInputComponent value={value} onChange={setValue} />
                    <p className="mt-1 has-text-grey">Value: &quot;{value}&quot;</p>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="length"
                description="Set the number of cells via length prop."
                code={
                    <CodeExample
                        code={[
                            `import OtpInput from "@bodynarf/react.components/components/otpInput";`,
                            "",
                            `<OtpInput`,
                            `    value={pin}`,
                            `    length={4}`,
                            `    onChange={setPin}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <OtpInputComponent value={pin} length={4} onChange={setPin} />
                    <p className="mt-1 has-text-grey">PIN: &quot;{pin}&quot;</p>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="type"
                description="Set type to password to mask the entered characters."
                code={
                    <CodeExample
                        code={[
                            `import OtpInput from "@bodynarf/react.components/components/otpInput";`,
                            "",
                            `<OtpInput value={value} type="password" onChange={setValue} />`,
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <OtpInputComponent value={passwordValue} type="password" onChange={setPasswordValue} />
                    <p className="mt-1 has-text-grey">Value: &quot;{passwordValue}&quot;</p>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="disabled"
                description="Disable all cells."
                code={
                    <CodeExample
                        code={[
                            `import OtpInput from "@bodynarf/react.components/components/otpInput";`,
                            "",
                            `<OtpInput`,
                            `    disabled`,
                            `    value="123456"`,
                            `    onChange={() => {}}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <OtpInputComponent value="123456" disabled onChange={() => undefined} />
            </ComponentUseCase>

            <ComponentColorCase
                captionIsCode
                caption="color"
                description="Border color applied to all cells"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementColor } from "@bodynarf/react.components";`,
                            `import OtpInput from "@bodynarf/react.components/components/otpInput";`,
                            "",
                            `<OtpInput`,
                            `    value=""`,
                            `    onChange={() => {}}`,
                            `    color={ElementColor.${id}}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
                componentProvider={color =>
                    <OtpInputComponent value={colorValue} color={color} onChange={setColorValue} />
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="numbersOnly"
                description="When set to false, any character is accepted. By default only digits are allowed."
                code={
                    <CodeExample
                        code={[
                            `import OtpInput from "@bodynarf/react.components/components/otpInput";`,
                            "",
                            `<OtpInput`,
                            `    value={value}`,
                            `    numbersOnly={false}`,
                            `    onChange={setValue}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <OtpInputComponent value={value} numbersOnly={false} onChange={setValue} />
                    <p className="mt-1 has-text-grey">Value: &quot;{value}&quot;</p>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="autoFocus"
                description="Automatically focuses the first cell on mount."
                code={
                    <CodeExample
                        code={[
                            `import OtpInput from "@bodynarf/react.components/components/otpInput";`,
                            "",
                            `<OtpInput`,
                            `    autoFocus`,
                            `    value={value}`,
                            `    onChange={setValue}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <p className="has-text-grey is-size-7 mb-2">
                    Reload the page or navigate away and back — the first cell will be focused on mount.
                </p>
                <OtpInputComponent
                    value={value}
                    autoFocus
                    onChange={emptyFn}
                />
            </ComponentUseCase>
        </section>
    );
};

export default OtpInput;
