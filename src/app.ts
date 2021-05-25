/* eslint-disable @typescript-eslint/ban-types */
function Logger(logString: string) {
  return (constructor: Function) => {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger('Logging - Person')
class Person {
  name: string;

  constructor() {
    this.name = 'Max';
    console.log('Creating person object...');
  }
}

const pers = new Person();

console.log(pers);
