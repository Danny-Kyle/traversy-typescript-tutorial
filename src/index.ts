// types in typescript

let id: number = 7;
let company: string = "test";
let isPublic: boolean = false;
let privateer: any = "Joseph";

let ids: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr: any[] = [1, "hello", false];

//tuple
let person: [number, string, boolean] = [1, "John", false];

//tuple array
let employee: [number, string][] = [
  [2, "Emmanuel"],
  [1, "Lanre"],
  [3, "Blaine"],
];

//unions
let Pid: string | number = 22;

//enums
enum Direction1 {
  up = 1,
  down,
  left,
  right,
}

enum direction2 {
  up = "up",
  down = "down",
  left = "left",
  right = "right",
}

//objects
const user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "John",
};

//easier objects
type User = {
  id: boolean | number;
  name: string;
};
const users: User = {
  id: 2,
  name: "Daniel",
};

//type assertions
let cid: any = 1;
// let customerId = <number>cid
let customerId = cid as number;
customerId = 2;

//using types in functions
function addNum(x: number, y: number): number {
  return x + y;
}

//type void
function log(message: string | number): void {
  return console.log(message);
}

//interfaces
interface UserInterface {
  id: number;
  name: string;
  age?: number;
  //to make it optional
  //to make id readonly define it as{readonly id: number}
}
const user1: UserInterface = {
  id: 1,
  name: "susan",
};

//types vs interfaces
type point = number | string;
const p1: point = 1;

// interface pointer = number | string
// const p2: pointer = 2
//
//
//interface with functions
interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

//classes
//a constructor is a method within the class
//the constructor will run whenever an object is instantiated from the class in which it is defined
class Person {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}
//access modifiers
//you can make the properties of the class private by defining them as such {private id: number}
//this will make sure the property is accessible only in the class in which it is called
//if you define it as {protected id: number} then it will also only be accessible in this class or in classes that are sprung forth from this class
//we can also have other methods in the class

//using interfaces in classes
interface PersonInterface {
  id: number;
  name: string;
  register(): string
}
class Personnel implements PersonInterface {
    id: number;
    name: string;
  
    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }
  
    register() {
      return `${this.name} is now registered`;
    }
  }
//how to extend a class
//Subclass
class Employee extends Person{
    position: string;

    constructor(id: number, name: string, position: string){
        super(id, name)
        this.position = position;
    }
}

const emp = new Employee(1, "Trevor", "Manager");

//Generics 
// these ones are used to build reusable components
function getArray(items: any[]): any[]{
    return new Array().concat(items);
}

let numArray = getArray([1,2,3,4])
let strArray = getArray(['brad', 'john', 'joe'])

numArray.push('hello')
//this would work because the array type has been set to any
//so we'd use the function above to add a generic so as to be able to create an array of numbers that has to have numbers and an array of strings that has to have strings
//note that the generic T below is acting as a placeholder of sorts
function getGArray<T>(items: T[]): T[]{
    return new Array().concat(items);
}

let numGArray = getGArray<number>([1,2,3,4])
let strGArray = getGArray<string>(['brad', 'john', 'joe'])

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
console.log(emp.name)
console.log(emp.register())
const mike = new Person(1, "Mike");
const dan = new Person(2, "Dan");
console.log(mike.register());

console.log("ids", ids);

// const [number, setNumber] = useState<number | string>(5)

// const numberChange = () => {
//   setNumber("10")
// }