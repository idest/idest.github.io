var alfa = 0;
//int step = 10;

var Width = 1000;
var Height = 100;

var xLeft = Width/7;
var xRight = 6*(Width/7);

var lambdaMin = 100; //pixels
var lambdaMax = 400; //pixels
var periodMin = 240; //frames
var periodMax = 960; //frames

var xLeftPoints = new Array(0);
var yLeftPoints = new Array(0);
var xRightPoints = new Array(0);
var yRightPoints = new Array(0);

var xLeftPoints2 = new Array(0);
var yLeftPoints2 = new Array(0);
var xRightPoints2 = new Array(0);
var yRightPoints2 = new Array(0);

function setup(){
    createCanvas(Width,Height);
    background(0);
    frameRate(60);
    pixelDensity(displayDensity());
}

function draw(){
    background(0);
    stroke(150);
    strokeWeight(4);

    xLeftPoints.push(xLeft);
    yLeftPoints.push(sin(alfa)*(height/2)+height/2);
    xRightPoints.push(xRight);
    yRightPoints.push(sin(alfa)*(height/2)+height/2);
  
    xLeftPoints2.push(xLeft);
    yLeftPoints2.push(sin(-alfa)*(height/2)+height/2);
    xRightPoints2.push(xRight);
    yRightPoints2.push(sin(-alfa)*(height/2)+height/2);
  
    //x = x + step;
    var Y = (abs(mouseY-(Height/2))/((Height/2)));
    var X = 1-(abs(mouseX-((Width)/2)))/((Width)/2);
    var period = periodMin + Y*(periodMax - periodMin);
    alfa = alfa + (2*PI/(period)); //*step;
    var lambda = lambdaMin + X*(lambdaMax-lambdaMin);
  
    for(var i = 0; i < xLeftPoints.length; i++) {
	xLeftPoints[i] = xLeftPoints[i] + (lambda)/(period);
	point(xLeftPoints[i],yLeftPoints[i]);
	xRightPoints[i] = xRightPoints[i] - (lambda)/(period);
	point(xRightPoints[i],yRightPoints[i]);
	xLeftPoints2[i] = xLeftPoints2[i] + (lambda)/(period);
	point(xLeftPoints2[i],yLeftPoints2[i]);
	xRightPoints2[i] = xRightPoints2[i] - (lambda)/(period);
	point(xRightPoints2[i],yRightPoints2[i]);
    }
    if (xLeftPoints.length == int(Width)*1.5) {
	xLeftPoints.shift();
	yLeftPoints.shift();
	xRightPoints.shift();
	yRightPoints.shift();
	
	xLeftPoints2.shift();
	yLeftPoints2.shift();
	xRightPoints2.shift();
	yRightPoints2.shift();
    }
}
