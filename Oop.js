// let animal = {
//     type : "unknown",
//     sound : function (){
//         console.log("The " + this.type + " makes a sound");
//     }
// }
// let dog = Object.create(animal);
// dog.type = "Dog";
// dog.color = "brown"
// dog.sound();
// console.log(dog)
//
// let cow = {}
// Object.setPrototypeOf(cow,animal)
// cow.type = "cow";
// console.log(cow);

// let vehicle = {wheels:4};
// let car = {
//
//     seats:5,
//     _proto_ :vehicle,
//     wheels:6
// };
//
// console.log(`vehicle:`, vehicle, vehicle._proto_)
// console.log(`car:`, car, car._proto_)
// console.log(`car wheels:`,car.wheels)

// function persosn(name,age){
//     this.name = name
// ;
//     this.age = age;console.log(`vehicle:`, vehicle, vehicle._proto_)
//     this.sayName = function (){
//
//         console.log(this.name);
//
//     }
//
//     const person = new Person("jumoke",24);
//     personeOne.sayName()
//     console.log(person)
// }

// let vehicle = {wheels:4};
// let car = {
//     seats :5,
//     __proto__:vehicle
// } ;
//
// console.log(`car`,car,car.__proto__)

import * as readline from "readline";

function Human(_name, _age){
    this.name = _name;
    this.age = _age;
}

function Employee(_name,_age,_destination){
    this.destination = _destination;
    this.setAge = newage =>{
        console.log(`setting age from ${this.age} to ${newage}`)
        this.age = newage;
    }
}
