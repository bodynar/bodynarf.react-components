import { FC } from "react";

import Avatar from "@bodynarf/react.components/components/avatar";
import AvatarGroup from "@bodynarf/react.components/components/avatarGroup";
import { AvatarShape, AvatarStatus, ElementSize } from "@bodynarf/react.components";

/** All Avatar component variations */
const AvatarExamples: FC = () => {
    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-3">Avatar</h1>

                {/* Image */}
                <div className="box">
                    <p className="subtitle is-5">Image source</p>
                    <p className="help mb-4">Valid <code>src</code> renders the image. Uses alt text for accessibility.</p>
                    <div className="is-flex is-align-items-center" style={{ gap: "1rem" }}>
                        <Avatar src="https://i.pravatar.cc/80?img=1" alt="Alice" />
                        <Avatar src="https://i.pravatar.cc/80?img=2" alt="Bob" />
                        <Avatar src="https://i.pravatar.cc/80?img=3" alt="Carol" />
                    </div>
                </div>

                {/* Initials */}
                <div className="box">
                    <p className="subtitle is-5">Initials (no image)</p>
                    <p className="help mb-4">Shown when <code>src</code> is omitted or fails to load.</p>
                    <div className="is-flex is-align-items-center" style={{ gap: "1rem" }}>
                        <Avatar initials="AJ" color="#4a90e2" />
                        <Avatar initials="BS" color="#7c4dff" />
                        <Avatar initials="CW" color="#00897b" />
                        <Avatar initials="DB" color="#e65100" />
                    </div>
                </div>

                {/* Icon fallback */}
                <div className="box">
                    <p className="subtitle is-5">Icon fallback</p>
                    <p className="help mb-4">Used when no <code>src</code> or <code>initials</code> are provided.</p>
                    <div className="is-flex is-align-items-center" style={{ gap: "1rem" }}>
                        <Avatar icon="person-fill" color="#607d8b" />
                        <Avatar icon="robot" color="#8e24aa" />
                        <Avatar icon="building" color="#0288d1" />
                    </div>
                </div>

                {/* Shapes */}
                <div className="box">
                    <p className="subtitle is-5">Shapes</p>
                    <div className="is-flex is-align-items-center" style={{ gap: "1.5rem", flexWrap: "wrap" }}>
                        <div className="has-text-centered">
                            <Avatar src="https://i.pravatar.cc/80?img=4" shape={AvatarShape.Circle} />
                            <p className="help mt-1">Circle (default)</p>
                        </div>
                        <div className="has-text-centered">
                            <Avatar src="https://i.pravatar.cc/80?img=5" shape={AvatarShape.Square} />
                            <p className="help mt-1">Square</p>
                        </div>
                        <div className="has-text-centered">
                            <Avatar src="https://i.pravatar.cc/80?img=6" shape={AvatarShape.RoundedSquare} />
                            <p className="help mt-1">RoundedSquare</p>
                        </div>
                        <div className="has-text-centered">
                            <Avatar initials="JS" color="#2979ff" shape={AvatarShape.RoundedSquare} />
                            <p className="help mt-1">Initials + Rounded</p>
                        </div>
                    </div>
                </div>

                {/* Status */}
                <div className="box">
                    <p className="subtitle is-5">Status indicator</p>
                    <div className="is-flex is-align-items-center" style={{ gap: "1.5rem", flexWrap: "wrap" }}>
                        <div className="has-text-centered">
                            <Avatar src="https://i.pravatar.cc/80?img=7" status={AvatarStatus.Online} />
                            <p className="help mt-1">Online</p>
                        </div>
                        <div className="has-text-centered">
                            <Avatar src="https://i.pravatar.cc/80?img=8" status={AvatarStatus.Away} />
                            <p className="help mt-1">Away</p>
                        </div>
                        <div className="has-text-centered">
                            <Avatar src="https://i.pravatar.cc/80?img=9" status={AvatarStatus.Offline} />
                            <p className="help mt-1">Offline</p>
                        </div>
                    </div>
                </div>

                {/* Sizes */}
                <div className="box">
                    <p className="subtitle is-5">Sizes</p>
                    <div className="is-flex is-align-items-end" style={{ gap: "1.5rem", flexWrap: "wrap" }}>
                        {[ElementSize.Small, ElementSize.Normal, ElementSize.Medium, ElementSize.Large].map(s => (
                            <div key={s} className="has-text-centered">
                                <Avatar src="https://i.pravatar.cc/80?img=10" size={s} />
                                <p className="help mt-1">{s}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Clickable */}
                <div className="box">
                    <p className="subtitle is-5">Clickable</p>
                    <p className="help mb-4">Providing <code>onClick</code> makes the avatar interactive.</p>
                    <Avatar
                        src="https://i.pravatar.cc/80?img=11"
                        alt="Click me"
                        onClick={() => alert("Avatar clicked!")}
                    />
                </div>

                {/* Combined */}
                <div className="box">
                    <p className="subtitle is-5">Combined — status + initials + shape</p>
                    <div className="is-flex is-align-items-center" style={{ gap: "1.5rem" }}>
                        <Avatar initials="AJ" color="#1565c0" size={ElementSize.Large} status={AvatarStatus.Online} shape={AvatarShape.RoundedSquare} />
                        <Avatar initials="BS" color="#b71c1c" size={ElementSize.Medium} status={AvatarStatus.Away} />
                        <Avatar icon="building" color="#2e7d32" size={ElementSize.Normal} status={AvatarStatus.Offline} shape={AvatarShape.Square} />
                    </div>
                </div>

                {/* Avatar group */}
                <div className="box">
                    <p className="subtitle is-5">Avatar group</p>
                    <p className="help mb-4">
                        Avatars beyond <code>maxVisible</code> collapse into a <code>+N</code> avatar —
                        click it to open the popover with the hidden members.
                    </p>
                    <div className="is-flex is-flex-direction-column" style={{ gap: "1.5rem" }}>
                        <AvatarGroup
                            items={[
                                { src: "https://i.pravatar.cc/80?img=12", alt: "Alice" },
                                { src: "https://i.pravatar.cc/80?img=13", alt: "Bob" },
                                { src: "https://i.pravatar.cc/80?img=14", alt: "Carol" },
                                { src: "https://i.pravatar.cc/80?img=15", alt: "Dan" },
                                { initials: "EW", color: "#7c4dff", alt: "Ethan" },
                                { initials: "FL", color: "#00897b", alt: "Fiona" },
                                { initials: "GM", color: "#e65100", alt: "Grace" },
                            ]}
                            maxVisible={4}
                        />
                        <AvatarGroup
                            items={[
                                { initials: "HP", color: "#1565c0", alt: "Helen" },
                                { initials: "IV", color: "#b71c1c", alt: "Ivan" },
                                { initials: "JW", color: "#2e7d32", alt: "Jack" },
                                { initials: "KX", color: "#e65100", alt: "Karen" },
                                { src: "https://i.pravatar.cc/80?img=20", alt: "Leo", shape: AvatarShape.Circle },
                                { initials: "MZ", color: "#6a1b9a", alt: "Mia" },
                            ]}
                            maxVisible={3}
                            size={ElementSize.Medium}
                            shape={AvatarShape.RoundedSquare}
                            overflowPopoverTitle="Team members"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AvatarExamples;
