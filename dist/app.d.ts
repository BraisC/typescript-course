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
    private static instance;
    private constructor();
    get mostRecentAdmin(): string;
    set mostRecentAdmin(value: string);
    addEmployee(employee: string): void;
    addAdmin(admin: string): void;
    describe(this: ITDepartment): void;
    static getInstance(): ITDepartment;
}
declare const accounting: ITDepartment;
