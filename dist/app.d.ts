declare class Department {
    name: string;
    private employees;
    constructor(n: string);
    describe(this: Department): void;
    addEmployee(employee: string): void;
}
declare const dep: Department;
