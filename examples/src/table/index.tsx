import { FC, useState } from "react";

import Table from "@bodynarf/react.components/components/table";
import { SortColumn, TableHeading } from "@bodynarf/react.components";

const HEADINGS: Array<TableHeading> = [
    { caption: "ID",       sortable: true,  name: "id"       },
    { caption: "Name",     sortable: true,  name: "name"     },
    { caption: "Role",     sortable: true,  name: "role"     },
    { caption: "Status",   sortable: false, name: "status"   },
    { caption: "Joined",   sortable: true,  name: "joined"   },
];

type User = { id: number; name: string; role: string; status: string; joined: string; };

const USERS: Array<User> = [
    { id: 1, name: "Alice Johnson",    role: "Admin",      status: "Active",   joined: "2022-01-15" },
    { id: 2, name: "Bob Smith",        role: "Developer",  status: "Active",   joined: "2022-03-22" },
    { id: 3, name: "Carol Williams",   role: "Designer",   status: "Inactive", joined: "2021-11-08" },
    { id: 4, name: "David Brown",      role: "Developer",  status: "Active",   joined: "2023-02-14" },
    { id: 5, name: "Eve Davis",        role: "Manager",    status: "Active",   joined: "2020-07-01" },
];

const STATUS_COLOR: Record<string, string> = {
    Active:   "is-success",
    Inactive: "is-danger",
};

const TableExamples: FC = () => {
    const [sort, setSort] = useState<SortColumn | undefined>();
    const [selected, setSelected] = useState<Array<string>>([]);

    const sorted = [...USERS].sort((a, b) => {
        if (!sort) return 0;
        const key = sort.columnName as keyof User;
        const cmp = String(a[key]).localeCompare(String(b[key]));
        return sort.ascending ? cmp : -cmp;
    });

    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-3">Table</h1>

                {/* Basic */}
                <div className="box">
                    <p className="subtitle is-5">Basic</p>
                    <Table headings={HEADINGS}>
                        {USERS.map(u => (
                            <tr key={u.id}>
                                <td>{u.id}</td>
                                <td>{u.name}</td>
                                <td>{u.role}</td>
                                <td><span className={`tag ${STATUS_COLOR[u.status]}`}>{u.status}</span></td>
                                <td>{u.joined}</td>
                            </tr>
                        ))}
                    </Table>
                </div>

                {/* Sortable */}
                <div className="box">
                    <p className="subtitle is-5">Sortable Columns</p>
                    <p className="help mb-2">Click a column header to sort.</p>
                    <Table
                        headings={HEADINGS}
                        currentSortColumn={sort}
                        onHeaderClick={(heading) => {
                            if (!heading.sortable || !heading.name) return;
                            const name = heading.name;
                            setSort(prev =>
                                prev?.columnName === name
                                    ? { columnName: name, ascending: !prev.ascending }
                                    : { columnName: name, ascending: true }
                            );
                        }}
                    >
                        {sorted.map(u => (
                            <tr key={u.id}>
                                <td>{u.id}</td>
                                <td>{u.name}</td>
                                <td>{u.role}</td>
                                <td><span className={`tag ${STATUS_COLOR[u.status]}`}>{u.status}</span></td>
                                <td>{u.joined}</td>
                            </tr>
                        ))}
                    </Table>
                </div>

                {/* Selectable rows */}
                <div className="box">
                    <p className="subtitle is-5">Selectable Rows</p>
                    <p className="help mb-2">Selected: {selected.length > 0 ? selected.join(", ") : "none"}</p>
                    <Table
                        headings={HEADINGS}
                        selectable
                        selectedRows={selected}
                        onSelectedRowsChange={setSelected}
                    >
                        {USERS.map(u => (
                            <tr key={String(u.id)}>
                                <td>{u.id}</td>
                                <td>{u.name}</td>
                                <td>{u.role}</td>
                                <td><span className={`tag ${STATUS_COLOR[u.status]}`}>{u.status}</span></td>
                                <td>{u.joined}</td>
                            </tr>
                        ))}
                    </Table>
                </div>

                {/* Visual modifiers */}
                <div className="box">
                    <p className="subtitle is-5">Visual Modifiers</p>

                    <p className="help mb-2">Bordered + Hoverable + Zebra + Narrow</p>
                    <Table headings={HEADINGS} hasBorder hoverable zebra narrow>
                        {USERS.slice(0, 3).map(u => (
                            <tr key={u.id}>
                                <td>{u.id}</td><td>{u.name}</td><td>{u.role}</td>
                                <td><span className={`tag ${STATUS_COLOR[u.status]}`}>{u.status}</span></td>
                                <td>{u.joined}</td>
                            </tr>
                        ))}
                    </Table>
                </div>

                {/* Full width */}
                <div className="box">
                    <p className="subtitle is-5">Full Width</p>
                    <Table headings={HEADINGS} fullWidth>
                        {USERS.slice(0, 3).map(u => (
                            <tr key={u.id}>
                                <td>{u.id}</td><td>{u.name}</td><td>{u.role}</td>
                                <td><span className={`tag ${STATUS_COLOR[u.status]}`}>{u.status}</span></td>
                                <td>{u.joined}</td>
                            </tr>
                        ))}
                    </Table>
                </div>

                {/* Empty table */}
                <div className="box">
                    <p className="subtitle is-5">Empty State</p>
                    <Table headings={HEADINGS}>
                        <tr>
                            <td colSpan={5} className="has-text-centered has-text-grey">
                                No data available
                            </td>
                        </tr>
                    </Table>
                </div>
            </div>
        </section>
    );
};

export default TableExamples;
