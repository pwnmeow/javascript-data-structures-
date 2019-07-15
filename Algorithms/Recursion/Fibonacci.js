// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n){
    //code here;
    let a =0 , b=1, temp = 0;
    console.log(0);
    console.log(1);
    for ( x= 1; x<n; x++){
      let temp = a+b ;
      let a = b;
       b = temp;
      console.log(b);
  
    }
  }
  fibonacciIterative(5);
  
  function fibonacciRecursive(n) {
    //code here;
  }
  
  fibonacciRecursive(3)