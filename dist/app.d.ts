declare type Admin = {
    name: string;
    privileges: string[];
};
declare type Employee = {
    name: string;
    startDate: Date;
};
declare type ElevatedEmployee = Admin & Employee;
declare const e1: ElevatedEmployee;
declare type Combinable = string | number;
declare type Numeric = number | boolean;
declare type Intersected = Combinable & Numeric;
declare function add(a: Combinable, b: Combinable): string | number;
declare type UnkownEmployee = Employee | Admin;
declare function printEmployeeInformation(emp: UnkownEmployee): void;
declare class Car {
    drive(): void;
}
declare class Truck {
    drive(): void;
    loadCargo(amount: number): void;
}
declare type Vehicle = Car | Truck;
declare const v1: Car;
declare const v2: Truck;
declare function useVehicle(vehicle: Vehicle): void;
interface Bird {
    type: 'bird';
    flyingSpeed: number;
}
interface Horse {
    type: 'horse';
    runningSpeed: number;
}
declare type Animal = Bird | Horse;
declare function moveAnimal(animal: Animal): void;
declare const input: HTMLInputElement;
declare const input2: HTMLInputElement;
interface ErrorContainer {
    [prop: string]: string;
}
