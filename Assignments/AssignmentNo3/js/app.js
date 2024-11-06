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
      this.updateInputCheck(element, true);
    } else {
      showError(inputElement);
      this.updateInputCheck(element, false);
    }
  };

  this.updateInputCheck = (element, isValid) => {
    this.checkIfValid[element] = isValid;
  };
	
	
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
	
    alert("Form submitted successfully!");
	document.location.reload();

  } else {

    alert("Please fill in all fields correctly.");
  }
});
