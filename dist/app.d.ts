declare function merge<T extends Record<string, unknown>, U extends Record<string, unknown>>(objA: T, objB: U): T & U;
declare const mergedObj: {
    name: string;
} & {
    age: number;
};
declare type Lengthy = {
    length: number;
};
declare function countAndPrint<T extends Lengthy>(element: T): [T, string];
