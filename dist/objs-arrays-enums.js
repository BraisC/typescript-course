var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: 'Brais',
    age: 32,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
};
console.log(person.name);
//# sourceMappingURL=objs-arrays-enums.js.map