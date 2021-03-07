declare type Named = {
    name?: string;
};
interface Greetable extends Named {
    greet(phrase: string): void;
}
declare class Person implements Greetable {
    name?: string;
    age: number;
    constructor(n?: string);
    greet(phrase: string): void;
}
declare let user1: Greetable;
interface AddFn {
    (a: number, b: number): number;
}
declare let add: AddFn;
