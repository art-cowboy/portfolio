 // reference to iframe element container from second (innermost) iframe
 let iframe1 = window.frameElement;
 // reference to container's document, ie the first iframe aka middleman
 let doc1 = iframe1.ownerDocument;
 
 //reference iframe elemnet container of first, middleman iframe 
 let iframe2 = parent.window.frameElement;
 //reference to container's document, aka the main page
 let doc2 = iframe2.ownerDocument;
 

//get the lil buttons
let changee1 = document.getElementById("pix1")
.addEventListener("click", change1);

let changee2 = document.getElementById("pix2")
.addEventListener("click", change2);

let changeee3 = document.getElementById("pix3")
.addEventListener("click", change3);

let changee4 = document.getElementById("pix4")
.addEventListener("click", change4);

let changee5 = document.getElementById("pix5")
.addEventListener("click", change5);

let changee6 = document.getElementById("pix6")
.addEventListener("click", change6);

let changee7 = document.getElementById("pix7")
.addEventListener("click", change7);

let changee8 = document.getElementById("pix8")
.addEventListener("click", change8);

let changee9 = document.getElementById("pix9")
.addEventListener("click", change9);

let changee10 = document.getElementById("pix10")
.addEventListener("click", change10);

let changee11 = document.getElementById("pix11")
.addEventListener("click", change11);

let changee12 = document.getElementById("pix12")
.addEventListener("click", change12);

let changee13 = document.getElementById("pix13")
.addEventListener("click", change13);

let changee14 = document.getElementById("pix14")
.addEventListener("click", change14);

let changee15 = document.getElementById("pix15")
.addEventListener("click", change15);

function change1(){
    console.log("im working")
    doc2.body.style.backgroundImage = "url(../misc/kidpix/kidpix-clark1-full.png)";
    doc2.body.style.backgroundSize = "cover";
}
function change2(){
    console.log("im working")
    doc2.body.style.backgroundImage = "url(../misc/kidpix/kidpix-clark2-full.png)";
    doc2.body.style.backgroundSize = "cover";
}
function change3(){
    console.log("im working")
    doc2.body.style.backgroundImage = "url(../misc/kidpix/kidpix-clark3-full.png)";
    doc2.body.style.backgroundSize = "cover";
}
function change4(){
    console.log("im working")
    doc2.body.style.backgroundImage = "url(../misc/kidpix/kidpix-clark4-full.png)";
    doc2.body.style.backgroundSize = "cover";
}
function change5(){
    console.log("im working")
    doc2.body.style.backgroundImage = "url(../misc/kidpix/kidpix-clark5-full.png)";
    doc2.body.style.backgroundSize = "cover";
}
function change6(){
    console.log("im working")
    doc2.body.style.backgroundImage = "url(../misc/kidpix/kidpix-clark6-full.png)";
    doc2.body.style.backgroundSize = "cover";
}
function change7(){
    console.log("im working")
    doc2.body.style.backgroundImage = "url(../misc/kidpix/kidpix-clark7-full.png)";
    doc2.body.style.backgroundSize = "cover";
}
function change8(){
    console.log("im working")
    doc2.body.style.backgroundImage = "url(../misc/kidpix/kidpix-clark8-full.png)";
    doc2.body.style.backgroundSize = "cover";
}
function change9(){
    console.log("im working")
    doc2.body.style.backgroundImage = "url(../misc/kidpix/kidpix-clark9-full.png)";
    doc2.body.style.backgroundSize = "cover";
}

function change10(){
    console.log("im working")
    doc2.body.style.backgroundImage = "url(../misc/kidpix/kidpix-clark10-full.png)";
    doc2.body.style.backgroundSize = "cover";
}
function change11(){
    console.log("im working")
    doc2.body.style.backgroundImage = "url(../misc/kidpix/kidpix-clark11-full.png)";
    doc2.body.style.backgroundSize = "cover";
}
function change12(){
    console.log("im working")
    doc2.body.style.backgroundImage = "url(../misc/kidpix/kidpix-clark12-full.png)";
    doc2.body.style.backgroundSize = "cover";
}
function change13(){
    console.log("im working")
    doc2.body.style.backgroundImage = "url(../misc/kidpix/kidpix-clark13-full.png)";
    doc2.body.style.backgroundSize = "cover";
}
function change14(){
    console.log("im working")
    doc2.body.style.backgroundImage = "url(../misc/kidpix/kidpix-clark14-full.png)";
    doc2.body.style.backgroundSize = "cover";
}
function change15(){
    console.log("im working")
    doc2.body.style.backgroundImage = "url(../misc/kidpix/kidpix-clark15-full.png)";
    doc2.body.style.backgroundSize = "cover";
}