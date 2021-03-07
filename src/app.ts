class Department {
  // private name: string;

  private employees: string[] = [];

  constructor(private name: string, private readonly id: string) {
    // this.name = n;
  }

  describe(this: Department) {
    console.log(this.name, this.id);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
}

const dep = new Department('Prueba', '2');

console.log(dep);

dep.addEmployee('manolo');

console.log(dep);
