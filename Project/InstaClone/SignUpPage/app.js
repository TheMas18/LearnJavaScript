let email_phone_valid=false;
let fullname_valid=false;
let username_valid=false;
let password_valid=false;


function showValid(input,num){
	const inputGrp=input.parentElement;
	let setError=inputGrp.querySelector("#setError");
	if(setError.classList.contains(`errror${num}`))
	 {
		setError.classList.remove(`errror${num}`);
		setError.className=`valid${num}`;
	 }
	 else
	   {
		setError.className=`valid${num}`;
	   }
}

function showError(input,num){
	const inputGrp=input.parentElement;
	let setError=inputGrp.querySelector("#setError");
	if(setError.classList.contains(`valid${num}`))
		{
			setError.classList.remove(`valid${num}`);
			setError.className=`error${num}`;
		}
	else
		{
			setError.className=`error${num}`;
		}
}


let me=document.forms['myForm']["mob_em"];
me.addEventListener("input",function(){
	value=document.forms['myForm']["mob_em"].value;
	const regxPhoneNumb = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
    const regxEmail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
	if(value.match(regxPhoneNumb))
		{
			showValid(me,1);
			email_phone_valid=true;
		}
    else 
	{
		if(value.match(regxEmail))
		{
			showValid(me,1);
			email_phone_valid=true;
		}
		else
		{
			showError(me,1);
			email_phone_valid=false;
		}
    }
});



let fullname=document.forms['myForm']["fullname"];
fullname.addEventListener("input",function(){
	value=document.forms['myForm']["fullname"].value;
	const regxFullname = /^[a-zA-Z ]+$/; 
	if(value.match(regxFullname))
		{
			showValid(fullname,2);
			fullname_valid=true;
		}		
    else
		{
			showError(fullname,2);
			fullname_valid=false;
		}

});


let uname=document.forms['myForm']["uname"];
uname.addEventListener("input",function(){
	value=document.forms['myForm']["uname"].value;
	const regxUsername =/^[a-z0-9_.]+$/;
	if(value.match(regxUsername))
		{
			showValid(uname,3);
			username_valid=true;
		}		
    else 
	{
		showError(uname,3);
		username_valid=false;
	}
});


let password=document.forms['myForm']["password"];
password.addEventListener("input",function(){
	p=document.forms['myForm']["password"].value;	
    if (p.length < 8) {
		showError(password,4);
		upassword_valid=false;
    }
    else if (p.search(/[a-z]/i) < 0) {
     	showError(password,4);
		upassword_valid=false;
    }
    else if (p.search(/[0-9]/) < 0) {
       	showError(password,4);
		upassword_valid=false;
	}
   
	else{
		showValid(password,4);
		password_valid=true;
	}

});

function validateForm(){

	if(email_phone_valid && fullname_valid && username_valid && password_valid)
		{
			window.location.href = "https://www.geeksforgeeks.org/"; 
		
	    }
	else
		{
		   window.open ("../LoginPage/index.html", "_self");
		}
}