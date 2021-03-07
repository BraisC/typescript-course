declare class Department {
    name: string;
    constructor(n: string);
    describe(this: Department): void;
}
declare const dep: Department;
