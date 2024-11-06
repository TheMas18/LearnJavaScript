// let first=document.getElementById("first")

/* console.log(document.getElementsByTagName('span')[0]); 

console.dir(document.getElementsByTagName('span')[0]);// it will give Collection

 */
/* 
first.innerHTML
o/p :'Hey I am Span'
first.innerHTML="hey mas"
o/p :'hey mas'
first.outerHTML
o/p : '<span id="first">hey mas</span>' */

/* console.log(document.body.textContent); */

// let a=first.getAttribute("class");
// console.log(a);
// console.log(first.hasAttribute("class"))
// first.setAttribute("hidden","true");

// first.removeAttribute("class");
// console.log(first.attributes);

//custom attributes
/* console.log(first.dataset);
console.log(first.dataset.player);
console.log(first.dataset.game); */

/* let x=document.getElementsByTagName('div')[0]
// x.innerHTML ='<h1>Hello World</h1>';

let div=document.createElement('div');
div.innerHTML ='<h1>Hello World!</h1>';
// x.appendChild(div)
// x.prepend(div) */

/* first.insertAdjacentHTML('beforebegin','<div class="test">beforebegin</div>')
first.insertAdjacentHTML('beforeend','<div class="test">beforeend</div>')
first.insertAdjacentHTML('afterbegin','<div class="test">afterbegin</div>')
first.insertAdjacentHTML('afterend','<div class="test">afterend</div>') */

/* let first=document.getElementById("first");
first.className="text-black red"

first.classList.remove("red");
first.classList.add("red");
first.classList.toggle("red"); */

/* setTimeout : when we want our js to execute after sometime
setInterval : when we want to execute our js after set period of time */



/* let a=setTimeout(()=>{
    alert("Hello, i am set timeout");

},2000)
let b=prompt("Do you want to run the setTimeout")
if(b=="No"){
    clearTimeout(a);
}

// it returns timerID
 */

/* const sum=(a,b)=>{
    a+b;
    console.log("Yes I am running " , a+b);
   
} */

// setTimeout(sum,1000,1,2)
/* setInterval(()=>{
    alert("setInterval")
},3000) */

//Events

/* let a=document.getElementsByClassName("container")[0]
a.onclick=()=>{
    let b=document.getElementsByClassName("container")[0]
    b.innerHTML="Hello TheMasOp"
} */
// If there are onclick in html also and in app.js files also. so this js file onlick will be taken

/* let b=document.getElementById("btn");

let x=()=>{
    alert("Hello World1");
}
let y=()=>{
    alert("Hello World2");
}

let z=()=>{
    alert("Hello World3");
}

b.addEventListener("click",x);
b.addEventListener("click",y);
b.addEventListener("click",z);

let a=prompt("what is your fav Number");
if (a==="2") {
    b.removeEventListener("click",x)
    b.removeEventListener("click",z)
    //Here if we write function instead of x  it will not give output because the object should be same
    //handler must be same
}
 */

/* 
let b=document.getElementById("btn");

let x=(e)=>{
    console.log(e.target);// e is  object
    alert("Hello World1");
}
b.addEventListener("click",x); */






