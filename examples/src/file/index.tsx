import { FC, useState } from "react";

import FileUpload from "@bodynarf/react.components/components/file";
import { ElementColor, ElementPosition, ElementSize } from "@bodynarf/react.components";



const FileExamples: FC = () => {
    const [file1, setFile1] = useState<File | undefined>();

    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-3">File Upload</h1>

                {/* Basic */}
                <div className="box">
                    <p className="subtitle is-5">Basic</p>
                    <FileUpload
                        placeholder="Choose file..."
                        onValueChange={setFile1}
                    />
                    {file1 && <p className="help mt-2">Selected: <strong>{file1.name}</strong> ({(file1.size / 1024).toFixed(1)} KB)</p>}
                </div>

                {/* Display file name */}
                <div className="box">
                    <p className="subtitle is-5">Display File Name</p>
                    <FileUpload
                        placeholder="Choose file..."
                        displayFileName
                        onValueChange={() => {}}
                    />
                </div>

                {/* With name */}
                <div className="box">
                    <p className="subtitle is-5">With name attribute</p>
                    <FileUpload
                        placeholder="Select document..."
                        name="my-file"
                        displayFileName
                        onValueChange={() => {}}
                    />
                </div>

                {/* Accept filter */}
                <div className="box">
                    <p className="subtitle is-5">Accept Filter</p>
                    <p className="help mb-2">Images only (<code>accept="image/*"</code>)</p>
                    <FileUpload
                        placeholder="Choose image..."
                        accept="image/*"
                        displayFileName
                        onValueChange={() => {}}
                    />
                    <p className="help mt-3 mb-2">PDF only (<code>accept=".pdf"</code>)</p>
                    <FileUpload
                        placeholder="Choose PDF..."
                        accept=".pdf"
                        displayFileName
                        onValueChange={() => {}}
                    />
                </div>

                {/* Alignment */}
                <div className="box">
                    <p className="subtitle is-5">Alignment</p>
                    <p className="help mb-2">Left (default)</p>
                    <FileUpload placeholder="Left aligned" onValueChange={() => {}} />
                    <p className="help mt-3 mb-2">Right</p>
                    <FileUpload
                        placeholder="Right aligned"
                        alignment={ElementPosition.Right}
                        onValueChange={() => {}}
                    />
                </div>

                {/* Boxed */}
                <div className="box">
                    <p className="subtitle is-5">Boxed Style</p>
                    <FileUpload
                        placeholder="Drop file here or click to browse"
                        boxed
                        onValueChange={() => {}}
                    />
                </div>

                {/* Colors */}
                <div className="box">
                    <p className="subtitle is-5">Colors</p>
                    <div className="columns is-multiline">
                        {[
                            ElementColor.Primary,
                            ElementColor.Info,
                            ElementColor.Success,
                            ElementColor.Warning,
                            ElementColor.Danger,
                        ].map(c => (
                            <div key={c} className="column is-4">
                                <FileUpload placeholder={c} style={c} onValueChange={() => {}} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sizes */}
                <div className="box">
                    <p className="subtitle is-5">Sizes</p>
                    {[ElementSize.Small, ElementSize.Normal, ElementSize.Medium, ElementSize.Large].map(s => (
                        <div key={s} className="mb-3">
                            <p className="help mb-1">{s}</p>
                            <FileUpload placeholder={`Size: ${s}`} size={s} onValueChange={() => {}} />
                        </div>
                    ))}
                </div>

                {/* Disabled */}
                <div className="box">
                    <p className="subtitle is-5">Disabled</p>
                    <FileUpload placeholder="Disabled upload" disabled onValueChange={() => {}} />
                </div>

                {/* Clear selection */}
                <div className="box">
                    <p className="subtitle is-5">With Clear Button</p>
                    <FileUpload
                        placeholder="Choose file..."
                        displayFileName
                        clearSelectionTitle="Remove selected file"
                        onValueChange={() => {}}
                    />
                </div>
            </div>
        </section>
    );
};

export default FileExamples;
