toDoList = document.querySelectorAll(".check")

for (var i = 0; i < toDoList.length; i++){
    toDoList[i].addEventListener("click", function(){
        this.parentNode.style.color = "#ccc";
    });
}


