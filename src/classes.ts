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

  private static instance: ITDepartment;

  private constructor(id: string, public admins: string[]) {
    super('IT', id);
    [this.lastAdmin] = admins;
  }

  get mostRecentAdmin() {
    if (this.lastAdmin) return this.lastAdmin;
    throw new Error('No admin found');
  }

  set mostRecentAdmin(value: string) {
    console.log(value);
    if (!value) throw new Error('Please provide a valid name');
    this.addAdmin(value);
  }

  addEmployee(employee: string) {
    if (employee === 'Brais') {
      return;
    }
    this.employees.push(employee);
  }

  addAdmin(admin: string) {
    this.admins.push(admin);
  }

  describe(this: ITDepartment) {
    console.log(this.name, this.id);
  }

  static getInstance() {
    if (this.instance) return this.instance;
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
