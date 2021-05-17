declare function merge<T, U>(objA: T, objB: U): T & U;
declare const mergedObj: {
    name: string;
} & {
    age: number;
};
