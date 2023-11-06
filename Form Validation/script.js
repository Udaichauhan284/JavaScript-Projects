
let nameError = document.getElementById('name_error');
let phoneError =document.getElementById('phone_error');
let emailError = document.getElementById('email_error');
let msgError = document.getElementById('msg_error');

let submitError = document.getElementById('submit_error');

function validateName(){
  let nameValue = document.getElementById('name').value;
  if(nameValue.length === 0){
    nameError.textContent = "Name is Required";
    return false;
  }
  if(!nameValue.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.textContent = "Write Full Name";
    return false;
  }
  nameError.innerHTML = "<i class='fa fa-check-circle-o'></i>";
  return true;
}
function validatePhone(){
  let phone = document.getElementById('phone').value;
  if(phone.length === 0){
    phoneError.textContent = "Phone is Required";
    return false;
  }
  if(phone.length !== 10){
    phoneError.textContent = "Number must be 10 digit";
    return false;
  }
  if(!phone.match(/^[0-9]{10}$/)){
    phoneError.textContent = "Only Digit Allow";
    return false;
  }
  phoneError.innerHTML = "<i class='fa fa-check-circle-o'></i>";
  return true;
}
function validateEmail(){
  let email = document.getElementById('email').value;
  if(email.length === 0){
    emailError.textContent = "Email Required";
    return false;
  } 
  if(!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)){
    emailError.textContent = "Email Invalid";
    return false;
  }
  emailError.innerHTML = "<i class='fa fa-check-circle-o'></i>";
  return true;
}
function validateMsg(){
  let msg = document.getElementById('msg').value;
  let req = 30;
  let left = req - msg.length;
  if(left > 0){
    msgError.textContent = left + " More char required";
    return false;
  }
  msgError.innerHTML = "<i class='fa fa-check-circle-o'></i>";
  return true;
}

function validateForm(){
  if(!validateName() || !validatePhone() || !validateEmail() || !validateMsg()){
    submitError.style.display = "block";
    submitError.textContent = "Please fix the error";
    setTimeout(()=>{submitError.style.display="none"},3000);
    return false;
}else{
  alert("Successfully Submited");
}
}