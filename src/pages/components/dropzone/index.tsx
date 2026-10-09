import { FC, useState } from "react";

import DropzoneComponent from "@bodynarf/react.components/components/dropzone";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";

/** Dropzone component demo */
const Dropzone: FC = () => {
    const [files, setFiles] = useState<File[]>([]);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Dropzone"
                version="1.16"
                baseTypeName="BaseElementProps"
                description="Drag-and-drop file area with click-to-browse. Collected files are reported via `onValueChange(File[])`. The content for each drag state (idle / accept / reject) can be customized with the `Dropzone.Idle`, `Dropzone.Accept` and `Dropzone.Reject` slots."
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Drop files onto the area or click it to open the native file dialog."
                code={
                    <CodeExample
                        code={[
                            `import { useState } from "react";`,
                            `import Dropzone from "@bodynarf/react.components/components/dropzone";`,
                            "",
                            `const [files, setFiles] = useState<File[]>([]);`,
                            "",
                            "<Dropzone",
                            "    onValueChange={setFiles}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <DropzoneComponent onValueChange={setFiles} />
                {files.length > 0 &&
                    <div className="mt-2">
                        <p className="is-size-7 has-text-grey">Selected files:</p>
                        <ul className="mb-0">
                            {files.map(x =>
                                <li key={x.name}>{x.name} ({x.size} B)</li>
                            )}
                        </ul>
                    </div>
                }
            </ComponentUseCase>

            <hr />

            <div className="block">
                <h4 className="subtitle is-4">
                    Custom component props
                </h4>
            </div>

            <ComponentUseCase
                captionIsCode
                caption="text / description"
                description="Main and secondary texts of the default idle content."
                code={
                    <CodeExample
                        code={[
                            `import Dropzone from "@bodynarf/react.components/components/dropzone";`,
                            "",
                            "<Dropzone",
                            `    text="Drop your CV here"`,
                            `    description="PDF, up to 10 MB"`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <DropzoneComponent
                    text="Drop your CV here"
                    description="PDF, up to 10 MB"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="accept"
                description="Allowed file types — same syntax as the HTML `accept` attribute (MIME types, extensions or wildcards like `image/*`). Dragging a non-matching file switches the zone into the reject state and the file is not collected."
                code={
                    <CodeExample
                        code={[
                            `import Dropzone from "@bodynarf/react.components/components/dropzone";`,
                            "",
                            "<Dropzone",
                            `    accept=".pdf,image/*"`,
                            "    multiple",
                            "    onValueChange={files => console.log(files)}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <DropzoneComponent
                    accept=".pdf,image/*"
                    multiple
                    onValueChange={setFiles}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="multiple"
                description="Allow more than one file to be selected or dropped at once."
                code={
                    <CodeExample
                        code={[
                            `import Dropzone from "@bodynarf/react.components/components/dropzone";`,
                            "",
                            "<Dropzone",
                            "    multiple",
                            "    onValueChange={files => console.log(files)}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <DropzoneComponent multiple onValueChange={setFiles} />
            </ComponentUseCase>

            <ComponentUseCase
                caption="Custom slots"
                description="Override the default content per drag state with the `Dropzone.Idle`, `Dropzone.Accept` and `Dropzone.Reject` compound slots."
                code={
                    <CodeExample
                        code={[
                            `import Dropzone from "@bodynarf/react.components/components/dropzone";`,
                            "",
                            "<Dropzone onValueChange={files => console.log(files)}>",
                            "    <Dropzone.Idle>",
                            `        <p className="has-text-weight-semibold">Send us anything</p>`,
                            "    </Dropzone.Idle>",
                            "    <Dropzone.Accept>",
                            `        <p className="has-text-success has-text-weight-semibold">Looking good — drop it!</p>`,
                            "    </Dropzone.Accept>",
                            "    <Dropzone.Reject>",
                            `        <p className="has-text-danger has-text-weight-semibold">This file type is not accepted</p>`,
                            "    </Dropzone.Reject>",
                            "</Dropzone>",
                        ].join("\n")}
                    />
                }
            >
                <DropzoneComponent onValueChange={setFiles}>
                    <DropzoneComponent.Idle>
                        <p className="has-text-weight-semibold">Send us anything</p>
                    </DropzoneComponent.Idle>
                    <DropzoneComponent.Accept>
                        <p className="has-text-success has-text-weight-semibold">Looking good — drop it!</p>
                    </DropzoneComponent.Accept>
                    <DropzoneComponent.Reject>
                        <p className="has-text-danger has-text-weight-semibold">This file type is not accepted</p>
                    </DropzoneComponent.Reject>
                </DropzoneComponent>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="disabled"
                description="Disable the zone — drag and click are both ignored."
                code={
                    <CodeExample
                        code={[
                            `import Dropzone from "@bodynarf/react.components/components/dropzone";`,
                            "",
                            "<Dropzone",
                            "    disabled",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <DropzoneComponent disabled />
            </ComponentUseCase>

            <ComponentColorCase
                captionIsCode
                caption="style"
                description="Color accent of the zone (border and icons)."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementColor } from "@bodynarf/react.components";`,
                            `import Dropzone from "@bodynarf/react.components/components/dropzone";`,
                            "",
                            "<Dropzone",
                            `    style={ElementColor.${id}}`,
                            "/>",
                        ].join("\n")}
                    />
                }
                componentProvider={style =>
                    <DropzoneComponent style={style} />
                }
            />

            <ComponentSizeCase
                captionIsCode
                caption="size"
                description="The component supports all sizes defined in ElementSize."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementSize } from "@bodynarf/react.components";`,
                            `import Dropzone from "@bodynarf/react.components/components/dropzone";`,
                            "",
                            "<Dropzone",
                            `    size={ElementSize.${id}}`,
                            "/>",
                        ].join("\n")}
                    />
                }
                componentProvider={size =>
                    <DropzoneComponent size={size} />
                }
            />
        </section>
    );
};

export default Dropzone;
