//Callback functions

/* 
A callback is a function passed as an argument to another function
This technique allows a function to call another function
A callback function can run after another function has finished

JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.
*/

/* 
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, myDisplayer); 
*/
//In the example above, myDisplayer is a called a callback function.
// It is passed to myCalculator() as an argument.


/* 
Functions running in parallel with other functions are called asynchronous
In the real world, callbacks are most often used with asynchronous functions.
A typical example is JavaScript setTimeout().
When using the JavaScript function setTimeout(), you can specify a callback function to be executed on time-out:

When you pass a function as an argument, remember not to use parenthesis.

Right: setTimeout(myFunction, 3000);

Wrong: setTimeout(myFunction(), 3000);

*/

/* 
//using set time out

setTimeout(myFunction, 3000);

function myFunction() {
    document.getElementById("demo").innerHTML = "I love You !!";
}
setTimeout(function myFunction() {
    console.log("I love You !!")
}, 3000);


setTimeout(() => {
    console.log("Mas op or what")
}, 3000);


//Using Set Interval

//When using the JavaScript function setInterval(), you can specify a callback function to be executed for each interval:

setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}

*/






// Callback Functions

/* function loadScript(src,callback){
    var script=document.createElement("script");
    script.src=src;
    script.onload=()=>{
        console.log("script loaded with src : ", src);
        callback(null,src)
    }
    script.onerror=()=>{
        console.log("Error loadingscript with src : ", src);
        callback(new Error("src got some error"))

    }
    document.body.appendChild(script)
}

function hello(error ,src){
    if (error) {
        console.log(error);
        return;
    }
    alert("Hello World!");
}

function goodMorning(src){
    alert("Good Morning");
}
loadScript("https://cdn.jsdelissssvr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js",hello) */
/* 
// Promises

let promise = new Promise(function (resolve, reject) {
  console.log("Hello")
  resolve(56)
})
console.log("Hello One")
setTimeout(function () {
  console.log("Hello two in 2 seconds")
}, 2000)

console.log("My name is " + "Hello Three")
console.log(promise)



function myDisplayer(some){
  document.getElementById("demo").innerHTML=some;
}

let myPromise=new Promise(function(resolve,reject){
    let x=0;
    if(x==0){
     
      resolve("Promise is resolved");
    }else{
      reject("Promise is rejected");
    }
});

myPromise.then((value)=>{
  console.log(value);
})

*/

/*
let p1 = new Promise((resolve, reject) => {
  console.log("Promise1 is Pending");
  setTimeout(() => {
    console.log("Promise1 Resolved")
    resolve(true);
  }, 2000);
});

let p2 = new Promise((resolve, reject) => {
  console.log("Promise2 is Pending");
  setTimeout(() => {
    // console.log("Promise2 Rejected")
    reject(new Error("I am error"));
  }, 2000);
});

 //To get the value
p1.then((value) => {
  console.log("Promise Done", value);
});

 //To catch the value
 p2.catch((value) => {0
  console.log("Some Error Has Occured" +value);
}); */

/* //we can do something like this 
p2.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log(error);
  }
); */

/* 
// .then (Promise Chaining)

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Resolved After 2 Seconds");
  }, 2000);
  resolve(56);
});

p1.then((value) => {
  console.log(value);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 2");
    }, 2000);
  });
})
  .then((value) => {
    console.log("Finally Done", value);
    return 2;
  })
  .then((value) => {
    console.log("Is baar Pakka Done");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promise 3");
      }, 2000);
    });
  })
  .then((value) => {
    console.log("Is Baar Pakka wala pakka done", value);
  });
 */
/* 
const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    document.body.appendChild(script);
    script.onload = () => {
      resolve("Script Has been Loaded");
    };
    script.onerror = () => {
      reject(0);
    };
  });
};

let p1 = loadScript(
  "https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
);
p1.then((value) => {
  console.log(value);
}).catch((error) => {
  console.log("We are sorry but we are having problems loading this script");
}); */

//Attaching Multiple handlers a Promise

/* 
let p1 = new Promise((resolve, reject) => {
  console.log("Promise is not resolved yet");
  setTimeout(() => {
    resolve(1)
  }, 2000);
});

p1.then((value) => {
  console.log("Hurray");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 6000)
  });
}).then((value) => {// so the previous value is passed here as resolved promise
  console.log("Amazing ", value * 4)
});


p1.then((value) => {
  console.log("Promise is resolved")
});
 */

//  Promise API

/* let p1=new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve("value 1")},2000)
});
let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("value 2")},5000)
});

let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("value 3")},7000)
}); */

/* p1.then((value)=>{console.log(value)});
p2.then((value)=>{console.log(value)});
p3.then((value)=>{console.log(value)});
*/

// Now i want all the values at once after all the promises get resolved
/*
let promise_all=Promise.all([p1,p2,p3]); // it will give you array of promises
// console.log(promise_all)
promise_all.then((value)=>{
    console.log(value)
}) */

// Suppose one promise is rejected then it will not execute the other promises
// so we can use allSettled to get the promises even if one or more promise is rejected
// In result it will show status and value . and if failed it will show reason.

/* let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{reject(new Error("Failed"))},2000)
});
let p2=new Promise((resolve,reject)=>{
setTimeout(()=>{resolve("value 2")},5000)
});

let p3=new Promise((resolve,reject)=>{
setTimeout(()=>{resolve("value 3")},7000)
});

let promise_all=Promise.allSettled([p1,p2,p3]);
promise_all.then((value)=>{
    console.log(value)
}) */

/* let p1 = new Promise((resolve, reject) => {
  // setTimeout(()=>{resolve("value 1")},2000)
  setTimeout(() => {
    reject(new Error("Failed"));
  }, 2000);
});
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("value 2");
  }, 5000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("value 3");
  }, 7000);
}); */

// it will give promise which is executed or resolved first

/*

let promise_all=Promise.race([p1,p2,p3]);
promise_all.then((value)=>{
    console.log(value)
})

*/

// suppose in race one promise is rejected it will throw an error

/*
// if there is error it will return result of next promise

let promise_all=Promise.any([p1,p2,p3]);
promise_all.then((value)=>{
    console.log(value)
})

*/

/*
//
let promise_all=Promise.resolve(6);
promise_all.then((value)=>{
    console.log(value)
})

*/

/*

let promise_all=Promise.reject(new Error("Hey"));
promise_all.then((value)=>{
    console.log(value)
})

*/

// try catch

/* setTimeout(()=>{
    console.log("Hi")
},1000)
try{
    setTimeout(()=>{
        console.log(mas)
    },3000)
}catch(err){
console.log("Error")
}
setTimeout(()=>{
    console.log("Bye")
},5000) */

// Custom error
/* try{
    let age=prompt("Enter Your Age")
    age=Number.parseInt(age);
    if (age>150) {
        throw new ReferenceError("Harry is not good")
    }
}catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack)
}
console.log("The script is still running"); */

//  async / await

// async function weather(){
//     let p1=new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//         resolve("27 deg")
//       },2000)
//     });
//     let p2=new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//         resolve("54 deg")
//       },4000)
//     });


//     console.log("Fetching Pune Weather.....")
//     let puneW = await p1;
//     console.log("Fetching Banglore Weather")
//     let bangloreW=await p2;
//     console.log("Fetching is completed")
//     return [puneW,bangloreW];
// }

// console.log("welcome to weather control room")
// let x=weather();
// x.then((val)=>{
//   console.log(val)
// })



















