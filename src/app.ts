interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;

  age: number;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}
let user1: Greetable;

// eslint-disable-next-line prefer-const
user1 = new Person('Brais');

user1.greet('Hola');
