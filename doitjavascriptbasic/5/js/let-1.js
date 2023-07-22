function calSum(n){
    let sum = 0;
    for (let i = 0; i < n + 1; i++){
        sum += i;
    }
    console.log(sum);
}

calSum(10);