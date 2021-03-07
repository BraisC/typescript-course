interface Named {
  name?: string;
}
interface Named {
  age: number;
  outPutName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;

  age: number;

  constructor(n?: string) {
    this.name = n;
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(`${phrase} ${this.name}`);
    } else {
      console.log('Hi');
    }
  }
}
let user1: Greetable;

// eslint-disable-next-line prefer-const
user1 = new Person('Brais');

user1.greet('Hola');

interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line prefer-const
add = (n1: number, n2: number) => n1 + n2;
