// Complete the plusMinus function below.
let testArr = [1,1,0,-1,-1];

function plusMinus(arr) {
    let arrayLength = arr.length;
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0; 
    let returnArr = [];

    arr.forEach(numb => {
        if (numb < 0) {
            negativeCount += 1;
        } else if (numb > 0) {
            positiveCount += 1;
        } else if (numb ===0) {
            zeroCount += 1;
        }
    })
    console.log(positiveCount/arrayLength);
    console.log(negativeCount/arrayLength);
    console.log(zeroCount/arrayLength);
    return returnArr;

}

console.log(plusMinus(testArr));