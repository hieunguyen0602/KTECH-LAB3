function validationForm() {
  let information = document.forms["informationAccount"];
  let firstName = information["firstName"].value;
  let lastName = information["lastName"].value;
  let email = information["email"].value;
  let phone = information["phone"].value;

  let patternEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let patternPhone = /^0\d{9}$/;

  if(firstName=="" || lastName=="" || email=="" || phone=="") {
    alert("Please fill out all the information with *!");
    return false;
  }

  if(!patternPhone.test(phone)) {
    alert("Please fill out correct phone number");
    information["phone"].focus();
    return false;
  }

  if(!patternEmail.test(email)) {
    alert("Please fill out correct email");
    information["email"].focus();
    return false;
  }

  alert("Submit successful!");
  return true;
} 

