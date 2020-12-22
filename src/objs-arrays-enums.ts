enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: 'Brais',
  age: 32,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};

console.log(person.name);
