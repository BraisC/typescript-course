/* eslint-disable max-classes-per-file */
class Department {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        // private name: string;
        this.employees = [];
        // this.name = n;
    }
    describe() {
        console.log(this.name, this.id);
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
        this.addEmployee(value);
    }
    addEmployee(employee) {
        if (employee === 'Brais') {
            return;
        }
        this.employees.push(employee);
    }
}
const dep = new Department('Prueba', '2');
console.log(dep);
dep.addEmployee('manolo');
console.log(dep);
const accounting = new ITDepartment('34', ['Max']);
console.log(accounting);
console.log(accounting.mostRecentAdmin);
accounting.mostRecentAdmin = 'Nacho';
console.log(accounting);
accounting.addEmployee('pepe');
console.log(accounting);
//# sourceMappingURL=app.js.map