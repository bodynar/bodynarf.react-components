import { FC } from "react";

import Stack, { HStack, VStack } from "@bodynarf/react.components/components/stack";

const items = (count: number): string[] =>
    Array.from({ length: count }, (_, i) => `Item ${i + 1}`);

const StackExamples: FC = () => (
    <section className="section">
        <div className="container">
            <h1 className="title is-3">Stack</h1>
            <p className="subtitle is-6">
                Flexbox container that lays out its children with a configurable gap.
            </p>

            {/* Direction */}
            <div className="box">
                <p className="subtitle is-5">Direction</p>
                <div className="columns">
                    <div className="column">
                        <p className="help mb-1">column (default)</p>
                        <Stack>
                            {items(3).map(item => <span key={item} className="tag">{item}</span>)}
                        </Stack>
                    </div>
                    <div className="column">
                        <p className="help mb-1">row</p>
                        <Stack direction="row">
                            {items(3).map(item => <span key={item} className="tag">{item}</span>)}
                        </Stack>
                    </div>
                </div>
            </div>

            {/* Gap */}
            <div className="box">
                <p className="subtitle is-5">Gap</p>
                <div className="columns">
                    <div className="column">
                        <p className="help mb-1">default (8px)</p>
                        <Stack direction="row">
                            {items(4).map(item => <span key={item} className="tag">{item}</span>)}
                        </Stack>
                    </div>
                    <div className="column">
                        <p className="help mb-1">number — 24</p>
                        <Stack direction="row" gap={24}>
                            {items(4).map(item => <span key={item} className="tag">{item}</span>)}
                        </Stack>
                    </div>
                    <div className="column">
                        <p className="help mb-1">string — &quot;1.5rem&quot;</p>
                        <Stack direction="row" gap="1.5rem">
                            {items(4).map(item => <span key={item} className="tag">{item}</span>)}
                        </Stack>
                    </div>
                </div>
            </div>

            {/* HStack / VStack */}
            <div className="box">
                <p className="subtitle is-5">HStack / VStack shortcuts</p>
                <div className="columns">
                    <div className="column">
                        <p className="help mb-1">HStack</p>
                        <HStack gap={12}>
                            {items(3).map(item => <span key={item} className="tag is-info">{item}</span>)}
                        </HStack>
                    </div>
                    <div className="column">
                        <p className="help mb-1">VStack</p>
                        <VStack gap={12}>
                            {items(3).map(item => <span key={item} className="tag is-info">{item}</span>)}
                        </VStack>
                    </div>
                </div>
            </div>

            {/* Align & justify */}
            <div className="box">
                <p className="subtitle is-5">Align &amp; justify</p>
                <p className="help mb-2">
                    Row of items with different heights and extra free space — cross-axis <code>align</code> vs main-axis <code>justify</code>.
                </p>
                <div className="columns">
                    <div className="column">
                        <p className="help mb-1">align = &quot;center&quot;</p>
                        <Stack direction="row" gap={8} align="center">
                            {items(3).map((item, i) => (
                                <div
                                    key={item}
                                    className="tag is-primary"
                                    style={{ height: `${[32, 56, 40][i]}px` }}
                                >
                                    {item}
                                </div>
                            ))}
                        </Stack>
                    </div>
                    <div className="column">
                        <p className="help mb-1">align = &quot;flex-end&quot;</p>
                        <Stack direction="row" gap={8} align="flex-end">
                            {items(3).map((item, i) => (
                                <div
                                    key={item}
                                    className="tag is-primary"
                                    style={{ height: `${[32, 56, 40][i]}px` }}
                                >
                                    {item}
                                </div>
                            ))}
                        </Stack>
                    </div>
                </div>
                {(["flex-start", "center", "space-between"] as const).map(justify => (
                    <div key={justify} className="mb-3">
                        <p className="help mb-1">justify = &quot;{justify}&quot;</p>
                        <div style={{ border: "1px dashed #dbdbdb", padding: "4px" }}>
                            <Stack direction="row" gap={8} justify={justify}>
                                {items(3).map(item => <span key={item} className="tag is-info">{item}</span>)}
                            </Stack>
                        </div>
                    </div>
                ))}
            </div>

            {/* Wrap */}
            <div className="box">
                <p className="subtitle is-5">Wrap</p>
                <p className="help mb-2">Row with a constrained width and <code>wrap=&quot;wrap&quot;</code>.</p>
                <div style={{ maxWidth: "240px", border: "1px dashed #dbdbdb", padding: "4px" }}>
                    <Stack direction="row" gap={8} wrap="wrap">
                        {items(6).map(item => <span key={item} className="tag is-warning">{item}</span>)}
                    </Stack>
                </div>
            </div>
        </div>
    </section>
);

export default StackExamples;
