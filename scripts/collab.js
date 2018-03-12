//get the canvas information from the HTML
var canvas = document.getElementById("testCanvas");
var c = canvas.getContext("2d");
var testAudio = document.getElementById("testAudio");
var checkAudio = document.getElementById("checkAudio");

//define a container for the bubbles to bounce in
var container = {
	x: 0,
	y: 0,
	width: 1200,
	height: 600,
	img: document.getElementById("art")
}

//an array that holds all information for the bubbles
var bubbles = [{
	id: 1,
	x: randomInteger(75,1125),
	y: randomInteger(75,525), 
	r: randomInteger(20,40),
	vx: randomInteger(2,5),
	vy: randomInteger(2,5),
	colour: randomColour(),
	audio: testAudio
},{
	id: 2,
	x: randomInteger(75,1125),
	y: randomInteger(75,525),
	r: randomInteger(20,40),
	vx: randomInteger(2,5),
	vy: randomInteger(2,5),
	colour: randomColour(),
	audio: checkAudio
},{
	id: 3,
	x: randomInteger(75,1125),
	y: randomInteger(75,525),
	r: randomInteger(20,40),
	vx: randomInteger(2,5),
	vy: randomInteger(2,5),
	colour: randomColour(),
	audio: assessAudio
},{
	id: 4,
	x: randomInteger(75,1125),
	y: randomInteger(75,525),
	r: randomInteger(20,40),
	vx: randomInteger(2,5),
	vy: randomInteger(2,5),
	colour: randomColour(),
	audio: markAudio
}]

//labels for each bubble
var labels = ["Test", "Check", "Assess", "Mark"]

//create a random integer with a minimum and maximum value
function randomInteger(mini,maxi) {
	var randomInt = Math.floor(Math.random() * (maxi - mini + 1)) + mini;
	return randomInt;
}

//produces a random colour based on hsl values
function randomColour() {
    var h = randomInteger(1, 360);
    var s = randomInteger(50, 100);
    var l = randomInteger(0, 50);
    return 'hsl(' + h + ',' + s + '%,' + l + '%)';
}

//collects all the radii from the bubbles array
function getRadii() {
	var radii = []
	for(var i=0; i < bubbles.length; i++) {
		radii.push(bubbles[i].r);
	}
	return radii;
}

//gets the decimal value for volume control
function getPercentile(radiiNo) {
	var total = 0;
	var radii = getRadii()
	
	for(var i=0; i < radii.length; i++) {
		total = total + radii[i];
	}
	
	var percentile = radii[radiiNo] / total;
	percentile = parseFloat(Number(Math.round(percentile+'e2')+'e-2'));
	return percentile;
}

//function to control all movement with the bubbles
function animation() {
	//sets the image as the container background
	c.drawImage(container.img, container.x, container.y, container.width, container.height);

	for(var i = 0; i < bubbles.length; i++) {
		//creates all bubbles
		c.fillStyle = bubbles[i].colour;
		c.beginPath();
		c.arc(bubbles[i].x, bubbles[i].y, bubbles[i].r, 0, Math.PI * 2, true);
		c.fill();
		
		//adds the vx and vy (speed values) to the current position of the bubble
		bubbles[i].x += bubbles[i].vx;
		bubbles[i].y += bubbles[i].vy;
		
		if(bubbles[i].vx == 0) {
			bubbles.vx = 2;
		}
		if(bubbles[i].vy == 0) {
			bubbles.vy = 2;
		}
		
		//makes sure that if the bubbles collide, they reverse direction - based on elastic collision
		for(var j=0; j < bubbles.length; j++) {
			
			var dx = bubbles[i].x - bubbles[j].x;
			var dy = bubbles[i].y - bubbles[j].y;
			var distance = Math.sqrt(dx * dx + dy * dy);
			
			if(bubbles[i].id !== bubbles[j].id) {
				if(distance < bubbles[i].r + bubbles[j].r) {
					var newvx1 = (bubbles[i].vx * (bubbles[i].r - bubbles[j].r) + (2 * bubbles[j].r * bubbles[j].vx)) / (bubbles[i].r + bubbles[j].r);
					var newvy1 = (bubbles[i].vy * (bubbles[i].r - bubbles[j].r) + (2 * bubbles[j].r * bubbles[j].vy)) / (bubbles[i].r + bubbles[j].r);
					
					var newvx2 = -(bubbles[j].vx * (bubbles[i].r - bubbles[j].r) + (2 * bubbles[j].r * bubbles[j].vx)) / (bubbles[i].r + bubbles[j].r);
					var newvy2 = -(bubbles[j].vy * (bubbles[i].r - bubbles[j].r) + (2 * bubbles[j].r * bubbles[j].vy)) / (bubbles[i].r + bubbles[j].r);
					
					bubbles[i].vx = newvx1;
					bubbles[i].vy = newvy1;
					bubbles[j].vx = newvx2;
					bubbles[j].vy = newvy2;
				}	
			}
		}
		
		//checks to see if the bubble will collide with the container, if so, it goes in the opposite direction
		if(bubbles[i].x - bubbles[i].r + bubbles[i].vx < container.x || bubbles[i].x + bubbles[i].r + bubbles[i].vx > container.x + container.width) {
			bubbles[i].vx = -bubbles[i].vx;
			bubbles[i].audio.volume = getPercentile(bubbles[i].id - 1)
			bubbles[i].audio.play();
		}
		if(bubbles[i].y + bubbles[i].r + bubbles[i].vy > container.y + container.height || bubbles[i].y - bubbles[i].r + bubbles[i].vy < container.y) {
			bubbles[i].vy = -bubbles[i].vy;
			bubbles[i].audio.volume = getPercentile(bubbles[i].id - 1)
			bubbles[i].audio.play();
		}
		
		//adds the labels to the bubbles
		c.font = '10px Arial';
		c.textAlign = 'center';
		c.textBaseline = 'middle';
		c.fillStyle = 'white';  
		c.fillText(labels[i], bubbles[i].x, bubbles[i].y); 
	}
	
	requestAnimationFrame(animation);
}

requestAnimationFrame(animation);

function goBack() {
	window.history.back();
}