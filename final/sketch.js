function setup() {
	createCanvas(1000, 720);
    
    //image
    fuck = loadImage("pool.jpg");
    
background("white");
    //left side
    fill("black");
    rect( 0, 0, width/2, height);
    
    //heading for left side of the screen
    var heading = "Introduction";
    var intro = "This project will explain briefly different swimming techniques as well as swim wear used in a competitive environment. I will be going over Freestyle, Backstroke, Breaststroke, Butterfly, Swim caps, Goggles, and the shit you wear under.";
    fill("white");
    textSize(30);
    text(heading, 160, 50);
    text(intro, 40, 100, 450, height);
}
function draw() {
    image(fuck, 500, 200, 500, 400);
    }


