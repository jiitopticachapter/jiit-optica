const form = document.querySelector("#create-account");
const usernameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");

form.addEventListener("submit", (event) => {
  //form m jb jiska bhi type submit hoga vo invoke hoga to hi ye eventListener call hoga
  // isliye hi hmne btn ko tyoe submit diya tha agr ni dete to ye call hi ni hoga
  // event.preventDefault();
  // if invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, signals to the operation that caused event to be dispatched that it needs to be canceled
  // it basiaclly stops submitting our form
  validateForm();
  if(isFormValid()==true){
  form.submit();
  }else{
  event.preventDefault();
    
  }
});


function isFormValid(){
  const inputContainers = document.querySelectorAll(".input-gp");
  let result = true;
  inputContainers.forEach((val)=>{
    if(val.classList.contains("error")){
      result=false;
    }
  });

  return result;

}

function validateForm() {
  //USERNAME

  if (usernameInput.value.trim() == "") {
    setError(usernameInput, "Name cannot be empty");
  } else if (
    usernameInput.value.trim().length < 5 ||
    usernameInput.value.trim().length > 20
  ) {
    setError(usernameInput, "Name must contain 5 to 20 characters only.");
  // } else if (typeof(usernameInput)!=="string") {
  //   setError(usernameInput, "Name must be a string");
  } else {
    setSuccess(usernameInput);
  }

  //EMAIL
  if (emailInput.value.trim() == "") {
    setError(emailInput, "Email cannot be empty");
  } else if (isEmailValid(emailInput.value)) {
    setSuccess(emailInput);
  } else {
    setError(emailInput, "Provide valid email address");
  }

  //PASSWORD
  if (passwordInput.value.trim() == "") {
    setError(passwordInput, "Password cannot be empty");
  } else if (
    passwordInput.value.trim().length < 6 ||
    passwordInput.value.trim().length > 10
  ) {
    setError(passwordInput, "Password must contain 6 to 10 characters only.");
  } else {
    setSuccess(passwordInput);
  }


  //CONFIRM-PASSWORD
  if (confirmPasswordInput.value.trim() == "") {
    setError(confirmPasswordInput, "Password cannot be empty");
  } else if(confirmPasswordInput.value!== passwordInput.value){
    setError(confirmPasswordInput , "Password does not match");
  }else{
    setSuccess(confirmPasswordInput);
  }
}

function setError(element, errorMessage) {
  const parent = element.parentElement;
  if (parent.classList.contains("success")) {
    parent.classList.remove("success");
  }
  parent.classList.add("error");
  const paragraph = parent.querySelector("p");
  paragraph.textContent = errorMessage;
}

function setSuccess(element) {
  const parent = element.parentElement;
  if (parent.classList.contains("error")) {
    parent.classList.remove("error");
  }
  parent.classList.add("success");
}

function isEmailValid(email) {
  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  return regex.test(email);
}


// http://127.0.0.1:5500/result.html?username=Rishika+Aggarwal&email=aggarwalrishika135%40gmail.com&password=2345678&confirm-password=2345678
