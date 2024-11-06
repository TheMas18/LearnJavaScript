/* 
function functionName(parameters) {
    // code to be executed
  }
   const x = function (a, b) {return a * b}; 

   //Function Hoisting
console.log(myFunction(5));

function myFunction(y) {
  return y * y;
}
//Self Invoking Functions
(function () {
    console.log(myFunction(5)); // I will invoke myself
  })();

//Functions are Objects
console.log(typeof myFunction);
console.log(typeof myFunction.toString());

//A function defined as the property of an object, is called a method to the object.
//A function designed to create new objects, is called an object constructor.

*/

/* 
//Arrow Functions

const arrow=(x,y)=>{
    return x+y;
}
console.log(arrow(10,4))

//Arrow functions do not have their own this. They are not well suited for defining object methods.
//Arrow functions are not hoisted. They must be defined before they are used.
//Using const is safer than using var, because a function expression is always constant value./*let x=(a,b) => a+b;
console.log(x(10,20));

let hello=()=>  "Hello Mas"
console.log(hello());

 temp=val=>  "Hello"+val;
console.log(temp("Goku")); 

*/


/*
//Function Rest Parameter
function add(...args) {
    let total = 0;
    for (let arg of args) total += arg;
    return total;
}

console.log(add(2, 3, 4, 5, 6, 9));


//Invoking a Function with a Function Constructor
  function myFunction(arg1, arg2) {
    this.firstName = arg1;
    this.lastName  = arg2;
  }
  
  // This creates a new object
  const myObj = new myFunction("John", "Doe");
  
  // This will return "John"
  myObj.firstName;

*/

/* 
The Arguments Object
JavaScript functions have a built-in object called the arguments object.

The argument object contains an array of the arguments used when the function was called (invoked).

This way you can simply use a function to find (for instance) the highest value in a list of numbers:
*/

/* x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  let max = -Infinity;
//   console.log(arguments[0])
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
} 


// call()

//With the call() method, you can write a method that can be used on different objects.

const person1={
    fullName : function() {
    return this.firstName + " " + this.lastName+" " +this.car;
  }
}
const person2 = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  car      : "BMW",
  
};
console.log(person1.fullName.call(person2));
//apply method works same
console.log(person1.fullName.apply(person2));

*/

/* 
The Difference Between call() and apply()
The difference is:

The call() method takes arguments separately.

The apply() method takes arguments as an array.

The apply() method is very handy if you want to use an array instead of an argument list.

*/

/* const person3 = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person4 = {
  firstName:"John",
  lastName: "Doe"
}

console.log("apply() : "+ person3.fullName.apply(person4, ["Oslo", "Norway"]));
console.log("call() : "+  person3.fullName.call(person4, "Oslo", "Norway")); */

//bind
/* 


const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  display: function () {
    let x = document.getElementById("demo");
    x.innerHTML = this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName = person.fullName.bind(member);
console.log(fullName())

// setTimeout(person.display, 3000); // it gives undefined as output becasue after some time this is lost

let display = person.display.bind(person);
setTimeout(display, 3000);

*/

//javascript closures
const add = (function () {
  let counter = 0;
  return function () {counter += 1; return counter}
})();

add();
add();
add();



