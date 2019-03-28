console.log("External file");


var city;
var cityFrom = "";
var cityName = "New York City";
var x = 32;
console.log("cityName, x:", cityName, x);
var firstname = "Judi", lastname = "Desire";
console.log("firstname, lastname", firstname, lastname);
var s = "2019";
var n = 2001;
console.log("age:", s - n);
console.log("age:", s + n);
console.log("age:", s + parseInt(n) );
var escapequotes = "This is Judi's \"city\" name";
console.log ("escapequotes:", escapequotes);

/* String properties and methods
*/
var myString = "This is my string.";
var stringLength = myString.length;
console.log("stringLength: ", stringLength);
var convertoUpperCase = myString.toUpperCase();
console.log("convertoUpperCase:", convertoUpperCase, myString);

/*
Number
	Javascript has only one type of number. Numbers can be written with or 
	*/
var x = 3.14;  // A number with decimals 
var y = 3;		// A number without decimals
console.log("x + y =", (x+y), x);	// 6.140000000000001 - 3.14

var x1 = 123e5; // 12300000
var y2 = 123e-5;// 0.00123

var a = 0.2 + 0.1;		// x will be 0.30000000000000004
var d = (0.2 * 10 + 0.1 * 10) / 10;

/* Math
	The Javascript Math object allows you to perform mathematical tasks on numbers
	*/
	var xy = (x + y);
	var m = Math.round(xy);
	console.log("m:", m);
	
	var show_random_num = Math.random();
	console.log("show_random_num", show_random_num);
	
 	
 	/* Boolean*/

	console.log("cityName:", Boolean(cityName), cityName);
	console.log("city:", Boolean(city), city);
	var x = null
	console.log("x:", Boolean(x));

	console.log("City From:", cityFrom, Boolean(cityFrom));
	cityFrom = "Brooklyn";
	console.log("city From:", cityFrom, Boolean(cityFrom));

	/*Objects*/
	var myObj = {}
	console.log(myObj)
	var myObj = {
		"state": "New York",
		"zipcode": 10027
	}
	console.log("object:",myObj, myObj.zipcode)

	






