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
		"zipcode": 10027}
	
	var myArray = new Array;
	console.log("myArray:", myArray);
	myArray = [0,1,2, 'string1', 'string2', 'string3', true, false];
	console.log("myArray, myArray[2]:", myArray, myArray[2]);
	console.log("myArray:",myArray[5])
	var daysoftheweek = [
	"Sunday", 
	"Monday" ,
	"Tuesday" ,
	"Wedsday" ,
	"Thursday" ,
	"Friday" ,
	"Saturday" 
	];
	console.log(daysoftheweek, daysoftheweek[0]);
	var d = new Date();
	console.log("date:",d)
	var getWeekDay = d.getDay();
	console.log("daysoftheweek", daysoftheweek[getWeekDay], "getWeekDay", getWeekDay)
	
	var arrayofStuff = [
	{'name': 'Judi'},
	[3,4,5],
	'nifty'
	]
	console.log("arrayofStuff", arrayofStuff.lenth);
	
	var nycBoroughs = [
		'Manhattan',
		'Brooklyn',
		'Queens',
		'Bronx',
		'Staten Island'
	];
	console.log('nycBoroughs:', nycBoroughs, nycBoroughs[3])
	nycBoroughs[3] = "The Bronx";
	console.log('boroughs:', nycBoroughs, nycBoroughs[3])
	
	console.log('nycBoroughs.lenth', nycBoroughs.length)
	nycBoroughs[nycBoroughs.length] = "westchester";
	console.log('extra boroughs:', nycBoroughs)
	nycBoroughs.push("Yonkers")
	console.log('push boroughs')
	nycBoroughs.pop('westchester');
	console.log('pop boroughs:', nycBoroughs)
	

 var transport = "bicycle";
 // var transport = "subway"
 transport === "bicycle"
 	? console.log("Your transport is bicycle")
	: console.log("Your transport is subway")
//Why we don't use semicolon?
//Ternary (conditional) operator setting a variable
var transportType = transport === "bicycle" ? "type bicycle" : "type subway";
console.log("transportType", transportType);
//readability
var transportType = (transport === "bicycle") ? "type bicycle" : "type subway";


	console.log("object:" , myObj)	
	console.log("object:",myObj, myObj.zipcode)


var thing = 12;
console.log('typeof', typeof thing);
var thing = [];
console.log('typeof', typeof thing);

var i = 0;
console.log("i, daysoftheweek, daysoftheweek.length", i, daysoftheweek, daysoftheweek.length)

for ( i; i < daysoftheweek.length; i++) {
	daysoftheweek[i];
	console.log('daysoftheweek[i]', daysoftheweek[i])
}

