// Fetch Api

/* let p=fetch("https://goweather.herokuapp.com/weather/mu");
p.then((response)=>{
    console.log(response.status);
    console.log(response.ok);
    // console.log(response.headers);
    return response.json()
}).then((res)=>{
    console.log(res);
}) */

/* let options = {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },

  body: JSON.stringify({
    title: "Mas",
    body: "Goku",
    userId: 1,
  }),
};

fetch("https://jsonplaceholder.typicode.com/posts",options)
  .then((response) => response.json())
  .then((json) => console.log(json));
 */

/* const getTodo=async (id)=>{
    let response= await fetch("https://jsonplaceholder.typicode.com/posts/" +id);
    let res= await response.json();
    return res;
}
const createTodo = async (todo) => {
  let options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },

    body: JSON.stringify(todo),
  };
  let p = await fetch("https://jsonplaceholder.typicode.com/posts", options);
  let response = await p.json();
  return response; 
};
const mainFunc = async () => {
  let todo = {
    title: "Mas",
    body: "Goku",
    userId: 18,
  };
  let todor = await createTodo(todo);
  console.log(todor);
  console.log(await getTodo(18))
};

mainFunc();
 */


// Cookies
/* 
// alert(document.cookie)
document.cookie="name1=Mas"
document.cookie="name2=Goku"
//it doesnt overwrite/erase existing cookis
//so write operation doesnt touch the other cookie

let key=prompt("Enter key")
let value=prompt("Enter Value")

// document.cookie=`${key}=${value}`
// console.log(document.cookie)

//so lets consider you enter  "Yuy;" as key and value 222
//  it doesnt give you output properly. 
//  it is not taking anything after  ';'
// to solve this issue we can use  encodeURIComponent()
// it takes any string
document.cookie=`${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)
//to get actual string you need to decode it
//we can do it using decodeURIComponent() */

// localStorage

/* let key=prompt("Enter key")
let value=prompt("Enter value")
localStorage.setItem(key,value)
console.log(`${key}  : `  +localStorage.getItem(key))

localStorage.removeItem("null")
localStorage.clear()

 */

//session storage

//It exist only in one page 
//for new page session will be new

//Storage Event