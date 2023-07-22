// var btnRegister = document.querySelector("#btnRegister");
// btnRegister.addEventListener("click", newRegister, false);

function newRegister(){
    var newP = document.createElement("p");
    var userName = document.querySelector("#userName");
    var newText = document.createTextNode(userName.value);

    newP.appendChild(newText);

    var nameList = document.querySelector("#nameList");
    nameList.append(newP);
    userName.value = "";

    return false;
}