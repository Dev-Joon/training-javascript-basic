var numVal1 =  parseInt(prompt("비교할 첫 번째 숫자"));
var numVal2 =  parseInt(prompt("비교할 두 번째 숫자"));

compareVal(numVal1, numVal2)

function compareVal(numVal1, numVal2){
    if (numVal1 > numVal2){
        alert("첫 번째 숫자 " + numVal1 + "이 더 큽니다.");
    }
    else if(numVal1 < numVal2){
        alert("두 번째 숫자 " + numVal2 + "이 더 큽니다.");
    }
    else{
        alert("같습니다");
    }
}