document.addEventListener("DOMContentLoaded", function () {
  function Utilities() {
    this.parameters = {
      popUpScreen: document.getElementById("popup-component-screen"),
      loginPage: document.getElementById("loginpage-popup"),
      registerPage: document.getElementById("register-popup"),
      confirmLogoutPopup: document.querySelector(".confirm-logout-popup"),
    };

    const closeButton = () => {
      this.parameters.popUpScreen.style.display = "none";
      this.parameters.loginPage.style.display = "none";
      this.parameters.registerPage.style.display = "none";
    };
    const closeScreen = () => {
      this.parameters.popUpScreen.style.display = "none";
    };
    const openRegisterPage = () => {
      this.parameters.popUpScreen.style.display = "block";
      this.parameters.loginPage.style.display = "none";
      this.parameters.registerPage.style.display = "block";
    };
    const openLoginPage = () => {
      if (document.getElementById("nav-login-btn").innerText == "LogOut") {
        this.parameters.popUpScreen.style.display = "block";
        this.parameters.loginPage.style.display = "none";
        this.parameters.confirmLogoutPopup.style.display = "block";
        let confirmLogoutBtn = document.querySelector("#confirm-logout");
        confirmLogoutBtn.addEventListener("click", function () {
          document.location.reload();
        });
      } else {
        this.parameters.popUpScreen.style.display = "block";
        this.parameters.registerPage.style.display = "none";
        this.parameters.loginPage.style.display = "block";
      }
    };

    this.closeButton = closeButton;
    this.closeScreen = closeScreen;
    this.openRegisterPage = openRegisterPage;
    this.openLoginPage = openLoginPage;
  }

  const utility = new Utilities();

  let registerbtn = document.getElementById("nav-register-btn");
  registerbtn.addEventListener("click", function () {
    utility.openRegisterPage();
    let popUpScreen = utility.parameters.popUpScreen;
    popUpScreen.addEventListener("click", function (event) {
      if (event.target === popUpScreen) {
        popUpScreen.style.display = "none";
        validateForm.resetRegisterInputFields();
      }
    });
  });

  let loginbtn = document.getElementById("nav-login-btn");
  loginbtn.addEventListener("click", function (event) {
    utility.openLoginPage();
    let popUpScreen = utility.parameters.popUpScreen;
    popUpScreen.addEventListener("click", function (event) {
      if (event.target === popUpScreen) {
        popUpScreen.style.display = "none";
        validateForm.resetRegisterInputFields();
      }
    });
  });

  let closeButtonIcon_login = document.getElementById(
    "close-button-icon-login"
  );
  closeButtonIcon_login.addEventListener("click", function () {
    utility.closeScreen();
  });
  let closeButtonIcon_register = document.getElementById(
    "close-button-icon-register"
  );
  closeButtonIcon_register.addEventListener("click", function () {
    utility.closeScreen();
    validateForm.resetRegisterInputFields();
  });

  let openRegister = document.getElementById("register-anchor");
  openRegister.addEventListener("click", function () {
    utility.openRegisterPage();
  });

  let openLogin = document.getElementById("login-anchor");
  openLogin.addEventListener("click", function () {
    utility.openLoginPage();
  });

  function ValidateForm() {
    this.registeredAccounts = [];
    this.accountsInformation = {};

    const insertData = (key, value) => {
      if(key=="" || value==""){
        delete this.accountsInformation[""];
      }else{
        this.accountsInformation[key] = value;
      }
    };

    this.regularExpressions = {
      firstName: /^[A-Za-z]{1,15}$/,
      lastName: /^[A-Za-z]{1,15}$/,
      age: /^(1[8-9]|[2-4][0-9]|50)$/,
      dateOfBirth: /\d{2}\/\d{2}\/\d{4}/,
      address: /^.{1,50}$/,
      mobileNumber: /^[6|7|8|9][0-9]{9}$/,
      username:/^[^\d][a-zA-Z0-9@_]{5,15}$/,
      email: /^[^\s@]+@[a-zA-Z]+(?:\.[a-zA-Z]{2,3}){1,2}$/,
      password:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.@_])[a-zA-Z][a-zA-Z0-9@_]{6,25}$/,
      pincode: /^\d{6}$/,
    };
    this.checkIfValid = {
      firstName: false,
      lastName: false,
      mobileNumber: false,
      username: false,
      gender: false,
      dateOfBirth: false,
      age: false,
      email: false,
      password: false,
      confirmPassword: false,
      courses: false,
      hobbies: false,
      address: false,
      city: false,
      pincode: false,
    };

    this.parameters = {
      firstName: document.getElementById("firstName"),
      lastName: document.getElementById("lastName"),
      mobileNumber: document.getElementById("mobileNumber"),
      username: document.getElementById("username"),
      gender: document.querySelector("input[name='gender']"),
      dateOfBirth: document.getElementById("dateOfBirth"),
      age: document.getElementById("age"),
      email: document.getElementById("email"),
      password: document.getElementById("password"),
      confirmPassword: document.getElementById("confirmPassword"),
      courses: document.querySelector("input[name='courses']"),
      hobbies: document.querySelector("input[name='hobbies']"),
      address: document.getElementById("address"),
      city: document.getElementById("city"),
      pincode: document.getElementById("pincode"),
    };

    const resetRegisterInputFields = () => {
      for (let key in this.parameters) {
        this.checkIfValid[key] = false;
        this.parameters[key].style.borderColor = "rgb(255, 206, 8)";
      }
     
      document.getElementById("age").style.borderColor = "rgb(255, 206, 8)";
      document.getElementById("city").style.borderColor = "rgb(255, 206, 8)";
      const form = document.querySelector("form");
      form.reset();
      
      
      document.getElementById("login-page-password").value = "";
      let loginInput = document.querySelector("#InputCredential");
      loginInput.value="";
      loginInput.name = "login-page-username";
      loginInput.placeholder = "Enter Username";
      loginInput.parentElement.querySelector("label").textContent = "Username";

      let loginWithButton = document.querySelector(".LoginOptions-panel").querySelector("button");
      if(loginWithButton.id=="loginWithUsername"){
        loginWithButton.querySelector(".loginoption-icon").style.backgroundImage = "url('images/gmail.png')";
        loginWithButton.name = "loginEmail";
        loginWithButton.id = "loginWithEmail";
        document.querySelector(".LoginOptions-panel h3").innerText = "You can login in with Email";
      }
      let errorMessages = document.querySelectorAll(".error-message");
      errorMessages.forEach(errorMessage => {
        errorMessage.style.display = "none";
     });
      document.getElementById("InputCredential").style.borderColor = "rgb(255, 206, 8)";
      document.getElementById("login-page-password").style.borderColor = "rgb(255, 206, 8)";
      
    };

    const verifyAllInputs = () => {
      for (let key in this.parameters) {
        if (
          this.parameters[key].name == "gender" ||
          this.parameters[key].name == "courses" ||
          this.parameters[key].name == "hobbies"
        ) {
          if (!this.checkIfValid[key]) {
            this.parameters[key].scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
            console.log("emty");
            showError(this.parameters[key], "Fields Cannot be Empty");
            return false;
          }
        } else {
          const value = this.parameters[key].value;
          if (value === "" || !this.checkIfValid[key]) {
            this.parameters[key].scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
            this.parameters[key].style.borderColor = "red";
            showError(this.parameters[key], "Fields Cannot be Empty");
            return false;
          }
        }
      }

      return true;
    };

    const validate = (regxElementName, elementValue, inputElement) => {
      if (regxElementName == "firstName" || regxElementName == "lastName") {
        let updatedInputValue = elementValue
          .replace(/[^A-Za-z]/g, "")
          .slice(0, 15);

        if (elementValue.match("[^A-Za-z]$")) {
          showError(inputElement, "Only Alphabets are allowed");
          this.checkIfValid[regxElementName] = false;
        } else {
          if (
            updatedInputValue.match(this.regularExpressions[regxElementName])
          ) {
            if (updatedInputValue.length < 2) {
              showError(
                inputElement,
                `${regxElementName} should contain atleast 2 characters.`
              );
              this.checkIfValid[regxElementName] = false;
            } else {
              showValid(inputElement);
              this.checkIfValid[regxElementName] = true;
            }
          } else {
            showError(inputElement, `${regxElementName} is Invalid`);
            this.checkIfValid[regxElementName] = false;
          }
        }
        inputElement.value = updatedInputValue;
      } else if (regxElementName === "mobileNumber") {
        let newInputValue = elementValue.replace(/[^\d]/g, "");
		if (!newInputValue.match("[^d]")) {
          showError(inputElement, "Only Numbers are allowed");
          this.checkIfValid.mobileNumber = false;
        }
        else if(!newInputValue.match(/^[6|7|8|9]/)){
          newInputValue = newInputValue.slice(0, -1);
          showError(inputElement, "Number Should Start from 6/7/8/9");
          this.checkIfValid.mobileNumber = false;
        }
		else if(newInputValue.length>10){
		  newInputValue = newInputValue.slice(0, -1);
          showError(inputElement, "Maximum length exceeded for phone number");
		}else{
			if(newInputValue.match(this.regularExpressions.mobileNumber)){
				console.log("valid");
					showValid(inputElement);
					this.checkIfValid.mobileNumber = true;
			}
		}
	      inputElement.value = newInputValue;
      } 
	  else if (regxElementName === "username") {
        let newInputValue = elementValue.replace(/[^a-zA-Z0-9@_]/g, "");

        if (!newInputValue.match(/^[a-zA-Z]/)) {
          newInputValue = "";
          showError(inputElement, "Username should start with an alphabet.");
          this.checkIfValid.username = false;
        } else if (newInputValue.length > 20) {
          newInputValue = newInputValue.slice(0, 21);
          showError(
            inputElement,
            "Username should be between 6 and 20 characters long"
          );
          //this.checkIfValid.username = false;
        } else {
          if (newInputValue.match(this.regularExpressions.username)) {
            showValid(inputElement);
            this.checkIfValid.username = true;
            console.log("valid username:",this.checkIfValid.username);
          } else {
            showError(inputElement, "Invalid Username");
            this.checkIfValid.username = false;
            console.log("invalid username:",this.checkIfValid.username);
          }
        }
        inputElement.value = newInputValue;
      } else if (regxElementName === "dateOfBirth") {
        let newInputValue = elementValue.replace(/[^\d\/]/g, "");

        if (!newInputValue.match(/^((0[1-9]|[12][0-9]|3[01])\/)/)) {
          newInputValue = newInputValue.slice(0, 2);
          showError(inputElement, "Invalid Day (1-31)");
        } else if (newInputValue.charAt(3) == "/") {
          newInputValue = newInputValue.slice(0, 3);
          showError(inputElement, "Invalid input. Please  include only one /.");
        } else if (
          !newInputValue.match(/^((0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/)/)
        ) {
          newInputValue = newInputValue.slice(0, 5);
          showError(inputElement, "Invalid Month (1-12)");
        } else if (newInputValue.charAt(6) == "/") {
          newInputValue = newInputValue.slice(0, 6);
          showError(inputElement, "Invalid input. Please  include only one /.");
        } else if (
          !newInputValue.match(
            /^((0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(\d{4})$)/
          )
        ) {
          newInputValue = newInputValue.slice(0, 10);
          showError(inputElement, "Invalid Year");
        } else {
          if (
            newInputValue.match(
              /^((0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(\d{4}))$/g
            )
          ) {
            let inputDate = newInputValue.split("/");
            let birth_day = parseInt(inputDate[0]);
            let birth_month = parseInt(inputDate[1]) - 1;
            let birth_year = parseInt(inputDate[2]);

            const currentDate = new Date();
            const date_of_birth = new Date(birth_year, birth_month, birth_day);

            if (
              date_of_birth.getFullYear() === birth_year &&
              date_of_birth.getMonth() === birth_month &&
              date_of_birth.getDate() === birth_day
            ) {
              showValid(inputElement);
              this.checkIfValid.dateOfBirth = true;

              let calculateAge =
                currentDate.getFullYear() - date_of_birth.getFullYear();

              if (
                currentDate.getMonth() < date_of_birth.getMonth() ||
                (currentDate.getMonth() === date_of_birth.getMonth() &&
                  currentDate.getDate() < date_of_birth.getDate())
              ) {
                calculateAge--;
              }
              let ageVal = document.getElementById("age");
              let age = (ageVal.value = calculateAge);

              if (age > 18 && age < 100) {
                this.checkIfValid.age = true;
                showValid(document.getElementById("age"));
              } else {
                newInputValue = newInputValue.slice(0, -1);
                document.getElementById("age").value = "";
                console.log(inputElement.value);
                showError(inputElement, "Age should be between 18 to 100");
              }
            } else {
              showError(inputElement, "Invalid Date Format");
              this.checkIfValid.dateOfBirth = false;
              this.checkIfValid.age = false;
            }
          } else {
            showError(inputElement, "Invalid date format");
            this.checkIfValid.dateOfBirth = false;
            this.checkIfValid.age = false;
          }
        }
        inputElement.value = newInputValue;
      } else if (regxElementName === "email") {
         let newInputValue = elementValue.replace(/[^a-zA-Z0-9\.@_]/g, "");

         if(!(/^[a-zA-Z]/).test(newInputValue)){
            newInputValue=newInputValue.slice(0,-1);
            showError(inputElement, "Email should start with an Alphabet");
         }else if ((newInputValue.match(/@/g) || []).length > 1) {
            newInputValue = newInputValue.slice(0,-1);;
            showError(inputElement, "Only one '@' symbol is allowed");
            this.checkIfValid.email = false;
          }
          else if (newInputValue.match(/\.\./)) {
            newInputValue = newInputValue.slice(0,-1);
            showError(inputElement, "Consecutive dots (  . ) are not allowed.");
            for (let i = 0; i < newInputValue.length - 1; i++) {
              if (newInputValue[i] === '.' && newInputValue[i + 1] === '.') {
                newInputValue = newInputValue.slice(0,-1); // Consecutive dots found, invalid email
              }
            }
            this.checkIfValid.email = false;
          }
          
          else if (newInputValue.match(/\_\_/)) {
            newInputValue = newInputValue.slice(0,-1);
            showError(inputElement, "Consecutive underscores ( _ ) are not allowed.");
            for (let i = 0; i < newInputValue.length - 1; i++) {
              if (newInputValue[i] === '_' && newInputValue[i + 1] === '_') {
                newInputValue = newInputValue.slice(0,-1); // Consecutive dots found, invalid email
              }
            }
            this.checkIfValid.email = false;
          }
          else if ((newInputValue.match(/@\./g) || []).length >= 1) {
            newInputValue = newInputValue.slice(0,-1);
            showError(inputElement, "You cannot add ( . ) after ( @ )");
            this.checkIfValid.email = false;
          }
        else if (!newInputValue.match(/^[^\s@]+@[a-zA-Z]+(?:\.[a-zA-Z]{2,3}){1,2}$/)) {
          showError(inputElement, "Invalid Email");
          this.checkIfValid.email = false;
          console.log("invalid email:",this.checkIfValid.email);
        } else {
          showValid(inputElement);
          this.checkIfValid.email = true;
          console.log("valid email:",this.checkIfValid.email)
        }
        inputElement.value = newInputValue;
      } else if (regxElementName === "password") {
        let newInputValue = elementValue.replace(/[^\da-zA-Z.@_]/g, "");

        if (
          (newInputValue.match(/\@/g) || []).length > 4 ||
          (newInputValue.match(/\_/g) || []).length > 4
        ) {
          newInputValue = newInputValue.slice(0,-1);
          showError(
            inputElement,
            "Invalid input. Please include only 4 ( _ and @ )"
          );
          this.checkIfValid.password = false;
        } else if (newInputValue.length > 25) {
          newInputValue = newInputValue.slice(0, 25);
          showError(
            inputElement,
            "password should be between 6 and 25 characters long"
          );
          //this.checkIfValid.password = false;
        } else if (!newInputValue.match(/(?=.*[a-z])/)) {
          showError(
            inputElement,
            "Password should have atleast one Uppercase Character"
          );
          this.checkIfValid.password = false;
        } else if (!newInputValue.match(/(?=.*[A-Z])/)) {
          showError(
            inputElement,
            "Password should have Atleast one Lowercase Character"
          );
          this.checkIfValid.password = false;
        } else if (!newInputValue.match(/(?=.*[0-9])/)) {
          showError(inputElement, "password Should Have Atleast one number");
          this.checkIfValid.password = false;
        } else if (!newInputValue.match(/(?=.*[@|_])/)) {
          showError(
            inputElement,
            "password Should Have Atleast one speical character"
          );
          this.checkIfValid.password = false;
        } else {
          console.log(typeof password, newInputValue);
          console.log(typeof username, username.value);
          if (newInputValue == username.value) {
            showError(
              inputElement,
              "password is same as username please change"
            );
            this.checkIfValid.password = false;
            newInputValue = "";
          } else {
            if (
              !newInputValue.match(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.@_])[a-zA-Z][a-zA-Z0-9@_]{6,25}$/
              )
            ) {
              showError(inputElement, "Invalid Password");
              this.checkIfValid.password = false;
            } else {
              showValid(inputElement);
              this.checkIfValid.password = true;
            }
          }
        }
        inputElement.value = newInputValue;
      } else if (regxElementName === "confirmPassword") {
        let passwordValue = document.getElementById("password").value;
        if (elementValue === passwordValue) {
          showValid(inputElement);
          this.checkIfValid.confirmPassword = true;
          console.log(this.accountsInformation);
        } else {
          showError(inputElement, "Passwords do not match");
          this.checkIfValid.confirmPassword = false;
        }
      } else if (
        regxElementName === "gender" ||
        regxElementName === "courses" ||
        regxElementName === "hobbies"
      ) {
        if (regxElementName === "gender") {
          if (elementValue === "") {
            showError(inputElement, `Please select a ${regxElementName}`);

            this.checkIfValid.gender = false;
          } else {
            showValid(inputElement);
            this.checkIfValid.gender = true;
            this.insertData(regxElementName, elementValue);
          }
        } else {
          let checkedBoxes = document.querySelectorAll(
            `input[name="${regxElementName}"]:checked`
          );
          if (checkedBoxes.length === 0) {
            showError(
                inputElement,
                `Please select at least one ${regxElementName} Option`
            );
            this.checkIfValid[regxElementName] = false;
            // Clear the array for this regxElementName since no checkboxes are selected
            this.insertData(regxElementName, []);
            delete this.accountsInformation[""];
        } else {
            let checkedItemsList = [];
            for (let index = 0; index < checkedBoxes.length; index++) {
                if (checkedBoxes[index].checked) {
                    checkedItemsList.push(checkedBoxes[index].value);
                }
            }
            console.log("Checked Items List:", checkedItemsList);
            console.log(inputElement);
            showValid(inputElement);
            this.checkIfValid[regxElementName] = true;
            this.insertData(regxElementName, checkedItemsList);
        }
        }
      } else if (regxElementName === "city") {
        if (inputElement.selectedIndex > 0 && inputElement.selectedIndex < 5) {
          showValid(inputElement);
          this.checkIfValid.city = true;
          this.insertData(inputElement.id, elementValue);
        } else {
          this.checkIfValid.city = false;
          // showError(inputElement,"Please Select city")
        }
      } else if (regxElementName === "address") {
        if (elementValue.match(/^.{1,50}$/)) {
          showValid(inputElement);
          this.checkIfValid.address = true;
        } else {
          showError(inputElement, "Please enter correct address");
          this.checkIfValid.address = false;
        }
      } else if (regxElementName === "pincode") {
        let newInputValue = elementValue.replace(/[^\d]/g, "");

        if (!newInputValue.match("[^d]")) {
          showError(inputElement, "Only Numbers are allowed");
          this.checkIfValid.pincode = false;
        }
        else if(newInputValue.match(/^[0]/)){
          newInputValue = newInputValue.slice(0, -1);
          showError(inputElement, "Pincode cannot start from 0");
          this.checkIfValid.pincode = false;
        }
        else {
          if (newInputValue.length < 7) {
            if (newInputValue.match(this.regularExpressions.pincode)) {
              this.checkIfValid.pincode = true;
              showValid(inputElement);
            } else {
              showError(inputElement, "Invalid Pincode");
              this.checkIfValid.pincode = false;
            }
          } else {
            showError(inputElement, "Maximum length exceeded for pincode");
            newInputValue = newInputValue.slice(0, -1);
            //this.checkIfValid.pincode = false;
          }
        }
        inputElement.value = newInputValue;
      }
    };

    const showValid = (inputElement) => {
      let inputGroup = inputElement.parentElement;
      let errorToolTip = inputGroup.querySelector(".error-message");
      errorToolTip.style.display = "none";
      inputElement.style.borderColor = "rgb(0,255 ,21)";
      this.insertData(inputElement.id, inputElement.value);
    };

    const showError = (inputElement, errorMessage) => {
      let inputGroup = inputElement.parentElement;
      inputElement.style.borderColor = "red";

      console.log(inputElement);
      let errorToolTip = inputGroup.querySelector(".error-message");
      errorToolTip.innerHTML = errorMessage;
      errorToolTip.style.display = "block";
      setTimeout(function () {
        inputElement.style.borderColor = "rgb(255, 206, 8)";
        errorToolTip.style.display = "none";
      }, 3000);
    };

    this.updateInputState = (element, isValid) => {
      this.checkIfValid[element] = isValid;
    };
    this.usersDatabase = [
      { email: "admin@gmail.com", password: "Admin@1" ,username:"Admin@123" },
      { email: "mas@gmail.com", password: "MasOp@1" ,username:"Mas@123" },
    ];
    this.loginStatus = {
      isLoginIdValid: false,
      isPasswordValid: false,
    };
    const ValidateLoginForm = (loginElement,passwordElement) => {
        let isValidCredentials = false;
        for (let user of this.usersDatabase) {
          if ( (loginElement.value == user.email && passwordElement.value==user.password) 
               || (loginElement.value==user.username && passwordElement.value==user.password)) {
                isValidCredentials= true;
            break; 
          }else{
            isValidCredentials= false;
            this.showError(loginElement,"Invalid Credentials");
            this.showError(passwordElement,"Invalid Password");
          }
        }

        return isValidCredentials; 

    };

     this.ValidateLoginForm = ValidateLoginForm;
    this.validate = validate;
    this.insertData = insertData;
    this.verifyAllInputs = verifyAllInputs;
    this.showError = showError;
    this.showValid = showValid;
    this.resetRegisterInputFields = resetRegisterInputFields;
  }

  const validateForm = new ValidateForm();

  let firstName = document.getElementById("firstName");
  firstName.addEventListener("input", function () {
    validateForm.validate("firstName", this.value, firstName);
  });

  let lastName = document.getElementById("lastName");
  lastName.addEventListener("input", function () {
    validateForm.validate("lastName", this.value, lastName);
  });

  let mobileNumber = document.getElementById("mobileNumber");
  mobileNumber.addEventListener("input", function (event) {
    validateForm.validate("mobileNumber", this.value, mobileNumber);
  });
  let username = document.getElementById("username");
  username.addEventListener("input", function (event) {
    validateForm.validate("username", this.value, username);
  });
  let dateOfBirth = document.getElementById("dateOfBirth");
  dateOfBirth.addEventListener("input", function (event) {
    validateForm.validate("dateOfBirth", this.value, dateOfBirth);
  });

  let email = document.getElementById("email");
  email.addEventListener("input", function (event) {
    validateForm.validate("email", this.value, email);
  });
  let password = document.getElementById("password");
  password.addEventListener("input", function (event) {
    validateForm.validate("password", this.value, password);
  });
  let confirmPassword = document.getElementById("confirmPassword");
  confirmPassword.addEventListener("input", function (event) {
    validateForm.validate("confirmPassword", this.value, confirmPassword);
  });
  let gender = document.getElementsByName("gender");
  gender.forEach(function (genderEvent) {
    genderEvent.addEventListener("click", function () {
      if (genderEvent.value === "") {
        validateForm.checkIfValid.gender = false;
      } else {
        validateForm.checkIfValid.gender = true;
        validateForm.validate("gender", genderEvent.value, genderEvent);
      }
    });
  });

  let courses = document.getElementsByName("courses");
  courses.forEach(function (coursesEvent) {
  
    coursesEvent.addEventListener("click", function () {
      if (coursesEvent.value == "") {
        validateForm.checkIfValid.courses = false;
      } else {
        validateForm.checkIfValid.courses = true;
        validateForm.validate("courses", coursesEvent.value, coursesEvent);
      }
    });
  });

  let hobbies = document.getElementsByName("hobbies");
  hobbies.forEach(function (hobbiesEvent) {
    hobbiesEvent.addEventListener("click", function () {
      if (hobbiesEvent.value == "") {
        validateForm.checkIfValid.hobbies = false;
      } else {
        validateForm.checkIfValid.hobbies = true;
        validateForm.validate("hobbies", hobbiesEvent.value, hobbiesEvent);
      }
    });
  });

  let city = document.getElementById("city");
  city.addEventListener("change", function () {
    validateForm.validate("city", this.value, city);
  });

  let address = document.getElementById("address");
  address.addEventListener("input", function () {
    validateForm.validate("address", this.value, address);
  });

  let pincode = document.getElementById("pincode");
  pincode.addEventListener("input", function (event) {
    validateForm.validate("pincode", this.value, pincode);
  });

  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const isValid = validateForm.verifyAllInputs();
    if (isValid) {
      validateForm.registeredAccounts.push(validateForm.accountsInformation);
      console.log("Form is valid");
      localStorage.setItem(
        "AccountDetails",
        JSON.stringify(validateForm.registeredAccounts)
      );
      window.location.href = "home.html";
    } else {
      console.log(validateForm.checkIfValid);
      console.log(validateForm.accountsInformation);
    }
  });

