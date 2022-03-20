 // reference to iframe element container from second (innermost) iframe
let iframe2 = window.frameElement;
// reference to container's document, ie the first iframe aka middleman
let doc2 = iframe2.ownerDocument;

//reference iframe elemnet container of first, middleman iframe 
let iframe1 = parent.window.frameElement;
//reference to container's document, aka the main page
let doc1 = iframe1.ownerDocument;

let change = document.getElementById("change")
.addEventListener("click",changeBg);

let bg = doc1.getElementById("main-page");

function changeBg(){
    console.log("this works???");
    bg.style.backgroundImage = "url(balls.png)";
}

function testLog(){
    console.log("hello");
}

