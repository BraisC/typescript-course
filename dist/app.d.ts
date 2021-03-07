declare class Department {
    private name;
    private readonly id;
    protected employees: string[];
    constructor(name: string, id: string);
    describe(this: Department): void;
    addEmployee(employee: string): void;
}
declare class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]);
    addEmployee(employee: string): void;
}
declare const dep: Department;
declare const accounting: ITDepartment;
