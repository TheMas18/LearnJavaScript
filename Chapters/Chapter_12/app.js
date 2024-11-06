//IIFE- immediately invoked function Expressions



/*
 let person={
	name:"mayuresh",
	rollNo:45,
	"employee":{"name":"John", "age":30, "city":"New York"},
	"subjects":["Java","CSS","HTML"]

}
console.log(person.name);
console.log(person["name"]);

person.age=21;
person.name="TheMasOp";
console.log(person.name);
console.log(person.age);

console.log(person.employee.name);
console.log(person.subjects[1]);
 */


/*
let person={
	name:"mayuresh",
	rollNo:45,
	employee:{"name":"John", "age":30, "city":"New York"},
	subjects:["Java","CSS","HTML"]

}
let obj=JSON.parse('{"name":"John", "age":30, "city":"New York"}');
console.log(typeof person);
console.log(typeof obj);
*/

/*
const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const myArr = JSON.parse(text);
console.log(myArr);
console.log(typeof myArr.birth +" "+ myArr.birth);
myArr.birth=new Date(myArr.birth);
console.log(typeof myArr.birth+ " "+myArr.birth);

*/

/*
const obj=JSON.parse(text, (key,value)=>{
	if(key=="birth"){
		return new Date(value);
	}else{
		return value;

	}

});

console.log(obj);

*/

/*
const obj = {"name": "John", "age": 30, "city": "New York"};
const myJSON=JSON.parse(obj);

console.log(typeof myJSON)

*/

