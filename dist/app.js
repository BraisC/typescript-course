var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/ban-types */
function Logger(logString) {
    return (constructor) => {
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    return (constructor) => {
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        hookEl && (hookEl.innerHTML = template);
        hookEl && (hookEl.querySelector('h1').textContent = p.name);
    };
}
let Person = class Person {
    constructor() {
        this.name = 'Max';
        console.log('Creating person object...');
    }
};
Person = __decorate([
    Logger('Logging - Person'),
    WithTemplate('<h1>My person object</h1>', 'app')
], Person);
const pers = new Person();
console.log(pers);
//--------------------
function Log(target, propertyName) {
    console.log('Property decorator');
    console.log(target, propertyName);
}
class Product {
    constructor(t) {
        this.title = t;
    }
    set price(val) {
        console.info(val);
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error('Invalid price');
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
const p1 = new Product('Book');
p1.price = 10;
console.info(p1.getPriceWithTax(2));
//# sourceMappingURL=app.js.map