function setup() {
	createCanvas(640, 480);
    
    design();
    
    
    

}
function design() {
    
    //background red
    var br = random(20, 80);
    
    //background green
    var bg = random(20, 80);
    
    //background blue
    var bb = random(0);
    
    //background
    background(br, bg, bb);
    
    //edge red
    var er = random(0, 200)
    
    //edge green
    var eg = random ( 0, 100)
    
    //edge blue
    var eb = random ( 0, 20)
    
    //edge no fill
    noFill();
    
    //edge thiccness
    strokeWeight(15);
    
    //edge color
    stroke(er, eg, eb);
    
    //the actual edge
    rect(0, 0, width, height)
    
    
    var x = 50;
    var space = 50;
    
     // for ( var x = 50; x < width; x += space ) {
    //     ellipse(x, height/2, 40);
    //  }
    
    var columnSize = width/5;
    var rowSize = height/4
    
    for (var x = 0; x <= width; x += columnSize) {
    
    
        for (var y = 0; y <= height; y += rowSize){
            strokeWeight(2);
            //red
            var r = random(90, 180)
        
            //green
            var g = random( 40, 130)
            
            //blue
            var b = random(0);
            
            //triangle color
            fill(r, g, b);
            
            stroke(br, bg, bb);
            
            //main triangle
            triangle(x + 30, y + 75, x + 58, y + 20, x + 86, y + 75);
            
            //left upper triangle
            triangle(x + 25, y + 40, x + 47, y + 40, x + 30, y + 72);
            
            //right upper triangle
            triangle(x + 69, y + 40, x + 93, y + 40, x + 85, y + 72);
            
            //left lower triangle
            triangle(x + 10, y + 66, x + 25, y + 51, x + 30, y + 74);
            
            //right lower triangle
            triangle(x + 106, y + 66, x + 92, y + 51, x + 86, y + 74);
            
            //stem
            rect(x + 55, y + 75, 5, 25)
            
            
            
    
    }
    
    }
}

function mouseClicked(){
    design();
}
