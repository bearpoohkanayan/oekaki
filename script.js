var cursorMode = 4;
var colorHistory;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

function draw() {
	background(0,0);
	stroke(255);
	
	var dd = dist(pmouseX,pmouseY, mouseX,mouseY)
	if (cursorMode==1){		//白
	    stroke(255);
	    strokeWeight(log(dd)*3);	
		strokeCap(PROJECT);			
		line(pmouseX,pmouseY, mouseX,mouseY)
	}else if(cursorMode==2){	//赤
		stroke('red');
		strokeWeight(log(dd)*10);
		strokeCap(ROUND);
		line(pmouseX,pmouseY, mouseX,mouseY)
	}else if(cursorMode==3){	//消しゴム
        stroke(100);
		strokeWeight(log(dd)*20);
		strokeCap(ROUND);
		line(pmouseX,pmouseY, mouseX,mouseY)
    }else if(cursorMode==4){	//ペン上げる
		stroke(0,0,0,0);
		strokeWeight(log(dd)*10);
		strokeCap(ROUND);
		line(pmouseX,pmouseY, mouseX,mouseY)
	}
	// ellipse(mouseX, mouseY, 20, 20);
}
function mousePressed() { 
	//クリック時
	colorHistory = cursorMode;
	console.log(colorHistory);

  	// cursorMode = floor(random(1,4));
  	cursorMode = 3;
	// console.log(cursorMode)
}

function mouseClicked() {
	cursorMode = colorHistory;
}




function keyPressed(){
	cursorMode=key;
	console.log(cursorMode)
	
}