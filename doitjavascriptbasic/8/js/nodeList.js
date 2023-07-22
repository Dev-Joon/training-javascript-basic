var userName = document.querySelector("#userName");

var btn = document.querySelector("#btnInput");
btn.addEventListener("click", newRegister, false);

var nameList = document.querySelector("#nameList");


function newRegister(){
    var newP = document.createElement("p");
    var newText = document.createTextNode(userName.value);

    var newSpan = document.createElement("span");
    var newDel = document.createTextNode("X");
    
    newSpan.setAttribute("class", "del");
    newSpan.appendChild(newDel);
    newSpan.addEventListener("click", delRegister, false);

    newP.appendChild(newSpan);
    newP.appendChild(newText);

    // nameList.appendChild(newP);
    nameList.insertBefore(newP, nameList.children[0]);
    userName.value = "";
}

function delRegister(){
    if(this.parentNode.parentNode){
        this.parentNode.parentNode.removeChild(this.parentNode);
    }
}