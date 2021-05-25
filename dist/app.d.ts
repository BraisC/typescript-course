declare function Logger(logString: string): (constructor: Function) => void;
declare function WithTemplate(template: string, hookId: string): (constructor: any) => void;
declare class Person {
    name: string;
    constructor();
}
declare const pers: Person;
declare function Log(target: any, propertyName: string | Symbol): void;
declare class Product {
    title: string;
    private _price;
    set price(val: number);
    constructor(t: string);
    getPriceWithTax(tax: number): number;
}
