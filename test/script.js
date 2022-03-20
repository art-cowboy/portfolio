
let iframe1 = document.getElementById("iframe1");

// using reference to iframe obtained above
let win1 = iframe1.contentWindow; // reference to iframe's window
// reference to document in iframe
let doc1 = iframe1.contentDocument? iframe1.contentDocument:
        iframe1.contentWindow.document;
// reference to form named 'demoForm' in iframe
let test = doc1.getElementById('test')
.addEventListener("click", testLog);

let bg = document.getElementByClassName("bg");

function testLog(){
    console.log("okay we here rn");
    bg.style.backgroundImage = "url(balls.png)";
}

function changeBg(){
    // bg.style.backgroundImage = "url(https://picsum.photos/id/100/700)";
    console.log("pleeeaasseeeeeeee");
}