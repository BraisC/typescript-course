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
const dep = new Department('Prueba', '2');
console.log(dep);
dep.addEmployee('manolo');
console.log(dep);
//# sourceMappingURL=app.js.map