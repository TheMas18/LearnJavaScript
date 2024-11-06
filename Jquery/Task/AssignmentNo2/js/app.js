$(document).ready(function(){

	function ValidateForm(){
		this.parameters={
			popUp:$("#login-popup"),
			loginPage:$(".form-contents"),
			registerPage:$(".register-page"),
			setError:$("#setError"),
			confirmLogoutPopup:$(".confirm-logout"),
		};	
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

		let self=this;

		const closePopup=()=>{ this.parameters.popUp.hide() };	

		const loginNow=(gmail,password)=>{
			if(gmail=="admin@gmail.com" && password=="123"){
				this.parameters.popUp.hide();
				$("#login").html('<a href="#">LogOut</a>');	
			}else{	alert("failed");}
		};

		const openLoginPage=()=>{
			if($("#login").text()=="LogOut"){
				this.parameters.popUp.show();
				this.parameters.loginPage.hide();
				$(".confirm-logout").css("display","block");
				$("#conf-logout").on("click",function(){ document.location.reload();});
			}else{
				this.parameters.registerPage.hide();
				this.parameters.popUp.show();
				this.parameters.loginPage.css("display","block");
				this.parameters.popUp.on("click",function(event){
					if(event.target.id==self.parameters.popUp.attr('id')){ self.closePopup(); }
				});
			}

		};

		const openRegisterPage=()=>{
			this.parameters.loginPage.hide();
			this.parameters.popUp.show();
			this.parameters.registerPage.css("display","block");
			this.parameters.popUp.on("click",function(event){
				if(event.target.id==self.parameters.popUp.attr('id')){ self.closePopup(); }
			});
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
		const showValid = (inputElement) => {
			let inpGrp = inputElement.parent();
			let setError = inpGrp.find("#setError");
			setError.removeClass("error").addClass("valid");
		};

		const showError = (inputElement) => {
			let inpGrp = inputElement.parent()
			let setError = inpGrp.find("#setError");;
			setError.removeClass("valid").addClass("error");
		};

		this.updateInputState = (element, isValid) => {
			this.checkIfValid[element] = isValid;
		 };
		

		this.openLoginPage=openLoginPage;
		this.openRegisterPage=openRegisterPage;
		this.closePopup=closePopup;
		this.validate = validate;
		this.loginNow=loginNow;
	}
const validateForm = new ValidateForm();


$("#login").on("click",function(){ 
	validateForm.openLoginPage(); 

});//Nav-login-btn

$("#register").on("click",function(){ validateForm.openRegisterPage(); });//Nav-Reister-btn

$(".close-btn-design").on("click",function(){ validateForm.closePopup(); });//closeButton

$("#register-anchor").on("click",function(){ validateForm.openRegisterPage(); });

$("#login-anchor").on("click",function(){ validateForm.openLoginPage(); });


$("#fname").on("input",function(){
	validateForm.validate("fname", $("#fname").val(), $("#fname"));
});
$("#lname").on("input",function(){
	validateForm.validate("lname", $("#lname").val(), $("#lname"));
});
$("#age").on("input",function(){
	validateForm.validate("age", $("#age").val(), $("#age"));
});
$("#dob").on("input",function(){
	validateForm.validate("dob", $("#dob").val(), $("#dob"));
});
$("#address").on("input",function(){
	validateForm.validate("address", $("#address").val(), $("#address"));
});


$("input[name='gender']").on("click",function() {
			let genderValue=$('input[name="gender"]:checked').val();
			if (genderValue=="") {
					validateForm.checkIfValid.gender=false;
			}
			else { 
	 		  validateForm.checkIfValid.gender=true;
			}
});
  
$("input[name='courses']").on("click",function() {
			let courseValue=$('input[name="courses"]:checked').val();
			if (courseValue=="") {
				validateForm.checkIfValid.courses=false;
			}
			else { 
	 		    validateForm.checkIfValid.courses=true;
			}
});

$("#city").on("input",function() {
			let cityValue=$('#city').prop('selectedIndex');
			if(cityValue>0 && cityValue<5){
				validateForm.checkIfValid.city=true;
			}
			else{
			validateForm.checkIfValid.city=false;
			}
});

$("form").on("submit",function(event){
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

	alert("Please fill in all fields correctly.");
  }
});

$('#login-btn').on("click",function(){
	validateForm.loginNow($("#gmail").val(),$("#password").val());	
});


});

