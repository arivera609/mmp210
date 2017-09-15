function setup() { 
	createCanvas(640, 480);
	background("lightblue");
	noStroke();
	
var base = "#543100";
var treex = 100;
var treey = 200;
var treew = 80;
var treeh = 250;
var leavesbase = "green";
var leavesx = 140;
var leavesy = 170;
var leavesw = 230;
var leavesh = 200;
var rootbase = "#543101";
var treerootx1 = 140;
var treerooty1 = 410;
var treerootx2 = 30;
var treerooty2 = 500;
var treerootx3 = 250;
var treerooty3 = 500;
var applebase = "red";
var apple1x = 100;
var apple1y = 130;
var apple1w = 30;
var apple1h = 30;
var apple2x = 190;
var apple2y = 200;
var apple2w = 20;
var apple2h = 20;
var grassbase = "#8adb6f";
var grassx = 0;
var grassy = 450;
var grassy = 460;
var grassw = 1000;
var grassh = 1000;
var holebase = "black";
var holex = 160 ;
var holey = 320;
var holew = 20;
var holeh = 35;
var sunbase = "yellow";
var sunx = 640 ;
var suny = 20;
var sunw = 150;
var sunh = 150;

fill(base);
rect(treex, treey, treew, treeh);
fill(leavesbase);
ellipse(leavesx, leavesy, leavesw, leavesh);
fill(rootbase);
triangle(treerootx1, treerooty1, treerootx2, treerooty2, treerootx3, treerooty3);
fill(applebase);
ellipse(apple1x, apple1y, apple1w, apple1h);
ellipse(apple2x, apple2y, apple2w, apple2h);
fill(grassbase);
rect(grassx, grassy, grassw, grassh);
fill(holebase);
ellipse(holex, holey, holew, holeh);
fill(sunbase);
ellipse(sunx, suny, sunw, sunh);


}