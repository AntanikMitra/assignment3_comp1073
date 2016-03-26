

/*Author: Antanik Mitra
  File: app.js
  Website: http://tom-assignment3.azurewebsites.net/
*/


// setup your IIFE(Immediately Invoked Function Expression)
(function () {


    "use strict";
    var request = new XMLHttpRequest();
    request.open('GET', '../projects.json', true);
    request.addEventListener('readystatechange', function () {
        if (request.readyState === 4) {
            // creating a variable for object
            var projects = {};
        
            // parse the json object
            projects = JSON.parse(request.responseText);
         
            // declare local paragraph array 
            var paragraphArray = [];
            
            // read in paragraph array
            paragraphArray = projects.paragraphs;
            
            //storing length of array
            var paragraphArrayLength = paragraphArray.length;
            
            // looping through array
            for(var number=0; number < paragraphArrayLength; number++){
              
              // creating a reference
              var paragraph = document.getElementById("paragraph" + (number+1) );
              paragraph.innerHTML = paragraphArray[number];  
                
            }
        }
    });
    request.send();

})();