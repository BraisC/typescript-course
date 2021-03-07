declare class Department {
    private name;
    private readonly id;
    private employees;
    constructor(name: string, id: string);
    describe(this: Department): void;
    addEmployee(employee: string): void;
}
declare const dep: Department;
