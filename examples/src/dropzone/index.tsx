import { FC, useState } from "react";

import Dropzone from "@bodynarf/react.components/components/dropzone";
import { ElementColor, ElementSize, Icon } from "@bodynarf/react.components";


const formatBytes = (bytes: number): string => {
    if (bytes === 0) {
        return "0 B";
    }

    const units = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));

    return `${(bytes / Math.pow(1024, i)).toFixed(1)} ${units[i]}`;
};

const DropzoneExamples: FC = () => {
    const [files, setFiles] = useState<File[]>([]);

    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-3">Dropzone</h1>

                {/* Basic */}
                <div className="box">
                    <p className="subtitle is-5">Basic</p>
                    <p className="help mb-2">Drag files over the area or click to browse.</p>
                    <Dropzone onValueChange={setFiles} />
                    {files.length > 0 && (
                        <ul className="help mt-2">
                            {files.map(file => (
                                <li key={file.name}>
                                    <strong>{file.name}</strong> ({formatBytes(file.size)})
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Text & description */}
                <div className="box">
                    <p className="subtitle is-5">Custom text &amp; description</p>
                    <Dropzone
                        text="Drop your documents"
                        description="PDF, DOCX or images up to 10 MB"
                        onValueChange={() => {}}
                    />
                </div>

                {/* Single file */}
                <div className="box">
                    <p className="subtitle is-5">Single file (no multiple)</p>
                    <Dropzone
                        text="Choose a single file"
                        onValueChange={(picked) => setFiles(picked)}
                    />
                </div>

                {/* Multiple files */}
                <div className="box">
                    <p className="subtitle is-5">Multiple files</p>
                    <Dropzone
                        multiple
                        text="Drop one or more files"
                        onValueChange={setFiles}
                    />
                </div>

                {/* Accept filter */}
                <div className="box">
                    <p className="subtitle is-5">Accept filter</p>
                    <p className="help mb-2">Images only (<code>accept=&quot;image/*&quot;</code>) — dragging a non-image shows the reject state.</p>
                    <Dropzone
                        accept="image/*"
                        text="Drop images here"
                        description="PNG, JPG, GIF, SVG..."
                        onValueChange={setFiles}
                    />
                </div>

                {/* Custom slots */}
                <div className="box">
                    <p className="subtitle is-5">Custom slots (Idle / Accept / Reject)</p>
                    <p className="help mb-2">Drag an image (accept) vs. a non-image (reject) to see different content.</p>
                    <Dropzone accept="image/*" onValueChange={setFiles}>
                        <Dropzone.Idle>
                            <Icon name="cloud-arrow-up" />
                            <span>Drag <strong>images</strong> here</span>
                        </Dropzone.Idle>
                        <Dropzone.Accept>
                            <Icon name="check-lg" />
                            <span>Looks good — drop to upload!</span>
                        </Dropzone.Accept>
                        <Dropzone.Reject>
                            <Icon name="x-lg" />
                            <span>Only image files are allowed</span>
                        </Dropzone.Reject>
                    </Dropzone>
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
                                <Dropzone
                                    style={c}
                                    text={c}
                                    onValueChange={() => {}}
                                />
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
                            <Dropzone size={s} text={`Size: ${s}`} onValueChange={() => {}} />
                        </div>
                    ))}
                </div>

                {/* Disabled */}
                <div className="box">
                    <p className="subtitle is-5">Disabled</p>
                    <Dropzone disabled text="Disabled dropzone" onValueChange={() => {}} />
                </div>
            </div>
        </section>
    );
};

export default DropzoneExamples;
