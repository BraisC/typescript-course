class Department {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log(this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
}
const dep = new Department('Prueba');
console.log(dep);
dep.addEmployee('manolo');
console.log(dep);
//# sourceMappingURL=app.js.map