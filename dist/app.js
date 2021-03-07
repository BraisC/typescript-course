/* eslint-disable max-classes-per-file */
class Department {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        // private name: string;
        this.employees = [];
        // this.name = n;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super('IT', id);
        this.admins = admins;
        [this.lastAdmin] = admins;
    }
    get mostRecentAdmin() {
        if (this.lastAdmin)
            return this.lastAdmin;
        throw new Error('No admin found');
    }
    set mostRecentAdmin(value) {
        console.log(value);
        if (!value)
            throw new Error('Please provide a valid name');
        this.addAdmin(value);
    }
    addEmployee(employee) {
        if (employee === 'Brais') {
            return;
        }
        this.employees.push(employee);
    }
    addAdmin(admin) {
        this.admins.push(admin);
    }
    describe() {
        console.log(this.name, this.id);
    }
    static getInstance() {
        if (this.instance)
            return this.instance;
        this.instance = new ITDepartment('34', ['Max']);
        return this.instance;
    }
}
const accounting = ITDepartment.getInstance();
console.log(accounting);
accounting.mostRecentAdmin = 'Nacho';
console.log(accounting.mostRecentAdmin);
console.log(accounting);
accounting.addEmployee('pepe');
console.log(accounting);
//# sourceMappingURL=app.js.map