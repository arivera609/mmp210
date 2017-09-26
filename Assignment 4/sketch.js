function setup(){
	createCanvas(600, 600);
    frameRate(60);
    text("Depending on where you click the color of the circle will change", 300, 300);
    
    
}

function draw() {
    
    var size = 200;
    
    background("white");
    text("Depending on where you click the color of the circle and text will change", 10, 20);
    ellipse(mouseX, mouseY, width/2 - size, height/2 - size );
}
function mousePressed(){
    
    fill(
        mouseX, //red
        mouseX/2, //green
        mouseY, //blue
    )
}
