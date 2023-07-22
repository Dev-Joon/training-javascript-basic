var myText = document.querySelector("#myText");

myText.addEventListener("click", changeStyle, false);

function changeStyle(){
    myText.style.fontSize = "20px";
    myText.style.color = "blue";
    myText.style.backgroundColor = "#ccc";

}