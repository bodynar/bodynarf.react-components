import { FC, useState } from "react";

import DndListComponent from "@bodynarf/react.components/components/dndList";

import ComponentUseCase from "@app/sharedComponents/useCase";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";

interface Task {
    id: number;
    caption: string;
    done: boolean;
}

const initialTasks: Task[] = [
    { id: 1, caption: "Water the plants", done: false },
    { id: 2, caption: "Buy groceries", done: true },
    { id: 3, caption: "Read a book", done: false },
    { id: 4, caption: "Call grandma", done: false },
];

const renderItem = (item: Task) => (
    <div className="is-flex is-align-items-center" style={{ gap: "8px", padding: "4px 8px" }}>
        <span className={`icon ${item.done ? "has-text-success" : "has-text-grey-light"}`}>
            <i className={`bi ${item.done ? "bi-check-circle-fill" : "bi-circle"}`} />
        </span>
        <span className={item.done ? "has-text-grey" : ""} style={item.done ? { textDecoration: "line-through" } : undefined}>
            {item.caption}
        </span>
    </div>
);

/** DndList component demo */
const DndList: FC = () => {
    const [tasks, setTasks] = useState<Task[]>(initialTasks);
    const [handledTasks, setHandledTasks] = useState<Task[]>(initialTasks);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="DndList"
                version="1.16"
                baseTypeName="BaseElementProps"
                description="Reorderable list built on native HTML5 drag-and-drop (no external dependencies). Items are rendered through a render prop; the reordered array is reported via `onReorder`."
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Provide the items (each must have a stable unique `id`), a render prop and an `onReorder` handler. Drag an item to a new position."
                code={
                    <CodeExample
                        code={[
                            `import { useState } from "react";`,
                            `import DndList from "@bodynarf/react.components/components/dndList";`,
                            "",
                            `const [items, setItems] = useState([{ id: 1, caption: "First" }, …]);`,
                            "",
                            "<DndList",
                            "    items={items}",
                            "    onReorder={setItems}",
                            ">{item =>",
                            "    <div>{item.caption}</div>",
                            "}</DndList>",
                        ].join("\n")}
                    />
                }
            >
                <DndListComponent
                    items={tasks}
                    onReorder={setTasks}
                >
                    {renderItem}
                </DndListComponent>
            </ComponentUseCase>

            <hr />

            <div className="block">
                <h4 className="subtitle is-4">
                    Custom component props
                </h4>
            </div>

            <ComponentUseCase
                captionIsCode
                caption="withHandle"
                description="Show a dedicated drag handle icon — the item body keeps the default cursor, so text selection inside items stays usable."
                code={
                    <CodeExample
                        code={[
                            `import DndList from "@bodynarf/react.components/components/dndList";`,
                            "",
                            "<DndList",
                            "    withHandle",
                            "    items={items}",
                            "    onReorder={setItems}",
                            ">{item =>",
                            "    <div>{item.caption}</div>",
                            "}</DndList>",
                        ].join("\n")}
                    />
                }
            >
                <DndListComponent
                    withHandle
                    items={handledTasks}
                    onReorder={setHandledTasks}
                >
                    {renderItem}
                </DndListComponent>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onReorder"
                description="Called with the full reordered array whenever the user finishes dragging an item. The current order of both lists above is:"
                code={
                    <CodeExample
                        code={[
                            `const handleReorder = (items: Task[]) => {`,
                            `    setTasks(items);`,
                            "",
                            `    console.log(items.map(x => x.caption).join(" -> "));`,
                            `};`,
                            "",
                            "<DndList",
                            "    items={items}",
                            "    onReorder={handleReorder}",
                            ">{…}</DndList>",
                        ].join("\n")}
                    />
                }
            >
                <ol className="mb-0">
                    {tasks.map(x => <li key={x.id}>{x.caption}</li>)}
                </ol>
            </ComponentUseCase>
        </section>
    );
};

export default DndList;
