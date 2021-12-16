
//buttons

let button1 = document
	.getElementById("color1")
	.addEventListener("click", changeColor1);
let button2 = document
	.getElementById("color2")
	.addEventListener("click", changeColor2);
let button3 = document
	.getElementById("color3")
	.addEventListener("click", changeColor3);
let button4 = document
	.getElementById("skin1")
	.addEventListener("click", changeSkin1);
let button5 = document
	.getElementById("skin2")
	.addEventListener("click", changeSkin2);
let button6 = document
	.getElementById("skin3")
	.addEventListener("click", changeSkin3);
let button7 = document
	.getElementById("skin4")
	.addEventListener("click", changeSkin4);
let clear = document
	.getElementById("clearbutton")
	.addEventListener("click", clearAll);
 


//class selectors


let x = document.querySelector(":root");



//functions

function changeColor1() {
	x.style.setProperty("--lip1", "rgb(199, 0, 192)");
	x.style.setProperty("--lip2", "rgba(199, 0, 192,0)");
	x.style.setProperty("--lip3", "rgb(255, 20, 169)");

	x.style.setProperty("--blush1", "rgb(252, 66, 206)");
	x.style.setProperty("--blush2", "rgba(252, 66, 206, .6)");
	x.style.setProperty("--blush3", "rgba(252, 66, 206, 0)");

	x.style.setProperty("--eye1", "rgb(38, 136, 222)");
	x.style.setProperty("--eye2", "rgba(38, 136, 222,0)");
	x.style.setProperty("--eye3", "rgb(177, 252, 250)");
	x.style.setProperty("--eye4", "rgb(3, 248, 252)");

	x.style.setProperty("--iris1", "rgb(168, 65, 49)");
	x.style.setProperty("--iris2", "rgb(64, 1, 1)");

	x.style.setProperty("--bg1", "aliceblue");
	x.style.setProperty("--bg2", "violet");

} 

function changeColor2() {
	x.style.setProperty("--lip1", "red");
	x.style.setProperty("--lip2", "rgba(255, 0, 0,0)");
	x.style.setProperty("--lip3", "rgb(255, 153, 153)");

	x.style.setProperty("--blush1", "rgb(255, 0, 34)");
	x.style.setProperty("--blush2", "rgba(255, 0, 0, .6)");
	x.style.setProperty("--blush3", "rgba(255, 0, 0, 0)");

	x.style.setProperty("--eye1", "rgb(170, 0, 255)");
	x.style.setProperty("--eye2", "rgba(170, 0, 255, 0)");
	x.style.setProperty("--eye3", "rgb(250, 194, 255)");
	x.style.setProperty("--eye4", "rgb(230, 71, 245)");

	x.style.setProperty("--iris1", "rgb(3, 252, 53)");
	x.style.setProperty("--iris2", "rgb(43, 202, 217)");

	x.style.setProperty("--bg1", "palevioletred");
	x.style.setProperty("--bg2", "lavender");
}

function changeColor3() {
	x.style.setProperty("--lip1", "#5c1803");
	x.style.setProperty("--lip2", "rgba(92, 24, 3,0)");
	x.style.setProperty("--lip3", "rgb(255, 77, 61)");

	x.style.setProperty("--blush1", "rgb(242, 96, 34)");
	x.style.setProperty("--blush2", "rgba(242, 96, 34, .6)");
	x.style.setProperty("--blush3", "rgba(242, 96, 34, 0)");

	x.style.setProperty("--eye1", "rgb(10, 145, 0)");
	x.style.setProperty("--eye2", "rgba(10, 145, 0, 0)");
	x.style.setProperty("--eye3", "rgb(255, 248, 110)");
	x.style.setProperty("--eye4", "rgb(120, 255, 89)");

	x.style.setProperty("--iris1", "rgb(3, 248, 252)");
	x.style.setProperty("--iris2", "rgb(75, 124, 209)");

	x.style.setProperty("--bg1", "sandybrown");
	x.style.setProperty("--bg2", "darkseagreen");
}


function changeSkin1() {
	x.style.setProperty("--face1", "rgb(255, 227, 194)");
	x.style.setProperty("--face2", "rgb(255, 246, 235)");
	x.style.setProperty("--face3", "rgba(255, 246, 235, 0.7)");
	x.style.setProperty("--face4", "rgba(255, 246, 235, 0)");
	x.style.setProperty("--face5", "rgba(255, 227, 194, 0)");
	x.style.setProperty("--face6", "rgb(255, 255, 255)");
	x.style.setProperty("--face7", "rgba(255, 227, 194, 0.3)");
	x.style.setProperty("--face8", "rgba(187, 142, 112, 0.3)");
}

