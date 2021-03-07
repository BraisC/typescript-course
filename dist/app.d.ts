declare abstract class Department {
    protected name: string;
    protected readonly id: string;
    protected employees: string[];
    constructor(name: string, id: string);
    abstract describe(this: Department): void;
    addEmployee(employee: string): void;
}
declare class ITDepartment extends Department {
    admins: string[];
    private lastAdmin;
    get mostRecentAdmin(): string;
    set mostRecentAdmin(value: string);
    constructor(id: string, admins: string[]);
    addEmployee(employee: string): void;
    describe(this: ITDepartment): void;
}
declare const accounting: ITDepartment;
