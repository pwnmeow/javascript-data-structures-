// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
    //code here
    return answer;
  }
  
function findFactorialIterative(number) {
    //code here
    let answer = 1;
    if(number === 2){
        answer =2;
    }
    for ( let i = 2; i <= number; i++){
        answer = answer * i;
    }
    console.log(answer)
    return answer;
    
    }
    findFactorialIterative(5)