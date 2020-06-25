function searchNewHaven(pizzaStore) {
var queryURL = "https://www.google.com/maps/" + 
pizzaStore + "apikey=AIzaSyBdiafvLk3baNqlNxlJCX9-dbEFvzZ73Qs";
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);
})};
$( document ).ready(function() {
    
});