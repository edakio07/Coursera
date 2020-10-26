retang = {
	posx : 200,
	posy : 100
}

function changecolor(){
	var dd1 = document.getElementById("c1");
	var dd2 = document.getElementById("c2");
	dd1.className="color1";
	dd2.className="color2";
}

function dored(){
	var canvas1 = document.getElementById("c1");
	canvas1.style.backgroundColor="red";
	var ctx = canvas1.getContext("2d");
	ctx.clearRect(0,0,canvas1.width,canvas1.height);
}

function doblue(){
	var canvas1 = document.getElementById("c1");
	canvas1.style.backgroundColor="blue";
	var ctx = canvas1.getContext("2d");
	ctx.fillStyle = "yellow";
	ctx.fillRect(10,10,50,15);
	ctx.fillStyle = "black";
	ctx.font = "10px, Arial";
	ctx.fillText("hello",20,20);
}

function drawRec(event){
	var canvas2 = document.getElementById("c2");
	var ctx = canvas2.getContext("2d");
	var rect = canvas2.getBoundingClientRect();
    var left = rect.left// + window.scrollX;
    var top = rect.top// + window.scrollY;
	var x = event.clientX-left;
  	var y = event.clientY-top;
  	areaL = {
  		t : retang.posy-5,
  		r : retang.posx+5,
  		b : retang.posy+25,
  		l : retang.posx-5
  	}
  	areaT = {
  		t : retang.posy-5,
  		r : retang.posx+25,
  		b : retang.posy+5,
  		l : retang.posx-5
  	}
  	areaR = {
  		t : retang.posy-5,
  		r : retang.posx+25,
  		b : retang.posy+25,
  		l : retang.posx+15
  	}
  	areaB = {
  		t : retang.posy+15,
  		r : retang.posx+25,
  		b : retang.posy+25,
  		l : retang.posx-5
  	}
  	if (x < areaL.r && x > areaL.l && y < areaL.b && y > areaL.t){
  		retang.posx += 5;
  	}
  	if (x < areaR.r && x > areaR.l && y < areaR.b && y > areaR.t) {
  		retang.posx -= 5;
  	}
  	if (x < areaT.r && x > areaT.l && y < areaT.b && y > areaT.t) {
  		retang.posy += 5;
  	}
  	if (x < areaB.r && x > areaB.l && y < areaB.b && y > areaB.t) {
  		retang.posy -= 5;
  	}
  	if (retang.posx > canvas2.width-25) {
  		retang.posx = canvas2.width-25;
  	}
  	if (retang.posy > canvas2.height-25) {
  		retang.posy = canvas2.height-25;
  	}
  	if (retang.posx < 5) {
  		retang.posx = 5;
  	}
  	if (retang.posy < 5) {
  		retang.posy = 5;
  	}
 	ctx.clearRect(0,0,canvas2.width,canvas2.height);
 	ctx.fillStyle="green";
 	ctx.fillRect(retang.posx,retang.posy,20,20);
// 	var coor = "X coords: " + x + ", Y coords: " + y;
// 	document.getElementById("coord").innerHTML = coor;

}

function erase(){
	document.getElementById("coord").innerHTML = "";
}

function drawform(){
	var canvas2 = document.getElementById("c2");
	var ctx = canvas2.getContext("2d");
	ctx.fillStyle="green";
	ctx.fillRect(retang.posx,retang.posy,20,20);
}