function changeSkin2() {
	x.style.setProperty("--face1", "rgb(232, 176, 139)");
	x.style.setProperty("--face2", "rgb(246, 202, 172)");
	x.style.setProperty("--face3", "rgba(246, 202, 172, 0.7)");
	x.style.setProperty("--face4", "rgba(246, 202, 172, 0)");
	x.style.setProperty("--face5", "rgba(232, 176, 139, 0)");
	x.style.setProperty("--face6", "rgb(249, 219, 199)");
	x.style.setProperty("--face7", "rgba(232, 176, 139, 0.3)");
	x.style.setProperty("--face8", "rgba(204, 130, 81, 0.3)");
}

function changeSkin3() {
	x.style.setProperty("--face1", "rgb(96, 55, 28)");
	x.style.setProperty("--face2", "rgb(119, 76, 47)");
	x.style.setProperty("--face3", "rgba(119, 76, 47, 0.7)");
	x.style.setProperty("--face4", "rgba(119, 76, 47, 0)");
	x.style.setProperty("--face5", "rgba(96, 55, 28, 0)");
	x.style.setProperty("--face6", "rgb(141, 99, 70)");
	x.style.setProperty("--face7", "rgba(96, 55, 28, 0.3)");
	x.style.setProperty("--face8", "rgba(25, 11, 2, .3)");
}

function changeSkin4() {
	x.style.setProperty("--face1", "rgb(88, 80, 191)");
	x.style.setProperty("--face2", "rgb(178, 149, 252)");
	x.style.setProperty("--face3", "rgba(178, 149, 252, 0.7)");
	x.style.setProperty("--face4", "rgba(178, 149, 252, 0)");
	x.style.setProperty("--face5", "rgba(88, 80, 191, 0)");
	x.style.setProperty("--face6", "rgb(189, 220, 255)");
	x.style.setProperty("--face7", "rgba(88, 80, 191, 0.3)");
	x.style.setProperty("--face8", "rgba(33, 0, 122, .3)");
}



//        color/\    
//        other \/

//buttons : button ID and then the funtion 

let earring1 = document
	.getElementById("earring1")
	.addEventListener("click", changeEarring1);

let earring2 = document
	.getElementById("earring2")
	.addEventListener("click", changeEarring2);

let earring3 = document
	.getElementById("earring3")
	.addEventListener("click", changeEarring3);

//getting the ID of the accessories

let pearl = document.querySelector("#pearl");
let star = document.querySelector("#star");
let diamond = document.querySelector("#diamond")

//function: the variable with the class, than the properties

function changeEarring1(){
	pearl.style.setProperty("display", "block");
	star.style.setProperty("display", "none");
	diamond.style.setProperty("display", "none");
	
}

function changeEarring2(){
	pearl.style.setProperty("display", "none");
	star.style.setProperty("display", "block");
	diamond.style.setProperty("display", "none");
}

function changeEarring3(){
	pearl.style.setProperty("display", "none");
	star.style.setProperty("display", "none");
	diamond.style.setProperty("display", "flex");
}




function clearAll(){

	//face colors
	x.style.setProperty("--lip1", "rgb(184, 81, 81)");
	x.style.setProperty("--lip2", "rgba(184, 81, 81,0)");
	x.style.setProperty("--lip3", "rgb(232, 114, 114)");

	x.style.setProperty("--blush1", "rgb(237, 159, 159)");
	x.style.setProperty("--blush2", "rgba(237, 159, 159, .6)");
	x.style.setProperty("--blush3", "rgba(237, 159, 159, 0)");

	x.style.setProperty("--eye1", "rgb(186, 117, 82)");
	x.style.setProperty("--eye2", "rgba(186, 117, 82,0)");
	x.style.setProperty("--eye3", "rgb(232, 189, 167)");
	x.style.setProperty("--eye4", "rgb(224, 192, 175)");

	x.style.setProperty("--iris1", "rgb(168, 65, 49)");
	x.style.setProperty("--iris2", "rgb(64, 1, 1)");

	x.style.setProperty("--bg1", "black");
	x.style.setProperty("--bg2", "white");


	//accessories

	pearl.style.setProperty("display", "none");
	star.style.setProperty("display", "none");
	diamond.style.setProperty("display", "none");

	//face

	x.style.setProperty("--face1", "rgb(232, 176, 139)");
	x.style.setProperty("--face2", "rgb(246, 202, 172)");
	x.style.setProperty("--face3", "rgba(246, 202, 172, 0.7)");
	x.style.setProperty("--face4", "rgba(246, 202, 172, 0)");
	x.style.setProperty("--face5", "rgba(232, 176, 139, 0)");
	x.style.setProperty("--face6", "rgb(249, 219, 199)");
	x.style.setProperty("--face7", "rgba(232, 176, 139, 0.3)");
	x.style.setProperty("--face8", "rgba(204, 130, 81, 0.3)");
}