let user1;
// eslint-disable-next-line prefer-const
user1 = {
    name: 'Brais',
    age: 33,
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    },
};
user1.greet('Hola');
//# sourceMappingURL=app.js.map