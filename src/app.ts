/* eslint-disable max-classes-per-file */
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

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super('IT', id);
  }
}

const dep = new Department('Prueba', '2');

console.log(dep);

dep.addEmployee('manolo');

console.log(dep);

const accounting = new ITDepartment('34', ['max']);

console.log(accounting);
