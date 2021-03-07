/* eslint-disable max-classes-per-file */
class Department {
  // private name: string;

  protected employees: string[] = [];

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
  private lastAdmin: string;

  get mostRecentAdmin() {
    if (this.lastAdmin) return this.lastAdmin;
    throw new Error('No admin found');
  }

  set mostRecentAdmin(value: string) {
    console.log(value);
    if (!value) throw new Error('Please provide a valid name');
    this.addEmployee(value);
  }

  constructor(id: string, public admins: string[]) {
    super('IT', id);
    [this.lastAdmin] = admins;
  }

  addEmployee(employee: string) {
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
