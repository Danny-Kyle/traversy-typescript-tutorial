"use strict";
// types in typescript
let id = 7;
let company = "test";
let isPublic = false;
let privateer = "Joseph";
let ids = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr = [1, "hello", false];
//tuple
let person = [1, "John", false];
//tuple array
let employee = [
    [2, "Emmanuel"],
    [1, "Lanre"],
    [3, "Blaine"],
];
//unions
let Pid = 22;
//enums
var Direction1;
(function (Direction1) {
    Direction1[Direction1["up"] = 1] = "up";
    Direction1[Direction1["down"] = 2] = "down";
    Direction1[Direction1["left"] = 3] = "left";
    Direction1[Direction1["right"] = 4] = "right";
})(Direction1 || (Direction1 = {}));
var direction2;
(function (direction2) {
    direction2["up"] = "up";
    direction2["down"] = "down";
    direction2["left"] = "left";
    direction2["right"] = "right";
})(direction2 || (direction2 = {}));
//objects
const user = {
    id: 1,
    name: "John",
};
const users = {
    id: 2,
    name: "Daniel",
};
//type assertions
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
customerId = 2;
//using types in functions
function addNum(x, y) {
    return x + y;
}
//type void
function log(message) {
    return console.log(message);
}
const user1 = {
    id: 1,
    name: "susan",
};
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//classes
//a constructor is a method within the class
//the constructor will run whenever an object is instantiated from the class in which it is defined
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
class Personnel {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
//how to extend a class
//Subclass
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(1, "Trevor", "Manager");
//Generics 
// these ones are used to build reusable components
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['brad', 'john', 'joe']);
numArray.push('hello');
//this would work because the array type has been set to any
//so we'd use the function above to add a generic so as to be able to create an array of numbers that has to have numbers and an array of strings that has to have strings
//note that the generic T below is acting as a placeholder of sorts
function getGArray(items) {
    return new Array().concat(items);
}
let numGArray = getGArray([1, 2, 3, 4]);
let strGArray = getGArray(['brad', 'john', 'joe']);
// numGArray.push('hello')
// typescript with react
// npx create-react-app . --template typescript
// create a header.tsx component as such for trials
// 
// export interface Props {
//     title: string
//     color?: string
// }
// 
// const Header=(props: Props)=> {
//   return(
//      <header>
//       <h1 style={{color: props.color ? props.color : 'blue'}}>{props.title}</h1>
//        </header>
//  )
//}
// 
// 
// export default Header;
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
//
//
//
//
//
//
///
//
//
// 
// 
// 
// 
// 
//
//to see results run node index in your terminal
console.log(emp.name);
console.log(emp.register());
const mike = new Person(1, "Mike");
const dan = new Person(2, "Dan");
console.log(mike.register());
console.log("ids", ids);
