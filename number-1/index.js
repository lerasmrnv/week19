"use strict";

let employee = {
    name: "Надзея",
    surname: "Полацкая",
    rate: 12,
    days: 24,
    
    getSalary(){
        return this.rate * this.days
    }

};
console.log(employee.name);
console.log(employee.surname);
console.log(employee.rate);
console.log(employee.days);
console.log(employee.getSalary());