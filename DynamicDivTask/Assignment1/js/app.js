$(function () {
  let displayDiv = $("#displayDiv");

  function addDiv() {
    displayDiv.text("");
    displayDiv.css(
      "width",
      50 * $("#column").val() + $("#column").val() * 5 + "px"
    );
    for (let i = 0; i < $("#row").val(); i++) {
      for (let j = 0; j < $("#column").val(); j++) {
        let createDiv = $("<div>");
        createDiv.addClass("color");
        displayDiv.append(createDiv);
      }
      let nextLine = $("<div>");
      nextLine.css("clear", "both");
      displayDiv.append(nextLine);
    }
  }

  $("#add").on("click", function () {
    addDiv();
  });
});

/*
let displayDiv = document.getElementById("displayDiv");
function addDiv() {
  displayDiv.innerHTML = "";
  let row = document.getElementById("row");
  let column = document.getElementById("column");
  displayDiv.style.width = ((50 * column.value)+(column.value*5))+ "px";
  displayDiv.style.backgroundColor = "black";
  for (let i = 0; i < row.value; i++) {
    for (let j = 0; j < column.value; j++) {
      let createDiv = document.createElement('div');
      createDiv.classList.add("color");
      displayDiv.appendChild(createDiv);
    }
    let addBreak = document.createElement('div');
    addBreak.style.clear = "both";
    displayDiv.appendChild(addBreak);
  }
}
let addBtn = document.getElementById("add");
addBtn.addEventListener("click", function () {
  addDiv();
});
*/