
var bigPic = document.querySelector("#cup");
var smallPics = document.querySelectorAll(".small");

for (var i = 0; i < smallPics.length; i++){
    smallPics[i].onclick = function(event){
        bigPic.src = this.src;
    }
}


var view = document.querySelector("#desc>#view");
view.addEventListener("click", detailView, false);

var isShow = false;

function detailView(){
    if (isShow == true){
        document.querySelector("#detail").style.display = "block";
        view.innerHTML = "상세 설명 닫기";
        isShow = false;
    }
    else{
        document.querySelector("#detail").style.display = "none";
        view.innerHTML = "상세 설명 보기";
        isShow = true;
    }
}

