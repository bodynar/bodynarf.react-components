import { FC, useState } from "react";

import Tag from "@bodynarf/react.components/components/tag";
import { ElementColor, ElementSize } from "@bodynarf/react.components";

const TagExamples: FC = () => {
    const [tags, setTags] = useState(["React", "TypeScript", "Vite", "Bulma", "BBR"]);

    const removeTag = (t: string) => setTags(prev => prev.filter(x => x !== t));

    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-3">Tag</h1>

                {/* Basic */}
                <div className="box">
                    <p className="subtitle is-5">Basic</p>
                    <div className="tags">
                        <Tag content="Label" />
                        <Tag content="Info"    style={ElementColor.Info}    />
                        <Tag content="Success" style={ElementColor.Success} />
                        <Tag content="Warning" style={ElementColor.Warning} />
                        <Tag content="Danger"  style={ElementColor.Danger}  />
                        <Tag content="Primary" style={ElementColor.Primary} />
                        <Tag content="Link"    style={ElementColor.Link}    />
                    </div>
                </div>

                {/* Colors */}
                <div className="box">
                    <p className="subtitle is-5">Light Color Variants</p>
                    <div className="tags">
                        <Tag content="Default light" lightColor />
                        <Tag content="Info light"    lightColor style={ElementColor.Info}    />
                        <Tag content="Success light" lightColor style={ElementColor.Success} />
                        <Tag content="Warning light" lightColor style={ElementColor.Warning} />
                        <Tag content="Danger light"  lightColor style={ElementColor.Danger}  />
                        <Tag content="Primary light" lightColor style={ElementColor.Primary} />
                    </div>
                </div>

                {/* Light */}
                <div className="box">
                    <p className="subtitle is-5">Light variants</p>
                    <p className="help mb-4">
                        <code>light</code> is a synonym of <code>lightColor</code> — both add the <code>is-light</code> modifier.
                    </p>
                    <div className="tags">
                        <Tag content="Default light" light />
                        <Tag content="Info light"    light style={ElementColor.Info}    />
                        <Tag content="Success light" light style={ElementColor.Success} />
                        <Tag content="Warning light" light style={ElementColor.Warning} />
                        <Tag content="Danger light"  light style={ElementColor.Danger}  />
                        <Tag content="Primary light" light style={ElementColor.Primary} />
                    </div>
                </div>

                {/* Icons */}
                <div className="box">
                    <p className="subtitle is-5">Icons</p>
                    <p className="help mb-4">
                        <code>iconLeft</code> and <code>iconRight</code> render a Bootstrap icon beside the content.
                    </p>
                    <div className="tags">
                        <Tag content="TypeScript" iconLeft={{ name: "code-slash" }}        style={ElementColor.Info}    />
                        <Tag content="Verified"   iconLeft={{ name: "patch-check-fill" }} style={ElementColor.Success} />
                        <Tag content="New release" iconLeft={{ name: "star-fill" }} iconRight={{ name: "arrow-right" }} style={ElementColor.Primary} />
                        <Tag content="Download"   iconRight={{ name: "download" }}        style={ElementColor.Link}    />
                        <Tag content="Remove"     iconRight={{ name: "x-lg" }}            style={ElementColor.Danger}  />
                    </div>
                </div>

                {/* Outlined */}
                <div className="box">
                    <p className="subtitle is-5">Outlined</p>
                    <p className="help mb-4">
                        Transparent background with a colored border.
                        Ignored when <code>customColor</code> is set.
                    </p>
                    <div className="tags">
                        <Tag content="Default" outlined />
                        <Tag content="Primary" outlined style={ElementColor.Primary} />
                        <Tag content="Link"    outlined style={ElementColor.Link}    />
                        <Tag content="Info"    outlined style={ElementColor.Info}    />
                        <Tag content="Success" outlined style={ElementColor.Success} />
                        <Tag content="Warning" outlined style={ElementColor.Warning} />
                        <Tag content="Danger"  outlined style={ElementColor.Danger}  />
                    </div>
                </div>

                {/* Outlined + light */}
                <div className="box">
                    <p className="subtitle is-5">Outlined + light</p>
                    <p className="help mb-4">Outlined tags with a light border and dark text color.</p>
                    <div className="tags">
                        <Tag content="Primary" outlined light style={ElementColor.Primary} />
                        <Tag content="Link"    outlined light style={ElementColor.Link}    />
                        <Tag content="Info"    outlined light style={ElementColor.Info}    />
                        <Tag content="Success" outlined light style={ElementColor.Success} />
                        <Tag content="Warning" outlined light style={ElementColor.Warning} />
                        <Tag content="Danger"  outlined light style={ElementColor.Danger}  />
                    </div>
                </div>

                {/* Sizes */}
                <div className="box">
                    <p className="subtitle is-5">Sizes</p>
                    <div className="tags">
                        <Tag content="Normal (default)" style={ElementColor.Primary} />
                        <Tag content="Medium"           style={ElementColor.Primary} size={ElementSize.Medium} />
                        <Tag content="Large"            style={ElementColor.Primary} size={ElementSize.Large}  />
                    </div>
                </div>

                {/* Rounded */}
                <div className="box">
                    <p className="subtitle is-5">Rounded</p>
                    <div className="tags">
                        <Tag content="Rounded default" rounded />
                        <Tag content="Rounded primary" rounded style={ElementColor.Primary} />
                        <Tag content="Rounded danger"  rounded style={ElementColor.Danger}  />
                    </div>
                </div>

                {/* Removable */}
                <div className="box">
                    <p className="subtitle is-5">Removable Tags</p>
                    <div className="tags">
                        {tags.map(t => (
                            <Tag
                                key={t}
                                content={t}
                                style={ElementColor.Primary}
                                onRemove={() => removeTag(t)}
                            />
                        ))}
                    </div>
                    {tags.length === 0 && <p className="help">All tags removed. Refresh to reset.</p>}
                </div>

                {/* Clickable */}
                <div className="box">
                    <p className="subtitle is-5">Clickable</p>
                    <div className="tags">
                        <Tag content="Click me"   style={ElementColor.Info}    outlined onClick={() => alert("Clicked: Info")}    />
                        <Tag content="And me"     style={ElementColor.Success} onClick={() => alert("Clicked: Success")} />
                        <Tag content="Or me too"  style={ElementColor.Warning} onClick={() => alert("Clicked: Warning")} />
                    </div>
                </div>

                {/* Custom color */}
                <div className="box">
                    <p className="subtitle is-5">Custom Color</p>
                    <div className="tags">
                        <Tag content="Hot pink"    customColor={{ color: "#fff", backgroundColor: "#e91e8c" }} />
                        <Tag content="Deep ocean"  customColor={{ color: "#fff", backgroundColor: "#1565c0" }} />
                        <Tag content="Forest"      customColor={{ color: "#fff", backgroundColor: "#2e7d32" }} />
                        <Tag content="Amber"       customColor={{ color: "#000", backgroundColor: "#ffc107" }} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TagExamples;
