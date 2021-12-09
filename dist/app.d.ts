declare function Logger(logString: string): (constructor: Function) => void;
declare function WithTemplate(template: string, hookId: string): <T extends new (...args: any[]) => {
    name: string;
}>(originalConstructor: T) => {
    new (..._: any[]): {
        name: string;
    };
} & T;
declare class Person {
    name: string;
    constructor();
}
declare const pers: Person;
declare function Log(target: any, propertyName: string | Symbol): void;
declare function Log2(target: any, name: string, descriptor: PropertyDescriptor): void;
declare function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor): void;
declare function Log4(target: any, name: string | Symbol, position: number): void;
declare class Product {
    title: string;
    static age: number;
    private _price;
    set price(val: number);
    constructor(t: string, p: number);
    getPriceWithTax(tax: number): number;
}
declare const p1: Product;
