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
