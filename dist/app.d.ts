declare class DataStorage<T extends number | string | boolean> {
    private data;
    addItem(item: T): void;
    removeItem(item: T): void;
    getItems(): T[];
}
declare const textStorage: DataStorage<string>;
