
var req = new XMLHttpRequest();
// Step 02: Specify the API which you are going to use.
req.open("GET", "https://restcountries.com/v2/all");
// Step 03: Sending the API Request 
req.send();
// create a function below to code//
req.onload = function(){
    var result = JSON.parse(req.response);
    var i =0;
 
 for (i in result) {
    var r = result[i]
    console.log('flags  : ' + r["flag"], );
  
 }
 
}