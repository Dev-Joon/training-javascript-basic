let numVal1 = parseInt(prompt("첫 번째 입력값은?"));
let numVal2 = parseInt(prompt("두 번째 입력값은?"));

let result = sumMulti(numVal1, numVal2);

console.log(result);

function sumMulti(a, b){
    if (a == b){
        return a * b;
    }
    else{
        return a + b;
    }
}