//Chapter 2

//Functions

/*
Syntax

function name(parameter1, parameter2, parameter3) {
  // code to be executed
}



let x = myFun(4, 3);
function myFun(a, b) {
    return a + b;
}

console.log(x)

const obj = {
    name: "Mayuresh",
    lastName:"Samant",
    role: "Developer",
    fullName:function(){
        return this.name + " " + this.lastName
    }
};

document.getElementById("demo").innerHTML = "My Name is: " + obj.name;
console.log(obj.fullName())
const person=new Object();
person.name="Mas"
console.log(person.name)
console.log(person["name"])


const y=obj;
console.log(y)
//The object x is not a copy of person. The object x is person.
// The object x and the object person share the same memory address.
// Any changes to x will also change person:


//Display the object 

const person = {
    name: "John",
    age: 30,
    city: "New York"
  };

let text=" "
for(let x in person){
    text+=person[x] + " "
}
document.getElementById("demo").innerHTML = text;

//You must use person[x] in the loop. person.x will not work (Because x is the loop variable).

const myArray=Object.values(person)
console.log(myArray)
*/

/*
Using JSON.stringify()
JavaScript objects can be converted to a string with JSON method JSON.stringify().

JSON.stringify() is included in JavaScript and supported in all major browsers.

let text=" "
const fruits = {Bananas:300, Oranges:200, Apples:500};

const person2 = {
    name: "John",
    age: 30,
    city: "New York"
  };

for (let [fruit, value] of Object.entries(fruits)) {
  text += fruit + ": " + value + "<br>";
}
document.getElementById("demo").innerHTML = text;

let myString = JSON.stringify(person2);

// Display String
document.getElementById("demo").innerHTML = myString;

*/

//Object Constructor functions

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }


const obj1 = new Person("Mayures", "Samant", 50, "blue");
document.getElementById("demo").innerHTML =
"My Name is " + obj1.firstName +" " +obj1.lastName + "."; 