import { FC, useState } from "react";

import Stat from "@bodynarf/react.components/components/stat";
import OtpInput from "@bodynarf/react.components/components/otpInput";
import { ElementColor, ElementSize, StatTrendDirection } from "@bodynarf/react.components";

/** Stat + OtpInput examples */
const StatAndOtpInputExamples: FC = () => {
    const [otp6,    setOtp6]    = useState("");
    const [otp4,    setOtp4]    = useState("");
    const [otpPwd,  setOtpPwd]  = useState("");
    const [otpAlph, setOtpAlph] = useState("");
    const [otpDis,  setOtpDis]  = useState("123456");

    return (
        <section className="section">
            <div className="container">

                {/* ── Stat ─────────────────────────────────────────────── */}
                <h1 className="title is-3">Stat</h1>

                {/* Basic */}
                <div className="box">
                    <p className="subtitle is-5">Basic stats grid</p>
                    <div className="columns is-multiline">
                        <div className="column is-3">
                            <Stat value="1,284" label="Total Users" icon="people" color={ElementColor.Primary} />
                        </div>
                        <div className="column is-3">
                            <Stat value="$48,900" label="Revenue" icon="currency-dollar" color={ElementColor.Success} />
                        </div>
                        <div className="column is-3">
                            <Stat value="93%" label="Uptime" icon="shield-check" color={ElementColor.Info} />
                        </div>
                        <div className="column is-3">
                            <Stat value="14" label="Open Issues" icon="exclamation-triangle" color={ElementColor.Warning} />
                        </div>
                    </div>
                </div>

                {/* With trends */}
                <div className="box">
                    <p className="subtitle is-5">With trends</p>
                    <div className="columns is-multiline">
                        <div className="column is-4">
                            <Stat
                                value="2,540"
                                label="Monthly Signups"
                                icon="person-plus"
                                color={ElementColor.Primary}
                                trend={{ label: "+12% vs last month", direction: StatTrendDirection.Up }}
                            />
                        </div>
                        <div className="column is-4">
                            <Stat
                                value="$12,340"
                                label="Expenses"
                                icon="cart"
                                color={ElementColor.Danger}
                                trend={{ label: "+3% vs last month", direction: StatTrendDirection.Down }}
                            />
                        </div>
                        <div className="column is-4">
                            <Stat
                                value="99.2%"
                                label="Availability"
                                icon="activity"
                                color={ElementColor.Success}
                                trend={{ label: "No change", direction: StatTrendDirection.Neutral }}
                            />
                        </div>
                    </div>
                </div>

                {/* Colors */}
                <div className="box">
                    <p className="subtitle is-5">Color variants</p>
                    <div className="columns is-multiline">
                        {([
                            [ElementColor.Default,  "Default" ],
                            [ElementColor.Primary,  "Primary" ],
                            [ElementColor.Link,     "Link"    ],
                            [ElementColor.Info,     "Info"    ],
                            [ElementColor.Success,  "Success" ],
                            [ElementColor.Warning,  "Warning" ],
                            [ElementColor.Danger,   "Danger"  ],
                        ] as const).map(([c, label]) => (
                            <div key={c} className="column is-3">
                                <Stat value="42" label={label} color={c} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* No icon */}
                <div className="box">
                    <p className="subtitle is-5">Without icon</p>
                    <div className="columns">
                        <div className="column is-4">
                            <Stat value="500 ms" label="P95 Latency" color={ElementColor.Warning} />
                        </div>
                        <div className="column is-4">
                            <Stat value="0" label="Critical Alerts" color={ElementColor.Danger} />
                        </div>
                    </div>
                </div>

                {/* ── OtpInput ─────────────────────────────────────────── */}
                <h1 className="title is-3 mt-6">OtpInput</h1>

                {/* Default 6-digit */}
                <div className="box">
                    <p className="subtitle is-5">Default (6 digits)</p>
                    <OtpInput value={otp6} onChange={setOtp6} autoFocus />
                    <p className="help mt-2">Value: <code>{otp6 || "—"}</code></p>
                </div>

                {/* 4-digit */}
                <div className="box">
                    <p className="subtitle is-5">4-digit PIN</p>
                    <OtpInput value={otp4} onChange={setOtp4} length={4} />
                    <p className="help mt-2">Value: <code>{otp4 || "—"}</code></p>
                </div>

                {/* Password */}
                <div className="box">
                    <p className="subtitle is-5">Password type</p>
                    <OtpInput value={otpPwd} onChange={setOtpPwd} type="password" />
                    <p className="help mt-2">Value: <code>{otpPwd || "—"}</code></p>
                </div>

                {/* Alphanumeric */}
                <div className="box">
                    <p className="subtitle is-5">Alphanumeric (numbersOnly=false)</p>
                    <OtpInput value={otpAlph} onChange={setOtpAlph} numbersOnly={false} />
                    <p className="help mt-2">Value: <code>{otpAlph || "—"}</code></p>
                </div>

                {/* Disabled */}
                <div className="box">
                    <p className="subtitle is-5">Disabled</p>
                    <OtpInput value={otpDis} onChange={setOtpDis} disabled />
                </div>

                {/* Colors */}
                <div className="box">
                    <p className="subtitle is-5">Color variants</p>
                    <div className="is-flex" style={{ flexDirection: "column", gap: "1rem" }}>
                        {([
                            [ElementColor.Default, "Default"],
                            [ElementColor.Primary, "Primary"],
                            [ElementColor.Success, "Success"],
                            [ElementColor.Warning, "Warning"],
                            [ElementColor.Danger,  "Danger" ],
                            [ElementColor.Info,    "Info"   ],
                        ] as const).map(([c, label]) => (
                            <div key={c} className="is-flex is-align-items-center" style={{ gap: "1rem" }}>
                                <span className="has-text-grey is-size-7" style={{ width: 60 }}>{label}</span>
                                <OtpInput value="" onChange={() => {}} color={c} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sizes */}
                <div className="box">
                    <p className="subtitle is-5">Sizes</p>
                    <div className="is-flex" style={{ flexDirection: "column", gap: "1rem" }}>
                        {([
                            [ElementSize.Small,  "Small" ],
                            [ElementSize.Normal, "Normal"],
                            [ElementSize.Medium, "Medium"],
                            [ElementSize.Large,  "Large" ],
                        ] as const).map(([s, label]) => (
                            <div key={s} className="is-flex is-align-items-center" style={{ gap: "1rem" }}>
                                <span className="has-text-grey is-size-7" style={{ width: 60 }}>{label}</span>
                                <OtpInput value="" onChange={() => {}} size={s} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatAndOtpInputExamples;
