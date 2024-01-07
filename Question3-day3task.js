
var req = new XMLHttpRequest();
// Step 02: Specify the API which you are goin to use.
req.open("GET", "https://restcountries.com/v2/all");
// Step 03: Sending the Request 
req.send();

req.onload = function(){
    var result = JSON.parse(req.response);
    var i =0;
 for (i in result) {
    var r = result[i]
    console.log('Country name : ' + r["name"], ' , Region : ' +r["region"], ' , Sub Region : ' +r["subregion"], ' , Population  : ' + r["population"]);
 }


}