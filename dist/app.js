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
const accounting = new ITDepartment('34', ['max']);
console.log(accounting);
//# sourceMappingURL=app.js.map