/* eslint-disable max-classes-per-file */
abstract class Department {
  // private name: string;

  protected employees: string[] = [];

  constructor(protected name: string, protected readonly id: string) {
    // this.name = n;
  }

  abstract describe(this: Department): void;

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

  describe(this: ITDepartment) {
    console.log(this.name, this.id);
  }
}

const accounting = new ITDepartment('34', ['Max']);

console.log(accounting);

console.log(accounting.mostRecentAdmin);
accounting.mostRecentAdmin = 'Nacho';
console.log(accounting);
accounting.addEmployee('pepe');
console.log(accounting);
