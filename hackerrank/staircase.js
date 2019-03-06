// Complete the staircase function below.
const input = 6;

function staircase(n) {
    let result = []
    for (let i = 0; i < n; i++){
        result[i] = Array((n) - (i)).join(" ");
        result[i] = result[i].concat(`${Array(i+2).join('#')}`)
    }
    
    
    return result.join('\n')
}

console.log(staircase(input));