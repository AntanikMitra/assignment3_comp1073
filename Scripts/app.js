

/*Author: Antanik Mitra
  File: app.js
  Website: http://tom-assignment3.azurewebsites.net/
*/

"use strict";
// setup your IIFE(Immediately Invoked Function Expression)
(function () {
/*
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
    
 */   
     var request = new XMLHttpRequest();
    request.open('GET', '../info.json', true);
    request.addEventListener('readystatechange', function() {
        // wait for file to finish loading
        if (request.readyState === 4 && request.status === 200) {
            var information = {};

            // read in the json object
           information = JSON.parse(request.responseText);

            // declare local paragraph array container
            var paragraphArray = [];
            
            // read in the paragraphs array from the json object
            paragraphArray = information.paragraphs;
            
            // store length of the paragraphArray into a variable
            var paragraphArrayLength = paragraphArray.length;
            
            // loop through the paragraphArray
            for(var number=0; number < paragraphArrayLength; number++) {
                // create a reference to each html paragraph element 
                var paragraph = document.getElementById("paragraph" + (number+1) );
                
                // set the innerHTML of the paragraph to the string from the paragraphArray
                paragraph.innerHTML = paragraphArray[number];
            }

        }
    });
    request.send();
  
  })();