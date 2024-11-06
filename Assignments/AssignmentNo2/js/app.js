function ValidateForm() {
	this.validations = {
		fname: /^[A-Za-z]{1,10}$/,
		lname: /^[A-Za-z]{1,10}$/,
		age: /^(1[8-9]|[2-4][0-9]|50)$/,
		dob: /\d{2}\/\d{2}\/\d{4}/,
		address: /^.{1,50}$/,
	};
	this.checkIfValid = {
		fname: false,
		lname: false,
		age: false,
		dob: false,
		address: false,
		gender: false,
		city: false,
		courses: false,
	};

	this.parameters={
		loginPopup:document.getElementById("login-popup"),
		loginPage:document.getElementById("loginpage-popup"),
		registerPage:document.getElementById("register-popup"),
		confirmLogoutPopup:document.querySelector(".confirm-logout"),
	};
	
	const closeButton=()=>{
		this.parameters.loginPopup.style.display="none"
		this.parameters.loginPage.style.display="none";
		this.parameters.registerPage.style.display="none";
	}
	const closeScreen=()=>{
		this.parameters.loginPopup.style.display="none";
	}
	const openRegisterPage=()=>{
		this.parameters.loginPopup.style.display="block";
		this.parameters.loginPage.style.display="none";
		this.parameters.registerPage.style.display="block";
	}
	const openLoginPage=()=>{
		if(document.getElementById("login").innerText=="LogOut"){
			this.parameters.loginPopup.style.display="block";
			this.parameters.loginPage.style.display="none";
			this.parameters.confirmLogoutPopup.style.display="block";
			let confirmLogout=document.querySelector("#conf-logout");
				confirmLogout.addEventListener("click",function(){
				document.location.reload();
			});
		}
		else{
			this.parameters.loginPopup.style.display="block";
			this.parameters.registerPage.style.display="none";
			this.parameters.loginPage.style.display="block";
		}
	}


	const showValid = (inputElement) => {
		let inpGrp = inputElement.parentElement;
		let setError = inpGrp.querySelector("#setError");
		setError.classList.remove("error");
		setError.classList.add("valid");
	
	 };

	const showError = (inputElement) => {
		let inpGrp = inputElement.parentElement;
		let setError = inpGrp.querySelector("#setError");
		setError.classList.remove("valid");
		setError.classList.add("error");
	 };

	const validate = (element, value, inputElement) => {
		if (value.match(this.validations[element])) {
		  showValid(inputElement);
		  this.updateInputState(element, true);
		} else {
		  showError(inputElement);
		  this.updateInputState(element, false);
		}
	  };

	this.updateInputState = (element, isValid) => {
		this.checkIfValid[element] = isValid;
	  };

	const loginNow=(gmail,password)=>{
		if(gmail=="admin@gmail.com" && password=="123"){
			this.closeScreen();
			let login=document.getElementById("login");
			login.innerHTML='<a href="#">LogOut</a>';	
		}else{
			alert("failed");
		}

	};

	this.loginNow=loginNow;
	this.closeButton=closeButton;
	this.closeScreen=closeScreen;
	this.openRegisterPage=openRegisterPage;
	this.openLoginPage=openLoginPage;
	this.validate = validate;
}

const validateForm = new ValidateForm();

let fname = document.getElementById("fname");
fname.addEventListener("input", function () {
  validateForm.validate("fname", fname.value, fname);
});

let lname = document.getElementById("lname");
lname.addEventListener("input", function () {
  validateForm.validate("lname", lname.value, lname);
});

let age = document.getElementById("age");
age.addEventListener("input", function () {
  validateForm.validate("age", age.value, age);
});

let dob = document.getElementById("dob");
dob.addEventListener("input", function () {
  validateForm.validate("dob", dob.value, dob);
});

let address = document.getElementById("address");
address.addEventListener("input", function () {
  validateForm.validate("address", address.value, address);
});

let gender = document.querySelectorAll("#gender");
gender.forEach(function(e){
	e.addEventListener("click", function () {
	if (e.value=="") {
		  validateForm.checkIfValid.gender=false;
	  }
		else{ 
	 		  validateForm.checkIfValid.gender=true;
	  }
});});


let courses = document.querySelectorAll("#courses");
courses.forEach(function(course){
	course.addEventListener("click", function () {
			if (course.value=="") {
					validateForm.checkIfValid.courses=false;
			}
			else{ 
			 validateForm.checkIfValid.courses=true;

			}
});});

let city = document.querySelector("#city");
city.addEventListener("input", function () {
	if(city.selectedIndex>0 &&city.selectedIndex <5){
		validateForm.checkIfValid.city=true;
	}
	else{
		validateForm.checkIfValid.city=false;
	}
});



let closeLogin=document.getElementById("close-btn-login");
closeLogin.addEventListener("click",function(){
		validateForm.closeButton();
});
let closeRegi=document.getElementById("close-btn-regi");
closeRegi.addEventListener("click",function(){
		validateForm.closeButton();
});

let registerbtn=document.getElementById("register");
registerbtn.addEventListener("click",function(){
	validateForm.openRegisterPage();
	let loginPopup=validateForm.parameters.loginPopup;
	loginPopup.addEventListener("click",function(event){
					if(event.target===loginPopup){
							loginPopup.style.display="none";
					}
		
	});
}
);

let loginbtn=document.getElementById("login");
loginbtn.addEventListener("click",function(event){	
		validateForm.openLoginPage();
		let loginPopup=validateForm.parameters.loginPopup;
		loginPopup.addEventListener("click",function(event){
			if(event.target===loginPopup){ 
				loginPopup.style.display="none";
			}
		});
	
});

let openRegister=document.getElementById("register-anchor");
openRegister.addEventListener("click",function(){
	validateForm.openRegisterPage();
});

let openLogin=document.getElementById("login-anchor");
openLogin.addEventListener("click",function(){
	validateForm.openLoginPage();
});



let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let isValid = true;
  for (let key in validateForm.checkIfValid) {
    if (!validateForm.checkIfValid[key]) {
      isValid = false;
      break;
    }
  }
  if (isValid) {
	console.log(validateForm.checkIfValid);
    alert("Form submitted successfully!");
	document.location.reload();
  } else {
	  console.log(validateForm.checkIfValid);
    alert("Please fill in all fields correctly.");
  }
});



let gmail=document.querySelector("#gmail");
let password=document.querySelector("#password");
let loginNow=document.querySelector("#login-btn");
loginNow.addEventListener("click",function(){
	validateForm.loginNow(gmail.value,password.value);
	
});

