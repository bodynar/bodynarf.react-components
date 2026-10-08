import { FC, useState } from "react";

import DndList from "@bodynarf/react.components/components/dndList";
import { ElementColor, Tag } from "@bodynarf/react.components";


type Task = {
    id: number;
    title: string;
    priority: ElementColor;
};

const initialTasks: Task[] = [
    { id: 1, title: "Design the landing page", priority: ElementColor.Primary },
    { id: 2, title: "Fix the login bug", priority: ElementColor.Danger },
    { id: 3, title: "Write API docs", priority: ElementColor.Info },
    { id: 4, title: "Refactor the auth module", priority: ElementColor.Warning },
    { id: 5, title: "Set up CI pipeline", priority: ElementColor.Success },
];

const DndListExamples: FC = () => {
    const [tasks, setTasks] = useState<Task[]>(initialTasks);
    const [handled, setHandled] = useState<Task[]>(initialTasks);

    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-3">Drag &amp; Drop List</h1>

                <p className="block">
                    Reorder items with native HTML5 drag-and-drop. <code>onReorder</code> receives the new array.
                </p>

                {/* Whole-item draggable */}
                <div className="box">
                    <p className="subtitle is-5">Whole item draggable</p>
                    <p className="help mb-2">Grab anywhere on the row to drag it.</p>
                    <DndList
                        items={tasks}
                        onReorder={setTasks}
                    >
                        {(task) => (
                            <div className="is-flex is-align-items-center is-justify-content-space-between" style={{ width: "100%" }}>
                                <span>
                                    <strong>#{task.id}</strong>
                                    &nbsp;{task.title}
                                </span>
                                <Tag content={task.priority} style={task.priority} />
                            </div>
                        )}
                    </DndList>
                    <p className="help mt-3">
                        Order: {tasks.map(t => t.id).join(" → ")}
                    </p>
                </div>

                {/* With drag handle */}
                <div className="box">
                    <p className="subtitle is-5">With drag handle</p>
                    <p className="help mb-2">Only the handle icon shows the grab cursor; the row itself stays selectable.</p>
                    <DndList
                        withHandle
                        items={handled}
                        onReorder={setHandled}
                    >
                        {(task, index) => (
                            <span>
                                <strong>{index + 1}.</strong>
                                &nbsp;{task.title}
                            </span>
                        )}
                    </DndList>
                    <p className="help mt-3">
                        Order: {handled.map(t => t.id).join(" → ")}
                    </p>
                </div>

                {/* Reset */}
                <div className="box">
                    <button
                        type="button"
                        className="button is-light"
                        onClick={() => { setTasks(initialTasks); setHandled(initialTasks); }}
                    >
                        Reset order
                    </button>
                </div>
            </div>
        </section>
    );
};

export default DndListExamples;
