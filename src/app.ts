/* eslint-disable no-underscore-dangle */
/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/ban-types */
function Logger(logString: string) {
  return (constructor: Function) => {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return (constructor: any) => {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    hookEl && (hookEl.innerHTML = template);
    hookEl && (hookEl.querySelector('h1')!.textContent = p.name);
  };
}

@Logger('Logging - Person')
@WithTemplate('<h1>My person object</h1>', 'app')
class Person {
  name: string;

  constructor() {
    this.name = 'Max';
    console.log('Creating person object...');
  }
}

const pers = new Person();

console.log(pers);

//--------------------

function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator');
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
  console.log('Method decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log('Parameter decorator');
  console.log(target);
  console.log(name);
  console.log(position);
}
class Product {
  @Log
  title: string;

  @Log
  static age = 0;

  private _price: number;

  @Log2
  set price(val: number) {
    console.info(val);
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price');
    }
  }

  constructor(t: string) {
    this.title = t;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

const p1 = new Product('Book');

p1.price = 10;
console.info(p1.getPriceWithTax(2));
