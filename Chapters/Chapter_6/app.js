// Create an Object
/*



const person = {};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
console.log(person)


// Create an Object
const person2 = new Object();

person2.firstName = "Vegeta";
person2.lastName = "AYX";
person2.age = 30;
person2.eyeColor = "red";

console.log(person2)


function Person3(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }

const person3obj= new Person3("John", "Doe", 50, "blue");
console.log(person3obj)


//We cannot add the new property directly to the object like this
// Person3.nationality = "English";

*/



/*
// JavaScript Object Prototypes
// The JavaScript prototype property allows you 
// to add new properties to object constructors:

function Person1(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}
const person1Obj= new Person1("John", "Doe", 50, "blue");
Person1.prototype.nationality = "English";

Person1.prototype.name = function() {
    return this.firstName + " " + this.lastName;
  };
console.log(person1Obj)
console.log(person1Obj.name())

*/

/*

//Object.assign() 
//The Object.assign() method copies properties from one or more source objects to a target object.

const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
const person2 = { firstName: "Anne", lastName: "Smith" };

let obj = Object.assign(person1, person2);
console.log(obj)

//Object.entries()

let entries = Object.entries(person1);
console.log(entries)


//JavaScript Object.groupBy()

const fruits = [
    { name: "apples", quantity: 300 },
    { name: "bananas", quantity: 500 },
    { name: "oranges", quantity: 200 },
    { name: "kiwi", quantity: 150 }
];

// Callback function to Group Elements
function myCallback({ quantity }) {
    return quantity > 200 ? "ok" : "low";
}

// Group by Quantity
const result = Object.groupBy(fruits, myCallback);
console.log(result)

//JavaScript Object.keys()

const keys = Object.keys(person1);
console.log(keys)

for (let x in person1) {
    console.log(x)
}


//JavaScript Object.defineProperty()

const person4 = {
    firstName: "John",
    lastName : "Doe",
    language : "EN"
  };
  
  // Add a Property
  Object.defineProperty(person4, "year", {value:"2008"});
  console.log(person4)
*/


/*
//JavaScript Object Accessors
const person1 = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
      return this.language;
    },
    set firstname(name){
        this.firstName=name;
        
    },
    set lastname(name){
        this.lastName=name;
    },
    get fullname(){
        return this.firstName +" " + this.lastName
    }
  };

person1.firstname="Mayuresh"
person1.lastname="Samant"
console.log( person1.lang)
console.log(person1)
console.log(person1.fullname)

*/
/*
Why Using Getters and Setters?
It gives simpler syntax
It allows equal syntax for properties and methods
It can secure better data quality
It is useful for doing things behind-the-scenes
*/

