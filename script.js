var cursorMode = 0;
var colorHistory;

function setup() {
	createCanvas(windowWidth, windowHeight*0.9);
	background(255);
}

function draw() {
	background(0,0);
	stroke(255);
	
	var dd = dist(pmouseX,pmouseY, mouseX,mouseY)
	if (cursorMode==1){		//1赤
	    stroke('red');
	    strokeWeight(log(dd)*5);	
		strokeCap(ROUND);			
		line(pmouseX,pmouseY, mouseX,mouseY)
	}else if(cursorMode==2){	//2オレンジ
		stroke('orange');
		strokeWeight(log(dd)*5);
		strokeCap(ROUND);
		line(pmouseX,pmouseY, mouseX,mouseY)

	}else if(cursorMode==3){	//3黄
		stroke('yellow');
		strokeWeight(log(dd)*5);
		strokeCap(ROUND);
		line(pmouseX,pmouseY, mouseX,mouseY)

	}else if(cursorMode==4){	//4緑
		stroke('green');
		strokeWeight(log(dd)*5);
		strokeCap(ROUND);
		line(pmouseX,pmouseY, mouseX,mouseY)

	}else if(cursorMode==5){	//5青
		stroke('blue');
		strokeWeight(log(dd)*5);
		strokeCap(ROUND);
		line(pmouseX,pmouseY, mouseX,mouseY)

	}else if(cursorMode==6){	//6藍
		stroke('Indigo');
		strokeWeight(log(dd)*5);
		strokeCap(ROUND);
		line(pmouseX,pmouseY, mouseX,mouseY)

	}else if(cursorMode==7){	//7紫
		stroke('purple');
		strokeWeight(log(dd)*5);
		strokeCap(ROUND);
		line(pmouseX,pmouseY, mouseX,mouseY)

	}else if(cursorMode==8){	//8黒
		stroke('black');
		strokeWeight(log(dd)*5);
		strokeCap(ROUND);
		line(pmouseX,pmouseY, mouseX,mouseY)

	}else if(cursorMode==9){	//9消しゴム
        stroke(255);
		strokeWeight(log(dd)*20);
		strokeCap(ROUND);
		line(pmouseX,pmouseY, mouseX,mouseY)
    }else if(cursorMode==0){	//0ペン上げる
		stroke(0,0,0,0);
		strokeWeight(log(dd)*1);
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
  	cursorMode = 9;
	// console.log(cursorMode)
}

function mouseClicked() {
	cursorMode = colorHistory;
}




function keyPressed(){
	cursorMode=key;
	console.log(cursorMode)
	
}