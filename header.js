var alfa = 0;
//int step = 10;

var Width = document.getElementById("innerHeader").offsetWidth;
var Height = document.getElementById("innerHeader").offsetHeight;
var paddingHeight = Height/20
var limHeight = Height - paddingHeight*2

var xLeft = Width/3;
var xRight = 2*(Width/3);

var counter = 0;
var k = 1;
var j = 0;
var Y = 0;
var X = 0;
var period = 0;
var lambda = 0;

var lambdaMin = 200; //pixels
var lambdaMax = 400; //pixels
var periodMin = 60; //frames
var periodMax = 480; //frames
var periodGolden = 240; //frames

var xLeftPoints = new Array(0);
var yLeftPoints = new Array(0);
var xRightPoints = new Array(0);
var yRightPoints = new Array(0);

var xLeftPoints2 = new Array(0);
var yLeftPoints2 = new Array(0);
var xRightPoints2 = new Array(0);
var yRightPoints2 = new Array(0);

function setup(){
    var headerCanvas = createCanvas(Width,Height);
    headerCanvas.parent("innerHeader");
    background(0);
    frameRate(60);
    pixelDensity(displayDensity());
}

function draw(){
    if (mouseY < Height*1.5) {
	counter = counter + 1;
	background(0);
	stroke(255);
	strokeWeight(4);
	
	xLeftPoints.push(xLeft);
	yLeftPoints.push((sin(alfa)*(limHeight/2)+limHeight/2)+paddingHeight);	
	xRightPoints.push(xRight);
	yRightPoints.push((sin(alfa)*(limHeight/2)+limHeight/2)+paddingHeight);
	
	xLeftPoints2.push(xLeft);
	yLeftPoints2.push((sin(-alfa)*(limHeight/2)+limHeight/2)+paddingHeight);
	xRightPoints2.push(xRight);
	yRightPoints2.push((sin(-alfa)*(limHeight/2)+limHeight/2)+paddingHeight);
	
	//x = x + step;
	var headerMouseY = mouseY
	if (headerMouseY > Height) {
	    headerMouseY = Height;
	}
	
	Y = (abs(headerMouseY-(Height/2))/((Height/2)));
	X = 1-(abs(mouseX-((Width)/2)))/((Width)/2);
	period = periodMin + Y*(periodMax - periodMin);
	alfa = alfa + (2*PI/(period)); //*step;
	lambda = lambdaMin + X*(lambdaMax-lambdaMin);

	print(period + "//");
	
	if (k == 1) {
	    xLeftPoints.unshift(xLeftPoints[0] + (lambda)/(period));
	    yLeftPoints.unshift((sin(-alfa)*(limHeight/2)+limHeight/2)+paddingHeight);
	    xRightPoints.unshift(xRightPoints[0] - (lambda)/(period));
	    yRightPoints.unshift((sin(-alfa)*(limHeight/2)+limHeight/2)+paddingHeight);
	    xLeftPoints2.unshift(xLeftPoints2[0] + (lambda)/(period));
	    yLeftPoints2.unshift((sin(alfa)*(limHeight/2)+limHeight/2)+paddingHeight);
	    xRightPoints2.unshift(xRightPoints2[0] - (lambda)/(period));
	    yRightPoints2.unshift((sin(alfa)*(limHeight/2)+limHeight/2)+paddingHeight);
	}
	for(var i = 0; i < xLeftPoints.length; i++) {
	    xLeftPoints[i] = xLeftPoints[i] + (lambda)/(period);
	    //stroke(255,0,0);
	    point(xLeftPoints[i],yLeftPoints[i]);
	    //stroke(255);
	    xRightPoints[i] = xRightPoints[i] - (lambda)/(period);
	    point(xRightPoints[i],yRightPoints[i]);
	    xLeftPoints2[i] = xLeftPoints2[i] + (lambda)/(period);
	    point(xLeftPoints2[i],yLeftPoints2[i]);
	    xRightPoints2[i] = xRightPoints2[i] - (lambda)/(period);
	    point(xRightPoints2[i],yRightPoints2[i]);
	}
	//j = 0;
	while (xLeftPoints.length > int(periodMax)) {
	    k = 0;
	    //j = 1;

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
}
