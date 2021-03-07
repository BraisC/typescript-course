class Person {
    constructor(n) {
        this.name = n;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
let user1;
// eslint-disable-next-line prefer-const
user1 = new Person('Brais');
user1.greet('Hola');
let add;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line prefer-const
add = (n1, n2) => n1 + n2;
//# sourceMappingURL=app.js.map