//This is the function for the button, when user clicks the button a new taps open
//Facebook button
function facebook() {
	window.open("https://www.facebook.com/RestoTrust");
}
//Twitter button
function twitter() {
	window.open("https://twitter.com/RestoTrust?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor");
}

//Restoration Trust website button
function website() {
	window.open("https://restorationtrust.org.uk");
}

//Sainsbury center visual arts website button
function arts() {
	window.open("https://scva.ac.uk");
}

function app() {
	window.location="photoGallery.html"
}

//Take 
function backToGallery(){
    window.open("photoGallery.html","_self")
}

function submit(){
    var submitText=document.getElementById("TextBox").value;
    console.log("Feedback", submitText);
}