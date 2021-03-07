declare class Department {
    private name;
    private employees;
    constructor(name: string);
    describe(this: Department): void;
    addEmployee(employee: string): void;
}
declare const dep: Department;
