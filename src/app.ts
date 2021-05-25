/* eslint-disable @typescript-eslint/ban-types */
function Logger(constructor: Function) {
  console.log('Logging...');
  console.log(constructor);
}

@Logger
class Person {
  name: string;

  constructor() {
    this.name = 'Max';
    console.log('Creating person object...');
  }
}

const pers = new Person();

console.log(pers);
