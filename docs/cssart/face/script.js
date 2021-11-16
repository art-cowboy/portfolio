// document.addEventListener('mousemove', function(e) {
//   let body = document.getElementById('jseye');
//   let iris = document.getElementById('iris');
//   let left = e.offsetX;
//   let top = e.offsetY;
//   iris.style.left = left + 'px';
//   iris.style.top = top + 'px';
// });

let button1 = document
	.getElementById("color1")
	.addEventListener("click", changeColor1);
let button2 = document
	.getElementById("color2")
	.addEventListener("click", changeColor2);
let button3 = document
	.getElementById("color3")
	.addEventListener("click", changeColor3);
// let button4 = document
// 	.getElementById("skin1")
// 	.addEventListener("click", changeSkin1);
// let button5 = document
// 	.getElementById("skin2")
// 	.addEventListener("click", changeSkin2);
// let button6 = document
// 	.getElementById("skin3")
// 	.addEventListener("click", changeSkin3);
// let button7 = document
// 	.getElementById("skin4")
// 	.addEventListener("click", changeSkin4);
 
let x = document.querySelector(":root");
// let xx = getComputedStyle(x);

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

// function changeSkin1() {
// 	x.style.setProperty("--face1", "rgb(255, 227, 194)");
// 	x.style.setProperty("--face2", "rgb(255, 246, 235)");
// 	x.style.setProperty("--face3", "rgba(255, 246, 235, 0.7)");
// 	x.style.setProperty("--face4", "rgba(255, 246, 235, 0)");
// 	x.style.setProperty("--face5", "rgba(255, 227, 194, 0)");
// }

// function changeSkin2() {
// 	x.style.setProperty("--face1", "rgb(201, 147, 81)");
// 	x.style.setProperty("--face2", "rgb(241, 195, 125)");
// 	x.style.setProperty("--face3", "rgba(241, 195, 125, 0.7)");
// 	x.style.setProperty("--face4", "rgba(241, 195, 125, 0)");
// 	x.style.setProperty("--face5", "rgba(201, 147, 81, 0)");
// }
// function changeSkin3() {
// 	x.style.setProperty("--face1", "rgb(255, 227, 194)");
// 	x.style.setProperty("--face2", "rgb(255, 246, 235)");
// 	x.style.setProperty("--face3", "rgba(255, 246, 235, 0.7)");
// 	x.style.setProperty("--face4", "rgba(255, 246, 235, 0)");
// 	x.style.setProperty("--face5", "rgba(255, 227, 194, 0)");
// }
// function changeSkin4() {
// 	x.style.setProperty("--face1", "rgb(255, 227, 194)");
// 	x.style.setProperty("--face2", "rgb(255, 246, 235)");
// 	x.style.setProperty("--face3", "rgba(255, 246, 235, 0.7)");
// 	x.style.setProperty("--face4", "rgba(255, 246, 235, 0)");
// 	x.style.setProperty("--face5", "rgba(255, 227, 194, 0)");
// }
