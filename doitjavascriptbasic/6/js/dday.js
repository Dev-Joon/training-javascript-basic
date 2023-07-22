var now = new Date();
var firstday = new Date(prompt("처음 만난 날짜를 입력하세요.(YYYY-MM-DD)"));

var toNow = now.getTime();
var toFirst = firstday.getTime();

var passedTIme = toNow - toFirst;
var passedDay = Math.round(passedTIme / (1000 * 60 * 60 * 24));

document.querySelector("#accent").innerHTML = passedDay + "일";

// var future = toFirst + 100 * (1000 * 60 * 60 * 24);
// var someday = new Date(future);

// var year = someday.getFullYear();
// var month = someday.getMonth() + 1;
// var day = someday.getDate();

document.querySelector("#date100").innerHTML = getSomeday(100);

document.querySelector("#date200").innerHTML = getSomeday(200);

document.querySelector("#date365").innerHTML = getSomeday(365);

document.querySelector("#date500").innerHTML = getSomeday(500);

function getSomeday(afterday){
    let future = toFirst + afterday * (1000 * 60 * 60 * 24);
    let someday = new Date(future);

    var afterDate = someday.getFullYear() + "년 " + (someday.getMonth() + 1) + "월 " + someday.getDate() + "일";

    return afterDate;
}

