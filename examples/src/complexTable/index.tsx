import { FC, useState, useCallback } from "react";

import ComplexTable from "@bodynarf/react.components/components/complexTable";
import { ComplexTableItem, ComplexTableItemProps, TableHeading, useComplexTable } from "@bodynarf/react.components";

// ---------- Data types ----------

type Employee = ComplexTableItem & {
    name: string;
    department: string;
    role: string;
    salary: number;
    active: boolean;
};

// ---------- Mock data ----------

const ALL_EMPLOYEES: Array<Employee> = Array.from({ length: 47 }, (_, i) => ({
    id: String(i + 1),
    name: ["Alice", "Bob", "Carol", "David", "Eve", "Frank", "Grace", "Henry"][i % 8] + " " + String(i + 1),
    department: ["Engineering", "Design", "Marketing", "HR", "Finance"][i % 5],
    role: ["Developer", "Designer", "Manager", "Analyst", "Lead"][i % 5],
    salary: 50000 + (i % 10) * 5000,
    active: i % 7 !== 0,
}));

const HEADINGS: Array<TableHeading> = [
    { caption: "ID",         sortable: true,  name: "id"         },
    { caption: "Name",       sortable: true,  name: "name"       },
    { caption: "Department", sortable: true,  name: "department" },
    { caption: "Role",       sortable: true,  name: "role"       },
    { caption: "Salary",     sortable: true,  name: "salary"     },
    { caption: "Active",     sortable: false, name: "active"     },
];

const PAGE_SIZE = 10;

// ---------- Row component ----------

const EmployeeRow: FC<ComplexTableItemProps<Employee>> = ({ item, selectionCell }) => (
    <tr>
        {selectionCell}
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.department}</td>
        <td>{item.role}</td>
        <td>${item.salary.toLocaleString()}</td>
        <td>
            <span className={`tag ${item.active ? "is-success" : "is-danger"}`}>
                {item.active ? "Active" : "Inactive"}
            </span>
        </td>
    </tr>
);

// ---------- Example ----------

const ComplexTableExamples: FC = () => {
    const [items, setItems] = useState<Array<Employee>>(ALL_EMPLOYEES.slice(0, PAGE_SIZE));

    const loadPage = useCallback(async (params: { offset: number; limit: number; search?: string; sortBy?: string; sortOrder?: "asc" | "desc" }) => {
        // Simulate server-side filtering, sorting, pagination
        let data = [...ALL_EMPLOYEES];

        if (params.search) {
            const q = params.search.toLowerCase();
            data = data.filter(e =>
                e.name.toLowerCase().includes(q) ||
                e.department.toLowerCase().includes(q) ||
                e.role.toLowerCase().includes(q)
            );
        }

        if (params.sortBy) {
            data.sort((a, b) => {
                const key = params.sortBy as keyof Employee;
                const cmp = String(a[key]).localeCompare(String(b[key]), undefined, { numeric: true });
                return params.sortOrder === "desc" ? -cmp : cmp;
            });
        }

        const page = data.slice(params.offset, params.offset + params.limit);
        setItems(page as Array<Employee>);
        return data.length;
    }, []);

    const { tableProps, selectedRows } = useComplexTable({
        totalCount: ALL_EMPLOYEES.length,
        pageSize: PAGE_SIZE,
        loadPage,
    });

    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-3">ComplexTable</h1>

                <div className="box">
                    <p className="subtitle is-5">Full-featured Table with Pagination, Search &amp; Sort</p>
                    <p className="help mb-3">
                        {ALL_EMPLOYEES.length} total employees. Selected: <strong>{selectedRows.length > 0 ? selectedRows.join(", ") : "none"}</strong>
                    </p>

                    <ComplexTable
                        {...tableProps}
                        items={items}
                        headings={HEADINGS}
                        noItemsCaption="No employees found"
                        itemComponent={EmployeeRow}
                        searchConfig={{
                            searchPlaceholder: "Search by name, department, role...",
                            noItemsFoundBySearchCaption: "No employees match the search query",
                        }}
                        tableConfig={{
                            hoverable: true,
                            hasBorder: true,
                            fullWidth: true,
                            zebra: true,
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default ComplexTableExamples;
