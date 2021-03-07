class Department {
  name: string;

  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log(this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
}

const dep = new Department('Prueba');

console.log(dep);

dep.addEmployee('manolo');

console.log(dep);
