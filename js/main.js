function hello (pageID) {
	console.log("hello world!", pageID);
}
hello("mari");

var navbar = {
	"home": {
		"url": "index.html",
		"heading": "Home"
	},
	"about": {
		"url": "about.html",
		"heading": "About Me"
	},

	"blog": {
		"url": "blog.html",
		"heading": "Blog"
	},

	"contact": {
		"url": "contact.html",
		"heading": "Contact Us"
	}
};

var location = 0;
function navigationBar(pageID, logo){
	// body...
	console.log("pageID", pageID, logo, typeof navbar);
	if (typeof navbar === "object") {
		console.log("yes");
		for( var n in navbar){
			console.log("n -> n", n);
			console.log("navbar ->", navbar);
			document.getElementById("navbarUL")
			.appendChild(
				document.createElement('li')
			setAttribute('class','item');

	var nav;
	if (pageID === "home"){
		//<a hrf="index.html#home">Home</a>//
		nav = '<a href=" '+navbar[pageID].url+'#'+n+'">'+navbar[n].heading+'</a>';
		} else {
			//<a href="about.html">About</a>
			nav = '<a href="'+navbar[n].url+'">'+navbar[n].heading+'</a>';
		}
		document.getElementByTagName("li")[location]. = nav;
		location++;
		console.log('l++', location);
	}
} else {
	console.log("error");
}
navigationBar("home", "img/logo.png");