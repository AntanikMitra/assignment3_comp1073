

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
    
 
    
    // declear an anonymous function with named alias
    var replaceFirstParagraph = function () {

        console.log("inside replaceFirstParagraph anonymous Function");

        var firstParagraph;

        firstParagraph = document.getElementById("firstParagraph");

        firstParagraph.innerHTML = "A passionate and hardworking person new to this field.Having some experience as IT tech help and in front-end designing.Did some freelancing work for non charitable organizations and firms.Antanik is capable of great creativity, functionality and productivity to this field.";


    };

    var replaceHead = function () {

        console.log("inside replaceHead anonymous Function");

        var secondHead;

        secondHead = document.getElementById("secondHead");

        secondHead.innerHTML = "Who am I?";


    };


    var replaceOne = function () {

        console.log("inside replaceOne anonymous Function");

        var headOne;

        headOne = document.getElementById("headOne");

        headOne.innerHTML = "Hamid Law Office";


    };


    var replaceTwo = function () {

        console.log("inside replaceTwo anonymous Function");

        var headTwo;

        headTwo = document.getElementById("headTwo");

        headTwo.innerHTML = "Assignment1";


    };


    var replaceThree = function () {

        console.log("inside replaceHead anonymous Function");

        var headThree;

        headThree = document.getElementById("headThree");

        headThree.innerHTML = "Assignment2";


    };

    // call replaceFirstParagraph
    replaceFirstParagraph();
    // call replaceHead
    replaceHead();
    replaceOne();
    replaceTwo();
    replaceThree();




})();