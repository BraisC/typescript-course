interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

// eslint-disable-next-line prefer-const
user1 = {
  name: 'Brais',
  age: 33,
  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  },
};

user1.greet('Hola');
