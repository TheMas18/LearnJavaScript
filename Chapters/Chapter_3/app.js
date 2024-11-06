

/*

//Arrays




const cars = ["Saab", "Volvo", "BMW"];
const cars2 = new Array("Saab", "Volvo", "BMW");

document.getElementById("demo").innerHTML = cars2.toString();
document.getElementById("demo").innerHTML = cars;

// Looping Array Elements
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Lemon");
let fLen = fruits.length;


let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("demo").innerHTML = text;


const myObj = {
    name: "John",
    age: 30,
    cars: [
        { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "BMW", models: ["320", "X3", "X5"] },
        { name: "Fiat", models: ["500", "Panda"] }
    ]
}

let collection="<ol>";
for(let i in myObj.cars){
    collection += "<li>" + myObj.cars[i].name;
    let subCollection="<ul>";
    for(let j in myObj.cars[i].models){
        subCollection+= "<li>" +  myObj.cars[i].models[j] +"</li>";
    }
    subCollection+="</ul>";
    collection+=subCollection +"</li>"
}

document.getElementById("demo").innerHTML = collection;


//Array Iterations 

// For Each
const numbers = [45, 4, 9, 16, 25];

numbers.forEach(myFunction);
function myFunction(value, index , array){
    console.log("Index : " + index+ " Value : " + value )
}

//map
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction2);

function myFunction2(value, index, array) {
  return value * 2;
}

console.log(numbers2)

//filter

const filterMethod=numbers.filter(myFunction3);

function myFunction3(value) {
    return value >10
}
console.log(filterMethod)

//reduce 

let reduceMethod = numbers.reduce(myFunctionReduce);

function myFunctionReduce(total, value, index, array) {
  return total + value;
}
console.log(reduceMethod)

*/