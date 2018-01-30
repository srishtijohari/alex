console.log("Hello World");

var GreetingContainer;

GreetingContainer = "Hello Worlds!";

console.log(GreetingContainer);

alert ("Greetings " + GreetingContainer);

//WRITE TO HTML PAGE DOCUMENT MODEL (DOM)
document.write("<p>" + GreetingContainer + "</p>");

//---------------------------//
//---------------------------//

var ul = document.getElementbyiD("authors");
var url - "https://randomuser.me/api/?results=10";

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
	var authors = JSON.parse(xhr.responseText);
	return authors.results.map(function(author)
}
