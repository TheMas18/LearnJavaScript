/* 


let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
  console.log("You have clicked the Fetch button");
  //Instantiate an xhr object
  const xhr = new XMLHttpRequest();

  //open the object
  //xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);

  //Use this for POST Request
  xhr.open(
    "POST",
    "http://my-json-server.typicode.com/typicode/demo/posts",
    true
  );

  xhr.getResponseHeader("Content-type", "application/json");

  //what to do on progress (optional)
  xhr.onprogress = function () {
    console.log("On progress");
  };

//     xhr.onreadystatechange=function(){
//     console.log("Ready state is ", xhr.readyState)
//   } 
  //what to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    } else {
      console.log("Some Error Occured");
    }
  };
  params = `{"id": "4","title": "Post 4"}`;
  xhr.send(params);

  console.log("We Are done");
}
 */
/* let popBtn = document.getElementById("popBtn");
popBtn.addEventListener("click", popHandler);

function popHandler() {
  console.log("You have clicked the Pop button");
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "http://my-json-server.typicode.com/typicode/demo/posts",
    true
  );
  xhr.onload = function () {
    if (this.status === 200) {
      let obj = JSON.parse(this.responseText);
      console.log(obj);
      let list =document.getElementById('list')

      str="" 
      for(key in obj){
        str +=`<li>${obj[key].title}</li>`
      }
      list.innerHTML=str
    } else {
      console.log("Some Error Occured");
    }
  };

  xhr.send();

  console.log("We Are done Fetching Data");
}
 */

/* 
let changeBtn=document.getElementById('changeBtn')
let text=document.getElementsByTagName('h2')[0];
changeBtn.addEventListener('click',changeContent);
function changeContent(){
    const xhttp =new XMLHttpRequest();
    xhttp.open("GET","Mas.txt",true);
    xhttp.onload=function(){   
        text.innerHTML=this.responseText;
    };
    xhttp.send();
}
 */
//Multiple callBack functions

/* let changeBtn1 = document.getElementById("changeBtn1");
let changeBtn2 = document.getElementById("changeBtn2");

let text = document.getElementsByTagName("h2")[0];
changeBtn1.addEventListener("click", loadDoc("Mas.txt", myFun1()));
changeBtn2.addEventListener("click", loadDoc("Goku.txt", myFun2()));

function loadDoc(url, cFun) {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, true);
  xhttp.onload = function () {
    cFun(this);
  };
  xhttp.send();
}

function myFun1(xhttp) {
  text.innerHTML = this.responseText;
}
function myFun2(xhttp) {
  text.innerHTML = this.responseText;
}
 */