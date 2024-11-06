//Chapt 1 

/*

let demo = document.getElementById("demo")
demo.innerHTML = "Hello JS"
demo.style.fontSize = "35px";
document.write("hello mas ")

// JavaScript Code Blocks
function myFun(){
    demo.style.color="red";
    demo.style.fontSize="45px"
}
myFun();

//JavaScript Keywords

// var x;
// let y;

// x = 4;
// y = 3;

// let z = x + y
// let name = "Mayuresh"
// document.write(z)
// document.getElementById("demo").innerHTML = name

// Lets learn more about Let, var , const

var customerName = "Mayuresh";
let FormalShirtAvailable = 20;
const price = 800;

{
    console.log("shirt purchased By: " + customerName + " at " + price);
    FormalShirtAvailable--;
}

console.log("current number of formal shirts :", FormalShirtAvailable);

{
    customerName = "Mas";
    console.log("shirt purchased By: " + customerName + " at " + price);
    FormalShirtAvailable -= 2;
}
console.log("current number of formal shirts :", FormalShirtAvailable);
console.log(customerName);
{
    let CountJeans = 20;
    var customerName = "TheMasOp";
}
var customerName = "Goku";
console.log("jeans purchased By: " + customerName + " at " + price);

// CountJeans--; //it is not accessible becauses its in block
// console.log("current number of Jeans :",CountJeans);
// console.log("current number of Jeans :", CountJeans); 



//hoisting
let CountJeans = 5;
// const price = 400;//cannot declare
CountJeans=20;//redeclare the let
customerName = "OK";
//customerName="OK";
console.log("jeans purchased By: " + customerName + " at " + price);
CountJeans--;
console.log("current number of Jeans :", CountJeans);

// name="mas";
// name=200;
// console.log(name);

var customerName="Mayuresh";
// let FormalShirtAvailable=20;//cannot redeclare
// const price=800; // cannot declare again

function show(){
        let customerName="mas";
        console.log("shirt purchased By: " + customerName + " at " +price);
        console.log("shirt purchased By: " + this.customerName + " at " +price);
        FormalShirtAvailable-=2;
}
show();
//let customerName="mas";// cannot declare with same name 
console.log("shirt purchased By: " + customerName + " at " +price);
console.log("current number of formal shirts :",FormalShirtAvailable);


JavaScript has 8 Datatypes
String
Number
Bigint
Boolean
Undefined
Null
Symbol
Object

*/








