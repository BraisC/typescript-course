declare class Department {
    private name;
    private readonly id;
    private employees;
    constructor(name: string, id: string);
    describe(this: Department): void;
    addEmployee(employee: string): void;
}
declare class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]);
}
declare const dep: Department;
declare const accounting: ITDepartment;
