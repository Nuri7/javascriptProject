
/********************
Assignment 1 + 2 cheatsheets!
********************/


//creating a variable
var a = 10;
var b = "hello";

//assignment making my own alert function
function showString(string1){
	alert(string1);
}

showString("hello");


// Creating a function that doesnt take an argument
function noArgument(){
	alert("something");
}

noArgument();


// Using if and else logic while comparing to an argument given in the function
function amIOldEnough(age) {
	if(age <= 18){
		alert("you are too young");
	}
	else if(age >= "door2"){
		alert("you are too old");
	}
	else{
		alert("thats not your age");
	}
}
amIOldEnough(18);

// I am making an array with names
var names = ["john", "william", "denzel", "eric"];

//loop assignment
for(var i=0;i<names.length;i++){
	console.log(names[i] + " is my friend");
}

/********************
Assignment Solve 4 problems
********************/

//Create a script with two variables assigned to two numbers. Add them together and output the result to the console. Now do the same with two strings.
var q =1;
var w =2;
console.log(q+w);
var e = "hello";
var r = "world";
console.log(e+r);

//Create a multidimensional array related to a subject that interests you. Output two of the items in sub-arrays to the console
var interests = [
				["drinking", "eating"], 
				["dancing", "football"]
				];

console.log(interests[0,0] + " " + interests[1,0] + "is what I like");

//Declare a function that takes a name as an argument and tells the user what name they've entered. Try running it after it has been declared.
var answer = prompt("give me a name");
alert("you have entered " + answer);

//Declare a function that takes no arguments but prints something to the console. Try running it after it has been declared.
// Creating a function that doesnt take an argument
function printSomething(){
	alert("something");
}
printSomething();

