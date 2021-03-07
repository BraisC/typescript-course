interface Greetable {
    name: string;
    greet(phrase: string): void;
}
declare class Person implements Greetable {
    name: string;
    age: number;
    constructor(n: string);
    greet(phrase: string): void;
}
declare let user1: Greetable;
