function setup() {
	createCanvas(640, 480);
    noStroke();
}

function draw() {
        
        //if statement left side of the screen
	if (mouseX < width/2) {
        background("blue");
        
        
        
        fill("black");
        textSize(50);
        text("Fish", width/2, height/2)
        
        //small fish
        fill("black");
        
        //small fish's body
		ellipse(mouseX, mouseY + 50, 30, 15);
        
        //small fish's top tail fin
        ellipse(mouseX - 17, mouseY + 53, 15, 5); 
        
        //small fish's bottom tail fin
        ellipse(mouseX - 17, mouseY + 49, 15, 5); 
        
        //small fish's eye
        fill("white");
        ellipse(mouseX + 8, mouseY + 48, 5, 5); 
        
        fill("black");
        //left plant root
        rect(100 , 420, 30, 200);
        
        //right plant root
        rect(200 , 420, 30, 200);
        
        fill("pink");
        //left plant pink circle
        ellipse(117, 400, 70, 50);
        
        //right plant pink circle
        ellipse(217, 400, 70, 50);
        
        fill("purple");
        //left plant purple dots
        ellipse(117, 410, 10, 10);
        ellipse(117, 390, 10, 10);
        ellipse(100, 400, 10, 10);
        
        //right plant purple dots
        ellipse(227, 410, 10, 10);
        ellipse(207, 390, 10, 10);
        ellipse(210, 400, 10, 10);
        
        //else statement is the right side of the screen
	} else {
        background("darkblue");
        
         //shark
        fill("black");
        
        //head fin
		triangle(mouseX + 20, mouseY + 50,  mouseX + 48, mouseY + 20, mouseX + 86, mouseY + 55);
        
        //top tail fin
        triangle(mouseX - 20, mouseY + 50,  mouseX - 53, mouseY + 60, mouseX - 80, mouseY + 15);
        
        //bottom tail fin
        triangle(mouseX + 45, mouseY + 50,  mouseX - 56, mouseY + 60, mouseX - 80, mouseY + 95);
        
        //shark body
        ellipse(mouseX + 20, mouseY + 60, 150, 40);
        
        //circle blending in with the background to curve head fin
        fill("darkblue");
        ellipse(mouseX + 28, mouseY + 15, 50);
        
        //shark's eye
        fill("white");
        arc(mouseX + 70, mouseY + 50, 10, 10, 0, PI+QUARTER_PI - 0.4, CHORD);
       
        //rock
        fill("black");
        
        //right rock
        ellipse(650, 400, 200, 200);
        
        //bottom rock
        ellipse(450, 454, 500, 100);
        
        fill("white");
        textSize(textSize);
        text("Shark", width/2, height/2);
        
        
	}

	
}