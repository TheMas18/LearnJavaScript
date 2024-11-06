/*
$(document).ready(function () {
  function addDiv() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let createDiv = $("<div>", { class: "color" });
        $("#displayDiv").append(createDiv);
		createDiv.on("click", function (e) {
			if($(this).hasClass('blue')){
				$(this).removeClass("blue").addClass("yellow");
			}else if($(this).hasClass('yellow')){
				$(this).removeClass("yellow").addClass("blue");
			}
			else{
				$(this).addClass("blue");
			}
		  });
      }
      let addBreak = $("<div>");
      addBreak.css("clear", "both");
      $("#displayDiv").append(addBreak);
    }
  }
  $("#add-div-btn").on("click", function () {
    addDiv();
  });

});

*/

let displayDiv=document.getElementById("displayDiv");				
function addDiv(){
  for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
      let createDiv=document.createElement('div');
      createDiv.classList.add("color");
	  createDiv.setAttribute('name','divcolor');
      displayDiv.appendChild(createDiv);

	  let mclick=document.querySelector("div[name=divcolor]");
      createDiv.addEventListener("click",function(e){

		  if(e.target.className=='color blue'){
					createDiv.classList.remove("blue");  
					createDiv.classList.add("yellow");   
		  }
		  else if(e.target.className=='color yellow'){
					createDiv.classList.remove("yellow");  
					createDiv.classList.add("blue");   
		  }else{
			createDiv.classList.add("blue"); 
		  }
            
      });

    }
    let addBreak=document.createElement('div');
    addBreak.style.clear="both";
    displayDiv.appendChild(addBreak);
  }
}
let addBtn=document.getElementById("add-div-btn");
addBtn.addEventListener("click",function(e){
    addDiv();
  
});