let loginInput = document.querySelector("#InputCredential");
loginInput.addEventListener("input",function(event){
     if(event.target.name=="login-page-username"){
      console.log("enteredUsername");
      validateForm.validate("username", this.value, event.target);
     }else{
      console.log("entered email");
      validateForm.validate("email", this.value, event.target);
     }
});

let loginPage_Password = document.querySelector("#login-page-password");
  loginPage_Password.addEventListener("input", function () {
      validateForm.validate("password", this.value, loginPage_Password);
    
  });

let loginWithMobileButton = document.querySelector("#loginWithEmail");

loginWithMobileButton.addEventListener("click", function(event) {
  if (loginWithMobileButton.id === "loginWithEmail") {
      loginInput.value="";
      loginPage_Password.value="";
      loginInput.name = "login-page-email";
      loginInput.placeholder = "Enter Email";
      loginInput.parentElement.querySelector("label").textContent = "Email";
      loginWithMobileButton.id = "loginWithUsername";
      loginWithMobileButton.querySelector(".loginoption-icon").style.backgroundImage = `url('images/username.png')`;
      document.querySelector(".LoginOptions-panel h3").innerText = "You can login in with Username";
      loginWithMobileButton.name = "loginUsername";
  } else {
      loginInput.value="";
      loginPage_Password.value="";
      loginInput.name = "login-page-username";
      loginInput.placeholder = "Enter Username";
      loginInput.parentElement.querySelector("label").textContent = "Username";
      loginWithMobileButton.id = "loginWithEmail";
      loginWithMobileButton.querySelector(".loginoption-icon").style.backgroundImage = "url('images/gmail.png')";
      document.querySelector(".LoginOptions-panel h3").innerText = "You can login in with Email";
      loginWithMobileButton.name = "loginEmail";
  } 
});

  
  let loginNow = document.querySelector("#submitLogin");
  loginNow.addEventListener("click", function () {
    console.log(validateForm.loginStatus.isLoginIdValid);
    console.log(validateForm.loginStatus.isPasswordValid);
    console.log("username",validateForm.checkIfValid.username);
    console.log("email",validateForm.checkIfValid.email);
    console.log(loginInput.value);

    if (loginInput.value == "") {
      validateForm.showError(loginInput, "Field is Empty..");
    } else if (loginPage_Password.value == "") {
      validateForm.showError(loginPage_Password, "password does not exists..");
    } else {
		  let isValid=validateForm.ValidateLoginForm(loginInput,loginPage_Password);
      if (isValid) {
        utility.closeScreen();
        let login = document.getElementById("nav-login-btn");
        let register = document.getElementById("nav-register-btn");
        login.innerHTML = '<a href="#">LogOut</a>';
        register.innerHTML = `<a href="#">${loginInput.value}</a>`;
      } else {
        validateForm.showError(loginInput, "Invalid Data");
        validateForm.showError(loginPage_Password, "Invalid Password");
        
      }
    }
  });





});


