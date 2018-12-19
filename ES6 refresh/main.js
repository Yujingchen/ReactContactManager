// const & let

const name = "David";

// name = 'John' cannot use to recreate name variable

const person = ["David", "John", "Joe"];

person[1] = "Jack";

console.log(person);

//const can use to change value of a array or object

let fruit = "Apple";

fruit = "Banana";
// use let instead of const when to change value

//Arrow function

//function sayHi(){
// console.log('Hi);
// }

const sayHi = () => {
  console.log("Hi");
};

sayHi();

const greetPerson = person => console.log(`Hi ${person}`);

greetPerson(name);

//foreach

const fruits = ["Apple", "Banana", "Orange"];

fruits.forEach((fruit, index) => {
  console.log(fruit);
});

//map

const upperCaseFruit = fruits.map(fruit => fruit.toUpperCase());

console.log(upperCaseFruit);

//filter
const people = [
  { id: 1, name: "David" },
  { id: 2, name: "John" },
  { id: 3, name: "Jack" }
];

const person2 = people.filter(person => person.id !== 2);
console.log(person2);

//spread

const arr = ["David", "Jack", "John"];
const arr2 = [...arr, "Joe"];
const arr3 = [...arr.filter(num => num !== "John")];
console.log(arr3);

const person1 = {
  name: "David",
  age: 35
};

const newPerson = {
  ...person1,
  email: "David@gamil.com"
};
console.log(newPerson);

//destructuring

const profile = {
  proName: "David watter",
  address: {
    street: "40 Main st",
    city: "Helsinki"
  },
  hobbies: ["movies", "music"]
};

const { proName, address, hobbies } = profile;
const { street, city } = profile.address;
console.log(proName, street, city, hobbies[0]);

//classes

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age}.`;
  }
}

const person3 = new Person("John", 33);
const person4 = new Person("Sara", 24);

console.log(person3.greet());

//subclasses
class Customer extends Person {
  constructor(name, age, balance) {
    super(name, age);
    this.balance = balance;
  }

  info() {
    return `${this.name} owes $${this.balance}.`;
  }
}

const customer1 = new Customer("Kevin", 32, 3000);

console.log(customer1.info());

//module

//file1: file1.js

// export const name = 'Jeff'
// export const nums = [1,2,3,4,5]
// export default Person;

// //file2: file2.js

// import{name, nums} from './file1';
// import Person from './file1';
