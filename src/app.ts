class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
}

const dep = new Department('Prueba');

console.log(dep);
