let personArr = [];
function resetInputFields() {
	document.getElementById("id").value = "";
	document.getElementById("name").value = "";
	document.getElementById("age").value = "";
}

function showMessage() {
	let msg = document.querySelector(".msg");
	msg.style.display = "block";
}

function hideMessage() {
	const msg = document.querySelector(".msg");
	msg.style.display = "none";
}

function addPerson() {
	let id = document.getElementById("id").value;
	let name = document.getElementById("name").value;
	let age = document.getElementById("age").value;
	let personObj = {
		ID: id,
		Name: name,
		Age: age,
	};
	personArr.push(personObj);
	showMessage();
	resetInputFields();
}

function displayData() {
	hideMessage();

	let contentBody = document.getElementById("database");
	contentBody.innerHTML = "";

	for (let i = 0; i < personArr.length; i++) {
		let textHead = document.createElement("h2");
		textHead.innerHTML = `Person : ${i + 1}`;
		contentBody.appendChild(textHead);

		let list = document.createElement("ul");

		for (let key in personArr[i]) {
			let nodeList = document.createElement("li");
			nodeList.innerText = `${key} : ${personArr[i][key]}`;
			list.appendChild(nodeList);
		}
		contentBody.appendChild(list);
	}
}