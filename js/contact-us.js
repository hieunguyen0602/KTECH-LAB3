function validationForm() {
  let information = document.forms["informationAccount"];
  let firstName = information["firstName"].value;
  let lastName = information["lastName"].value;
  let email = information["email"].value;
  let phone = information["phone"].value;

  if(firstName=="" || lastName=="" || email=="" || phone=="") {
    alert("Please fill out all the information with *!");
    return false;
  }

  if(isNaN(phone)) {
    alert("Please fill out correct phone number");
    information["phone"].focus();
    return false;
  }

  alert("Submit successful!");
  return true;
} 

