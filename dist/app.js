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
//# sourceMappingURL=app.js.map