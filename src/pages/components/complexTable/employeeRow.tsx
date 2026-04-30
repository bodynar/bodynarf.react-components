import { JSX } from "react";

import { ComplexTableItemProps, Icon } from "@bodynarf/react.components";

import { Employee } from "./data";

/** Table row renderer for the Employee type used in ComplexTable demo */
const EmployeeRow = ({
    item, selectionCell, actions, onRowClick
}: ComplexTableItemProps<Employee>): JSX.Element => {
    return (
        <tr
            onClick={onRowClick !== undefined ? () => onRowClick(item.id) : undefined}
            style={onRowClick !== undefined ? { cursor: "pointer" } : undefined}
        >
            {selectionCell}
            <td>{item.name}</td>
            <td>{item.department}</td>
            <td>{item.role}</td>
            <td>${item.salary.toLocaleString()}</td>
            {actions !== undefined && actions.length > 0 && (
                <td>
                    <div className="is-flex" style={{ gap: "8px" }}>
                        {actions.map((action, i) => {
                            const { onClick, ...iconProps } = action;
                            return (
                                <Icon
                                    key={i}
                                    {...iconProps}
                                    onClick={() => onClick(item.id)}
                                />
                            );
                        })}
                    </div>
                </td>
            )}
        </tr>
    );
};

export default EmployeeRow;
