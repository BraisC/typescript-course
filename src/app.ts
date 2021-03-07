class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log(this.name);
  }
}

const dep = new Department('Prueba');

console.log(dep);
