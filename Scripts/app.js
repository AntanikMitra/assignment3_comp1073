

/*Author: Antanik Mitra
  File: app.js
  Website: http://assignment2-comp1073.azurewebsites.net/
*/

"use strict";
// setup your IIFE(Immediately Invoked Function Expression)
(function () {

   // initializing variable in contact page form
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var comment = document.getElementById("comment");
    var submitButton = document.getElementById("submitButton");
    submitButton.pre

 // adding the event listener
    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        console.log("First Name: " + firstName.value);
        console.log("Last Name: " + lastName.value);
        console.log("Email: " + email.value);
        console.log("Phone: " + phone.value);
        console.log("Comment: " + comment.value);
    });
  
  })();