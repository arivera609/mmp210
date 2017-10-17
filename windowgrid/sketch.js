function setup() {
	createCanvas(640, 480);
    background("#7c3215");
    fill(255);
    noStroke();
    var x = 50;
    var space = 50;
    
     // for ( var x = 50; x < width; x += space ) {
    //     ellipse(x, height/2, 40);
    //  }
    
    var columnSize = width/2;
    var rowSize = height/2
    
    for (var x = 0; x <= width; x += columnSize) {
        line(x, 0, x, height);
    
        for (var y = 0; y <= height; y += rowSize){
            
            fill("tan");
            //main top rect
            rect(x + 74, y + 20, 170, 30);
            
            //bottom rects
            rect(x + 78, y + 193, 147, 10);
            rect(x + 93, y + 203, 117, 5);
            rect(x + 99, y + 208, 105, 3);
            
            
            
            
            //glass
            fill("#fff789")
            rect(x + 94, y + 50, 120, 143);
            
            //curve
            fill("#7c3215")
            ellipse(x + 67, y + 55, 30, 80)
            ellipse(x - 84, y + 50, 30, 80)
            ellipse(x - 117, y + 13, 60, 25)
            ellipse(x - 223, y + 14, 60, 25)
            
            
            //window lines
            fill("black");
            rect(x + 89, y + 50, 10, 143)
            rect(x + 204, y + 50, 10, 143)
            rect(x + 89, y + 50, 124, 10)
            rect(x + 89, y - 57, 124, 10)
            rect(x + 89, y + 140, 124, 8)
            rect(x + 169, y + 140, 3, 50)
            rect(x + 136, y + 140, 3, 50)
            rect(x + 89, y + 150, 80, 3)
            rect(x + 139, y + 155, 75, 3)
            rect(x + 89, y + 170, 80, 3)
            rect(x + 139, y + 175, 75, 3)
            
            //window shades
            fill("black")
            arc(x + 90, y + 60, 110, 170, 0, HALF_PI);
            arc(x + 210, y + 60, 110, 170, HALF_PI, PI);
            
            //designs
            fill("#603500");
            rect(x + 151, y + 20, 2, 20)
            ellipse(x + 133, y + 32, 15)
            ellipse(x + 170, y + 32, 15)
            ellipse(x + 215, y + 38, 5)
            ellipse(x + 87, y + 38, 5)
            
            //lightbulb
            fill("black")
            rect(x + 148, y + 60, 2, 20)
            ellipse(x + 149, y + 80, 10)
            
    
    }
    
    }

}