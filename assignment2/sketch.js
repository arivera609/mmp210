// self portrait
function setup() { 
	createCanvas(640, 480);
	background("tan");
	noStroke();
	
var base = "yellow";
var parts = "black";
var eyeball = "white";

// head
fill(base);
ellipse(300, 300, 300, 300);

// eyes
fill(eyeball);
ellipse(350, 225, 50, 50);
ellipse(250, 225, 50, 50);
fill(parts);
ellipse(350, 225, 30, 40);
ellipse(250, 225, 30, 40);

// eyebrows
fill(parts);
rect(330, 175, 50, 10);
rect(224, 175, 50, 10);

// mouth
fill(parts);
rect(250, 370, 100, 10);

// nose
stroke(parts);
strokeWeight(5);
line(300, 350, 350, 300);
line(300, 300, 350, 300);

// ear
fill(base);
arc(444, 280, 70, 90, PI+1, HALF_PI+0.4);
arc(153, 280, 70, 90, PI+4, HALF_PI+3.8);
}