var nycMarkets = [
	{
		"accepts_ebt": true,
		"additionalinfo": "Open year-round",
		"address": "Union bet Driggs & N 12th St",
		"borough": "Brooklyn",
		"facilityname": "McCarren Park Greenmarket",
		"nyc_dept_of_health_cooking": false,
		"open_year_round": true,
		"saturday": "8am-3pm ",
		"service_category": "Farmers Markets and Food Boxes ",
		"service_type": "Farmers Markets",
		"website": "https://www.grownyc.org/greenmarket",
		"zipcode": "11222"
	}, {
		"accepts_ebt": true,
		"additionalinfo": "Market open dates: 7/14/2017 to 11/22/2017",
		"address": "E 163rd St & Hunts Point Ave",
		"borough": "Bronx",
		"enddate": "2017-11-22T00:00:00.000",
		"facilityname": "Harvest Home Hunts Point Market",
		"nyc_dept_of_health_cooking": false,
		"open_year_round": false,
		"service_category": "Farmers Markets and Food Boxes ",
		"service_type": "Farmers Markets",
		"startdate": "2017-07-14T00:00:00.000",
		"website": "https://www.harvesthomefm.org/",
		"wednesday": "8am-4pm",
		"zipcode": "10459"
	}, {
		"accepts_ebt": true,
		"additionalinfo": "Market open dates: 6/28/2017 to 11/15/2017",
		"address": "Clarkson & Troy Aves",
		"borough": "Brooklyn",
		"enddate": "2017-11-15T00:00:00.000",
		"facilityname": "Urban Oasis Farmers Market",
		"nyc_dept_of_health_cooking": false,
		"open_year_round": false,
		"service_category": "Farmers Markets and Food Boxes ",
		"service_type": "Farmers Markets",
		"startdate": "2017-06-28T00:00:00.000",
		"wednesday": "2pm-5:30pm",
		"zipcode": "11203"
	}, {
		"accepts_ebt": false,
		"additionalinfo": "Market open dates: 7/6/2017 to 11/16/2017",
		"address": "114-02 Guy R Brewer Blvd",
		"borough": "Queens",
		"enddate": "2017-11-16T00:00:00.000",
		"facilityname": "Queens Hospital Center Farmers Market II",
		"nyc_dept_of_health_cooking": false,
		"open_year_round": false,
		"service_category": "Farmers Markets and Food Boxes ",
		"service_type": "Farmers Markets",
		"startdate": "2017-07-06T00:00:00.000",
		"thursday": "8am-4pm",
		"zipcode": "11434"
	}, {
		"accepts_ebt": true,
		"additionalinfo": "Market open dates: 7/8/2017 to 10/28/2017",
		"address": "90 W 164th St bet Ogden & Nelson Aves",
		"borough": "Bronx",
		"enddate": "2017-10-28T00:00:00.000",
		"facilityname": "Taqwa Community Farmers Market",
		"nyc_dept_of_health_cooking": false,
		"open_year_round": false,
		"saturday": "10am-4pm",
		"service_category": "Farmers Markets and Food Boxes ",
		"service_type": "Farmers Markets",
		"startdate": "2017-07-08T00:00:00.000",
		"zipcode": "10452"
	}, {
		"accepts_ebt": true,
		"additionalinfo": "Open year-round",
		"address": "506 Lenox Ave bet 135th & 137th Sts",
		"borough": "Manhattan",
		"facilityname": "Harvest Home Harlem Hospital Farmers Market",
		"friday": "8am-7pm",
		"nyc_dept_of_health_cooking": false,
		"open_year_round": true,
		"service_category": "Farmers Markets and Food Boxes ",
		"service_type": "Farmers Markets",
		"website": "https://www.harvesthomefm.org/",
		"zipcode": "10037"
	}, {
		"accepts_ebt": true,
		"additionalinfo": "Market open dates: 6/24/2017 to 10/28/2017",
		"address": "Livonia Ave bet Powell & Junius Sts",
		"borough": "Brooklyn",
		"enddate": "2017-10-28T00:00:00.000",
		"facilityname": "Isabahlia Farmers Market",
		"nyc_dept_of_health_cooking": false,
		"open_year_round": false,
		"saturday": "8am-3pm ",
		"service_category": "Farmers Markets and Food Boxes ",
		"service_type": "Farmers Markets",
		"startdate": "2017-06-24T00:00:00.000",
		"website": "https://www.isabahlialoefinc.org/",
		"zipcode": "11212"
	}
];
var i = 0;
console.log("1,nycMarkets, nycMarkets.length", i, nycMarkets, nycMarkets.length)
for (i; i < nycMarkets.length; i++) {
	nycMarkets[i];
	console.log('nycMarkets[i]', nycMarkets[i]);
	var cooking = (nycMarkets[i].nyc_dept_of_health_cooking === true) ? "yes" : "no";
	console.log('cooking', cooking);
	var openYearRound = (nycMarkets[i].open_year_round === true) ? "yes" : "no";
	console.log('open_year_round', openYearRound)
}

	document.addEventListener('DOMContentLoaded', function(event) {
		console.log("ready!", event);
	var welcome = "Web Basic";
	var intro= "This a 9-week program with" 
	var females = 3; //x is an interger
	var males = 2; //y is a sting
	var totalOfStudents = females + males;
	var introTxt = "This is a 9-week program with" + totalOfStudents + "students";

	// console.log(message, value)
	
	console.log("welcome", welcome);
	console.log("intro", intro );
	console.log("females", females );
	console.log("males", males);
	console.log("totalOfStudents:", totalOfStudents);
	console.log("introTxt", introTxt);

	document.getElementById("welcome").innerHTML = welcome;
	document.querySelector(".intro").innerHTML = introTxt;
});
