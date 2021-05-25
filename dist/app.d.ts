declare function WithTemplate(template: string, hookId: string): (constructor: any) => void;
declare class Person {
    name: string;
    constructor();
}
declare const pers: Person;
