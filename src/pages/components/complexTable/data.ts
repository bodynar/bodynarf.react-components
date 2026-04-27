import { ComplexTableItem } from "@bodynarf/react.components";

/** Employee entity for ComplexTable demo */
export type Employee = ComplexTableItem & {
    name: string;
    department: string;
    role: string;
    salary: number;
};

/** Number of items per page in the demo */
export const PAGE_SIZE = 5;

/** Simulated dataset of 35 employees */
export const ALL_EMPLOYEES: Array<Employee> = [
    { id: "1", name: "Alice Johnson", department: "Engineering", role: "Senior Dev", salary: 95000 },
    { id: "2", name: "Bob Smith", department: "Marketing", role: "Manager", salary: 78000 },
    { id: "3", name: "Carol White", department: "Sales", role: "Director", salary: 120000 },
    { id: "4", name: "David Brown", department: "Engineering", role: "Junior Dev", salary: 65000 },
    { id: "5", name: "Emma Davis", department: "HR", role: "Specialist", salary: 55000 },
    { id: "6", name: "Frank Wilson", department: "Finance", role: "Analyst", salary: 72000 },
    { id: "7", name: "Grace Lee", department: "Engineering", role: "Tech Lead", salary: 110000 },
    { id: "8", name: "Henry Taylor", department: "Marketing", role: "Specialist", salary: 60000 },
    { id: "9", name: "Iris Anderson", department: "Sales", role: "Representative", salary: 52000 },
    { id: "10", name: "Jack Thompson", department: "Engineering", role: "Architect", salary: 130000 },
    { id: "11", name: "Karen Martinez", department: "HR", role: "Manager", salary: 75000 },
    { id: "12", name: "Liam Garcia", department: "Finance", role: "Manager", salary: 88000 },
    { id: "13", name: "Mia Robinson", department: "Engineering", role: "Senior Dev", salary: 98000 },
    { id: "14", name: "Noah Clark", department: "Marketing", role: "Director", salary: 115000 },
    { id: "15", name: "Olivia Rodriguez", department: "Sales", role: "Manager", salary: 82000 },
    { id: "16", name: "Peter Lewis", department: "Engineering", role: "Junior Dev", salary: 68000 },
    { id: "17", name: "Quinn Walker", department: "HR", role: "Director", salary: 95000 },
    { id: "18", name: "Rachel Hall", department: "Finance", role: "Analyst", salary: 70000 },
    { id: "19", name: "Samuel Young", department: "Engineering", role: "Senior Dev", salary: 92000 },
    { id: "20", name: "Taylor Allen", department: "Marketing", role: "Specialist", salary: 58000 },
    { id: "21", name: "Uma King", department: "Sales", role: "Representative", salary: 50000 },
    { id: "22", name: "Victor Wright", department: "Engineering", role: "Tech Lead", salary: 105000 },
    { id: "23", name: "Wendy Scott", department: "HR", role: "Specialist", salary: 54000 },
    { id: "24", name: "Xavier Torres", department: "Finance", role: "Director", salary: 125000 },
    { id: "25", name: "Yvonne Nguyen", department: "Engineering", role: "Junior Dev", salary: 63000 },
    { id: "26", name: "Zachary Hill", department: "Marketing", role: "Manager", salary: 80000 },
    { id: "27", name: "Amy Baker", department: "Sales", role: "Director", salary: 118000 },
    { id: "28", name: "Brian Gonzalez", department: "Engineering", role: "Senior Dev", salary: 96000 },
    { id: "29", name: "Cynthia Nelson", department: "HR", role: "Manager", salary: 74000 },
    { id: "30", name: "Daniel Carter", department: "Finance", role: "Analyst", salary: 69000 },
    { id: "31", name: "Elena Mitchell", department: "Engineering", role: "Architect", salary: 135000 },
    { id: "32", name: "Felix Perez", department: "Marketing", role: "Specialist", salary: 59000 },
    { id: "33", name: "Gina Roberts", department: "Sales", role: "Manager", salary: 84000 },
    { id: "34", name: "Harold Turner", department: "Engineering", role: "Tech Lead", salary: 108000 },
    { id: "35", name: "Ingrid Phillips", department: "Finance", role: "Manager", salary: 86000 },
];
