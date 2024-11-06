//Objects

// Prototypes
/* 
let o = {
  firstName: "Mayuresh",
  lastName: "Samant",
};

let p = {
  run: () => {
    console.log("I am in prototype in p");
  },
};

o.__proto__ = p;

p.__proto__ = {
  rollNo: 45,
};
o.run();
console.log(o.rollNo);
 */


/* function Student(name,age) {
    this.name = name;
    this.age = age;
   }
let st=new Student("mas",22);
console.log(st.__proto__===Student.prototype); */


//Classes 

/* 
class RailwayForm{

    submit(){
        alert(`${this.name} : Your form is submitted for Train No : ${this.trainNo}`)
    }

    cancel(){
        alert(`${this.name} : Your form is cancelled for Train No : ${this.trainNo}`)
    }

    fill(name,trainNo){
        this.name=name;
        this.trainNo=trainNo;
    }
}

let masForm=new RailwayForm();
let gokuForm=new RailwayForm();

masForm.fill("Mayuresh",2551451)
gokuForm.fill("Goku",4151451)

masForm.submit();
gokuForm.cancel();
 
*/

//Constructor
/* 
class RailwayForm{

    constructor(name,trainNo){
        console.log("Inside Constructor")
        console.log(name +" " + trainNo)
        this.name=name;
        this.trainNo=trainNo;
    }
    submit(){
        alert(`${this.name} : Your form is submitted for Train No : ${this.trainNo}`)
    }

    cancel(){
        alert(`${this.name} : Your form is cancelled for Train No : ${this.trainNo}`)
    }
}

let masForm=new RailwayForm("Mayuresh",2551451);
let gokuForm=new RailwayForm("Goku",4151451);

masForm.submit();
gokuForm.cancel();
 
*/

//Inheritance
/* 
class Animal{
    constructor(name,color){
        this.name=name;
        this.color=color;
    }
    sleep(){
        console.log(`${this.name} is Sleeping`)
    }
    shout(){
        console.log(`${this.name} is shouting`)
    }

}
class Monkey extends Animal{
    eatBanana(){
        console.log(`${this.name} Eating Banana`)
    }
}

let m= new Monkey("Chintu","Red");
m.eatBanana(); */



// Method Overriding
/* class Employee{
    login(){
        console.log("Employee logged in...")
    }

    logout(){
        console.log("Employee Logged out...");
    }

    reqLeaves(leaves){
        console.log(`Employee has requested ${leaves} leaves`);
    }
}

class Driver extends Employee{
    reqLeaves(leaves){
        console.log(`Employee has requested ${leaves+1} leaves (One Extra)` );
    }
}
let e=new Driver();
e.login();
e.reqLeaves(3) */

//super 

/* class Employee{
    reqLeaves(leaves){
        console.log(`Employee has requested ${leaves} leaves`);
    }
}
class Driver extends Employee{
    reqLeaves(leaves){
    super.reqLeaves(leaves+1)  
    console.log("One extra Added");
    }
}
let e=new Driver();
e.reqLeaves(3) */

