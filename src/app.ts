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

class Product {
  @Log
  title: string;

  private _price: number;

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

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}

const p1 = new Product('Book');

p1.price = 10;
console.info(p1.getPriceWithTax(2));
