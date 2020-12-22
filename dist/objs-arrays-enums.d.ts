declare enum Role {
    ADMIN = 0,
    READ_ONLY = 1,
    AUTHOR = 2
}
declare const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: Role;
};
